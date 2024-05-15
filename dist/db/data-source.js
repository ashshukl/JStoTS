"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const product_1 = require("../models/product");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    database: "typeormdb",
    username: "sa",
    password: "rootSa@123",
    synchronize: true,
    logging: true,
    entities: [product_1.Product],
    subscribers: [],
    migrations: [],
});
