"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
    children,
    containerClassName,
    className,
    as: Tag = "div",
    duration = 1,
    clockwise = true,
    ...props
}: React.PropsWithChildren<
    {
        as?: React.ElementType;
        containerClassName?: string;
        className?: string;
        duration?: number;
        clockwise?: boolean;
    } & React.HTMLAttributes<HTMLElement>
>) {
    const [hovered, setHovered] = useState<boolean>(false);
    const [direction, setDirection] = useState<Direction>("TOP");

    const rotateDirection = (currentDirection: Direction): Direction => {
        const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
        const currentIndex = directions.indexOf(currentDirection);
        const nextIndex = clockwise
            ? (currentIndex - 1 + directions.length) % directions.length
            : (currentIndex + 1) % directions.length;
        return directions[nextIndex];
    };

    // Ajustes para los colores del gradiente
    const movingMap: Record<Direction, string> = {
        TOP: "linear-gradient(to bottom, #46e8fd, #f2ff3f, #F033AE)",
        LEFT: "linear-gradient(to right, #46e8fd, #f2ff3f, #F033AE)",
        BOTTOM: "linear-gradient(to top, #46e8fd, #f2ff3f, #F033AE)",
        RIGHT: "linear-gradient(to left, #46e8fd, #f2ff3f, #F033AE)",
    };

    // Gradiente de resaltado
    const highlight =
        "radial-gradient(circle at center, #46e8fd, #f2ff3f, #F033AE)";

    useEffect(() => {
        if (!hovered) {
            const interval = setInterval(() => {
                setDirection((prevState) => rotateDirection(prevState));
            }, duration * 1000);
            return () => clearInterval(interval);
        }
    }, [hovered, duration, clockwise]);

    return (
        <Tag
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "relative flex rounded-md border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
                containerClassName
            )}
            {...props}
        >
            <div
                className={cn(
                    "w-auto text-white z-10 bg-[#070924] px-4 py-2 rounded-[inherit]",
                    className
                )}
            >
                {children}
            </div>
            <motion.div
                className={cn(
                    "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
                )}
                style={{
                    filter: "blur(2px)",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                }}
                initial={{ background: movingMap[direction] }}
                animate={{
                    background: hovered
                        ? [movingMap[direction], highlight]
                        : movingMap[direction],
                }}
                transition={{ ease: "linear", duration: duration ?? 1 }}
            />
            <div className="bg-[#070924] absolute z-1 flex-none inset-[2px] rounded-[100px]" />
        </Tag>
    );
}
