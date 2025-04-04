import React from 'react'
import { User } from '@/modules/auth'
import { NavMenuUser } from './NavMenuUser'
import { NavMenuSearch } from './NavMenuSearch'

interface Props {
    user: User;
}

export const NavMenu = ({ user }: Props) => {
    return (
        <nav className='navbar'>
            <div className="nav__container">
                <NavMenuSearch/>
                <NavMenuUser user={user} />
            </div>
        </nav>
    )
}
