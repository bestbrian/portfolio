import Image from "next/image";
import { EmailButton } from "@/components/email-button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <h1 className="mb-8 text-4xl">Hello, my name is Brian.</h1>
        <p className="max-w-2xl"> I am a seasoned tech professional with extensive experience in FinTech and SaaS startups, specializing in the integration of sophisticated design and coding to deliver scalable digital solutions. <br></br><br></br> My expertise spans leading product development initiatives for financial platforms, enhancing user experience, and automating marketing campaigns to ensure operational excellence. <br></br><br></br>Driven by a passion for leveraging data to fuel growth and streamline business processes, I am eager to collaborate with forward-thinking teams. <br></br><br></br>If you are interested in elevating your technology and product strategy, please feel free to reach out at: <a href="mailto: hello@brianbest.dev ?subject=I have some work  &body=Hi Brian, I need help with"><span className="font-bold">hello@brianbest.dev</span></a></p>
      </div>
    </main>
  );
}
