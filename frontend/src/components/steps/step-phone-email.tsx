import { Button } from "../ui/button";

type StepPhoneEmailProps = {
    onNext: () => void;
}

export function StepPhoneEmail({onNext}:StepPhoneEmailProps) {
    return (
        <>
            <p>PhoneEmail Step</p>
            <Button onClick={onNext}>Next</Button>
        </>
    )
}