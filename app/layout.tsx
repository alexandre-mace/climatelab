import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "ClimateLab - Outils numériques pour le climat",
  description:
    "Plateforme d'outils numériques pour mieux comprendre le climat. Changement climatique, outils numérique, énergie, visualisation de données.",
  icons: {
    icon: "/images/alembic_2697.png",
  },
  openGraph: {
    title: "ClimateLab - Outils numériques pour le climat",
    description:
      "Des outils numériques pour le climat qui permettent de s'approprier les ordres de grandeurs et se familiariser avec les objectifs de neutralité carbone.",
    siteName: "ClimateLab",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ClimateLab - Outils numériques pour le climat",
    description:
      "Des outils numériques pour le climat qui permettent de s'approprier les ordres de grandeurs et se familiariser avec les objectifs de neutralité carbone.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
