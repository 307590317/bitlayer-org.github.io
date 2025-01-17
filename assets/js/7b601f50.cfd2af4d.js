"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1376],{4694:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Finality/overview","title":"Overview","description":"What is Finality Bridge?","source":"@site/docs/Finality/overview.md","sourceDirName":"Finality","slug":"/Finality/overview","permalink":"/docs/Finality/overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Overview"},"sidebar":"finalitySidebar","next":{"title":"Finality Bridge Protocol","permalink":"/docs/Finality/protocol"}}');var s=t(4848),r=t(8453);const o={sidebar_position:1,sidebar_label:"Overview"},a="Overview",d={},l=[{value:"What is Finality Bridge?",id:"what-is-finality-bridge",level:2},{value:"Finality Bridge: A 3rd Generation BTC Bridge",id:"finality-bridge-a-3rd-generation-btc-bridge",level:2},{value:"The Evolution of BTC Bridges",id:"the-evolution-of-btc-bridges",level:3},{value:"Addressing the Limitations of Earlier Generations",id:"addressing-the-limitations-of-earlier-generations",level:3},{value:"YBTC: The Yielding BTC Token",id:"ybtc-the-yielding-btc-token",level:2}];function c(e){const i={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"overview",children:"Overview"})}),"\n",(0,s.jsx)(i.h2,{id:"what-is-finality-bridge",children:"What is Finality Bridge?"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"https://finality.bitlayer.org/",children:"Finality Bridge"})})," represents a groundbreaking advancement in Bitcoin bridging technology, developed by ",(0,s.jsx)(i.strong,{children:"Bitlayer"})," and powered by the innovative ",(0,s.jsx)(i.strong,{children:"BitVM smart contract"}),". As the first step toward the realization of the Bitlayer rollup, Finality Bridge offers a secure and efficient mechanism for transferring Bitcoin (BTC) into the Bitlayer ecosystem. This integration allows Bitcoin to be actively utilized within the ",(0,s.jsx)(i.strong,{children:"BTCFi ecosystem"}),", enabling seamless trading and interaction with decentralized finance (DeFi) applications."]}),"\n",(0,s.jsxs)(i.p,{children:["Unlike traditional BTC bridges, which often rely on centralized or semi-centralized custodians, Finality Bridge is ",(0,s.jsx)(i.strong,{children:"trust-minimized"}),", meaning it significantly reduces the level of trust required in third-party actors. This trust minimization is achieved through a protocol that combines the robustness of BitVM smart contracts with ",(0,s.jsx)(i.strong,{children:"fraud proofs"}),", ensuring that all transactions and operations are verifiable and secure."]}),"\n",(0,s.jsxs)(i.p,{children:["The architecture of Finality Bridge is designed to be highly extensible, making it adaptable to a range of blockchain environments. Initially, it supports the ",(0,s.jsx)(i.strong,{children:"Bitlayer rollup"})," and ",(0,s.jsx)(i.strong,{children:"Ethereum"}),", with plans to expand compatibility to other ",(0,s.jsx)(i.strong,{children:"EVM-compatible chains"})," such as Avalanche and Polygon, as well as non-EVM chains like ",(0,s.jsx)(i.strong,{children:"Solana"}),". This flexibility underscores its potential to become a universal solution for bridging Bitcoin across diverse blockchain ecosystems. The token minted through the Finality Bridge, known as ",(0,s.jsx)(i.strong,{children:"YBTC (Yielding BTC)"}),", plays a central role in this process, serving as the representation of Bitcoin within these environments."]}),"\n",(0,s.jsx)(i.h2,{id:"finality-bridge-a-3rd-generation-btc-bridge",children:"Finality Bridge: A 3rd Generation BTC Bridge"}),"\n",(0,s.jsx)(i.h3,{id:"the-evolution-of-btc-bridges",children:"The Evolution of BTC Bridges"}),"\n",(0,s.jsx)(i.p,{children:"To fully appreciate the significance of Finality Bridge, it is essential to understand its place within the broader evolution of Bitcoin bridging technologies. BTC bridges can be categorized into four distinct generations, each defined by the type of custodian managing the locked Bitcoin funds:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"First Generation: Centralized Custodian"}),(0,s.jsx)(i.br,{}),"\n","The earliest BTC bridges relied on centralized custodians, where Bitcoin funds were locked in addresses controlled by a single entity or a fixed group. This model, while simple, introduced significant trust requirements and risks. For example, ",(0,s.jsx)(i.strong,{children:"wBTC"})," relies on centralized control, while ",(0,s.jsx)(i.strong,{children:"MPC-based BTC bridges"})," distribute control among a predefined group. However, both models are vulnerable to single points of failure or collusion within the custodian group.\n",(0,s.jsx)(i.img,{alt:"1st BTC bridge generation",src:t(2272).A+"",width:"1920",height:"1080"})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Second Generation: Distributed Custodian"}),(0,s.jsx)(i.br,{}),"\n","The next evolution introduced distributed custodianship, where Bitcoin funds were locked in addresses controlled by groups of randomly selected entities. These groups were randomly chosen from a larger set to reduce the risk of collusion. To incentivize honest behavior, participants were required to stake assets on a middleware blockchain, with penalties (such as forfeiting their stake) for any detected misconduct. A notable example of this approach is the ",(0,s.jsx)(i.strong,{children:"tBTC bridge"}),", supported by the Keep Network. While an improvement over centralized custodianship, this model still assumes an ",(0,s.jsx)(i.strong,{children:"honest majority"})," within the group, which can be a critical vulnerability.\n",(0,s.jsx)(i.img,{alt:"2nd BTC bridge generation",src:t(2443).A+"",width:"1920",height:"1080"})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Third Generation: Trust-Minimized Smart Contract Custodian"}),(0,s.jsx)(i.br,{}),"\n","The Finality Bridge belongs to this generation, which represents a paradigm shift in BTC bridging. Here, Bitcoin funds are locked in addresses controlled by a ",(0,s.jsx)(i.strong,{children:"BitVM smart contract"}),", a system that requires only one honest participant to ensure security. This approach eliminates the need for centralized or distributed custodians, relying instead on the inherent transparency and verifiability of the smart contract. This makes the custodian ",(0,s.jsx)(i.strong,{children:"trust-minimized"}),", reducing the reliance on external actors and enhancing the overall security of the bridge.\n",(0,s.jsx)(i.img,{alt:"3rd and 4th BTC bridge generation",src:t(1938).A+"",width:"1920",height:"1080"})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Fourth Generation: Trustless Smart Contract Custodian"})," ",(0,s.jsx)(i.em,{children:"(Future)"}),(0,s.jsx)(i.br,{}),"\n","The theoretical fourth generation envisions a fully trustless model, where Bitcoin funds are locked in ",(0,s.jsx)(i.strong,{children:"covenant-style smart contracts"})," that inherit Bitcoin\u2019s native security without any external assumptions. However, this model depends on the introduction of ",(0,s.jsx)(i.strong,{children:"covenant opcodes"})," in a future Bitcoin upgrade, which is not yet available."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"addressing-the-limitations-of-earlier-generations",children:"Addressing the Limitations of Earlier Generations"}),"\n",(0,s.jsxs)(i.p,{children:["As a ",(0,s.jsx)(i.strong,{children:"3rd generation BTC bridge"}),", Finality Bridge resolves key issues that plagued earlier models. First, it removes the reliance on an ",(0,s.jsx)(i.strong,{children:"honest majority"}),", a critical vulnerability in distributed custodian systems. Second, it ensures that the security level of the wrapped Bitcoin (YBTC) matches that of other DeFi assets, addressing a long-standing concern about the robustness and reliability of BTC-backed assets in decentralized ecosystems."]}),"\n",(0,s.jsx)(i.h2,{id:"ybtc-the-yielding-btc-token",children:"YBTC: The Yielding BTC Token"}),"\n",(0,s.jsxs)(i.p,{children:["At the heart of the Finality Bridge lies ",(0,s.jsx)(i.strong,{children:"YBTC"}),", the token minted on the Bitlayer rollup and other supported environments when users lock their Bitcoin into the BitVM smart contract. YBTC is designed to be a secure and reliable representation of Bitcoin within decentralized ecosystems, and its design reflects the principles of trust minimization and security that underpin the Finality Bridge."]}),"\n",(0,s.jsxs)(i.p,{children:["YBTC maintains a ",(0,s.jsx)(i.strong,{children:"strict 1:1 peg with BTC"}),", ensuring that every YBTC token in circulation is backed by an equivalent amount of Bitcoin locked in the BitVM smart contract. Unlike tokens issued by centralized custodians, YBTC is not dependent on any single entity for its security. Instead, it derives its integrity from the transparency and verifiability of the BitVM smart contract, which eliminates the need for trust in third-party actors."]}),"\n",(0,s.jsxs)(i.p,{children:["It is important to note that YBTC is not a ",(0,s.jsx)(i.strong,{children:"liquid staked token (LST)"}),". This means that the Bitcoin locked in the smart contract cannot be accessed or utilized by anyone, ensuring the absolute security of the underlying funds. This design choice further distinguishes YBTC from other BTC-backed tokens, making it a robust and trustworthy asset for use in DeFi applications."]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2272:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/001-1c032fa5255f89ecb80424ebd41441bf.png"},2443:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/002-cee4ac04e1003aeb27be2868f1fc95d2.png"},1938:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/003-387ad1b83a8b2502504b46ad1bba8e82.png"},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var n=t(6540);const s={},r=n.createContext(s);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);