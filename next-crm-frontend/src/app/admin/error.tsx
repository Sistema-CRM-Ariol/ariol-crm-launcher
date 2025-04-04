'use client'; // Error components must be Client Components

import { Button } from "@heroui/react";
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className='min-h-[100%] flex items-center justify-center'>
            <div className="container text-center">

                <h1>Ocurrio un error!</h1>
                <p>{error.message}</p>
                <Button
                    color='primary'
                    onClick={() => reset()}
                >
                    Reintentar
                </Button>
            </div>
        </section>
    );
}