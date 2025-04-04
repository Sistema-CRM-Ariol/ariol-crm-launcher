
import { UserMultiple02Icon } from 'hugeicons-react'

interface Props {
    totalClients: number
}

export const TotalClientsCard = ({ totalClients }: Props) => {
    return (
        <div className='bg-white rounded-lg p-6 w-full max-w-[300px] flex items-center justify-between'>
            <div>
                <h3 className='text-gray-500'>Total Clientes</h3>
                <p className='text-4xl font-semibold text-black'>
                    { totalClients } <span className='text-gray-400 text-sm font-normal'>registrados</span>
                </p>
            </div>
            <div className='bg-primary-100 text-primary-500 p-5 rounded-full'>
                <UserMultiple02Icon size={26}/>   
            </div>
        </div>
    )
}
