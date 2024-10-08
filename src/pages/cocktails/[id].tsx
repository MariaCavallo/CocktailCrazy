import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

type Cocktail = {
    id: number;
    name: string;
    description: string;
    country: string;
    image_url: string;
};

type Recipe = {
    id: number;
    cocktailID: number;
    stepNumber: number;
    description: string;
};

const RecipeID = () => {
    const [cocktailData, setCocktailData] = useState<Cocktail | null>(null);
    const [recipeData, setRecipeData] = useState<Recipe[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        // Obtener los datos de la receta
        async function fetchRecipeData() {
            if (id) {
                try {
                    const response = await axios.get(`/api/recipes?cocktail_id=${id}`);
                    setRecipeData(response.data);
                } catch (error) {
                    setError('Failed to load recipe data');
                } finally {
                    setLoading(false);
                }
            }
        }

        // Obtener los datos del cóctel
        async function fetchCocktailData() {
            if (id) {
                try {
                    const response = await axios.get(`/api/cocktails/${id}`);
                    setCocktailData(response.data);
                } catch (error) {
                    setError('Failed to load cocktail data');
                } finally {
                    setLoading(false);
                }
            }
        }

        fetchRecipeData();
        fetchCocktailData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='m-9'>
            <div className='flex justify-center'>
                <div className=''>
                    <HoverBorderGradient>
                        <Card className="flex flex-col bg-transparent">
                            <CardHeader className='justify-center'>
                                {cocktailData && (
                                    <Image
                                        className='rounded-md object-contain h-auto w-auto'
                                        src={cocktailData.image_url}
                                        alt={cocktailData.name}
                                        height={300}
                                        width={300}
                                    />
                                )}
                            </CardHeader>
                            <CardBody>
                                <div className='flex flex-row items-center justify-between'>
                                    <h3 className='text-2xl'>{cocktailData?.name}</h3>
                                    {cocktailData?.country && (
                                        <Image
                                            src={cocktailData.country}
                                            alt={cocktailData.country}
                                            width={40}
                                            height={40}
                                        />
                                    )}
                                </div>
                                <p className='p-5 text-center'>{cocktailData?.description}</p>

                                <div className='grid grid-cols-1 gap-20'>
                                    <ul className='list-decimal'>
                                        <p className='underline decoration-solid'>Receta:</p>
                                        {recipeData?.map((step) => (
                                            <li className='m-2' key={step.id}>
                                                {step.description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </HoverBorderGradient>
                </div>
            </div>
        </div>
    );
};

export default RecipeID;
