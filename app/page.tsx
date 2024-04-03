import Image from "next/image";
import Footer from "@/components/Footer";
import { Tool, ToolType } from "@/components/Tool";
import tools from "@/data/tools.json";
import Matomo from "@/components/Matomo";

export default function Home() {
  return (
    <div className={"container px-4 max-w-6xl flex flex-col gap-12 py-4"}>
      <header className={""}>
        <div className={"flex gap-2 items-center"}>
          <Image
            height={27}
            width={27}
            className={""}
            src="https://em-content.zobj.net/thumbs/240/apple/285/alembic_2697-fe0f.png"
            alt="Alambic"
          />{" "}
          <span className={"font-medium"}>ClimateLab</span>
        </div>
      </header>
      <section className={"flex flex-col items-center text-center"}>
        <h1 className={"text-4xl mb-2 font-extrabold sm:text-6xl"}>
          ClimateLab
        </h1>
        <h2 className={"text-lg sm:text-xl font-medium max-w-xl"}>
          {
            "Des outils numériques pour le climat qui permettent de s'approprier les ordres de grandeurs et se familiariser avec les objectifs de neutralité carbone."
          }
        </h2>
      </section>
      <section className={"grid gap-8 sm:grid-cols-2"}>
        {tools.map((tool: ToolType, index) => (
          <Tool key={tool.title} tool={tool} />
        ))}
      </section>
      <Footer />
      <Matomo />
    </div>
  );
}
