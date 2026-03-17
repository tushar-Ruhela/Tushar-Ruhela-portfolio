import type { Metadata } from "next";
import { ThemeProvider } from "./components/ThemeProvider";
import Background from "./components/Background";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tushar Ruhela | Full Stack Developer",
  description:
    "Tushar Ruhela — Full Stack Developer, BE CSE at Chitkara University. Building scalable web applications and solving real-world problems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Background />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
