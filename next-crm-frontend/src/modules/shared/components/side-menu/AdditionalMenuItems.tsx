import React from 'react'
import { additionalMenu } from '@/lib'
import { Button } from "@heroui/react"

export const AdditionalMenuItems = () => {
    return (
        <ul>
            {
                additionalMenu.map(item => (
                    <li
                        key={item.path}
                    >
                        <Button
                            disableAnimation
                            disableRipple
                            href={item.path}
                            className='sidemenu__principal--item'
                            fullWidth
                        >
                            <span className='text-black'>{item.icon}</span>
                            {item.name}
                        </Button>
                    </li>
                ))
            }

        </ul>
    )
}
