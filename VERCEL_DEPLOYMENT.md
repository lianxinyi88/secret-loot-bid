# Vercel Deployment Guide for Secret Loot Bid

This guide provides step-by-step instructions for deploying the Secret Loot Bid application to Vercel.

## Prerequisites

- Vercel account (free tier available)
- GitHub repository with the project code
- Environment variables configured

## Step-by-Step Deployment

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project" on the dashboard

### 2. Import Project

1. Select "Import Git Repository"
2. Find and select `lianxinyi88/secret-loot-bid`
3. Click "Import"

### 3. Configure Project Settings

#### Build Settings
- **Framework Preset**: Vite
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### Environment Variables
Add the following environment variables in the Vercel dashboard:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_CONTRACT_ADDRESS=0x0000000000000000000000000000000000000000
```

**Important**: Replace `NEXT_PUBLIC_CONTRACT_ADDRESS` with your actual deployed contract address.

### 4. Deploy

1. Click "Deploy" button
2. Wait for the build process to complete
3. Your application will be available at the provided Vercel URL

### 5. Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed by Vercel
4. Wait for SSL certificate to be issued

## Post-Deployment Configuration

### 1. Update Contract Address

After deploying your smart contract:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Update `NEXT_PUBLIC_CONTRACT_ADDRESS` with your deployed contract address
3. Redeploy the application

### 2. Verify Deployment

1. Visit your Vercel URL
2. Connect a wallet (MetaMask, Rainbow, etc.)
3. Ensure the application loads correctly
4. Test wallet connection functionality

## Environment Variables Reference

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `NEXT_PUBLIC_CHAIN_ID` | Ethereum chain ID | `11155111` (Sepolia) |
| `NEXT_PUBLIC_RPC_URL` | RPC endpoint URL | `https://sepolia.infura.io/v3/...` |
| `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` | WalletConnect project ID | `2ec9743d0d0cd7fb94dee1a7e6d33475` |
| `NEXT_PUBLIC_INFURA_API_KEY` | Infura API key | `b18fb7e6ca7045ac83c41157ab93f990` |
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | Deployed contract address | `0x...` |

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check that all dependencies are in `package.json`
   - Ensure TypeScript compilation passes
   - Verify environment variables are set

2. **Wallet Connection Issues**
   - Verify WalletConnect project ID is correct
   - Check that RPC URL is accessible
   - Ensure chain ID matches your target network

3. **Contract Interaction Issues**
   - Verify contract address is correct
   - Check that contract is deployed on the correct network
   - Ensure ABI matches the deployed contract

### Debug Steps

1. Check Vercel build logs for errors
2. Test locally with `npm run dev`
3. Verify environment variables in Vercel dashboard
4. Check browser console for JavaScript errors

## Monitoring and Analytics

### Vercel Analytics
- Enable Vercel Analytics in project settings
- Monitor performance and user behavior
- Track deployment success rates

### Error Tracking
- Consider adding error tracking (Sentry, LogRocket)
- Monitor wallet connection failures
- Track contract interaction errors

## Security Considerations

1. **Environment Variables**
   - Never commit sensitive keys to repository
   - Use Vercel's environment variable system
   - Rotate API keys regularly

2. **Smart Contract Security**
   - Audit contract code before deployment
   - Test on testnet before mainnet
   - Implement proper access controls

3. **Frontend Security**
   - Validate all user inputs
   - Implement proper error handling
   - Use HTTPS for all connections

## Performance Optimization

1. **Build Optimization**
   - Enable Vercel's automatic optimizations
   - Use code splitting for large bundles
   - Optimize images and assets

2. **Caching**
   - Configure appropriate cache headers
   - Use Vercel's edge caching
   - Implement client-side caching for static data

## Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor for security vulnerabilities
- Update contract addresses when needed

### Monitoring
- Set up alerts for deployment failures
- Monitor application performance
- Track user engagement metrics

## Support

For deployment issues:
1. Check Vercel documentation
2. Review build logs
3. Test locally first
4. Contact Vercel support if needed

For application issues:
1. Check GitHub issues
2. Review smart contract documentation
3. Test on different networks
4. Verify wallet compatibility
