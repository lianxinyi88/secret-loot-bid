import { LootBox } from "./LootBox";
import { Eye, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AuctionShowcase = () => {
  const featuredAuctions = [
    {
      title: "Dragon's Hoard Chest",
      rarity: "legendary" as const,
      currentBids: 47,
      timeLeft: "2h 34m",
      minBid: "5.2 ETH"
    },
    {
      title: "Mystic Rune Box",
      rarity: "epic" as const,
      currentBids: 23,
      timeLeft: "1h 18m", 
      minBid: "2.1 ETH"
    },
    {
      title: "Ancient Artifact Vault",
      rarity: "rare" as const,
      currentBids: 15,
      timeLeft: "4h 52m",
      minBid: "0.8 ETH"
    },
    {
      title: "Warrior's Cache",
      rarity: "epic" as const,
      currentBids: 31,
      timeLeft: "3h 07m",
      minBid: "1.5 ETH"
    },
    {
      title: "Enchanted Treasure",
      rarity: "rare" as const,
      currentBids: 12,
      timeLeft: "6h 21m",
      minBid: "0.6 ETH"
    },
    {
      title: "Celestial Mystery Box",
      rarity: "legendary" as const,
      currentBids: 62,
      timeLeft: "1h 45m",
      minBid: "8.3 ETH"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-shadow">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-fantasy-mystic/20 rounded-full border border-fantasy-mystic/30 glow-mystic mb-6">
            <TrendingUp className="w-5 h-5 text-fantasy-treasure" />
            <span className="text-sm font-medium">Live Auctions • Bidding Now</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-treasure bg-clip-text text-transparent">Featured</span>{" "}
            <span className="gradient-mystic bg-clip-text text-transparent">Loot Boxes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover legendary treasures in our most coveted auctions. 
            Place your secret bids and let fortune decide your fate.
          </p>
        </div>

        {/* Auction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredAuctions.map((auction, index) => (
            <LootBox
              key={index}
              title={auction.title}
              rarity={auction.rarity}
              currentBids={auction.currentBids}
              timeLeft={auction.timeLeft}
              minBid={auction.minBid}
            />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="enchanted"
            size="lg" 
            className="gap-2 px-8 py-6 text-lg"
          >
            <Eye className="w-5 h-5" />
            View All Auctions
          </Button>
        </div>
      </div>
    </section>
  );
};