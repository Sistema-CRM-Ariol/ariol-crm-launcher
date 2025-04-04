
import { fullInputWrapper } from '@/lib'

import { Input } from "@heroui/react"
import { Search01Icon } from 'hugeicons-react'

export const NavMenuSearch = () => {
    return (
        <Input
            startContent={<Search01Icon className="text-default-400" size={20}/>}
            classNames={fullInputWrapper}
            className='max-w-sm'
            placeholder='Realiza una busqueda general...'
        />
    )
}
