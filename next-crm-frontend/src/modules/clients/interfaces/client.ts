export interface Client {
    id:          string;
    name:        string;
    position:    string;
    departament: string;
    province:    string;
    address:     string;
    invoice:     string;
    nit:         string;
    emails:      string[];
    phones:      string[];
    companyId:   string;
    createdAt:   Date;
    updatedAt:   Date;
    company:     ClientCompany;
}

export interface ClientCompany {
    id:          string;
    name:        string;
    description: string;
    direction:   string;
    createdAt:   Date;
    updatedAt:   Date;
}
