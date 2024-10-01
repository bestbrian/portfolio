import Image from "next/image";
import { EmailButton } from "@/components/email-button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <h1 className="mb-8 text-4xl">Hello, my name is Brian.</h1>
        <p className="max-w-2xl"> I am a seasoned tech professional with extensive experience in FinTech and SaaS startups, specializing in scalable digital solutions and agile team leadership.
        <br></br><br></br> 
        With a strong background in Scrum, I’ve led teams through sprint planning, backlog refinement, and daily stand-ups, ensuring timely delivery and alignment with business goals. My expertise spans product development, user experience enhancement, and marketing automation.
        <br></br><br></br>
        Passionate about leveraging data to drive growth and streamline processes, I’m excited to collaborate with innovative teams.
        <br></br><br></br>
        Let’s connect: <a href="mailto: hello@brianbest.dev ?subject=I have some work  &body=Hi Brian, I need help with"><span className="font-bold">hello@brianbest.dev</span></a></p>
      </div>
    </main>
  );
}
