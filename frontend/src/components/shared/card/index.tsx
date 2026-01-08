'use client'

import Link from "next/link";
import Image from "next/image";
import { Button } from "@shadcn/button";
import { ArrowRight } from "lucide-react";
import { APP_NAME } from "@lib/constants/app";
import { type PropsWithChildren } from "react";
import { Card as CardComp, CardAction, CardContent, CardFooter, CardHeader } from "@shadcn/card";


type CardProps = Record<"title" | "iconPath" | "buttonText", string> & PropsWithChildren

export function Card({ title, iconPath, buttonText, children }: CardProps) {
    return (
        <CardComp className="w-md flex flex-col items-center gap-y-4 text-sm md:text-base">
            <CardHeader className="flex justify-center gap-x-1.5 w-full items-center">
                <Image src={iconPath} width={35} height={35} alt="app_logo" />
                <h3 className="shrink-0 text-base sm:text-xl"><strong>{title}</strong></h3>
            </CardHeader>

            <CardContent className="px-10 text-center text-balance">
                {children}
            </CardContent>

            <CardFooter className="mt-2">
                <CardAction className="flex items-center flex-col justify-center gap-x-4 gap-y-2">
                    <Button variant="default" onClick={() => console.log(`Hello ${APP_NAME}`)} className="rounded-xl transition-colors duration-300" size={"sm"}>{buttonText}<ArrowRight /></Button>

                    <div className="text-sm text-primary">
                        <span>Have an invite link?</span>
                        <Link href="/sign-in" className="underline underline-offset-2"><strong>{` Sign In`}</strong></Link>
                    </div>
                </CardAction>
            </CardFooter>
        </CardComp >
    );
}