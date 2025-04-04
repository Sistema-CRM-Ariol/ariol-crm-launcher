"use client"
import { CheckboxGroup, Checkbox } from "@heroui/checkbox";


interface Props {
    onChange: (module: string, actions: string[]) => void;
};

export const RolePermissionSelector = ({ onChange }: Props) => {

    const modules = [
        { name: "Clientes", value: "clients" },
        { name: "Ingresos", value: "incomes" },
        { name: "Salidas", value: "expenses" },
        { name: "Productos", value: "products" },
        { name: "Inventarios", value: "inventories" },
        { name: "Usuarios", value: "users" },
    ];

    const actions = [
        { name: "Ver/Listar", value: "read" },
        { name: "Crear", value: "create" },
        { name: "Editar", value: "update" },
        { name: "Eliminar", value: "remove" },
        { name: "Reportes", value: "report" },
    ]
    
    const handleCheckboxChange = (module: string, selectedActions: string[]) => {
        onChange(module, selectedActions);
    };

    return (
        <div>
            <h2>Selecciona los permisos del usuario</h2>
            <div className='role__permission__selector'>

                {
                    modules.map(module => (
                        <div key={module.value}>
                            <h3 className='font-semibold'>{module.name}</h3>

                            <CheckboxGroup
                                label="Selecciona las acciones permitidas"
                                onChange={(selected) => handleCheckboxChange(module.value, selected)}
                            >
                                {
                                    actions.map(action => (
                                        <Checkbox value={action.value} key={action.value}>
                                            {action.name}
                                        </Checkbox>
                                    ))
                                }
                            </CheckboxGroup>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}
