import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ToolType = {
  title: string;
  description: string;
  logo: string;
  color: string;
  link: string;
  shadow: string;
  hoverShadow: string;
  darkShadow: string;
  darkHoverShadow: string;
};

const Tool = ({ tool, index }: { tool: ToolType; index: number }) => {
  return (
    <Link
      className={`tool group hover:-translate-y-2 ${tool.shadow} ${tool.hoverShadow} ${tool.darkShadow} ${tool.darkHoverShadow} flex flex-col h-full p-7 sm:p-10 rounded-2xl bg-card border border-border card-enter`}
      style={{
        animationDelay: `${index * 75}ms`,
      }}
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex justify-between items-start mb-6">
        <Image
          height={64}
          width={64}
          src={tool.logo}
          alt={`Logo ${tool.title}`}
        />
        <ArrowUpRight className="size-5 text-muted-foreground opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
      </div>
      <h2
        className="text-xl font-bold sm:text-2xl mt-auto mb-2"
        style={{ color: tool.color }}
      >
        {tool.title}
      </h2>
      <p className="leading-relaxed line-clamp-3">
        {tool.description}
      </p>
    </Link>
  );
};

export { Tool };
export type { ToolType };
