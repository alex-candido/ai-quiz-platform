import "reflect-metadata";

import { ProductDTO } from "./ProductServiceRepo";

export default interface IProductServiceRepo {
  getProduct(): Promise<ProductDTO[]>;
  createProduct(payload: ProductDTO): Promise<ProductDTO>;
}
