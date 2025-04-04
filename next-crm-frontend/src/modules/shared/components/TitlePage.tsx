import React from 'react'
import Link from 'next/link';

import { ArrowLeft01Icon } from "hugeicons-react";

interface Props {
    title: string;
    subTitle: string;
    linkName: string; 
    pathname : string;
}

export const TitlePage = ({ linkName, pathname, subTitle, title }: Props) => {
    return (
        <section className="pt-8">
            <div className="container">
                <Link href={pathname} className="flex items-center mb-3 text-primary-500">
                    <ArrowLeft01Icon size={16} />
                    {linkName}
                </Link>
                <h1 className="text-2xl ">{title}</h1>
                <p>{subTitle}</p>
            </div>
        </section>
    )
}
