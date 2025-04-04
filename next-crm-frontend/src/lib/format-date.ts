export const formatDate = (isoDate: Date): string => {
    // Crear un objeto Date a partir de la fecha ISO
    const date = new Date(isoDate);

    // Definir los nombres de los meses
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    // Obtener el día, mes y año
    const day = date.getUTCDate();
    const month = date.getUTCMonth(); // Mes en formato 0-11
    const year = date.getUTCFullYear();

    // Formatear la fecha en el formato deseado
    return `${day} de ${months[month]} de ${year}`;
};
