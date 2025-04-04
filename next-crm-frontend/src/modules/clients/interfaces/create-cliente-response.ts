import { GetClientsResponse } from "./get-clients-response.interface";

export interface CreateClientResponse {
    message: string;
    client:  GetClientsResponse;
}
