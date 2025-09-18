import { Wallet, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import treasureChestLogo from "@/assets/treasure-chest-logo.png";

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
            LootVault
          </h1>
          <p className="text-sm text-muted-foreground">Private Auction House</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-fantasy-mystic/20 rounded-lg border border-fantasy-mystic/30">
          <Shield className="w-4 h-4 text-fantasy-rune" />
          <span className="text-sm font-medium">Encrypted Bidding</span>
        </div>
        
        <Button variant="enchanted" className="gap-2 hover:glow-treasure transition-all duration-300">
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </Button>
      </div>
    </header>
  );
};