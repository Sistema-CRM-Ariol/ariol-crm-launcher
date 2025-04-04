import { Category } from "./category";

export interface GetCategoriesResponse {
    categories: Category[];
    meta:       Meta;
}

interface Meta {
    total:    number;
    page:     number;
    lastPage: number;
}
