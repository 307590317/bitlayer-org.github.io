---
sidebar_position: 50
---

# How to Mint?

## Prerequisites

To get started, ensure you have wallets supporting BTC and EVM-compatible addresses, you can get test tokens from the [links](./GetTestToken.md).

- Bitcoin Testnet3
  - Wallet: [UniSat](https://unisat.io/) , [OKX Web3](https://www.okx.com/web3)
- Ethereum Sepolia Testnet
  - Wallet: [MetaMask](https://metamask.io/), [OKX Web3](https://www.okx.com/web3), [Coinbase Wallet
    ](https://www.coinbase.com/wallet)

## 1. Connect Bitcoin Wallet

#### 1.1 Visit [BitVM Bridge](https://bitvmbridge.bitlayer.org/), Connect Bitcoin Testnet3, and Sign in.

![Connect Bitcoin Wallet](/img/BitvmBridge/tutorial/connect-wallet.png)

#### 1.2 Confirm address and amount

Enter amount within 0.0001~0.001, and input your Sepolia address(If you have connected an EVM wallet, your EVM receiving address will be automatically filled in.).
![Connect Bitcoin Wallet](/img/BitvmBridge/tutorial/confirm-address-amount.png)

## 2. Pick your funding UTXOs

Please ensure the selected UTXOs are not associated with derivative assets like BRC20.
If UTXOs you choosed containes more BTC than you mint, extra BTC will back to your BTC address

![Pick your funding UTXOs](/img/BitvmBridge/tutorial/pick-your-funding-utxo.png)

## 3. Generate address for Deposit

The BitVM Bridge Network will generate a smart contract which will accept you BTC according to your peg-in request.
You can view the logic rules of this smart contract through a visualized diagram.
![Generate address for Deposit](/img/BitvmBridge/tutorial/generate-address-for-deposit.png)
![graph.png](/img/BitvmBridge/tutorial/graph.png)

## 4. Make your BTC Deposit

Confirm all information and transfer your BTC.
![Make your BTC Deposit](/img/BitvmBridge/tutorial/make-your-btc-deposit.png)

## 5. Mint your Peg-BTC on Ethereum

This operation will cost 20-30Mins, it is safe to close the window. Minting process will continue as a background process and will not be interrupted.

![Mint your Peg-BTC on Ethereum](/img/BitvmBridge/tutorial/mint-your-btc-on-ethereum.png)
