'use client'

import { Button } from "@shadcn/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { StepAvatar, StepName, StepOTP, StepPhoneEmail, StepUsername } from "@components/steps"


const steps = [
    StepPhoneEmail,
    StepOTP,
    StepName,
    StepAvatar,
    StepUsername,
]


type CardActionButtonProps = {
    action: "REGISTER" | "LOGIN";
    buttonText: string;
}

export function CardActionButton({ action, buttonText }: CardActionButtonProps) {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const Step = steps.at(step);

    const onNext = () => {
        setStep(() => step + 1)
    }


    const handleClick = () => {
        switch (action) {
            case "REGISTER":
                router.push("/register");
                break;
            case "LOGIN":
                router.push("/login");
                break;
            default:
                break;
        }
    }

    if (!Step) return null;

    return (
        <Button variant="default" className="rounded-xl transition-colors duration-300" size={"sm"} onClick={handleClick}>
            {buttonText}<ArrowRight />
        </Button>
    );
}