import { GetProductService } from "@/services/GetProductService";
import "reflect-metadata";
import { container } from "tsyringe";

export default async function SetupPage() {
  const GetProduct = container.resolve(GetProductService);
  const productService = await GetProduct.execute()
  console.log(productService[0])
  return (
    <div>SetupPage: Hello World</div>
  )
}
