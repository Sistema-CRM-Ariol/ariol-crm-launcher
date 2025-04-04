interface Props {
    name: string;
    date: string;
}

export const ScheduleAppointmentTemplate = async ({ name, date }: Props) => {
    return (
        <section style={{ background: 'white', width: '100%', textAlign:"center", padding: '3rem' }} className='w-full bg-white text-center p-12'>
            <img
                src='https://img.freepik.com/vector-premium/calendario-icono-reloj-estilo-comic-ilustracion-vector-dibujos-animados-agenda-sobre-fondo-blanco-aislado-concepto-negocio-efecto-salpicadura-planificador-tiempo-programacion_157943-15413.jpg'
                width={200}
                height={200}
                alt='Cita'
                className='mx-auto'
            />
            <h2>Sr/Sra. {name}</h2>
            <p>Se agendo una cita en nuestro empresa</p>
            <h3>Detalles</h3>
            <p>{ date }</p>
            <div style={{ backgroundColor: '#3a65f7', color: "white", borderRadius: '8px', padding: '12px 24px', marginTop: "12px" }} className='bg-primary-500 text-white rounded-md py-3 px-6 mt-4'>
                Contactar
            </div>
        </section>
    )
}
