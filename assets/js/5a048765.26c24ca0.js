"use strict";(self.webpackChunkecdx=self.webpackChunkecdx||[]).push([[211],{719:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>N,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],d={sidebar_position:1},p="NiceDag",o={unversionedId:"api-ref/nice-dag",id:"api-ref/nice-dag",title:"NiceDag",description:"NiceDag defines a set of API which can control the DAG diagram.",source:"@site/docs/api-ref/nice-dag.md",sourceDirName:"api-ref",slug:"/api-ref/nice-dag",permalink:"/nice-dag/docs/api-ref/nice-dag",editUrl:"https://github.com/eBay/nice-dag/tree/nice-dag-docusaurus/docs/api-ref/nice-dag.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/nice-dag/docs/api-ref/"},next:{title:"NiceDagConfig",permalink:"/nice-dag/docs/api-ref/nice-dag-config"}},g={},m=[{value:"Properties",id:"properties",level:2},{value:"API",id:"api",level:2},{value:"setScale",id:"setscale",level:3},{value:"center",id:"center",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"scrollTo",id:"scrollto",level:3},{value:"setDirection",id:"setdirection",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"getScrollPosition",id:"getscrollposition",level:3},{value:"Return",id:"return",level:4},{value:"getAllNodes",id:"getallnodes",level:3},{value:"Return",id:"return-1",level:4},{value:"getAllEdges",id:"getalledges",level:3},{value:"Return",id:"return-2",level:4},{value:"withNodes",id:"withnodes",level:3},{value:"Arguments",id:"arguments-2",level:4},{value:"Return",id:"return-3",level:4},{value:"API (Editable DAG)",id:"api-editable-dag",level:2},{value:"startEditing",id:"startediting",level:3},{value:"stopEditing",id:"stopediting",level:3},{value:"prettifier",id:"prettifier",level:3},{value:"startEdgeDragging",id:"startedgedragging",level:3},{value:"Arguments",id:"arguments-3",level:4},{value:"startNodeDragging",id:"startnodedragging",level:3},{value:"Arguments",id:"arguments-4",level:4},{value:"addNode",id:"addnode",level:3},{value:"Arguments",id:"arguments-5",level:4},{value:"addJointNode",id:"addjointnode",level:3},{value:"Arguments",id:"arguments-6",level:4}],u={toc:m};function N(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nicedag"},"NiceDag"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NiceDag")," defines a set of API which can control the DAG diagram."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of DAG diagram"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},"DAG diagram configuration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./nice-dag-config"},"NiceDagConfig"))))),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"setscale"},"setScale"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"(scale:number) => void\n")),(0,l.kt)("p",null,"The api can set scale of the diagram. The scale range is from 0 to 1."),(0,l.kt)("h3",{id:"center"},"center"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"(size: Size) => NiceDag\n")),(0,l.kt)("p",null,"The api can make the diagram be the center position of its parent container. "),(0,l.kt)("h4",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Size of its parent container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/dag-model/geometry#size"},"Size"))))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NiceDag"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"itself")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/api-ref/nice-dag"},"NiceDag"))))),(0,l.kt)("h3",{id:"scrollto"},"scrollTo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"(id: string) => void\n")),(0,l.kt)("h3",{id:"setdirection"},"setDirection"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"(direction: NiceDagDirection) => void\n")),(0,l.kt)("h4",{id:"arguments-1"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"direction"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Direction of the diagram"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/api-ref/nice-dag-config#nicedagdirection"},"NiceDagDirection"))))),(0,l.kt)("h3",{id:"getscrollposition"},"getScrollPosition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"() => Point\n")),(0,l.kt)("h4",{id:"return"},"Return"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Point"),(0,l.kt)("td",{parentName:"tr",align:null},"Point position"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/api-ref/#point"},"Point"))))),(0,l.kt)("h3",{id:"getallnodes"},"getAllNodes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"() => IViewNode[]\n")),(0,l.kt)("h4",{id:"return-1"},"Return"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IViewNode[]"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of IViewNode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/dag-model/node#api-iviewnode"},"IViewNode")," []")))),(0,l.kt)("h3",{id:"getalledges"},"getAllEdges"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"() => IEdge[]\n")),(0,l.kt)("h4",{id:"return-2"},"Return"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IEdge"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IEdge")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/dag-model/edge"},"IEdge"))))),(0,l.kt)("h3",{id:"withnodes"},"withNodes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"(nodes: Node[]) => NiceDag\n")),(0,l.kt)("h4",{id:"arguments-2"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Nodes array"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/dag-model/node#node"},"Node"),"[]")))),(0,l.kt)("h4",{id:"return-3"},"Return"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NiceDag"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"itself")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/api-ref/nice-dag"},"NiceDag"))))),(0,l.kt)("h2",{id:"api-editable-dag"},"API (Editable DAG)"),(0,l.kt)("p",null,"The follow APIs are only applicable for editable DAG diagram."),(0,l.kt)("h3",{id:"startediting"},"startEditing"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"() => void\n")),(0,l.kt)("h3",{id:"stopediting"},"stopEditing"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"() => void\n")),(0,l.kt)("h3",{id:"prettifier"},"prettifier"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"() => void\n")),(0,l.kt)("h3",{id:"startedgedragging"},"startEdgeDragging"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"(node: IViewNode, e: MouseEvent) => void\n")),(0,l.kt)("h4",{id:"arguments-3"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"IViewNode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/dag-model/node#api-iviewnode"},"IViewNode"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"e"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"MouseEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"MouseEvent")))),(0,l.kt)("h3",{id:"startnodedragging"},"startNodeDragging"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"(node: IViewNode, e: MouseEvent) => void\n")),(0,l.kt)("h4",{id:"arguments-4"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"IViewNode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/dag-model/node#api-iviewnode"},"IViewNode"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"e"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"MouseEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"MouseEvent")))),(0,l.kt)("h3",{id:"addnode"},"addNode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"(node: Node, point: Point, targetNodeId?: string) => void\n")),(0,l.kt)("h4",{id:"arguments-5"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Node"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/dag-model/node#node"},"IViewNode"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"point"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target positon"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/api-ref/#point"},"Point"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"targetNodeId"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Parent node id"),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("h3",{id:"addjointnode"},"addJointNode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"(node: Node, point: Point, targetNodeId?: string) => void\n")),(0,l.kt)("h4",{id:"arguments-6"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Node"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/dag-model/node#node"},"IViewNode"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"point"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target positon"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/api-ref/#point"},"Point"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"targetNodeId"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string")))))}N.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=d(e,["components","mdxType","originalType","parentName"]),u=o(a),N=r,k=u["".concat(p,".").concat(N)]||u[N]||m[N]||l;return a?n.createElement(k,i(i({ref:t},g),{},{components:a})):n.createElement(k,i({ref:t},g))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);