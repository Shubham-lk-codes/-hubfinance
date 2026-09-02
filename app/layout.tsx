import type { Metadata } from "next";
import { Fira_Sans, Paytone_One } from "next/font/google";
import "./globals.css";

const paytoneOne = Paytone_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const firaSans = Fira_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HubFinance — L’intelligence des marchés",
  description: "Analyses, tendances et conversations qui façonnent la finance européenne.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className={`${paytoneOne.variable} ${firaSans.variable}`}><body>{children}</body></html>;
}
