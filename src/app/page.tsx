import Link from "next/link";
import About from "~/components/About";
import Flooring from "~/components/Flooring";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import RecentWork from "~/components/RecentWork";
import Reviews from "~/components/Reviews";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-primary text-white">
     <Hero />
     <About />
     <RecentWork />
     <Flooring />
     <Reviews />
     <Footer />
    </main>
  );
}
