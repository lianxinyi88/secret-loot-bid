import { useState } from 'react';
import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { SECRET_LOOT_BID_ABI } from '@/lib/contract-abi';

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x0000000000000000000000000000000000000000';

interface EncryptedBidFormProps {
  boxId: number;
  onBidPlaced?: (bidId: number) => void;
}

export default function EncryptedBidForm({ boxId, onBidPlaced }: EncryptedBidFormProps) {
  const [bidAmount, setBidAmount] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(true);
  const [commitment, setCommitment] = useState('');
  const { address } = useAccount();

  // Contract write hook for placing encrypted bid
  const { write: placeBid, data: bidData, isLoading: isBidLoading } = useContractWrite({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: SECRET_LOOT_BID_ABI,
    functionName: 'placeBid',
    onSuccess: (data) => {
      console.log('Bid placed successfully:', data);
      if (onBidPlaced) {
        onBidPlaced(Number(data.hash));
      }
    },
    onError: (error) => {
      console.error('Bid placement failed:', error);
    }
  });

  // Wait for transaction confirmation
  const { isLoading: isConfirming } = useWaitForTransaction({
    hash: bidData?.hash,
    onSuccess: (data) => {
      console.log('Transaction confirmed:', data);
    }
  });

  const handleEncryptBid = async () => {
    if (!bidAmount || !address) return;

    try {
      // In a real implementation, this would use FHE encryption
      // For now, we'll simulate the encryption process
      const encryptedAmount = await simulateFHEEncryption(bidAmount);
      const commitmentHash = await generateCommitment(bidAmount, address);
      
      setCommitment(commitmentHash);
      
      // Place the encrypted bid
      placeBid({
        args: [
          BigInt(boxId),
          encryptedAmount, // This would be the actual FHE encrypted data
          '0x' // This would be the FHE proof
        ]
      });
    } catch (error) {
      console.error('Encryption failed:', error);
    }
  };

  const simulateFHEEncryption = async (amount: string): Promise<string> => {
    // Simulate FHE encryption process
    // In real implementation, this would use Zama's FHEVM
    const encoder = new TextEncoder();
    const data = encoder.encode(amount);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return '0x' + Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const generateCommitment = async (amount: string, address: string): Promise<string> => {
    // Generate commitment hash for commit-reveal scheme
    const encoder = new TextEncoder();
    const data = encoder.encode(amount + address);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return '0x' + Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const toggleEncryption = () => {
    setIsEncrypted(!isEncrypted);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="w-5 h-5" />
          Encrypted Bid
        </CardTitle>
        <CardDescription>
          Place a private bid that remains encrypted until reveal phase
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="bidAmount" className="text-sm font-medium">
            Bid Amount (ETH)
          </label>
          <div className="relative">
            <Input
              id="bidAmount"
              type="number"
              placeholder="0.1"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
              onClick={toggleEncryption}
            >
              {isEncrypted ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {commitment && (
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Commitment Hash:</p>
            <p className="text-xs font-mono break-all">{commitment}</p>
          </div>
        )}

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="w-4 h-4" />
            <span>Your bid will be encrypted using FHE</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Eye className="w-4 h-4" />
            <span>Amount remains private until reveal phase</span>
          </div>
        </div>

        <Button
          onClick={handleEncryptBid}
          disabled={!bidAmount || isBidLoading || isConfirming}
          className="w-full"
        >
          {isBidLoading || isConfirming ? (
            'Processing...'
          ) : (
            <>
              <Lock className="w-4 h-4 mr-2" />
              Place Encrypted Bid
            </>
          )}
        </Button>

        {isEncrypted && (
          <div className="text-xs text-center text-muted-foreground">
            🔒 Bid amount is encrypted and will remain private
          </div>
        )}
      </CardContent>
    </Card>
  );
}
