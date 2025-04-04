import { User } from "./user.interface";

export interface LoginUserResponse {
    user:    User;
    token: string;
}

