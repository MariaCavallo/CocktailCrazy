import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { LampDemo } from '@/components/ui/lamp';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { ArrowDown } from '@phosphor-icons/react';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface Cocktail {
  cocktail_id: string;
  name: string;
  description: string;
  country: string;
  image_url: string;
};

const Index = () => {

  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getRandomCocktails(count: number) {
      try {
        const response = await axios.get(`/api/randomCocktails?count=${count}`);
        setCocktails(response.data);
      } catch (error) {
        setError('Failed to load random cocktails');
      } finally {
        setLoading(false);
      }
    }
    getRandomCocktails(4);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <LampDemo />
      <h3 className="text-4xl text-center text-white">Principales Cócteles</h3>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-8 mb-10 gap-8">
        {cocktails.map((cocktail) => (
          <div key={cocktail.cocktail_id} className='mb-8'>
            <HoverBorderGradient>
              <Card className="grid bg-transparent justify-self-center h-auto transform transition-transform duration-300 hover:scale-105">
                <Link href={`/cocktails/${cocktail.cocktail_id}`}>
                  <CardHeader>
                    <Image className='rounded-md w-[220px] h-[240px] object-cover' src={cocktail.image_url} alt={cocktail.name} width={200} height={200} />
                  </CardHeader>
                  <CardBody className='flex flex-row justify-around align-middle items-center'>
                    <h3 className='text-xl'>{cocktail.name}</h3>
                    <Image src={cocktail.country} alt={cocktail.name} width={40} height={40} />
                  </CardBody>
                </Link>
              </Card>
            </HoverBorderGradient>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <ArrowDown size={40} className="text-white animate-bounce absolute -bottom-12" />
      </div>
    </main>
  )
}

export default Index