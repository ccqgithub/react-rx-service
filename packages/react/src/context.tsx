import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { Injector, GetService } from '@reactive-service/core';
import { ServiceInjectorProps, ServiceConsumerProps } from './types';

const InjectorContext = createContext<Injector>(new Injector());

const ServiceInjector = (props: ServiceInjectorProps): React.ReactElement => {
  const isFirst = useRef(true);
  const parentInjector = useContext(InjectorContext);
  const { providers = [], children } = props;
  const [injector, setInjector] = useState(
    () => new Injector(providers, parentInjector)
  );

  useEffect(() => {
    if (isFirst.current) return;
    const injector = new Injector(providers, parentInjector);
    setInjector(injector);
  }, [providers, parentInjector]);

  isFirst.current = false;

  return (
    <InjectorContext.Provider value={injector}>
      {children}
    </InjectorContext.Provider>
  );
};

const ServiceConsumer = (props: ServiceConsumerProps): React.ReactNode => {
  const injector = useContext(InjectorContext);
  const getService: GetService = (provide: any, opts: any) => {
    return injector.get(provide, opts);
  };

  return typeof props.children === 'function'
    ? props.children({ getService })
    : props.children;
};

export { InjectorContext, ServiceInjector, ServiceConsumer };
