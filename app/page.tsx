import { Brand } from "@/components/brand";
import { PageHero } from "@/components/page-hero";
import { Tool, ToolType } from "@/components/Tool";
import { ToolShell } from "@/components/tool-shell";
import tools from "@/data/tools.json";

export default function Home() {
  return (
    <ToolShell
      badge={false}
      brand={
        <Brand
          name={
            <span className="text-lg font-bold tracking-tight">
              Climate
              <span className="font-display italic font-normal">Lab</span>
            </span>
          }
          logo="/images/alembic_2697.png"
        />
      }
    >
      <PageHero
        align="center"
        width="xl"
        className="mt-8 mb-8 sm:mt-12 sm:mb-12"
        title={
          <>
            Climate<span className="font-display italic font-normal">Lab</span>
          </>
        }
      >
        Des outils numériques pour le climat :{" "}
        <span className="font-medium text-foreground">
          s&apos;approprier les ordres de grandeur
        </span>{" "}
        et{" "}
        <span className="font-medium text-foreground">
          se familiariser avec la neutralité carbone
        </span>
        .
      </PageHero>

      <section className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {tools.map((tool: ToolType, index) => (
          <Tool key={tool.title} tool={tool} index={index} />
        ))}
      </section>
    </ToolShell>
  );
}
