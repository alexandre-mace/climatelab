import type * as React from "react"

import { cn } from "@/lib/utils"

const TAILLES = {
  /** Pages qui accueillent : la taille fait l'autorité, le semibold suffit. */
  page: "text-4xl font-semibold tracking-tight text-balance sm:text-5xl",
  /** En-têtes d'outil : l'interface démarre juste en dessous, le titre s'efface. */
  compact: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl",
} as const

const LARGEURS = {
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
} as const

/**
 * Titre de page et paragraphe d'accroche.
 *
 * Le lead passe par `children` et non par une prop texte : son emphase
 * (`<span className="font-medium text-foreground">`) fait partie de la
 * grammaire éditoriale, une chaîne la perdrait.
 */
function PageHero({
  title,
  media,
  size = "page",
  align = "start",
  width = "2xl",
  className,
  children,
}: {
  title: React.ReactNode
  /** Emoji ou illustration au-dessus du titre. */
  media?: React.ReactNode
  size?: keyof typeof TAILLES
  align?: "start" | "center"
  width?: keyof typeof LARGEURS
  className?: string
  children?: React.ReactNode
}) {
  const centre = align === "center"
  return (
    <section
      className={cn(
        "flex flex-col",
        LARGEURS[width],
        centre && "mx-auto items-center text-center",
        className,
      )}
    >
      {media}
      <h1 className={cn(TAILLES[size], media && "mt-4")}>{title}</h1>
      {children && (
        <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          {children}
        </p>
      )}
    </section>
  )
}

export { PageHero }
