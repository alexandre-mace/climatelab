import Link from "next/link";
import Image from "next/image";

type ToolType = {
  title: string;
  description: string;
  logo: string;
  backgroundColor: string;
  color: string;
  link: string;
  shadow: string;
  hoverShadow: string;
};

const Tool = ({ tool }: { tool: ToolType }) => {
  return (
    <Link
      className={`tool gap-2 hover:-translate-y-2 ${tool.shadow} ${tool.hoverShadow} flex flex-col h-full p-6 sm:p-12 rounded-2xl`}
      href={tool.link}
      target={"_blank"}
    >
      <Image
        className={"mx-auto"}
        height={130}
        width={130}
        src={tool.logo}
        alt="Logo du projet"
      />
      <h2 className={"text-xl font-bold sm:text-2xl mt-8"}>{tool.title}</h2>
      <p className={"sm:text-lg font-medium"}>{tool.description}</p>
    </Link>
  );
};

export { Tool };
export type { ToolType };
