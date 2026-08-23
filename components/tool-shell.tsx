import type * as React from "react"

import { cn } from "@/lib/utils"
import { ClimateLabBadge } from "./climatelab-badge"
import { MadeWithLove } from "./made-with-love"

const LARGEURS = {
  "3xl": "max-w-3xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
} as const

/**
 * Coquille d'un outil du ClimateLab : logo-lien à gauche, badge à droite,
 * contenu au centre, footer collé en bas même quand la page est courte.
 *
 * Le logo passe par `brand` plutôt que par des props de marque : certains
 * outils l'habillent (titre enveloppant, lien maison), et le hub ne l'affiche
 * pas du tout puisqu'il EST la maison.
 */
function ToolShell({
  brand,
  badge = true,
  headerActions,
  headerBelow,
  sticky = false,
  width = "6xl",
  footer = true,
  className,
  children,
}: {
  /** Le composant Brand, ou rien pour un en-tête sans logo. */
  brand?: React.ReactNode
  /** Badge « un outil du ClimateLab ». */
  badge?: boolean
  /** Inséré dans l'en-tête, avant le badge (recherche, partage…). */
  headerActions?: React.ReactNode
  /** Inséré sous la barre (barre de progression de lecture…). */
  headerBelow?: React.ReactNode
  sticky?: boolean
  width?: keyof typeof LARGEURS
  footer?: boolean
  className?: string
  children: React.ReactNode
}) {
  const largeur = LARGEURS[width]
  return (
    <div className={cn("flex min-h-svh flex-col", className)}>
      <header
        className={cn(
          sticky && "sticky top-0 z-40 bg-background/80 backdrop-blur-sm",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full items-center justify-between gap-2 px-4 py-3 sm:px-6",
            largeur,
          )}
        >
          {brand ?? <span />}
          <div className="flex items-center gap-2">
            {headerActions}
            {badge && <ClimateLabBadge />}
          </div>
        </div>
        {headerBelow}
      </header>

      <main className={cn("mx-auto w-full flex-1 px-4 sm:px-6", largeur)}>
        {children}
      </main>

      {footer && <MadeWithLove className="mt-auto pb-8" />}
    </div>
  )
}

export { ToolShell }
