import { Lock, Sparkles } from "lucide-react";
import treasureChestLogo from "@/assets/treasure-chest-logo.png";
import WalletConnect from "./WalletConnect";

export const Header = () => {
  return (
    <header className="relative z-10 flex items-center justify-between p-6 bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center gap-3">
        <img 
          src={treasureChestLogo} 
          alt="Treasure Chest Logo" 
          className="w-12 h-12 animate-rune-pulse"
        />
        <div>
          <h1 className="text-2xl font-bold gradient-treasure bg-clip-text text-transparent">
            Secret Loot Bid
          </h1>
          <p className="text-sm text-muted-foreground">Private Auction House</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-fantasy-mystic/20 rounded-lg border border-fantasy-mystic/30">
          <Lock className="w-4 h-4 text-fantasy-rune" />
          <span className="text-sm font-medium">Encrypted Bidding</span>
        </div>
        
        <WalletConnect />
      </div>
    </header>
  );
};