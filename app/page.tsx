import Image from "next/image";
import { EmailButton } from "@/components/email-button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>brian is cool</h1>
      <EmailButton type="download">
        Email
      </EmailButton>

    </main>
  );
}
