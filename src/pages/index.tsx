import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { LampDemo } from '@/components/ui/lamp';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Cocktail = {
  id: number;
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
    async function fetchData() {
      try {
        const response = await axios.get('/api/cocktails?count=4');
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
    <main>
      <LampDemo />
      <h3 className="text-4xl text-center text-white">Principales Cócteles</h3>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-8 mb-10 gap-8">
        {cocktails.map((cocktail) => (
          <div key={cocktail.id} className=''>
            <HoverBorderGradient>
              <Card key={cocktail.id} className="grid bg-transparent justify-self-center h-auto transform transition-transform duration-300 hover:scale-105">
                <Link href={`/recipes`}>
                <CardHeader>
                  <Image className='rounded-md w-[220px] h-[240px] object-cover' src={cocktail.image_url} alt={cocktail.name} width={200} height={200}/>
                </CardHeader>
                <CardBody className='flex flex-row justify-around align-middle items-center'>
                  <h3 className='text-xl'>{cocktail.name}</h3>
                  <Image src={cocktail.country} alt={cocktail.name} width={40} height={40}/>
                </CardBody>
                </Link>
              </Card>
            </HoverBorderGradient>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Index