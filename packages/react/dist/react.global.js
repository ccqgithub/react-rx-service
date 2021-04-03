var RSReact = (function (exports, React, rxjs) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  const configSettings = {
      logLevel: process.env.NODE_ENV === 'development' ? 'info' : 'error',
      log: (msg, type = 'info') => {
          console && console[type] && console[type](msg);
      }
  };
  const config = (args) => {
      const keys = Object.keys(configSettings);
      keys.forEach((key) => {
          const t = args[key];
          if (t == undefined)
              return;
          configSettings[key] = t;
      });
  };
  const debug = (msg, type = 'info', condition = true) => {
      if (!condition)
          return;
      const levels = ['info', 'warn', 'error', 'never'];
      if (levels.indexOf(configSettings.logLevel) > levels.indexOf(type))
          return;
      configSettings.log(msg, type);
  };
  const empty = Symbol('empty');

  class Disposable {
      constructor() {
          this.$_disposers = [];
      }
      beforeDispose(disposer) {
          this.$_disposers.push(disposer);
      }
      dispose() {
          this.$_disposers.forEach((disposer) => {
              disposer();
          });
      }
  }

  class InjectionToken {
      constructor(desc, options) {
          this._desc = desc;
          this.factory = options?.factory;
      }
      toString() {
          return `InjectionToken: ${this._desc}`;
      }
  }

  const injectMetadataKey = Symbol('inject:constructor:params');
  /* class AppService {
    constructor(@Inject(MessageService, { optional: true }) messageService: MessageService) {
      console.log(messageService.getMessages());
    }
  } */
  const Inject = (provide, args = {}) => {
      return (target, propertyKey, parameterIndex) => {
          if (propertyKey !== undefined) {
              throw new Error('The @inject decorator can only be used on consturctor parameters!');
          }
          const existingParameters = Reflect.getOwnMetadata(injectMetadataKey, target) || [];
          existingParameters[parameterIndex] = {
              provide,
              optional: !!args.optional
          };
          Reflect.defineMetadata(injectMetadataKey, existingParameters, target);
      };
  };

  // service injector
  class Injector {
      constructor(providers = [], parent = null) {
          // parent injector
          this.parent = null;
          // 当前 injector 上的服务记录
          this.records = new Map();
          this.parent = parent;
          // provider records
          providers.forEach((provider) => {
              let record = null;
              if (typeof provider === 'object') {
                  // [{ provide, ...}]
                  const p = provider;
                  // check
                  const keys = ['useValue', 'useClass', 'useExisiting', 'useFactory'];
                  let apear = 0;
                  keys.forEach((key) => {
                      if (typeof p[key] !== 'undefined') {
                          apear++;
                      }
                  });
                  if (apear > 1) {
                      debug(`These keys [${keys.join(',')}] can only use one, other will be ignored!`, 'warn');
                  }
                  // normalize
                  const { useValue = null, ...rest } = p;
                  record = {
                      ...rest,
                      value: useValue
                  };
              }
              else if (typeof provider === 'function' &&
                  typeof provider.prototype
                      .constructor === 'function') {
                  // [class]
                  const p = provider;
                  record = {
                      provide: p,
                      useClass: p
                  };
              }
              if (!record) {
                  debug(provider);
                  throw new Error('Error provider onfig!');
              }
              const hasTokenFactory = record.provide instanceof InjectionToken && record.useFactory;
              if (typeof record.value === 'undefined' &&
                  !record.useClass &&
                  !record.useExisiting &&
                  !record.useFactory &&
                  !hasTokenFactory) {
                  debug(provider);
                  throw new Error('Error provider onfig!');
              }
              this.records.set(record.provide, record);
          });
      }
      isProvided(provide) {
          if (this.records.has(provide))
              return true;
          if (this.parent)
              return this.parent.isProvided(provide);
          return false;
      }
      get(provide) {
          const record = this.records.get(provide);
          // not register on self
          if (!record) {
              if (this.parent)
                  return this.parent.get(provide);
              return null;
          }
          // lazy init service
          if (typeof record.value === 'undefined') {
              this.$_initRecord(record);
          }
          return record.value || null;
      }
      $_initRecord(record) {
          // token 中的 factory 优先
          // injection token's default value
          if (record.provide instanceof InjectionToken && record.provide.factory) {
              const inject = (provide, opts = {}) => {
                  const { optional } = opts;
                  const service = this.get(provide);
                  if (!service && !optional) {
                      debug(record);
                      debug(InjectionToken);
                      throw new Error(`Can not find all deps in the DI tree when init the InjectionToken, please provide them before you use the InjectionToken's factory!`);
                  }
                  return service;
              };
              record.value = record.provide.factory(inject);
          }
          // use class
          if (record.useClass) {
              // find deps for the useClass
              const metadata = Reflect.getOwnMetadata(injectMetadataKey, record.useClass) || [];
              const deps = metadata.map((item) => {
                  if (typeof item !== 'object')
                      return undefined;
                  const { provide, optional } = item;
                  const service = this.get(provide);
                  if (!service && !optional) {
                      debug(record);
                      throw new Error(`Can not find all deps in the DI tree when init the useClass, please provide them before you use the useClass!`);
                  }
                  return service;
              });
              record.value = new record.useClass(...deps);
              return;
          }
          // alias: use exisiting
          if (record.useExisiting) {
              record.value = this.get(record.useExisiting);
              return;
          }
          // use factory
          if (record.useFactory) {
              const inject = (provide, opts = {}) => {
                  const { optional } = opts;
                  const service = this.get(provide);
                  if (!service && !optional) {
                      debug(record);
                      throw new Error(`Can not find all deps in the DI tree when init the useFactory, please provide them before you use the useFactory!`);
                  }
                  return service;
              };
              record.value = record.useFactory(inject);
          }
      }
      dispose() {
          for (const [, record] of this.records) {
              if (!record.value)
                  return;
              if (record.dispose) {
                  record.dispose(record.value);
              }
              else if (typeof record.value.dispose === 'function') {
                  record.value.dispose();
              }
          }
          this.parent = null;
          this.records.clear();
      }
  }

  // Service 服务基类
  /*
  type State = {
    user: User | null;
    message: any;
  }
  type Actions = {
    login: LoginParams;
    logout: undefined;
  };
  class AppService extends Service<State, Actions> {
    constructor() {
      super({
        state: {
          user: null
        },
        actions: ['login', 'logout']
      })

      // listen actions
      this.subscribe(
        this.$.login.pipe(
          map(v => v)
        ),
        {
          next: () => {},
          error: () => {}
        }
      )

      // send notifies
      this.$$.message.next('init');
    }
  }
  */
  class Service extends Disposable {
      constructor(args = {}) {
          super();
          // displayName, for debug
          this.displayName = '';
          // notify sources
          this.$$ = {};
          // actions
          this.$ = {};
          // init
          // displayName
          if (!this.displayName) {
              this.displayName = this.constructor.name;
              debug(`[Service ${this.displayName}]: For better debugging, you'd better add an attribute 'displayName' to each service class.`, 'warn');
          }
          // init state
          const initialState = (args.state || {});
          Object.keys(initialState).forEach((key) => {
              if (initialState[key] === undefined || initialState[key] === empty) {
                  this.$$[key] = new rxjs.Subject();
              }
              else {
                  this.$$[key] = new rxjs.BehaviorSubject(initialState[key]);
              }
          });
          // init actions
          const actions = args.actions || [];
          actions.forEach((key) => {
              this.$[key] = new rxjs.Subject();
          });
          // debug
          // debugs: update state
          Object.keys(this.$$).forEach((key) => {
              this.subscribe(this.$$[key], {
                  next: (v) => {
                      debug(`[Service ${this.displayName}]: set new state [${key}].`, 'info');
                      debug(v, 'info');
                  }
              });
          });
          // debugs: new action
          Object.keys(this.$).forEach((key) => {
              this.subscribe(this.$[key], {
                  next: (v) => {
                      debug(`[Service ${this.displayName}]: receive new action [${key}].`, 'info');
                      debug(v, 'info');
                  }
              });
          });
      }
      // state
      get state() {
          const state = {};
          Object.keys(this.$$).forEach((key) => {
              const source = this.$$[key];
              if (source instanceof rxjs.BehaviorSubject) {
                  state[key] = source.value;
              }
          });
          return state;
      }
      subscribe(ob, ...args) {
          const subscription = ob.subscribe(...args);
          this.beforeDispose(() => {
              subscription.unsubscribe();
          });
      }
  }

  const ServiceContext = React.createContext(new Injector());
  const ServiceProvider = (props) => {
      const parentInjector = React.useContext(ServiceContext);
      const { providers = [], children } = props;
      const injector = new Injector(providers, parentInjector);
      return (React__default.createElement(ServiceContext.Provider, { value: injector }, children));
  };
  const ServiceConsumer = (props) => {
      const injector = React.useContext(ServiceContext);
      const getService = (provide, opts = {}) => {
          const { optional = false } = opts;
          const service = injector.get(provide);
          if (!service && !optional) {
              debug(provide, 'error');
              throw new Error(`Can not find the service, you provide it?`);
          }
      };
      return typeof props.children === 'function'
          ? props.children({ getService })
          : props.children;
  };

  function useGetService() {
      const provider = React.useContext(ServiceContext);
      const getService = React.useCallback((provide) => {
          return provider.get(provide);
      }, [provider]);
      return getService;
  }
  const useService = (provide) => {
      const getService = useGetService();
      return getService(provide);
  };
  function useServices(provides) {
      const getService = useGetService();
      return provides.map((provide) => getService(provide));
  }
  function useObservable(ob$, defaultValue) {
      const [state, setState] = React.useState(() => {
          if (ob$ instanceof rxjs.BehaviorSubject)
              return ob$.value;
          return defaultValue;
      });
      React.useEffect(() => {
          const subscription = ob$.subscribe({
              next: (v) => setState(v)
          });
          return () => {
              subscription.unsubscribe();
          };
      }, [ob$]);
      return state;
  }
  function useObservableError(ob$, onlyAfter = false) {
      const [error, setError] = React.useState(null);
      const ignore = React.useMemo(() => {
          return ob$ instanceof rxjs.Subject && onlyAfter && ob$.hasError;
      }, [ob$, onlyAfter]);
      React.useEffect(() => {
          if (ignore)
              return;
          const subscription = ob$.subscribe({
              error: (err) => {
                  setError(err);
              }
          });
          return () => {
              subscription.unsubscribe();
          };
      }, [ob$, ignore]);
      return error;
  }

  exports.Disposable = Disposable;
  exports.Inject = Inject;
  exports.InjectionToken = InjectionToken;
  exports.Injector = Injector;
  exports.Service = Service;
  exports.ServiceConsumer = ServiceConsumer;
  exports.ServiceContext = ServiceContext;
  exports.ServiceProvider = ServiceProvider;
  exports.config = config;
  exports.debug = debug;
  exports.empty = empty;
  exports.useGetService = useGetService;
  exports.useObservable = useObservable;
  exports.useObservableError = useObservableError;
  exports.useService = useService;
  exports.useServices = useServices;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}, React, rxjs));
