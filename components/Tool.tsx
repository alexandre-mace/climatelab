import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ToolType = {
  title: string;
  description: string;
  logo: string;
  link: string;
};

const Tool = ({ tool, index }: { tool: ToolType; index: number }) => {
  return (
    <Link
      className="group relative flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40 sm:p-6 card-enter"
      style={{
        animationDelay: `${index * 75}ms`,
      }}
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-5 flex items-start justify-between">
        <Image
          height={44}
          width={44}
          src={tool.logo}
          alt={`Logo ${tool.title}`}
        />
        <ArrowUpRight className="size-4 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <h2 className="mt-auto mb-1.5 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
        {tool.title}
      </h2>
      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {tool.description}
      </p>
    </Link>
  );
};

export { Tool };
export type { ToolType };
