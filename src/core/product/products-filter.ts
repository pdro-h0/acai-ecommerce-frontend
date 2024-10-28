import { Product } from "./produto";

export class ProductsFilter {
  execute(search: string, product: Product[]) {
    const words = search.toLocaleLowerCase().split(" ");
    return product.filter((product) => {
      const text = `
            ${product.name}
            ${product.description}`.toLocaleLowerCase();
      return words.every((word) => text.includes(word));
    });
  }
}
