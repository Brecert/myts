declare class Expected<T> {
    actualValue: any;
    private _not;
    constructor(actualValue: any);
    /**
     * invert the expected values truthyness
     */
    readonly not: this;
    /**
     * if the Object is expected to equal a value
     */
    toEq(expectedValue: any): void;
    /**
     * if the Object is expected to be the same value
     */
    toBe(expectedValue: any): void;
    private base_if;
}
/**
 * any
 */
export declare function expect<T>(actualValue: T): Expected<{}>;
export {};
