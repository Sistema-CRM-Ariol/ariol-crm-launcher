
export interface Product {
    id:            string;
    name:          string;
    description:   string;
    serialNumber:  string;
    image:         string;
    pricePurchase: number;
    priceSale:     number;
    slug:          string;
    brandId:       string;
    providerId:    number;
    categoryId:    number;
    createdAt:     Date;
    updatedAt:     Date;
    brand:         ProductBrand;
    category:      ProductCategory;
    provider:      ProductProvider;
}

export interface ProductBrand {
    id:   string;
    name: string;
}

export interface ProductCategory {
    id:   number;
    name: string;
    slug: string;
}

export interface ProductProvider {
    id:        number;
    name:      string;
    phone1:    string;
    phone2:    string;
    direction: string;
}
