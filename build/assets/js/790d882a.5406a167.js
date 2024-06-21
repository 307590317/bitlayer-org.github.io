"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9880],{5509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(4848),i=t(8453);const r={sidebar_position:6},c="BTC Connect (Account Abstraction)",s={id:"DeveloperResources/BTC Connect",title:"BTC Connect (Account Abstraction)",description:"Particle Network's BTC Connect is the first account abstraction protocol for the Bitcoin ecosystem. It unifies smart accounts on Bitcoin Layer-2s and standard BTC accounts through native wallet interfaces. To achieve this, Particle Network has deployed ERC-4337 AA infrastructure natively on Bitlayer, which developers can tap into to leverage smart accounts.",source:"@site/docs/DeveloperResources/BTC Connect.md",sourceDirName:"DeveloperResources",slug:"/DeveloperResources/BTC Connect",permalink:"/docs/DeveloperResources/BTC Connect",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Block Explorers",permalink:"/docs/DeveloperResources/Block Explorers"},next:{title:"Bitlayer Scan APIs",permalink:"/docs/category/bitlayer-scan-apis"}},a={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Dashboard Configuration",id:"dashboard-configuration",level:3},{value:"Dependency Installation",id:"dependency-installation",level:3},{value:"Configuring BTC Connect",id:"configuring-btc-connect",level:2},{value:"Application Implementation",id:"application-implementation",level:2},{value:"Part 1: Interacting with BTC Connect through an EIP-1193 Provider",id:"part-1-interacting-with-btc-connect-through-an-eip-1193-provider",level:3},{value:"Part 2: Facilitating Wallet Connection",id:"part-2-facilitating-wallet-connection",level:3},{value:"Part 3: Transaction Execution",id:"part-3-transaction-execution",level:3},{value:"Bitlayer (EVM)",id:"bitlayer-evm",level:4},{value:"Bitcoin (L1)",id:"bitcoin-l1",level:4},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"btc-connect-account-abstraction",children:"BTC Connect (Account Abstraction)"}),"\n",(0,o.jsx)(n.p,{children:"Particle Network's BTC Connect is the first account abstraction protocol for the Bitcoin ecosystem. It unifies smart accounts on Bitcoin Layer-2s and standard BTC accounts through native wallet interfaces. To achieve this, Particle Network has deployed ERC-4337 AA infrastructure natively on Bitlayer, which developers can tap into to leverage smart accounts."}),"\n",(0,o.jsx)(n.p,{children:"BTC Connect achieves this by, firstly, allowing users to connect to your dApp with their UniSat, OKX, TokenPocket, Bybit, or Bitget wallet. Upon connecting, a smart account is generated on Bitlayer and assigned to their BTC account. This smart account can then be used and authenticated directly through their BTC wallet, providing native Bitcoin users with a simple interface to interact with applications on Bitlayer."}),"\n",(0,o.jsxs)(n.p,{children:["BTC Connect natively supports Bitlayer within its flagship SDK, ",(0,o.jsx)(n.code,{children:"@particle-network/btc-connectkit"}),", and has been deployed on Testnet and Mainnet. This document will provide an initial introduction and step-by-step guide to working with BTC Connect on Bitlayer through this SDK."]}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["Throughout this page, you'll find details on installing, configuring, initializing, and completing a full integration of BTC Connect within your application on Bitlayer. Specifically, this guide will contextualize this process by building a simple ",(0,o.jsx)(n.code,{children:"create-react-app"})," demo application. Before starting, you can find this application ",(0,o.jsx)(n.a,{href:"https://github.com/TABASCOatw/particle-bitlayer-demo",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To learn more about BTC Connect, head over to ",(0,o.jsx)(n.a,{href:"https://developers.particle.network/reference/introduction-to-btc-connect",children:"Particle Network's documentation"}),"."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Before configuring and implementing BTC Connect, you'll need to meet the following prerequisites:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Have a project and application configured within the ",(0,o.jsx)(n.a,{href:"https://dashboard.particle.network",children:"Particle dashboard"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Prepare a ",(0,o.jsx)(n.code,{children:"create-react-app"})," or ",(0,o.jsx)(n.code,{children:"Next.js"})," application structure to integrate BTC Connect with the required dependencies installed."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"dashboard-configuration",children:"Dashboard Configuration"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://dashboard.particle.network",children:"Particle Network's dashboard"})," acts as the central control panel for all applications that use BTC Connect or Smart Wallet-as-a-Service. To use and authenticate BTC Connect, you'll need to retrieve various keys from this dashboard, which you can be do through the following process:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Head over to the ",(0,o.jsx)(n.a,{href:"https://dashboard.particle.network",children:"Particle dashboard"}),", and either login or create a new account."]}),"\n",(0,o.jsx)(n.li,{children:"Create a new project for your application."}),"\n",(0,o.jsx)(n.li,{children:"After opening this project, create a web application representing your dApp."}),"\n",(0,o.jsxs)(n.li,{children:["Finally, with an application made, copy your ",(0,o.jsx)(n.strong,{children:"Project ID"}),", ",(0,o.jsx)(n.strong,{children:"Client Key"}),", and ",(0,o.jsx)(n.strong,{children:"App ID"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You'll be using these three values momentarily to configure BTC Connect. If applicable, you can save these within corresponding environment variables, such as ",(0,o.jsx)(n.code,{children:"REACT_APP_PROJECT_ID"}),", ",(0,o.jsx)(n.code,{children:"REACT_APP_CLIENT_KEY"}),", and ",(0,o.jsx)(n.code,{children:"REACT_APP_APP_ID"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"dependency-installation",children:"Dependency Installation"}),"\n",(0,o.jsxs)(n.p,{children:["Within your React-based application (in this example, we'll be using ",(0,o.jsx)(n.code,{children:"create-react-app"}),"), you'll need to install two key dependencies related to BTC Connect. These are:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@particle-network/btc-connectkit"}),", the primary SDK for BTC Connect."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@particle-network/chains"}),", a collection of chain objects including ",(0,o.jsx)(n.code,{children:"BitlayerTestnet"})," and ",(0,o.jsx)(n.code,{children:"Bitlayer"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"To install these libraries, run one of the following commands within your project:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"yarn add @particle-network/btc-connectkit @particle-network/chains\n\n\n# OR\n\n\nnpm install @particle-network/btc-connectkit @particle-network/chains\n\n\n# Other package managers such as pnpm would work too.\n"})}),"\n",(0,o.jsx)(n.h2,{id:"configuring-btc-connect",children:"Configuring BTC Connect"}),"\n",(0,o.jsxs)(n.p,{children:["BTC Connect (",(0,o.jsx)(n.code,{children:"@particle-network/btc-connectkit"}),") is a React-based SDK. Therefore, configuring it and preparing for integration will require the initialization of a corresponding React component, which will wrap your core application component or JSX. In this example, this will take place within ",(0,o.jsx)(n.code,{children:"index.tsx"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Within your ",(0,o.jsx)(n.code,{children:"index.tsx"})," file (or the equivalent location for your project), import the following objects from ",(0,o.jsx)(n.code,{children:"@particle-network/btc-connectkit"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ConnectProvider"}),", the React component used for configuration."]}),"\n",(0,o.jsxs)(n.li,{children:["One, or multiple of the following wallets:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"OKXConnector"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"UnisatConnector"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"BitgetConnector"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"TokenPocketConnector"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"BybitConnector"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["With these imported, you're ready to configure the ",(0,o.jsx)(n.code,{children:"ConnectProvider"})," component through its ",(0,o.jsx)(n.code,{children:"options"})," and ",(0,o.jsx)(n.code,{children:"connectors"})," parameters. Starting with ",(0,o.jsx)(n.code,{children:"options"}),", you'll need to define the following properties:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"projectId"}),", ",(0,o.jsx)(n.code,{children:"clientKey"}),", and ",(0,o.jsx)(n.code,{children:"appId"}),". These were previously retrieved from the ",(0,o.jsx)(n.a,{href:"https://dashboard.particle.network",children:"Particle dashboard"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"aaOptions"}),", which contains ",(0,o.jsx)(n.code,{children:"accountContracts"}),", taking:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"BTC"}),", the smart account implementation you'll be leveraging.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"chainIds"}),", one or multiple chains that your application will support. In this case, you can either use Bitlayer's chain ID, ",(0,o.jsx)(n.code,{children:"200810"}),", or ",(0,o.jsx)(n.code,{children:"BitlayerTestnet.id"})," from ",(0,o.jsx)(n.code,{children:"@particle-network/chains"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"version"}),", the BTC smart account version you intend to use. For Bitlayer, this should be ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"2.0.0"})}),". If you intend to use more than just Bitlayer, you may need to define another instance of ",(0,o.jsx)(n.code,{children:"BTC"})," using ",(0,o.jsx)(n.code,{children:"version"})," ",(0,o.jsx)(n.code,{children:"1.0.0"}),". For more information on which chains support ",(0,o.jsx)(n.code,{children:"1.0.0"})," and which support ",(0,o.jsx)(n.code,{children:"2.0.0"}),", head over to ",(0,o.jsx)(n.a,{href:"https://developers.particle.network/docs/network-coverage#btc-connect",children:"Particle Network's documentation"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"walletOptions"}),", which contains:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"visible"}),", a Boolean determining whether or not Particle Network's embedded wallet modal will be shown after a user connects their Bitcoin wallet. If set to ",(0,o.jsx)(n.code,{children:"true"}),", users will have direct access to their associated smart accounts through this embedded interface. Otherwise, if ",(0,o.jsx)(n.code,{children:"false"}),", developers will need to retrieve and reflect wallet information, such as balances, independently."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Once you've defined ",(0,o.jsx)(n.code,{children:"options"})," using the parameters detailed above, you'll need to select the wallets you'd like to be supported within BTC Connect through the ",(0,o.jsx)(n.code,{children:"connectors"})," property."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"connectors"})," is simply an array of wallet objects ( previously imported), such as ",(0,o.jsx)(n.code,{children:"OKXConnector"}),". These should be initialized through syntax such as ",(0,o.jsx)(n.code,{children:"[new OKXConnector(), new UnisatConnector()]"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Below is an example of what a configured instance of ",(0,o.jsx)(n.code,{children:"ConnectProvider"})," typically looks like; this is demonstrated through a central ",(0,o.jsx)(n.code,{children:"index.tsx"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport {\n  ConnectProvider,\n  OKXConnector, //\n  UnisatConnector, //\n  BitgetConnector, // -- Only one connector is required, although any combination of these five may be used.\n  TokenPocketConnector, //\n  BybitConnector // \n} from '@particle-network/btc-connectkit';\nimport { BitlayerTestnet } from '@particle-network/chains';\n\n\n\n\n// The component in which you're using BTC Connect\nimport App from './App';\n\n\n\n\nReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(\n  <React.StrictMode>\n    <ConnectProvider\n      options={{\n        projectId: process.env.REACT_APP_PROJECT_ID, //\n        clientKey: process.env.REACT_APP_CLIENT_KEY, // -- Retrieved from https://dashboard.particle.network\n        appId: process.env.REACT_APP_APP_ID, //\n        aaOptions: {\n          accountContracts: {\n            BTC: [\n              {\n                chainIds: [BitlayerTestnet.id],\n                version: '2.0.0',\n              }\n            ]\n          }\n        },\n        walletOptions: {\n          visible: true\n        }\n      }}\n      connectors={[new UnisatConnector(), new OKXConnector(), new BitgetConnector(), new TokenPocketConnector(), new BybitConnector()]}\n    >\n      <App />\n    </ConnectProvider>\n  </React.StrictMode>\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once ",(0,o.jsx)(n.code,{children:"ConnectProvider"})," is configured, you're ready to implement BTC Connect through your central application component."]}),"\n",(0,o.jsx)(n.h2,{id:"application-implementation",children:"Application Implementation"}),"\n",(0,o.jsx)(n.p,{children:"At this point, you should have:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Created a new project and application through the ",(0,o.jsx)(n.a,{href:"https://dashboard.particle.network",children:"Particle dashboard"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Installed ",(0,o.jsx)(n.code,{children:"@particle-network/btc-connectkit"})," and ",(0,o.jsx)(n.code,{children:"@particle-network/chains"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Configured BTC Connect through ",(0,o.jsx)(n.code,{children:"ConnectProvider"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Now, to integrate BTC Connect, we'll do the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Configure Ethers, or any other standard Web3 library (such as Web3.js) using hooks from ",(0,o.jsx)(n.code,{children:"@particle-network/btc-connectkit"}),"."]}),"\n",(0,o.jsx)(n.li,{children:'Prepare a "Connect Wallet" button.'}),"\n",(0,o.jsx)(n.li,{children:"Test BTC Connect by executing transactions on both Bitlayer and native Bitcoin."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"part-1-interacting-with-btc-connect-through-an-eip-1193-provider",children:"Part 1: Interacting with BTC Connect through an EIP-1193 Provider"}),"\n",(0,o.jsxs)(n.p,{children:["Interaction with BTC Connect can be facilitated either natively through the SDK \u2013with functions from the ",(0,o.jsx)(n.code,{children:"useETHProvider"})," hook, such as ",(0,o.jsx)(n.code,{children:"buildUserOp"})," (for constructing transactions) and ",(0,o.jsx)(n.code,{children:"sendUserOp"})," (for executing them), or through an external Web3 library such as Ethers. In this example, we'll focus on the latter."]}),"\n",(0,o.jsx)(n.p,{children:"Specifically, leveraging the user's smart account on Bitlayer through Ethers requires using BTC Connect's EIP-1193 provider object. After a user connects, this object will be populated with an EVM account instance."}),"\n",(0,o.jsxs)(n.p,{children:["To retrieve this object, you'll need to define ",(0,o.jsx)(n.code,{children:"provider"})," from the ",(0,o.jsx)(n.code,{children:"useETHProvider"})," hook. Using ",(0,o.jsx)(n.code,{children:"provider"}),", an instance of Ethers (or Web3.js, viem, etc.) can be constructed, as shown below."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { useETHProvider, useBTCProvider, useConnectModal, useConnector } from '@particle-network/btc-connectkit';\nimport { ethers } from 'ethers';\n\n\nconst App = () => {\n    const { provider } = useETHProvider();\n    \n    const customProvider = new ethers.providers.Web3Provider(provider, \"any\");\n    \n    ...\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"This Ethers instance can be used directly for transaction construction and execution. Signatures will be pushed to the connected Bitcoin wallet directly through the means of the EIP-1193 provider."}),"\n",(0,o.jsx)(n.h3,{id:"part-2-facilitating-wallet-connection",children:"Part 2: Facilitating Wallet Connection"}),"\n",(0,o.jsx)(n.p,{children:"Wallet connection can be implemented through one of two ways with BTC Connect:"}),"\n",(0,o.jsxs)(n.p,{children:["The first method requires using BTC Connect's built-in connection modal, which contains buttons for the wallets previously defined within ",(0,o.jsx)(n.code,{children:"connectors"})," (on ",(0,o.jsx)(n.code,{children:"ConnectProvider"}),"). Below is a screenshot of this interface."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://files.readme.io/3bf67a6-connectmodal_1.png",alt:""})}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, direct shortcuts to these wallets (independent from the above interface) can be configured in scenarios where you may want to design your own wallet connection interface."}),"\n",(0,o.jsxs)(n.p,{children:["Starting with the built-in modal, this can be opened by simply calling ",(0,o.jsx)(n.code,{children:"openConnectModal"})," from the ",(0,o.jsx)(n.code,{children:"useConnectModal"})," hook; upon calling, the aforementioned interface will be opened. An example of this has been included below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { useETHProvider, useBTCProvider, useConnectModal, useConnector } from '@particle-network/btc-connectkit';\nimport { ethers } from 'ethers';\nimport './App.css';\n\n\n\n\nconst App = () => {\n  const { openConnectModal } = useConnectModal();\n    \n  ...\n  \n  openConnectModal();\n\n\n  ...\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For a more hands-on approach to designing your own interface, you can connect to individual wallets using the ",(0,o.jsx)(n.code,{children:"connect"})," function from the ",(0,o.jsx)(n.code,{children:"useConnector"})," hook. This function will simply take a string representing the wallet you'd like to connect to, such as ",(0,o.jsx)(n.code,{children:"'unisat'"}),", as shown below."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { useETHProvider, useBTCProvider, useConnector, useConnector } from '@particle-network/btc-connectkit';\nimport { ethers } from 'ethers';\nimport './App.css';\n\n\n\n\nconst App = () => {\n  const { connect } = useConnector();\n    \n  ...\n  \n  connect('unisat');\n  // Or 'okx', 'bybit', etc.\n    \n  ...\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"part-3-transaction-execution",children:"Part 3: Transaction Execution"}),"\n",(0,o.jsx)(n.h4,{id:"bitlayer-evm",children:"Bitlayer (EVM)"}),"\n",(0,o.jsx)(n.p,{children:"Now that you've facilitated wallet connection and configured a corresponding Ethers object, you're ready to execute transactions on Bitlayer using the associated smart account generated from the user's Bitcoin wallet."}),"\n",(0,o.jsxs)(n.p,{children:["Using Ethers, this is done by constructing a simple transaction (using standard fields such as ",(0,o.jsx)(n.code,{children:"to"}),", ",(0,o.jsx)(n.code,{children:"value"}),", ",(0,o.jsx)(n.code,{children:"data"}),", etc.) and executing it using the ",(0,o.jsx)(n.code,{children:"signer"})," property with ",(0,o.jsx)(n.code,{children:"customProvider.getSigner()"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Any transaction that can be constructed and executed through Ethers translates 1:1 within this flow."}),"\n",(0,o.jsx)(n.p,{children:"Below is an example that burns 0.001 BTC."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'const executeTxEvm = async () => {\n    const signer = customProvider.getSigner();\n\n\n\n\n    const tx = {\n      to: "0x000000000000000000000000000000000000dEaD", // Burn address\n      value: ethers.utils.parseEther(\'0.001\'), // 0.001 BTC\n      data: "0x" // Optional, only define for contract interaction or related operations\n    };\n\n\n\n\n    // Gasless due to usage of SendTransactonMode.Gasless within customProvider\n    const txResponse = await signer.sendTransaction(tx);\n    const txReceipt = await txResponse.wait();\n\n\n\n\n    notification.success({\n      message: "Transaction Successful",\n      description: (\n        <div>\n          Transaction Hash: <a href={`https://testnet-scan.bitlayer.org/en-us/tx/${txReceipt.transactionHash}`} target="_blank" rel="noopener noreferrer">{txReceipt.transactionHash}</a>\n        </div>\n      )\n    });\n};\n'})}),"\n",(0,o.jsx)(n.p,{children:"Upon executing, a signature will be requested from the connected Bitcoin wallet. This signature will directly authenticate the associated smart account on Bitlayer."}),"\n",(0,o.jsx)(n.h4,{id:"bitcoin-l1",children:"Bitcoin (L1)"}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, the same wallet connection can be used to simultaneously execute transactions on native Bitcoin."}),"\n",(0,o.jsxs)(n.p,{children:["To handle this, BTC Connect has the ",(0,o.jsx)(n.code,{children:"useBTCProvider"})," hook, containing functions such as ",(0,o.jsx)(n.code,{children:"sendBitcoin"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"sendBitcoin"})," will send a standard P2P transaction on Bitcoin, requesting a signature from the user's connected Bitcoin wallet. The snippet shown below demonstrates an example of this through a custom function, ",(0,o.jsx)(n.code,{children:"executeTxBtc"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { useETHProvider, useBTCProvider, useConnector, useConnector } from '@particle-network/btc-connectkit';\nimport './App.css';\n\n\nconst App = () => {\n    const { sendBitcoin, accounts } = useBTCProvider();\n    \n    const executeTxBtc = async () => {    \n        // Sends 1 satoshi back to the sender\n        const hash = await sendBitcoin(accounts[0], 1);\n\n\n\n\n        notification.success({\n          message: 'Transaction Successful',\n          description: (\n            <div>\n              Transaction Hash: <a href={`https://live.blockcypher.com/btc-testnet/tx/${hash}`} target=\"_blank\" rel=\"noopener noreferrer\">{hash}</a>\n            </div>\n          )\n        });\n      };\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"Through the above guide, you should now understand how to:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Configure the ",(0,o.jsx)(n.a,{href:"https://dashboard.particle.network",children:"Particle Network dashboard"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Install and initialize BTC Connect (",(0,o.jsx)(n.code,{children:"@particle-network/btc-connectkit"}),")."]}),"\n",(0,o.jsx)(n.li,{children:"Construct a custom Ethers provider to manage the user's smart account."}),"\n",(0,o.jsx)(n.li,{children:"Facilitate wallet connection."}),"\n",(0,o.jsx)(n.li,{children:"Build and execute transactions on both Bitlayer and native Bitcoin."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To view and try a complete demo application based on the snippets shown in this guide, visit our ",(0,o.jsx)(n.a,{href:"https://github.com/TABASCOatw/particle-bitlayer-demo",children:"dedicated GitHub repository"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://particle.network",children:"Particle Network"})," has extensive documentation covering the implementation of BTC Connect within applications built on Bitlayer, which can be found ",(0,o.jsx)(n.a,{href:"https://developers.particle.network/reference/introduction-to-btc-connect",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var o=t(6540);const i={},r=o.createContext(i);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);