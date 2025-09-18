import { Flame, Shield, Zap, Sparkles } from "lucide-react";
import dungeonTorch from "@/assets/dungeon-torch.png";

export const Footer = () => {
  return (
    <footer className="relative bg-fantasy-shadow border-t border-fantasy-mystic/20 overflow-hidden">
      {/* Animated torch icons */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <img 
          src={dungeonTorch} 
          alt="Torch" 
          className="absolute top-4 left-10 w-8 h-16 flame-flicker" 
        />
        <img 
          src={dungeonTorch} 
          alt="Torch" 
          className="absolute top-4 right-10 w-8 h-16 flame-flicker animation-delay-500" 
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold gradient-treasure bg-clip-text text-transparent mb-4">
              LootVault Auction House
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The premier destination for encrypted loot auctions. 
              Bid on legendary treasures with complete privacy until the magical reveal.
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-fantasy-mystic/20 rounded-lg border border-fantasy-mystic/30">
                <Shield className="w-5 h-5 text-fantasy-rune" />
              </div>
              <div className="p-2 bg-fantasy-treasure/20 rounded-lg border border-fantasy-treasure/30">
                <Zap className="w-5 h-5 text-fantasy-treasure animate-rune-pulse" />
              </div>
              <div className="p-2 bg-fantasy-ember/20 rounded-lg border border-fantasy-ember/30">
                <Sparkles className="w-5 h-5 text-fantasy-ember" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-fantasy-treasure">Auctions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-fantasy-treasure transition-colors">Active Bids</a></li>
              <li><a href="#" className="hover:text-fantasy-treasure transition-colors">Upcoming</a></li>
              <li><a href="#" className="hover:text-fantasy-treasure transition-colors">Completed</a></li>
              <li><a href="#" className="hover:text-fantasy-treasure transition-colors">My History</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-fantasy-mystic">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-fantasy-mystic transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-fantasy-mystic transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-fantasy-mystic transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-fantasy-mystic transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-fantasy-mystic/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 LootVault. All magical rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-fantasy-ember animate-flame-flicker" />
              Powered by Ancient Magic
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};