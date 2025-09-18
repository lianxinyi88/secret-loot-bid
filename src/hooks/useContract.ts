import { useContract, useContractRead, useContractWrite, useAccount } from 'wagmi';
import { SECRET_LOOT_BID_ABI } from '@/lib/contract-abi';

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x0000000000000000000000000000000000000000';

export function useSecretLootBidContract() {
  return useContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: SECRET_LOOT_BID_ABI,
  });
}

export function useLootBoxInfo(boxId: number) {
  return useContractRead({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: SECRET_LOOT_BID_ABI,
    functionName: 'getLootBoxInfo',
    args: [BigInt(boxId)],
  });
}

export function useBidInfo(bidId: number) {
  return useContractRead({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: SECRET_LOOT_BID_ABI,
    functionName: 'getBidInfo',
    args: [BigInt(bidId)],
  });
}

export function useBidderReputation(bidder: string) {
  return useContractRead({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: SECRET_LOOT_BID_ABI,
    functionName: 'getBidderReputation',
    args: [bidder as `0x${string}`],
  });
}

export function useTotalBids(bidder: string) {
  return useContractRead({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: SECRET_LOOT_BID_ABI,
    functionName: 'getTotalBids',
    args: [bidder as `0x${string}`],
  });
}

export function useCreateLootBox() {
  return useContractWrite({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: SECRET_LOOT_BID_ABI,
    functionName: 'createLootBox',
  });
}

export function usePlaceBid() {
  return useContractWrite({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: SECRET_LOOT_BID_ABI,
    functionName: 'placeBid',
  });
}

export function useRevealBid() {
  return useContractWrite({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: SECRET_LOOT_BID_ABI,
    functionName: 'revealBid',
  });
}

export function useRevealLootBox() {
  return useContractWrite({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: SECRET_LOOT_BID_ABI,
    functionName: 'revealLootBox',
  });
}

export function useClaimLootBox() {
  return useContractWrite({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: SECRET_LOOT_BID_ABI,
    functionName: 'claimLootBox',
  });
}

export function useWithdrawFunds() {
  return useContractWrite({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: SECRET_LOOT_BID_ABI,
    functionName: 'withdrawFunds',
  });
}
