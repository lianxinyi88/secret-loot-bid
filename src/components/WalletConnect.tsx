import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance } from 'wagmi';

export default function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({
    address: address,
  });

  return (
    <div className="flex items-center gap-4">
      <ConnectButton />
      {isConnected && balance && (
        <div className="text-sm text-gray-600">
          Balance: {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
        </div>
      )}
    </div>
  );
}
