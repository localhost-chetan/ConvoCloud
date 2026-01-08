import { APP_NAME } from "@lib/constants/app";
import { Card } from "@components/shared/card";

export default function Page() {
  return (
    <main className="min-h-screen flex justify-center items-center relative -top-24">
      <Card title={`Welcome to ${APP_NAME}`} iconPath="/images/app-icon.svg" buttonText="Get your username">
        {`We're working hard to get ${APP_NAME} ready for everyone! While we wrap up the finishing touches, we're adding people gradually to make sure nothing breaks :)`}
      </Card>
    </main>
  );
}
