---
sidebar_position: 1
sidebar_label: Overview
---

# Overview

The Bitlayer research team is dedicated to pushing the boundaries of what's possible with Bitcoin. We are actively developing and refining technologies that enhance Bitcoin's capabilities, making it more versatile, scalable, and efficient for a wider range of applications. Here's a glimpse into our current research focuses:

**1. Smart Contracts on Bitcoin:** Bitcoin, by design, has limited support for complex smart contracts. We are tackling this challenge head-on, developing solutions that enable a variety of smart contract functionalities on top of Bitcoin's robust and secure blockchain. Imagine:

- **Decentralized Bridges:** Seamlessly connecting Bitcoin to other blockchains, unlocking interoperability and expanding the Bitcoin ecosystem.
- **Scalable Rollups:** Moving transactions off-chain to increase throughput and reduce fees, while retaining the security guarantees of Bitcoin's base layer.
- **And Beyond:** Unlocking a myriad of other possibilities, from decentralized finance (DeFi) applications to trustless escrow services, all secured by Bitcoin's unparalleled security.

**2. Verifying Zero-Knowledge Proofs on Bitcoin:** Zero-knowledge proofs (ZKPs) are a revolutionary cryptographic tool that allows one party to prove the validity of a statement without revealing the underlying information. Integrating ZKP verification into Bitcoin's scripting language would be a game-changer, enabling **layer-2 scaling solutions** and **enhanced privacy**.

**3. L1 Verification Protocols:** We are pioneering innovative protocols that operate directly on Bitcoin's base layer (L1). These protocols are designed to **verify off-chain computing**, enabling secure and efficient off-chain computation, paving the way for more complex applications and scalability solutions.

**4. High-Performance L2 Transaction Execution:** To further enhance Bitcoin's capabilities, we are focused on developing technologies that enable lightning-fast execution of transactions on layer-2 solutions built on top of Bitcoin. 

## Research Outcomes

1. BitVM-Style Smart Contract
    - A feasible smart contract abstraction tailored for Bitcoin
    - A trust-minimized bridge smart contract for BTC Bridge (part of work is contributed to BitVM project)
    - A recursive state transition verification smart contract for Bitcoin rollup
2. Fraud Proofs on Bitcoin
    - Modeling fraud proofs specifically for Bitcoin
    - Establishing fraud-proof frameworks for the BTC Bridge and Bitcoin rollups
    - A practical method to design and implement feasible fraud-proof solutions for Bitcoin
3. Bitlayer Proof System
    - Groth16: optimizing script size and implementing chunker functionality, contributing to the BitVM project
    - TapSTARK: a hybrid proof system combining STARK and Bitcoin Taptree, addressing Merkle proof verification challenges in Bitcoin’s script language while bringing STARK’s advantages to BitVM2
    - BF-STARK: a next-generation STARK system for Bitcoin, contingent on future Bitcoin upgrades
4. Cryptography
    - Threshold Adapter Signatures to facilitate secure and efficient atomic swaps
