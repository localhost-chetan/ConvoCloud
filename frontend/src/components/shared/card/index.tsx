import Link from "next/link";
import Image from "next/image";
import { type PropsWithChildren } from "react";
import { Card as CardComp, CardAction, CardContent, CardFooter, CardHeader } from "@shadcn/card";
import { CardActionButton } from "@components/shared/card/card-action-button";
import {type CardActionButtonType } from "@lib/types/card";


type CardProps = PropsWithChildren & Record<"title" | "iconPath" | "buttonText", string> & CardActionButtonType

export function Card({ title, iconPath, buttonText, children, action }: CardProps) {
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
                    <CardActionButton buttonText={buttonText} action={action} />

                    <div className="text-sm text-primary">
                        <span>Have an invite link?</span>
                        <Link href="/login" className="underline underline-offset-2"><strong>{` Login`}</strong></Link>
                    </div>
                </CardAction>
            </CardFooter>
        </CardComp >
    );
}