const ArrayExtensions = {
    // todo: move to seperate more reusable function
    /**
     * Set the default value of an Array
     */
    defaultValue(value) {
        return new Proxy(this, {
            get: (target, name) => {
                // if exists then return value, otherwise if function return function value, otherwise return value
                return this[name] || (value instanceof Function ? value(name) : value);
            },
        });
    },
};
Object.assign(Array.prototype, ArrayExtensions);
