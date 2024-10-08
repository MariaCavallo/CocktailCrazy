import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';
import { HoverBorderGradient } from '../../components/ui/hover-border-gradient';

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
}

const RecipeID = () => {
    const [cocktailData, setCocktailData] = useState<Cocktail>();
    const [recipeData, setRecipeData] = useState<Recipe>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        async function fetchRecipeData() {
            if (id) {
                try {
                    const response = await axios.get(`/api/recipes`);
                    console.log(response.data)
                    setRecipeData(response.data);
                } catch (error) {
                    setError('Failed to load data');
                } finally {
                    setLoading(false);
                }
            }
        }
        async function fetchCocktailData() {
            if (id) {
                try {
                    const response = await axios.get(`/api/cocktails/${id}`);
                    console.log(response.data)
                    setCocktailData(response.data);
                } catch (error) {
                    setError('Failed to load data');
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
    if (!cocktailData) return <div>No data found</div>; 

    return (
        <div className='m-9'>
            <div className='flex justify-center'>
                <div className=''>
                    <HoverBorderGradient>
                        <Card className="flex flex-col bg-transparent">
                            <CardHeader className='justify-center'>
                                <Image
                                    className='rounded-md object-contain h-auto w-auto'
                                    src={cocktailData?.image_url}
                                    alt={cocktailData?.name}
                                    height={300}
                                    width={300}
                                />
                            </CardHeader>
                            <CardBody>
                                <div className='flex flex-row items-center justify-between'>
                                    <h3 className='text-2xl'>{cocktailData?.name}</h3>
                                    <Image src={cocktailData?.country} alt={cocktailData?.country} width={40} height={40} />
                                </div>
                                <p className='p-5 text-center'>{cocktailData?.description}</p>
                                <div className='grid grid-cols-1 gap-20'>
                                        <ul className='list-decimal'>    
                                            <p className='underline decoration-solid'>Receta:</p>
                                            <li>{recipeData?.stepNumber}: {recipeData?.description}</li>
                                        </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </HoverBorderGradient>
                </div>
            </div>
        </div>
    );
}

export default RecipeID;
