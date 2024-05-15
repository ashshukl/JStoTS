import express from "express";
import { AppDataSource } from "../db/data-source";
import { Product } from "../models/product";

export class ProductsController {
  static async getAll(req: express.Request, res: express.Response) {
    // await AppDataSource.initialize();
    // const result = AppDataSource.getRepository(Product).find();
    res.send(await AppDataSource.manager.find(Product));
  }

  static async create(req: express.Request, res: express.Response) {
    const product: Product = new Product();
    product.name = req.body.name;
    product.price = req.body.price;
    product.save().then(() => {
      res.send(product);
    });
    //res.send(await AppDataSource.manager.save(product));
  }

  static async getById(req: express.Request, res: express.Response) {
    console.log(`Recieved id = ${req.query.id}`);
    res.send(
      await AppDataSource.getRepository(Product).findOne({
        where: {
          id: req.query.id as any,
        },
      })
    );
  }
}
