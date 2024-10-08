import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

type Ingredient = {
    id: number;
    name: string;
    quantity: string;
    image_url: string;
};

const Ingredients = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response = await axios.get('/api/ingredients')
                console.log(response.data);
                setIngredients(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchIngredients();
    }, []);

    return (
        <div>
            <h3 className="text-4xl text-center text-white m-3">Ingredientes</h3>
            <div className='mt-8 grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4 gap-8'>
                {ingredients.map((ingredient) => (
                    <div key={ingredient.id} className='transform transition-transform duration-300 hover:scale-105'>
                        <HoverBorderGradient>
                            <Card className="grid bg-transparent justify-self-center h-auto" >
                                <CardHeader className='flex flex-row justify-center align-middle items-center'>
                                    <Image className='rounded-md w-[200px] h-[220px] object-contain' src={ingredient.image_url} alt={ingredient.name} height={200} width={200} />
                                </CardHeader>
                                <CardBody className='flex flex-row justify-center'>
                                    <h3>{ingredient.name}</h3>
                                </CardBody>
                            </Card>
                        </HoverBorderGradient>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ingredients