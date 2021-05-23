import { InjectionKey, getCurrentInstance } from 'vue';
import { Injector } from '@reactive-service/core';
export declare const injectorKey: InjectionKey<Injector>;
export declare const instanceInjectorKey: unique symbol;
export declare type InstanceWithInjector = ReturnType<typeof getCurrentInstance> & {
    [instanceInjectorKey]: Injector;
};
//# sourceMappingURL=context.d.ts.map