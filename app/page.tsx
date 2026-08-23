import Footer from "@/components/Footer";
import { Brand } from "@/components/brand";
import { Tool, ToolType } from "@/components/Tool";
import tools from "@/data/tools.json";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col p-4 sm:p-8">
      <header className="flex items-center justify-between">
        <Brand
          name={
            <span className="text-lg font-bold tracking-tight">
              Climate
              <span className="font-display italic font-normal">Lab</span>
            </span>
          }
          logo="/images/alembic_2697.png"
        />
      </header>

      <section className="mt-8 mb-8 flex flex-col items-center text-center sm:mt-12 sm:mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Climate<span className="font-display italic font-normal">Lab</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          Des outils numériques pour le climat :{" "}
          <span className="font-medium text-foreground">
            s&apos;approprier les ordres de grandeur
          </span>{" "}
          et{" "}
          <span className="font-medium text-foreground">
            se familiariser avec la neutralité carbone
          </span>
          .
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {tools.map((tool: ToolType, index) => (
          <Tool key={tool.title} tool={tool} index={index} />
        ))}
      </section>

      <Footer />
    </div>
  );
}
