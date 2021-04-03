import { BehaviorSubject, Observable, Subject } from 'rxjs';
import Disposable from './disposable';
import { debug, empty } from './util';
import { InjectionClass } from './types';

export type ServiceSources<S extends Record<string, any>> = {
  [P in keyof S]: BehaviorSubject<S[P]> | Subject<S[P]>;
};
export type ServiceActions<A extends Record<string, any>> = {
  [P in keyof A]: Observable<A[P]>;
};
export type ServiceOptions<
  S extends Record<string, any>,
  A extends Record<string, any>
> = {
  state?: S;
  actions?: (keyof A)[];
};

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
export default class Service<
  S extends Record<string, any> = Record<string, any>,
  A extends Record<string, any> = Record<string, any>
> extends Disposable implements InjectionClass {
  // displayName, for debug
  displayName = '';
  // notify sources
  $$: ServiceSources<S> = {} as ServiceSources<S>;
  // actions
  $: ServiceActions<A> = {} as ServiceActions<A>;
  // state
  get state(): S {
    const state = {} as S;
    (Object.keys(this.$$) as (keyof S)[]).forEach((key) => {
      const source = this.$$[key];
      if (source instanceof BehaviorSubject) {
        state[key] = source.value;
      }
    });
    return state;
  }

  constructor(args: ServiceOptions<S, A> = {}) {
    super();

    // init
    // displayName
    if (!this.displayName) {
      this.displayName = this.constructor.name;
      debug(
        `[Service ${this.displayName}]: For better debugging, you'd better add an attribute 'displayName' to each service class.`,
        'warn'
      );
    }
    // init state
    const initialState = (args.state || {}) as S;
    (Object.keys(initialState) as (keyof S)[]).forEach((key) => {
      if (initialState[key] === undefined || initialState[key] === empty) {
        this.$$[key] = new Subject<S[typeof key]>();
      } else {
        this.$$[key] = new BehaviorSubject<S[typeof key]>(initialState[key]);
      }
    });
    // init actions
    const actions = args.actions || [];
    actions.forEach((key) => {
      this.$[key] = new Subject<A[typeof key]>();
    });

    // debug
    // debugs: update state
    Object.keys(this.$$).forEach((key) => {
      this.subscribe(this.$$[key], {
        next: (v: any) => {
          debug(
            `[Service ${this.displayName}]: set new state [${key}].`,
            'info'
          );
          debug(v, 'info');
        }
      });
    });
    // debugs: new action
    Object.keys(this.$).forEach((key) => {
      this.subscribe(this.$[key], {
        next: (v: any) => {
          debug(
            `[Service ${this.displayName}]: receive new action [${key}].`,
            'info'
          );
          debug(v, 'info');
        }
      });
    });
  }

  subscribe<T = any>(ob: Observable<T>, ...args: any[]): void {
    const subscription = ob.subscribe(...args);
    this.beforeDispose(() => {
      subscription.unsubscribe();
    });
  }
}
