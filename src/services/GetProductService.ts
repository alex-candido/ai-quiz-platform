import "reflect-metadata";

import { inject, injectable } from "tsyringe";
import type IProductServiceRepo from "./IProductServiceRepo";
import { ProductDTO } from "./ProductServiceRepo";

interface IRequest {
  id?: string;
  name: string;
}

@injectable()
export class GetProductService {
  constructor(
    @inject('ProductServiceRepo')
    private ProductServiceRepo: IProductServiceRepo,
  ){}

  public async execute(): Promise<ProductDTO[]> {
    const product = await this.ProductServiceRepo.getProduct();
    return product
  }
}
