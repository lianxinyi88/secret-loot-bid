import { Clock, Users, Lock, Sparkles } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import lootBoxesImage from "@/assets/loot-boxes.png";

interface LootBoxProps {
  title: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  currentBids: number;
  timeLeft: string;
  minBid: string;
  image?: string;
}

const rarityConfig = {
  common: {
    color: "bg-gray-500",
    glow: "glow-gray",
    label: "Common",
    borderColor: "border-gray-400/30"
  },
  rare: {
    color: "bg-blue-500",
    glow: "glow-mystic",
    label: "Rare",
    borderColor: "border-fantasy-rune/30"
  },
  epic: {
    color: "bg-purple-500", 
    glow: "glow-mystic",
    label: "Epic",
    borderColor: "border-fantasy-mystic/30"
  },
  legendary: {
    color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    glow: "glow-treasure",
    label: "Legendary",
    borderColor: "border-fantasy-treasure/30"
  }
};

export const LootBox = ({ title, rarity, currentBids, timeLeft, minBid }: LootBoxProps) => {
  const config = rarityConfig[rarity];
  
  return (
    <Card className={`group overflow-hidden bg-card/90 backdrop-blur-sm border ${config.borderColor} hover:${config.glow} transition-all duration-300 hover:scale-105`}>
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden h-48">
          <img 
            src={lootBoxesImage} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Badge 
            className={`absolute top-3 right-3 ${config.color} text-white font-semibold px-3 py-1`}
          >
            {config.label}
          </Badge>
          <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">Sealed Bids</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 gradient-treasure bg-clip-text text-transparent">
          {title}
        </h3>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{currentBids} secret bids</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{timeLeft} remaining</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-fantasy-treasure" />
            <span>Min bid: <span className="font-semibold text-fantasy-treasure">{minBid}</span></span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="treasure"
          className="w-full gap-2"
          size="sm"
        >
          <Lock className="w-4 h-4" />
          Place Secret Bid
        </Button>
      </CardFooter>
    </Card>
  );
};