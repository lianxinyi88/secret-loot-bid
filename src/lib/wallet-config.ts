import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';

// Use a valid WalletConnect project ID for development
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '2ec9743d0d0cd7fb94dee1a7e6d33475';

export const config = getDefaultConfig({
  appName: 'Secret Loot Bid',
  projectId: projectId,
  chains: [sepolia],
  ssr: false,
});

export const chainId = process.env.NEXT_PUBLIC_CHAIN_ID || '11155111';
export const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL || 'https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990';
