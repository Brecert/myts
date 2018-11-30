declare const ArrayExtensions: {
    /**
     * Set the default value of an Array
     */
    defaultValue<T>(value: T): any;
};
interface Array<T> {
    /**
     * Sets the default value of the Array
     */
    defaultValue<U>(value: U): this;
}
