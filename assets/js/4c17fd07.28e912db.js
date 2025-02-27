"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5765],{8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var o=n(6540);const t={},i=o.createContext(t);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:r},e.children)}},9888:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"Build/DeveloperResources/Indexers/TheGraph","title":"Indexing-The-Graph","description":"Graph Node is a protocol for building decentralized applications (dApps) quickly on Ethereum and IPFS using GraphQL.","source":"@site/docs/Build/DeveloperResources/Indexers/TheGraph.md","sourceDirName":"Build/DeveloperResources/Indexers","slug":"/Build/DeveloperResources/Indexers/TheGraph","permalink":"/docs/Build/DeveloperResources/Indexers/TheGraph","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"buildSidebar","previous":{"title":"Compile, Run and Deploy","permalink":"/docs/Build/GettingStarted/CompileAndRun"},"next":{"title":"SubQuery","permalink":"/docs/Build/DeveloperResources/Indexers/SubQuery"}}');var t=n(4848),i=n(8453);const s={sidebar_position:1},a="Indexing-The-Graph",d={},c=[{value:"The Graph Official",id:"the-graph-official",level:2},{value:"Project Local Graph Node",id:"project-local-graph-node",level:3},{value:"Set up graph-node",id:"set-up-graph-node",level:4},{value:"Migration",id:"migration",level:3}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"indexing-the-graph",children:"Indexing-The-Graph"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Graph Node"})," is a protocol for building decentralized applications (dApps) quickly on Ethereum and IPFS using GraphQL."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://thegraph.com/",children:"Official website"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/graphprotocol/graph-node",children:"Github"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"the-graph-official",children:"The Graph Official"}),"\n",(0,t.jsx)(r.p,{children:"The Graph official has not support bitlayer, will coming soon."}),"\n",(0,t.jsx)(r.h3,{id:"project-local-graph-node",children:"Project Local Graph Node"}),"\n",(0,t.jsxs)(r.p,{children:["We recommend following the ",(0,t.jsx)(r.a,{href:"https://thegraph.com/docs/",children:"Official documentation"})," for deployment. The next operation is only intended as a simple setup tutorial for reference."]}),"\n",(0,t.jsx)(r.h4,{id:"set-up-graph-node",children:"Set up graph-node"}),"\n",(0,t.jsxs)(r.p,{children:["For convenience reasons, we use the official ",(0,t.jsx)(r.a,{href:"https://github.com/graphprotocol/graph-node/tree/master/docker",children:"docker compose"})," for node, database, and IPFS deployment.\r\nNote that the value of the ",(0,t.jsx)(r.code,{children:"ethereum"})," field in ",(0,t.jsx)(r.code,{children:"docker-compose.yml"})," is replaced with ",(0,t.jsx)(r.code,{children:"Bitlayer"}),"'s node connection information."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"graph-node:\r\n    image: graphprotocol/graph-node\r\n    ports:\r\n      - '8000:8000'\r\n      - '8001:8001'\r\n      - '8020:8020'\r\n      - '8030:8030'\r\n      - '8040:8040'\r\n    depends_on:\r\n      - ipfs\r\n      - postgres\r\n    environment:\r\n      postgres_host: postgres\r\n      postgres_user: graph-node\r\n      postgres_pass: let-me-in\r\n      postgres_db: graph-node\r\n      ipfs: 'ipfs:5001'\r\n      ethereum: 'mainnet:http://127.0.0.1:8545'  #replaced with bitlayer rpc info\r\n      RUST_LOG: info\n"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Note: The node connected to graph-node needs to be in ",(0,t.jsx)(r.code,{children:"archive"})," mode (add flag --syncmode full --gcmode archive when starting the node), we recommend each user to build their own RPC node."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"migration",children:"Migration"}),"\n",(0,t.jsx)(r.p,{children:"You can migrate your subgraph from bitlayer graph node or project local graph node to offical environment when the graph enables bitlayer.\r\nTo migrate smoothly, please set dataSources.source.startBlock in subgraph.yaml, we suggest using the block in which the contract was created."})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);