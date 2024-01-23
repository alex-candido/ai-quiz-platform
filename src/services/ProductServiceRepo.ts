import IProductServiceRepo from './IProductServiceRepo';

export interface ProductDTO {
  id?: string;
  name: string;
}

import "reflect-metadata";

export class ProductServiceRepo implements IProductServiceRepo {
  async getProduct(): Promise<ProductDTO[]> {
    return [
      {
        id: 'qwertyuiopasdfghjklçzxcvbnm',
        name: 'notebook',
      },
      {
        id: 'qwertyuiopasdfghjkxklbdçlfb',
        name: 'tv philips',
      },
    ];
  }
  async createProduct(payload: ProductDTO): Promise<ProductDTO> {
    return {
      id: 'qwertyuiopasdfghdzvvdvcbdçlfb',
      name: payload.name,
    };
  }
}
