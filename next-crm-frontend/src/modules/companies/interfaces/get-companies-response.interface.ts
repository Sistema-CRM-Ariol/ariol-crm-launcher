import { Company } from "./company.interface";

export interface GetCompaniesResponse {
    companies: Company[];
    meta:   Meta;
}

interface Meta {
    total:    number;
    page:     number;
    lastPage: number;
}
