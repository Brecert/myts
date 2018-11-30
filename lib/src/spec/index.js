"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
require("./extensions");
__export(require("./expectations"));
/**
 * [unfinished]
 */
function describe(description, cb) {
    cb();
}
exports.describe = describe;
/**
 * [unfinished]
 */
function it(description = 'assert', cb) {
    cb();
}
exports.it = it;
/**
 * throw an assertion fail
 */
function fail(msg) {
    throw new Error(`[AssertionFailed] ${msg}`);
}
exports.fail = fail;
