import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${instrumentSerif.variable} ${inter.variable} font-sans`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
