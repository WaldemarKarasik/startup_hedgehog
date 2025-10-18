import Comparison from "@/app/(landing)/_components/Comparison";
import CTA from "@/app/(landing)/_components/CTA";
import FAQ from "@/app/(landing)/_components/FAQ";
import Features from "@/app/(landing)/_components/Features";
import Hero from "@/app/(landing)/_components/Hero";
import Scenarios from "@/app/(landing)/_components/Scenarios";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

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
