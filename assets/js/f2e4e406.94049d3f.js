"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2869],{2455:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/rollup-arch-467cf21d6bea338cf965b51760c68881.jpg"},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var s=r(6540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}},8878:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Learn/Bitlayer Rollup/system-design","title":"System Design","description":"Bitlayer Rollup Architecture","source":"@site/docs/Learn/Bitlayer Rollup/system-design.md","sourceDirName":"Learn/Bitlayer Rollup","slug":"/Learn/Bitlayer Rollup/system-design","permalink":"/docs/Learn/Bitlayer Rollup/system-design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"System Design"},"sidebar":"learnSidebar","previous":{"title":"Bitlayer Rollup Protocol","permalink":"/docs/Learn/Bitlayer Rollup/protocol"},"next":{"title":"Trust-minimized BTC Bridge","permalink":"/docs/Learn/Bitlayer Rollup/bridge"}}');var t=r(4848),i=r(8453);const o={sidebar_position:3,sidebar_label:"System Design"},l="System Design",a={},c=[{value:"Bitlayer Rollup Architecture",id:"bitlayer-rollup-architecture",level:2},{value:"The Rollup Operator",id:"the-rollup-operator",level:3}];function d(e){const n={br:"br",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"system-design",children:"System Design"})}),"\n",(0,t.jsx)(n.h2,{id:"bitlayer-rollup-architecture",children:"Bitlayer Rollup Architecture"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Bitlayer Rollup Architecture",src:r(2455).A+"",width:"3556",height:"2264"})}),"\n",(0,t.jsx)(n.p,{children:"The Bitlayer rollup consists of four main components:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Rollup Operator"}),":",(0,t.jsx)(n.br,{}),"\n","The operator is responsible for processing Layer 2 (L2) transactions, proposing L2 blocks and batches, and proving the validity of these batches before submitting them, along with their proofs, to Bitcoin for verification. Currently, only a single operator is supported."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Data Availability (DA) Layer"}),":",(0,t.jsx)(n.br,{}),"\n","The operator submits L2 batches to the DA layer, ensuring the availability of transaction data. In cases of censorship, users can bypass the operator by sending forced transactions directly to the DA layer."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Bitcoin Contract"}),":",(0,t.jsx)(n.br,{}),"\n","The rollup contract is deployed on Bitcoin as a recursive BitVM-style smart contract. This contract verifies the validity of L2 state transitions via submitted proofs."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Rollup Network"}),":",(0,t.jsx)(n.br,{}),"\n","The rollup network consists of several key nodes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Operator Node"}),": Includes one active operator and any number of backup operators."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Contract Signer Nodes"}),": Responsible for deploying and interacting with the rollup contract."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Vigilante Nodes"}),": Monitor the network to detect and challenge invalid state transitions submitted by a malicious operator."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"the-rollup-operator",children:"The Rollup Operator"}),"\n",(0,t.jsx)(n.p,{children:"The rollup operator is divided into three primary roles:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Rollup Sequencer"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Receives L2 transactions, proposes and executes L2 blocks."}),"\n",(0,t.jsx)(n.li,{children:"Proves the validity of L2 blocks."}),"\n",(0,t.jsx)(n.li,{children:"Aggregates L2 blocks and their proofs into L2 batches and batch-proofs."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Rollup Prover"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Proves the validity of individual blocks."}),"\n",(0,t.jsx)(n.li,{children:"Aggregates block proofs and DA proofs into a single batch proof."}),"\n",(0,t.jsx)(n.li,{children:"Further compresses batch proofs into smaller Groth16 proofs for efficient verification."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Rollup Controller"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Manages the rollup pipeline."}),"\n",(0,t.jsx)(n.li,{children:"Interacts with the Layer 1 (L1) contract to verify L2 state transitions and achieve finality."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);