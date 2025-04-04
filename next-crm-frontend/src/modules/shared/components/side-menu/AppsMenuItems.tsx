"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { aplicationsMenu } from '@/lib';
import { Accordion, AccordionItem, Button } from "@heroui/react"

export const AppsMenuItems = () => {

    const pathname = usePathname();

    const itemClasses = {
        titleWrapper: "p-0",
        title: 'p-0 font-semibold text-base text-gray-500',
        base: "w-full",
        content: 'pt-[8px] pb-[12px] ',
        trigger: "p-0"
    };


    return (

        <Accordion
            showDivider={false}
            className='!px-0 space-y-4'
            itemClasses={itemClasses}
        >
            {
                aplicationsMenu.map(item => (
                    <AccordionItem
                        startContent={item.icon}
                        key={item.path}
                        title={item.name}
                        classNames={{
                            startContent: pathname.includes(item.path) && 'text-primary-500',
                            title: pathname.includes(item.path) ? itemClasses.title + ' text-primary-500' : itemClasses.title,
                        }}
                    >
                        {
                            item.children.map(subItem => (
                                <Link
                                    href={subItem.path}
                                    key={subItem.path}
                            
                                >
                                    <Button
                                        color='primary'
                                        fullWidth
                                        key={subItem.path}
                                        className={pathname === subItem.path ? 'sidemenu__apps--item sidemenu__apps--item-active' : 'sidemenu__apps--item'}
                                    >
                                        <span className='h-[6px] w-[6px] rounded-full bg-gray-600'></span>
                                        {subItem.name}
                                    </Button>
                                </Link>
                            ))
                        }
                    </AccordionItem>
                ))
            }
        </Accordion>


    )
}
