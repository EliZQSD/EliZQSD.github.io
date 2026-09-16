import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elimane Sall — Creative Project Management & Production",
  description: "Selected creative projects managed and coordinated by Elimane Sall across entertainment, sport and digital production.",
  keywords: ["Elimane Sall", "creative project management", "production", "talent coordination", "ASH Talents"],
  authors: [{ name: "Elimane Sall" }],
  creator: "Elimane Sall",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Elimane Sall — Creative Project Management & Production",
    description: "Behind creative work, there is execution.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
