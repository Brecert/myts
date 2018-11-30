export declare const mix: (superclass: any) => MixinBuilder;
declare class MixinBuilder {
    superclass: any;
    constructor(superclass: any);
    with(...mixins: any[]): any;
}
export {};
