declare const ObjectExtensions: {};
declare const ObjectProperties: {
    isArray: {
        get: () => boolean;
    };
};
interface Object {
    /**
     * If Object is an Array
     */
    isArray: boolean;
}
