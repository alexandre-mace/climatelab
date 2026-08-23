"use client"

import type * as React from "react"
import Image from "next/image"
import { Link } from "react-aria-components"
import { cn } from "@/lib/utils"

/**
 * Logo et nom du projet, en haut à gauche, lien vers la home
 * (le domaine sans chemin).
 */
function Brand({
  name,
  logo,
  href = "/",
  className,
}: {
  /** Nom du projet, texte ou markup (ex. Climate + Lab en serif). */
  name: React.ReactNode
  /** URL de l'emoji ou du logo (image locale ou distante). */
  logo: string
  href?: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-md text-sm font-medium whitespace-nowrap outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:text-base",
        className,
      )}
    >
      <Image
        src={logo}
        alt=""
        width={20}
        height={20}
        unoptimized
        className="inline-block h-5 w-auto shrink-0"
      />
      {name}
    </Link>
  )
}

export { Brand }
