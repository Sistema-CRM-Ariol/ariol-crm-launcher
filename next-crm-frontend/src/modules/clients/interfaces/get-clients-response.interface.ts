import { SimpleClient } from "./simple-client.interface";

export interface GetClientsResponse {
    clients: SimpleClient[];
    meta: Meta;
}

interface Meta {
    total: number;
    page: number;
    lastPage: number;
}
