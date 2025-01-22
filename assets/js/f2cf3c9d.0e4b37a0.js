"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4729],{5580:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"Build/GettingStarted/QuickStart","title":"Quick Start Guide","description":"Your tools for building and testing smart contracts can work on Bitlayer smoothly as Bitlayer boasting 100% EVM and Ethereum toolchain compatibility.","source":"@site/docs/Build/GettingStarted/QuickStart.md","sourceDirName":"Build/GettingStarted","slug":"/Build/GettingStarted/QuickStart","permalink":"/docs/Build/GettingStarted/QuickStart","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"buildSidebar","next":{"title":"Compile, Run and Deploy","permalink":"/docs/Build/GettingStarted/CompileAndRun"}}');var s=r(4848),i=r(8453);const l={sidebar_position:1},d="Quick Start Guide",a={},o=[{value:"Network Configuration",id:"network-configuration",level:2},{value:"Bitlayer Mainnet",id:"bitlayer-mainnet",level:3},{value:"Bitlayer Testnet",id:"bitlayer-testnet",level:3},{value:"Hardhat",id:"hardhat",level:4},{value:"Foundry",id:"foundry",level:4},{value:"Remix Web IDE",id:"remix-web-ide",level:4},{value:"Truffle",id:"truffle",level:4},{value:"Brownie",id:"brownie",level:4},{value:"ethers.js",id:"ethersjs",level:4},{value:"scaffold-eth",id:"scaffold-eth",level:4},{value:"Configure Hardhat",id:"configure-hardhat",level:4}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"quick-start-guide",children:"Quick Start Guide"})}),"\n",(0,s.jsx)(t.p,{children:"Your tools for building and testing smart contracts can work on Bitlayer smoothly as Bitlayer boasting 100% EVM and Ethereum toolchain compatibility."}),"\n",(0,s.jsx)(t.admonition,{title:"Note:",type:"tip",children:(0,s.jsx)(t.p,{children:"We currently support Solidity up to version v0.8.23. Updates for newer versions might be delayed."})}),"\n",(0,s.jsx)(t.h2,{id:"network-configuration",children:"Network Configuration"}),"\n",(0,s.jsx)(t.h3,{id:"bitlayer-mainnet",children:"Bitlayer Mainnet"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Network Name"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Bitlayer Mainnet"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Chain ID"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"200901"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Currency Symbol"}),(0,s.jsx)(t.td,{children:"BTC"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Explorer"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://www.btrscan.com",children:"https://www.btrscan.com"}),",  ",(0,s.jsx)(t.a,{href:"https://www.okx.com/zh-hans/web3/explorer/bitlayer",children:"OKX Explorer"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Public RPC URLs"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://rpc.bitlayer.org",children:"https://rpc.bitlayer.org"}),", ",(0,s.jsx)(t.a,{href:"https://rpc.bitlayer-rpc.com",children:"https://rpc.bitlayer-rpc.com"}),", ",(0,s.jsx)(t.a,{href:"https://rpc.ankr.com/bitlayer",children:"https://rpc.ankr.com/bitlayer"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"WebSocket"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("div",{children:"wss://ws.bitlayer.org"}),(0,s.jsx)("div",{children:"wss://ws.bitlayer-rpc.com"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Contract Addresses"}),(0,s.jsxs)(t.td,{children:["Refer to the ",(0,s.jsx)(t.a,{href:"/docs/Build/DeveloperResources/Contracts",children:"Contract Addresses page"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Connect Wallet"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://chainlist.org/?search=bitlayer",children:"Click here to connect your wallet to Bitlayer Mainnet"})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://medium.com/@Bitlayer/introducing-bitlayer-mainnet-v1-unlocking-the-potential-of-bitcoin-56c5fa2159fd",children:"Introducing Bitlayer Mainnet-V1: Unlocking the Potential of Bitcoin"})}),"\n",(0,s.jsx)(t.p,{children:"Click the above link to know more about our Mainnet-V1."}),"\n",(0,s.jsx)(t.h3,{id:"bitlayer-testnet",children:"Bitlayer Testnet"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Network"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Bitlayer Testnet"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Chain ID"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"200810"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Currency Symbol"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"BTC"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Explorer"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://testnet-scan.bitlayer.org",children:"https://testnet-scan.bitlayer.org"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Public RPC URL"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://testnet-rpc.bitlayer.org",children:"https://testnet-rpc.bitlayer.org"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"WebSocket"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("div",{children:"wss://testnet-ws.bitlayer.org"}),(0,s.jsx)("div",{children:"wss://testnet-ws.bitlayer-rpc.com"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Contract Addresses"}),(0,s.jsxs)(t.td,{children:["Refer to the ",(0,s.jsx)(t.a,{href:"/docs/Build/DeveloperResources/Contracts",children:"Contract Addresses page"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Connect Wallet"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://chainlist.org/?search=bitlayer&testnets=true",children:"Click here to connect your wallet to Bitlayer Testnet"})})]})]})]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsx)(t.p,{children:'The "currency symbol" is required by some wallets like MetaMask.'})]}),"\n",(0,s.jsx)(t.p,{children:"Here are the quick access commands for the Bitlayer Testnet:"}),"\n",(0,s.jsx)(t.h4,{id:"hardhat",children:"Hardhat"}),"\n",(0,s.jsxs)(t.p,{children:["Modify your Hardhat config file ",(0,s.jsx)(t.code,{children:"hardhat.config.ts"})," to point at the Bitlayer Testnet public RPC."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'const config: HardhatUserConfig = {\r\n  ...\r\n  networks: {\r\n    bitlayer: {\r\n      url: "https://testnet-rpc.bitlayer.org" || "",\r\n      accounts:\r\n        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],\r\n    },\r\n  },\r\n};\n'})}),"\n",(0,s.jsx)(t.h4,{id:"foundry",children:"Foundry"}),"\n",(0,s.jsx)(t.p,{children:"To deploy using the Bitlayer Testnet Public RPC, run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"forge create ... --rpc-url=https://https://testnet-rpc.bitlayer.org/ --legacy\n"})}),"\n",(0,s.jsx)(t.h4,{id:"remix-web-ide",children:"Remix Web IDE"}),"\n",(0,s.jsxs)(t.p,{children:["After compiling your contracts, the easiest way to deploy using Remix is by ",(0,s.jsx)(t.a,{href:"https://docs.bitlayer.org/user-guide/setup#metamask",children:"setting up Metamask"}),", then selecting the ",(0,s.jsx)(t.strong,{children:"Bitlayer Testnet"})," network."]}),"\n",(0,s.jsx)(t.p,{children:"In the \u201cDeploy and Run Transactions\u201d tab, use the \u201cEnvironment\u201d drop-down and select \u201cInjected Provider - MetaMask.\u201d"}),"\n",(0,s.jsx)(t.p,{children:"Connect your wallet and select the Bitlayer Testnet. Your account should be selected automatically in Remix, and you can click \u201cDeploy.\u201d"}),"\n",(0,s.jsx)(t.h4,{id:"truffle",children:"Truffle"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["The Truffle Suite is being ",(0,s.jsx)(t.strong,{children:"sunset"}),". For information on ongoing support, migration options and FAQs, visit the ",(0,s.jsx)(t.a,{href:"https://consensys.io/blog/consensys-announces-the-sunset-of-truffle-and-ganache-and-new-hardhat?utm_source=github&utm_medium=referral&utm_campaign=2023_Sep_truffle-sunset-2023_announcement_",children:"Consensys blog"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["Assuming you already have a Truffle environment setup, go to the Truffle ",(0,s.jsx)(t.a,{href:"https://trufflesuite.com/docs/truffle/reference/configuration/",children:"configuration file"}),", ",(0,s.jsx)(t.code,{children:"truffle.js"}),". Make sure to have installed HDWalletProvider: ",(0,s.jsx)(t.code,{children:"npm install @truffle/hdwallet-provider@1.4.0"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const HDWalletProvider = require("@truffle/hdwallet-provider")\r\n...\r\nmodule.exports = {\r\n  networks: {\r\n    bitlayer: {\r\n      provider: () =>\r\n        new HDWalletProvider(process.env.PRIVATE_KEY, "https://testnet-rpc.bitlayer.org"),\r\n      network_id: \'*\',\r\n    },\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(t.h4,{id:"brownie",children:"Brownie"}),"\n",(0,s.jsx)(t.p,{children:"To add the Bitlayer Testnet, run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"brownie networks add Bitlayer host=https://testnet-rpc.bitlayer.org chainid=200810 \n"})}),"\n",(0,s.jsx)(t.p,{children:"To set this as your default network, add the following in your project config file:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"networks:\r\n  default: bitlayer\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Another way to add the Bitlayer Testnet is to create a ",(0,s.jsx)(t.code,{children:"yaml"})," file and run a command to add it."]}),"\n",(0,s.jsxs)(t.p,{children:["This is an example of a yaml file called ",(0,s.jsx)(t.code,{children:"network-config.yaml"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"live:\r\n- name: Ethereum\r\n networks:\r\n - chainid: 200810\r\n   explorer: https://testnet-scan.bitlayer.org\r\n   host: https://testnet-rpc.bitlayer.org\r\n   id: bitlayer\r\n   name: Bitlayer Testnet\n"})}),"\n",(0,s.jsx)(t.p,{children:"To add the Bitlayer Testnet to the network list, run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"brownie networks import ./network-config.yaml\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To deploy on Bitlayer, run the following command. In this example, ",(0,s.jsx)(t.code,{children:"token.py"})," is the script to deploy the smart contract. Replace this with the name of your script:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"brownie run token.py --network Bitlayer\n"})}),"\n",(0,s.jsx)(t.h4,{id:"ethersjs",children:"ethers.js"}),"\n",(0,s.jsxs)(t.p,{children:["Setting up a Bitlayer Testnet provider in an ",(0,s.jsx)(t.code,{children:"ethers"})," script:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'import { ethers } from "ethers"\r\n\r\nconst provider = new ethers.providers.JsonRpcProvider("https://testnet-rpc.bitlayer.org")\n'})}),"\n",(0,s.jsx)(t.h4,{id:"scaffold-eth",children:"scaffold-eth"}),"\n",(0,s.jsx)(t.p,{children:"To deploy using Scaffold-eth, you\u2019ll need to point both your Hardhat and React settings at the Bitlayer Testnet."}),"\n",(0,s.jsx)(t.h4,{id:"configure-hardhat",children:"Configure Hardhat"}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:"packages/hardhat/hardhat.config.js"})," file, you\u2019ll add the network and select it as the default network."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'...\r\n//\r\n// Select the network you want to deploy to here:\r\n//\r\nconst defaultNetwork = "Bitlayer";\r\n...\r\nmodule.exports = {\r\n...\r\n\tnetworks: {\r\n...\r\n          Bitlayer: {\r\n            url: "https://testnet-rpc.bitlayer.org",\r\n            accounts: {\r\n              mnemonic: mnemonic(),\r\n            },\r\n          },\r\n\t}\r\n...\r\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Be sure to fund the deployment wallet as well! Run ",(0,s.jsx)(t.code,{children:"yarn generate"})," to create the wallet and ",(0,s.jsx)(t.code,{children:"yarn account"})," to check its funds. Once funded, run ",(0,s.jsx)(t.code,{children:"yarn deploy --network Bitlayer"})," to deploy on the Bitlayer testnet."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>d});var n=r(6540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);