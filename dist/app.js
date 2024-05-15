"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const productsRouter_1 = require("./routers/productsRouter");
const appMiddleware_1 = require("./middlewares/appMiddleware");
const data_source_1 = require("./db/data-source");
//Important to import this in app.ts file
require("reflect-metadata");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.configMiddleware();
        this.setupRouters();
    }
    configMiddleware() {
        //Mounts bodyParser middleware to parse req.body into json format
        this.app.use(body_parser_1.default.json());
        //Parses incoming request bodies containing URL-encoded data
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        //Middleware common to all requests
        this.app.use(appMiddleware_1.AppMiddleware);
        //Error handling middleware
        this.app.use((err, req, res, next) => {
            console.log(err);
        });
    }
    setupRouters() {
        //Handling home page requests
        this.app.get("/", (req, res) => {
            res.send("You have reached Home!!!");
        });
        //Mounts router for products paths
        this.app.use("/products", new productsRouter_1.ProductsRouter().router);
    }
    start() {
        const port = process.env.PORT || 3000;
        data_source_1.AppDataSource.initialize().then(() => {
            //Start listening to requests on http port 3000
            this.app.listen(port, () => {
                console.log(`Server is running in http://localhost:${port}`);
            });
        });
    }
}
const app = new App();
app.start();
