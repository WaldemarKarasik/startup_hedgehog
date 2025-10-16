import Comparison from "@/src/components/landing/Comparison";
import CTA from "@/src/components/landing/CTA";
import FAQ from "@/src/components/landing/FAQ";
import Features from "@/src/components/landing/Features";
import Hero from "@/src/components/landing/Hero";
import Scenarios from "@/src/components/landing/Scenarios";
import Footer from "@/src/landing/components/Footer";
import Header from "@/src/landing/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Comparison />
        <Scenarios />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
