export interface User {
    id:          string;
    name:        string;
    lastname:    string;
    email:       string;
    ci:          string;
    avatar:      null;
    token:       null;
    createdAt:   Date;
    updatedAt:   Date;
    permissions: Permission[];
}

export interface Permission {
    module:  string;
    actions: string[];
}
