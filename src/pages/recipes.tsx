import { Card, CardHeader, CardBody } from '@nextui-org/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

type Cocktail = {
    cocktail_id: number;
    name: string;
    description: string;
    country: string;
    image_url: string;
};

const Recipes = () => {

    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/cocktails');
                setCocktails(response.data);
            } catch (error) {
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;


    return (
        <div>
            <h3 className="text-4xl text-center text-white m-2">Nuestras Recetas</h3>
            <div className="mt-8 grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4 gap-8">
                {cocktails.map((cocktail) => (
                    <div key={cocktail.cocktail_id} className='transform transition-transform duration-300 hover:scale-105'>
                        <Link href={`/cocktails/${cocktail.cocktail_id}`}>
                        <HoverBorderGradient>
                            <Card key={cocktail.cocktail_id} className="grid bg-transparent justify-self-center h-auto">
                                <CardHeader>
                                    <Image className='rounded-md w-[220px] h-[240px] object-cover' src={cocktail.image_url} alt={cocktail.name} width={200} height={200} />
                                </CardHeader>
                                <CardBody className='flex flex-row justify-around align-middle items-center'>
                                    <h3 className='text-xl'>{cocktail.name}</h3>
                                    <Image src={cocktail.country} alt={cocktail.name} width={40} height={40} />
                                </CardBody>
                            </Card>
                        </HoverBorderGradient>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recipes