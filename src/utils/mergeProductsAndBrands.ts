interface RegularPrice {
  currency: string;
  value: number;
}

export interface Product {
  type: string;
  id: number;
  sku: string;
  title: string;
  regular_price: RegularPrice;
  image: string;
  brand: number;
  brandObject?: Brand;
}

interface Brand {
  id: number;
  title: string;
  sort: string;
  code: string;
}

export function mergeProductsAndBrands(
  products: Product[],
  brands: Brand[]
): Product[] {
  const brandMap: { [key: number]: any } = {};
  for (const brand of brands) {
    brandMap[brand.id] = brand;
  }

  for (const product of products) {
    const brand = brandMap[product.brand];
    if (brand) {
      product.brandObject = brand;
    }
  }
  return products;
}
