import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HubFinance — L’intelligence des marchés",
  description: "Analyses, tendances et conversations qui façonnent la finance européenne.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
