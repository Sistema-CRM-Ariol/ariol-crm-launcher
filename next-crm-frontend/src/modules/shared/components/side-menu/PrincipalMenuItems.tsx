import React from 'react'
import { principalMenu } from '../../../../lib/constants';
import { Button } from "@heroui/react";

export const PrincipalMenuItems = () => {
    return (
        <ul>
            {
                principalMenu.map(item => (
                    <li
                        key={item.path}

                    >
                        <Button
                            disableAnimation
                            disableRipple
                            
                            href={item.path}
                            // className='sidemenu__principal--item'
                            className='sidemenu__item'
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
