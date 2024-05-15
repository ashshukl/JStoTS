"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const data_source_1 = require("../db/data-source");
const product_1 = require("../models/product");
class ProductsController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // await AppDataSource.initialize();
            // const result = AppDataSource.getRepository(Product).find();
            res.send(yield data_source_1.AppDataSource.manager.find(product_1.Product));
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = new product_1.Product();
            product.name = req.body.name;
            product.price = req.body.price;
            product.save().then(() => {
                res.send(product);
            });
            //res.send(await AppDataSource.manager.save(product));
        });
    }
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Recieved id = ${req.query.id}`);
            res.send(yield data_source_1.AppDataSource.getRepository(product_1.Product).findOne({
                where: {
                    id: req.query.id,
                },
            }));
        });
    }
}
exports.ProductsController = ProductsController;
