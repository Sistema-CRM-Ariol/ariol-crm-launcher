// Definición de tipos
export type Permission = {
    module: string;
    actions: string[];
};

export interface UserData {
    _id?: string;
    email: string;
    password: string;
    name: string;
    permissions: Permission[];
};
