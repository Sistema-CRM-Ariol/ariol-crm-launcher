import { Provider } from "./provider";

export interface GetProvidersResponse {
    providers: Provider[];
    meta:       Meta;
}



interface Meta {
    total:    number;
    page:     number;
    lastPage: number;
}
