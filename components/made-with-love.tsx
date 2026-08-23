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
      <a
        className="underline underline-offset-4 transition-colors hover:text-foreground"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        {name}
      </a>
    </footer>
  )
}

export { MadeWithLove }
