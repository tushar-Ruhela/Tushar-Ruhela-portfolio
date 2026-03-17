import type { Metadata } from "next";
import Navbar  from "../components/Navbar";
import About   from "../components/About";
import Footer  from "../components/Footer";

export const metadata: Metadata = {
  title: "About — Tushar Ruhela",
  description: "Learn about Tushar Ruhela, a Full Stack Developer pursuing BE CSE at Chitkara University.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "var(--nav-h)" }}>
        <About />
      </main>
      <Footer />
    </>
  );
}
