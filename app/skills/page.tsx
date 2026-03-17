import type { Metadata } from "next";
import Navbar  from "../components/Navbar";
import Skills  from "../components/Skills";
import Footer  from "../components/Footer";

export const metadata: Metadata = {
  title: "Skills — Tushar Ruhela",
  description: "Tech stack and skills of Tushar Ruhela — React, Node.js, WebRTC, MongoDB and more.",
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "var(--nav-h)" }}>
        <Skills />
      </main>
      <Footer />
    </>
  );
}
