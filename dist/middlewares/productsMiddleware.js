"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateMiddleware = exports.ProductsMiddleware = void 0;
const ProductsMiddleware = (req, res, next) => {
    console.log("Request intercepted by ProductsMiddleware");
    next();
};
exports.ProductsMiddleware = ProductsMiddleware;
const ProductsCreateMiddleware = (req, res, next) => {
    console.log("Request intercepted by ProductsCreateMiddleware");
    next();
};
exports.ProductsCreateMiddleware = ProductsCreateMiddleware;
