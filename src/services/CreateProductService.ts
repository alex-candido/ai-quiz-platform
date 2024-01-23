import "reflect-metadata";

import { inject, injectable } from "tsyringe";
import type IProductServiceRepo from "./IProductServiceRepo";

interface IRequest {
  id?: string;
  name: string;
}

@injectable()
export class CreateProductService {
  constructor(
    @inject('ProductServiceRepo')
    private ProductServiceRepo: IProductServiceRepo,
  ){}

  public async execute({ id, name }: IRequest) {
    const product = this.ProductServiceRepo.createProduct({id, name})
    return product
  }
}
