import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AuctionShowcase } from "@/components/AuctionShowcase";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AuctionShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
