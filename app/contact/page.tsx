import type { Metadata } from "next";
import Navbar  from "../components/Navbar";
import Contact from "../components/Contact";
import Footer  from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact — Tushar Ruhela",
  description: "Get in touch with Tushar Ruhela — email, LinkedIn, and GitHub.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "var(--nav-h)" }}>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
