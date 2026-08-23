"use client"

import { Link } from "react-aria-components"
import { cn } from "@/lib/utils"

/** Footer « Fait avec amour par… », commun à tous les projets. */
function MadeWithLove({
  name = "alexandre-mace",
  href = "https://github.com/alexandre-mace",
  className,
}: {
  name?: string
  href?: string
  className?: string
}) {
  return (
    <footer
      className={cn(
        "mt-16 text-center text-sm text-muted-foreground",
        className,
      )}
    >
      Fait avec amour par{" "}
      <Link
        className="rounded-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 outline-none transition-colors hover:decoration-primary focus-visible:ring-[3px] focus-visible:ring-ring/50"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        {name}
      </Link>
    </footer>
  )
}

export { MadeWithLove }
