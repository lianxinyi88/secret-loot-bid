# 🎮 Secret Loot Bid - Private Game Loot Auctions

> **Revolutionary decentralized auction platform for rare game loot boxes with encrypted bidding using Fully Homomorphic Encryption (FHE)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

## 🌟 What Makes This Special?

Secret Loot Bid is the first auction platform to implement **Fully Homomorphic Encryption (FHE)** for game loot box auctions. Built on Zama's FHEVM, it ensures complete privacy during the bidding process while maintaining transparency in the reveal phase.

### 🔐 Privacy-First Features

- **Encrypted Bidding**: All bid amounts remain completely private until reveal
- **Commit-Reveal Scheme**: Prevents front-running and bid manipulation
- **FHE Integration**: Uses Zama's FHEVM for blockchain-native encryption
- **Reputation System**: Trust-based bidding with encrypted reputation scores

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- A Web3 wallet (MetaMask, Rainbow, etc.)
- Sepolia ETH for gas fees

### Installation

```bash
# Clone the repository
git clone https://github.com/lianxinyi88/secret-loot-bid.git

# Navigate to project directory
cd secret-loot-bid

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup

Create a `.env.local` file:

```env
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLETCONNECT_ID
NEXT_PUBLIC_CONTRACT_ADDRESS=0x... # Your deployed contract
```

## 🏗️ Architecture

### Frontend Stack
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for component library
- **RainbowKit** for wallet integration

### Blockchain Integration
- **Ethereum Sepolia** testnet
- **Zama FHEVM** for homomorphic encryption
- **Wagmi** for Ethereum interactions
- **Viem** for low-level blockchain operations

### Smart Contract Features
- **Encrypted Reserve Prices**: Auction creators set encrypted minimum bids
- **Private Bidding**: All bids encrypted until reveal phase
- **Automated Winner Selection**: Smart contract determines highest bidder
- **Fund Management**: Secure escrow and distribution system

## 🎯 Core Functionality

### For Auction Creators
1. **Create Loot Box**: Set encrypted reserve price and auction duration
2. **Monitor Bids**: Track encrypted bid count and activity
3. **Reveal Results**: Automatically reveal winning bid after auction ends
4. **Withdraw Funds**: Secure fund distribution to winner

### For Bidders
1. **Connect Wallet**: Link your Web3 wallet securely
2. **Place Encrypted Bids**: Submit private bid amounts
3. **Reveal Bids**: Unlock your bid after auction ends
4. **Claim Rewards**: Winners automatically receive loot boxes

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Project Structure

```
src/
├── components/       # React components
├── hooks/           # Custom React hooks
├── lib/             # Utilities and configurations
├── pages/           # Page components
└── assets/          # Static assets
```

## 🛡️ Security Features

- **FHE Encryption**: All sensitive data encrypted using Zama's FHEVM
- **Commit-Reveal**: Prevents bid manipulation and front-running
- **Smart Contract Audits**: Contract designed with security best practices
- **Reputation System**: Discourages malicious behavior
- **Multi-signature Support**: Enhanced security for high-value auctions

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms

- **Netlify**: Static site hosting
- **GitHub Pages**: Free hosting for open source
- **AWS S3**: Scalable cloud hosting

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Project Wiki](https://github.com/lianxinyi88/secret-loot-bid/wiki)
- **Issues**: [GitHub Issues](https://github.com/lianxinyi88/secret-loot-bid/issues)
- **Discussions**: [GitHub Discussions](https://github.com/lianxinyi88/secret-loot-bid/discussions)

## 🙏 Acknowledgments

- **Zama** for FHEVM technology
- **Rainbow** for wallet integration
- **Vercel** for deployment platform
- **OpenZeppelin** for smart contract standards

---

**Built with ❤️ by the Secret Loot Bid team**
