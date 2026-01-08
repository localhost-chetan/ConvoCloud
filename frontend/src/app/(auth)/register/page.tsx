import { Card } from "@components/shared/card";

export default function Page() {

    return (
        <Card title="Create Your Account" buttonText="Next" iconPath="/images/app-icon.svg" action="REGISTER">
            <p>
                Join ConvoCloud and start connecting with others.
            </p>
        </Card>
    )
}