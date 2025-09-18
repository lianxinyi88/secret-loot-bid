import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Secret Loot Bid',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'YOUR_WALLETCONNECT_ID',
  chains: [sepolia],
  ssr: false,
});

export const chainId = process.env.NEXT_PUBLIC_CHAIN_ID || '11155111';
export const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL || 'https://sepolia.infura.io/v3/YOUR_INFURA_KEY';
