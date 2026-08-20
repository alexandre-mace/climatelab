import Image from "next/image";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { Tool, ToolType } from "@/components/Tool";
import tools from "@/data/tools.json";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1600px] p-4 sm:p-8 flex flex-col">
      <header className="flex items-center justify-between">
        <div className="flex gap-2.5 items-center">
          <Image
            height={24}
            width={24}
            src="/images/alembic_2697.png"
            alt="Alambic"
          />
          <span className="text-lg tracking-tight font-bold">
            Climate<span className="font-display italic font-normal">Lab</span>
          </span>
        </div>
        <ThemeToggle />
      </header>

      <section className="flex flex-col items-center text-center mt-8 sm:mt-12 mb-8 sm:mb-12">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-tight mb-5 font-bold">
          Climate<span className="font-display italic font-normal">Lab</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl text-muted-foreground leading-relaxed">
          Des outils numériques pour le climat qui permettent de
          s&apos;approprier les ordres de grandeurs et se familiariser avec les
          objectifs de neutralité carbone.
        </p>
      </section>

      <section className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool: ToolType, index) => (
          <Tool key={tool.title} tool={tool} index={index} />
        ))}
      </section>

      <Footer />
    </div>
  );
}
