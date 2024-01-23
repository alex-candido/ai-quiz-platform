import "reflect-metadata";

import { container } from "tsyringe";
import IProductServiceRepo from "./IProductServiceRepo";
import { ProductServiceRepo } from "./ProductServiceRepo";

export const myContainer = container.createChildContainer();

container.registerSingleton<IProductServiceRepo>(
  'ProductServiceRepo',
  ProductServiceRepo,
);
