"use client"

import Chart from 'react-apexcharts';

interface Props {
    numberOfClients: number[]
}

export const NewClientsChart = ({ numberOfClients }: Props) => {
    const totalNewClients = numberOfClients.reduce((sum, count) => sum + count, 0);
    
    const series = [
        {
            name: "Nuevos clientes",
            data: numberOfClients, // Datos directamente desde el servidor
        },
    ];

    const spark1: ApexCharts.ApexOptions = {
        chart: {
            id: 'spark1',
            group: 'sparks',
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 2,
                opacity: 0.5,
            }
        },
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: ['#3a65f7'],
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function formatter(val: any) {
                        return '';
                    }
                }
            }
        }
    }




    return (
        <div className='bg-white rounded-lg p-6 max-w-lg flex gap-4 items-center justify-between'>

            <div>
                <h3 className='text-gray-500'>Nuevos clientes <br />este mes</h3>
                <p className='text-4xl font-semibold text-black'>
                    {totalNewClients} <span className='text-gray-400 text-sm font-normal'>registrados</span>
                </p>
            </div>
            <Chart
                height={100}
                options={spark1}
                series={series}
                width={250}
                type="line"
            />
        </div>
    )
}
