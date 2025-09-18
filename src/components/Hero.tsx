import { Sparkles, Lock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import dungeonBackground from "@/assets/dungeon-background.jpg";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${dungeonBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Floating runes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-fantasy-rune text-6xl animate-rune-pulse opacity-30">⚡</div>
        <div className="absolute top-40 right-20 text-fantasy-mystic text-4xl animate-rune-pulse opacity-20 animation-delay-500">✦</div>
        <div className="absolute bottom-32 left-20 text-fantasy-treasure text-5xl animate-rune-pulse opacity-25 animation-delay-1000">◈</div>
        <div className="absolute bottom-20 right-10 text-fantasy-ember text-3xl animate-rune-pulse opacity-30 animation-delay-1500">❋</div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-fantasy-shadow/80 rounded-full border border-fantasy-mystic/30 glow-mystic">
            <Lock className="w-5 h-5 text-fantasy-treasure" />
            <span className="text-sm font-medium">Secret Bidding • Revealed After Auction</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-treasure bg-clip-text text-transparent">Bid for Loot,</span>
          <br />
          <span className="gradient-mystic bg-clip-text text-transparent">Keep It Secret.</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Enter the mystical auction house where legendary treasures await. 
          Place your encrypted bids on rare loot boxes and discover what fortune holds when the magic reveals all.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="treasure" size="lg" className="gap-2 px-8 py-6 text-lg">
            <Sparkles className="w-5 h-5" />
            Start Bidding
          </Button>
          <Button variant="enchanted" size="lg" className="gap-2 px-8 py-6 text-lg">
            <Eye className="w-5 h-5" />
            View Auctions
          </Button>
        </div>
      </div>
    </section>
  );
};