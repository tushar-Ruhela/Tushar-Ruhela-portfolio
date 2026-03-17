import type { Metadata } from "next";
import Navbar    from "../components/Navbar";
import Education from "../components/Education";
import Footer    from "../components/Footer";

export const metadata: Metadata = {
  title: "Education — Tushar Ruhela",
  description: "Tushar Ruhela — BE Computer Science student at Chitkara University.",
};

export default function EducationPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "var(--nav-h)" }}>
        <Education />
      </main>
      <Footer />
    </>
  );
}
