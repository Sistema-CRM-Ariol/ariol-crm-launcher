"use client"
import { type User as IUser } from '@/modules/auth'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@heroui/react"

interface Props {
    user: IUser
}

export const NavMenuUser = ({ user }: Props) => {
    return (
        <Dropdown placement="bottom-start">
            <DropdownTrigger>
                <User
                    as="button"
                    avatarProps={{
                        size:"sm",
                        isBordered: true,
                        src: user.avatar ? user.avatar : undefined,
                    }}
                    className="transition-transform"
                    description={ user.email }
                    name={ `${ user.name } ${user.lastname}` }
                    
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">Signed in as</p>
                    <p className="font-bold">@tonyreichert</p>
                </DropdownItem>
                <DropdownItem key="settings">
                    My Settings
                </DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">
                    Analytics
                </DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                    Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                    Cerrar Sesion
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
