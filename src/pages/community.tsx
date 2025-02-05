"use client";
import React, { useEffect, useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Form } from "@heroui/form";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
    {
        quote: "Como amante de los cócteles, CrazyCocktail me ha sorprendido gratamente. La web es visualmente atractiva y las recetas son fáciles de seguir. ¡No puedo esperar para probar más cócteles!",
        name: "Maria Silva",
        country: "España",
        rating: 4
    },
    {
        quote: "La web CrazyCocktail es fantástica. La interfaz es fácil de usar y las recetas son claras y bien detalladas. ¡Me encanta explorar nuevas combinaciones!",
        name: "Andrés Fernández",
        country: "Argentina",
        rating: 4
    },
    {
        quote: "La Caipirinha que hice siguiendo la receta de esta web quedó increíble. La mezcla de cachaça y lima es refrescante y sabrosa. ¡Una excelente receta para el verano!",
        name: "Carla Rodríguez",
        country: "Colombia",
        rating: 5
    },
    {
        quote: "Como bartender, encuentro que CrazyCocktail es una gran fuente de inspiración. Las recetas son innovadoras y la web es fácil de navegar. ¡Perfecta para experimentar con nuevas ideas!",
        name: "Marcos Austin",
        country: "México",
        rating: 5
    },
    {
        quote: "La receta del Mai Tai en esta web es fantástica. Los sabores tropicales son vibrantes y el cóctel resultó ser un verdadero placer para el paladar. ¡Lo haré de nuevo pronto!",
        name: "Emilia Pérez",
        country: "Uruguay",
        rating: 4
    },

];

const Community = () => {
    return (
        <div>
            <h3 className="mx-8 mt-8 text-4xl text-center">Nuestra Comunidad</h3>
            <div className="h-[30rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
            <div>
                <h3 className="mx-8 mt-8 text-3xl text-center">¡Se parte de nuestra comunidad y envíanos tus comentarios!</h3>
                <div className="">
                    {/* TODO arreglar el formulario */}
                    <Form method="post" className="mx-8 my-8 grid grid-cols-2 gap-8" onSubmit={(data) => console.log(data)}>
                        <Input
                            className=""
                            variant="flat"
                            label="Nombre"
                            name="name"
                            placeholder="Escribe tu nombre"
                            type="text"
                            isRequired
                            minLength={3}
                            maxLength={20}
                        />
                        <Input 
                            className=""
                            variant="flat"
                            label="Apellido"
                            name="lastname"
                            placeholder="Escribe tu apellido"
                            type="text"
                            isRequired
                            minLength={3}
                            maxLength={20}
                        />
                        <Input
                            variant="flat"
                            label="Correo Electrónico"
                            name="email"
                            placeholder="Escribe tu correo electrónico"
                            type="email"
                            isRequired
                            minLength={5}
                            maxLength={50} 
                        />
                        <Input
                            variant="flat"
                            label="País"
                            name="country"
                            placeholder="Escribe tu país"
                            type="text"
                            isRequired
                            minLength={3}
                            maxLength={20}
                        />
                        <Textarea
                            className="col-span-2"
                            variant="flat"
                            label="Comentario"
                            name="comment"
                            placeholder="Escribe tu comentario"
                            type="text"
                            isRequired
                            minLength={5}
                            maxLength={800}
                        />
                        <Button
                            variant="faded"
                            type="submit"
                            className="col-span-2 w-1/4 mx-auto mt-4"
                        >
                            Enviar
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Community;
