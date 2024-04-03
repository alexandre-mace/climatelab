import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClimateLab - Outils numériques pour le climat",
  description:
    "Plateforme d'outils numériques pour mieux comprendre le climat. Changement climatique, outils numérique, énergie, visualisation de données.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <link
        rel="icon"
        href="https://em-content.zobj.net/thumbs/240/apple/285/alembic_2697-fe0f.png"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
