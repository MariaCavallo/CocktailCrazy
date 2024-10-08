"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const testimonials = [
    {
        quote: "Como amante de los cócteles, CrazyCocktail me ha sorprendido gratamente. La web es visualmente atractiva y las recetas son fáciles de seguir. ¡No puedo esperar para probar más cócteles!",
        name: "Maria Silva",
        country: "España",
    },
    {
        quote: "La web CrazyCocktail es fantástica. La interfaz es fácil de usar y las recetas son claras y bien detalladas. ¡Me encanta explorar nuevas combinaciones!",
        name: "Andrés Fernández",
        country: "Argentina",
    },
    {
        quote: "La Caipirinha que hice siguiendo la receta de esta web quedó increíble. La mezcla de cachaça y lima es refrescante y sabrosa. ¡Una excelente receta para el verano!",
        name: "Carla Rodríguez",
        country: "Colombia",
    },
    {
        quote: "Como bartender, encuentro que CrazyCocktail es una gran fuente de inspiración. Las recetas son innovadoras y la web es fácil de navegar. ¡Perfecta para experimentar con nuevas ideas!",
        name: "Marcos Austin",
        country: "México",
    },
    {
        quote: "La receta del Mai Tai en esta web es fantástica. Los sabores tropicales son vibrantes y el cóctel resultó ser un verdadero placer para el paladar. ¡Lo haré de nuevo pronto!",
        name: "Emily Sanchez",
        country: "Uruguay",
    },
];

const Community = () => {
    return (
        <div>
            <h3 className="m-8 text-4xl text-center text-white">Nuestra Comunidad</h3>
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 m-4 gap-8">
                {testimonials.map((testimonial, index) => (
                    <HoverBorderGradient key={index}>
                        <Card  className="bg-transparent max-w-md">
                            <CardHeader className="text-xl font-semibold">{testimonial.name}</CardHeader>
                            <CardBody className="text-center text-lg italic">{testimonial.quote}</CardBody>
                            <CardFooter className="text-sm text-right">{testimonial.country}</CardFooter>
                        </Card>
                    </HoverBorderGradient>
                ))}
            </div>
        </div>
    );
};

export default Community;
