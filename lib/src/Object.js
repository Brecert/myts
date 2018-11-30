const ObjectExtensions = {};
const ObjectProperties = {
    isArray: {
        get: function () {
            return Array.isArray(this);
        },
    },
};
// Normal functions
Object.assign(Object.prototype, ObjectExtensions);
// Getters, Setters, and other more specific properties
Object.defineProperties(Object.prototype, ObjectProperties);
