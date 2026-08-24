"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

/** Badge « un outil du ClimateLab », à poser à droite du header des outils. */
function ClimateLabBadge({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5 text-sm", className)}>
      <span className="hidden md:inline-block">un outil du</span>
      <a
        href="https://climatelab.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium whitespace-nowrap text-primary underline-offset-4 outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        <Image
          src="https://em-content.zobj.net/thumbs/240/apple/285/alembic_2697-fe0f.png"
          alt="Alambic"
          width={20}
          height={20}
          unoptimized
          className="h-5 w-auto shrink-0"
        />
        ClimateLab
      </a>
    </div>
  )
}

export { ClimateLabBadge }
