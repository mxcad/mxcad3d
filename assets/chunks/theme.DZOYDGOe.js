const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.BjAYWISA.js","assets/chunks/framework.C-dFTOTt.js","assets/chunks/editor.main.d83c2780.BuLJgFxN.js","assets/chunks/Demo.10a78ca5.0b96OAV-.js"])))=>i.map(i=>d[i]);
import{d as b,c as p,r as l,n as G,o as i,a as I,t as T,b as g,w as u,T as ce,e as x,_ as v,u as je,i as Ke,f as $e,g as he,h as N,j as W,k as _,l as w,m,p as s,q as F,s as se,v as Y,x as Q,y as xe,z as Se,A as We,B as ze,F as A,C as U,D as j,E as Ne,G as ee,H as M,I as $,J as Ge,K as ne,L as Z,M as re,N as Xe,O as Ae,P as Ze,Q as de,R as qe,S as Ee,U as Je,V as De,W as H,X as Ue,Y as Re,Z as Qe,$ as en,a0 as nn,a1 as rn,a2 as Ve}from"./framework.C-dFTOTt.js";const tn=b({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(r){return(e,n)=>(i(),p("span",{class:G(["VPBadge",e.type])},[l(e.$slots,"default",{},()=>[I(T(e.text),1)])],2))}}),on={key:0,class:"VPBackdrop"},an=b({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(r){return(e,n)=>(i(),g(ce,{name:"fade"},{default:u(()=>[e.show?(i(),p("div",on)):x("",!0)]),_:1}))}}),sn=v(an,[["__scopeId","data-v-c79a1216"]]),O=je;function dn(r,e){let n,t=!1;return()=>{n&&clearTimeout(n),t?n=setTimeout(r,e):(r(),(t=!0)&&setTimeout(()=>t=!1,e))}}function le(r){return/^\//.test(r)?r:`/${r}`}function be(r){const{pathname:e,search:n,hash:t,protocol:o}=new URL(r,"http://a.com");if(Ke(r)||r.startsWith("#")||!o.startsWith("http")||!$e(e))return r;const{site:a}=O(),d=e.endsWith("/")||e.endsWith(".html")?r:r.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,a.value.cleanUrls?"":".html")}${n}${t}`);return he(d)}const Me=N(W?location.hash:"");W&&window.addEventListener("hashchange",()=>{Me.value=location.hash});function X({removeCurrent:r=!0,correspondingLink:e=!1}={}){const{site:n,localeIndex:t,page:o,theme:a}=O(),d=_(()=>{var c,f;return{label:(c=n.value.locales[t.value])==null?void 0:c.label,link:((f=n.value.locales[t.value])==null?void 0:f.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:_(()=>Object.entries(n.value.locales).flatMap(([c,f])=>r&&d.value.label===f.label?[]:{text:f.label,link:ln(f.link||(c==="root"?"/":`/${c}/`),a.value.i18nRouting!==!1&&e,o.value.relativePath.slice(d.value.link.length-1),!n.value.cleanUrls)+Me.value})),currentLang:d}}function ln(r,e,n,t){return e?r.replace(/\/$/,"")+le(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,t?".html":"")):r}const pn={class:"NotFound"},un={class:"code"},mn={class:"title"},cn={class:"quote"},hn={class:"action"},xn=["href","aria-label"],bn=b({__name:"NotFound",setup(r){const{site:e,theme:n}=O(),{localeLinks:t}=X({removeCurrent:!1}),o=N("/");return w(()=>{var d;const a=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");t.value.length&&(o.value=((d=t.value.find(({link:h})=>h.startsWith(a)))==null?void 0:d.link)||t.value[0].link)}),(a,d)=>{var h,c,f,V,C;return i(),p("div",pn,[m("p",un,T(((h=s(n).notFound)==null?void 0:h.code)??"404"),1),m("h1",mn,T(((c=s(n).notFound)==null?void 0:c.title)??"PAGE NOT FOUND"),1),d[0]||(d[0]=m("div",{class:"divider"},null,-1)),m("blockquote",cn,T(((f=s(n).notFound)==null?void 0:f.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),m("div",hn,[m("a",{class:"link",href:s(he)(o.value),"aria-label":((V=s(n).notFound)==null?void 0:V.linkLabel)??"go to home"},T(((C=s(n).notFound)==null?void 0:C.linkText)??"Take me home"),9,xn)])])}}}),Mn=v(bn,[["__scopeId","data-v-f87ff6e4"]]);function Ie(r,e){if(Array.isArray(r))return q(r);if(r==null)return[];e=le(e);const n=Object.keys(r).sort((o,a)=>a.split("/").length-o.split("/").length).find(o=>e.startsWith(le(o))),t=n?r[n]:[];return Array.isArray(t)?q(t):q(t.items,t.base)}function Cn(r){const e=[];let n=0;for(const t in r){const o=r[t];if(o.items){n=e.push(o);continue}e[n]||e.push({items:[]}),e[n].items.push(o)}return e}function vn(r){const e=[];function n(t){for(const o of t)o.text&&o.link&&e.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&n(o.items)}return n(r),e}function pe(r,e){return Array.isArray(e)?e.some(n=>pe(r,n)):F(r,e.link)?!0:e.items?pe(r,e.items):!1}function q(r,e){return[...r].map(n=>{const t={...n},o=t.base||e;return o&&t.link&&(t.link=o+t.link),t.items&&(t.items=q(t.items,o)),t})}function k(){const{frontmatter:r,page:e,theme:n}=O(),t=se("(min-width: 960px)"),o=N(!1),a=_(()=>{const D=n.value.sidebar,y=e.value.relativePath;return D?Ie(D,y):[]}),d=N(a.value);Y(a,(D,y)=>{JSON.stringify(D)!==JSON.stringify(y)&&(d.value=a.value)});const h=_(()=>r.value.sidebar!==!1&&d.value.length>0&&r.value.layout!=="home"),c=_(()=>f?r.value.aside==null?n.value.aside==="left":r.value.aside==="left":!1),f=_(()=>r.value.layout==="home"?!1:r.value.aside!=null?!!r.value.aside:n.value.aside!==!1),V=_(()=>h.value&&t.value),C=_(()=>h.value?Cn(d.value):[]);function P(){o.value=!0}function S(){o.value=!1}function E(){o.value?S():P()}return{isOpen:o,sidebar:d,sidebarGroups:C,hasSidebar:h,hasAside:f,leftAside:c,isSidebarEnabled:V,open:P,close:S,toggle:E}}function fn(r,e){let n;Q(()=>{n=r.value?document.activeElement:void 0}),w(()=>{window.addEventListener("keyup",t)}),xe(()=>{window.removeEventListener("keyup",t)});function t(o){o.key==="Escape"&&r.value&&(e(),n==null||n.focus())}}function gn(r){const{page:e}=O(),n=N(!1),t=_(()=>r.value.collapsed!=null),o=_(()=>!!r.value.link),a=N(!1),d=()=>{a.value=F(e.value.relativePath,r.value.link)};Y([e,r,Me],d),w(d);const h=_(()=>a.value?!0:r.value.items?pe(e.value.relativePath,r.value.items):!1),c=_(()=>!!(r.value.items&&r.value.items.length));Q(()=>{n.value=!!(t.value&&r.value.collapsed)}),Se(()=>{(a.value||h.value)&&(n.value=!1)});function f(){t.value&&(n.value=!n.value)}return{collapsed:n,collapsible:t,isLink:o,isActiveLink:a,hasActiveLink:h,hasChildren:c,toggle:f}}function _n(){const{hasSidebar:r}=k(),e=se("(min-width: 960px)"),n=se("(min-width: 1280px)");return{isAsideEnabled:_(()=>!n.value&&!e.value?!1:r.value?n.value:e.value)}}const ue=[];function Le(r){return typeof r.outline=="object"&&!Array.isArray(r.outline)&&r.outline.label||r.outlineTitle||"On this page"}function Ce(r){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const t=Number(n.tagName[1]);return{element:n,title:Vn(n),link:"#"+n.id,level:t}});return On(e,r)}function Vn(r){let e="";for(const n of r.childNodes)if(n.nodeType===1){if(n.classList.contains("VPBadge")||n.classList.contains("header-anchor")||n.classList.contains("ignore-header"))continue;e+=n.textContent}else n.nodeType===3&&(e+=n.textContent);return e.trim()}function On(r,e){if(e===!1)return[];const n=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[t,o]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;r=r.filter(d=>d.level>=t&&d.level<=o),ue.length=0;for(const{element:d,link:h}of r)ue.push({element:d,link:h});const a=[];e:for(let d=0;d<r.length;d++){const h=r[d];if(d===0)a.push(h);else{for(let c=d-1;c>=0;c--){const f=r[c];if(f.level<h.level){(f.children||(f.children=[])).push(h);continue e}}a.push(h)}}return a}function Pn(r,e){const{isAsideEnabled:n}=_n(),t=dn(a,100);let o=null;w(()=>{requestAnimationFrame(a),window.addEventListener("scroll",t)}),We(()=>{d(location.hash)}),xe(()=>{window.removeEventListener("scroll",t)});function a(){if(!n.value)return;const h=window.scrollY,c=window.innerHeight,f=document.body.offsetHeight,V=Math.abs(h+c-f)<1,C=ue.map(({element:S,link:E})=>({link:E,top:yn(S)})).filter(({top:S})=>!Number.isNaN(S)).sort((S,E)=>S.top-E.top);if(!C.length){d(null);return}if(h<1){d(null);return}if(V){d(C[C.length-1].link);return}let P=null;for(const{link:S,top:E}of C){if(E>h+ze()+4)break;P=S}d(P)}function d(h){o&&o.classList.remove("active"),h==null?o=null:o=r.value.querySelector(`a[href="${decodeURIComponent(h)}"]`);const c=o;c?(c.classList.add("active"),e.value.style.top=c.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function yn(r){let e=0;for(;r!==document.body;){if(r===null)return NaN;e+=r.offsetTop,r=r.offsetParent}return e}const Tn=["href","title"],Sn=b({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(r){function e({target:n}){const t=n.href.split("#")[1],o=document.getElementById(decodeURIComponent(t));o==null||o.focus({preventScroll:!0})}return(n,t)=>{const o=j("VPDocOutlineItem",!0);return i(),p("ul",{class:G(["VPDocOutlineItem",n.root?"root":"nested"])},[(i(!0),p(A,null,U(n.headers,({children:a,link:d,title:h})=>(i(),p("li",null,[m("a",{class:"outline-link",href:d,onClick:e,title:h},T(h),9,Tn),a!=null&&a.length?(i(),g(o,{key:0,headers:a},null,8,["headers"])):x("",!0)]))),256))],2)}}}),ke=v(Sn,[["__scopeId","data-v-b933a997"]]),Nn={class:"content"},Gn={class:"outline-title",role:"heading","aria-level":"2"},An={"aria-labelledby":"doc-outline-aria-label"},En=b({__name:"VPDocAsideOutline",setup(r){const{frontmatter:e,theme:n}=O(),t=Ne([]);ee(()=>{t.value=Ce(e.value.outline??n.value.outline)});const o=N(),a=N();return Pn(o,a),(d,h)=>(i(),p("div",{class:G(["VPDocAsideOutline",{"has-outline":t.value.length>0}]),ref_key:"container",ref:o,role:"navigation"},[m("div",Nn,[m("div",{class:"outline-marker",ref_key:"marker",ref:a},null,512),m("div",Gn,T(s(Le)(s(n))),1),m("nav",An,[h[0]||(h[0]=m("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),M(ke,{headers:t.value,root:!0},null,8,["headers"])])])],2))}}),Dn=v(En,[["__scopeId","data-v-935f8a84"]]),Un={class:"VPDocAsideCarbonAds"},Rn=b({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(r){const e=()=>null;return(n,t)=>(i(),p("div",Un,[M(s(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),In={class:"VPDocAside"},Ln=b({__name:"VPDocAside",setup(r){const{theme:e}=O();return(n,t)=>(i(),p("div",In,[l(n.$slots,"aside-top",{},void 0,!0),l(n.$slots,"aside-outline-before",{},void 0,!0),M(Dn),l(n.$slots,"aside-outline-after",{},void 0,!0),t[0]||(t[0]=m("div",{class:"spacer"},null,-1)),l(n.$slots,"aside-ads-before",{},void 0,!0),s(e).carbonAds?(i(),g(Rn,{key:0,"carbon-ads":s(e).carbonAds},null,8,["carbon-ads"])):x("",!0),l(n.$slots,"aside-ads-after",{},void 0,!0),l(n.$slots,"aside-bottom",{},void 0,!0)]))}}),kn=v(Ln,[["__scopeId","data-v-3f215769"]]);function Bn(){const{theme:r,page:e}=O();return _(()=>{const{text:n="Edit this page",pattern:t=""}=r.value.editLink||{};let o;return typeof t=="function"?o=t(e.value):o=t.replace(/:path/g,e.value.filePath),{url:o,text:n}})}function Hn(){const{page:r,theme:e,frontmatter:n}=O();return _(()=>{var f,V,C,P,S,E,D,y;const t=Ie(e.value.sidebar,r.value.relativePath),o=vn(t),a=Fn(o,R=>R.link.replace(/[?#].*$/,"")),d=a.findIndex(R=>F(r.value.relativePath,R.link)),h=((f=e.value.docFooter)==null?void 0:f.prev)===!1&&!n.value.prev||n.value.prev===!1,c=((V=e.value.docFooter)==null?void 0:V.next)===!1&&!n.value.next||n.value.next===!1;return{prev:h?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((C=a[d-1])==null?void 0:C.docFooterText)??((P=a[d-1])==null?void 0:P.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((S=a[d-1])==null?void 0:S.link)},next:c?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((E=a[d+1])==null?void 0:E.docFooterText)??((D=a[d+1])==null?void 0:D.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((y=a[d+1])==null?void 0:y.link)}}})}function Fn(r,e){const n=new Set;return r.filter(t=>{const o=e(t);return n.has(o)?!1:n.add(o)})}const L=b({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(r){const e=r,n=_(()=>e.tag??(e.href?"a":"span")),t=_(()=>e.href&&Ge.test(e.href));return(o,a)=>(i(),g($(n.value),{class:G(["VPLink",{link:o.href,"vp-external-link-icon":t.value,"no-icon":o.noIcon}]),href:o.href?s(be)(o.href):void 0,target:o.target??(t.value?"_blank":void 0),rel:o.rel??(t.value?"noreferrer":void 0)},{default:u(()=>[l(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),wn={class:"VPLastUpdated"},Yn=["datetime"],jn=b({__name:"VPDocFooterLastUpdated",setup(r){const{theme:e,page:n,frontmatter:t,lang:o}=O(),a=_(()=>new Date(t.value.lastUpdated??n.value.lastUpdated)),d=_(()=>a.value.toISOString()),h=N("");return w(()=>{Q(()=>{var c,f,V;h.value=new Intl.DateTimeFormat((f=(c=e.value.lastUpdated)==null?void 0:c.formatOptions)!=null&&f.forceLocale?o.value:void 0,((V=e.value.lastUpdated)==null?void 0:V.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(a.value)})}),(c,f)=>{var V;return i(),p("p",wn,[I(T(((V=s(e).lastUpdated)==null?void 0:V.text)||s(e).lastUpdatedText||"Last updated")+": ",1),m("time",{datetime:d.value},T(h.value),9,Yn)])}}}),Kn=v(jn,[["__scopeId","data-v-7e05ebdb"]]),$n={key:0,class:"VPDocFooter"},Wn={key:0,class:"edit-info"},zn={key:0,class:"edit-link"},Xn={key:1,class:"last-updated"},Zn={key:1,class:"prev-next"},qn={class:"pager"},Jn=["innerHTML"],Qn=["innerHTML"],er={class:"pager"},nr=["innerHTML"],rr=["innerHTML"],tr=b({__name:"VPDocFooter",setup(r){const{theme:e,page:n,frontmatter:t}=O(),o=Bn(),a=Hn(),d=_(()=>e.value.editLink&&t.value.editLink!==!1),h=_(()=>n.value.lastUpdated&&t.value.lastUpdated!==!1),c=_(()=>d.value||h.value||a.value.prev||a.value.next);return(f,V)=>{var C,P,S,E;return c.value?(i(),p("footer",$n,[l(f.$slots,"doc-footer-before",{},void 0,!0),d.value||h.value?(i(),p("div",Wn,[d.value?(i(),p("div",zn,[M(L,{class:"edit-link-button",href:s(o).url,"no-icon":!0},{default:u(()=>[V[0]||(V[0]=m("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),I(" "+T(s(o).text),1)]),_:1},8,["href"])])):x("",!0),h.value?(i(),p("div",Xn,[M(Kn)])):x("",!0)])):x("",!0),(C=s(a).prev)!=null&&C.link||(P=s(a).next)!=null&&P.link?(i(),p("nav",Zn,[m("div",qn,[(S=s(a).prev)!=null&&S.link?(i(),g(L,{key:0,class:"pager-link prev",href:s(a).prev.link},{default:u(()=>{var D;return[m("span",{class:"desc",innerHTML:((D=s(e).docFooter)==null?void 0:D.prev)||"Previous page"},null,8,Jn),m("span",{class:"title",innerHTML:s(a).prev.text},null,8,Qn)]}),_:1},8,["href"])):x("",!0)]),m("div",er,[(E=s(a).next)!=null&&E.link?(i(),g(L,{key:0,class:"pager-link next",href:s(a).next.link},{default:u(()=>{var D;return[m("span",{class:"desc",innerHTML:((D=s(e).docFooter)==null?void 0:D.next)||"Next page"},null,8,nr),m("span",{class:"title",innerHTML:s(a).next.text},null,8,rr)]}),_:1},8,["href"])):x("",!0)])])):x("",!0)])):x("",!0)}}}),or=v(tr,[["__scopeId","data-v-09de1c0f"]]),ar={class:"container"},ir={class:"aside-container"},sr={class:"aside-content"},dr={class:"content"},lr={class:"content-container"},pr={class:"main"},ur=b({__name:"VPDoc",setup(r){const{theme:e}=O(),n=ne(),{hasSidebar:t,hasAside:o,leftAside:a}=k(),d=_(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(h,c)=>{const f=j("Content");return i(),p("div",{class:G(["VPDoc",{"has-sidebar":s(t),"has-aside":s(o)}])},[l(h.$slots,"doc-top",{},void 0,!0),m("div",ar,[s(o)?(i(),p("div",{key:0,class:G(["aside",{"left-aside":s(a)}])},[c[0]||(c[0]=m("div",{class:"aside-curtain"},null,-1)),m("div",ir,[m("div",sr,[M(kn,null,{"aside-top":u(()=>[l(h.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":u(()=>[l(h.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":u(()=>[l(h.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":u(()=>[l(h.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":u(()=>[l(h.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":u(()=>[l(h.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):x("",!0),m("div",dr,[m("div",lr,[l(h.$slots,"doc-before",{},void 0,!0),m("main",pr,[M(f,{class:G(["vp-doc",[d.value,s(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),M(or,null,{"doc-footer-before":u(()=>[l(h.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),l(h.$slots,"doc-after",{},void 0,!0)])])]),l(h.$slots,"doc-bottom",{},void 0,!0)],2)}}}),mr=v(ur,[["__scopeId","data-v-39a288b8"]]),cr=b({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(r){const e=r,n=_(()=>e.href&&Ge.test(e.href)),t=_(()=>e.tag||e.href?"a":"button");return(o,a)=>(i(),g($(t.value),{class:G(["VPButton",[o.size,o.theme]]),href:o.href?s(be)(o.href):void 0,target:e.target??(n.value?"_blank":void 0),rel:e.rel??(n.value?"noreferrer":void 0)},{default:u(()=>[I(T(o.text),1)]),_:1},8,["class","href","target","rel"]))}}),hr=v(cr,[["__scopeId","data-v-cad61b99"]]),xr=["src","alt"],br=b({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(r){return(e,n)=>{const t=j("VPImage",!0);return e.image?(i(),p(A,{key:0},[typeof e.image=="string"||"src"in e.image?(i(),p("img",Z({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:s(he)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,xr)):(i(),p(A,{key:1},[M(t,Z({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),M(t,Z({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):x("",!0)}}}),J=v(br,[["__scopeId","data-v-8426fc1a"]]),Mr={class:"container"},Cr={class:"main"},vr={key:0,class:"name"},fr=["innerHTML"],gr=["innerHTML"],_r=["innerHTML"],Vr={key:0,class:"actions"},Or={key:0,class:"image"},Pr={class:"image-container"},yr=b({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(r){const e=re("hero-image-slot-exists");return(n,t)=>(i(),p("div",{class:G(["VPHero",{"has-image":n.image||s(e)}])},[m("div",Mr,[m("div",Cr,[l(n.$slots,"home-hero-info-before",{},void 0,!0),l(n.$slots,"home-hero-info",{},()=>[n.name?(i(),p("h1",vr,[m("span",{innerHTML:n.name,class:"clip"},null,8,fr)])):x("",!0),n.text?(i(),p("p",{key:1,innerHTML:n.text,class:"text"},null,8,gr)):x("",!0),n.tagline?(i(),p("p",{key:2,innerHTML:n.tagline,class:"tagline"},null,8,_r)):x("",!0)],!0),l(n.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(i(),p("div",Vr,[(i(!0),p(A,null,U(n.actions,o=>(i(),p("div",{key:o.link,class:"action"},[M(hr,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):x("",!0),l(n.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||s(e)?(i(),p("div",Or,[m("div",Pr,[t[0]||(t[0]=m("div",{class:"image-bg"},null,-1)),l(n.$slots,"home-hero-image",{},()=>[n.image?(i(),g(J,{key:0,class:"image-src",image:n.image},null,8,["image"])):x("",!0)],!0)])])):x("",!0)])],2))}}),Tr=v(yr,[["__scopeId","data-v-303bb580"]]),Sr=b({__name:"VPHomeHero",setup(r){const{frontmatter:e}=O();return(n,t)=>s(e).hero?(i(),g(Tr,{key:0,class:"VPHomeHero",name:s(e).hero.name,text:s(e).hero.text,tagline:s(e).hero.tagline,image:s(e).hero.image,actions:s(e).hero.actions},{"home-hero-info-before":u(()=>[l(n.$slots,"home-hero-info-before")]),"home-hero-info":u(()=>[l(n.$slots,"home-hero-info")]),"home-hero-info-after":u(()=>[l(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":u(()=>[l(n.$slots,"home-hero-actions-after")]),"home-hero-image":u(()=>[l(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):x("",!0)}}),Nr={class:"box"},Gr={key:0,class:"icon"},Ar=["innerHTML"],Er=["innerHTML"],Dr=["innerHTML"],Ur={key:4,class:"link-text"},Rr={class:"link-text-value"},Ir=b({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(r){return(e,n)=>(i(),g(L,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:u(()=>[m("article",Nr,[typeof e.icon=="object"&&e.icon.wrap?(i(),p("div",Gr,[M(J,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(i(),g(J,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(i(),p("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Ar)):x("",!0),m("h2",{class:"title",innerHTML:e.title},null,8,Er),e.details?(i(),p("p",{key:3,class:"details",innerHTML:e.details},null,8,Dr)):x("",!0),e.linkText?(i(),p("div",Ur,[m("p",Rr,[I(T(e.linkText)+" ",1),n[0]||(n[0]=m("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):x("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Lr=v(Ir,[["__scopeId","data-v-a3976bdc"]]),kr={key:0,class:"VPFeatures"},Br={class:"container"},Hr={class:"items"},Fr=b({__name:"VPFeatures",props:{features:{}},setup(r){const e=r,n=_(()=>{const t=e.features.length;if(t){if(t===2)return"grid-2";if(t===3)return"grid-3";if(t%3===0)return"grid-6";if(t>3)return"grid-4"}else return});return(t,o)=>t.features?(i(),p("div",kr,[m("div",Br,[m("div",Hr,[(i(!0),p(A,null,U(t.features,a=>(i(),p("div",{key:a.title,class:G(["item",[n.value]])},[M(Lr,{icon:a.icon,title:a.title,details:a.details,link:a.link,"link-text":a.linkText,rel:a.rel,target:a.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):x("",!0)}}),wr=v(Fr,[["__scopeId","data-v-a6181336"]]),Yr=b({__name:"VPHomeFeatures",setup(r){const{frontmatter:e}=O();return(n,t)=>s(e).features?(i(),g(wr,{key:0,class:"VPHomeFeatures",features:s(e).features},null,8,["features"])):x("",!0)}}),jr=b({__name:"VPHomeContent",setup(r){const{width:e}=Xe({includeScrollbar:!1});return(n,t)=>(i(),p("div",{class:"vp-doc container",style:Ae(s(e)?{"--vp-offset":`calc(50% - ${s(e)/2}px)`}:{})},[l(n.$slots,"default",{},void 0,!0)],4))}}),Kr=v(jr,[["__scopeId","data-v-82d4af08"]]),$r={class:"VPHome"},Wr=b({__name:"VPHome",setup(r){const{frontmatter:e}=O();return(n,t)=>{const o=j("Content");return i(),p("div",$r,[l(n.$slots,"home-hero-before",{},void 0,!0),M(Sr,null,{"home-hero-info-before":u(()=>[l(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":u(()=>[l(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":u(()=>[l(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":u(()=>[l(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":u(()=>[l(n.$slots,"home-hero-image",{},void 0,!0)]),_:3}),l(n.$slots,"home-hero-after",{},void 0,!0),l(n.$slots,"home-features-before",{},void 0,!0),M(Yr),l(n.$slots,"home-features-after",{},void 0,!0),s(e).markdownStyles!==!1?(i(),g(Kr,{key:0},{default:u(()=>[M(o)]),_:1})):(i(),g(o,{key:1}))])}}}),zr=v(Wr,[["__scopeId","data-v-686f80a6"]]),Xr={},Zr={class:"VPPage"};function qr(r,e){const n=j("Content");return i(),p("div",Zr,[l(r.$slots,"page-top"),M(n),l(r.$slots,"page-bottom")])}const Jr=v(Xr,[["render",qr]]),Qr=b({__name:"VPContent",setup(r){const{page:e,frontmatter:n}=O(),{hasSidebar:t}=k();return(o,a)=>(i(),p("div",{class:G(["VPContent",{"has-sidebar":s(t),"is-home":s(n).layout==="home"}]),id:"VPContent"},[s(e).isNotFound?l(o.$slots,"not-found",{key:0},()=>[M(Mn)],!0):s(n).layout==="page"?(i(),g(Jr,{key:1},{"page-top":u(()=>[l(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":u(()=>[l(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):s(n).layout==="home"?(i(),g(zr,{key:2},{"home-hero-before":u(()=>[l(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":u(()=>[l(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":u(()=>[l(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":u(()=>[l(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":u(()=>[l(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":u(()=>[l(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":u(()=>[l(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":u(()=>[l(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":u(()=>[l(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):s(n).layout&&s(n).layout!=="doc"?(i(),g($(s(n).layout),{key:3})):(i(),g(mr,{key:4},{"doc-top":u(()=>[l(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":u(()=>[l(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":u(()=>[l(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":u(()=>[l(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":u(()=>[l(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":u(()=>[l(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":u(()=>[l(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":u(()=>[l(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":u(()=>[l(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":u(()=>[l(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":u(()=>[l(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),et=v(Qr,[["__scopeId","data-v-1428d186"]]),nt={class:"container"},rt=["innerHTML"],tt=["innerHTML"],ot=b({__name:"VPFooter",setup(r){const{theme:e,frontmatter:n}=O(),{hasSidebar:t}=k();return(o,a)=>s(e).footer&&s(n).footer!==!1?(i(),p("footer",{key:0,class:G(["VPFooter",{"has-sidebar":s(t)}])},[m("div",nt,[s(e).footer.message?(i(),p("p",{key:0,class:"message",innerHTML:s(e).footer.message},null,8,rt)):x("",!0),s(e).footer.copyright?(i(),p("p",{key:1,class:"copyright",innerHTML:s(e).footer.copyright},null,8,tt)):x("",!0)])],2)):x("",!0)}}),at=v(ot,[["__scopeId","data-v-e315a0ad"]]);function it(){const{theme:r,frontmatter:e}=O(),n=Ne([]),t=_(()=>n.value.length>0);return ee(()=>{n.value=Ce(e.value.outline??r.value.outline)}),{headers:n,hasLocalNav:t}}const st={class:"header"},dt={class:"outline"},lt=b({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(r){const e=r,{theme:n}=O(),t=N(!1),o=N(0),a=N(),d=N();Ze(a,()=>{t.value=!1}),de("Escape",()=>{t.value=!1}),ee(()=>{t.value=!1});function h(){t.value=!t.value,o.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function c(V){V.target.classList.contains("outline-link")&&(d.value&&(d.value.style.transition="none"),qe(()=>{t.value=!1}))}function f(){t.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(V,C)=>(i(),p("div",{class:"VPLocalNavOutlineDropdown",style:Ae({"--vp-vh":o.value+"px"}),ref_key:"main",ref:a},[V.headers.length>0?(i(),p("button",{key:0,onClick:h,class:G({open:t.value})},[I(T(s(Le)(s(n)))+" ",1),C[0]||(C[0]=m("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(i(),p("button",{key:1,onClick:f},T(s(n).returnToTopLabel||"Return to top"),1)),M(ce,{name:"flyout"},{default:u(()=>[t.value?(i(),p("div",{key:0,ref_key:"items",ref:d,class:"items",onClick:c},[m("div",st,[m("a",{class:"top-link",href:"#",onClick:f},T(s(n).returnToTopLabel||"Return to top"),1)]),m("div",dt,[M(ke,{headers:V.headers},null,8,["headers"])])],512)):x("",!0)]),_:1})],4))}}),pt=v(lt,[["__scopeId","data-v-d2ecc192"]]),ut={class:"container"},mt=["aria-expanded"],ct={class:"menu-text"},ht=b({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(r){const{theme:e,frontmatter:n}=O(),{hasSidebar:t}=k(),{headers:o}=it(),{y:a}=Ee(),d=N(0);w(()=>{d.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),ee(()=>{o.value=Ce(n.value.outline??e.value.outline)});const h=_(()=>o.value.length===0),c=_(()=>h.value&&!t.value),f=_(()=>({VPLocalNav:!0,"has-sidebar":t.value,empty:h.value,fixed:c.value}));return(V,C)=>s(n).layout!=="home"&&(!c.value||s(a)>=d.value)?(i(),p("div",{key:0,class:G(f.value)},[m("div",ut,[s(t)?(i(),p("button",{key:0,class:"menu","aria-expanded":V.open,"aria-controls":"VPSidebarNav",onClick:C[0]||(C[0]=P=>V.$emit("open-menu"))},[C[1]||(C[1]=m("span",{class:"vpi-align-left menu-icon"},null,-1)),m("span",ct,T(s(e).sidebarMenuLabel||"Menu"),1)],8,mt)):x("",!0),M(pt,{headers:s(o),navHeight:d.value},null,8,["headers","navHeight"])])],2)):x("",!0)}}),xt=v(ht,[["__scopeId","data-v-a6f0e41e"]]);function bt(){const r=N(!1);function e(){r.value=!0,window.addEventListener("resize",o)}function n(){r.value=!1,window.removeEventListener("resize",o)}function t(){r.value?n():e()}function o(){window.outerWidth>=768&&n()}const a=ne();return Y(()=>a.path,n),{isScreenOpen:r,openScreen:e,closeScreen:n,toggleScreen:t}}const Mt={},Ct={class:"VPSwitch",type:"button",role:"switch"},vt={class:"check"},ft={key:0,class:"icon"};function gt(r,e){return i(),p("button",Ct,[m("span",vt,[r.$slots.default?(i(),p("span",ft,[l(r.$slots,"default",{},void 0,!0)])):x("",!0)])])}const _t=v(Mt,[["render",gt],["__scopeId","data-v-1d5665e3"]]),Vt=b({__name:"VPSwitchAppearance",setup(r){const{isDark:e,theme:n}=O(),t=re("toggle-appearance",()=>{e.value=!e.value}),o=_(()=>e.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme");return(a,d)=>(i(),g(_t,{title:o.value,class:"VPSwitchAppearance","aria-checked":s(e),onClick:s(t)},{default:u(()=>[...d[0]||(d[0]=[m("span",{class:"vpi-sun sun"},null,-1),m("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),ve=v(Vt,[["__scopeId","data-v-d1f28634"]]),Ot={key:0,class:"VPNavBarAppearance"},Pt=b({__name:"VPNavBarAppearance",setup(r){const{site:e}=O();return(n,t)=>s(e).appearance&&s(e).appearance!=="force-dark"?(i(),p("div",Ot,[M(ve)])):x("",!0)}}),yt=v(Pt,[["__scopeId","data-v-e6aabb21"]]),fe=N();let Be=!1,ie=0;function Tt(r){const e=N(!1);if(W){!Be&&St(),ie++;const n=Y(fe,t=>{var o,a,d;t===r.el.value||(o=r.el.value)!=null&&o.contains(t)?(e.value=!0,(a=r.onFocus)==null||a.call(r)):(e.value=!1,(d=r.onBlur)==null||d.call(r))});xe(()=>{n(),ie--,ie||Nt()})}return Je(e)}function St(){document.addEventListener("focusin",He),Be=!0,fe.value=document.activeElement}function Nt(){document.removeEventListener("focusin",He)}function He(){fe.value=document.activeElement}const Gt={class:"VPMenuLink"},At=b({__name:"VPMenuLink",props:{item:{}},setup(r){const{page:e}=O();return(n,t)=>(i(),p("div",Gt,[M(L,{class:G({active:s(F)(s(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel},{default:u(()=>[I(T(n.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),te=v(At,[["__scopeId","data-v-43f1e123"]]),Et={class:"VPMenuGroup"},Dt={key:0,class:"title"},Ut=b({__name:"VPMenuGroup",props:{text:{},items:{}},setup(r){return(e,n)=>(i(),p("div",Et,[e.text?(i(),p("p",Dt,T(e.text),1)):x("",!0),(i(!0),p(A,null,U(e.items,t=>(i(),p(A,null,["link"in t?(i(),g(te,{key:0,item:t},null,8,["item"])):x("",!0)],64))),256))]))}}),Rt=v(Ut,[["__scopeId","data-v-69e747b5"]]),It={class:"VPMenu"},Lt={key:0,class:"items"},kt=b({__name:"VPMenu",props:{items:{}},setup(r){return(e,n)=>(i(),p("div",It,[e.items?(i(),p("div",Lt,[(i(!0),p(A,null,U(e.items,t=>(i(),p(A,{key:t.text},["link"in t?(i(),g(te,{key:0,item:t},null,8,["item"])):(i(),g(Rt,{key:1,text:t.text,items:t.items},null,8,["text","items"]))],64))),128))])):x("",!0),l(e.$slots,"default",{},void 0,!0)]))}}),Bt=v(kt,[["__scopeId","data-v-e7ea1737"]]),Ht=["aria-expanded","aria-label"],Ft={key:0,class:"text"},wt=["innerHTML"],Yt={key:1,class:"vpi-more-horizontal icon"},jt={class:"menu"},Kt=b({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(r){const e=N(!1),n=N();Tt({el:n,onBlur:t});function t(){e.value=!1}return(o,a)=>(i(),p("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:a[1]||(a[1]=d=>e.value=!0),onMouseleave:a[2]||(a[2]=d=>e.value=!1)},[m("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":o.label,onClick:a[0]||(a[0]=d=>e.value=!e.value)},[o.button||o.icon?(i(),p("span",Ft,[o.icon?(i(),p("span",{key:0,class:G([o.icon,"option-icon"])},null,2)):x("",!0),o.button?(i(),p("span",{key:1,innerHTML:o.button},null,8,wt)):x("",!0),a[3]||(a[3]=m("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(i(),p("span",Yt))],8,Ht),m("div",jt,[M(Bt,{items:o.items},{default:u(()=>[l(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),ge=v(Kt,[["__scopeId","data-v-b6c34ac9"]]),$t=["href","aria-label","innerHTML"],Wt=b({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(r){const e=r,n=_(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}" />`);return(t,o)=>(i(),p("a",{class:"VPSocialLink no-icon",href:t.link,"aria-label":t.ariaLabel??(typeof t.icon=="string"?t.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,$t))}}),zt=v(Wt,[["__scopeId","data-v-eee4e7cb"]]),Xt={class:"VPSocialLinks"},Zt=b({__name:"VPSocialLinks",props:{links:{}},setup(r){return(e,n)=>(i(),p("div",Xt,[(i(!0),p(A,null,U(e.links,({link:t,icon:o,ariaLabel:a})=>(i(),g(zt,{key:t,icon:o,link:t,ariaLabel:a},null,8,["icon","link","ariaLabel"]))),128))]))}}),_e=v(Zt,[["__scopeId","data-v-7bc22406"]]),qt={key:0,class:"group translations"},Jt={class:"trans-title"},Qt={key:1,class:"group"},eo={class:"item appearance"},no={class:"label"},ro={class:"appearance-action"},to={key:2,class:"group"},oo={class:"item social-links"},ao=b({__name:"VPNavBarExtra",setup(r){const{site:e,theme:n}=O(),{localeLinks:t,currentLang:o}=X({correspondingLink:!0}),a=_(()=>t.value.length&&o.value.label||e.value.appearance||n.value.socialLinks);return(d,h)=>a.value?(i(),g(ge,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:u(()=>[s(t).length&&s(o).label?(i(),p("div",qt,[m("p",Jt,T(s(o).label),1),(i(!0),p(A,null,U(s(t),c=>(i(),g(te,{key:c.link,item:c},null,8,["item"]))),128))])):x("",!0),s(e).appearance&&s(e).appearance!=="force-dark"?(i(),p("div",Qt,[m("div",eo,[m("p",no,T(s(n).darkModeSwitchLabel||"Appearance"),1),m("div",ro,[M(ve)])])])):x("",!0),s(n).socialLinks?(i(),p("div",to,[m("div",oo,[M(_e,{class:"social-links-list",links:s(n).socialLinks},null,8,["links"])])])):x("",!0)]),_:1})):x("",!0)}}),io=v(ao,[["__scopeId","data-v-d0bd9dde"]]),so=["aria-expanded"],lo=b({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(r){return(e,n)=>(i(),p("button",{type:"button",class:G(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=t=>e.$emit("click"))},[...n[1]||(n[1]=[m("span",{class:"container"},[m("span",{class:"top"}),m("span",{class:"middle"}),m("span",{class:"bottom"})],-1)])],10,so))}}),po=v(lo,[["__scopeId","data-v-e5dd9c1c"]]),uo=["innerHTML"],mo=b({__name:"VPNavBarMenuLink",props:{item:{}},setup(r){const{page:e}=O();return(n,t)=>(i(),g(L,{class:G({VPNavBarMenuLink:!0,active:s(F)(s(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,noIcon:n.item.noIcon,target:n.item.target,rel:n.item.rel,tabindex:"0"},{default:u(()=>[m("span",{innerHTML:n.item.text},null,8,uo)]),_:1},8,["class","href","noIcon","target","rel"]))}}),co=v(mo,[["__scopeId","data-v-9c663999"]]),ho=b({__name:"VPNavBarMenuGroup",props:{item:{}},setup(r){const e=r,{page:n}=O(),t=a=>"link"in a?F(n.value.relativePath,a.link,!!e.item.activeMatch):a.items.some(t),o=_(()=>t(e.item));return(a,d)=>(i(),g(ge,{class:G({VPNavBarMenuGroup:!0,active:s(F)(s(n).relativePath,a.item.activeMatch,!!a.item.activeMatch)||o.value}),button:a.item.text,items:a.item.items},null,8,["class","button","items"]))}}),xo={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},bo=b({__name:"VPNavBarMenu",setup(r){const{theme:e}=O();return(n,t)=>s(e).nav?(i(),p("nav",xo,[t[0]||(t[0]=m("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),(i(!0),p(A,null,U(s(e).nav,o=>(i(),p(A,{key:o.text},["link"in o?(i(),g(co,{key:0,item:o},null,8,["item"])):(i(),g(ho,{key:1,item:o},null,8,["item"]))],64))),128))])):x("",!0)}}),Mo=v(bo,[["__scopeId","data-v-7f418b0f"]]);function Co(r){const{localeIndex:e,theme:n}=O();function t(o){var E,D,y;const a=o.split("."),d=(E=n.value.search)==null?void 0:E.options,h=d&&typeof d=="object",c=h&&((y=(D=d.locales)==null?void 0:D[e.value])==null?void 0:y.translations)||null,f=h&&d.translations||null;let V=c,C=f,P=r;const S=a.pop();for(const R of a){let B=null;const K=P==null?void 0:P[R];K&&(B=P=K);const oe=C==null?void 0:C[R];oe&&(B=C=oe);const ae=V==null?void 0:V[R];ae&&(B=V=ae),K||(P=B),oe||(C=B),ae||(V=B)}return(V==null?void 0:V[S])??(C==null?void 0:C[S])??(P==null?void 0:P[S])??""}return t}const vo=["aria-label"],fo={class:"DocSearch-Button-Container"},go={class:"DocSearch-Button-Placeholder"},Oe=b({__name:"VPNavBarSearchButton",setup(r){const n=Co({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(t,o)=>(i(),p("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":s(n)("button.buttonAriaLabel")},[m("span",fo,[o[0]||(o[0]=m("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),m("span",go,T(s(n)("button.buttonText")),1)]),o[1]||(o[1]=m("span",{class:"DocSearch-Button-Keys"},[m("kbd",{class:"DocSearch-Button-Key"}),m("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,vo))}}),_o={class:"VPNavBarSearch"},Vo={id:"local-search"},Oo={key:1,id:"docsearch"},Po=b({__name:"VPNavBarSearch",setup(r){const e=De(()=>H(()=>import("./VPLocalSearchBox.BjAYWISA.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:t}=O(),o=N(!1),a=N(!1);w(()=>{});function d(){o.value||(o.value=!0,setTimeout(h,16))}function h(){const C=new Event("keydown");C.key="k",C.metaKey=!0,window.dispatchEvent(C),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||h()},16)}function c(C){const P=C.target,S=P.tagName;return P.isContentEditable||S==="INPUT"||S==="SELECT"||S==="TEXTAREA"}const f=N(!1);de("k",C=>{(C.ctrlKey||C.metaKey)&&(C.preventDefault(),f.value=!0)}),de("/",C=>{c(C)||(C.preventDefault(),f.value=!0)});const V="local";return(C,P)=>{var S;return i(),p("div",_o,[s(V)==="local"?(i(),p(A,{key:0},[f.value?(i(),g(s(e),{key:0,onClose:P[0]||(P[0]=E=>f.value=!1)})):x("",!0),m("div",Vo,[M(Oe,{onClick:P[1]||(P[1]=E=>f.value=!0)})])],64)):s(V)==="algolia"?(i(),p(A,{key:1},[o.value?(i(),g(s(n),{key:0,algolia:((S=s(t).search)==null?void 0:S.options)??s(t).algolia,onVnodeBeforeMount:P[2]||(P[2]=E=>a.value=!0)},null,8,["algolia"])):x("",!0),a.value?x("",!0):(i(),p("div",Oo,[M(Oe,{onClick:d})]))],64)):x("",!0)])}}}),yo=b({__name:"VPNavBarSocialLinks",setup(r){const{theme:e}=O();return(n,t)=>s(e).socialLinks?(i(),g(_e,{key:0,class:"VPNavBarSocialLinks",links:s(e).socialLinks},null,8,["links"])):x("",!0)}}),To=v(yo,[["__scopeId","data-v-0394ad82"]]),So=["href","rel","target"],No={key:1},Go={key:2},Ao=b({__name:"VPNavBarTitle",setup(r){const{site:e,theme:n}=O(),{hasSidebar:t}=k(),{currentLang:o}=X(),a=_(()=>{var c;return typeof n.value.logoLink=="string"?n.value.logoLink:(c=n.value.logoLink)==null?void 0:c.link}),d=_(()=>{var c;return typeof n.value.logoLink=="string"||(c=n.value.logoLink)==null?void 0:c.rel}),h=_(()=>{var c;return typeof n.value.logoLink=="string"||(c=n.value.logoLink)==null?void 0:c.target});return(c,f)=>(i(),p("div",{class:G(["VPNavBarTitle",{"has-sidebar":s(t)}])},[m("a",{class:"title",href:a.value??s(be)(s(o).link),rel:d.value,target:h.value},[l(c.$slots,"nav-bar-title-before",{},void 0,!0),s(n).logo?(i(),g(J,{key:0,class:"logo",image:s(n).logo},null,8,["image"])):x("",!0),s(n).siteTitle?(i(),p("span",No,T(s(n).siteTitle),1)):s(n).siteTitle===void 0?(i(),p("span",Go,T(s(e).title),1)):x("",!0),l(c.$slots,"nav-bar-title-after",{},void 0,!0)],8,So)],2))}}),Eo=v(Ao,[["__scopeId","data-v-ab179fa1"]]),Do={class:"items"},Uo={class:"title"},Ro=b({__name:"VPNavBarTranslations",setup(r){const{theme:e}=O(),{localeLinks:n,currentLang:t}=X({correspondingLink:!0});return(o,a)=>s(n).length&&s(t).label?(i(),g(ge,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:s(e).langMenuLabel||"Change language"},{default:u(()=>[m("div",Do,[m("p",Uo,T(s(t).label),1),(i(!0),p(A,null,U(s(n),d=>(i(),g(te,{key:d.link,item:d},null,8,["item"]))),128))])]),_:1},8,["label"])):x("",!0)}}),Io=v(Ro,[["__scopeId","data-v-88af2de4"]]),Lo={class:"wrapper"},ko={class:"container"},Bo={class:"title"},Ho={class:"content"},Fo={class:"content-body"},wo=b({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(r){const{y:e}=Ee(),{hasSidebar:n}=k(),{frontmatter:t}=O(),o=N({});return Se(()=>{o.value={"has-sidebar":n.value,home:t.value.layout==="home",top:e.value===0}}),(a,d)=>(i(),p("div",{class:G(["VPNavBar",o.value])},[m("div",Lo,[m("div",ko,[m("div",Bo,[M(Eo,null,{"nav-bar-title-before":u(()=>[l(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":u(()=>[l(a.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),m("div",Ho,[m("div",Fo,[l(a.$slots,"nav-bar-content-before",{},void 0,!0),M(Po,{class:"search"}),M(Mo,{class:"menu"}),M(Io,{class:"translations"}),M(yt,{class:"appearance"}),M(To,{class:"social-links"}),M(io,{class:"extra"}),l(a.$slots,"nav-bar-content-after",{},void 0,!0),M(po,{class:"hamburger",active:a.isScreenOpen,onClick:d[0]||(d[0]=h=>a.$emit("toggle-screen"))},null,8,["active"])])])])]),d[1]||(d[1]=m("div",{class:"divider"},[m("div",{class:"divider-line"})],-1))],2))}}),Yo=v(wo,[["__scopeId","data-v-ccf7ddec"]]),jo={key:0,class:"VPNavScreenAppearance"},Ko={class:"text"},$o=b({__name:"VPNavScreenAppearance",setup(r){const{site:e,theme:n}=O();return(t,o)=>s(e).appearance&&s(e).appearance!=="force-dark"?(i(),p("div",jo,[m("p",Ko,T(s(n).darkModeSwitchLabel||"Appearance"),1),M(ve)])):x("",!0)}}),Wo=v($o,[["__scopeId","data-v-2d7af913"]]),zo=b({__name:"VPNavScreenMenuLink",props:{item:{}},setup(r){const e=re("close-screen");return(n,t)=>(i(),g(L,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:s(e)},{default:u(()=>[I(T(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Xo=v(zo,[["__scopeId","data-v-05f27b2a"]]),Zo=b({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(r){const e=re("close-screen");return(n,t)=>(i(),g(L,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:s(e)},{default:u(()=>[I(T(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Fe=v(Zo,[["__scopeId","data-v-19976ae1"]]),qo={class:"VPNavScreenMenuGroupSection"},Jo={key:0,class:"title"},Qo=b({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(r){return(e,n)=>(i(),p("div",qo,[e.text?(i(),p("p",Jo,T(e.text),1)):x("",!0),(i(!0),p(A,null,U(e.items,t=>(i(),g(Fe,{key:t.text,item:t},null,8,["item"]))),128))]))}}),ea=v(Qo,[["__scopeId","data-v-8133b170"]]),na=["aria-controls","aria-expanded"],ra=["innerHTML"],ta=["id"],oa={key:1,class:"group"},aa=b({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(r){const e=r,n=N(!1),t=_(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function o(){n.value=!n.value}return(a,d)=>(i(),p("div",{class:G(["VPNavScreenMenuGroup",{open:n.value}])},[m("button",{class:"button","aria-controls":t.value,"aria-expanded":n.value,onClick:o},[m("span",{class:"button-text",innerHTML:a.text},null,8,ra),d[0]||(d[0]=m("span",{class:"vpi-plus button-icon"},null,-1))],8,na),m("div",{id:t.value,class:"items"},[(i(!0),p(A,null,U(a.items,h=>(i(),p(A,{key:h.text},["link"in h?(i(),p("div",{key:h.text,class:"item"},[M(Fe,{item:h},null,8,["item"])])):(i(),p("div",oa,[M(ea,{text:h.text,items:h.items},null,8,["text","items"])]))],64))),128))],8,ta)],2))}}),ia=v(aa,[["__scopeId","data-v-ff6087d4"]]),sa={key:0,class:"VPNavScreenMenu"},da=b({__name:"VPNavScreenMenu",setup(r){const{theme:e}=O();return(n,t)=>s(e).nav?(i(),p("nav",sa,[(i(!0),p(A,null,U(s(e).nav,o=>(i(),p(A,{key:o.text},["link"in o?(i(),g(Xo,{key:0,item:o},null,8,["item"])):(i(),g(ia,{key:1,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):x("",!0)}}),la=b({__name:"VPNavScreenSocialLinks",setup(r){const{theme:e}=O();return(n,t)=>s(e).socialLinks?(i(),g(_e,{key:0,class:"VPNavScreenSocialLinks",links:s(e).socialLinks},null,8,["links"])):x("",!0)}}),pa={class:"list"},ua=b({__name:"VPNavScreenTranslations",setup(r){const{localeLinks:e,currentLang:n}=X({correspondingLink:!0}),t=N(!1);function o(){t.value=!t.value}return(a,d)=>s(e).length&&s(n).label?(i(),p("div",{key:0,class:G(["VPNavScreenTranslations",{open:t.value}])},[m("button",{class:"title",onClick:o},[d[0]||(d[0]=m("span",{class:"vpi-languages icon lang"},null,-1)),I(" "+T(s(n).label)+" ",1),d[1]||(d[1]=m("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),m("ul",pa,[(i(!0),p(A,null,U(s(e),h=>(i(),p("li",{key:h.link,class:"item"},[M(L,{class:"link",href:h.link},{default:u(()=>[I(T(h.text),1)]),_:2},1032,["href"])]))),128))])],2)):x("",!0)}}),ma=v(ua,[["__scopeId","data-v-858fe1a4"]]),ca={class:"container"},ha=b({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(r){const e=N(null),n=Ue(W?document.body:null);return(t,o)=>(i(),g(ce,{name:"fade",onEnter:o[0]||(o[0]=a=>n.value=!0),onAfterLeave:o[1]||(o[1]=a=>n.value=!1)},{default:u(()=>[t.open?(i(),p("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[m("div",ca,[l(t.$slots,"nav-screen-content-before",{},void 0,!0),M(da,{class:"menu"}),M(ma,{class:"translations"}),M(Wo,{class:"appearance"}),M(la,{class:"social-links"}),l(t.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):x("",!0)]),_:3}))}}),xa=v(ha,[["__scopeId","data-v-cc5739dd"]]),ba={key:0,class:"VPNav"},Ma=b({__name:"VPNav",setup(r){const{isScreenOpen:e,closeScreen:n,toggleScreen:t}=bt(),{frontmatter:o}=O(),a=_(()=>o.value.navbar!==!1);return Re("close-screen",n),Q(()=>{W&&document.documentElement.classList.toggle("hide-nav",!a.value)}),(d,h)=>a.value?(i(),p("header",ba,[M(Yo,{"is-screen-open":s(e),onToggleScreen:s(t)},{"nav-bar-title-before":u(()=>[l(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":u(()=>[l(d.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":u(()=>[l(d.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":u(()=>[l(d.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),M(xa,{open:s(e)},{"nav-screen-content-before":u(()=>[l(d.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":u(()=>[l(d.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):x("",!0)}}),Ca=v(Ma,[["__scopeId","data-v-ae24b3ad"]]),va=["role","tabindex"],fa={key:1,class:"items"},ga=b({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(r){const e=r,{collapsed:n,collapsible:t,isLink:o,isActiveLink:a,hasActiveLink:d,hasChildren:h,toggle:c}=gn(_(()=>e.item)),f=_(()=>h.value?"section":"div"),V=_(()=>o.value?"a":"div"),C=_(()=>h.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),P=_(()=>o.value?void 0:"button"),S=_(()=>[[`level-${e.depth}`],{collapsible:t.value},{collapsed:n.value},{"is-link":o.value},{"is-active":a.value},{"has-active":d.value}]);function E(y){"key"in y&&y.key!=="Enter"||!e.item.link&&c()}function D(){e.item.link&&c()}return(y,R)=>{const B=j("VPSidebarItem",!0);return i(),g($(f.value),{class:G(["VPSidebarItem",S.value])},{default:u(()=>[y.item.text?(i(),p("div",Z({key:0,class:"item",role:P.value},Qe(y.item.items?{click:E,keydown:E}:{},!0),{tabindex:y.item.items&&0}),[R[1]||(R[1]=m("div",{class:"indicator"},null,-1)),y.item.link?(i(),g(L,{key:0,tag:V.value,class:"link",href:y.item.link,rel:y.item.rel,target:y.item.target},{default:u(()=>[(i(),g($(C.value),{class:"text",innerHTML:y.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(i(),g($(C.value),{key:1,class:"text",innerHTML:y.item.text},null,8,["innerHTML"])),y.item.collapsed!=null&&y.item.items&&y.item.items.length?(i(),p("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:D,onKeydown:en(D,["enter"]),tabindex:"0"},[...R[0]||(R[0]=[m("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):x("",!0)],16,va)):x("",!0),y.item.items&&y.item.items.length?(i(),p("div",fa,[y.depth<5?(i(!0),p(A,{key:0},U(y.item.items,K=>(i(),g(B,{key:K.text,item:K,depth:y.depth+1},null,8,["item","depth"]))),128)):x("",!0)])):x("",!0)]),_:1},8,["class"])}}}),_a=v(ga,[["__scopeId","data-v-b8d55f3b"]]),Va={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Oa=b({__name:"VPSidebar",props:{open:{type:Boolean}},setup(r){const{sidebarGroups:e,hasSidebar:n}=k(),t=r,o=N(null),a=Ue(W?document.body:null);return Y([t,o],()=>{var d;t.open?(a.value=!0,(d=o.value)==null||d.focus()):a.value=!1},{immediate:!0,flush:"post"}),(d,h)=>s(n)?(i(),p("aside",{key:0,class:G(["VPSidebar",{open:d.open}]),ref_key:"navEl",ref:o,onClick:h[0]||(h[0]=nn(()=>{},["stop"]))},[h[2]||(h[2]=m("div",{class:"curtain"},null,-1)),m("nav",Va,[h[1]||(h[1]=m("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),l(d.$slots,"sidebar-nav-before",{},void 0,!0),(i(!0),p(A,null,U(s(e),c=>(i(),p("div",{key:c.text,class:"group"},[M(_a,{item:c,depth:0},null,8,["item"])]))),128)),l(d.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):x("",!0)}}),Pa=v(Oa,[["__scopeId","data-v-575e6a36"]]),ya=b({__name:"VPSkipLink",setup(r){const e=ne(),n=N();Y(()=>e.path,()=>n.value.focus());function t({target:o}){const a=document.getElementById(decodeURIComponent(o.hash).slice(1));if(a){const d=()=>{a.removeAttribute("tabindex"),a.removeEventListener("blur",d)};a.setAttribute("tabindex","-1"),a.addEventListener("blur",d),a.focus(),window.scrollTo(0,0)}}return(o,a)=>(i(),p(A,null,[m("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),m("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:t}," Skip to content ")],64))}}),Ta=v(ya,[["__scopeId","data-v-0f60ec36"]]),Sa=b({__name:"Layout",setup(r){const{isOpen:e,open:n,close:t}=k(),o=ne();Y(()=>o.path,t),fn(e,t);const{frontmatter:a}=O(),d=rn(),h=_(()=>!!d["home-hero-image"]);return Re("hero-image-slot-exists",h),(c,f)=>{const V=j("Content");return s(a).layout!==!1?(i(),p("div",{key:0,class:G(["Layout",s(a).pageClass])},[l(c.$slots,"layout-top",{},void 0,!0),M(Ta),M(sn,{class:"backdrop",show:s(e),onClick:s(t)},null,8,["show","onClick"]),M(Ca,null,{"nav-bar-title-before":u(()=>[l(c.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":u(()=>[l(c.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":u(()=>[l(c.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":u(()=>[l(c.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":u(()=>[l(c.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":u(()=>[l(c.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),M(xt,{open:s(e),onOpenMenu:s(n)},null,8,["open","onOpenMenu"]),M(Pa,{open:s(e)},{"sidebar-nav-before":u(()=>[l(c.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":u(()=>[l(c.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),M(et,null,{"page-top":u(()=>[l(c.$slots,"page-top",{},void 0,!0)]),"page-bottom":u(()=>[l(c.$slots,"page-bottom",{},void 0,!0)]),"not-found":u(()=>[l(c.$slots,"not-found",{},void 0,!0)]),"home-hero-before":u(()=>[l(c.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":u(()=>[l(c.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":u(()=>[l(c.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":u(()=>[l(c.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":u(()=>[l(c.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":u(()=>[l(c.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":u(()=>[l(c.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":u(()=>[l(c.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":u(()=>[l(c.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":u(()=>[l(c.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":u(()=>[l(c.$slots,"doc-before",{},void 0,!0)]),"doc-after":u(()=>[l(c.$slots,"doc-after",{},void 0,!0)]),"doc-top":u(()=>[l(c.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":u(()=>[l(c.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":u(()=>[l(c.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":u(()=>[l(c.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":u(()=>[l(c.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":u(()=>[l(c.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":u(()=>[l(c.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":u(()=>[l(c.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),M(at),l(c.$slots,"layout-bottom",{},void 0,!0)],2)):(i(),g(V,{key:1}))}}}),Na=v(Sa,[["__scopeId","data-v-5d98c3a5"]]),Pe={Layout:Na,enhanceApp:({app:r})=>{r.component("Badge",tn)}};let we={},Ye={};function Ga(r){we=r}function Aa(r){Ye=r}function ja(){Ea(),Da()}function Ea(){const r=window;r._vue||(r._vue=we)}function Da(){const r=window;r._app||(r._app=Ye)}const Ua=`import { camelize } from '@vue/shared';\r
import { capitalize } from '@vue/shared';\r
import { ComponentPropsOptions as ComponentPropsOptions_2 } from '@vue/runtime-core';\r
import { computed as computed_2 } from '@vue/reactivity';\r
import { ComputedGetter } from '@vue/reactivity';\r
import { ComputedRef } from '@vue/reactivity';\r
import { ComputedSetter } from '@vue/reactivity';\r
import { customRef } from '@vue/reactivity';\r
import { CustomRefFactory } from '@vue/reactivity';\r
import { DebuggerEvent } from '@vue/reactivity';\r
import { DebuggerEventExtraInfo } from '@vue/reactivity';\r
import { DebuggerOptions } from '@vue/reactivity';\r
import { DeepReadonly } from '@vue/reactivity';\r
import { effect } from '@vue/reactivity';\r
import { EffectScheduler } from '@vue/reactivity';\r
import { EffectScope } from '@vue/reactivity';\r
import { effectScope } from '@vue/reactivity';\r
import { getCurrentScope } from '@vue/reactivity';\r
import { IfAny } from '@vue/shared';\r
import { isProxy } from '@vue/reactivity';\r
import { isReactive } from '@vue/reactivity';\r
import { isReadonly } from '@vue/reactivity';\r
import { isRef } from '@vue/reactivity';\r
import { isShallow } from '@vue/reactivity';\r
import { LooseRequired } from '@vue/shared';\r
import { markRaw } from '@vue/reactivity';\r
import { normalizeClass } from '@vue/shared';\r
import { normalizeProps } from '@vue/shared';\r
import { normalizeStyle } from '@vue/shared';\r
import { onScopeDispose } from '@vue/reactivity';\r
import { proxyRefs } from '@vue/reactivity';\r
import { reactive } from '@vue/reactivity';\r
import { ReactiveEffect } from '@vue/reactivity';\r
import { ReactiveEffectOptions } from '@vue/reactivity';\r
import { ReactiveEffectRunner } from '@vue/reactivity';\r
import { ReactiveFlags } from '@vue/reactivity';\r
import { readonly } from '@vue/reactivity';\r
import { Ref } from '@vue/reactivity';\r
import { ref } from '@vue/reactivity';\r
import { ShallowReactive } from '@vue/reactivity';\r
import { shallowReactive } from '@vue/reactivity';\r
import { shallowReadonly } from '@vue/reactivity';\r
import { ShallowRef } from '@vue/reactivity';\r
import { shallowRef } from '@vue/reactivity';\r
import { ShallowUnwrapRef } from '@vue/reactivity';\r
import { ShapeFlags } from '@vue/shared';\r
import { SlotFlags } from '@vue/shared';\r
import { stop as stop_2 } from '@vue/reactivity';\r
import { toDisplayString } from '@vue/shared';\r
import { toHandlerKey } from '@vue/shared';\r
import { toRaw } from '@vue/reactivity';\r
import { ToRef } from '@vue/reactivity';\r
import { toRef } from '@vue/reactivity';\r
import { ToRefs } from '@vue/reactivity';\r
import { toRefs } from '@vue/reactivity';\r
import { TrackOpTypes } from '@vue/reactivity';\r
import { TriggerOpTypes } from '@vue/reactivity';\r
import { triggerRef } from '@vue/reactivity';\r
import { UnionToIntersection } from '@vue/shared';\r
import { unref } from '@vue/reactivity';\r
import { UnwrapNestedRefs } from '@vue/reactivity';\r
import { UnwrapRef } from '@vue/reactivity';\r
import { WritableComputedOptions } from '@vue/reactivity';\r
import { WritableComputedRef } from '@vue/reactivity';\r
\r
/**\r
 * Default allowed non-declared props on component in TSX\r
 */\r
export declare interface AllowedComponentProps {\r
    class?: unknown;\r
    style?: unknown;\r
}\r
\r
export declare interface App<HostElement = any> {\r
    version: string;\r
    config: AppConfig;\r
    use(plugin: Plugin_2, ...options: any[]): this;\r
    mixin(mixin: ComponentOptions): this;\r
    component(name: string): Component | undefined;\r
    component(name: string, component: Component): this;\r
    directive(name: string): Directive | undefined;\r
    directive(name: string, directive: Directive): this;\r
    mount(rootContainer: HostElement | string, isHydrate?: boolean, isSVG?: boolean): ComponentPublicInstance;\r
    unmount(): void;\r
    provide<T>(key: InjectionKey<T> | string, value: T): this;\r
    _uid: number;\r
    _component: ConcreteComponent;\r
    _props: Data | null;\r
    _container: HostElement | null;\r
    _context: AppContext;\r
    _instance: ComponentInternalInstance | null;\r
    /**\r
     * v2 compat only\r
     */\r
    filter?(name: string): Function | undefined;\r
    filter?(name: string, filter: Function): this;\r
    /* Excluded from this release type: _createRoot */\r
}\r
\r
export declare interface AppConfig {\r
    readonly isNativeTag?: (tag: string) => boolean;\r
    performance: boolean;\r
    optionMergeStrategies: Record<string, OptionMergeFunction>;\r
    globalProperties: Record<string, any>;\r
    errorHandler?: (err: unknown, instance: ComponentPublicInstance | null, info: string) => void;\r
    warnHandler?: (msg: string, instance: ComponentPublicInstance | null, trace: string) => void;\r
    /**\r
     * Options to pass to \`@vue/compiler-dom\`.\r
     * Only supported in runtime compiler build.\r
     */\r
    compilerOptions: RuntimeCompilerOptions;\r
    /**\r
     * @deprecated use config.compilerOptions.isCustomElement\r
     */\r
    isCustomElement?: (tag: string) => boolean;\r
    /**\r
     * Temporary config for opt-in to unwrap injected refs.\r
     * TODO deprecate in 3.3\r
     */\r
    unwrapInjectedRef?: boolean;\r
}\r
\r
export declare interface AppContext {\r
    app: App;\r
    config: AppConfig;\r
    mixins: ComponentOptions[];\r
    components: Record<string, Component>;\r
    directives: Record<string, Directive>;\r
    provides: Record<string | symbol, any>;\r
    /* Excluded from this release type: optionsCache */\r
    /* Excluded from this release type: propsCache */\r
    /* Excluded from this release type: emitsCache */\r
    /* Excluded from this release type: reload */\r
    /* Excluded from this release type: filters */\r
}\r
\r
declare interface AppRecord {\r
    id: number;\r
    app: App;\r
    version: string;\r
    types: Record<string, string | Symbol>;\r
}\r
\r
export declare type AsyncComponentLoader<T = any> = () => Promise<AsyncComponentResolveResult<T>>;\r
\r
export declare interface AsyncComponentOptions<T = any> {\r
    loader: AsyncComponentLoader<T>;\r
    loadingComponent?: Component;\r
    errorComponent?: Component;\r
    delay?: number;\r
    timeout?: number;\r
    suspensible?: boolean;\r
    onError?: (error: Error, retry: () => void, fail: () => void, attempts: number) => any;\r
}\r
\r
declare type AsyncComponentResolveResult<T = Component> = T | {\r
    default: T;\r
};\r
\r
export declare const BaseTransition: new () => {\r
    $props: BaseTransitionProps<any>;\r
};\r
\r
export declare interface BaseTransitionProps<HostElement = RendererElement> {\r
    mode?: 'in-out' | 'out-in' | 'default';\r
    appear?: boolean;\r
    persisted?: boolean;\r
    onBeforeEnter?: Hook<(el: HostElement) => void>;\r
    onEnter?: Hook<(el: HostElement, done: () => void) => void>;\r
    onAfterEnter?: Hook<(el: HostElement) => void>;\r
    onEnterCancelled?: Hook<(el: HostElement) => void>;\r
    onBeforeLeave?: Hook<(el: HostElement) => void>;\r
    onLeave?: Hook<(el: HostElement, done: () => void) => void>;\r
    onAfterLeave?: Hook<(el: HostElement) => void>;\r
    onLeaveCancelled?: Hook<(el: HostElement) => void>;\r
    onBeforeAppear?: Hook<(el: HostElement) => void>;\r
    onAppear?: Hook<(el: HostElement, done: () => void) => void>;\r
    onAfterAppear?: Hook<(el: HostElement) => void>;\r
    onAppearCancelled?: Hook<(el: HostElement) => void>;\r
}\r
\r
declare const enum BooleanFlags {\r
    shouldCast = 0,\r
    shouldCastTrue = 1\r
}\r
\r
export declare function callWithAsyncErrorHandling(fn: Function | Function[], instance: ComponentInternalInstance | null, type: ErrorTypes, args?: unknown[]): any[];\r
\r
export declare function callWithErrorHandling(fn: Function, instance: ComponentInternalInstance | null, type: ErrorTypes, args?: unknown[]): any;\r
\r
export { camelize }\r
\r
export { capitalize }\r
\r
/**\r
 * Use this for features with the same syntax but with mutually exclusive\r
 * behavior in 2 vs 3. Only warn if compat is enabled.\r
 * e.g. render function\r
 */\r
declare function checkCompatEnabled(key: DeprecationTypes, instance: ComponentInternalInstance | null, ...args: any[]): boolean;\r
\r
declare interface ClassComponent {\r
    new (...args: any[]): ComponentPublicInstance<any, any, any, any, any>;\r
    __vccOpts: ComponentOptions;\r
}\r
\r
export declare function cloneVNode<T, U>(vnode: VNode<T, U>, extraProps?: (Data & VNodeProps) | null, mergeRef?: boolean): VNode<T, U>;\r
\r
declare const Comment_2: unique symbol;\r
export { Comment_2 as Comment }\r
\r
declare type CompatConfig = Partial<Record<DeprecationTypes, boolean | 'suppress-warning'>> & {\r
    MODE?: 2 | 3 | ((comp: Component | null) => 2 | 3);\r
};\r
\r
/* Excluded from this release type: compatUtils */\r
\r
/**\r
 * @deprecated the default \`Vue\` export has been removed in Vue 3. The type for\r
 * the default export is provided only for migration purposes. Please use\r
 * named imports instead - e.g. \`import { createApp } from 'vue'\`.\r
 */\r
export declare type CompatVue = Pick<App, 'version' | 'component' | 'directive'> & {\r
    configureCompat: typeof configureCompat;\r
    new (options?: ComponentOptions): LegacyPublicInstance;\r
    version: string;\r
    config: AppConfig & LegacyConfig;\r
    nextTick: typeof nextTick;\r
    use(plugin: Plugin_2, ...options: any[]): CompatVue;\r
    mixin(mixin: ComponentOptions): CompatVue;\r
    component(name: string): Component | undefined;\r
    component(name: string, component: Component): CompatVue;\r
    directive(name: string): Directive | undefined;\r
    directive(name: string, directive: Directive): CompatVue;\r
    compile(template: string): RenderFunction;\r
    /**\r
     * @deprecated Vue 3 no longer supports extending constructors.\r
     */\r
    extend: (options?: ComponentOptions) => CompatVue;\r
    /**\r
     * @deprecated Vue 3 no longer needs set() for adding new properties.\r
     */\r
    set(target: any, key: string | number | symbol, value: any): void;\r
    /**\r
     * @deprecated Vue 3 no longer needs delete() for property deletions.\r
     */\r
    delete(target: any, key: string | number | symbol): void;\r
    /**\r
     * @deprecated use \`reactive\` instead.\r
     */\r
    observable: typeof reactive;\r
    /**\r
     * @deprecated filters have been removed from Vue 3.\r
     */\r
    filter(name: string, arg?: any): null;\r
    /* Excluded from this release type: cid */\r
    /* Excluded from this release type: options */\r
    /* Excluded from this release type: util */\r
    /* Excluded from this release type: super */\r
};\r
\r
declare interface CompiledSlotDescriptor {\r
    name: string;\r
    fn: Slot;\r
}\r
\r
/**\r
 * A type used in public APIs where a component type is expected.\r
 * The constructor type is an artificial type returned by defineComponent().\r
 */\r
export declare type Component<Props = any, RawBindings = any, D = any, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions> = ConcreteComponent<Props, RawBindings, D, C, M> | ComponentPublicInstanceConstructor<Props>;\r
\r
/**\r
 * Interface for declaring custom options.\r
 *\r
 * @example\r
 * \`\`\`ts\r
 * declare module '@vue/runtime-core' {\r
 *   interface ComponentCustomOptions {\r
 *     beforeRouteUpdate?(\r
 *       to: Route,\r
 *       from: Route,\r
 *       next: () => void\r
 *     ): void\r
 *   }\r
 * }\r
 * \`\`\`\r
 */\r
export declare interface ComponentCustomOptions {\r
}\r
\r
/**\r
 * Custom properties added to component instances in any way and can be accessed through \`this\`\r
 *\r
 * @example\r
 * Here is an example of adding a property \`$router\` to every component instance:\r
 * \`\`\`ts\r
 * import { createApp } from 'vue'\r
 * import { Router, createRouter } from 'vue-router'\r
 *\r
 * declare module '@vue/runtime-core' {\r
 *   interface ComponentCustomProperties {\r
 *     $router: Router\r
 *   }\r
 * }\r
 *\r
 * // effectively adding the router to every component instance\r
 * const app = createApp({})\r
 * const router = createRouter()\r
 * app.config.globalProperties.$router = router\r
 *\r
 * const vm = app.mount('#app')\r
 * // we can access the router from the instance\r
 * vm.$router.push('/')\r
 * \`\`\`\r
 */\r
export declare interface ComponentCustomProperties {\r
}\r
\r
/**\r
 * For extending allowed non-declared props on components in TSX\r
 */\r
export declare interface ComponentCustomProps {\r
}\r
\r
declare type ComponentInjectOptions = string[] | ObjectInjectOptions;\r
\r
/**\r
 * We expose a subset of properties on the internal instance as they are\r
 * useful for advanced external libraries and tools.\r
 */\r
export declare interface ComponentInternalInstance {\r
    uid: number;\r
    type: ConcreteComponent;\r
    parent: ComponentInternalInstance | null;\r
    root: ComponentInternalInstance;\r
    appContext: AppContext;\r
    /**\r
     * Vnode representing this component in its parent's vdom tree\r
     */\r
    vnode: VNode;\r
    /* Excluded from this release type: next */\r
    /**\r
     * Root vnode of this component's own vdom tree\r
     */\r
    subTree: VNode;\r
    /**\r
     * Render effect instance\r
     */\r
    effect: ReactiveEffect;\r
    /**\r
     * Bound effect runner to be passed to schedulers\r
     */\r
    update: SchedulerJob;\r
    /* Excluded from this release type: render */\r
    /* Excluded from this release type: ssrRender */\r
    /* Excluded from this release type: provides */\r
    /* Excluded from this release type: scope */\r
    /* Excluded from this release type: accessCache */\r
    /* Excluded from this release type: renderCache */\r
    /* Excluded from this release type: components */\r
    /* Excluded from this release type: directives */\r
    /* Excluded from this release type: filters */\r
    /* Excluded from this release type: propsOptions */\r
    /* Excluded from this release type: emitsOptions */\r
    /* Excluded from this release type: inheritAttrs */\r
    /**\r
     * is custom element?\r
     */\r
    isCE?: boolean;\r
    /**\r
     * custom element specific HMR method\r
     */\r
    ceReload?: (newStyles?: string[]) => void;\r
    proxy: ComponentPublicInstance | null;\r
    exposed: Record<string, any> | null;\r
    exposeProxy: Record<string, any> | null;\r
    /* Excluded from this release type: withProxy */\r
    /* Excluded from this release type: ctx */\r
    data: Data;\r
    props: Data;\r
    attrs: Data;\r
    slots: InternalSlots;\r
    refs: Data;\r
    emit: EmitFn;\r
    /* Excluded from this release type: emitted */\r
    /* Excluded from this release type: propsDefaults */\r
    /* Excluded from this release type: setupState */\r
    /* Excluded from this release type: devtoolsRawSetupState */\r
    /* Excluded from this release type: setupContext */\r
    /* Excluded from this release type: suspense */\r
    /* Excluded from this release type: suspenseId */\r
    /* Excluded from this release type: asyncDep */\r
    /* Excluded from this release type: asyncResolved */\r
    isMounted: boolean;\r
    isUnmounted: boolean;\r
    isDeactivated: boolean;\r
    /* Excluded from this release type: bc */\r
    /* Excluded from this release type: c */\r
    /* Excluded from this release type: bm */\r
    /* Excluded from this release type: m */\r
    /* Excluded from this release type: bu */\r
    /* Excluded from this release type: u */\r
    /* Excluded from this release type: bum */\r
    /* Excluded from this release type: um */\r
    /* Excluded from this release type: rtc */\r
    /* Excluded from this release type: rtg */\r
    /* Excluded from this release type: a */\r
    /* Excluded from this release type: da */\r
    /* Excluded from this release type: ec */\r
    /* Excluded from this release type: sp */\r
    /**\r
     * For caching bound $forceUpdate on public proxy access\r
     */\r
    f?: () => void;\r
    /**\r
     * For caching bound $nextTick on public proxy access\r
     */\r
    n?: () => Promise<void>;\r
}\r
\r
declare interface ComponentInternalOptions {\r
    /* Excluded from this release type: __scopeId */\r
    /* Excluded from this release type: __cssModules */\r
    /* Excluded from this release type: __hmrId */\r
    /**\r
     * Compat build only, for bailing out of certain compatibility behavior\r
     */\r
    __isBuiltIn?: boolean;\r
    /**\r
     * This one should be exposed so that devtools can make use of it\r
     */\r
    __file?: string;\r
    /**\r
     * name inferred from filename\r
     */\r
    __name?: string;\r
}\r
\r
export declare type ComponentObjectPropsOptions<P = Data> = {\r
    [K in keyof P]: Prop<P[K]> | null;\r
};\r
\r
export declare type ComponentOptions<Props = {}, RawBindings = any, D = any, C extends ComputedOptions = any, M extends MethodOptions = any, Mixin extends ComponentOptionsMixin = any, Extends extends ComponentOptionsMixin = any, E extends EmitsOptions = any> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E> & ThisType<CreateComponentPublicInstance<{}, RawBindings, D, C, M, Mixin, Extends, E, Readonly<Props>>>;\r
\r
export declare interface ComponentOptionsBase<Props, RawBindings, D, C extends ComputedOptions, M extends MethodOptions, Mixin extends ComponentOptionsMixin, Extends extends ComponentOptionsMixin, E extends EmitsOptions, EE extends string = string, Defaults = {}> extends LegacyOptions<Props, D, C, M, Mixin, Extends>, ComponentInternalOptions, ComponentCustomOptions {\r
    setup?: (this: void, props: Readonly<LooseRequired<Props & UnionToIntersection<ExtractOptionProp<Mixin>> & UnionToIntersection<ExtractOptionProp<Extends>>>>, ctx: SetupContext<E>) => Promise<RawBindings> | RawBindings | RenderFunction | void;\r
    name?: string;\r
    template?: string | object;\r
    render?: Function;\r
    components?: Record<string, Component>;\r
    directives?: Record<string, Directive>;\r
    inheritAttrs?: boolean;\r
    emits?: (E | EE[]) & ThisType<void>;\r
    expose?: string[];\r
    serverPrefetch?(): Promise<any>;\r
    compilerOptions?: RuntimeCompilerOptions;\r
    /* Excluded from this release type: ssrRender */\r
    /* Excluded from this release type: __ssrInlineRender */\r
    /* Excluded from this release type: __asyncLoader */\r
    /* Excluded from this release type: __asyncResolved */\r
    call?: (this: unknown, ...args: unknown[]) => never;\r
    __isFragment?: never;\r
    __isTeleport?: never;\r
    __isSuspense?: never;\r
    __defaults?: Defaults;\r
}\r
\r
export declare type ComponentOptionsMixin = ComponentOptionsBase<any, any, any, any, any, any, any, any, any, any>;\r
\r
export declare type ComponentOptionsWithArrayProps<PropNames extends string = string, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string, Props = Readonly<{\r
    [key in PropNames]?: any;\r
}> & EmitsToProps<E>> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, {}> & {\r
    props: PropNames[];\r
} & ThisType<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E>>;\r
\r
export declare type ComponentOptionsWithObjectProps<PropsOptions = ComponentObjectPropsOptions, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string, Props = Readonly<ExtractPropTypes<PropsOptions>> & EmitsToProps<E>, Defaults = ExtractDefaultPropTypes<PropsOptions>> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, Defaults> & {\r
    props: PropsOptions & ThisType<void>;\r
} & ThisType<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E, Props, Defaults, false>>;\r
\r
export declare type ComponentOptionsWithoutProps<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string, PE = Props & EmitsToProps<E>> = ComponentOptionsBase<PE, RawBindings, D, C, M, Mixin, Extends, E, EE, {}> & {\r
    props?: undefined;\r
} & ThisType<CreateComponentPublicInstance<PE, RawBindings, D, C, M, Mixin, Extends, E>>;\r
\r
export declare type ComponentPropsOptions<P = Data> = ComponentObjectPropsOptions<P> | string[];\r
\r
export declare type ComponentProvideOptions = ObjectProvideOptions | Function;\r
\r
export declare type ComponentPublicInstance<P = {}, // props type extracted from props option\r
B = {}, // raw bindings returned from setup()\r
D = {}, // return from data()\r
C extends ComputedOptions = {}, M extends MethodOptions = {}, E extends EmitsOptions = {}, PublicProps = P, Defaults = {}, MakeDefaultsOptional extends boolean = false, Options = ComponentOptionsBase<any, any, any, any, any, any, any, any, any>> = {\r
    $: ComponentInternalInstance;\r
    $data: D;\r
    $props: MakeDefaultsOptional extends true ? Partial<Defaults> & Omit<P & PublicProps, keyof Defaults> : P & PublicProps;\r
    $attrs: Data;\r
    $refs: Data;\r
    $slots: Slots;\r
    $root: ComponentPublicInstance | null;\r
    $parent: ComponentPublicInstance | null;\r
    $emit: EmitFn<E>;\r
    $el: any;\r
    $options: Options & MergedComponentOptionsOverride;\r
    $forceUpdate: () => void;\r
    $nextTick: typeof nextTick;\r
    $watch(source: string | Function, cb: Function, options?: WatchOptions): WatchStopHandle;\r
} & P & ShallowUnwrapRef<B> & UnwrapNestedRefs<D> & ExtractComputedReturns<C> & M & ComponentCustomProperties;\r
\r
declare type ComponentPublicInstanceConstructor<T extends ComponentPublicInstance<Props, RawBindings, D, C, M> = ComponentPublicInstance<any>, Props = any, RawBindings = any, D = any, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions> = {\r
    __isFragment?: never;\r
    __isTeleport?: never;\r
    __isSuspense?: never;\r
    new (...args: any[]): T;\r
};\r
\r
declare type ComponentWatchOptionItem = WatchOptionItem | WatchOptionItem[];\r
\r
declare type ComponentWatchOptions = Record<string, ComponentWatchOptionItem>;\r
\r
export declare const computed: typeof computed_2;\r
\r
export { ComputedGetter }\r
\r
export declare type ComputedOptions = Record<string, ComputedGetter<any> | WritableComputedOptions<any>>;\r
\r
export { ComputedRef }\r
\r
export { ComputedSetter }\r
\r
/**\r
 * Concrete component type matches its actual value: it's either an options\r
 * object, or a function. Use this where the code expects to work with actual\r
 * values, e.g. checking if its a function or not. This is mostly for internal\r
 * implementation code.\r
 */\r
export declare type ConcreteComponent<Props = {}, RawBindings = any, D = any, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions> = ComponentOptions<Props, RawBindings, D, C, M> | FunctionalComponent<Props, any>;\r
\r
declare function configureCompat(config: CompatConfig): void;\r
\r
declare interface Constructor<P = any> {\r
    __isFragment?: never;\r
    __isTeleport?: never;\r
    __isSuspense?: never;\r
    new (...args: any[]): {\r
        $props: P;\r
    };\r
}\r
\r
export declare type CreateAppFunction<HostElement> = (rootComponent: Component, rootProps?: Data | null) => App<HostElement>;\r
\r
/**\r
 * Create a block root vnode. Takes the same exact arguments as \`createVNode\`.\r
 * A block root keeps track of dynamic nodes within the block in the\r
 * \`dynamicChildren\` array.\r
 *\r
 * @private\r
 */\r
export declare function createBlock(type: VNodeTypes | ClassComponent, props?: Record<string, any> | null, children?: any, patchFlag?: number, dynamicProps?: string[]): VNode;\r
\r
/**\r
 * @private\r
 */\r
export declare function createCommentVNode(text?: string, asBlock?: boolean): VNode;\r
\r
declare function createCompatVue(createApp: CreateAppFunction<Element>, createSingletonApp: CreateAppFunction<Element>): CompatVue;\r
\r
declare function createComponentInstance(vnode: VNode, parent: ComponentInternalInstance | null, suspense: SuspenseBoundary | null): ComponentInternalInstance;\r
\r
export declare type CreateComponentPublicInstance<P = {}, B = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = {}, PublicProps = P, Defaults = {}, MakeDefaultsOptional extends boolean = false, PublicMixin = IntersectionMixin<Mixin> & IntersectionMixin<Extends>, PublicP = UnwrapMixinsType<PublicMixin, 'P'> & EnsureNonVoid<P>, PublicB = UnwrapMixinsType<PublicMixin, 'B'> & EnsureNonVoid<B>, PublicD = UnwrapMixinsType<PublicMixin, 'D'> & EnsureNonVoid<D>, PublicC extends ComputedOptions = UnwrapMixinsType<PublicMixin, 'C'> & EnsureNonVoid<C>, PublicM extends MethodOptions = UnwrapMixinsType<PublicMixin, 'M'> & EnsureNonVoid<M>, PublicDefaults = UnwrapMixinsType<PublicMixin, 'Defaults'> & EnsureNonVoid<Defaults>> = ComponentPublicInstance<PublicP, PublicB, PublicD, PublicC, PublicM, E, PublicProps, PublicDefaults, MakeDefaultsOptional, ComponentOptionsBase<P, B, D, C, M, Mixin, Extends, E, string, Defaults>>;\r
\r
/**\r
 * @private\r
 */\r
export declare function createElementBlock(type: string | typeof Fragment, props?: Record<string, any> | null, children?: any, patchFlag?: number, dynamicProps?: string[], shapeFlag?: number): VNode<RendererNode, RendererElement, {\r
    [key: string]: any;\r
}>;\r
\r
export declare function createElementVNode(type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT, props?: (Data & VNodeProps) | null, children?: unknown, patchFlag?: number, dynamicProps?: string[] | null, shapeFlag?: number | ShapeFlags, isBlockNode?: boolean, needFullChildrenNormalization?: boolean): VNode<RendererNode, RendererElement, {\r
    [key: string]: any;\r
}>;\r
\r
export declare function createHydrationRenderer(options: RendererOptions<Node, Element>): HydrationRenderer;\r
\r
/* Excluded from this release type: createPropsRestProxy */\r
\r
declare function createRecord(id: string, initialDef: HMRComponent): boolean;\r
\r
/**\r
 * The createRenderer function accepts two generic arguments:\r
 * HostNode and HostElement, corresponding to Node and Element types in the\r
 * host environment. For example, for runtime-dom, HostNode would be the DOM\r
 * \`Node\` interface and HostElement would be the DOM \`Element\` interface.\r
 *\r
 * Custom renderers can pass in the platform specific types like this:\r
 *\r
 * \`\`\` js\r
 * const { render, createApp } = createRenderer<Node, Element>({\r
 *   patchProp,\r
 *   ...nodeOps\r
 * })\r
 * \`\`\`\r
 */\r
export declare function createRenderer<HostNode = RendererNode, HostElement = RendererElement>(options: RendererOptions<HostNode, HostElement>): Renderer<HostElement>;\r
\r
/**\r
 * Compiler runtime helper for creating dynamic slots object\r
 * @private\r
 */\r
export declare function createSlots(slots: Record<string, Slot>, dynamicSlots: (CompiledSlotDescriptor | CompiledSlotDescriptor[] | undefined)[]): Record<string, Slot>;\r
\r
/**\r
 * @private\r
 */\r
export declare function createStaticVNode(content: string, numberOfNodes: number): VNode;\r
\r
declare function createSuspenseBoundary(vnode: VNode, parent: SuspenseBoundary | null, parentComponent: ComponentInternalInstance | null, container: RendererElement, hiddenContainer: RendererElement, anchor: RendererNode | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, rendererInternals: RendererInternals, isHydrating?: boolean): SuspenseBoundary;\r
\r
/**\r
 * @private\r
 */\r
export declare function createTextVNode(text?: string, flag?: number): VNode;\r
\r
export declare const createVNode: typeof _createVNode;\r
\r
declare function _createVNode(type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT, props?: (Data & VNodeProps) | null, children?: unknown, patchFlag?: number, dynamicProps?: string[] | null, isBlockNode?: boolean): VNode;\r
\r
export { customRef }\r
\r
export { CustomRefFactory }\r
\r
declare type Data = Record<string, unknown>;\r
\r
export { DebuggerEvent }\r
\r
export { DebuggerEventExtraInfo }\r
\r
declare type DebuggerHook = (e: DebuggerEvent) => void;\r
\r
export { DebuggerOptions }\r
\r
export { DeepReadonly }\r
\r
declare type DefaultFactory<T> = (props: Data) => T | null | undefined;\r
\r
declare type DefaultKeys<T> = {\r
    [K in keyof T]: T[K] extends {\r
        default: any;\r
    } | BooleanConstructor | {\r
        type: BooleanConstructor;\r
    } ? T[K] extends {\r
        type: BooleanConstructor;\r
        required: true;\r
    } ? never : K : never;\r
}[keyof T];\r
\r
export declare function defineAsyncComponent<T extends Component = {\r
    new (): ComponentPublicInstance;\r
}>(source: AsyncComponentLoader<T> | AsyncComponentOptions<T>): T;\r
\r
export declare type DefineComponent<PropsOrPropOptions = {}, RawBindings = {}, D = {}, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = {}, EE extends string = string, PP = PublicProps, Props = Readonly<PropsOrPropOptions extends ComponentPropsOptions ? ExtractPropTypes<PropsOrPropOptions> : PropsOrPropOptions> & ({} extends E ? {} : EmitsToProps<E>), Defaults = ExtractDefaultPropTypes<PropsOrPropOptions>> = ComponentPublicInstanceConstructor<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E, PP & Props, Defaults, true> & Props> & ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, Defaults> & PP;\r
\r
export declare function defineComponent<Props, RawBindings = object>(setup: (props: Readonly<Props>, ctx: SetupContext) => RawBindings | RenderFunction): DefineComponent<Props, RawBindings>;\r
\r
export declare function defineComponent<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string>(options: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>): DefineComponent<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>;\r
\r
export declare function defineComponent<PropNames extends string, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M, Mixin, Extends, E, EE>): DefineComponent<Readonly<{\r
    [key in PropNames]?: any;\r
}>, RawBindings, D, C, M, Mixin, Extends, E, EE>;\r
\r
export declare function defineComponent<PropsOptions extends Readonly<ComponentPropsOptions>, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>): DefineComponent<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for declaring a component's emitted\r
 * events. The expected argument is the same as the component \`emits\` option.\r
 *\r
 * Example runtime declaration:\r
 * \`\`\`js\r
 * const emit = defineEmits(['change', 'update'])\r
 * \`\`\`\r
 *\r
 * Example type-based declaration:\r
 * \`\`\`ts\r
 * const emit = defineEmits<{\r
 *   (event: 'change'): void\r
 *   (event: 'update', id: number): void\r
 * }>()\r
 *\r
 * emit('change')\r
 * emit('update', 1)\r
 * \`\`\`\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the\r
 * output and should **not** be actually called at runtime.\r
 */\r
export declare function defineEmits<EE extends string = string>(emitOptions: EE[]): EmitFn<EE[]>;\r
\r
export declare function defineEmits<E extends EmitsOptions = EmitsOptions>(emitOptions: E): EmitFn<E>;\r
\r
export declare function defineEmits<TypeEmit>(): TypeEmit;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for declaring a component's exposed\r
 * instance properties when it is accessed by a parent component via template\r
 * refs.\r
 *\r
 * \`<script setup>\` components are closed by default - i.e. variables inside\r
 * the \`<script setup>\` scope is not exposed to parent unless explicitly exposed\r
 * via \`defineExpose\`.\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the\r
 * output and should **not** be actually called at runtime.\r
 */\r
export declare function defineExpose<Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed): void;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for declaring component props. The\r
 * expected argument is the same as the component \`props\` option.\r
 *\r
 * Example runtime declaration:\r
 * \`\`\`js\r
 * // using Array syntax\r
 * const props = defineProps(['foo', 'bar'])\r
 * // using Object syntax\r
 * const props = defineProps({\r
 *   foo: String,\r
 *   bar: {\r
 *     type: Number,\r
 *     required: true\r
 *   }\r
 * })\r
 * \`\`\`\r
 *\r
 * Equivalent type-based declaration:\r
 * \`\`\`ts\r
 * // will be compiled into equivalent runtime declarations\r
 * const props = defineProps<{\r
 *   foo?: string\r
 *   bar: number\r
 * }>()\r
 * \`\`\`\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the\r
 * output and should **not** be actually called at runtime.\r
 */\r
export declare function defineProps<PropNames extends string = string>(props: PropNames[]): Readonly<{\r
    [key in PropNames]?: any;\r
}>;\r
\r
export declare function defineProps<PP extends ComponentObjectPropsOptions = ComponentObjectPropsOptions>(props: PP): Readonly<ExtractPropTypes<PP>>;\r
\r
export declare function defineProps<TypeProps>(): Readonly<TypeProps>;\r
\r
export declare const enum DeprecationTypes {\r
    GLOBAL_MOUNT = "GLOBAL_MOUNT",\r
    GLOBAL_MOUNT_CONTAINER = "GLOBAL_MOUNT_CONTAINER",\r
    GLOBAL_EXTEND = "GLOBAL_EXTEND",\r
    GLOBAL_PROTOTYPE = "GLOBAL_PROTOTYPE",\r
    GLOBAL_SET = "GLOBAL_SET",\r
    GLOBAL_DELETE = "GLOBAL_DELETE",\r
    GLOBAL_OBSERVABLE = "GLOBAL_OBSERVABLE",\r
    GLOBAL_PRIVATE_UTIL = "GLOBAL_PRIVATE_UTIL",\r
    CONFIG_SILENT = "CONFIG_SILENT",\r
    CONFIG_DEVTOOLS = "CONFIG_DEVTOOLS",\r
    CONFIG_KEY_CODES = "CONFIG_KEY_CODES",\r
    CONFIG_PRODUCTION_TIP = "CONFIG_PRODUCTION_TIP",\r
    CONFIG_IGNORED_ELEMENTS = "CONFIG_IGNORED_ELEMENTS",\r
    CONFIG_WHITESPACE = "CONFIG_WHITESPACE",\r
    CONFIG_OPTION_MERGE_STRATS = "CONFIG_OPTION_MERGE_STRATS",\r
    INSTANCE_SET = "INSTANCE_SET",\r
    INSTANCE_DELETE = "INSTANCE_DELETE",\r
    INSTANCE_DESTROY = "INSTANCE_DESTROY",\r
    INSTANCE_EVENT_EMITTER = "INSTANCE_EVENT_EMITTER",\r
    INSTANCE_EVENT_HOOKS = "INSTANCE_EVENT_HOOKS",\r
    INSTANCE_CHILDREN = "INSTANCE_CHILDREN",\r
    INSTANCE_LISTENERS = "INSTANCE_LISTENERS",\r
    INSTANCE_SCOPED_SLOTS = "INSTANCE_SCOPED_SLOTS",\r
    INSTANCE_ATTRS_CLASS_STYLE = "INSTANCE_ATTRS_CLASS_STYLE",\r
    OPTIONS_DATA_FN = "OPTIONS_DATA_FN",\r
    OPTIONS_DATA_MERGE = "OPTIONS_DATA_MERGE",\r
    OPTIONS_BEFORE_DESTROY = "OPTIONS_BEFORE_DESTROY",\r
    OPTIONS_DESTROYED = "OPTIONS_DESTROYED",\r
    WATCH_ARRAY = "WATCH_ARRAY",\r
    PROPS_DEFAULT_THIS = "PROPS_DEFAULT_THIS",\r
    V_ON_KEYCODE_MODIFIER = "V_ON_KEYCODE_MODIFIER",\r
    CUSTOM_DIR = "CUSTOM_DIR",\r
    ATTR_FALSE_VALUE = "ATTR_FALSE_VALUE",\r
    ATTR_ENUMERATED_COERCION = "ATTR_ENUMERATED_COERCION",\r
    TRANSITION_CLASSES = "TRANSITION_CLASSES",\r
    TRANSITION_GROUP_ROOT = "TRANSITION_GROUP_ROOT",\r
    COMPONENT_ASYNC = "COMPONENT_ASYNC",\r
    COMPONENT_FUNCTIONAL = "COMPONENT_FUNCTIONAL",\r
    COMPONENT_V_MODEL = "COMPONENT_V_MODEL",\r
    RENDER_FUNCTION = "RENDER_FUNCTION",\r
    FILTERS = "FILTERS",\r
    PRIVATE_APIS = "PRIVATE_APIS"\r
}\r
\r
export declare let devtools: DevtoolsHook;\r
\r
declare interface DevtoolsHook {\r
    enabled?: boolean;\r
    emit: (event: string, ...payload: any[]) => void;\r
    on: (event: string, handler: Function) => void;\r
    once: (event: string, handler: Function) => void;\r
    off: (event: string, handler: Function) => void;\r
    appRecords: AppRecord[];\r
}\r
\r
export declare type Directive<T = any, V = any> = ObjectDirective<T, V> | FunctionDirective<T, V>;\r
\r
export declare type DirectiveArguments = Array<[Directive] | [Directive, any] | [Directive, any, string] | [Directive, any, string, DirectiveModifiers]>;\r
\r
export declare interface DirectiveBinding<V = any> {\r
    instance: ComponentPublicInstance | null;\r
    value: V;\r
    oldValue: V | null;\r
    arg?: string;\r
    modifiers: DirectiveModifiers;\r
    dir: ObjectDirective<any, V>;\r
}\r
\r
export declare type DirectiveHook<T = any, Prev = VNode<any, T> | null, V = any> = (el: T, binding: DirectiveBinding<V>, vnode: VNode<any, T>, prevVNode: Prev) => void;\r
\r
declare type DirectiveModifiers = Record<string, boolean>;\r
\r
export { effect }\r
\r
export { EffectScheduler }\r
\r
export { EffectScope }\r
\r
export { effectScope }\r
\r
declare type EmitFn<Options = ObjectEmitsOptions, Event extends keyof Options = keyof Options> = Options extends Array<infer V> ? (event: V, ...args: any[]) => void : {} extends Options ? (event: string, ...args: any[]) => void : UnionToIntersection<{\r
    [key in Event]: Options[key] extends (...args: infer Args) => any ? (event: key, ...args: Args) => void : (event: key, ...args: any[]) => void;\r
}[Event]>;\r
\r
export declare type EmitsOptions = ObjectEmitsOptions | string[];\r
\r
declare type EmitsToProps<T extends EmitsOptions> = T extends string[] ? {\r
    [K in string & \`on\${Capitalize<T[number]>}\`]?: (...args: any[]) => any;\r
} : T extends ObjectEmitsOptions ? {\r
    [K in string & \`on\${Capitalize<string & keyof T>}\`]?: K extends \`on\${infer C}\` ? T[Uncapitalize<C>] extends null ? (...args: any[]) => any : (...args: T[Uncapitalize<C>] extends (...args: infer P) => any ? P : never) => any : never;\r
} : {};\r
\r
declare type EnsureNonVoid<T> = T extends void ? {} : T;\r
\r
declare type ErrorCapturedHook<TError = unknown> = (err: TError, instance: ComponentPublicInstance | null, info: string) => boolean | void;\r
\r
export declare const enum ErrorCodes {\r
    SETUP_FUNCTION = 0,\r
    RENDER_FUNCTION = 1,\r
    WATCH_GETTER = 2,\r
    WATCH_CALLBACK = 3,\r
    WATCH_CLEANUP = 4,\r
    NATIVE_EVENT_HANDLER = 5,\r
    COMPONENT_EVENT_HANDLER = 6,\r
    VNODE_HOOK = 7,\r
    DIRECTIVE_HOOK = 8,\r
    TRANSITION_HOOK = 9,\r
    APP_ERROR_HANDLER = 10,\r
    APP_WARN_HANDLER = 11,\r
    FUNCTION_REF = 12,\r
    ASYNC_COMPONENT_LOADER = 13,\r
    SCHEDULER = 14\r
}\r
\r
declare type ErrorTypes = LifecycleHooks | ErrorCodes;\r
\r
declare type ExtractComputedReturns<T extends any> = {\r
    [key in keyof T]: T[key] extends {\r
        get: (...args: any[]) => infer TReturn;\r
    } ? TReturn : T[key] extends (...args: any[]) => infer TReturn ? TReturn : never;\r
};\r
\r
export declare type ExtractDefaultPropTypes<O> = O extends object ? {\r
    [K in keyof Pick<O, DefaultKeys<O>>]: InferPropType<O[K]>;\r
} : {};\r
\r
declare type ExtractMixin<T> = {\r
    Mixin: MixinToOptionTypes<T>;\r
}[T extends ComponentOptionsMixin ? 'Mixin' : never];\r
\r
declare type ExtractOptionProp<T> = T extends ComponentOptionsBase<infer P, // Props\r
any, // RawBindings\r
any, // D\r
any, // C\r
any, // M\r
any, // Mixin\r
any, // Extends\r
any> ? unknown extends P ? {} : P : {};\r
\r
export declare type ExtractPropTypes<O> = {\r
    [K in keyof Pick<O, RequiredKeys<O>>]: InferPropType<O[K]>;\r
} & {\r
    [K in keyof Pick<O, OptionalKeys<O>>]?: InferPropType<O[K]>;\r
};\r
\r
export declare const Fragment: {\r
    new (): {\r
        $props: VNodeProps;\r
    };\r
    __isFragment: true;\r
};\r
\r
export declare interface FunctionalComponent<P = {}, E extends EmitsOptions = {}> extends ComponentInternalOptions {\r
    (props: P, ctx: Omit<SetupContext<E>, 'expose'>): any;\r
    props?: ComponentPropsOptions<P>;\r
    emits?: E | (keyof E)[];\r
    inheritAttrs?: boolean;\r
    displayName?: string;\r
    compatConfig?: CompatConfig;\r
}\r
\r
export declare type FunctionDirective<T = any, V = any> = DirectiveHook<T, any, V>;\r
\r
export declare const getCurrentInstance: () => ComponentInternalInstance | null;\r
\r
export { getCurrentScope }\r
\r
export declare function getTransitionRawChildren(children: VNode[], keepComment?: boolean, parentKey?: VNode['key']): VNode[];\r
\r
export declare function guardReactiveProps(props: (Data & VNodeProps) | null): (Data & VNodeProps) | null;\r
\r
export declare function h(type: string, children?: RawChildren): VNode;\r
\r
export declare function h(type: string, props?: RawProps | null, children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: typeof Text_2 | typeof Comment_2, children?: string | number | boolean): VNode;\r
\r
export declare function h(type: typeof Text_2 | typeof Comment_2, props?: null, children?: string | number | boolean): VNode;\r
\r
export declare function h(type: typeof Fragment, children?: VNodeArrayChildren): VNode;\r
\r
export declare function h(type: typeof Fragment, props?: RawProps | null, children?: VNodeArrayChildren): VNode;\r
\r
export declare function h(type: typeof Teleport, props: RawProps & TeleportProps, children: RawChildren): VNode;\r
\r
export declare function h(type: typeof Suspense, children?: RawChildren): VNode;\r
\r
export declare function h(type: typeof Suspense, props?: (RawProps & SuspenseProps) | null, children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h<P, E extends EmitsOptions = {}>(type: FunctionalComponent<P, E>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: Component, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: ConcreteComponent | string, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: ConcreteComponent<P> | string, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren): VNode;\r
\r
export declare function h(type: Component, props: null, children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h<P>(type: ComponentOptions<P>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: Constructor, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: Constructor<P>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: DefineComponent, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: DefineComponent<P>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function handleError(err: unknown, instance: ComponentInternalInstance | null, type: ErrorTypes, throwInDev?: boolean): void;\r
\r
declare type HMRComponent = ComponentOptions | ClassComponent;\r
\r
export declare interface HMRRuntime {\r
    createRecord: typeof createRecord;\r
    rerender: typeof rerender;\r
    reload: typeof reload;\r
}\r
\r
declare type Hook<T = () => void> = T | T[];\r
\r
declare function hydrateSuspense(node: Node, vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, rendererInternals: RendererInternals, hydrateNode: (node: Node, vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, slotScopeIds: string[] | null, optimized: boolean) => Node | null): Node | null;\r
\r
declare function hydrateTeleport(node: Node, vnode: TeleportVNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, slotScopeIds: string[] | null, optimized: boolean, { o: { nextSibling, parentNode, querySelector } }: RendererInternals<Node, Element>, hydrateChildren: (node: Node | null, vnode: VNode, container: Element, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, slotScopeIds: string[] | null, optimized: boolean) => Node | null): Node | null;\r
\r
export declare interface HydrationRenderer extends Renderer<Element | ShadowRoot> {\r
    hydrate: RootHydrateFunction;\r
}\r
\r
declare type InferDefault<P, T> = T extends null | number | string | boolean | symbol | Function ? T | ((props: P) => T) : (props: P) => T;\r
\r
declare type InferDefaults<T> = {\r
    [K in keyof T]?: InferDefault<T, NotUndefined<T[K]>>;\r
};\r
\r
declare type InferPropType<T> = [T] extends [null] ? any : [T] extends [{\r
    type: null | true;\r
}] ? any : [T] extends [ObjectConstructor | {\r
    type: ObjectConstructor;\r
}] ? Record<string, any> : [T] extends [BooleanConstructor | {\r
    type: BooleanConstructor;\r
}] ? boolean : [T] extends [DateConstructor | {\r
    type: DateConstructor;\r
}] ? Date : [T] extends [(infer U)[] | {\r
    type: (infer U)[];\r
}] ? U extends DateConstructor ? Date | InferPropType<U> : InferPropType<U> : [T] extends [Prop<infer V, infer D>] ? unknown extends V ? IfAny<V, V, D> : V : T;\r
\r
export declare function initCustomFormatter(): void;\r
\r
export declare function inject<T>(key: InjectionKey<T> | string): T | undefined;\r
\r
export declare function inject<T>(key: InjectionKey<T> | string, defaultValue: T, treatDefaultAsFactory?: false): T;\r
\r
export declare function inject<T>(key: InjectionKey<T> | string, defaultValue: T | (() => T), treatDefaultAsFactory: true): T;\r
\r
export declare interface InjectionKey<T> extends Symbol {\r
}\r
\r
/* Excluded from this release type: InternalRenderFunction */\r
\r
declare type InternalSlots = {\r
    [name: string]: Slot | undefined;\r
};\r
\r
declare type IntersectionMixin<T> = IsDefaultMixinComponent<T> extends true ? OptionTypesType<{}, {}, {}, {}, {}> : UnionToIntersection<ExtractMixin<T>>;\r
\r
declare function isCompatEnabled(key: DeprecationTypes, instance: ComponentInternalInstance | null, enableForBuiltIn?: boolean): boolean;\r
\r
declare type IsDefaultMixinComponent<T> = T extends ComponentOptionsMixin ? ComponentOptionsMixin extends T ? true : false : false;\r
\r
export declare function isMemoSame(cached: VNode, memo: any[]): boolean;\r
\r
export { isProxy }\r
\r
export { isReactive }\r
\r
export { isReadonly }\r
\r
export { isRef }\r
\r
export declare const isRuntimeOnly: () => boolean;\r
\r
export { isShallow }\r
\r
export declare function isVNode(value: any): value is VNode;\r
\r
export declare const KeepAlive: {\r
    new (): {\r
        $props: VNodeProps & KeepAliveProps;\r
    };\r
    __isKeepAlive: true;\r
};\r
\r
export declare interface KeepAliveProps {\r
    include?: MatchPattern;\r
    exclude?: MatchPattern;\r
    max?: number | string;\r
}\r
\r
export declare type LegacyConfig = {\r
    /**\r
     * @deprecated \`config.silent\` option has been removed\r
     */\r
    silent?: boolean;\r
    /**\r
     * @deprecated use false compile-time feature flag instead\r
     * https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags\r
     */\r
    devtools?: boolean;\r
    /**\r
     * @deprecated use \`config.isCustomElement\` instead\r
     * https://v3-migration.vuejs.org/breaking-changes/global-api.html#config-ignoredelements-is-now-config-iscustomelement\r
     */\r
    ignoredElements?: (string | RegExp)[];\r
    /**\r
     * @deprecated\r
     * https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html\r
     */\r
    keyCodes?: Record<string, number | number[]>;\r
    /**\r
     * @deprecated\r
     * https://v3-migration.vuejs.org/breaking-changes/global-api.html#config-productiontip-removed\r
     */\r
    productionTip?: boolean;\r
};\r
\r
declare interface LegacyOptions<Props, D, C extends ComputedOptions, M extends MethodOptions, Mixin extends ComponentOptionsMixin, Extends extends ComponentOptionsMixin> {\r
    compatConfig?: CompatConfig;\r
    [key: string]: any;\r
    data?: (this: CreateComponentPublicInstance<Props, {}, {}, {}, MethodOptions, Mixin, Extends>, vm: CreateComponentPublicInstance<Props, {}, {}, {}, MethodOptions, Mixin, Extends>) => D;\r
    computed?: C;\r
    methods?: M;\r
    watch?: ComponentWatchOptions;\r
    provide?: ComponentProvideOptions;\r
    inject?: ComponentInjectOptions;\r
    filters?: Record<string, Function>;\r
    mixins?: Mixin[];\r
    extends?: Extends;\r
    beforeCreate?(): void;\r
    created?(): void;\r
    beforeMount?(): void;\r
    mounted?(): void;\r
    beforeUpdate?(): void;\r
    updated?(): void;\r
    activated?(): void;\r
    deactivated?(): void;\r
    /** @deprecated use \`beforeUnmount\` instead */\r
    beforeDestroy?(): void;\r
    beforeUnmount?(): void;\r
    /** @deprecated use \`unmounted\` instead */\r
    destroyed?(): void;\r
    unmounted?(): void;\r
    renderTracked?: DebuggerHook;\r
    renderTriggered?: DebuggerHook;\r
    errorCaptured?: ErrorCapturedHook;\r
    /**\r
     * runtime compile only\r
     * @deprecated use \`compilerOptions.delimiters\` instead.\r
     */\r
    delimiters?: [string, string];\r
    /**\r
     * #3468\r
     *\r
     * type-only, used to assist Mixin's type inference,\r
     * typescript will try to simplify the inferred \`Mixin\` type,\r
     * with the \`__differentiator\`, typescript won't be able to combine different mixins,\r
     * because the \`__differentiator\` will be different\r
     */\r
    __differentiator?: keyof D | keyof C | keyof M;\r
}\r
\r
declare type LegacyPublicInstance = ComponentPublicInstance & LegacyPublicProperties;\r
\r
declare interface LegacyPublicProperties {\r
    $set(target: object, key: string, value: any): void;\r
    $delete(target: object, key: string): void;\r
    $mount(el?: string | Element): this;\r
    $destroy(): void;\r
    $scopedSlots: Slots;\r
    $on(event: string | string[], fn: Function): this;\r
    $once(event: string, fn: Function): this;\r
    $off(event?: string | string[], fn?: Function): this;\r
    $children: LegacyPublicProperties[];\r
    $listeners: Record<string, Function | Function[]>;\r
}\r
\r
declare type LifecycleHook<TFn = Function> = TFn[] | null;\r
\r
declare const enum LifecycleHooks {\r
    BEFORE_CREATE = "bc",\r
    CREATED = "c",\r
    BEFORE_MOUNT = "bm",\r
    MOUNTED = "m",\r
    BEFORE_UPDATE = "bu",\r
    UPDATED = "u",\r
    BEFORE_UNMOUNT = "bum",\r
    UNMOUNTED = "um",\r
    DEACTIVATED = "da",\r
    ACTIVATED = "a",\r
    RENDER_TRIGGERED = "rtg",\r
    RENDER_TRACKED = "rtc",\r
    ERROR_CAPTURED = "ec",\r
    SERVER_PREFETCH = "sp"\r
}\r
\r
declare type MapSources<T, Immediate> = {\r
    [K in keyof T]: T[K] extends WatchSource<infer V> ? Immediate extends true ? V | undefined : V : T[K] extends object ? Immediate extends true ? T[K] | undefined : T[K] : never;\r
};\r
\r
export { markRaw }\r
\r
declare type MatchPattern = string | RegExp | (string | RegExp)[];\r
\r
declare type MergedComponentOptions = ComponentOptions & MergedComponentOptionsOverride;\r
\r
declare type MergedComponentOptionsOverride = {\r
    beforeCreate?: MergedHook;\r
    created?: MergedHook;\r
    beforeMount?: MergedHook;\r
    mounted?: MergedHook;\r
    beforeUpdate?: MergedHook;\r
    updated?: MergedHook;\r
    activated?: MergedHook;\r
    deactivated?: MergedHook;\r
    /** @deprecated use \`beforeUnmount\` instead */\r
    beforeDestroy?: MergedHook;\r
    beforeUnmount?: MergedHook;\r
    /** @deprecated use \`unmounted\` instead */\r
    destroyed?: MergedHook;\r
    unmounted?: MergedHook;\r
    renderTracked?: MergedHook<DebuggerHook>;\r
    renderTriggered?: MergedHook<DebuggerHook>;\r
    errorCaptured?: MergedHook<ErrorCapturedHook>;\r
};\r
\r
/* Excluded from this release type: mergeDefaults */\r
\r
declare type MergedHook<T = () => void> = T | T[];\r
\r
export declare function mergeProps(...args: (Data & VNodeProps)[]): Data;\r
\r
export declare interface MethodOptions {\r
    [key: string]: Function;\r
}\r
\r
declare type MixinToOptionTypes<T> = T extends ComponentOptionsBase<infer P, infer B, infer D, infer C, infer M, infer Mixin, infer Extends, any, any, infer Defaults> ? OptionTypesType<P & {}, B & {}, D & {}, C & {}, M & {}, Defaults & {}> & IntersectionMixin<Mixin> & IntersectionMixin<Extends> : never;\r
\r
declare type MountChildrenFn = (children: VNodeArrayChildren, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, start?: number) => void;\r
\r
declare type MountComponentFn = (initialVNode: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized: boolean) => void;\r
\r
declare type MoveFn = (vnode: VNode, container: RendererElement, anchor: RendererNode | null, type: MoveType, parentSuspense?: SuspenseBoundary | null) => void;\r
\r
declare function moveTeleport(vnode: VNode, container: RendererElement, parentAnchor: RendererNode | null, { o: { insert }, m: move }: RendererInternals, moveType?: TeleportMoveTypes): void;\r
\r
declare const enum MoveType {\r
    ENTER = 0,\r
    LEAVE = 1,\r
    REORDER = 2\r
}\r
\r
declare type MultiWatchSources = (WatchSource<unknown> | object)[];\r
\r
declare type NextFn = (vnode: VNode) => RendererNode | null;\r
\r
export declare function nextTick<T = void>(this: T, fn?: (this: T) => void): Promise<void>;\r
\r
export { normalizeClass }\r
\r
declare type NormalizedProp = null | (PropOptions & {\r
    [BooleanFlags.shouldCast]?: boolean;\r
    [BooleanFlags.shouldCastTrue]?: boolean;\r
});\r
\r
declare type NormalizedProps = Record<string, NormalizedProp>;\r
\r
declare type NormalizedPropsOptions = [NormalizedProps, string[]] | [];\r
\r
export { normalizeProps }\r
\r
export { normalizeStyle }\r
\r
declare function normalizeSuspenseChildren(vnode: VNode): void;\r
\r
declare function normalizeVNode(child: VNodeChild): VNode;\r
\r
declare type NotUndefined<T> = T extends undefined ? never : T;\r
\r
declare const NULL_DYNAMIC_COMPONENT: unique symbol;\r
\r
export declare interface ObjectDirective<T = any, V = any> {\r
    created?: DirectiveHook<T, null, V>;\r
    beforeMount?: DirectiveHook<T, null, V>;\r
    mounted?: DirectiveHook<T, null, V>;\r
    beforeUpdate?: DirectiveHook<T, VNode<any, T>, V>;\r
    updated?: DirectiveHook<T, VNode<any, T>, V>;\r
    beforeUnmount?: DirectiveHook<T, null, V>;\r
    unmounted?: DirectiveHook<T, null, V>;\r
    getSSRProps?: SSRDirectiveHook;\r
    deep?: boolean;\r
}\r
\r
export declare type ObjectEmitsOptions = Record<string, ((...args: any[]) => any) | null>;\r
\r
declare type ObjectInjectOptions = Record<string | symbol, string | symbol | {\r
    from?: string | symbol;\r
    default?: unknown;\r
}>;\r
\r
declare type ObjectProvideOptions = Record<string | symbol, unknown>;\r
\r
declare type ObjectWatchOptionItem = {\r
    handler: WatchCallback | string;\r
} & WatchOptions;\r
\r
export declare function onActivated(hook: Function, target?: ComponentInternalInstance | null): void;\r
\r
export declare const onBeforeMount: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onBeforeUnmount: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onBeforeUpdate: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
declare type OnCleanup = (cleanupFn: () => void) => void;\r
\r
export declare function onDeactivated(hook: Function, target?: ComponentInternalInstance | null): void;\r
\r
export declare function onErrorCaptured<TError = Error>(hook: ErrorCapturedHook<TError>, target?: ComponentInternalInstance | null): void;\r
\r
export declare const onMounted: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onRenderTracked: (hook: DebuggerHook, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onRenderTriggered: (hook: DebuggerHook, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export { onScopeDispose }\r
\r
export declare const onServerPrefetch: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onUnmounted: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onUpdated: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
/**\r
 * Open a block.\r
 * This must be called before \`createBlock\`. It cannot be part of \`createBlock\`\r
 * because the children of the block are evaluated before \`createBlock\` itself\r
 * is called. The generated code typically looks like this:\r
 *\r
 * \`\`\`js\r
 * function render() {\r
 *   return (openBlock(),createBlock('div', null, [...]))\r
 * }\r
 * \`\`\`\r
 * disableTracking is true when creating a v-for fragment block, since a v-for\r
 * fragment always diffs its children.\r
 *\r
 * @private\r
 */\r
export declare function openBlock(disableTracking?: boolean): void;\r
\r
declare type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;\r
\r
export declare type OptionMergeFunction = (to: unknown, from: unknown) => any;\r
\r
declare type OptionTypesKeys = 'P' | 'B' | 'D' | 'C' | 'M' | 'Defaults';\r
\r
declare type OptionTypesType<P = {}, B = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Defaults = {}> = {\r
    P: P;\r
    B: B;\r
    D: D;\r
    C: C;\r
    M: M;\r
    Defaults: Defaults;\r
};\r
\r
declare type PatchBlockChildrenFn = (oldChildren: VNode[], newChildren: VNode[], fallbackContainer: RendererElement, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null) => void;\r
\r
declare type PatchChildrenFn = (n1: VNode | null, n2: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean) => void;\r
\r
declare type PatchFn = (n1: VNode | null, // null means this is a mount\r
n2: VNode, container: RendererElement, anchor?: RendererNode | null, parentComponent?: ComponentInternalInstance | null, parentSuspense?: SuspenseBoundary | null, isSVG?: boolean, slotScopeIds?: string[] | null, optimized?: boolean) => void;\r
\r
declare type Plugin_2 = (PluginInstallFunction & {\r
    install?: PluginInstallFunction;\r
}) | {\r
    install: PluginInstallFunction;\r
};\r
export { Plugin_2 as Plugin }\r
\r
declare type PluginInstallFunction = (app: App, ...options: any[]) => any;\r
\r
/**\r
 * Technically we no longer need this after 3.0.8 but we need to keep the same\r
 * API for backwards compat w/ code generated by compilers.\r
 * @private\r
 */\r
export declare function popScopeId(): void;\r
\r
export declare type Prop<T, D = T> = PropOptions<T, D> | PropType<T>;\r
\r
declare type PropConstructor<T = any> = {\r
    new (...args: any[]): T & {};\r
} | {\r
    (): T;\r
} | PropMethod<T>;\r
\r
declare type PropMethod<T, TConstructor = any> = [T] extends [\r
((...args: any) => any) | undefined\r
] ? {\r
    new (): TConstructor;\r
    (): T;\r
    readonly prototype: TConstructor;\r
} : never;\r
\r
declare interface PropOptions<T = any, D = T> {\r
    type?: PropType<T> | true | null;\r
    required?: boolean;\r
    default?: D | DefaultFactory<D> | null | undefined | object;\r
    validator?(value: unknown): boolean;\r
}\r
\r
declare type PropsWithDefaults<Base, Defaults> = Base & {\r
    [K in keyof Defaults]: K extends keyof Base ? NotUndefined<Base[K]> : never;\r
};\r
\r
export declare type PropType<T> = PropConstructor<T> | PropConstructor<T>[];\r
\r
export declare function provide<T>(key: InjectionKey<T> | string | number, value: T): void;\r
\r
export { proxyRefs }\r
\r
declare type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;\r
\r
/**\r
 * Set scope id when creating hoisted vnodes.\r
 * @private compiler helper\r
 */\r
export declare function pushScopeId(id: string | null): void;\r
\r
export declare function queuePostFlushCb(cb: SchedulerJobs): void;\r
\r
declare type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);\r
\r
declare type RawProps = VNodeProps & {\r
    __v_isVNode?: never;\r
    [Symbol.iterator]?: never;\r
} & Record<string, any>;\r
\r
declare type RawSlots = {\r
    [name: string]: unknown;\r
    $stable?: boolean;\r
    /* Excluded from this release type: _ctx */\r
    /* Excluded from this release type: _ */\r
};\r
\r
export { reactive }\r
\r
export { ReactiveEffect }\r
\r
export { ReactiveEffectOptions }\r
\r
export { ReactiveEffectRunner }\r
\r
export { ReactiveFlags }\r
\r
export { readonly }\r
\r
export { Ref }\r
\r
export { ref }\r
\r
/**\r
 * For runtime-dom to register the compiler.\r
 * Note the exported method uses any to avoid d.ts relying on the compiler types.\r
 */\r
export declare function registerRuntimeCompiler(_compile: any): void;\r
\r
declare function reload(id: string, newComp: HMRComponent): void;\r
\r
declare type RemoveFn = (vnode: VNode) => void;\r
\r
declare function renderComponentRoot(instance: ComponentInternalInstance): VNode;\r
\r
export declare interface Renderer<HostElement = RendererElement> {\r
    render: RootRenderFunction<HostElement>;\r
    createApp: CreateAppFunction<HostElement>;\r
}\r
\r
export declare interface RendererElement extends RendererNode {\r
}\r
\r
declare interface RendererInternals<HostNode = RendererNode, HostElement = RendererElement> {\r
    p: PatchFn;\r
    um: UnmountFn;\r
    r: RemoveFn;\r
    m: MoveFn;\r
    mt: MountComponentFn;\r
    mc: MountChildrenFn;\r
    pc: PatchChildrenFn;\r
    pbc: PatchBlockChildrenFn;\r
    n: NextFn;\r
    o: RendererOptions<HostNode, HostElement>;\r
}\r
\r
export declare interface RendererNode {\r
    [key: string]: any;\r
}\r
\r
export declare interface RendererOptions<HostNode = RendererNode, HostElement = RendererElement> {\r
    patchProp(el: HostElement, key: string, prevValue: any, nextValue: any, isSVG?: boolean, prevChildren?: VNode<HostNode, HostElement>[], parentComponent?: ComponentInternalInstance | null, parentSuspense?: SuspenseBoundary | null, unmountChildren?: UnmountChildrenFn): void;\r
    insert(el: HostNode, parent: HostElement, anchor?: HostNode | null): void;\r
    remove(el: HostNode): void;\r
    createElement(type: string, isSVG?: boolean, isCustomizedBuiltIn?: string, vnodeProps?: (VNodeProps & {\r
        [key: string]: any;\r
    }) | null): HostElement;\r
    createText(text: string): HostNode;\r
    createComment(text: string): HostNode;\r
    setText(node: HostNode, text: string): void;\r
    setElementText(node: HostElement, text: string): void;\r
    parentNode(node: HostNode): HostElement | null;\r
    nextSibling(node: HostNode): HostNode | null;\r
    querySelector?(selector: string): HostElement | null;\r
    setScopeId?(el: HostElement, id: string): void;\r
    cloneNode?(node: HostNode): HostNode;\r
    insertStaticContent?(content: string, parent: HostElement, anchor: HostNode | null, isSVG: boolean, start?: HostNode | null, end?: HostNode | null): [HostNode, HostNode];\r
}\r
\r
export declare type RenderFunction = () => VNodeChild;\r
\r
/**\r
 * v-for string\r
 * @private\r
 */\r
export declare function renderList(source: string, renderItem: (value: string, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for number\r
 */\r
export declare function renderList(source: number, renderItem: (value: number, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for array\r
 */\r
export declare function renderList<T>(source: T[], renderItem: (value: T, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for iterable\r
 */\r
export declare function renderList<T>(source: Iterable<T>, renderItem: (value: T, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for object\r
 */\r
export declare function renderList<T>(source: T, renderItem: <K extends keyof T>(value: T[K], key: K, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * Compiler runtime helper for rendering \`<slot/>\`\r
 * @private\r
 */\r
export declare function renderSlot(slots: Slots, name: string, props?: Data, fallback?: () => VNodeArrayChildren, noSlotted?: boolean): VNode;\r
\r
declare type RequiredKeys<T> = {\r
    [K in keyof T]: T[K] extends {\r
        required: true;\r
    } | {\r
        default: any;\r
    } | BooleanConstructor | {\r
        type: BooleanConstructor;\r
    } ? T[K] extends {\r
        default: undefined | (() => undefined);\r
    } ? never : K : never;\r
}[keyof T];\r
\r
declare function rerender(id: string, newRender?: Function): void;\r
\r
/**\r
 * @private\r
 */\r
export declare function resolveComponent(name: string, maybeSelfReference?: boolean): ConcreteComponent | string;\r
\r
/**\r
 * @private\r
 */\r
export declare function resolveDirective(name: string): Directive | undefined;\r
\r
/**\r
 * @private\r
 */\r
export declare function resolveDynamicComponent(component: unknown): VNodeTypes;\r
\r
/* Excluded from this release type: resolveFilter */\r
\r
/* Excluded from this release type: resolveFilter_2 */\r
\r
export declare function resolveTransitionHooks(vnode: VNode, props: BaseTransitionProps<any>, state: TransitionState, instance: ComponentInternalInstance): TransitionHooks;\r
\r
export declare type RootHydrateFunction = (vnode: VNode<Node, Element>, container: (Element | ShadowRoot) & {\r
    _vnode?: VNode;\r
}) => void;\r
\r
export declare type RootRenderFunction<HostElement = RendererElement> = (vnode: VNode | null, container: HostElement, isSVG?: boolean) => void;\r
\r
/**\r
 * Subset of compiler options that makes sense for the runtime.\r
 */\r
export declare interface RuntimeCompilerOptions {\r
    isCustomElement?: (tag: string) => boolean;\r
    whitespace?: 'preserve' | 'condense';\r
    comments?: boolean;\r
    delimiters?: [string, string];\r
}\r
\r
declare interface SchedulerJob extends Function {\r
    id?: number;\r
    active?: boolean;\r
    computed?: boolean;\r
    /**\r
     * Indicates whether the effect is allowed to recursively trigger itself\r
     * when managed by the scheduler.\r
     *\r
     * By default, a job cannot trigger itself because some built-in method calls,\r
     * e.g. Array.prototype.push actually performs reads as well (#1740) which\r
     * can lead to confusing infinite loops.\r
     * The allowed cases are component update functions and watch callbacks.\r
     * Component update functions may update child component props, which in turn\r
     * trigger flush: "pre" watch callbacks that mutates state that the parent\r
     * relies on (#1801). Watch callbacks doesn't track its dependencies so if it\r
     * triggers itself again, it's likely intentional and it is the user's\r
     * responsibility to perform recursive state mutation that eventually\r
     * stabilizes (#1727).\r
     */\r
    allowRecurse?: boolean;\r
    /**\r
     * Attached by renderer.ts when setting up a component's render effect\r
     * Used to obtain component information when reporting max recursive updates.\r
     * dev only.\r
     */\r
    ownerInstance?: ComponentInternalInstance;\r
}\r
\r
declare type SchedulerJobs = SchedulerJob | SchedulerJob[];\r
\r
/**\r
 * Block tracking sometimes needs to be disabled, for example during the\r
 * creation of a tree that needs to be cached by v-once. The compiler generates\r
 * code like this:\r
 *\r
 * \`\`\` js\r
 * _cache[1] || (\r
 *   setBlockTracking(-1),\r
 *   _cache[1] = createVNode(...),\r
 *   setBlockTracking(1),\r
 *   _cache[1]\r
 * )\r
 * \`\`\`\r
 *\r
 * @private\r
 */\r
export declare function setBlockTracking(value: number): void;\r
\r
/**\r
 * Note: rendering calls maybe nested. The function returns the parent rendering\r
 * instance if present, which should be restored after the render is done:\r
 *\r
 * \`\`\`js\r
 * const prev = setCurrentRenderingInstance(i)\r
 * // ...render\r
 * setCurrentRenderingInstance(prev)\r
 * \`\`\`\r
 */\r
declare function setCurrentRenderingInstance(instance: ComponentInternalInstance | null): ComponentInternalInstance | null;\r
\r
export declare function setDevtoolsHook(hook: DevtoolsHook, target: any): void;\r
\r
export declare function setTransitionHooks(vnode: VNode, hooks: TransitionHooks): void;\r
\r
declare function setupComponent(instance: ComponentInternalInstance, isSSR?: boolean): Promise<void> | undefined;\r
\r
export declare interface SetupContext<E = EmitsOptions> {\r
    attrs: Data;\r
    slots: Slots;\r
    emit: EmitFn<E>;\r
    expose: (exposed?: Record<string, any>) => void;\r
}\r
\r
declare type SetupRenderEffectFn = (instance: ComponentInternalInstance, initialVNode: VNode, container: RendererElement, anchor: RendererNode | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized: boolean) => void;\r
\r
export { ShallowReactive }\r
\r
export { shallowReactive }\r
\r
export { shallowReadonly }\r
\r
export { ShallowRef }\r
\r
export { shallowRef }\r
\r
export { ShallowUnwrapRef }\r
\r
export declare type Slot = (...args: any[]) => VNode[];\r
\r
export declare type Slots = Readonly<InternalSlots>;\r
\r
/**\r
 * Use this for features where legacy usage is still possible, but will likely\r
 * lead to runtime error if compat is disabled. (warn in all cases)\r
 */\r
declare function softAssertCompatEnabled(key: DeprecationTypes, instance: ComponentInternalInstance | null, ...args: any[]): boolean;\r
\r
export declare const ssrContextKey: unique symbol;\r
\r
declare type SSRDirectiveHook = (binding: DirectiveBinding, vnode: VNode) => Data | undefined;\r
\r
/* Excluded from this release type: ssrUtils */\r
\r
export declare const Static: unique symbol;\r
\r
export { stop_2 as stop }\r
\r
export declare const Suspense: {\r
    new (): {\r
        $props: VNodeProps & SuspenseProps;\r
    };\r
    __isSuspense: true;\r
};\r
\r
export declare interface SuspenseBoundary {\r
    vnode: VNode<RendererNode, RendererElement, SuspenseProps>;\r
    parent: SuspenseBoundary | null;\r
    parentComponent: ComponentInternalInstance | null;\r
    isSVG: boolean;\r
    container: RendererElement;\r
    hiddenContainer: RendererElement;\r
    anchor: RendererNode | null;\r
    activeBranch: VNode | null;\r
    pendingBranch: VNode | null;\r
    deps: number;\r
    pendingId: number;\r
    timeout: number;\r
    isInFallback: boolean;\r
    isHydrating: boolean;\r
    isUnmounted: boolean;\r
    effects: Function[];\r
    resolve(force?: boolean): void;\r
    fallback(fallbackVNode: VNode): void;\r
    move(container: RendererElement, anchor: RendererNode | null, type: MoveType): void;\r
    next(): RendererNode | null;\r
    registerDep(instance: ComponentInternalInstance, setupRenderEffect: SetupRenderEffectFn): void;\r
    unmount(parentSuspense: SuspenseBoundary | null, doRemove?: boolean): void;\r
}\r
\r
declare const SuspenseImpl: {\r
    name: string;\r
    __isSuspense: boolean;\r
    process(n1: VNode | null, n2: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, rendererInternals: RendererInternals): void;\r
    hydrate: typeof hydrateSuspense;\r
    create: typeof createSuspenseBoundary;\r
    normalize: typeof normalizeSuspenseChildren;\r
};\r
\r
export declare interface SuspenseProps {\r
    onResolve?: () => void;\r
    onPending?: () => void;\r
    onFallback?: () => void;\r
    timeout?: string | number;\r
}\r
\r
export declare const Teleport: {\r
    new (): {\r
        $props: VNodeProps & TeleportProps;\r
    };\r
    __isTeleport: true;\r
};\r
\r
declare const TeleportImpl: {\r
    __isTeleport: boolean;\r
    process(n1: TeleportVNode | null, n2: TeleportVNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, internals: RendererInternals): void;\r
    remove(vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, optimized: boolean, { um: unmount, o: { remove: hostRemove } }: RendererInternals, doRemove: Boolean): void;\r
    move: typeof moveTeleport;\r
    hydrate: typeof hydrateTeleport;\r
};\r
\r
declare const enum TeleportMoveTypes {\r
    TARGET_CHANGE = 0,\r
    TOGGLE = 1,\r
    REORDER = 2\r
}\r
\r
export declare interface TeleportProps {\r
    to: string | RendererElement | null | undefined;\r
    disabled?: boolean;\r
}\r
\r
declare type TeleportVNode = VNode<RendererNode, RendererElement, TeleportProps>;\r
\r
declare const Text_2: unique symbol;\r
export { Text_2 as Text }\r
\r
export { toDisplayString }\r
\r
export { toHandlerKey }\r
\r
/**\r
 * For prefixing keys in v-on="obj" with "on"\r
 * @private\r
 */\r
export declare function toHandlers(obj: Record<string, any>): Record<string, any>;\r
\r
export { toRaw }\r
\r
export { ToRef }\r
\r
export { toRef }\r
\r
export { ToRefs }\r
\r
export { toRefs }\r
\r
export { TrackOpTypes }\r
\r
/**\r
 * Internal API for registering an arguments transform for createVNode\r
 * used for creating stubs in the test-utils\r
 * It is *internal* but needs to be exposed for test-utils to pick up proper\r
 * typings\r
 */\r
export declare function transformVNodeArgs(transformer?: typeof vnodeArgsTransformer): void;\r
\r
export declare interface TransitionHooks<HostElement extends RendererElement = RendererElement> {\r
    mode: BaseTransitionProps['mode'];\r
    persisted: boolean;\r
    beforeEnter(el: HostElement): void;\r
    enter(el: HostElement): void;\r
    leave(el: HostElement, remove: () => void): void;\r
    clone(vnode: VNode): TransitionHooks<HostElement>;\r
    afterLeave?(): void;\r
    delayLeave?(el: HostElement, earlyRemove: () => void, delayedLeave: () => void): void;\r
    delayedLeave?(): void;\r
}\r
\r
export declare interface TransitionState {\r
    isMounted: boolean;\r
    isLeaving: boolean;\r
    isUnmounting: boolean;\r
    leavingVNodes: Map<any, Record<string, VNode>>;\r
}\r
\r
export { TriggerOpTypes }\r
\r
export { triggerRef }\r
\r
declare type UnmountChildrenFn = (children: VNode[], parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, doRemove?: boolean, optimized?: boolean, start?: number) => void;\r
\r
declare type UnmountFn = (vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, doRemove?: boolean, optimized?: boolean) => void;\r
\r
export { unref }\r
\r
declare type UnwrapMixinsType<T, Type extends OptionTypesKeys> = T extends OptionTypesType ? T[Type] : never;\r
\r
export { UnwrapNestedRefs }\r
\r
export { UnwrapRef }\r
\r
export declare function useAttrs(): SetupContext['attrs'];\r
\r
export declare function useSlots(): SetupContext['slots'];\r
\r
export declare const useSSRContext: <T = Record<string, any>>() => T | undefined;\r
\r
export declare function useTransitionState(): TransitionState;\r
\r
export declare const version: string;\r
\r
export declare interface VNode<HostNode = RendererNode, HostElement = RendererElement, ExtraProps = {\r
    [key: string]: any;\r
}> {\r
    /* Excluded from this release type: __v_isVNode */\r
    /* Excluded from this release type: __v_skip */\r
    type: VNodeTypes;\r
    props: (VNodeProps & ExtraProps) | null;\r
    key: string | number | symbol | null;\r
    ref: VNodeNormalizedRef | null;\r
    /**\r
     * SFC only. This is assigned on vnode creation using currentScopeId\r
     * which is set alongside currentRenderingInstance.\r
     */\r
    scopeId: string | null;\r
    /* Excluded from this release type: slotScopeIds */\r
    children: VNodeNormalizedChildren;\r
    component: ComponentInternalInstance | null;\r
    dirs: DirectiveBinding[] | null;\r
    transition: TransitionHooks<HostElement> | null;\r
    el: HostNode | null;\r
    anchor: HostNode | null;\r
    target: HostElement | null;\r
    targetAnchor: HostNode | null;\r
    /* Excluded from this release type: staticCount */\r
    suspense: SuspenseBoundary | null;\r
    /* Excluded from this release type: ssContent */\r
    /* Excluded from this release type: ssFallback */\r
    shapeFlag: number;\r
    patchFlag: number;\r
    /* Excluded from this release type: dynamicProps */\r
    /* Excluded from this release type: dynamicChildren */\r
    appContext: AppContext | null;\r
    /* Excluded from this release type: memo */\r
    /* Excluded from this release type: isCompatRoot */\r
    /* Excluded from this release type: ce */\r
}\r
\r
declare let vnodeArgsTransformer: ((args: Parameters<typeof _createVNode>, instance: ComponentInternalInstance | null) => Parameters<typeof _createVNode>) | undefined;\r
\r
export declare type VNodeArrayChildren = Array<VNodeArrayChildren | VNodeChildAtom>;\r
\r
export declare type VNodeChild = VNodeChildAtom | VNodeArrayChildren;\r
\r
declare type VNodeChildAtom = VNode | string | number | boolean | null | undefined | void;\r
\r
declare type VNodeMountHook = (vnode: VNode) => void;\r
\r
export declare type VNodeNormalizedChildren = string | VNodeArrayChildren | RawSlots | null;\r
\r
declare type VNodeNormalizedRef = VNodeNormalizedRefAtom | VNodeNormalizedRefAtom[];\r
\r
declare type VNodeNormalizedRefAtom = {\r
    i: ComponentInternalInstance;\r
    r: VNodeRef;\r
    k?: string;\r
    f?: boolean;\r
};\r
\r
export declare type VNodeProps = {\r
    key?: string | number | symbol;\r
    ref?: VNodeRef;\r
    ref_for?: boolean;\r
    ref_key?: string;\r
    onVnodeBeforeMount?: VNodeMountHook | VNodeMountHook[];\r
    onVnodeMounted?: VNodeMountHook | VNodeMountHook[];\r
    onVnodeBeforeUpdate?: VNodeUpdateHook | VNodeUpdateHook[];\r
    onVnodeUpdated?: VNodeUpdateHook | VNodeUpdateHook[];\r
    onVnodeBeforeUnmount?: VNodeMountHook | VNodeMountHook[];\r
    onVnodeUnmounted?: VNodeMountHook | VNodeMountHook[];\r
};\r
\r
export declare type VNodeRef = string | Ref | ((ref: Element | ComponentPublicInstance | null, refs: Record<string, any>) => void);\r
\r
export declare type VNodeTypes = string | VNode | Component | typeof Text_2 | typeof Static | typeof Comment_2 | typeof Fragment | typeof TeleportImpl | typeof SuspenseImpl;\r
\r
declare type VNodeUpdateHook = (vnode: VNode, oldVNode: VNode) => void;\r
\r
export declare function warn(msg: string, ...args: any[]): void;\r
\r
declare function warnDeprecation(key: DeprecationTypes, instance: ComponentInternalInstance | null, ...args: any[]): void;\r
\r
export declare function watch<T extends MultiWatchSources, Immediate extends Readonly<boolean> = false>(sources: [...T], cb: WatchCallback<MapSources<T, false>, MapSources<T, Immediate>>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare function watch<T extends Readonly<MultiWatchSources>, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<MapSources<T, false>, MapSources<T, Immediate>>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare function watch<T, Immediate extends Readonly<boolean> = false>(source: WatchSource<T>, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare function watch<T extends object, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare type WatchCallback<V = any, OV = any> = (value: V, oldValue: OV, onCleanup: OnCleanup) => any;\r
\r
export declare type WatchEffect = (onCleanup: OnCleanup) => void;\r
\r
export declare function watchEffect(effect: WatchEffect, options?: WatchOptionsBase): WatchStopHandle;\r
\r
declare type WatchOptionItem = string | WatchCallback | ObjectWatchOptionItem;\r
\r
export declare interface WatchOptions<Immediate = boolean> extends WatchOptionsBase {\r
    immediate?: Immediate;\r
    deep?: boolean;\r
}\r
\r
export declare interface WatchOptionsBase extends DebuggerOptions {\r
    flush?: 'pre' | 'post' | 'sync';\r
}\r
\r
export declare function watchPostEffect(effect: WatchEffect, options?: DebuggerOptions): WatchStopHandle;\r
\r
export declare type WatchSource<T = any> = Ref<T> | ComputedRef<T> | (() => T);\r
\r
export declare type WatchStopHandle = () => void;\r
\r
export declare function watchSyncEffect(effect: WatchEffect, options?: DebuggerOptions): WatchStopHandle;\r
\r
/* Excluded from this release type: withAsyncContext */\r
\r
/**\r
 * Wrap a slot function to memoize current rendering instance\r
 * @private compiler helper\r
 */\r
export declare function withCtx(fn: Function, ctx?: ComponentInternalInstance | null, isNonScopedSlot?: boolean): Function;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for providing props default values when\r
 * using type-based \`defineProps\` declaration.\r
 *\r
 * Example usage:\r
 * \`\`\`ts\r
 * withDefaults(defineProps<{\r
 *   size?: number\r
 *   labels?: string[]\r
 * }>(), {\r
 *   size: 3,\r
 *   labels: () => ['default label']\r
 * })\r
 * \`\`\`\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the output\r
 * and should **not** be actually called at runtime.\r
 */\r
export declare function withDefaults<Props, Defaults extends InferDefaults<Props>>(props: Props, defaults: Defaults): PropsWithDefaults<Props, Defaults>;\r
\r
/**\r
 * Adds directives to a VNode.\r
 */\r
export declare function withDirectives<T extends VNode>(vnode: T, directives: DirectiveArguments): T;\r
\r
export declare function withMemo(memo: any[], render: () => VNode<any, any>, cache: any[], index: number): VNode<any, any, {\r
    [key: string]: any;\r
}>;\r
\r
/**\r
 * Only for backwards compat\r
 * @private\r
 */\r
export declare const withScopeId: (_id: string) => typeof withCtx;\r
\r
export { WritableComputedOptions }\r
\r
export { WritableComputedRef }\r
\r
export { }\r

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.

declare module '@vue/reactivity' {
  export interface RefUnwrapBailTypes {
    runtimeCoreBailTypes:
      | VNode
      | {
          // directly bailing on ComponentPublicInstance results in recursion
          // so we use this as a bail hint
          $: ComponentInternalInstance
        }
  }
}

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.
type _defineProps = typeof defineProps
type _defineEmits = typeof defineEmits
type _defineExpose = typeof defineExpose
type _withDefaults = typeof withDefaults

declare global {
  const defineProps: _defineProps
  const defineEmits: _defineEmits
  const defineExpose: _defineExpose
  const withDefaults: _withDefaults
}
`,Ra=`import { BaseTransitionProps } from '@vue/runtime-core';\r
import { ComponentInternalInstance } from '@vue/runtime-core';\r
import { ComponentOptionsMixin } from '@vue/runtime-core';\r
import { ComponentOptionsWithArrayProps } from '@vue/runtime-core';\r
import { ComponentOptionsWithObjectProps } from '@vue/runtime-core';\r
import { ComponentOptionsWithoutProps } from '@vue/runtime-core';\r
import { ComponentPropsOptions } from '@vue/runtime-core';\r
import { ComponentPublicInstance } from '@vue/runtime-core';\r
import { ComputedOptions } from '@vue/runtime-core';\r
import { ConcreteComponent } from '@vue/runtime-core';\r
import { CreateAppFunction } from '@vue/runtime-core';\r
import { EmitsOptions } from '@vue/runtime-core';\r
import { ExtractPropTypes } from '@vue/runtime-core';\r
import { FunctionalComponent } from '@vue/runtime-core';\r
import { MethodOptions } from '@vue/runtime-core';\r
import { ObjectDirective } from '@vue/runtime-core';\r
import { RenderFunction } from '@vue/runtime-core';\r
import { RootHydrateFunction } from '@vue/runtime-core';\r
import { RootRenderFunction } from '@vue/runtime-core';\r
import { SetupContext } from '@vue/runtime-core';\r
\r
declare const ANIMATION = "animation";\r
\r
declare type AssignerFn = (value: any) => void;\r
\r
declare const BaseClass: {\r
    new (): HTMLElement;\r
    prototype: HTMLElement;\r
};\r
\r
export declare const createApp: CreateAppFunction<Element>;\r
\r
export declare const createSSRApp: CreateAppFunction<Element>;\r
\r
export declare function defineCustomElement<Props, RawBindings = object>(setup: (props: Readonly<Props>, ctx: SetupContext) => RawBindings | RenderFunction): VueElementConstructor<Props>;\r
\r
export declare function defineCustomElement<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string>(options: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE> & {\r
    styles?: string[];\r
}): VueElementConstructor<Props>;\r
\r
export declare function defineCustomElement<PropNames extends string, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M, Mixin, Extends, E, EE> & {\r
    styles?: string[];\r
}): VueElementConstructor<{\r
    [K in PropNames]: any;\r
}>;\r
\r
export declare function defineCustomElement<PropsOptions extends Readonly<ComponentPropsOptions>, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE> & {\r
    styles?: string[];\r
}): VueElementConstructor<ExtractPropTypes<PropsOptions>>;\r
\r
export declare function defineCustomElement(options: {\r
    new (...args: any[]): ComponentPublicInstance;\r
}): VueElementConstructor;\r
\r
export declare const defineSSRCustomElement: typeof defineCustomElement;\r
\r
export declare const hydrate: RootHydrateFunction;\r
\r
/* Excluded from this release type: initDirectivesForSSR */\r
\r
declare type InnerComponentDef = ConcreteComponent & {\r
    styles?: string[];\r
};\r
\r
declare type ModelDirective<T> = ObjectDirective<T & {\r
    _assign: AssignerFn;\r
}>;\r
\r
export declare const render: RootRenderFunction<Element | ShadowRoot>;\r
\r
declare const TRANSITION = "transition";\r
\r
export declare const Transition: FunctionalComponent<TransitionProps>;\r
\r
export declare const TransitionGroup: new () => {\r
    $props: TransitionGroupProps;\r
};\r
\r
export declare type TransitionGroupProps = Omit<TransitionProps, 'mode'> & {\r
    tag?: string;\r
    moveClass?: string;\r
};\r
\r
export declare interface TransitionProps extends BaseTransitionProps<Element> {\r
    name?: string;\r
    type?: typeof TRANSITION | typeof ANIMATION;\r
    css?: boolean;\r
    duration?: number | {\r
        enter: number;\r
        leave: number;\r
    };\r
    enterFromClass?: string;\r
    enterActiveClass?: string;\r
    enterToClass?: string;\r
    appearFromClass?: string;\r
    appearActiveClass?: string;\r
    appearToClass?: string;\r
    leaveFromClass?: string;\r
    leaveActiveClass?: string;\r
    leaveToClass?: string;\r
}\r
\r
export declare function useCssModule(name?: string): Record<string, string>;\r
\r
/**\r
 * Runtime helper for SFC's CSS variable injection feature.\r
 * @private\r
 */\r
export declare function useCssVars(getter: (ctx: any) => Record<string, string>): void;\r
\r
export declare const vModelCheckbox: ModelDirective<HTMLInputElement>;\r
\r
export declare const vModelDynamic: ObjectDirective<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;\r
\r
export declare const vModelRadio: ModelDirective<HTMLInputElement>;\r
\r
export declare const vModelSelect: ModelDirective<HTMLSelectElement>;\r
\r
export declare const vModelText: ModelDirective<HTMLInputElement | HTMLTextAreaElement>;\r
\r
export declare const vShow: ObjectDirective<VShowElement>;\r
\r
declare interface VShowElement extends HTMLElement {\r
    _vod: string;\r
}\r
\r
export declare class VueElement extends BaseClass {\r
    private _def;\r
    private _props;\r
    /* Excluded from this release type: _instance */\r
    private _connected;\r
    private _resolved;\r
    private _numberProps;\r
    private _styles?;\r
    constructor(_def: InnerComponentDef, _props?: Record<string, any>, hydrate?: RootHydrateFunction);\r
    connectedCallback(): void;\r
    disconnectedCallback(): void;\r
    /**\r
     * resolve inner component definition (handle possible async component)\r
     */\r
    private _resolveDef;\r
    protected _setAttr(key: string): void;\r
    /* Excluded from this release type: _getProp */\r
    /* Excluded from this release type: _setProp */\r
    private _update;\r
    private _createVNode;\r
    private _applyStyles;\r
}\r
\r
export declare type VueElementConstructor<P = {}> = {\r
    new (initialProps?: Record<string, any>): VueElement & P;\r
};\r
\r
/**\r
 * @private\r
 */\r
export declare const withKeys: (fn: Function, modifiers: string[]) => (event: KeyboardEvent) => any;\r
\r
/**\r
 * @private\r
 */\r
export declare const withModifiers: (fn: Function, modifiers: string[]) => (event: Event, ...args: unknown[]) => any;\r
\r
\r
export * from "@vue/runtime-core";\r
\r
export { }\r

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.

// This code is based on react definition in DefinitelyTyped published under the MIT license.
//      Repository: https://github.com/DefinitelyTyped/DefinitelyTyped
//      Path in the repository: types/react/index.d.ts
//
// Copyrights of original definition are:
//      AssureSign <http://www.assuresign.com>
//      Microsoft <https://microsoft.com>
//                 John Reilly <https://github.com/johnnyreilly>
//      Benoit Benezech <https://github.com/bbenezech>
//      Patricio Zavolinsky <https://github.com/pzavolinsky>
//      Digiguru <https://github.com/digiguru>
//      Eric Anderson <https://github.com/ericanderson>
//      Dovydas Navickas <https://github.com/DovydasNavickas>
//                 Josh Rutherford <https://github.com/theruther4d>
//                 Guilherme Hübner <https://github.com/guilhermehubner>
//                 Ferdy Budhidharma <https://github.com/ferdaber>
//                 Johann Rakotoharisoa <https://github.com/jrakotoharisoa>
//                 Olivier Pascal <https://github.com/pascaloliv>
//                 Martin Hochel <https://github.com/hotell>
//                 Frank Li <https://github.com/franklixuefei>
//                 Jessica Franco <https://github.com/Jessidhia>
//                 Saransh Kataria <https://github.com/saranshkataria>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
//                 Sebastian Silbermann <https://github.com/eps1lon>

import { VNode } from '@vue/runtime-core'
import * as CSS from 'csstype'

export interface CSSProperties
  extends CSS.Properties<string | number>,
    CSS.PropertiesHyphen<string | number> {
  /**
   * The index signature was removed to enable closed typing for style
   * using CSSType. You're able to use type assertion or module augmentation
   * to add properties or an index signature of your own.
   *
   * For examples and more information, visit:
   * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
   */
  [v: \`--\${string}\`]: string | number | undefined
}

type Booleanish = boolean | 'true' | 'false'
type Numberish = number | string

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  'aria-activedescendant'?: string
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  'aria-atomic'?: Booleanish
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  'aria-busy'?: Booleanish
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  'aria-checked'?: Booleanish | 'mixed'
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  'aria-colcount'?: Numberish
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  'aria-colindex'?: Numberish
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  'aria-colspan'?: Numberish
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  'aria-controls'?: string
  /** Indicates the element that represents the current item within a container or set of related elements. */
  'aria-current'?: Booleanish | 'page' | 'step' | 'location' | 'date' | 'time'
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  'aria-describedby'?: string
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  'aria-details'?: string
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  'aria-disabled'?: Booleanish
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  'aria-errormessage'?: string
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  'aria-expanded'?: Booleanish
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  'aria-flowto'?: string
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  'aria-grabbed'?: Booleanish
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?: Booleanish | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  'aria-hidden'?: Booleanish
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  'aria-invalid'?: Booleanish | 'grammar' | 'spelling'
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  'aria-keyshortcuts'?: string
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  'aria-label'?: string
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  'aria-labelledby'?: string
  /** Defines the hierarchical level of an element within a structure. */
  'aria-level'?: Numberish
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  'aria-live'?: 'off' | 'assertive' | 'polite'
  /** Indicates whether an element is modal when displayed. */
  'aria-modal'?: Booleanish
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  'aria-multiline'?: Booleanish
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  'aria-multiselectable'?: Booleanish
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  'aria-orientation'?: 'horizontal' | 'vertical'
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  'aria-owns'?: string
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  'aria-placeholder'?: string
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  'aria-posinset'?: Numberish
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  'aria-pressed'?: Booleanish | 'mixed'
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  'aria-readonly'?: Booleanish
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text'
  /** Indicates that user input is required on the element before a form may be submitted. */
  'aria-required'?: Booleanish
  /** Defines a human-readable, author-localized description for the role of an element. */
  'aria-roledescription'?: string
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  'aria-rowcount'?: Numberish
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  'aria-rowindex'?: Numberish
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  'aria-rowspan'?: Numberish
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  'aria-selected'?: Booleanish
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  'aria-setsize'?: Numberish
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
  /** Defines the maximum allowed value for a range widget. */
  'aria-valuemax'?: Numberish
  /** Defines the minimum allowed value for a range widget. */
  'aria-valuemin'?: Numberish
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  'aria-valuenow'?: Numberish
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  'aria-valuetext'?: string
}

// Vue's style normalization supports nested arrays
export type StyleValue = string | CSSProperties | Array<StyleValue>

export interface HTMLAttributes extends AriaAttributes, EventHandlers<Events> {
  innerHTML?: string

  class?: any
  style?: StyleValue

  // Standard HTML Attributes
  accesskey?: string
  contenteditable?: Booleanish | 'inherit'
  contextmenu?: string
  dir?: string
  draggable?: Booleanish
  hidden?: Booleanish
  id?: string
  lang?: string
  placeholder?: string
  spellcheck?: Booleanish
  tabindex?: Numberish
  title?: string
  translate?: 'yes' | 'no'

  // Unknown
  radiogroup?: string // <command>, <menuitem>

  // WAI-ARIA
  role?: string

  // RDFa Attributes
  about?: string
  datatype?: string
  inlist?: any
  prefix?: string
  property?: string
  resource?: string
  typeof?: string
  vocab?: string

  // Non-standard Attributes
  autocapitalize?: string
  autocorrect?: string
  autosave?: string
  color?: string
  itemprop?: string
  itemscope?: Booleanish
  itemtype?: string
  itemid?: string
  itemref?: string
  results?: Numberish
  security?: string
  unselectable?: 'on' | 'off'

  // Living Standard
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents
   * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
   */
  inputmode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
  /**
   * Specify that a standard HTML element should behave like a defined custom built-in element
   * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
   */
  is?: string
}

export interface AnchorHTMLAttributes extends HTMLAttributes {
  download?: any
  href?: string
  hreflang?: string
  media?: string
  ping?: string
  rel?: string
  target?: string
  type?: string
  referrerpolicy?: string
}

export interface AreaHTMLAttributes extends HTMLAttributes {
  alt?: string
  coords?: string
  download?: any
  href?: string
  hreflang?: string
  media?: string
  rel?: string
  shape?: string
  target?: string
}

export interface AudioHTMLAttributes extends MediaHTMLAttributes {}

export interface BaseHTMLAttributes extends HTMLAttributes {
  href?: string
  target?: string
}

export interface BlockquoteHTMLAttributes extends HTMLAttributes {
  cite?: string
}

export interface ButtonHTMLAttributes extends HTMLAttributes {
  autofocus?: Booleanish
  disabled?: Booleanish
  form?: string
  formaction?: string
  formenctype?: string
  formmethod?: string
  formnovalidate?: Booleanish
  formtarget?: string
  name?: string
  type?: 'submit' | 'reset' | 'button'
  value?: string | string[] | number
}

export interface CanvasHTMLAttributes extends HTMLAttributes {
  height?: Numberish
  width?: Numberish
}

export interface ColHTMLAttributes extends HTMLAttributes {
  span?: Numberish
  width?: Numberish
}

export interface ColgroupHTMLAttributes extends HTMLAttributes {
  span?: Numberish
}

export interface DataHTMLAttributes extends HTMLAttributes {
  value?: string | string[] | number
}

export interface DetailsHTMLAttributes extends HTMLAttributes {
  open?: Booleanish
}

export interface DelHTMLAttributes extends HTMLAttributes {
  cite?: string
  datetime?: string
}

export interface DialogHTMLAttributes extends HTMLAttributes {
  open?: Booleanish
}

export interface EmbedHTMLAttributes extends HTMLAttributes {
  height?: Numberish
  src?: string
  type?: string
  width?: Numberish
}

export interface FieldsetHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  form?: string
  name?: string
}

export interface FormHTMLAttributes extends HTMLAttributes {
  acceptcharset?: string
  action?: string
  autocomplete?: string
  enctype?: string
  method?: string
  name?: string
  novalidate?: Booleanish
  target?: string
}

export interface HtmlHTMLAttributes extends HTMLAttributes {
  manifest?: string
}

export interface IframeHTMLAttributes extends HTMLAttributes {
  allow?: string
  allowfullscreen?: Booleanish
  allowtransparency?: Booleanish
  frameborder?: Numberish
  height?: Numberish
  marginheight?: Numberish
  marginwidth?: Numberish
  name?: string
  referrerpolicy?: string
  sandbox?: string
  scrolling?: string
  seamless?: Booleanish
  src?: string
  srcdoc?: string
  width?: Numberish
}

export interface ImgHTMLAttributes extends HTMLAttributes {
  alt?: string
  crossorigin?: 'anonymous' | 'use-credentials' | ''
  decoding?: 'async' | 'auto' | 'sync'
  height?: Numberish
  sizes?: string
  src?: string
  srcset?: string
  usemap?: string
  width?: Numberish
}

export interface InsHTMLAttributes extends HTMLAttributes {
  cite?: string
  datetime?: string
}

export interface InputHTMLAttributes extends HTMLAttributes {
  accept?: string
  alt?: string
  autocomplete?: string
  autofocus?: Booleanish
  capture?: boolean | 'user' | 'environment' // https://www.w3.org/tr/html-media-capture/#the-capture-attribute
  checked?: Booleanish | any[] | Set<any> // for IDE v-model multi-checkbox support
  crossorigin?: string
  disabled?: Booleanish
  form?: string
  formaction?: string
  formenctype?: string
  formmethod?: string
  formnovalidate?: Booleanish
  formtarget?: string
  height?: Numberish
  indeterminate?: boolean
  list?: string
  max?: Numberish
  maxlength?: Numberish
  min?: Numberish
  minlength?: Numberish
  multiple?: Booleanish
  name?: string
  pattern?: string
  placeholder?: string
  readonly?: Booleanish
  required?: Booleanish
  size?: Numberish
  src?: string
  step?: Numberish
  type?: string
  value?: any // we support :value to be bound to anything w/ v-model
  width?: Numberish
}

export interface KeygenHTMLAttributes extends HTMLAttributes {
  autofocus?: Booleanish
  challenge?: string
  disabled?: Booleanish
  form?: string
  keytype?: string
  keyparams?: string
  name?: string
}

export interface LabelHTMLAttributes extends HTMLAttributes {
  for?: string
  form?: string
}

export interface LiHTMLAttributes extends HTMLAttributes {
  value?: string | string[] | number
}

export interface LinkHTMLAttributes extends HTMLAttributes {
  as?: string
  crossorigin?: string
  href?: string
  hreflang?: string
  integrity?: string
  media?: string
  rel?: string
  sizes?: string
  type?: string
}

export interface MapHTMLAttributes extends HTMLAttributes {
  name?: string
}

export interface MenuHTMLAttributes extends HTMLAttributes {
  type?: string
}

export interface MediaHTMLAttributes extends HTMLAttributes {
  autoplay?: Booleanish
  controls?: Booleanish
  controlslist?: string
  crossorigin?: string
  loop?: Booleanish
  mediagroup?: string
  muted?: Booleanish
  playsinline?: Booleanish
  preload?: string
  src?: string
}

export interface MetaHTMLAttributes extends HTMLAttributes {
  charset?: string
  content?: string
  httpequiv?: string
  name?: string
}

export interface MeterHTMLAttributes extends HTMLAttributes {
  form?: string
  high?: Numberish
  low?: Numberish
  max?: Numberish
  min?: Numberish
  optimum?: Numberish
  value?: string | string[] | number
}

export interface QuoteHTMLAttributes extends HTMLAttributes {
  cite?: string
}

export interface ObjectHTMLAttributes extends HTMLAttributes {
  classid?: string
  data?: string
  form?: string
  height?: Numberish
  name?: string
  type?: string
  usemap?: string
  width?: Numberish
  wmode?: string
}

export interface OlHTMLAttributes extends HTMLAttributes {
  reversed?: Booleanish
  start?: Numberish
  type?: '1' | 'a' | 'A' | 'i' | 'I'
}

export interface OptgroupHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  label?: string
}

export interface OptionHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  label?: string
  selected?: Booleanish
  value?: any // we support :value to be bound to anything w/ v-model
}

export interface OutputHTMLAttributes extends HTMLAttributes {
  for?: string
  form?: string
  name?: string
}

export interface ParamHTMLAttributes extends HTMLAttributes {
  name?: string
  value?: string | string[] | number
}

export interface ProgressHTMLAttributes extends HTMLAttributes {
  max?: Numberish
  value?: string | string[] | number
}

export interface ScriptHTMLAttributes extends HTMLAttributes {
  async?: Booleanish
  charset?: string
  crossorigin?: string
  defer?: Booleanish
  integrity?: string
  nomodule?: Booleanish
  nonce?: string
  src?: string
  type?: string
}

export interface SelectHTMLAttributes extends HTMLAttributes {
  autocomplete?: string
  autofocus?: Booleanish
  disabled?: Booleanish
  form?: string
  multiple?: Booleanish
  name?: string
  required?: Booleanish
  size?: Numberish
  value?: any // we support :value to be bound to anything w/ v-model
}

export interface SourceHTMLAttributes extends HTMLAttributes {
  media?: string
  sizes?: string
  src?: string
  srcset?: string
  type?: string
}

export interface StyleHTMLAttributes extends HTMLAttributes {
  media?: string
  nonce?: string
  scoped?: Booleanish
  type?: string
}

export interface TableHTMLAttributes extends HTMLAttributes {
  cellpadding?: Numberish
  cellspacing?: Numberish
  summary?: string
}

export interface TextareaHTMLAttributes extends HTMLAttributes {
  autocomplete?: string
  autofocus?: Booleanish
  cols?: Numberish
  dirname?: string
  disabled?: Booleanish
  form?: string
  maxlength?: Numberish
  minlength?: Numberish
  name?: string
  placeholder?: string
  readonly?: boolean
  required?: Booleanish
  rows?: Numberish
  value?: string | string[] | number
  wrap?: string
}

export interface TdHTMLAttributes extends HTMLAttributes {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
  colspan?: Numberish
  headers?: string
  rowspan?: Numberish
  scope?: string
  valign?: 'top' | 'middle' | 'bottom' | 'baseline'
}

export interface ThHTMLAttributes extends HTMLAttributes {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
  colspan?: Numberish
  headers?: string
  rowspan?: Numberish
  scope?: string
}

export interface TimeHTMLAttributes extends HTMLAttributes {
  datetime?: string
}

export interface TrackHTMLAttributes extends HTMLAttributes {
  default?: Booleanish
  kind?: string
  label?: string
  src?: string
  srclang?: string
}

export interface VideoHTMLAttributes extends MediaHTMLAttributes {
  height?: Numberish
  playsinline?: Booleanish
  poster?: string
  width?: Numberish
  disablePictureInPicture?: Booleanish
}

export interface WebViewHTMLAttributes extends HTMLAttributes {
  allowfullscreen?: Booleanish
  allowpopups?: Booleanish
  autoFocus?: Booleanish
  autosize?: Booleanish
  blinkfeatures?: string
  disableblinkfeatures?: string
  disableguestresize?: Booleanish
  disablewebsecurity?: Booleanish
  guestinstance?: string
  httpreferrer?: string
  nodeintegration?: Booleanish
  partition?: string
  plugins?: Booleanish
  preload?: string
  src?: string
  useragent?: string
  webpreferences?: string
}

export interface SVGAttributes extends AriaAttributes, EventHandlers<Events> {
  innerHTML?: string

  /**
   * SVG Styling Attributes
   * @see https://www.w3.org/TR/SVG/styling.html#ElementSpecificStyling
   */
  class?: any
  style?: string | CSSProperties

  color?: string
  height?: Numberish
  id?: string
  lang?: string
  max?: Numberish
  media?: string
  method?: string
  min?: Numberish
  name?: string
  target?: string
  type?: string
  width?: Numberish

  // Other HTML properties supported by SVG elements in browsers
  role?: string
  tabindex?: Numberish

  // SVG Specific attributes
  'accent-height'?: Numberish
  accumulate?: 'none' | 'sum'
  additive?: 'replace' | 'sum'
  'alignment-baseline'?:
    | 'auto'
    | 'baseline'
    | 'before-edge'
    | 'text-before-edge'
    | 'middle'
    | 'central'
    | 'after-edge'
    | 'text-after-edge'
    | 'ideographic'
    | 'alphabetic'
    | 'hanging'
    | 'mathematical'
    | 'inherit'
  allowReorder?: 'no' | 'yes'
  alphabetic?: Numberish
  amplitude?: Numberish
  'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated'
  ascent?: Numberish
  attributeName?: string
  attributeType?: string
  autoReverse?: Numberish
  azimuth?: Numberish
  baseFrequency?: Numberish
  'baseline-shift'?: Numberish
  baseProfile?: Numberish
  bbox?: Numberish
  begin?: Numberish
  bias?: Numberish
  by?: Numberish
  calcMode?: Numberish
  'cap-height'?: Numberish
  clip?: Numberish
  'clip-path'?: string
  clipPathUnits?: Numberish
  'clip-rule'?: Numberish
  'color-interpolation'?: Numberish
  'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
  'color-profile'?: Numberish
  'color-rendering'?: Numberish
  contentScriptType?: Numberish
  contentStyleType?: Numberish
  cursor?: Numberish
  cx?: Numberish
  cy?: Numberish
  d?: string
  decelerate?: Numberish
  descent?: Numberish
  diffuseConstant?: Numberish
  direction?: Numberish
  display?: Numberish
  divisor?: Numberish
  'dominant-baseline'?: Numberish
  dur?: Numberish
  dx?: Numberish
  dy?: Numberish
  edgeMode?: Numberish
  elevation?: Numberish
  'enable-background'?: Numberish
  end?: Numberish
  exponent?: Numberish
  externalResourcesRequired?: Numberish
  fill?: string
  'fill-opacity'?: Numberish
  'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit'
  filter?: string
  filterRes?: Numberish
  filterUnits?: Numberish
  'flood-color'?: Numberish
  'flood-opacity'?: Numberish
  focusable?: Numberish
  'font-family'?: string
  'font-size'?: Numberish
  'font-size-adjust'?: Numberish
  'font-stretch'?: Numberish
  'font-style'?: Numberish
  'font-variant'?: Numberish
  'font-weight'?: Numberish
  format?: Numberish
  from?: Numberish
  fx?: Numberish
  fy?: Numberish
  g1?: Numberish
  g2?: Numberish
  'glyph-name'?: Numberish
  'glyph-orientation-horizontal'?: Numberish
  'glyph-orientation-vertical'?: Numberish
  glyphRef?: Numberish
  gradientTransform?: string
  gradientUnits?: string
  hanging?: Numberish
  'horiz-adv-x'?: Numberish
  'horiz-origin-x'?: Numberish
  href?: string
  ideographic?: Numberish
  'image-rendering'?: Numberish
  in2?: Numberish
  in?: string
  intercept?: Numberish
  k1?: Numberish
  k2?: Numberish
  k3?: Numberish
  k4?: Numberish
  k?: Numberish
  kernelMatrix?: Numberish
  kernelUnitLength?: Numberish
  kerning?: Numberish
  keyPoints?: Numberish
  keySplines?: Numberish
  keyTimes?: Numberish
  lengthAdjust?: Numberish
  'letter-spacing'?: Numberish
  'lighting-color'?: Numberish
  limitingConeAngle?: Numberish
  local?: Numberish
  'marker-end'?: string
  markerHeight?: Numberish
  'marker-mid'?: string
  'marker-start'?: string
  markerUnits?: Numberish
  markerWidth?: Numberish
  mask?: string
  maskContentUnits?: Numberish
  maskUnits?: Numberish
  mathematical?: Numberish
  mode?: Numberish
  numOctaves?: Numberish
  offset?: Numberish
  opacity?: Numberish
  operator?: Numberish
  order?: Numberish
  orient?: Numberish
  orientation?: Numberish
  origin?: Numberish
  overflow?: Numberish
  'overline-position'?: Numberish
  'overline-thickness'?: Numberish
  'paint-order'?: Numberish
  'panose-1'?: Numberish
  pathLength?: Numberish
  patternContentUnits?: string
  patternTransform?: Numberish
  patternUnits?: string
  'pointer-events'?: Numberish
  points?: string
  pointsAtX?: Numberish
  pointsAtY?: Numberish
  pointsAtZ?: Numberish
  preserveAlpha?: Numberish
  preserveAspectRatio?: string
  primitiveUnits?: Numberish
  r?: Numberish
  radius?: Numberish
  refX?: Numberish
  refY?: Numberish
  renderingIntent?: Numberish
  repeatCount?: Numberish
  repeatDur?: Numberish
  requiredExtensions?: Numberish
  requiredFeatures?: Numberish
  restart?: Numberish
  result?: string
  rotate?: Numberish
  rx?: Numberish
  ry?: Numberish
  scale?: Numberish
  seed?: Numberish
  'shape-rendering'?: Numberish
  slope?: Numberish
  spacing?: Numberish
  specularConstant?: Numberish
  specularExponent?: Numberish
  speed?: Numberish
  spreadMethod?: string
  startOffset?: Numberish
  stdDeviation?: Numberish
  stemh?: Numberish
  stemv?: Numberish
  stitchTiles?: Numberish
  'stop-color'?: string
  'stop-opacity'?: Numberish
  'strikethrough-position'?: Numberish
  'strikethrough-thickness'?: Numberish
  string?: Numberish
  stroke?: string
  'stroke-dasharray'?: Numberish
  'stroke-dashoffset'?: Numberish
  'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit'
  'stroke-linejoin'?: 'miter' | 'round' | 'bevel' | 'inherit'
  'stroke-miterlimit'?: Numberish
  'stroke-opacity'?: Numberish
  'stroke-width'?: Numberish
  surfaceScale?: Numberish
  systemLanguage?: Numberish
  tableValues?: Numberish
  targetX?: Numberish
  targetY?: Numberish
  'text-anchor'?: string
  'text-decoration'?: Numberish
  textLength?: Numberish
  'text-rendering'?: Numberish
  to?: Numberish
  transform?: string
  u1?: Numberish
  u2?: Numberish
  'underline-position'?: Numberish
  'underline-thickness'?: Numberish
  unicode?: Numberish
  'unicode-bidi'?: Numberish
  'unicode-range'?: Numberish
  'unitsPer-em'?: Numberish
  'v-alphabetic'?: Numberish
  values?: string
  'vector-effect'?: Numberish
  version?: string
  'vert-adv-y'?: Numberish
  'vert-origin-x'?: Numberish
  'vert-origin-y'?: Numberish
  'v-hanging'?: Numberish
  'v-ideographic'?: Numberish
  viewBox?: string
  viewTarget?: Numberish
  visibility?: Numberish
  'v-mathematical'?: Numberish
  widths?: Numberish
  'word-spacing'?: Numberish
  'writing-mode'?: Numberish
  x1?: Numberish
  x2?: Numberish
  x?: Numberish
  xChannelSelector?: string
  'x-height'?: Numberish
  xlinkActuate?: string
  xlinkArcrole?: string
  xlinkHref?: string
  xlinkRole?: string
  xlinkShow?: string
  xlinkTitle?: string
  xlinkType?: string
  xmlns?: string
  y1?: Numberish
  y2?: Numberish
  y?: Numberish
  yChannelSelector?: string
  z?: Numberish
  zoomAndPan?: string
}

interface IntrinsicElementAttributes {
  a: AnchorHTMLAttributes
  abbr: HTMLAttributes
  address: HTMLAttributes
  area: AreaHTMLAttributes
  article: HTMLAttributes
  aside: HTMLAttributes
  audio: AudioHTMLAttributes
  b: HTMLAttributes
  base: BaseHTMLAttributes
  bdi: HTMLAttributes
  bdo: HTMLAttributes
  blockquote: BlockquoteHTMLAttributes
  body: HTMLAttributes
  br: HTMLAttributes
  button: ButtonHTMLAttributes
  canvas: CanvasHTMLAttributes
  caption: HTMLAttributes
  cite: HTMLAttributes
  code: HTMLAttributes
  col: ColHTMLAttributes
  colgroup: ColgroupHTMLAttributes
  data: DataHTMLAttributes
  datalist: HTMLAttributes
  dd: HTMLAttributes
  del: DelHTMLAttributes
  details: DetailsHTMLAttributes
  dfn: HTMLAttributes
  dialog: DialogHTMLAttributes
  div: HTMLAttributes
  dl: HTMLAttributes
  dt: HTMLAttributes
  em: HTMLAttributes
  embed: EmbedHTMLAttributes
  fieldset: FieldsetHTMLAttributes
  figcaption: HTMLAttributes
  figure: HTMLAttributes
  footer: HTMLAttributes
  form: FormHTMLAttributes
  h1: HTMLAttributes
  h2: HTMLAttributes
  h3: HTMLAttributes
  h4: HTMLAttributes
  h5: HTMLAttributes
  h6: HTMLAttributes
  head: HTMLAttributes
  header: HTMLAttributes
  hgroup: HTMLAttributes
  hr: HTMLAttributes
  html: HtmlHTMLAttributes
  i: HTMLAttributes
  iframe: IframeHTMLAttributes
  img: ImgHTMLAttributes
  input: InputHTMLAttributes
  ins: InsHTMLAttributes
  kbd: HTMLAttributes
  keygen: KeygenHTMLAttributes
  label: LabelHTMLAttributes
  legend: HTMLAttributes
  li: LiHTMLAttributes
  link: LinkHTMLAttributes
  main: HTMLAttributes
  map: MapHTMLAttributes
  mark: HTMLAttributes
  menu: MenuHTMLAttributes
  meta: MetaHTMLAttributes
  meter: MeterHTMLAttributes
  nav: HTMLAttributes
  noindex: HTMLAttributes
  noscript: HTMLAttributes
  object: ObjectHTMLAttributes
  ol: OlHTMLAttributes
  optgroup: OptgroupHTMLAttributes
  option: OptionHTMLAttributes
  output: OutputHTMLAttributes
  p: HTMLAttributes
  param: ParamHTMLAttributes
  picture: HTMLAttributes
  pre: HTMLAttributes
  progress: ProgressHTMLAttributes
  q: QuoteHTMLAttributes
  rp: HTMLAttributes
  rt: HTMLAttributes
  ruby: HTMLAttributes
  s: HTMLAttributes
  samp: HTMLAttributes
  script: ScriptHTMLAttributes
  section: HTMLAttributes
  select: SelectHTMLAttributes
  small: HTMLAttributes
  source: SourceHTMLAttributes
  span: HTMLAttributes
  strong: HTMLAttributes
  style: StyleHTMLAttributes
  sub: HTMLAttributes
  summary: HTMLAttributes
  sup: HTMLAttributes
  table: TableHTMLAttributes
  template: HTMLAttributes
  tbody: HTMLAttributes
  td: TdHTMLAttributes
  textarea: TextareaHTMLAttributes
  tfoot: HTMLAttributes
  th: ThHTMLAttributes
  thead: HTMLAttributes
  time: TimeHTMLAttributes
  title: HTMLAttributes
  tr: HTMLAttributes
  track: TrackHTMLAttributes
  u: HTMLAttributes
  ul: HTMLAttributes
  var: HTMLAttributes
  video: VideoHTMLAttributes
  wbr: HTMLAttributes
  webview: WebViewHTMLAttributes

  // SVG
  svg: SVGAttributes

  animate: SVGAttributes
  animateMotion: SVGAttributes
  animateTransform: SVGAttributes
  circle: SVGAttributes
  clipPath: SVGAttributes
  defs: SVGAttributes
  desc: SVGAttributes
  ellipse: SVGAttributes
  feBlend: SVGAttributes
  feColorMatrix: SVGAttributes
  feComponentTransfer: SVGAttributes
  feComposite: SVGAttributes
  feConvolveMatrix: SVGAttributes
  feDiffuseLighting: SVGAttributes
  feDisplacementMap: SVGAttributes
  feDistantLight: SVGAttributes
  feDropShadow: SVGAttributes
  feFlood: SVGAttributes
  feFuncA: SVGAttributes
  feFuncB: SVGAttributes
  feFuncG: SVGAttributes
  feFuncR: SVGAttributes
  feGaussianBlur: SVGAttributes
  feImage: SVGAttributes
  feMerge: SVGAttributes
  feMergeNode: SVGAttributes
  feMorphology: SVGAttributes
  feOffset: SVGAttributes
  fePointLight: SVGAttributes
  feSpecularLighting: SVGAttributes
  feSpotLight: SVGAttributes
  feTile: SVGAttributes
  feTurbulence: SVGAttributes
  filter: SVGAttributes
  foreignObject: SVGAttributes
  g: SVGAttributes
  image: SVGAttributes
  line: SVGAttributes
  linearGradient: SVGAttributes
  marker: SVGAttributes
  mask: SVGAttributes
  metadata: SVGAttributes
  mpath: SVGAttributes
  path: SVGAttributes
  pattern: SVGAttributes
  polygon: SVGAttributes
  polyline: SVGAttributes
  radialGradient: SVGAttributes
  rect: SVGAttributes
  stop: SVGAttributes
  switch: SVGAttributes
  symbol: SVGAttributes
  text: SVGAttributes
  textPath: SVGAttributes
  tspan: SVGAttributes
  use: SVGAttributes
  view: SVGAttributes
}

export interface Events {
  // clipboard events
  onCopy: ClipboardEvent
  onCut: ClipboardEvent
  onPaste: ClipboardEvent

  // composition events
  onCompositionend: CompositionEvent
  onCompositionstart: CompositionEvent
  onCompositionupdate: CompositionEvent

  // drag drop events
  onDrag: DragEvent
  onDragend: DragEvent
  onDragenter: DragEvent
  onDragexit: DragEvent
  onDragleave: DragEvent
  onDragover: DragEvent
  onDragstart: DragEvent
  onDrop: DragEvent

  // focus events
  onFocus: FocusEvent
  onFocusin: FocusEvent
  onFocusout: FocusEvent
  onBlur: FocusEvent

  // form events
  onChange: Event
  onBeforeinput: Event
  onInput: Event
  onReset: Event
  onSubmit: Event
  onInvalid: Event

  // image events
  onLoad: Event
  onError: Event

  // keyboard events
  onKeydown: KeyboardEvent
  onKeypress: KeyboardEvent
  onKeyup: KeyboardEvent

  // mouse events
  onAuxclick: MouseEvent
  onClick: MouseEvent
  onContextmenu: MouseEvent
  onDblclick: MouseEvent
  onMousedown: MouseEvent
  onMouseenter: MouseEvent
  onMouseleave: MouseEvent
  onMousemove: MouseEvent
  onMouseout: MouseEvent
  onMouseover: MouseEvent
  onMouseup: MouseEvent

  // media events
  onAbort: Event
  onCanplay: Event
  onCanplaythrough: Event
  onDurationchange: Event
  onEmptied: Event
  onEncrypted: Event
  onEnded: Event
  onLoadeddata: Event
  onLoadedmetadata: Event
  onLoadstart: Event
  onPause: Event
  onPlay: Event
  onPlaying: Event
  onProgress: Event
  onRatechange: Event
  onSeeked: Event
  onSeeking: Event
  onStalled: Event
  onSuspend: Event
  onTimeupdate: Event
  onVolumechange: Event
  onWaiting: Event

  // selection events
  onSelect: Event

  // UI events
  onScroll: UIEvent

  // touch events
  onTouchcancel: TouchEvent
  onTouchend: TouchEvent
  onTouchmove: TouchEvent
  onTouchstart: TouchEvent

  // pointer events
  onPointerdown: PointerEvent
  onPointermove: PointerEvent
  onPointerup: PointerEvent
  onPointercancel: PointerEvent
  onPointerenter: PointerEvent
  onPointerleave: PointerEvent
  onPointerover: PointerEvent
  onPointerout: PointerEvent

  // wheel events
  onWheel: WheelEvent

  // animation events
  onAnimationstart: AnimationEvent
  onAnimationend: AnimationEvent
  onAnimationiteration: AnimationEvent

  // transition events
  onTransitionend: TransitionEvent
  onTransitionstart: TransitionEvent
}

type EventHandlers<E> = {
  [K in keyof E]?: E[K] extends Function ? E[K] : (payload: E[K]) => void
}

// use namespace import to avoid collision with generated types which use
// named imports.
import * as RuntimeCore from '@vue/runtime-core'

type ReservedProps = {
  key?: string | number | symbol
  ref?: RuntimeCore.VNodeRef
  ref_for?: boolean
  ref_key?: string
}

type ElementAttrs<T> = T & ReservedProps

type NativeElements = {
  [K in keyof IntrinsicElementAttributes]: ElementAttrs<
    IntrinsicElementAttributes[K]
  >
}

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass {
      $props: {}
    }
    interface ElementAttributesProperty {
      $props: {}
    }
    interface IntrinsicElements extends NativeElements {
      // allow arbitrary elements
      // @ts-ignore suppress ts:2374 = Duplicate string index signature.
      [name: string]: any
    }
    interface IntrinsicAttributes extends ReservedProps {}
  }
}

// suppress ts:2669
export {}

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.

declare module '@vue/reactivity' {
  export interface RefUnwrapBailTypes {
    runtimeDOMBailTypes: Node | Window
  }
}
`;let ye=!0,me;async function Ka(){const r=await H(()=>import("./editor.main.d83c2780.BuLJgFxN.js"),__vite__mapDeps([2,1])).then(e=>e.e);return ye&&typeof me=="function"&&(ye=!1,me(r)),r.languages.typescript.typescriptDefaults.setCompilerOptions({target:r.languages.typescript.ScriptTarget.Latest,allowNonTsExtensions:!0,moduleResolution:r.languages.typescript.ModuleResolutionKind.NodeJs,module:r.languages.typescript.ModuleKind.CommonJS,noEmit:!0,esModuleInterop:!0,jsx:r.languages.typescript.JsxEmit.Preserve,allowJs:!0}),r.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1}),r.languages.typescript.typescriptDefaults.addExtraLib(Ra,"jsx:type"),r.languages.typescript.typescriptDefaults.addExtraLib(`
    declare module 'vue' { ${Ua} }
  `,"ts:vue"),await Promise.all([(async()=>{const[{default:e},{default:n},{default:t}]=await Promise.all([H(()=>import("./editor.worker.9c35f395.DBCG97RU.js"),[]),H(()=>import("./html.worker.b57725c2.Cqm1ft0w.js"),[]),H(()=>import("./ts.worker.3260b66b.B6ognq5f.js"),[])]);window.MonacoEnvironment={getWorker(o,a){return a==="html"||a==="handlebars"||a==="razor"?new n:a==="typescript"||a==="javascript"?new t:new e}}})()]),r}function Ia(r){me=r||null}const La=Symbol(),z={};function Te(r,e){z[r]=e}function $a(r){const e=window;return e.importMaps||(e.importMaps=z),r=ka(r),r=r.replace(/import(.*?)from\s+['"](.*?)['"]/g,(n,t,o)=>{const a=o,d=z[a];return d?(z[`${a}`]||(z[`${a}`]=d),`const ${t} = importMaps['${o}']`):n}),r}function ka(r){return r.replace(/import(.*?)from\s+['"]vue['"]/g,(e,n)=>(n=n.replace(/\sas\s/g,":"),`const ${n} = _vue`)).replace(/import 'vue'/g,"")}const Wa=()=>Math.random().toString(36).slice(2,12),Ba=r=>typeof r=="object"&&r!==null,Ha=r=>function(e,n,t,...o){return Array.isArray(t)&&(t=t.map(a=>Array.isArray(a)?a:Ba(a)&&!a.__v_isVNode?r.createTextVNode(String(a)):a)),r.createVNode(e,n,t,...o)},Fa=function(r,e){e=Object.assign({ms:300,defaultDirection:"row"},e);const n=De(()=>H(()=>import("./Demo.10a78ca5.0b96OAV-.js"),__vite__mapDeps([3,1])));r.component("Demo",n),r.config.errorHandler=function(t){console.error(t)},Ga(Object.assign({},Ve,{createVNode:Ha(Ve)})),Aa(r),r.provide(La,e),Ia(e.onMonacoCreated)},wa=`// Generated by dts-bundle-generator v6.13.0

export declare class MxCanvas2Image {
	private $support;
	private downloadMime;
	private mydocument;
	constructor(in_document?: any);
	private scaleCanvas;
	private getDataURL;
	private saveFile;
	private genImage;
	private fixType;
	private encodeData;
	private getImageData;
	private makeURI;
	private genBitmapImage;
	/**
	 * saveAsImage
	 * @param canvasElement
	 * @param {String} image type
	 * @param {Number} [optional] png width
	 * @param {Number} [optional] png height
	 */
	saveAsImage(canvas: any, width: any, height: any, type: any): void;
	convertToImage(canvas: any, width: any, height: any, type: any): HTMLImageElement | undefined;
}
export type FileTypes = {
	description?: string;
	accept: {
		[type: string]: string[];
	};
}[];
/**
 *  文件下载保存（另存为只支持 Chrome86 或 Edge 86 以及 Opera 72）兼容 iE10等较低版本的浏览器
 */
export declare function saveAsFileDialog({ blob, filename, types }: {
	blob: Blob;
	filename?: string;
	types?: FileTypes;
}): Promise<false | (FileSystemFileHandle & {
	createWritable: () => Promise<WritableStreamDefaultWriter>;
}) | undefined>;
export declare namespace MdGe {
	enum MxShapeEnum {
		Enum_COMPOUND = 0,
		Enum_COMPSOLID = 1,
		Enum_SOLID = 2,
		Enum_SHELL = 3,
		Enum_FACE = 4,
		Enum_WIRE = 5,
		Enum_EDGE = 6,
		Enum_VERTEX = 7,
		Enum_SHAPE = 8
	}
	enum MxHorizontalTextAlignment {
		HTA_LEFT = 0,
		HTA_CENTER = 1,
		HTA_RIGHT = 2
	}
	enum MxVerticalTextAlignment {
		CVTA_BOTTOM = 0,
		CVTA_CENTER = 1,
		CVTA_TOP = 2,
		CVTA_TOPFIRSTLINE = 3
	}
	enum MxFontAspect {
		FA_UNDEFINED = -1,
		FA_Regular = 0,
		FA_Bold = 1,
		FA_Italic = 2,
		FA_BoldItalic = 3
	}
	enum MxTypeOfDisplayText {
		TODT_NORMAL = 0,
		TODT_SUBTITLE = 1,
		TODT_DEKALE = 2,
		TODT_BLEND = 3,
		TODT_DIMENSION = 4,
		TODT_SHADOW = 5
	}
	enum MxCF3dFilletShapeEnum {
		Enum_Rational = 0,
		Enum_QuasiAngular = 1,
		Enum_Polynomial = 2
	}
	enum MxCFDSChamfMode {
		Enum_ClassicChamfer = 0,
		Enum_ConstThroatChamfer = 1,
		Enum_ConstThroatWithPenetrationChamfer = 2
	}
	enum MxGFTrihedron {
		GF_IsCorrectedFrenet = 0,
		GF_IsFixed = 1,
		GF_IsFrenet = 2,
		GF_IsConstantNormal = 3,
		GF_IsDarboux = 4,
		GF_IsGuideAC = 5,
		GF_IsGuidePlan = 6,
		GF_IsGuideACWithContact = 7,
		GF_IsGuidePlanWithContact = 8,
		GF_IsDiscreteTrihedron = 9
	}
	enum MxGAShapeEnum {
		GA_C0 = 0,
		GA_G1 = 1,
		GA_C1 = 2,
		GA_G2 = 3,
		GA_C2 = 4,
		GA_C3 = 5,
		GA_CN = 6
	}
	enum MxOffsetModeEnum {
		Offset_Skin = 0,
		Offset_Pipe = 1,
		Offset_RectoVerso = 2
	}
	enum MxGAJoinTypeEnum {
		GA_Arc = 0,
		GA_Tangent = 1,
		GA_Intersection = 2
	}
	enum MxNameOfMaterial {
		Material_NOM_Brass = 0,
		Material_NOM_Bronze = 1,
		Material_NOM_Copper = 2,
		Material_NOM_Gold = 3,
		Material_NOM_Pewter = 4,
		Material_NOM_Plastered = 5,
		Material_NOM_Plastified = 6,
		Material_NOM_Silver = 7,
		Material_NOM_Steel = 8,
		Material_NOM_Stone = 9,
		Material_NOM_ShinyPlastified = 10,
		Material_NOM_Satin = 11,
		Material_NOM_Metalized = 12,
		Material_NOM_Ionized = 13,
		Material_NOM_Chrome = 14,
		Material_NOM_Aluminum = 15,
		Material_NOM_Obsidian = 16,
		Material_NOM_Neon = 17,
		Material_NOM_Jade = 18,
		Material_NOM_Charcoal = 19,
		Material_NOM_Water = 20,
		Material_NOM_Glass = 21,
		Material_NOM_Diamond = 22,
		Material_NOM_Transparent = 23,
		Material_NOM_DEFAULT = 24,
		Material_NOM_UserDefined = 25
	}
	enum MxTypeOfMaterial {
		Material_TOM_ASPECT = 0,
		Material_TOM_PHYSIC = 1
	}
	enum MxTypeOfReflection {
		Reflection_TOR_AMBIENT = 0,
		Reflection_TOR_DIFFUSE = 1,
		Reflection_TOR_SPECULAR = 2,
		Reflection_TOR_EMISSION = 3
	}
	enum MxNameOfColor {
		Color_NOC_BLACK = 0,
		Color_NOC_MATRABLUE = 1,
		Color_NOC_MATRAGRAY = 2,
		Color_NOC_ALICEBLUE = 3,
		Color_NOC_ANTIQUEWHITE = 4,
		Color_NOC_ANTIQUEWHITE1 = 5,
		Color_NOC_ANTIQUEWHITE2 = 6,
		Color_NOC_ANTIQUEWHITE3 = 7,
		Color_NOC_ANTIQUEWHITE4 = 8,
		Color_NOC_AQUAMARINE1 = 9,
		Color_NOC_AQUAMARINE2 = 10,
		Color_NOC_AQUAMARINE4 = 11,
		Color_NOC_AZURE = 12,
		Color_NOC_AZURE2 = 13,
		Color_NOC_AZURE3 = 14,
		Color_NOC_AZURE4 = 15,
		Color_NOC_BEIGE = 16,
		Color_NOC_BISQUE = 17,
		Color_NOC_BISQUE2 = 18,
		Color_NOC_BISQUE3 = 19,
		Color_NOC_BISQUE4 = 20,
		Color_NOC_BLANCHEDALMOND = 21,
		Color_NOC_BLUE = 22,
		Color_NOC_BLUE1 = 22,
		Color_NOC_BLUE2 = 23,
		Color_NOC_BLUE3 = 24,
		Color_NOC_BLUE4 = 25,
		Color_NOC_BLUEVIOLET = 26,
		Color_NOC_BROWN = 27,
		Color_NOC_BROWN1 = 28,
		Color_NOC_BROWN2 = 29,
		Color_NOC_BROWN3 = 30,
		Color_NOC_BROWN4 = 31,
		Color_NOC_BURLYWOOD = 32,
		Color_NOC_BURLYWOOD1 = 33,
		Color_NOC_BURLYWOOD2 = 34,
		Color_NOC_BURLYWOOD3 = 35,
		Color_NOC_BURLYWOOD4 = 36,
		Color_NOC_CADETBLUE = 37,
		Color_NOC_CADETBLUE1 = 38,
		Color_NOC_CADETBLUE2 = 39,
		Color_NOC_CADETBLUE3 = 40,
		Color_NOC_CADETBLUE4 = 41,
		Color_NOC_CHARTREUSE = 42,
		Color_NOC_CHARTREUSE1 = 42,
		Color_NOC_CHARTREUSE2 = 43,
		Color_NOC_CHARTREUSE3 = 44,
		Color_NOC_CHARTREUSE4 = 45,
		Color_NOC_CHOCOLATE = 46,
		Color_NOC_CHOCOLATE1 = 47,
		Color_NOC_CHOCOLATE2 = 48,
		Color_NOC_CHOCOLATE3 = 49,
		Color_NOC_CHOCOLATE4 = 50,
		Color_NOC_CORAL = 51,
		Color_NOC_CORAL1 = 52,
		Color_NOC_CORAL2 = 53,
		Color_NOC_CORAL3 = 54,
		Color_NOC_CORAL4 = 55,
		Color_NOC_CORNFLOWERBLUE = 56,
		Color_NOC_CORNSILK1 = 57,
		Color_NOC_CORNSILK2 = 58,
		Color_NOC_CORNSILK3 = 59,
		Color_NOC_CORNSILK4 = 60,
		Color_NOC_CYAN = 61,
		Color_NOC_CYAN1 = 61,
		Color_NOC_CYAN2 = 62,
		Color_NOC_CYAN3 = 63,
		Color_NOC_CYAN4 = 64,
		Color_NOC_DARKGOLDENROD = 65,
		Color_NOC_DARKGOLDENROD1 = 66,
		Color_NOC_DARKGOLDENROD2 = 67,
		Color_NOC_DARKGOLDENROD3 = 68,
		Color_NOC_DARKGOLDENROD4 = 69,
		Color_NOC_DARKGREEN = 70,
		Color_NOC_DARKKHAKI = 71,
		Color_NOC_DARKOLIVEGREEN = 72,
		Color_NOC_DARKOLIVEGREEN1 = 73,
		Color_NOC_DARKOLIVEGREEN2 = 74,
		Color_NOC_DARKOLIVEGREEN3 = 75,
		Color_NOC_DARKOLIVEGREEN4 = 76,
		Color_NOC_DARKORANGE = 77,
		Color_NOC_DARKORANGE1 = 78,
		Color_NOC_DARKORANGE2 = 79,
		Color_NOC_DARKORANGE3 = 80,
		Color_NOC_DARKORANGE4 = 81,
		Color_NOC_DARKORCHID = 82,
		Color_NOC_DARKORCHID1 = 83,
		Color_NOC_DARKORCHID2 = 84,
		Color_NOC_DARKORCHID3 = 85,
		Color_NOC_DARKORCHID4 = 86,
		Color_NOC_DARKSALMON = 87,
		Color_NOC_DARKSEAGREEN = 88,
		Color_NOC_DARKSEAGREEN1 = 89,
		Color_NOC_DARKSEAGREEN2 = 90,
		Color_NOC_DARKSEAGREEN3 = 91,
		Color_NOC_DARKSEAGREEN4 = 92,
		Color_NOC_DARKSLATEBLUE = 93,
		Color_NOC_DARKSLATEGRAY1 = 94,
		Color_NOC_DARKSLATEGRAY2 = 95,
		Color_NOC_DARKSLATEGRAY3 = 96,
		Color_NOC_DARKSLATEGRAY4 = 97,
		Color_NOC_DARKSLATEGRAY = 98,
		Color_NOC_DARKTURQUOISE = 99,
		Color_NOC_DARKVIOLET = 100,
		Color_NOC_DEEPPINK = 101,
		Color_NOC_DEEPPINK2 = 102,
		Color_NOC_DEEPPINK3 = 103,
		Color_NOC_DEEPPINK4 = 104,
		Color_NOC_DEEPSKYBLUE1 = 105,
		Color_NOC_DEEPSKYBLUE2 = 106,
		Color_NOC_DEEPSKYBLUE3 = 107,
		Color_NOC_DEEPSKYBLUE4 = 108,
		Color_NOC_DODGERBLUE1 = 109,
		Color_NOC_DODGERBLUE2 = 110,
		Color_NOC_DODGERBLUE3 = 111,
		Color_NOC_DODGERBLUE4 = 112,
		Color_NOC_FIREBRICK = 113,
		Color_NOC_FIREBRICK1 = 114,
		Color_NOC_FIREBRICK2 = 115,
		Color_NOC_FIREBRICK3 = 116,
		Color_NOC_FIREBRICK4 = 117,
		Color_NOC_FLORALWHITE = 118,
		Color_NOC_FORESTGREEN = 119,
		Color_NOC_GAINSBORO = 120,
		Color_NOC_GHOSTWHITE = 121,
		Color_NOC_GOLD = 122,
		Color_NOC_GOLD1 = 122,
		Color_NOC_GOLD2 = 123,
		Color_NOC_GOLD3 = 124,
		Color_NOC_GOLD4 = 125,
		Color_NOC_GOLDENROD = 126,
		Color_NOC_GOLDENROD1 = 127,
		Color_NOC_GOLDENROD2 = 128,
		Color_NOC_GOLDENROD3 = 129,
		Color_NOC_GOLDENROD4 = 130,
		Color_NOC_GRAY = 131,
		Color_NOC_GRAY0 = 132,
		Color_NOC_GRAY1 = 133,
		Color_NOC_GRAY2 = 134,
		Color_NOC_GRAY3 = 135,
		Color_NOC_GRAY4 = 136,
		Color_NOC_GRAY5 = 137,
		Color_NOC_GRAY6 = 138,
		Color_NOC_GRAY7 = 139,
		Color_NOC_GRAY8 = 140,
		Color_NOC_GRAY9 = 141,
		Color_NOC_GRAY10 = 142,
		Color_NOC_GRAY11 = 143,
		Color_NOC_GRAY12 = 144,
		Color_NOC_GRAY13 = 145,
		Color_NOC_GRAY14 = 146,
		Color_NOC_GRAY15 = 147,
		Color_NOC_GRAY16 = 148,
		Color_NOC_GRAY17 = 149,
		Color_NOC_GRAY18 = 150,
		Color_NOC_GRAY19 = 151,
		Color_NOC_GRAY20 = 152,
		Color_NOC_GRAY21 = 153,
		Color_NOC_GRAY22 = 154,
		Color_NOC_GRAY23 = 155,
		Color_NOC_GRAY24 = 156,
		Color_NOC_GRAY25 = 157,
		Color_NOC_GRAY26 = 158,
		Color_NOC_GRAY27 = 159,
		Color_NOC_GRAY28 = 160,
		Color_NOC_GRAY29 = 161,
		Color_NOC_GRAY30 = 162,
		Color_NOC_GRAY31 = 163,
		Color_NOC_GRAY32 = 164,
		Color_NOC_GRAY33 = 165,
		Color_NOC_GRAY34 = 166,
		Color_NOC_GRAY35 = 167,
		Color_NOC_GRAY36 = 168,
		Color_NOC_GRAY37 = 169,
		Color_NOC_GRAY38 = 170,
		Color_NOC_GRAY39 = 171,
		Color_NOC_GRAY40 = 172,
		Color_NOC_GRAY41 = 173,
		Color_NOC_GRAY42 = 174,
		Color_NOC_GRAY43 = 175,
		Color_NOC_GRAY44 = 176,
		Color_NOC_GRAY45 = 177,
		Color_NOC_GRAY46 = 178,
		Color_NOC_GRAY47 = 179,
		Color_NOC_GRAY48 = 180,
		Color_NOC_GRAY49 = 181,
		Color_NOC_GRAY50 = 182,
		Color_NOC_GRAY51 = 183,
		Color_NOC_GRAY52 = 184,
		Color_NOC_GRAY53 = 185,
		Color_NOC_GRAY54 = 186,
		Color_NOC_GRAY55 = 187,
		Color_NOC_GRAY56 = 188,
		Color_NOC_GRAY57 = 189,
		Color_NOC_GRAY58 = 190,
		Color_NOC_GRAY59 = 191,
		Color_NOC_GRAY60 = 192,
		Color_NOC_GRAY61 = 193,
		Color_NOC_GRAY62 = 194,
		Color_NOC_GRAY63 = 195,
		Color_NOC_GRAY64 = 196,
		Color_NOC_GRAY65 = 197,
		Color_NOC_GRAY66 = 198,
		Color_NOC_GRAY67 = 199,
		Color_NOC_GRAY68 = 200,
		Color_NOC_GRAY69 = 201,
		Color_NOC_GRAY70 = 202,
		Color_NOC_GRAY71 = 203,
		Color_NOC_GRAY72 = 204,
		Color_NOC_GRAY73 = 205,
		Color_NOC_GRAY74 = 206,
		Color_NOC_GRAY75 = 207,
		Color_NOC_GRAY76 = 208,
		Color_NOC_GRAY77 = 209,
		Color_NOC_GRAY78 = 210,
		Color_NOC_GRAY79 = 211,
		Color_NOC_GRAY80 = 212,
		Color_NOC_GRAY81 = 213,
		Color_NOC_GRAY82 = 214,
		Color_NOC_GRAY83 = 215,
		Color_NOC_GRAY85 = 216,
		Color_NOC_GRAY86 = 217,
		Color_NOC_GRAY87 = 218,
		Color_NOC_GRAY88 = 219,
		Color_NOC_GRAY89 = 220,
		Color_NOC_GRAY90 = 221,
		Color_NOC_GRAY91 = 222,
		Color_NOC_GRAY92 = 223,
		Color_NOC_GRAY93 = 224,
		Color_NOC_GRAY94 = 225,
		Color_NOC_GRAY95 = 226,
		Color_NOC_GRAY97 = 227,
		Color_NOC_GRAY98 = 228,
		Color_NOC_GRAY99 = 229,
		Color_NOC_GREEN = 230,
		Color_NOC_GREEN1 = 230,
		Color_NOC_GREEN2 = 231,
		Color_NOC_GREEN3 = 232,
		Color_NOC_GREEN4 = 233,
		Color_NOC_GREENYELLOW = 234,
		Color_NOC_HONEYDEW = 235,
		Color_NOC_HONEYDEW2 = 236,
		Color_NOC_HONEYDEW3 = 237,
		Color_NOC_HONEYDEW4 = 238,
		Color_NOC_HOTPINK = 239,
		Color_NOC_HOTPINK1 = 240,
		Color_NOC_HOTPINK2 = 241,
		Color_NOC_HOTPINK3 = 242,
		Color_NOC_HOTPINK4 = 243,
		Color_NOC_INDIANRED = 244,
		Color_NOC_INDIANRED1 = 245,
		Color_NOC_INDIANRED2 = 246,
		Color_NOC_INDIANRED3 = 247,
		Color_NOC_INDIANRED4 = 248,
		Color_NOC_IVORY = 249,
		Color_NOC_IVORY2 = 250,
		Color_NOC_IVORY3 = 251,
		Color_NOC_IVORY4 = 252,
		Color_NOC_KHAKI = 253,
		Color_NOC_KHAKI1 = 254,
		Color_NOC_KHAKI2 = 255,
		Color_NOC_KHAKI3 = 256,
		Color_NOC_KHAKI4 = 257,
		Color_NOC_LAVENDER = 258,
		Color_NOC_LAVENDERBLUSH1 = 259,
		Color_NOC_LAVENDERBLUSH2 = 260,
		Color_NOC_LAVENDERBLUSH3 = 261,
		Color_NOC_LAVENDERBLUSH4 = 262,
		Color_NOC_LAWNGREEN = 263,
		Color_NOC_LEMONCHIFFON1 = 264,
		Color_NOC_LEMONCHIFFON2 = 265,
		Color_NOC_LEMONCHIFFON3 = 266,
		Color_NOC_LEMONCHIFFON4 = 267,
		Color_NOC_LIGHTBLUE = 268,
		Color_NOC_LIGHTBLUE1 = 269,
		Color_NOC_LIGHTBLUE2 = 270,
		Color_NOC_LIGHTBLUE3 = 271,
		Color_NOC_LIGHTBLUE4 = 272,
		Color_NOC_LIGHTCORAL = 273,
		Color_NOC_LIGHTCYAN = 274,
		Color_NOC_LIGHTCYAN1 = 274,
		Color_NOC_LIGHTCYAN2 = 275,
		Color_NOC_LIGHTCYAN3 = 276,
		Color_NOC_LIGHTCYAN4 = 277,
		Color_NOC_LIGHTGOLDENROD = 278,
		Color_NOC_LIGHTGOLDENROD1 = 279,
		Color_NOC_LIGHTGOLDENROD2 = 280,
		Color_NOC_LIGHTGOLDENROD3 = 281,
		Color_NOC_LIGHTGOLDENROD4 = 282,
		Color_NOC_LIGHTGOLDENRODYELLOW = 283,
		Color_NOC_LIGHTGRAY = 284,
		Color_NOC_LIGHTPINK = 285,
		Color_NOC_LIGHTPINK1 = 286,
		Color_NOC_LIGHTPINK2 = 287,
		Color_NOC_LIGHTPINK3 = 288,
		Color_NOC_LIGHTPINK4 = 289,
		Color_NOC_LIGHTSALMON1 = 290,
		Color_NOC_LIGHTSALMON2 = 291,
		Color_NOC_LIGHTSALMON3 = 292,
		Color_NOC_LIGHTSALMON4 = 293,
		Color_NOC_LIGHTSEAGREEN = 294,
		Color_NOC_LIGHTSKYBLUE = 295,
		Color_NOC_LIGHTSKYBLUE1 = 296,
		Color_NOC_LIGHTSKYBLUE2 = 297,
		Color_NOC_LIGHTSKYBLUE3 = 298,
		Color_NOC_LIGHTSKYBLUE4 = 299,
		Color_NOC_LIGHTSLATEBLUE = 300,
		Color_NOC_LIGHTSLATEGRAY = 301,
		Color_NOC_LIGHTSTEELBLUE = 302,
		Color_NOC_LIGHTSTEELBLUE1 = 303,
		Color_NOC_LIGHTSTEELBLUE2 = 304,
		Color_NOC_LIGHTSTEELBLUE3 = 305,
		Color_NOC_LIGHTSTEELBLUE4 = 306,
		Color_NOC_LIGHTYELLOW = 307,
		Color_NOC_LIGHTYELLOW2 = 308,
		Color_NOC_LIGHTYELLOW3 = 309,
		Color_NOC_LIGHTYELLOW4 = 310,
		Color_NOC_LIMEGREEN = 311,
		Color_NOC_LINEN = 312,
		Color_NOC_MAGENTA = 313,
		Color_NOC_MAGENTA1 = 313,
		Color_NOC_MAGENTA2 = 314,
		Color_NOC_MAGENTA3 = 315,
		Color_NOC_MAGENTA4 = 316,
		Color_NOC_MAROON = 317,
		Color_NOC_MAROON1 = 318,
		Color_NOC_MAROON2 = 319,
		Color_NOC_MAROON3 = 320,
		Color_NOC_MAROON4 = 321,
		Color_NOC_MEDIUMAQUAMARINE = 322,
		Color_NOC_MEDIUMORCHID = 323,
		Color_NOC_MEDIUMORCHID1 = 324,
		Color_NOC_MEDIUMORCHID2 = 325,
		Color_NOC_MEDIUMORCHID3 = 326,
		Color_NOC_MEDIUMORCHID4 = 327,
		Color_NOC_MEDIUMPURPLE = 328,
		Color_NOC_MEDIUMPURPLE1 = 329,
		Color_NOC_MEDIUMPURPLE2 = 330,
		Color_NOC_MEDIUMPURPLE3 = 331,
		Color_NOC_MEDIUMPURPLE4 = 332,
		Color_NOC_MEDIUMSEAGREEN = 333,
		Color_NOC_MEDIUMSLATEBLUE = 334,
		Color_NOC_MEDIUMSPRINGGREEN = 335,
		Color_NOC_MEDIUMTURQUOISE = 336,
		Color_NOC_MEDIUMVIOLETRED = 337,
		Color_NOC_MIDNIGHTBLUE = 338,
		Color_NOC_MINTCREAM = 339,
		Color_NOC_MISTYROSE = 340,
		Color_NOC_MISTYROSE2 = 341,
		Color_NOC_MISTYROSE3 = 342,
		Color_NOC_MISTYROSE4 = 343,
		Color_NOC_MOCCASIN = 344,
		Color_NOC_NAVAJOWHITE1 = 345,
		Color_NOC_NAVAJOWHITE2 = 346,
		Color_NOC_NAVAJOWHITE3 = 347,
		Color_NOC_NAVAJOWHITE4 = 348,
		Color_NOC_NAVYBLUE = 349,
		Color_NOC_OLDLACE = 350,
		Color_NOC_OLIVEDRAB = 351,
		Color_NOC_OLIVEDRAB1 = 352,
		Color_NOC_OLIVEDRAB2 = 353,
		Color_NOC_OLIVEDRAB3 = 354,
		Color_NOC_OLIVEDRAB4 = 355,
		Color_NOC_ORANGE = 356,
		Color_NOC_ORANGE1 = 356,
		Color_NOC_ORANGE2 = 357,
		Color_NOC_ORANGE3 = 358,
		Color_NOC_ORANGE4 = 359,
		Color_NOC_ORANGERED = 360,
		Color_NOC_ORANGERED1 = 360,
		Color_NOC_ORANGERED2 = 361,
		Color_NOC_ORANGERED3 = 362,
		Color_NOC_ORANGERED4 = 363,
		Color_NOC_ORCHID = 364,
		Color_NOC_ORCHID1 = 365,
		Color_NOC_ORCHID2 = 366,
		Color_NOC_ORCHID3 = 367,
		Color_NOC_ORCHID4 = 368,
		Color_NOC_PALEGOLDENROD = 369,
		Color_NOC_PALEGREEN = 370,
		Color_NOC_PALEGREEN1 = 371,
		Color_NOC_PALEGREEN2 = 372,
		Color_NOC_PALEGREEN3 = 373,
		Color_NOC_PALEGREEN4 = 374,
		Color_NOC_PALETURQUOISE = 375,
		Color_NOC_PALETURQUOISE1 = 376,
		Color_NOC_PALETURQUOISE2 = 377,
		Color_NOC_PALETURQUOISE3 = 378,
		Color_NOC_PALETURQUOISE4 = 379,
		Color_NOC_PALEVIOLETRED = 380,
		Color_NOC_PALEVIOLETRED1 = 381,
		Color_NOC_PALEVIOLETRED2 = 382,
		Color_NOC_PALEVIOLETRED3 = 383,
		Color_NOC_PALEVIOLETRED4 = 384,
		Color_NOC_PAPAYAWHIP = 385,
		Color_NOC_PEACHPUFF = 386,
		Color_NOC_PEACHPUFF2 = 387,
		Color_NOC_PEACHPUFF3 = 388,
		Color_NOC_PEACHPUFF4 = 389,
		Color_NOC_PERU = 390,
		Color_NOC_PINK = 391,
		Color_NOC_PINK1 = 392,
		Color_NOC_PINK2 = 393,
		Color_NOC_PINK3 = 394,
		Color_NOC_PINK4 = 395,
		Color_NOC_PLUM = 396,
		Color_NOC_PLUM1 = 397,
		Color_NOC_PLUM2 = 398,
		Color_NOC_PLUM3 = 399,
		Color_NOC_PLUM4 = 400,
		Color_NOC_POWDERBLUE = 401,
		Color_NOC_PURPLE = 402,
		Color_NOC_PURPLE1 = 403,
		Color_NOC_PURPLE2 = 404,
		Color_NOC_PURPLE3 = 405,
		Color_NOC_PURPLE4 = 406,
		Color_NOC_RED = 407,
		Color_NOC_RED1 = 407,
		Color_NOC_RED2 = 408,
		Color_NOC_RED3 = 409,
		Color_NOC_RED4 = 410,
		Color_NOC_ROSYBROWN = 411,
		Color_NOC_ROSYBROWN1 = 412,
		Color_NOC_ROSYBROWN2 = 413,
		Color_NOC_ROSYBROWN3 = 414,
		Color_NOC_ROSYBROWN4 = 415,
		Color_NOC_ROYALBLUE = 416,
		Color_NOC_ROYALBLUE1 = 417,
		Color_NOC_ROYALBLUE2 = 418,
		Color_NOC_ROYALBLUE3 = 419,
		Color_NOC_ROYALBLUE4 = 420,
		Color_NOC_SADDLEBROWN = 421,
		Color_NOC_SALMON = 422,
		Color_NOC_SALMON1 = 423,
		Color_NOC_SALMON2 = 424,
		Color_NOC_SALMON3 = 425,
		Color_NOC_SALMON4 = 426,
		Color_NOC_SANDYBROWN = 427,
		Color_NOC_SEAGREEN = 428,
		Color_NOC_SEAGREEN1 = 429,
		Color_NOC_SEAGREEN2 = 430,
		Color_NOC_SEAGREEN3 = 431,
		Color_NOC_SEAGREEN4 = 432,
		Color_NOC_SEASHELL = 433,
		Color_NOC_SEASHELL2 = 434,
		Color_NOC_SEASHELL3 = 435,
		Color_NOC_SEASHELL4 = 436,
		Color_NOC_BEET = 437,
		Color_NOC_TEAL = 438,
		Color_NOC_SIENNA = 439,
		Color_NOC_SIENNA1 = 440,
		Color_NOC_SIENNA2 = 441,
		Color_NOC_SIENNA3 = 442,
		Color_NOC_SIENNA4 = 443,
		Color_NOC_SKYBLUE = 444,
		Color_NOC_SKYBLUE1 = 445,
		Color_NOC_SKYBLUE2 = 446,
		Color_NOC_SKYBLUE3 = 447,
		Color_NOC_SKYBLUE4 = 448,
		Color_NOC_SLATEBLUE = 449,
		Color_NOC_SLATEBLUE1 = 450,
		Color_NOC_SLATEBLUE2 = 451,
		Color_NOC_SLATEBLUE3 = 452,
		Color_NOC_SLATEBLUE4 = 453,
		Color_NOC_SLATEGRAY1 = 454,
		Color_NOC_SLATEGRAY2 = 455,
		Color_NOC_SLATEGRAY3 = 456,
		Color_NOC_SLATEGRAY4 = 457,
		Color_NOC_SLATEGRAY = 458,
		Color_NOC_SNOW = 459,
		Color_NOC_SNOW2 = 460,
		Color_NOC_SNOW3 = 461,
		Color_NOC_SNOW4 = 462,
		Color_NOC_SPRINGGREEN = 463,
		Color_NOC_SPRINGGREEN2 = 464,
		Color_NOC_SPRINGGREEN3 = 465,
		Color_NOC_SPRINGGREEN4 = 466,
		Color_NOC_STEELBLUE = 467,
		Color_NOC_STEELBLUE1 = 468,
		Color_NOC_STEELBLUE2 = 469,
		Color_NOC_STEELBLUE3 = 470,
		Color_NOC_STEELBLUE4 = 471,
		Color_NOC_TAN = 472,
		Color_NOC_TAN1 = 473,
		Color_NOC_TAN2 = 474,
		Color_NOC_TAN3 = 475,
		Color_NOC_TAN4 = 476,
		Color_NOC_THISTLE = 477,
		Color_NOC_THISTLE1 = 478,
		Color_NOC_THISTLE2 = 479,
		Color_NOC_THISTLE3 = 480,
		Color_NOC_THISTLE4 = 481,
		Color_NOC_TOMATO = 482,
		Color_NOC_TOMATO1 = 482,
		Color_NOC_TOMATO2 = 483,
		Color_NOC_TOMATO3 = 484,
		Color_NOC_TOMATO4 = 485,
		Color_NOC_TURQUOISE = 486,
		Color_NOC_TURQUOISE1 = 487,
		Color_NOC_TURQUOISE2 = 488,
		Color_NOC_TURQUOISE3 = 489,
		Color_NOC_TURQUOISE4 = 490,
		Color_NOC_VIOLET = 491,
		Color_NOC_VIOLETRED = 492,
		Color_NOC_VIOLETRED1 = 493,
		Color_NOC_VIOLETRED2 = 494,
		Color_NOC_VIOLETRED3 = 495,
		Color_NOC_VIOLETRED4 = 496,
		Color_NOC_WHEAT = 497,
		Color_NOC_WHEAT1 = 498,
		Color_NOC_WHEAT2 = 499,
		Color_NOC_WHEAT3 = 500,
		Color_NOC_WHEAT4 = 501,
		Color_NOC_WHITESMOKE = 502,
		Color_NOC_YELLOW = 503,
		Color_NOC_YELLOW1 = 503,
		Color_NOC_YELLOW2 = 504,
		Color_NOC_YELLOW3 = 505,
		Color_NOC_YELLOW4 = 506,
		Color_NOC_YELLOWGREEN = 507,
		Color_NOC_WHITE = 508
	}
	enum MxTypeOfColor {
		Color_TOC_RGB = 0,
		Color_TOC_sRGB = 1,
		Color_TOC_HLS = 2,
		Color_TOC_CIELab = 3,
		Color_TOC_CIELch = 4
	}
	enum MxDisplayMode {
		DM_WireFrame = 0,
		DM_Shaded = 1
	}
	enum MxTypeOfLightSource {
		LightSource_TOLS_AMBIENT = 0,
		LightSource_TOLS_DIRECTIONAL = 1,
		LightSource_TOLS_POSITIONAL = 2,
		LightSource_TOLS_SPOT = 3
	}
	enum MxCameraProjection {
		CProjection_Orthographic = 0,//正交投影
		CProjection_Perspective = 1,//透视投影
		CProjection_Stereo = 2,// 立体投影
		CProjection_MonoLeftEye = 3,
		CProjection_MonoRightEye = 4
	}
	enum MxV3dTypeOfOrientation {
		Orientation_Xpos = 0,//!< (+Y+Z) view
		Orientation_Ypos = 1,//!< (-X+Z) view
		Orientation_Zpos = 2,//!< (+X+Y) view
		Orientation_Xneg = 3,//!< (-Y+Z) view
		Orientation_Yneg = 4,//!< (+X+Z) view
		Orientation_Zneg = 5,//!< (+X-Y) view
		Orientation_XposYpos = 6,
		Orientation_XposZpos = 7,
		Orientation_YposZpos = 8,
		Orientation_XnegYneg = 9,
		Orientation_XnegYpos = 10,
		Orientation_XnegZneg = 11,
		Orientation_XnegZpos = 12,
		Orientation_YnegZneg = 13,
		Orientation_YnegZpos = 14,
		Orientation_XposYneg = 15,
		Orientation_XposZneg = 16,
		Orientation_YposZneg = 17,
		Orientation_XposYposZpos = 18,
		Orientation_XposYnegZpos = 19,
		Orientation_XposYposZneg = 20,
		Orientation_XnegYposZpos = 21,
		Orientation_XposYnegZneg = 22,
		Orientation_XnegYposZneg = 23,
		Orientation_XnegYnegZpos = 24,
		Orientation_XnegYnegZneg = 25,
		Orientation_TypeOfOrientation_Zup_AxoLeft = 24,//!< +Z-up +Y-forward Left +Front+Top
		Orientation_TypeOfOrientation_Zup_AxoRight = 19,//!< +Z-up +Y-forward Right+Front+Top
		Orientation_TypeOfOrientation_Zup_Front = 4,//!< +Z-up +Y-forward Front  (+X+Z) view
		Orientation_TypeOfOrientation_Zup_Back = 1,//!< +Z-up +Y-forward Back   (-X+Z) view
		Orientation_TypeOfOrientation_Zup_Top = 2,//!< +Z-up +Y-forward Top    (+X+Y) view
		Orientation_TypeOfOrientation_Zup_Bottom = 5,//!< +Z-up +Y-forward Bottom (+X-Y) view
		Orientation_TypeOfOrientation_Zup_Left = 3,//!< +Z-up +Y-forward Left   (-Y+Z) view
		Orientation_TypeOfOrientation_Zup_Right = 0,//!< +Z-up +Y-forward Right  (+Y+Z) view
		Orientation_TypeOfOrientation_Yup_AxoLeft = 21,//!< +Y-up -Z-forward Left +Front+Top
		Orientation_TypeOfOrientation_Yup_AxoRight = 18,//!< +Y-up -Z-forward Right+Front+Top
		Orientation_TypeOfOrientation_Yup_Front = 2,//!< +Y-up -Z-forward Front  (+X+Y) view
		Orientation_TypeOfOrientation_Yup_Back = 5,//!< +Y-up -Z-forward Back   (-X+Y) view
		Orientation_TypeOfOrientation_Yup_Top = 1,//!< +Y-up -Z-forward Top    (+X-Z) view
		Orientation_TypeOfOrientation_Yup_Bottom = 4,//!< +Y-up -Z-forward Bottom (-X-Z) view
		Orientation_TypeOfOrientation_Yup_Left = 0,//!< +Y-up -Z-forward Left   (-Z+Y) view
		Orientation_TypeOfOrientation_Yup_Right = 3
	}
	enum MxTypeOfAngle {
		Angle_TypeOfAngle_Interior = 0,
		Angle_TypeOfAngle_Exterior = 1
	}
	enum MxTypeOfAngleArrowVisibility {
		Visibility_TOAAV_Both = 0,
		Visibility_TOAAV_First = 1,
		Visibility_TOAAV_Second = 2,
		Visibility_TOAAV_None = 3
	}
	enum MxTypeOfLine {
		Line_TOL_EMPTY = -1,//!< hidden
		Line_TOL_SOLID = 0,//!< continuous
		Line_TOL_DASH = 1,//!< dashed 2.0,1.0 (MM)
		Line_TOL_DOT = 2,//!< dotted 0.2,0.5 (MM)
		Line_TOL_DOTDASH = 3,//!< mixed  10.0,1.0,2.0,1.0 (MM)
		Line_TOL_USERDEFINED = 4
	}
	enum MxTextPath {
		TextPath_TP_UP = 0,
		TextPath_TP_DOWN = 1,
		TextPath_TP_LEFT = 2,
		TextPath_TP_RIGHT = 3
	}
	enum MxDimensionArrowOrientation {
		DimensionArrowOrientation_DAO_Internal = 0,
		DimensionArrowOrientation_DAO_External = 1,
		DimensionArrowOrientation_DAO_Fit = 2
	}
	enum MxDimensionTextVerticalPosition {
		DimensionTextVerticalPosition_DTVP_Above = 0,
		DimensionTextVerticalPosition_DTVP_Below = 1,
		DimensionTextVerticalPosition_DTVP_Center = 2
	}
	enum MxDimensionTextHorizontalPosition {
		DimensionTextHorizontalPosition_DTHP_Left = 0,
		DimensionTextHorizontalPosition_DTHP_Right = 1,
		DimensionTextHorizontalPosition_DTHP_Center = 2,
		DimensionTextHorizontalPosition_DTHP_Fit = 3
	}
	enum MxKindOfDimension {
		KindOfDimension_KOD_NONE = 0,
		KindOfDimension_KOD_LENGTH = 1,
		KindOfDimension_KOD_PLANEANGLE = 2,
		KindOfDimension_KOD_SOLIDANGLE = 3,
		KindOfDimension_KOD_AREA = 4,
		KindOfDimension_KOD_VOLUME = 5,
		KindOfDimension_KOD_MASS = 6,
		KindOfDimension_KOD_TIME = 7,
		KindOfDimension_KOD_RADIUS = 8,
		KindOfDimension_KOD_DIAMETER = 9,
		KindOfDimension_KOD_CHAMF2D = 10,
		KindOfDimension_KOD_CHAMF3D = 11,
		KindOfDimension_KOD_OFFSET = 12,
		KindOfDimension_KOD_ELLIPSERADIUS = 13
	}
	enum MxDocColorType {
		DocColor_ColorGen = 0,
		DocColor_ColorSurf = 1,
		DocColor_ColorCurv = 2
	}
	enum MxKindOfInteractive {
		KindOfInteractive_None = 0,
		KindOfInteractive_Datum = 1,
		KindOfInteractive_Shape = 2,
		KindOfInteractive_Object = 3,
		KindOfInteractive_Relation = 4,
		KindOfInteractive_Dimension = 5,
		KindOfInteractive_LightSource = 6,
		KOI_None = 0,
		KOI_Datum = 1,
		KOI_Shape = 2,
		KOI_Object = 3,
		KOI_Relation = 4,
		KOI_Dimension = 5
	}
	enum MxPrs3dTypeOfHLR {
		TOH_NotSet = 0,
		TOH_PolyAlgo = 1,
		TOH_Algo = 2
	}
	enum MxDisplayStatus {
		DisplayStatus_Displayed = 0,
		DisplayStatus_Erased = 1,
		DisplayStatus_None = 2,
		DS_Displayed = 0,
		DS_Erased = 1,
		DS_None = 2
	}
	enum MxGlobalDisplayMode {
		DisplayMode_Wireframe = 0,
		DisplayMode_HiddenLineRemoval = 1,
		DisplayMode_Shaded = 2,
		DisplayMode_ShadedWithFaceBoundary = 3,
		DisplayMode_Transparency = 4
	}
	enum MxGradientFillMethod {
		GradientFillMethod_None = 0,//!< fill method not specified
		GradientFillMethod_Horizontal = 1,//!< gradient directed from left (Color1) to right (Color2)
		GradientFillMethod_Vertical = 2,//!< gradient directed from top (Color1) to bottom (Color2)
		GradientFillMethod_Diagonal1 = 3,//!< gradient directed from upper left corner (Color1) to lower right (Color2)
		GradientFillMethod_Diagonal2 = 4,//!< gradient directed from upper right corner (Color1) to lower left (Color2)
		GradientFillMethod_Corner1 = 5,//!< highlights upper left corner with Color1
		GradientFillMethod_Corner2 = 6,//!< highlights upper right corner with Color1
		GradientFillMethod_Corner3 = 7,//!< highlights lower right corner with Color1
		GradientFillMethod_Corner4 = 8,//!< highlights lower left corner with Color1
		GradientFillMethod_Elliptical = 9,//!< gradient directed from center (Color1) in all directions forming an elliptic shape (Color2)
		GFM_NONE = 0,
		GFM_HOR = 1,
		GFM_VER = 2,
		GFM_DIAG1 = 3,
		GFM_DIAG2 = 4,
		GFM_CORNER1 = 5,
		GFM_CORNER2 = 6,
		GFM_CORNER3 = 7,
		GFM_CORNER4 = 8
	}
	enum MxFormat {
		Format_Unknown = 0,
		Format_Image = 1,
		Format_3DS = 2,
		Format_3MF = 3,
		Format_AMF = 4,
		Format_COLLADA = 5,
		Format_DXF = 6,
		Format_FBX = 7,
		Format_GLTF = 8,
		Format_IGES = 9,
		Format_OBJ = 10,
		Format_OCCBREP = 11,
		Format_OFF = 12,
		Format_PLY = 13,
		Format_STEP = 14,
		Format_STL = 15,
		Format_VRML = 16,
		Format_X3D = 17,
		Format_Blender = 18
	}
	enum MxQuantAspect {
		Quant_Length = 0,
		Quant_Area = 1,
		Quant_Volume = 2
	}
	enum MxOrientation {
		Orientation_FORWARD = 0,
		Orientation_REVERSED = 1,
		Orientation_INTERNAL = 2,
		Orientation_EXTERNAL = 3
	}
	enum MxTransitionMode {
		Mx_Transformed = 0,
		Mx_RightCorner = 1,
		Mx_RoundCorner = 2
	}
}
export type EventType = string | symbol;
export type PubSubEvent = Record<EventType, (...ages: any) => any>;
declare class PubSub<Events extends PubSubEvent = PubSubEvent> {
	events: {
		[x: EventType]: Events[keyof Events][];
	};
	constructor();
	/**
	 * 订阅
	 * @param event 事件名称
	 * @param callback 事件回调
	 */
	on<Key extends keyof Events>(event: Key, callback: Events[keyof Events]): void;
	/**
	 * 订阅一次
	 * @param event 事件名称
	 * @param callback 事件回调
	 */
	once<Key extends keyof Events>(event: Key, callback: Events[keyof Events]): void;
	/**
	 * 发布
	 * @param event 事件名称
	 * @param data 载荷
	 */
	emit<Key extends keyof Events>(event: Key | number, ...data: Parameters<Events[Key]>): void;
	/**
	 * 销毁事件
	 * @param event 事件名称
	 * @param callback 事件方法
	 */
	off<Key extends keyof Events>(event: Key, callback?: Events[keyof Events]): void;
}
declare class MxApp3DType extends PubSub<{
	eventModesSelected: (ids: number[]) => void;
	eventAddToTree: (node: string) => void;
	eventRemoveFromTree: (ids: number[]) => void;
	eventFileSave: (fileName: string) => void;
	eventRebuildTree: (tree_str: string) => void;
	eventUpdatePointer: (pointer: number[]) => void;
	eventUpdateViewSize: (pointer: number[]) => void;
	eventUpdateAttribute: (attrStr: string) => void;
}> {
	/**
	 * @internal
	 */
	init(imp: any): void;
	/**
	 * @internal
	 */
	imp?: any;
	/**
	 * @internal
	 */
	cpp_app: any;
	/**
	 * @internal
	 */
	tool: any;
	/**
	 * @internal
	 */
	globalMethods: any;
	/**
	 * 为当前应用程序创建一个视图
	 * @param theCanvasSelector canvas的CSS选择器字符串
	 * @returns 返回一个视图对象
	 */
	createView(theCanvasSelector: string): Mx3dView;
	/**
	 * 获取当前视图对象
	 * @returns 返回当前的视图对象
	 */
	getCurrentActiveView(): Mx3dView;
}
/**
 * 全局应用程序单实例
 */
export declare const MxApp3D: MxApp3DType;
export interface MxCAD3DConfig {
	[x: string]: any;
	canvas: string | HTMLCanvasElement;
	/** canvas最小宽度 默认300 */
	minWidth?: number;
	/** canvas最小高度 默认300 */
	minHeight?: number;
	/** 指定更新Canvas大小的函数，不指定则默认自动处理(指定该函数则 minHeight, minWidth无效) */
	updateCanvasSize?: () => void;
	locateFile?: (fileName: string, base?: string | URL) => string;
}
/**
 * 文档视图对象
 * 一个文档视图对象对应一个Canvas视图和一个文档
 */
export declare class MxCAD3DObject {
	/**
	 * @internal
	 */
	private event;
	/**
	 * @internal
	 */
	private imp;
	/**
	 * @internal
	 */
	private canvas;
	/**
	 * @internal
	 */
	private ctx;
	/**
	 * @internal
	 */
	private updateCanvasSizeFun;
	constructor();
	/**
	 * 获取当前文档视图对象的文档
	 * @returns 返回文档对象
	 */
	getDocument(): Mx3dDbDocument;
	/**
	 * 移除所有
	 * @param theUpdateView 移除后是否立即更新视图
	 */
	removeAll(theUpdateView?: boolean): void;
	/**
	 * 移除选中
	 */
	removeSelected(): void;
	/**
	 * 更新显示
	 * @param isUpAllData 是否更新所有数据
	 * @param isRemoveAll 是否首先移除所有数据
	 */
	update(isUpAllData?: boolean, isRemoveAll?: boolean): void;
	/**
	 * 设置视图投影模式
	 * @param theProjection 投影模式
	 */
	setProjectionType(theProjection: MdGe.MxCameraProjection): void;
	/**
	 * 显示中心坐标轴
	 * @param theToShow true显示，false不显示
	 */
	showCenterTrihedron(theToShow: boolean): void;
	/**
	 * 视图中的所有对象缩放至适应整个视图
	 * @param theAuto 自动缩放
	 */
	fitAllObjects(theAuto: boolean): void;
	/**
	 * 开启/关闭X轴剖切面
	 * @param theToEnabled 是否开启X轴剖切面
	 */
	enableXClipPlane(theToEnabled: boolean): void;
	/**
	 * 设置X轴剖切面的位置
	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
	 */
	setXClipPlaneXPosition(thePosition: number): void;
	/**
	 * 翻转X轴剖切面
	 */
	setXClipPlaneReverse(): void;
	/**
	 * 开启/关闭Y轴剖切面
	 * @param theToEnabled 是否开启Y轴剖切面
	 */
	enableYClipPlane(theToEnabled: boolean): void;
	/**
	 * 设置Y轴剖切面的位置
	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
	 */
	setYClipPlaneYPosition(thePosition: number): void;
	/**
	 * 翻转Y轴剖切面
	 */
	setYClipPlaneReverse(): void;
	/**
	 * 开启/关闭Z轴剖切面
	 * @param theToEnabled 是否开启Z轴剖切面
	 */
	enableZClipPlane(theToEnabled: boolean): void;
	/**
	 * 设置Z轴剖切面的位置
	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
	 */
	setZClipPlaneZPosition(thePosition: number): void;
	/**
	 * 翻转Z轴剖切面
	 */
	setZClipPlaneReverse(): void;
	/**
	 * 开启/关闭用户自定义剖切面
	 * @param theToEnabled 是否开启用户自定义剖切面
	 */
	enableCustomClipPlane(theToEnabled: boolean): void;
	/**
	 * 设置用户自定义剖切面的位置
	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
	 */
	setCustomClipPlanePosition(thePosition: number): void;
	/**
	 * 翻转用户自定义剖切面
	 */
	setCustomClipPlaneReverse(): void;
	/**
	 * 设置用户自定义剖切面的法向
	 * @param x 法向的x分量
	 * @param y 法向的y分量
	 * @param z 法向的z分量
	 */
	setCustomClipPlaneDirection(x: number, y: number, z: number): void;
	/**
	 * 显示文字符号
	 * @param theSymbol 文字符号对象
	 */
	displaySymbolText(theSymbol: Mx3dSymbolText): void;
	/**
	 * 显示标注符号
	 * @param theDimension 标注符号对象
	 */
	displayDimension(theDimension: Mx3dDimObject): void;
	/**
	 * 为当前选中对象设置纹理贴图
	 * @param theFileName 图片在文件系统中的完整路径
	 */
	addModelTexture(theFileName: string): void;
	/**
	 * 移除当前选择对象的纹理贴图
	 */
	removeModelTexture(): void;
	/**
	 * 设置渐变背景色
	 * @param theColor1 颜色对象1
	 * @param theColor2 颜色对象2
	 * @param theMethod 渐变方式
	 */
	setGradientBgColor(theColor1: Mx3dGeColor, theColor2: Mx3dGeColor, theMethod: MdGe.MxGradientFillMethod): void;
	/**
	 * 设置视图方向
	 * @param theOrientation 视图方向
	 * @param theIsYup 是否Y轴向上
	 */
	setProj(theOrientation: MdGe.MxV3dTypeOfOrientation, theIsYup: boolean): void;
	/**
	 * 设置当前选中对象的颜色
	 * @param color 颜色
	 */
	setSelectedColor(color: Mx3dGeColor): void;
	/**
	 * 设置选中对象的材质
	 * @param material 材质
	 */
	setSelectedMaterial(material: Mx3dGeMaterial): void;
	/**
	 * 设置当前的显示模式
	 * @param theMode 显示模式
	 */
	setDisplayMode(theMode: MdGe.MxGlobalDisplayMode): void;
	enableDirLightSrc(theToEnabled: boolean): void;
	setCubemapBackground(theRight: string, theLeft: string, theTop: string, theBottom: string, theFront: string, theBack: string): void;
	setManipulatorEnabled(isEnabled: boolean): void;
	getImp(): any;
	getCtx(): any;
	updateCanvasSize(): void;
	init(imp: any): void;
	on(name: "init", fun: () => void): void;
	off(name: string, fun?: Function): void;
	callEvent(sEventName: string, param?: any): boolean;
	/**
	 * 初始化当前文档视图对象
	 * @param config 初始化需要的相关配置，canvas可以是选择器字符串，也可以是canvas对象
	 */
	create(config: MxCAD3DConfig): void;
}
export type Vector = [
	theX: number,
	theY: number,
	theZ: number
];
/**
 * 点和数组的联合类型
 */
export type UniPoint = Mx3dGePoint | Vector;
/**
 * 方向向量和数组的联合类型
 */
export type UniDir = Mx3dGeDir | Vector;
/**
 * 向量和数组的联合类型
 */
export type UniVec = Mx3dGeVec | Vector;
/**
 * 应用程序类，全局单实例
 */
export declare class Mx3dApplication {
	/**
	 * @internal
	 */
	protected imp: any;
	/**
	 * @internal
	 */
	constructor();
	/**
	 * 为当前应用程序创建一个视图
	 * @param theCanvasSelector canvas的CSS选择器字符串
	 * @returns 返回一个视图对象
	 */
	createView(theCanvasSelector: string): Mx3dView;
	/**
	 * 获取当前视图对象
	 * @returns 返回当前的视图对象
	 */
	getCurrentActiveView(): Mx3dView;
}
/**
 * 管理对象生命周期的基类
 */
export declare class Mx3dBaseObject {
	/**
	 * @internal
	 */
	protected imp: any;
	/**
	 * @internal
	 */
	constructor(imp?: any);
	/**
	 * @internal
	 */
	getImp(): any;
	/**
	 * @internal
	 */
	protected initTempObject(imp: any): void;
}
/**
 * 尺寸标注的基类
 */
export declare class Mx3dDimObject extends Mx3dBaseObject {
	/**
	 * @internal
	 */
	constructor(p?: object);
}
/**
 * 符号的基类
 */
export declare class Mx3dSymbolObject extends Mx3dBaseObject {
	/**
	 * @internal
	 */
	constructor(p?: object);
}
/**
 * 模型算法的基类
 */
export declare class Mx3dAlgoObject extends Mx3dBaseObject {
	/**
	 * @internal
	 */
	constructor(p?: object);
}
/**
 * 样式基类
 */
export declare class Mx3dAspectObject extends Mx3dBaseObject {
	/**
	 * @internal
	 */
	constructor(p?: object);
}
/**
 * 数学几何基类
 */
export declare class Mx3dGeObject extends Mx3dBaseObject {
	/**
	 * @internal
	 */
	constructor(p?: object);
}
/**
 * 曲线基类
 */
export declare class Mx3dGeCurve extends Mx3dGeObject {
	/**
	 * @internal
	 */
	constructor(p?: object);
}
/**
 * 圆锥曲线基类
 */
export declare class Mx3dGeConic extends Mx3dGeCurve {
	/**
	 * @internal
	 */
	constructor(p?: object);
}
/**
 * 表示三维空间中的一个点。
 *
 * 提供构造函数以及获取和设置点的坐标的方法。
 */
export declare class Mx3dGePoint extends Mx3dGeObject {
	/**
	 * 默认构造一个位于原点 (0, 0, 0) 的点。
	 */
	constructor();
	/**
	 * 使用给定的坐标数组构造一个点。
	 *
	 * @param theXYZ - 包含X, Y, Z坐标值的数组。
	 */
	constructor(theXYZ: Vector);
	/**
	 * 使用给定的X, Y, Z坐标值构造一个点。
	 *
	 * @param theX - X坐标值。
	 * @param theY - Y坐标值。
	 * @param theZ - Z坐标值。
	 */
	constructor(theX: number, theY: number, theZ: number);
	/**
	 * 获取点在世界坐标系下的X坐标值
	 * @returns X坐标值
	 */
	X(): number;
	/**
	 * 获取点在世界坐标系下的Y坐标值
	 * @returns Y坐标值
	 */
	Y(): number;
	/**
	 * 获取点在世界坐标系下的Z坐标值
	 * @returns Z坐标值
	 */
	Z(): number;
	/**
	 * 设置点在世界坐标系下的X坐标值
	 * @param theX X坐标值
	 */
	setX(theX: number): void;
	/**
	 * 设置点在世界坐标系下的Y坐标值
	 * @param theY Y坐标值
	 */
	setY(theY: number): void;
	/**
	 * 设置点在世界坐标系下的Z坐标值
	 * @param theZ Z坐标值
	 */
	setZ(theZ: number): void;
	/**
	 * 设置点在世界坐标系下的X,Y,Z坐标值
	 * @param theX X坐标值
	 * @param theY Y坐标值
	 * @param theZ Z坐标值
	 */
	setXYZ(theX: number, theY: number, theZ: number): void;
	/**
	 * 获取当前点的拓扑点形状
	 * @returns 拓扑点形状
	 */
	Vertex(): Mx3dShapeVertex;
}
/**
 * 表示几何变换
 */
export declare class Mx3dGeTrsf extends Mx3dGeObject {
	constructor();
	/**
	 * 设置按照点镜像变换
	 * @param point 镜像点
	 */
	SetMirrorByPoint(point: UniPoint): void;
	/**
	 * 设置按照轴镜像变换
	 * @param axis 镜像轴
	 */
	SetMirrorByAxis(axis: Mx3dGeAxis): void;
	/**
	 * 设置按照坐标系镜像变换，镜像平面是坐标系的XOY平面
	 * @param csysr 镜像坐标系
	 */
	SetMirrorByCSYSR(csysr: Mx3dGeCSYSR): void;
	/**
	 * 设置按照轴旋转一定角度的变换
	 * @param axis 旋转轴
	 * @param ang 旋转角度
	 */
	SetRotation(axis: Mx3dGeAxis, ang: number): void;
	/**
	 * 设置按照点，以一定的比例进行缩放变换
	 * @param point 缩放点
	 * @param s 缩放比例
	 */
	SetScale(point: UniPoint, s: number): void;
	/**
	 * 设置按照向量进行平移变换，移动的方向和距离分别是向量的方向和模长
	 * @param vec 向量
	 */
	SetTranslationByVec(vec: UniVec): void;
	/**
	 * 设置按照起点减去终点构成的向量的平移变换
	 * @param point1 起点
	 * @param point2 终点
	 */
	SetTranslationBy2Points(point1: UniPoint, point2: UniPoint): void;
	/**
	 * 单独设置按照向量的平移变换
	 * @param vec 向量
	 */
	SetTranslationPart(vec: Mx3dGeVec): void;
	/**
	 * 设置缩放比例
	 * @param s 缩放比例
	 */
	SetScaleFactor(s: number): void;
	/**
	 * 设置除了平移变换的仿射变换矩阵
	 * @param a11 第1行第1列
	 * @param a12 第1行第2列
	 * @param a13 第1行第3列
	 * @param a14 第1行第4列
	 * @param a21 第2行第1列
	 * @param a22 第2行第2列
	 * @param a23 第2行第3列
	 * @param a24 第2行第4列
	 * @param a31 第3行第1列
	 * @param a32 第3行第2列
	 * @param a33 第3行第3列
	 * @param a34 第3行第4列
	 */
	SetValues(a11: number, a12: number, a13: number, a14: number, a21: number, a22: number, a23: number, a24: number, a31: number, a32: number, a33: number, a34: number): void;
	/**
	 * 判断此变换矩阵的行列式是否为负
	 * @returns 是否为负
	 */
	IsNegative(): boolean;
	/**
	 * 获取变换的缩放比例
	 * @returns 缩放比例
	 */
	ScaleFactor(): number;
	/**
	 * 获取变换矩阵中指定行列的元素值
	 * @param row 行
	 * @param col 列
	 * @returns 元素值
	 */
	Value(row: number, col: number): number;
	/**
	 * 将变换矩阵转置
	 */
	Invert(): void;
	/**
	 * 获取变换矩阵转置后的矩阵
	 * @returns 转置矩阵
	 */
	Inverted(): Mx3dGeTrsf;
	/**
	 * 获取矩阵相乘之后的结果，[res] = [me] * t，[res]代表结果，[me]代表自身，t是另外的变换矩阵
	 * @param t 另一个变换矩阵
	 * @returns 矩阵相乘后的结果
	 */
	Multiplied(t: Mx3dGeTrsf): Mx3dGeTrsf;
	/**
	 * 自身乘以另外一个变换矩阵，[me] = [me] * t，[me]代表自身，t是另外的变换矩阵
	 * @param t 另一个变换矩阵
	 */
	Multiply(t: Mx3dGeTrsf): void;
	/**
	 * 另外一个变换矩阵乘以自身，[me] = t * [me]，[me]代表自身，t是另外的变换矩阵
	 * @param t 另一个变换矩阵
	 */
	PreMultiply(t: Mx3dGeTrsf): void;
	/**
	 * 自身n幂次方运算，[me] * [me] * .......* [me]，[me]代表自身，乘以n次
	 * @param n 次数
	 */
	Power(n: number): void;
	/**
	 * 获取当前变换矩阵n次幂方运算后的结果，[res] = [me] * [me] * .......* [me]，[res]代表结果，[me]代表自身，n个[me]相乘
	 * @param n 次数
	 * @returns n幂次方的结果
	 */
	Powered(n: number): Mx3dGeTrsf;
	/**
	 * 对一个点用当前变换矩阵进行变换，参数是引用的，会被函数修改
	 * @param x
	 * @param y
	 * @param z
	 */
	Transforms(x: number, y: number, z: number): void;
}
/**
 * 表示一个轴
 */
export declare class Mx3dGeAxis extends Mx3dGeObject {
	/**
	 * 默认构造
	 */
	constructor();
	/**
	 * 构造函数
	 * @param theLoc 轴的原点
	 * @param theDir 轴的方向
	 */
	constructor(theLoc: UniPoint, theDir: UniDir);
	/**
	 * 获取轴的方向
	 * @returns 方向
	 */
	Direction(): Mx3dGeDir;
	/**
	 * 获取轴的原点
	 * @returns 原点
	 */
	Location(): Mx3dGePoint;
	/**
	 * 设置轴的方向
	 * @param theDir 方向
	 */
	SetDirection(theDir: Mx3dGeDir): void;
	/**
	 * 设置轴的原点
	 * @param theLoc 原点
	 */
	SetLocation(theLoc: UniPoint): void;
}
/**
 * 表示方向的向量，模长始终为1
 */
export declare class Mx3dGeDir extends Mx3dGeObject {
	/**
	 * 构造函数
	 */
	constructor();
	/**
	 * 构造函数
	 * @param theXv X方向
	 * @param theYv Y方向
	 * @param theZv Z方向
	 */
	constructor(theXv: number, theYv: number, theZv: number);
	/**
	 * 获取X方向的大小
	 * @returns X方向的大小
	 */
	X(): number;
	/**
	 * 获取Y方向的大小
	 * @returns Y方向的大小
	 */
	Y(): number;
	/**
	 * 获取Z方向的大小
	 * @returns Z方向的大小
	 */
	Z(): number;
	/**
	 * 设置X方向的大小
	 * @param theX X方向的大小
	 */
	SetX(theX: number): void;
	/**
	 * 设置Y方向的大小
	 * @param theY Y方向的大小
	 */
	SetY(theY: number): void;
	/**
	 * 设置Z方向的大小
	 * @param theZ Z方向的大小
	 */
	SetZ(theZ: number): void;
	/**
	 * 设置X,Y,Z方向的大小
	 * @param theXv X方向的大小
	 * @param theYv Y方向的大小
	 * @param theZv Z方向的大小
	 */
	SetXYZ(theXv: number, theYv: number, theZv: number): void;
	/**
	 * 判断是否和另外一个方向相等
	 * @param theOther 另一个方向
	 * @param theAngularTolerance 角度精度
	 * @returns 是否是同一方向
	 */
	IsEqual(theOther: Mx3dGeDir, theAngularTolerance: number): boolean;
	/**
	 * 判断是否和另外一个方向垂直
	 * @param theOther 另一个方向
	 * @param theAngularTolerance 角度精度
	 * @returns 是否垂直
	 */
	IsNormal(theOther: Mx3dGeDir, theAngularTolerance: number): boolean;
	/**
	 * 判断是否和另外一个方向相反
	 * @param theOther 另一个方向
	 * @param theAngularTolerance 角度精度
	 * @returns 是否相反
	 */
	IsOpposite(theOther: Mx3dGeDir, theAngularTolerance: number): boolean;
	/**
	 * 判断是否和另外一个方向平行（同向或反向均为平行）
	 * @param theOther 另一个方向
	 * @param theAngularTolerance 角度精度
	 * @returns 是否平行
	 */
	IsParallel(theOther: Mx3dGeDir, theAngularTolerance: number): boolean;
	/**
	 * 获取与另一个方向的夹角，范围[0,PI]
	 * @param theOther 另一个方向
	 * @returns 夹角
	 */
	Angle(theOther: Mx3dGeDir): number;
	/**
	 *
	 * @param theOther
	 * @param theVRef
	 * @returns
	 */
	AngleWithRef(theOther: Mx3dGeDir, theVRef: Mx3dGeDir): number;
	/**
	 * [me] = [me] ^ theRight，[me]代表自身，^代表叉乘
	 * @param theRight 另一个方向向量
	 */
	Cross(theRight: Mx3dGeDir): void;
	/**
	 * [res] = [me] ^ theRight，[me]代表自身，[res]代表结果，^代表叉乘
	 * @param theRight 另一个方向向量
	 * @returns 叉乘结果
	 */
	Crossed(theRight: Mx3dGeDir): Mx3dGeDir;
	/**
	 * [me] ^ (theV1 ^ theV2)，[me]代表自身，^代表叉乘
	 * @param theV1 另一个方向向量
	 * @param theV2 另一个方向向量
	 */
	CrossCross(theV1: Mx3dGeDir, theV2: Mx3dGeDir): void;
	/**
	 * [res] ^ (theV1 ^ theV2)，[me]代表自身，[res]代表结果，^代表叉乘
	 * @param theV1 另一个方向向量
	 * @param theV2 另一个方向向量
	 * @returns 叉乘结果
	 */
	CrossCrossed(theV1: Mx3dGeDir, theV2: Mx3dGeDir): Mx3dGeDir;
	/**
	 * [res] = [me] * theOther，[me]代表自身，[res]代表结果，*代表点乘
	 * @param theOther 另一个方向向量
	 * @returns 点乘结果
	 */
	Dot(theOther: Mx3dGeDir): number;
	/**
	 * [res] = [me] * (theV1 ^ theV2)，[me]代表自身，[res]代表结果，^代表叉乘，*代表点乘
	 * @param theV1 另一个方向向量
	 * @param theV2 另一个方向向量
	 * @returns 最后点乘结果
	 */
	DotCross(theV1: Mx3dGeDir, theV2: Mx3dGeDir): number;
	/**
	 * 翻转方向
	 */
	Reverse(): void;
	/**
	 * 获取翻转方向后的结果
	 * @returns 翻转方向后的结果
	 */
	Reversed(): Mx3dGeDir;
	/**
	 * 按照一个镜像中心方向向量镜像
	 * @param theV 镜像中心方向
	 */
	MirrorByVec(theV: Mx3dGeDir): void;
	MirroredByVec(theV: Mx3dGeDir): Mx3dGeDir;
	MirrorByAxis(theA1: Mx3dGeAxis): void;
	MirroredByAxis(theA1: Mx3dGeAxis): Mx3dGeDir;
	MirrorByCSYSR(theA2: Mx3dGeCSYSR): void;
	MirroredByCSYSR(theA2: Mx3dGeCSYSR): Mx3dGeDir;
	Rotate(theA1: Mx3dGeAxis, theAng: number): void;
	Rotated(theA1: Mx3dGeAxis, theAng: number): Mx3dGeDir;
	Transform(theT: Mx3dGeTrsf): void;
	Transformed(theT: Mx3dGeTrsf): Mx3dGeDir;
}
/**
 * 表示三维空间中的椭圆对象，继承自Mx3dGeObject类。
 * 支持通过不同参数构造椭圆，并提供了丰富的属性访问与操作方法。
 */
export declare class Mx3dGeEllipse extends Mx3dGeObject {
	/**
	 * 构造一个未初始化的椭圆实例。
	 */
	constructor();
	/**
	 * 根据给定的坐标系和半径构造椭圆。
	 * @param theA2 椭圆所在的坐标系
	 * @param theMajorRadius 主半径
	 * @param theMinorRadius 次半径
	 */
	constructor(theA2: Mx3dGeCSYSR, theMajorRadius: number, theMinorRadius: number);
	/**
	 * 设置椭圆的轴。
	 * @param theA1 新的轴
	 */
	SetAxis(theA1: Mx3dGeAxis): void;
	/**
	 * 设置椭圆的位置。
	 * @param theP 新的位置点
	 */
	SetLocation(theP: Mx3dGePoint): void;
	/**
	 * 设置椭圆的主半径。
	 * @param theMajorRadius 新的主半径
	 */
	SetMajorRadius(theMajorRadius: number): void;
	/**
	 * 设置椭圆的次半径。
	 * @param theMinorRadius 新的次半径
	 */
	SetMinorRadius(theMinorRadius: number): void;
	/**
	 * 设置椭圆的坐标系。
	 * @param theA2 新的坐标系
	 */
	SetPosition(theA2: Mx3dGeCSYSR): void;
	/**
	 * 计算并返回椭圆的面积。
	 * @returns 椭圆的面积
	 */
	Area(): number;
	/**
	 * 返回椭圆的轴。
	 * @returns 椭圆的轴
	 */
	Axis(): Mx3dGeAxis;
	/**
	 * 获取椭圆的第一条直接线，是垂直于主轴的直线，位于椭圆上，满足特定几何关系。
	 * @returns 直线1
	 */
	Directrix1(): Mx3dGeAxis;
	/**
	 * 获取椭圆的第二条直接线，是垂直于主轴的直线，位于椭圆上，满足特定几何关系。
	 * @returns 直线2
	 */
	Directrix2(): Mx3dGeAxis;
	/**
	 * 计算并返回椭圆的离心率，即焦距与半长轴之比。
	 * @returns 离心率
	 */
	Eccentricity(): number;
	/**
	 * 计算并返回椭圆的焦距，两焦点之间的距离。
	 * @returns 焦距
	 */
	Focal(): number;
	/**
	 * 获取椭圆的第一个焦点。
	 * @returns 第一焦点
	 */
	Focus1(): Mx3dGePoint;
	/**
	 * 获取椭圆的第二个焦点。
	 * @returns 二焦点
	 */
	Focus2(): Mx3dGePoint;
	/**
	 * 获取椭圆的当前位置，即中心点。
	 * @returns 当前位置
	 */
	Location(): Mx3dGePoint;
	/**
	 * 获取椭圆的主半径。
	 * @returns 主半径
	 */
	MajorRadius(): number;
	/**
	 * 获取椭圆的次半径。
	 * @returns 次半径
	 */
	MinorRadius(): number;
	/**
	 * 获取椭圆的参数，可能指椭圆上某点对应的参数方程中的参数。
	 * @returns 参数值
	 */
	Parameter(): number;
	/**
	 * 获取椭圆的位置坐标系，定义椭圆所在的坐标框架。
	 * @returns 位置坐标系
	 */
	Position(): Mx3dGeCSYSR;
	/**
	 * 获取椭圆的主轴，即沿主半径方向的轴。
	 * @returns 椭圆的主轴
	 */
	XAxis(): Mx3dGeAxis;
	/**
	 * 获取椭圆的次轴，即沿次半径方向的轴。
	 * @returns 椭圆的次轴
	 */
	YAxis(): Mx3dGeAxis;
	/**
	 * 对椭圆执行镜像操作，以指定点为中心进行对称变换。
	 * @param theP 镜像操作的中心点
	 */
	MirrorByPoint(theP: Mx3dGePoint): void;
	/**
	 * 返回沿指定点镜像后的椭圆副本。
	 * @param theP 镜像操作的中心点
	 * @returns 镜像后的椭圆副本
	 */
	MirroredByPoint(theP: Mx3dGePoint): Mx3dGeEllipse;
	/**
	 * 对椭圆执行镜像操作，以指定轴为对称轴。
	 * @param theA1 镜像操作的轴
	 */
	MirrorByAxis(theA1: Mx3dGeAxis): void;
	/**
	 * 返回沿指定轴镜像后的椭圆副本。
	 * @param theA1 镜像操作的轴
	 * @returns 镜像后的椭圆副本
	 */
	MirroredByAxis(theA1: Mx3dGeAxis): Mx3dGeEllipse;
	/**
	 * 对椭圆执行镜像操作，以指定坐标系所在的平面为对称面。
	 * @param theA2 镜像操作的坐标系
	 */
	MirrorByCSYSR(theA2: Mx3dGeCSYSR): void;
	/**
	 * 返回沿指定坐标系所在平面镜像后的椭圆副本。
	 * @param theA2 镜像操作的坐标系
	 * @returns 镜像后的椭圆副本
	 */
	MirroredByCSYSR(theA2: Mx3dGeCSYSR): Mx3dGeEllipse;
	/**
	 * 旋转椭圆，围绕指定轴按给定角度执行旋转操作。
	 * @param theA1 旋转轴
	 * @param theAng 旋转角度（弧度）
	 */
	Rotate(theA1: Mx3dGeAxis, theAng: number): void;
	/**
	 * 返回旋转后的椭圆副本。
	 * @param theA1 旋转轴
	 * @param theAng 旋转角度（弧度）
	 * @returns 旋转后的椭圆副本
	 */
	Rotated(theA1: Mx3dGeAxis, theAng: number): Mx3dGeEllipse;
	/**
	 * 缩放椭圆，从指定点出发按给定比例缩放。
	 * @param theP 缩放中心点
	 * @param theS 缩放比例
	 */
	Scale(theP: Mx3dGePoint, theS: number): void;
	/**
	 * 返回缩放后的椭圆副本。
	 * @param theP 缩放中心点
	 * @param theS 缩放比例
	 * @returns 缩放后的椭圆副本
	 */
	Scaled(theP: Mx3dGePoint, theS: number): Mx3dGeEllipse;
	/**
	 * 应用变换矩阵转换椭圆。
	 * @param theT 转换矩阵
	 */
	Transform(theT: Mx3dGeTrsf): void;
	/**
	 * 返回经过变换后的椭圆副本。
	 * @param theT 转换矩阵
	 * @returns 变换后的椭圆副本
	 */
	Transformed(theT: Mx3dGeTrsf): Mx3dGeEllipse;
	/**
	 * 沿圆沿指定向量平移。
	 * @param theV 平移向量
	 */
	TranslateByVec(theV: Mx3dGeVec): void;
	/**
	 * 返回平移后的椭圆副本。
	 * @param theV 平移向量
	 * @returns 平移后的椭圆副本
	 */
	TranslatedByVec(theV: Mx3dGeVec): Mx3dGeEllipse;
	/**
	 * 椭距平移椭圆，从一点移到另一点。
	 * @param theP1 起点
	 * @param theP2 终点
	 */
	TranslateBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): void;
	/**
	 * 返回等距平移后的椭圆副本。
	 * @param theP1 起点
	 * @param theP2 终点
	 * @returns 平移后的椭圆副本
	 */
	TranslatedBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): Mx3dGeEllipse;
}
/**
 * 表示一个三维空间中的双曲线对象。
 * 该类用于创建、操作和查询双曲线的各种属性，包括其轴、位置、半径以及各种变换状态。
 */
export declare class Mx3dGeHyperbola extends Mx3dGeObject {
	/**
	 * 默认构造函数，用于创建一个未定义的双曲线。
	 */
	constructor();
	/**
	 * 根据给定的主半径和次半径以及一个坐标系统（Mx3dGeCSYSR）来构造一个双曲线。
	 * 坐标系统定义了双曲线的位置，其中：
	 * - 原点为双曲线中心，
	 * - "X方向"定义了双曲线的主轴，
	 * - "Y方向"定义了双曲线的次轴。
	 * @param theA2 定义双曲线位置的坐标系统。
	 * @param theMajorRadius 双曲线的主半径。
	 * @param theMinorRadius 双曲线的次半径。
	 */
	constructor(theA2: Mx3dGeCSYSR, theMajorRadius: number, theMinorRadius: number);
	/**
	 * 设置双曲线的轴。
	 * @param theA1 要设置的新轴。
	 */
	SetAxis(theA1: Mx3dGeAxis): void;
	/**
	 * 设置双曲线的位置。
	 * @param theP 新的位置点。
	 */
	SetLocation(theP: Mx3dGePoint): void;
	/**
	 * 设置双曲线的主半径。
	 * @param theMajorRadius 新的主半径值。
	 */
	SetMajorRadius(theMajorRadius: number): void;
	/**
	 * 设置双曲线的次半径。
	 * @param theMinorRadius 新的次半径值。
	 */
	SetMinorRadius(theMinorRadius: number): void;
	/**
	 * 设置双曲线的坐标系统，从而重新定义其位置和方向。
	 * @param theA2 新的坐标系统。
	 */
	SetPosition(theA2: Mx3dGeCSYSR): void;
	/**
	 * 获取双曲线的对称轴。
	 * @returns 返回双曲线的对称轴。
	 */
	Asymptote1(): Mx3dGeAxis;
	/**
	 * 获取另一条对称轴。
	 * @returns 返回双曲线的另一条对称轴。
	 */
	Asymptote2(): Mx3dGeAxis;
	/**
	 * 获取双曲线的轴线。
	 * @returns 双曲线的轴线。
	 */
	Axis(): Mx3dGeAxis;
	/**
	 * 获取共轭分支1。
	 * @returns 双曲线的共轭分支1。
	 */
	ConjugateBranch1(): Mx3dGeHyperbola;
	/**
	 * 获取共轭分支2。
	 * @returns 双曲线的共轭分支2。
	 */
	ConjugateBranch2(): Mx3dGeHyperbola;
	/**
	 * 获取直接线1。
	 * @returns 双曲线的直接线1。
	 */
	Directrix1(): Mx3dGeAxis;
	/**
	 * 获取直接线2。
	 * @returns 双曲线的直接线2。
	 */
	Directrix2(): Mx3dGeAxis;
	/**
	 * 获取离心率。
	 * @returns 双曲线的离心率。
	 */
	Eccentricity(): number;
	/**
	 * 获取焦距。
	 * @returns 双曲线的焦距。
	 */
	Focal(): number;
	/**
	 * 获取焦点1。
	 * @returns 双曲线的第一个焦点。
	 */
	Focus1(): Mx3dGePoint;
	/**
	 * 获取焦点2。
	 * @returns 双曲线的第二个焦点。
	 */
	Focus2(): Mx3dGePoint;
	/**
	 * 获取双曲线的当前位置点，即中心点。
	 * @returns 位置点。
	 */
	Location(): Mx3dGePoint;
	/**
	 * 获取双曲线的长轴半径。
	 * @returns 一个 number，表示双曲线的长轴半径。
	 */
	MajorRadius(): number;
	/**
	 * 获取双曲线的短轴半径。
	 * @returns 一个 number，表示双曲线的短轴半径。
	 */
	MinorRadius(): number;
	/**
	 * 获取双曲线的另一分支，与当前分支关于主轴对称。
	 * @returns 另一分支。
	 */
	OtherBranch(): Mx3dGeHyperbola;
	/**
	 * 获取双曲线的参数。
	 * @returns 一个 number，表示双曲线的参数。
	 */
	Parameter(): number;
	/**
	 * 获取双曲线的坐标系统，定义其位置和方向。
	 * @returns 坐标系。
	 */
	Position(): Mx3dGeCSYSR;
	/**
	 * 获取X轴，定义双曲线的主要方向。
	 * @returns X轴。
	 */
	XAxis(): Mx3dGeAxis;
	/**
	 * 获取Y轴，定义双曲线的次要方向。
	 * @returns Y轴。
	 */
	YAxis(): Mx3dGeAxis;
	/**
	 * 通过点镜像变换双曲线。
	 * @param theP 一个 Mx3dGePoint 对象，表示镜像的中心点。
	 */
	MirrorByPoint(theP: Mx3dGePoint): void;
	/**
	 * 获取按点镜像后的双曲线。
	 * @param theP 镜像点 (Mx3dGePoint)。
	 * @returns 按点镜像后的双曲线 (Mx3dGeHyperbola)。
	 */
	MirroredByPoint(theP: Mx3dGePoint): Mx3dGeHyperbola;
	/**
	 * 按轴镜像双曲线。
	 * @param theA1 镜像轴 (Mx3dGeAxis)。
	 */
	MirrorByAxis(theA1: Mx3dGeAxis): void;
	/**
	 * 获取按轴镜像后的双曲线。
	 * @param theA1 镜像轴 (Mx3dGeAxis)。
	 * @returns 按轴镜像后的双曲线 (Mx3dGeHyperbola)。
	 */
	MirroredByAxis(theA1: Mx3dGeAxis): Mx3dGeHyperbola;
	/**
	 * 按坐标系镜像双曲线。
	 * @param theA2 镜像的坐标系 (Mx3dGeCSYSR)。
	 */
	MirrorByCSYSR(theA2: Mx3dGeCSYSR): void;
	/**
	 * 获取按坐标系镜像后的双曲线。
	 * @param theA2 镜像的坐标系 (Mx3dGeCSYSR)。
	 * @returns 按坐标系镜像后的双曲线 (Mx3dGeHyperbola)。
	 */
	MirroredByCSYSR(theA2: Mx3dGeCSYSR): Mx3dGeHyperbola;
	/**
	 * 旋转双曲线。
	 * @param theA1 旋转轴 (Mx3dGeAxis)。
	 * @param theAng 旋转角度。
	 */
	Rotate(theA1: Mx3dGeAxis, theAng: number): void;
	/**
	 * 获取旋转后的双曲线。
	 * @param theA1 旋转轴 (Mx3dGeAxis)。
	 * @param theAng 旋转角度。
	 * @returns 旋转后的双曲线 (Mx3dGeHyperbola)。
	 */
	Rotated(theA1: Mx3dGeAxis, theAng: number): Mx3dGeHyperbola;
	/**
	 * 缩放双曲线。
	 * @param theP 缩放中心 (Mx3dGePoint)。
	 * @param theS 缩放比例。
	 */
	Scale(theP: Mx3dGePoint, theS: number): void;
	/**
	 * 获取缩放后的双曲线。
	 * @param theP 缩放中心 (Mx3dGePoint)。
	 * @param theS 缩放比例。
	 * @returns 缩放后的双曲线 (Mx3dGeHyperbola)。
	 */
	Scaled(theP: Mx3dGePoint, theS: number): Mx3dGeHyperbola;
	/**
	 * 对双曲线进行变换。
	 * @param theTrsf 变换矩阵 (Mx3dGeTrsf)。
	 */
	Transform(theT: Mx3dGeTrsf): void;
	/**
	 * 获取变换后的双曲线。
	 * @param theTrsf 变换矩阵 (Mx3dGeTrsf)。
	 * @returns 变换后的双曲线 (Mx3dGeHyperbola)。
	 */
	Transformed(theT: Mx3dGeTrsf): Mx3dGeHyperbola;
	/**
	 * 按向量平移双曲线。
	 * @param theV 平移向量 (Mx3dGeVector)。
	 */
	TranslateByVec(theV: Mx3dGeVec): void;
	/**
	 * 获取按向量平移后的双曲线。
	 * @param theV 平移向量 (Mx3dGeVector)。
	 * @returns 平移后的双曲线 (Mx3dGeHyperbola)。
	 */
	TranslatedByVec(theV: Mx3dGeVec): Mx3dGeHyperbola;
	/**
	 * 按点平移双曲线。
	 * @param theP1 起点 (Mx3dGePoint)。
	 * @param theP2 终点 (Mx3dGePoint)。
	 */
	TranslateBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): void;
	/**
	 * 获取按点平移后的双曲线。
	 * @param theP1 起点 (Mx3dGePoint)。
	 * @param theP2 终点 (Mx3dGePoint)。
	 * @returns 按点平移后的双曲线 (Mx3dGeHyperbola)。
	 */
	TranslatedBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): Mx3dGeHyperbola;
}
/**
 * 表示一个三维向量的类。用于三维几何运算。
 */
export declare class Mx3dGeVec extends Mx3dGeObject {
	/**
	 * 构造一个新的 Mx3dGeVec 实例。
	 * 可以不带参数，或者带三个数值参数，或者带两个点。
	 * @param x 向量的 x 分量。
	 * @param y 向量的 y 分量。
	 * @param z 向量的 z 分量。
	 * @param thePoint1 起点。
	 * @param thePoint2 终点。
	 */
	constructor();
	constructor(x: number, y: number, z: number);
	constructor(thePoint1: Mx3dGePoint, thePoint2: Mx3dGePoint);
	/**
	 * 获取向量的 x 分量。
	 * @returns x 分量。
	 */
	X(): number;
	/**
	 * 获取向量的 y 分量。
	 * @returns y 分量。
	 */
	Y(): number;
	/**
	 * 获取向量的 z 分量。
	 * @returns z 分量。
	 */
	Z(): number;
	/**
	 * 设置向量的 x 分量。
	 * @param x 新的 x 分量。
	 */
	SetX(x: number): void;
	/**
	 * 设置向量的 y 分量。
	 * @param y 新的 y 分量。
	 */
	SetY(y: number): void;
	/**
	 * 设置向量的 z 分量。
	 * @param z 新的 z 分量。
	 */
	SetZ(z: number): void;
	/**
	 * 设置向量的 x, y 和 z 分量。
	 * @param x 新的 x 分量。
	 * @param y 新的 y 分量。
	 * @param z 新的 z 分量。
	 */
	SetXYZ(x: number, y: number, z: number): void;
	/**
	 * 判断两个向量是否相等。
	 * @param other 另一个向量。
	 * @param linearTolerance 线性公差。
	 * @param angularTolerance 角度公差。
	 * @returns 是否相等。
	 */
	IsEqual(other: Mx3dGeVec, linearTolerance: number, angularTolerance: number): boolean;
	/**
	 * 判断两个向量是否互为法向量。
	 * @param other 另一个向量。
	 * @param angularTolerance 角度公差。
	 * @returns 是否互为法向量。
	 */
	IsNormal(other: Mx3dGeVec, angularTolerance: number): boolean;
	/**
	 * 判断两个向量是否互为反向。
	 * @param other 另一个向量。
	 * @param angularTolerance 角度公差。
	 * @returns 是否互为反向。
	 */
	IsOpposite(other: Mx3dGeVec, angularTolerance: number): boolean;
	/**
	 * 判断两个向量是否平行。
	 * @param other 另一个向量。
	 * @param angularTolerance 角度公差。
	 * @returns 是否平行。
	 */
	IsParallel(other: Mx3dGeVec, angularTolerance: number): boolean;
	/**
	 * 计算两个向量之间的角度。
	 * @param other 另一个向量。
	 * @returns 角度值。
	 */
	Angle(other: Mx3dGeVec): number;
	/**
	 * 计算两个向量之间的带参考向量的角度。
	 * @param other 另一个向量。
	 * @param ref 参考向量。
	 * @returns 带参考向量的角度值。
	 */
	AngleWithRef(other: Mx3dGeVec, ref: Mx3dGeVec): number;
	/**
	 * 获取向量的模。
	 * @returns 向量的模。
	 */
	Magnitude(): number;
	/**
	 * 获取向量模的平方。
	 * @returns 向量模的平方。
	 */
	SquareMagnitude(): number;
	/**
	 * 将当前向量与另一个向量相加。
	 * @param other 另一个向量。
	 */
	Add(other: Mx3dGeVec): void;
	/**
	 * 返回当前向量与另一个向量相加的结果。
	 * @param other 另一个向量。
	 * @returns 相加后的向量。
	 */
	Added(other: Mx3dGeVec): Mx3dGeVec;
	/**
	 * 从当前向量中减去另一个向量。
	 * @param right 另一个向量。
	 */
	Subtract(right: Mx3dGeVec): void;
	/**
	 * 返回当前向量减去另一个向量的结果。
	 * @param right 另一个向量。
	 * @returns 相减后的向量。
	 */
	Subtracted(right: Mx3dGeVec): Mx3dGeVec;
	/**
	 * 将当前向量乘以一个标量。
	 * @param scalar 标量值。
	 */
	Multiply(scalar: number): void;
	/**
	 * 返回当前向量乘以标量的结果。
	 * @param scalar 标量值。
	 * @returns 乘以标量后的向量。
	 */
	Multiplied(scalar: number): Mx3dGeVec;
	/**
	 * 将当前向量除以一个标量。
	 * @param scalar 标量值。
	 */
	Divide(scalar: number): void;
	/**
	 * 返回当前向量除以标量的结果。
	 * @param scalar 标量值。
	 * @returns 除以标量后的向量。
	 */
	Divided(scalar: number): Mx3dGeVec;
	/**
	 * 计算两个向量的叉积。
	 * @param right 另一个向量。
	 */
	Cross(right: Mx3dGeVec): void;
	/**
	 * 返回两个向量的叉积结果。
	 * @param right 另一个向量。
	 * @returns 叉积后的向量。
	 */
	Crossed(right: Mx3dGeVec): Mx3dGeVec;
	/**
	 * 计算两个向量的叉积的模。
	 * @param right 另一个向量。
	 * @returns 叉积的模。
	 */
	CrossMagnitude(right: Mx3dGeVec): number;
	/**
	 * 计算两个向量的叉积模的平方。
	 * @param right 另一个向量。
	 * @returns 叉积模的平方。
	 */
	CrossSquareMagnitude(right: Mx3dGeVec): number;
	/**
	 * 计算三个向量的叉积。
	 * @param v1 向量1。
	 * @param v2 向量2。
	 */
	CrossCross(v1: Mx3dGeVec, v2: Mx3dGeVec): void;
	/**
	 * 返回三个向量的叉积结果。
	 * @param v1 向量1。
	 * @param v2 向量2。
	 * @returns 叉积后的向量。
	 */
	CrossCrossed(v1: Mx3dGeVec, v2: Mx3dGeVec): Mx3dGeVec;
	/**
	 * 计算两个向量的点积。
	 * @param other 另一个向量。
	 * @returns 点积值。
	 */
	Dot(other: Mx3dGeVec): number;
	/**
	 * 计算三个向量的点-叉积。
	 * @param v1 向量1。
	 * @param v2 向量2。
	 * @returns 点-叉积值。
	 */
	DotCross(v1: Mx3dGeVec, v2: Mx3dGeVec): number;
	/**
	 * 将当前向量归一化。
	 */
	Normalize(): void;
	/**
	 * 返回归一化后的向量。
	 * @returns 归一化后的向量。
	 */
	Normalized(): Mx3dGeVec;
	/**
	 * 反转当前向量的方向。
	 */
	Reverse(): void;
	/**
	 * 返回反转后的向量。
	 * @returns 反转后的向量。
	 */
	Reversed(): Mx3dGeVec;
	/**
	 * 设置当前向量为线性组合。
	 * @param v1 向量1。
	 * @param v2 向量2。
	 */
	SetLinearForm(v1: Mx3dGeVec, v2: Mx3dGeVec): void;
	SetLinearForm(a1: number, v1: Mx3dGeVec, v2: Mx3dGeVec): void;
	SetLinearForm(a1: number, v1: Mx3dGeVec, a2: number, v2: Mx3dGeVec): void;
	SetLinearForm(a1: number, v1: Mx3dGeVec, a2: number, v2: Mx3dGeVec, v3: Mx3dGeVec): void;
	SetLinearForm(a1: number, v1: Mx3dGeVec, a2: number, v2: Mx3dGeVec, a3: number, v3: Mx3dGeVec): void;
	SetLinearForm(a1: number, v1: Mx3dGeVec, a2: number, v2: Mx3dGeVec, a3: number, v3: Mx3dGeVec, v4: Mx3dGeVec): void;
	/**
	 * 根据一个向量镜像当前向量。
	 * @param vec 镜像向量。
	 */
	MirrorByVec(vec: Mx3dGeVec): void;
	/**
	 * 返回根据一个向量镜像后的向量。
	 * @param vec 镜像向量。
	 * @returns 镜像后的向量。
	 */
	MirroredByVec(vec: Mx3dGeVec): Mx3dGeVec;
	/**
	 * 根据一个轴镜像当前向量。
	 * @param axis 镜像轴。
	 */
	MirrorByAxis(axis: Mx3dGeAxis): void;
	/**
	 * 返回根据一个轴镜像后的向量。
	 * @param axis 镜像轴。
	 * @returns 镜像后的向量。
	 */
	MirroredByAxis(axis: Mx3dGeAxis): Mx3dGeVec;
	/**
	 * 根据一个坐标系镜像当前向量。
	 * @param csysr 坐标系。
	 */
	MirrorByCSYSR(csysr: Mx3dGeCSYSR): void;
	/**
	 * 返回根据一个坐标系镜像后的向量。
	 * @param csysr 坐标系。
	 * @returns 镜像后的向量。
	 */
	MirroredByCSYSR(csysr: Mx3dGeCSYSR): Mx3dGeVec;
	/**
	 * 旋转当前向量。
	 * @param axis 旋转轴。
	 * @param ang 旋转角度。
	 */
	Rotate(axis: Mx3dGeAxis, ang: number): void;
	/**
	 * 返回旋转后的向量。
	 * @param axis 旋转轴。
	 * @param ang 旋转角度。
	 * @returns 旋转后的向量。
	 */
	Rotated(axis: Mx3dGeAxis, ang: number): Mx3dGeVec;
	/**
	 * 缩放当前向量。
	 * @param s 缩放系数。
	 */
	Scale(s: number): void;
	/**
	 * 返回缩放后的向量。
	 * @param s 缩放系数。
	 * @returns 缩放后的向量。
	 */
	Scaled(s: number): Mx3dGeVec;
	/**
	 * 根据坐标系变换当前向量。
	 * @param csysr 坐标系。
	 */
	Transform(t: Mx3dGeTrsf): void;
	/**
	 * 返回根据坐标系变换后的向量。
	 * @param csysr 坐标系。
	 * @returns 变换后的向量。
	 */
	Transformed(t: Mx3dGeTrsf): Mx3dGeVec;
}
/**
 * 表示三维空间中的一个包围盒。
 *
 * 提供构造函数以及操作包围盒的方法，包括设置、更新、变换和检查等。
 * 包围盒类主要用于空间中的包围体计算与操作，通常用于碰撞检测、空间分割等场景。
 */
export declare class Mx3dGeBndBox extends Mx3dGeObject {
	/**
	 * 默认构造一个空的包围盒。
	 */
	constructor();
	/**
	 * 使用给定的最小点和最大点构造一个包围盒。
	 *
	 * @param theMin - 包围盒的最小点。
	 * @param theMax - 包围盒的最大点。
	 */
	constructor(theMin: Mx3dGePoint, theMax: Mx3dGePoint);
	/**
	 * 将包围盒设置为包含整个空间。
	 */
	SetWhole(): void;
	/**
	 * 将包围盒设置为一个无效状态（空的包围盒）。
	 */
	SetVoid(): void;
	/**
	 * 设置包围盒的方向。
	 *
	 * @param P - 包围盒的参考点。
	 * @param D - 包围盒的方向。
	 */
	Set(P: Mx3dGePoint, D: Mx3dGeDir): void;
	Update(aXmin: number, aYmin: number, aZmin: number, aXmax: number, aYmax: number, aZmax: number): void;
	GetGap(): number;
	SetGap(Tol: number): void;
	Enlarge(Tol: number): void;
	CornerMin(): Mx3dGePoint;
	CornerMax(): Mx3dGePoint;
	OpenXmin(): void;
	OpenXmax(): void;
	OpenYmin(): void;
	OpenYmax(): void;
	OpenZmin(): void;
	OpenZmax(): void;
	IsOpen(): boolean;
	IsOpenXmin(): boolean;
	IsOpenXmax(): boolean;
	IsOpenYmin(): boolean;
	IsOpenYmax(): boolean;
	IsOpenZmin(): boolean;
	IsOpenZmax(): boolean;
	IsWhole(): boolean;
	IsVoid(): boolean;
	IsXThin(tol: number): boolean;
	IsYThin(tol: number): boolean;
	IsZThin(tol: number): boolean;
	IsThin(tol: number): boolean;
	Transformed(T: Mx3dGeTrsf): Mx3dGeBndBox;
	AddBndBox(Other: Mx3dGeBndBox): void;
	AddPoint(P: Mx3dGePoint): void;
	AddPointDir(P: Mx3dGePoint, D: Mx3dGeDir): void;
	AddDir(D: Mx3dGeDir): void;
	IsOutPoint(P: Mx3dGePoint): boolean;
	IsOutBndBox(Other: Mx3dGeBndBox): boolean;
	IsOutBndBox(Other: Mx3dGeBndBox, T: Mx3dGeTrsf): boolean;
	IsOutTBT(T1: Mx3dGeTrsf, Other: Mx3dGeBndBox, T2: Mx3dGeTrsf): boolean;
	IsOutPPD(P1: Mx3dGePoint, P2: Mx3dGePoint, D: Mx3dGeDir): boolean;
	Distance(Other: Mx3dGeBndBox): number;
	SquareExtent(): number;
	FinitePart(): Mx3dGeBndBox;
	HasFinitePart(): boolean;
}
/**
 * 非参数几何圆
 */
export declare class Mx3dGeCircle extends Mx3dGeObject {
	/**
	 * 创建一个默认的圆对象。
	 */
	constructor();
	/**
	 * 创建一个带有坐标系和半径的圆对象。
	 * @param theA2 坐标系。
	 * @param theRadius 圆的半径。
	 */
	constructor(theA2: Mx3dGeCSYSR, theRadius: number);
	/**
	 * 设置圆的轴。
	 * @param theA1 圆的轴。
	 */
	SetAxis(theA1: Mx3dGeAxis): void;
	/**
	 * 设置圆的位置。
	 * @param theP 圆的位置点。
	 */
	SetLocation(theP: Mx3dGePoint): void;
	/**
	 * 设置圆的坐标系。
	 * @param theA2 圆的坐标系。
	 */
	SetPosition(theA2: Mx3dGeCSYSR): void;
	/**
	 * 设置圆的半径。
	 * @param theRadius 圆的半径。
	 */
	SetRadius(theRadius: number): void;
	/**
	 * 返回圆的面积。
	 * @returns 圆的面积。
	 */
	Area(): number;
	/**
	 * 返回圆的轴。
	 * @returns 圆的轴。
	 */
	Axis(): Mx3dGeAxis;
	/**
	 * 返回圆的周长。
	 * @returns 圆的周长。
	 */
	Length(): number;
	/**
	 * 返回圆的位置。
	 * @returns 圆的位置点。
	 */
	Location(): Mx3dGePoint;
	/**
	 * 返回圆的坐标系。
	 * @returns 圆的坐标系。
	 */
	Position(): Mx3dGeCSYSR;
	/**
	 * 返回圆的半径。
	 * @returns 圆的半径。
	 */
	Radius(): number;
	/**
	 * 返回圆的X轴。
	 * @returns 圆的X轴。
	 */
	XAxis(): Mx3dGeAxis;
	/**
	 * 返回圆的Y轴。
	 * @returns 圆的Y轴。
	 */
	YAxis(): Mx3dGeAxis;
	/**
	 * 计算圆到一个点的距离。
	 * @param theP 点。
	 * @returns 距离值。
	 */
	Distance(theP: Mx3dGePoint): number;
	/**
	 * 计算圆到一个点的平方距离。
	 * @param theP 点。
	 * @returns 平方距离值。
	 */
	SquareDistance(theP: Mx3dGePoint): number;
	/**
	 * 判断一个点是否在圆上。
	 * @param theP 点。
	 * @param theLinearTolerance 线性容差。
	 * @returns 如果点在圆上返回true，否则返回false。
	 */
	Contains(theP: Mx3dGePoint, theLinearTolerance: number): boolean;
	/**
	 * 根据一个点镜像当前圆。
	 * @param theP 镜像点。
	 */
	MirrorByPoint(theP: Mx3dGePoint): void;
	/**
	 * 返回根据一个点镜像后的圆。
	 * @param theP 镜像点。
	 * @returns 镜像后的圆。
	 */
	MirroredByPoint(theP: Mx3dGePoint): Mx3dGeCircle;
	/**
	 * 根据一个轴镜像当前圆。
	 * @param theA1 镜像轴。
	 */
	MirrorByAxis(theA1: Mx3dGeAxis): void;
	/**
	 * 返回根据一个轴镜像后的圆。
	 * @param theA1 镜像轴。
	 * @returns 镜像后的圆。
	 */
	MirroredByAxis(theA1: Mx3dGeAxis): Mx3dGeCircle;
	/**
	 * 根据一个坐标系镜像当前圆。
	 * @param theA2 镜像坐标系。
	 */
	MirrorByCSYSR(theA2: Mx3dGeCSYSR): void;
	/**
	 * 返回根据一个坐标系镜像后的圆。
	 * @param theA2 镜像坐标系。
	 * @returns 镜像后的圆。
	 */
	MirroredByCSYSR(theA2: Mx3dGeCSYSR): Mx3dGeCircle;
	/**
	 * 旋转当前圆。
	 * @param theA1 旋转轴。
	 * @param theAng 旋转角度。
	 */
	Rotate(theA1: Mx3dGeAxis, theAng: number): void;
	/**
	 * 返回旋转后的圆。
	 * @param theA1 旋转轴。
	 * @param theAng 旋转角度。
	 * @returns 旋转后的圆。
	 */
	Rotated(theA1: Mx3dGeAxis, theAng: number): Mx3dGeCircle;
	/**
	 * 缩放当前圆。
	 * @param theP 缩放中心点。
	 * @param theS 缩放比例。
	 */
	Scale(theP: Mx3dGePoint, theS: number): void;
	/**
	 * 返回缩放后的圆。
	 * @param theP 缩放中心点。
	 * @param theS 缩放比例。
	 * @returns 缩放后的圆。
	 */
	Scaled(theP: Mx3dGePoint, theS: number): Mx3dGeCircle;
	/**
	 * 根据变换矩阵变换当前圆。
	 * @param theT 变换矩阵。
	 */
	Transform(theT: Mx3dGeTrsf): void;
	/**
	 * 返回根据变换矩阵变换后的圆。
	 * @param theT 变换矩阵。
	 * @returns 变换后的圆。
	 */
	Transformed(theT: Mx3dGeTrsf): Mx3dGeCircle;
	/**
	 * 根据向量平移当前圆。
	 * @param theV 平移向量。
	 */
	TranslateByVec(theV: Mx3dGeVec): void;
	/**
	 * 返回根据向量平移后的圆。
	 * @param theV 平移向量。
	 * @returns 平移后的圆。
	 */
	TranslatedByVec(theV: Mx3dGeVec): Mx3dGeCircle;
	/**
	 * 根据两个点平移当前圆。
	 * @param theP1 起点。
	 * @param theP2 终点。
	 */
	TranslateBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): void;
	/**
	 * 返回根据两个点平移后的圆。
	 * @param theP1 起点。
	 * @param theP2 终点。
	 * @returns 平移后的圆。
	 */
	TranslatedBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): Mx3dGeCircle;
}
/**
 * 表示三维形状对象的基类。
 */
export declare class Mx3dShapeObject extends Mx3dBaseObject {
	/**
	 * 创建一个形状对象，可以选择传入一个对象参数。
	 * @param p 可选的对象参数。
	 */
	constructor(p?: object);
	/**
	 * 获取形状对象的边界框。
	 * @returns 边界框对象。
	 */
	getBndBox(): Mx3dGeBndBox;
	/**
	 * 形状反向
	 */
	reverse(): void;
	/**
	 * 获取反向后的新形状
	 * @returns 反向后的新形状
	 */
	reversed(): Mx3dShapeObject;
	/**
	 * 获取形状的朝向
	 * @returns 朝向
	 */
	Orientation(): MdGe.MxOrientation;
	/**
	 * 移动形状对象到指定位置。
	 * @param theLocation 移动的位置。
	 */
	move(theLocation: Mx3dGeLocation): void;
	/**
	 * 返回移动后的形状对象。
	 * @param theLocation 移动的位置。
	 * @returns 移动后的形状对象。
	 */
	moved(theLocation: Mx3dGeLocation): Mx3dShapeObject;
	/**
	 * 克隆当前形状对象。
	 * @returns 克隆后的形状对象。
	 */
	clone(): Mx3dShapeObject;
	/**
	 * 与另一个形状对象融合。
	 * @param theOther 另一个形状对象。
	 * @returns 融合后的形状对象。
	 */
	fuse(theOther: Mx3dShapeObject): Mx3dShapeObject;
	/**
	 * 从当前形状对象中减去另一个形状对象。
	 * @param theOther 另一个形状对象。
	 * @returns 削减后的形状对象。
	 */
	cut(theOther: Mx3dShapeObject): Mx3dShapeObject;
	/**
	 * 返回当前形状对象与另一个形状对象的公共部分。
	 * @param theOther 另一个形状对象。
	 * @returns 公共部分的形状对象。
	 */
	common(theOther: Mx3dShapeObject): Mx3dShapeObject;
	/**
	 * 返回当前形状对象与另一个形状对象的相交轮廓。
	 * @param theOther 另一个形状对象。
	 * @returns 相交轮廓的形状对象。
	 */
	section(theOther: Mx3dShapeObject): Mx3dShapeObject;
	/**
	 * 使用工具形状对象分割当前形状对象。
	 * @param theTools 工具形状对象数组。
	 * @returns 分割后的形状对象数组。
	 */
	spliter(theTools: Mx3dShapeObject[]): Mx3dShapeObject[];
	/**
	 * 根据一个点镜像当前形状对象。
	 * @param theP 镜像点。
	 */
	MirrorByPoint(theP: Mx3dGePoint): void;
	/**
	 * 返回根据一个点镜像后的形状对象。
	 * @param theP 镜像点。
	 * @returns 镜像后的形状对象。
	 */
	MirroredByPoint(theP: Mx3dGePoint): Mx3dShapeObject;
	/**
	 * 根据一个轴镜像当前形状对象。
	 * @param axis 镜像轴。
	 */
	MirrorByAxis(axis: Mx3dGeAxis): void;
	/**
	 * 返回根据一个轴镜像后的形状对象。
	 * @param axis 镜像轴。
	 * @returns 镜像后的形状对象。
	 */
	MirroredByAxis(axis: Mx3dGeAxis): Mx3dShapeObject;
	/**
	 * 根据一个坐标系镜像当前形状对象。
	 * @param csysr 镜像坐标系。
	 */
	MirrorByCSYSR(csysr: Mx3dGeCSYSR): void;
	/**
	 * 返回根据一个坐标系镜像后的形状对象。
	 * @param csysr 镜像坐标系。
	 * @returns 镜像后的形状对象。
	 */
	MirroredByCSYSR(csysr: Mx3dGeCSYSR): Mx3dShapeObject;
	/**
	 * 旋转当前形状对象。
	 * @param axis 旋转轴。
	 * @param ang 旋转角度。
	 */
	Rotate(axis: Mx3dGeAxis, ang: number): void;
	/**
	 * 返回旋转后的形状对象。
	 * @param axis 旋转轴。
	 * @param ang 旋转角度。
	 * @returns 旋转后的形状对象。
	 */
	Rotated(axis: Mx3dGeAxis, ang: number): Mx3dShapeObject;
	/**
	 * 缩放当前形状对象。
	 * @param point 缩放中心点。
	 * @param s 缩放比例。
	 */
	Scale(point: Mx3dGePoint, s: number): void;
	/**
	 * 返回缩放后的形状对象。
	 * @param point 缩放中心点。
	 * @param s 缩放比例。
	 * @returns 缩放后的形状对象。
	 */
	Scaled(point: Mx3dGePoint, s: number): Mx3dShapeObject;
	/**
	 * 根据变换矩阵变换当前形状对象。
	 * @param trsf 变换矩阵。
	 */
	Transform(trsf: Mx3dGeTrsf): void;
	/**
	 * 返回根据变换矩阵变换后的形状对象。
	 * @param trsf 变换矩阵。
	 * @returns 变换后的形状对象。
	 */
	Transformed(trsf: Mx3dGeTrsf): Mx3dShapeObject;
	/**
	 * 根据向量平移当前形状对象。
	 * @param vec 平移向量。
	 */
	TranslateByVec(vec: Mx3dGeVec): void;
	/**
	 * 根据坐标平移当前形状对象。
	 * @param theX X坐标。
	 * @param theY Y坐标。
	 * @param theZ Z坐标。
	 */
	TranslateByVec(theX: number, theY: number, theZ: number): void;
	/**
	 * 返回根据向量平移后的形状对象。
	 * @param vec 平移向量。
	 * @returns 平移后的形状对象。
	 */
	TranslatedByVec(vec: Mx3dGeVec): Mx3dShapeObject;
	/**
	 * 返回根据坐标平移后的形状对象。
	 * @param theX X坐标。
	 * @param theY Y坐标。
	 * @param theZ Z坐标。
	 * @returns 平移后的形状对象。
	 */
	TranslatedByVec(theX: number, theY: number, theZ: number): Mx3dShapeObject;
	/**
	 * 根据两个点平移当前形状对象。
	 * @param point1 起点。
	 * @param point2 终点。
	 */
	TranslateBy2Points(point1: Mx3dGePoint, point2: Mx3dGePoint): void;
	/**
	 * 返回根据两个点平移后的形状对象。
	 * @param point1 起点。
	 * @param point2 终点。
	 * @returns 平移后的形状对象。
	 */
	TranslatedBy2Points(point1: Mx3dGePoint, point2: Mx3dGePoint): Mx3dShapeObject;
	/**
	 * 遍历形状对象。
	 * @param ToFind 要查找的形状类型。
	 * @returns 形状对象数组。
	 */
	Explore(ToFind: MdGe.MxShapeEnum): Mx3dShapeObject[];
	/**
	 * 获取形状类型。
	 * @returns 形状类型。
	 */
	ShapeType(): MdGe.MxShapeEnum;
	/**
	 * 获取形状的长度，面积，体积等。
	 * @param theAspect 设置获取长度，面积还是体积。
	 * @returns 数量值。
	 */
	Quantities(theAspect: MdGe.MxQuantAspect): number;
	/**
	 * 获取形状的质心。
	 * @param theAspect 需要根据形状类型进行设置的质心类型。
	 * @returns 质心点。
	 */
	Centroid(theAspect: MdGe.MxQuantAspect): Mx3dGePoint;
}
/**
 * 表示一个面形状
 */
export declare class Mx3dShapeFace extends Mx3dShapeObject {
	constructor(p?: object);
}
/**
 * 表示一个点形状
 */
export declare class Mx3dShapeVertex extends Mx3dShapeObject {
	constructor(p?: object);
}
/**
 * 表示一个边形状
 */
export declare class Mx3dShapeEdge extends Mx3dShapeObject {
	constructor();
	/**
	 * 创建一个边形状，传入起点和终点
	 * @param pt1 起点
	 * @param pt2 终点
	 */
	constructor(pt1: Mx3dGePoint, pt2: Mx3dGePoint);
}
/**
 * 表示一个环，由边构成，可以是不闭合的
 */
export declare class Mx3dShapeWire extends Mx3dShapeObject {
	constructor(p?: object);
}
/**
 * 表示一个壳，由面构成，可以是不闭合的
 */
export declare class Mx3dShapeShell extends Mx3dShapeObject {
	constructor(p?: object);
}
/**
 * 实心形状对象
 */
export declare class Mx3dShapeSolid extends Mx3dShapeObject {
	constructor(p?: object);
}
/**
 * 复合实心实体对象，由实心实体构成
 */
export declare class Mx3dShapeCompSolid extends Mx3dShapeObject {
	constructor(p?: object);
}
/**
 * 复合形状对象，由其他类型的形状构成
 */
export declare class Mx3dShapeCompound extends Mx3dShapeObject {
	constructor(p?: object);
}
/**
 * 倒圆角算法
 */
export declare class Mx3dAlgoFillet extends Mx3dAlgoObject {
	constructor(S: Mx3dShapeObject, FShape: MdGe.MxCF3dFilletShapeEnum);
	Add(Radius: number, E: Mx3dShapeEdge): void;
	Shape(): Mx3dShapeObject;
}
/**
 * 倒斜角算法
 */
export declare class Mx3dAlgoChamfer extends Mx3dAlgoObject {
	/**
	 * 构造函数，输入需要倒斜角的对象
	 * @param S 进行倒斜角算法的对象
	 */
	constructor(S: Mx3dShapeObject);
	/**
	 * 添加对象上需要倒斜角的边
	 * @param Dis 倒斜角距离
	 * @param E 对象上的边
	 */
	Add(Dis: number, E: Mx3dShapeEdge): void;
	/**
	 * 获取倒斜角后的形状对象
	 * @returns 倒斜角后的形状对象
	 */
	Shape(): Mx3dShapeObject;
}
/**
 * 二维倒圆角算法
 */
export declare class Mx3dAlgoFillet2d extends Mx3dAlgoObject {
	/**
	 * 默认构造函数
	 */
	constructor();
	/**
   * 构造函数，传入Wire和Wire所在平面
   * @param theWire 要倒圆角的Wire
   * @param thePlane Wire所在平面
   */
	constructor(theWire: Mx3dShapeWire, thePlane: Mx3dGePlane);
	/**
	 * 构造函数，传入两条位于同一平面Edge，和所在平面
	 * @param theEdge1 第一条Edge
	 * @param theEdge2 第二条Edge
	 * @param thePlane 所在平面
	 */
	constructor(theEdge1: Mx3dShapeEdge, theEdge2: Mx3dShapeEdge, thePlane: Mx3dGePlane);
	/**
	 * 初始化函数，传入Wire和Wire所在平面
	 * @param theWire 要倒圆角的Wire
	 * @param thePlane Wire所在平面
	 */
	Init(theWire: Mx3dShapeWire, thePlane: Mx3dGePlane): void;
	/**
	 * 初始化函数，传入两条位于同一平面Edge，和所在平面
	 * @param theEdge1 第一条Edge
	 * @param theEdge2 第二条Edge
	 * @param thePlane 所在平面
	 */
	Init(theEdge1: Mx3dShapeEdge, theEdge2: Mx3dShapeEdge, thePlane: Mx3dGePlane): void;
	/**
	 * 执行圆角算法
	 * @param theRadius 圆角的半径
	 * @returns 算法是否执行成功
	 */
	Perform(theRadius: number): boolean;
	/**
	 * 获取圆角执行结果的数量
	 * @param thePoint 计算圆角处的点
	 * @returns 圆角执行结果的数量
	 */
	NbResults(thePoint: Mx3dGePoint): number;
	/**
	 *
	 * @param thePoint 设置要获取位于原曲线位于哪个交点的结果
	 * @param theEdge1 返回的第一条Edge
	 * @param theEdge2 返回的第二条Edge
	 * @param iSolution 默认-1，获取最靠近thePoint的结果
	 */
	Result(thePoint: Mx3dGePoint, theEdge1: Mx3dShapeEdge, theEdge2: Mx3dShapeEdge, iSolution?: number): Mx3dShapeEdge;
}
/**
 * 数据库对象基类
 */
export declare class Mx3dDbObject extends Mx3dBaseObject {
	constructor(p?: object);
}
export declare class Mx3dView extends Mx3dBaseObject {
	/**
	 * @internal
	 */
	constructor(p: object);
	/**
	 * 获取当前文档视图对象的文档
	 * @returns 返回文档对象
	 */
	getDocument(): Mx3dDbDocument;
	/**
	 * 移除所有
	 * @param theUpdateView 移除后是否立即更新视图
	 */
	removeAll(theUpdateView?: boolean): void;
	/**
	 * 移除选中
	 */
	removeSelected(): void;
	/**
	 * 更新显示
	 * @param isUpAllData 是否更新所有数据
	 * @param isRemoveAll 是否首先移除所有数据
	 */
	update(isUpAllData?: boolean, isRemoveAll?: boolean): void;
	/**
	 * 设置视图投影模式
	 * @param theProjection 投影模式
	 */
	setProjectionType(theProjection: MdGe.MxCameraProjection): void;
	/**
	 * 显示中心坐标轴
	 * @param theToShow true显示，false不显示
	 */
	showCenterTrihedron(theToShow: boolean): void;
	/**
	 * 视图中的所有对象缩放至适应整个视图
	 * @param theAuto 自动缩放
	 */
	fitAllObjects(theAuto: boolean): void;
	/**
	 * 开启/关闭X轴剖切面
	 * @param theToEnabled 是否开启X轴剖切面
	 */
	enableXClipPlane(theToEnabled: boolean): void;
	/**
	 * 设置X轴剖切面的位置
	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
	 */
	setXClipPlaneXPosition(thePosition: number): void;
	/**
	 * 翻转X轴剖切面
	 */
	setXClipPlaneReverse(): void;
	/**
	 * 开启/关闭Y轴剖切面
	 * @param theToEnabled 是否开启Y轴剖切面
	 */
	enableYClipPlane(theToEnabled: boolean): void;
	/**
	 * 设置Y轴剖切面的位置
	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
	 */
	setYClipPlaneYPosition(thePosition: number): void;
	/**
	 * 翻转Y轴剖切面
	 */
	setYClipPlaneReverse(): void;
	/**
	 * 开启/关闭Z轴剖切面
	 * @param theToEnabled 是否开启Z轴剖切面
	 */
	enableZClipPlane(theToEnabled: boolean): void;
	/**
	 * 设置Z轴剖切面的位置
	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
	 */
	setZClipPlaneZPosition(thePosition: number): void;
	/**
	 * 翻转Z轴剖切面
	 */
	setZClipPlaneReverse(): void;
	/**
	 * 开启/关闭用户自定义剖切面
	 * @param theToEnabled 是否开启用户自定义剖切面
	 */
	enableCustomClipPlane(theToEnabled: boolean): void;
	/**
	 * 设置用户自定义剖切面的位置
	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
	 */
	setCustomClipPlanePosition(thePosition: number): void;
	/**
	 * 翻转用户自定义剖切面
	 */
	setCustomClipPlaneReverse(): void;
	/**
	 * 设置用户自定义剖切面的法向
	 * @param x 法向的x分量
	 * @param y 法向的y分量
	 * @param z 法向的z分量
	 */
	setCustomClipPlaneDirection(x: number, y: number, z: number): void;
	/**
	 * 显示文字符号
	 * @param theSymbol 文字符号对象
	 */
	displaySymbolText(theSymbol: Mx3dSymbolText): void;
	/**
	 * 显示标注符号
	 * @param theDimension 标注符号对象
	 */
	displayDimension(theDimension: Mx3dDimObject): void;
	/**
	 * 为当前选中对象设置纹理贴图
	 * @param theFileName 图片在文件系统中的完整路径
	 */
	addModelTexture(theFileName: string): void;
	/**
	 * 移除当前选择对象的纹理贴图
	 */
	removeModelTexture(): void;
	/**
	 * 设置渐变背景色
	 * @param theColor1 颜色对象1
	 * @param theColor2 颜色对象2
	 * @param theMethod 渐变方式
	 */
	setGradientBgColor(theColor1: Mx3dGeColor, theColor2: Mx3dGeColor, theMethod: MdGe.MxGradientFillMethod): void;
	/**
	 * 设置视图方向
	 * @param theOrientation 视图方向
	 * @param theIsYup 是否Y轴向上
	 */
	setProj(theOrientation: MdGe.MxV3dTypeOfOrientation, theIsYup: boolean): void;
	/**
	 * 设置当前选中对象的颜色
	 * @param color 颜色
	 */
	setSelectedColor(color: Mx3dGeColor): void;
	/**
	 * 设置选中对象的材质
	 * @param material 材质
	 */
	setSelectedMaterial(material: Mx3dGeMaterial): void;
	/**
	 * 设置当前的显示模式
	 * @param theMode 显示模式
	 */
	setDisplayMode(theMode: MdGe.MxGlobalDisplayMode): void;
	enableDirLightSrc(theToEnabled: boolean): void;
	setCubemapBackground(theRight: string, theLeft: string, theTop: string, theBottom: string, theFront: string, theBack: string): void;
	setManipulatorEnabled(isEnabled: boolean): void;
}
/**
 * 表示颜色对象的类。
 */
export declare class Mx3dGeColor extends Mx3dBaseObject {
	/**
	 * 创建一个颜色对象。
	 */
	constructor();
	/**
	 * 使用颜色名称创建一个颜色对象。
	 * @param theColorName 颜色名称。
	 */
	constructor(theColorName: MdGe.MxNameOfColor);
	/**
	 * 使用 RGB 值和颜色类型创建一个颜色对象。
	 * @param theR 红色分量。
	 * @param theG 绿色分量。
	 * @param theB 蓝色分量。
	 * @param theType 颜色类型。
	 */
	constructor(theR: number, theG: number, theB: number, theType: MdGe.MxTypeOfColor);
	/**
	 * 获取颜色的名称。
	 * @returns 颜色名称。
	 */
	Name(): MdGe.MxNameOfColor;
	/**
	 * 设置颜色的值。
	 * @param theName 颜色名称。
	 */
	SetValues(theName: MdGe.MxNameOfColor): void;
	/**
	 * 设置颜色的值。
	 * @param theC1 红色分量。
	 * @param theC2 绿色分量。
	 * @param theC3 蓝色分量。
	 * @param theType 颜色类型。
	 */
	SetValues(theC1: number, theC2: number, theC3: number, theType: MdGe.MxTypeOfColor): void;
	/**
	 * 获取红色分量的值。
	 * @returns 红色分量。
	 */
	Red(): number;
	/**
	 * 获取绿色分量的值。
	 * @returns 绿色分量。
	 */
	Green(): number;
	/**
	 * 获取蓝色分量的值。
	 * @returns 蓝色分量。
	 */
	Blue(): number;
	/**
	 * 获取色调值。
	 * @returns 色调值。
	 */
	Hue(): number;
	/**
	 * 获取亮度值。
	 * @returns 亮度值。
	 */
	Light(): number;
	/**
	 * 改变颜色的强度。
	 * @param theDelta 强度变化量。
	 */
	ChangeIntensity(theDelta: number): void;
	/**
	 * 获取饱和度值。
	 * @returns 饱和度值。
	 */
	Saturation(): number;
	/**
	 * 改变颜色的对比度。
	 * @param theDelta 对比度变化量。
	 */
	ChangeContrast(theDelta: number): void;
	/**
	 * 判断颜色是否不同。
	 * @param theOther 另一个颜色对象。
	 * @returns 是否不同。
	 */
	IsDifferent(theOther: Mx3dGeColor): boolean;
	/**
	 * 判断颜色是否相同。
	 * @param theOther 另一个颜色对象。
	 * @returns 是否相同。
	 */
	IsEqual(theOther: Mx3dGeColor): boolean;
	/**
	 * 计算颜色之间的距离。
	 * @param theColor 另一个颜色对象。
	 * @returns 颜色距离。
	 */
	Distance(theColor: Mx3dGeColor): number;
	/**
	 * 计算颜色之间的平方距离。
	 * @param theColor 另一个颜色对象。
	 * @returns 颜色平方距离。
	 */
	SquareDistance(theColor: Mx3dGeColor): number;
	/**
	 * 计算颜色之间的 Delta E2000 差异。
	 * @param theOther 另一个颜色对象。
	 * @returns Delta E2000 差异值。
	 */
	DeltaE2000(theOther: Mx3dGeColor): number;
}
/**
 * 表示通用坐标系的类。
 */
export declare class Mx3dGeCSYS extends Mx3dGeObject {
	/**
	 * 创建一个默认的坐标系对象。
	 */
	constructor();
	/**
	 * 使用右手坐标系创建一个坐标系对象。
	 * @param csysr 右手坐标系对象。
	 */
	constructor(csysr: Mx3dGeCSYSR);
	/**
	 * 使用原点和 Z 轴方向创建一个坐标系对象。
	 * @param origin 坐标系的原点。
	 * @param z_axis 坐标系的 Z 轴方向。
	 */
	constructor(origin: Mx3dGePoint, z_axis: Mx3dGeDir);
	/**
	 * 使用原点、Z 轴方向和 X 轴向量创建一个坐标系对象。
	 * @param origin 坐标系的原点。
	 * @param z_axis 坐标系的 Z 轴方向。
	 * @param x_vec 坐标系的 X 轴向量。
	 */
	constructor(origin: Mx3dGePoint, z_axis: Mx3dGeDir, x_vec: Mx3dGeDir);
	/**
	 * 反转 X 轴方向。
	 */
	XReverse(): void;
	/**
	 * 反转 Y 轴方向。
	 */
	YReverse(): void;
	/**
	 * 反转 Z 轴方向。
	 */
	ZReverse(): void;
	/**
	 * 设置坐标系的轴。
	 * @param z_axis 坐标系的 Z 轴。
	 */
	SetAxis(z_axis: Mx3dGeAxis): void;
	/**
	 * 设置坐标系的方向。
	 * @param z_dir 坐标系的 Z 轴方向。
	 */
	SetDirection(z_dir: Mx3dGeDir): void;
	/**
	 * 设置坐标系的原点位置。
	 * @param origin 坐标系的原点。
	 */
	SetLocation(origin: Mx3dGePoint): void;
	/**
	 * 设置坐标系的原点位置。
	 * @param theX 原点的 X 坐标。
	 * @param theY 原点的 Y 坐标。
	 * @param theZ 原点的 Z 坐标。
	 */
	SetLocation(theX: number, theY: number, theZ: number): void;
	/**
	 * 设置坐标系的 X 轴方向。
	 * @param x_dir X 轴方向。
	 */
	SetXDirection(x_dir: Mx3dGeDir): void;
	/**
	 * 设置坐标系的 Y 轴方向。
	 * @param y_dir Y 轴方向。
	 */
	SetYDirection(y_dir: Mx3dGeDir): void;
	/**
	 * 计算与另一个坐标系的角度。
	 * @param other 另一个坐标系。
	 * @returns 两个坐标系之间的角度。
	 */
	Angle(other: Mx3dGeCSYS): number;
	/**
	 * 获取坐标系的轴。
	 * @returns 坐标系的轴。
	 */
	Axis(): Mx3dGeAxis;
	/**
	 * 获取右手坐标系。
	 * @returns 右手坐标系对象。
	 */
	CSYSR(): Mx3dGeCSYSR;
	/**
	 * 获取坐标系的方向。
	 * @returns 坐标系的方向。
	 */
	Direction(): Mx3dGeDir;
	/**
	 * 获取坐标系的原点位置。
	 * @returns 坐标系的原点位置。
	 */
	Location(): Mx3dGePoint;
	/**
	 * 获取坐标系的 X 轴方向。
	 * @returns X 轴方向。
	 */
	XDirection(): Mx3dGeDir;
	/**
	 * 获取坐标系的 Y 轴方向。
	 * @returns Y 轴方向。
	 */
	YDirection(): Mx3dGeDir;
	/**
	 * 判断坐标系是否为直接的。
	 * @returns 是否为直接的。
	 */
	Direct(): boolean;
	/**
	 * 判断坐标系是否与另一个坐标系共面。
	 * @param other 另一个坐标系。
	 * @param linearTolerance 线性公差。
	 * @param angularTolerance 角度公差。
	 * @returns 是否共面。
	 */
	IsCoplanarWithCSYS(other: Mx3dGeCSYS, linearTolerance: number, angularTolerance: number): boolean;
	/**
	 * 判断坐标系是否与一个轴共面。
	 * @param axis 轴对象。
	 * @param linearTolerance 线性公差。
	 * @param angularTolerance 角度公差。
	 * @returns 是否共面。
	 */
	IsCoplanarWithAxis(axis: Mx3dGeAxis, linearTolerance: number, angularTolerance: number): boolean;
	/**
	 * 通过一个点对坐标系进行镜像。
	 * @param point 镜像点。
	 */
	MirrorByPoint(point: Mx3dGePoint): void;
	/**
	 * 通过一个点对坐标系进行镜像，并返回镜像后的坐标系对象。
	 * @param point 镜像点。
	 * @returns 镜像后的坐标系对象。
	 */
	MirroredByPoint(point: Mx3dGePoint): Mx3dGeCSYS;
	/**
	 * 通过一个轴对坐标系进行镜像。
	 * @param axis 镜像轴。
	 */
	MirrorByAxis(axis: Mx3dGeAxis): void;
	/**
	 * 通过一个轴对坐标系进行镜像，并返回镜像后的坐标系对象。
	 * @param axis 镜像轴。
	 * @returns 镜像后的坐标系对象。
	 */
	MirroredByAxis(axis: Mx3dGeAxis): Mx3dGeCSYS;
	/**
	 * 通过右手坐标系对当前坐标系进行镜像。
	 * @param csysr 右手坐标系对象。
	 */
	MirrorByCSYSR(csysr: Mx3dGeCSYSR): void;
	/**
	 * 通过右手坐标系对当前坐标系进行镜像，并返回镜像后的坐标系对象。
	 * @param csysr 右手坐标系对象。
	 * @returns 镜像后的坐标系对象。
	 */
	MirroredByCSYSR(csysr: Mx3dGeCSYSR): Mx3dGeCSYS;
	/**
	 * 绕轴旋转坐标系。
	 * @param axis 旋转轴。
	 * @param ang 旋转角度。
	 */
	Rotate(axis: Mx3dGeAxis, ang: number): void;
	/**
	 * 绕轴旋转坐标系，并返回旋转后的坐标系对象。
	 * @param axis 旋转轴。
	 * @param ang 旋转角度。
	 * @returns 旋转后的坐标系对象。
	 */
	Rotated(axis: Mx3dGeAxis, ang: number): Mx3dGeCSYS;
	/**
	 * 按比例缩放坐标系。
	 * @param point 缩放的基点。
	 * @param s 缩放比例。
	 */
	Scale(point: Mx3dGePoint, s: number): void;
	/**
	 * 按比例缩放坐标系，并返回缩放后的坐标系对象。
	 * @param point 缩放的基点。
	 * @param s 缩放比例。
	 * @returns 缩放后的坐标系对象。
	 */
	Scaled(point: Mx3dGePoint, s: number): Mx3dGeCSYS;
	/**
	 * 变换坐标系。
	 * @param t 变换对象。
	 */
	Transform(t: Mx3dGeTrsf): void;
	/**
	 * 变换坐标系，并返回变换后的坐标系对象。
	 * @param t 变换对象。
	 * @returns 变换后的坐标系对象。
	 */
	Transformed(t: Mx3dGeTrsf): Mx3dGeCSYS;
	/**
	 * 按向量平移坐标系。
	 * @param vec 平移向量。
	 */
	TranslateByVec(vec: Mx3dGeVec): void;
	/**
	 * 按向量平移坐标系，并返回平移后的坐标系对象。
	 * @param vec 平移向量。
	 * @returns 平移后的坐标系对象。
	 */
	TranslatedByVec(vec: Mx3dGeVec): Mx3dGeCSYS;
	/**
	 * 通过两个点平移坐标系。
	 * @param point1 起点。
	 * @param point2 终点。
	 */
	TranslateBy2Points(point1: Mx3dGePoint, point2: Mx3dGePoint): void;
	/**
	 * 通过两个点平移坐标系，并返回平移后的坐标系对象。
	 * @param point1 起点。
	 * @param point2 终点。
	 * @returns 平移后的坐标系对象。
	 */
	TranslatedBy2Points(point1: Mx3dGePoint, point2: Mx3dGePoint): Mx3dGeCSYS;
}
/**
 * 表示右手坐标系的类。
 */
export declare class Mx3dGeCSYSR extends Mx3dGeObject {
	/**
	 * 创建一个默认的右手坐标系对象。
	 */
	constructor();
	/**
	 * 使用原点、Z 轴方向和 X 轴向量创建一个右手坐标系对象。
	 * @param origin 坐标系的原点。
	 * @param z_axis 坐标系的 Z 轴方向。
	 * @param x_vec 坐标系的 X 轴向量。
	 */
	constructor(origin: Mx3dGePoint, z_axis: Mx3dGeDir, x_vec: Mx3dGeDir);
	/**
	 * 使用原点、Z 轴方向创建一个右手坐标系对象，X Y 方向自动确定。
	 * @param origin 坐标系的原点。
	 * @param z_axis 坐标系的 Z 轴方向。
	 */
	constructor(origin: Mx3dGePoint, z_axis: Mx3dGeDir);
	/**
	 * 获取右手坐标系的原点位置。
	 * @returns 原点位置。
	 */
	Location(): Mx3dGePoint;
	/**
	 * 获取右手坐标系的 X 轴方向。
	 * @returns X 轴方向。
	 */
	XDirection(): Mx3dGeDir;
	/**
	 * 获取右手坐标系的 Y 轴方向。
	 * @returns Y 轴方向。
	 */
	YDirection(): Mx3dGeDir;
	/**
	 * 获取右手坐标系的 Z 轴方向。
	 * @returns Z 轴方向。
	 */
	Direction(): Mx3dGeDir;
	/**
	 * 设置右手坐标系的原点位置。
	 * @param origin 坐标系的原点。
	 */
	SetLocation(origin: Mx3dGePoint): void;
	/**
	 * 设置右手坐标系的原点位置。
	 * @param theX 原点的 X 坐标。
	 * @param theY 原点的 Y 坐标。
	 * @param theZ 原点的 Z 坐标。
	 */
	SetLocation(theX: number, theY: number, theZ: number): void;
	/**
	 * 设置右手坐标系的 X 轴方向。
	 * @param x_dir X 轴方向。
	 */
	SetXDirection(x_dir: Mx3dGePoint): void;
	/**
	 * 设置右手坐标系的 Y 轴方向。
	 * @param y_dir Y 轴方向。
	 */
	SetYDirection(y_dir: Mx3dGeDir): void;
	/**
	 * 设置右手坐标系的 Z 轴方向。
	 * @param z_dir Z 轴方向。
	 */
	SetDirection(z_dir: Mx3dGeDir): void;
	/**
	 * 计算与另一个右手坐标系的角度。
	 * @param theOther 另一个右手坐标系。
	 * @returns 两个坐标系之间的角度。
	 */
	Angle(theOther: Mx3dGeCSYSR): number;
	/**
	 * 获取右手坐标系的轴。
	 * @returns 右手坐标系的轴。
	 */
	Axis(): Mx3dGeAxis;
	/**
	 * 判断右手坐标系是否与另一个右手坐标系共面。
	 * @param Other 另一个右手坐标系。
	 * @param LinearTolerance 线性公差。
	 * @param AngularTolerance 角度公差。
	 * @returns 是否共面。
	 */
	IsCoplanarWithCSYSR(Other: Mx3dGeCSYSR, LinearTolerance: number, AngularTolerance: number): boolean;
	/**
	 * 判断右手坐标系是否与一个轴共面。
	 * @param A1 轴对象。
	 * @param LinearTolerance 线性公差。
	 * @param AngularTolerance 角度公差。
	 * @returns 是否共面。
	 */
	IsCoplanarWithAxis(A1: Mx3dGeAxis, LinearTolerance: number, AngularTolerance: number): boolean;
	/**
	 * 通过一个点对右手坐标系进行镜像。
	 * @param P 镜像点。
	 */
	MirrorByPoint(P: Mx3dGePoint): void;
	/**
	 * 通过一个点对右手坐标系进行镜像，并返回镜像后的右手坐标系对象。
	 * @param P 镜像点。
	 * @returns 镜像后的右手坐标系对象。
	 */
	MirroredByPoint(P: Mx3dGePoint): Mx3dGeCSYSR;
	/**
	 * 通过一个轴对右手坐标系进行镜像。
	 * @param A1 镜像轴。
	 */
	MirrorByAxis(A1: Mx3dGeAxis): void;
	/**
	 * 通过一个轴对右手坐标系进行镜像，并返回镜像后的右手坐标系对象。
	 * @param A1 镜像轴。
	 * @returns 镜像后的右手坐标系对象。
	 */
	MirroredByAxis(A1: Mx3dGeAxis): Mx3dGeCSYSR;
	/**
	 * 通过右手坐标系对当前右手坐标系进行镜像。
	 * @param A2 右手坐标系对象。
	 */
	MirrorByCSYSR(A2: Mx3dGeCSYSR): void;
	/**
	 * 通过右手坐标系对当前右手坐标系进行镜像，并返回镜像后的右手坐标系对象。
	 * @param A2 右手坐标系对象。
	 * @returns 镜像后的右手坐标系对象。
	 */
	MirroredByCSYSR(A2: Mx3dGeCSYSR): Mx3dGeCSYSR;
	/**
	 * 绕轴旋转右手坐标系。
	 * @param theA1 旋转轴。
	 * @param theAng 旋转角度。
	 */
	Rotate(theA1: Mx3dGeAxis, theAng: number): void;
	/**
	 * 绕轴旋转右手坐标系，并返回旋转后的右手坐标系对象。
	 * @param theA1 旋转轴。
	 * @param theAng 旋转角度。
	 * @returns 旋转后的右手坐标系对象。
	 */
	Rotated(theA1: Mx3dGeAxis, theAng: number): Mx3dGeCSYSR;
	/**
	 * 对右手坐标系进行缩放。
	 * @param theP 缩放中心点。
	 * @param theS 缩放比例。
	 */
	Scale(theP: Mx3dGePoint, theS: number): void;
	/**
	 * 对右手坐标系进行缩放，并返回缩放后的右手坐标系对象。
	 * @param theP 缩放中心点。
	 * @param theS 缩放比例。
	 * @returns 缩放后的右手坐标系对象。
	 */
	Scaled(theP: Mx3dGePoint, theS: number): Mx3dGeCSYSR;
	/**
	 * 变换右手坐标系。
	 * @param theT 变换矩阵。
	 */
	Transform(theT: Mx3dGeTrsf): void;
	/**
	 * 变换右手坐标系，并返回变换后的右手坐标系对象。
	 * @param theT 变换矩阵。
	 * @returns 变换后的右手坐标系对象。
	 */
	Transformed(theT: Mx3dGeTrsf): Mx3dGeCSYSR;
	/**
	 * 通过向量平移右手坐标系。
	 * @param theV 平移向量。
	 */
	TranslateByVec(theV: Mx3dGeVec): void;
	/**
	 * 通过向量平移右手坐标系，并返回平移后的右手坐标系对象。
	 * @param theV 平移向量。
	 * @returns 平移后的右手坐标系对象。
	 */
	TranslatedByVec(theV: Mx3dGeVec): Mx3dGeCSYSR;
	/**
	 * 通过两个点平移右手坐标系。
	 * @param theP1 起点。
	 * @param theP2 终点。
	 */
	TranslateBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): void;
	/**
	 * 通过两个点平移右手坐标系，并返回平移后的右手坐标系对象。
	 * @param theP1 起点。
	 * @param theP2 终点。
	 * @returns 平移后的右手坐标系对象。
	 */
	TranslatedBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): Mx3dGeCSYSR;
}
/**
 * 表示圆柱体的类。
 */
export declare class Mx3dGeCylinder extends Mx3dGeObject {
	/**
	 * 创建一个默认的圆柱体对象。
	 */
	constructor();
	/**
	 * 使用坐标系和半径创建一个圆柱体对象。
	 * @param theA3 坐标系。
	 * @param theRadius 圆柱体的半径。
	 */
	constructor(theA3: Mx3dGeCSYS, theRadius: number);
	/**
	 * 设置圆柱体的轴。
	 * @param theA1 圆柱体的轴。
	 */
	SetAxis(theA1: Mx3dGeAxis): void;
	/**
	 * 设置圆柱体的原点位置。
	 * @param theLoc 原点位置。
	 */
	SetLocation(theLoc: Mx3dGePoint): void;
	/**
	 * 设置圆柱体的位置。
	 * @param theA3 坐标系。
	 */
	SetPosition(theA3: Mx3dGeCSYS): void;
	/**
	 * 设置圆柱体的半径。
	 * @param theR 圆柱体的半径。
	 */
	SetRadius(theR: number): void;
	/**
	 * 反转圆柱体的 U 参数方向。
	 */
	UReverse(): void;
	/**
	 * 反转圆柱体的 V 参数方向。
	 */
	VReverse(): void;
	/**
	 * 检查圆柱体的方向是否为正向。
	 * @returns 是否为正向。
	 */
	Direct(): boolean;
	/**
	 * 获取圆柱体的轴。
	 * @returns 圆柱体的轴。
	 */
	Axis(): Mx3dGeAxis;
	/**
	 * 获取圆柱体的原点位置。
	 * @returns 原点位置。
	 */
	Location(): Mx3dGePoint;
	/**
	 * 获取圆柱体的位置。
	 * @returns 圆柱体的位置。
	 */
	Position(): Mx3dGeCSYS;
	/**
	 * 获取圆柱体的半径。
	 * @returns 圆柱体的半径。
	 */
	Radius(): number;
	/**
	 * 获取圆柱体的 X 轴。
	 * @returns X 轴。
	 */
	XAxis(): Mx3dGeAxis;
	/**
	 * 获取圆柱体的 Y 轴。
	 * @returns Y 轴。
	 */
	YAxis(): Mx3dGeAxis;
	/**
	 * 通过一个点对圆柱体进行镜像。
	 * @param theP 镜像点。
	 */
	MirrorByPoint(theP: Mx3dGePoint): void;
	/**
	 * 通过一个点对圆柱体进行镜像，并返回镜像后的圆柱体对象。
	 * @param theP 镜像点。
	 * @returns 镜像后的圆柱体对象。
	 */
	MirroredByPoint(theP: Mx3dGePoint): Mx3dGeCylinder;
	/**
	 * 通过一个轴对圆柱体进行镜像。
	 * @param theA1 镜像轴。
	 */
	MirrorByAxis(theA1: Mx3dGeAxis): void;
	/**
	 * 通过一个轴对圆柱体进行镜像，并返回镜像后的圆柱体对象。
	 * @param theA1 镜像轴。
	 * @returns 镜像后的圆柱体对象。
	 */
	MirroredByAxis(theA1: Mx3dGeAxis): Mx3dGeCylinder;
	/**
	 * 通过右手坐标系对圆柱体进行镜像。
	 * @param theA2 右手坐标系。
	 */
	MirrorByCSYSR(theA2: Mx3dGeCSYSR): void;
	/**
	 * 通过右手坐标系对圆柱体进行镜像，并返回镜像后的圆柱体对象。
	 * @param theA2 右手坐标系。
	 * @returns 镜像后的圆柱体对象。
	 */
	MirroredByCSYSR(theA2: Mx3dGeCSYSR): Mx3dGeCylinder;
	/**
	 * 绕轴旋转圆柱体。
	 * @param theA1 旋转轴。
	 * @param theAng 旋转角度。
	 */
	Rotate(theA1: Mx3dGeAxis, theAng: number): void;
	/**
	 * 绕轴旋转圆柱体，并返回旋转后的圆柱体对象。
	 * @param theA1 旋转轴。
	 * @param theAng 旋转角度。
	 * @returns 旋转后的圆柱体对象。
	 */
	Rotated(theA1: Mx3dGeAxis, theAng: number): Mx3dGeCylinder;
	/**
	 * 对圆柱体进行缩放。
	 * @param theP 缩放中心点。
	 * @param theS 缩放比例。
	 */
	Scale(theP: Mx3dGePoint, theS: number): void;
	/**
	 * 对圆柱体进行缩放，并返回缩放后的圆柱体对象。
	 * @param theP 缩放中心点。
	 * @param theS 缩放比例。
	 * @returns 缩放后的圆柱体对象。
	 */
	Scaled(theP: Mx3dGePoint, theS: number): Mx3dGeCylinder;
	/**
	 * 变换圆柱体。
	 * @param theT 变换矩阵。
	 */
	Transform(theT: Mx3dGeTrsf): void;
	/**
	 * 变换圆柱体，并返回变换后的圆柱体对象。
	 * @param theT 变换矩阵。
	 * @returns 变换后的圆柱体对象。
	 */
	Transformed(theT: Mx3dGeTrsf): Mx3dGeCylinder;
	/**
	 * 通过向量平移圆柱体。
	 * @param theV 平移向量。
	 */
	TranslateByVec(theV: Mx3dGeVec): void;
	/**
	 * 通过向量平移圆柱体，并返回平移后的圆柱体对象。
	 * @param theV 平移向量。
	 * @returns 平移后的圆柱体对象。
	 */
	TranslatedByVec(theV: Mx3dGeVec): Mx3dGeCylinder;
	/**
	 * 将圆柱体的位置沿着两个点之间的直线进行平移。
	 * @param theP1 - 第一个点，用于确定平移的起点。
	 * @param theP2 - 第二个点，用于确定平移的终点。
	 */
	TranslateBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): void;
	/**
	 * 创建一个新的圆柱体对象，位置沿着两个点之间的直线进行平移。
	 * @param theP1 - 第一个点，用于确定平移的起点。
	 * @param theP2 - 第二个点，用于确定平移的终点。
	 * @returns 返回一个新的 Mx3dGeCylinder 对象，平移后的圆柱体。
	 */
	TranslatedBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): Mx3dGeCylinder;
	/**
	 * 创建一个 Mx3dShapeObject 对象，表示圆柱体的形状。
	 * @param H - 圆柱体的高度。
	 * @param Angle - 可选参数，表示圆柱体的角度。
	 * @returns 返回一个新的 Mx3dShapeObject 对象，表示圆柱体的形状。
	 */
	Shape(H: number, Angle?: number): Mx3dShapeObject;
}
/**
 * 文档类，继承自 Mx3dDbObject。
 */
export declare class Mx3dDbDocument extends Mx3dDbObject {
	/**
	 * 构造函数，用于初始化 Mx3dDbDocument 实例。
	 */
	constructor();
	/**
	 * 读取模型文件并解析为文档。
	 * @param theFile - 要读取的文件对象。
	 * @param theFormat - 模型文件格式。
	 * @returns 返回一个 Promise，解析结果为布尔值，表示成功或失败。
	 */
	read(theFile: File, theFormat: MdGe.MxFormat): Promise<boolean>;
	readFile(theFilePath: string, theFormat: MdGe.MxFormat): boolean;
	/**
	 * 获取访问入口标签。
	 * @returns 返回访问入口标签对象。
	 */
	getAccessLabel(): Mx3dDbLabel;
	/**
	 * 获取入口形状标签。
	 * @returns 返回入口形状标签对象。
	 */
	getShapesLabel(): Mx3dDbLabel;
	/**
	 * 获取入口颜色标签。
	 * @returns 返回入口颜色标签对象。
	 */
	getColorsLabel(): Mx3dDbLabel;
	/**
	 * 获取入口图层标签。
	 * @returns 返回入口图层标签对象。
	 */
	getLayersLabel(): Mx3dDbLabel;
	/**
	 * 添加一个新的形状标签。
	 * @returns 返回新增的形状标签对象。
	 */
	addShapeLabel(): Mx3dDbLabel;
	/**
	 * 删除指定的形状标签。
	 * @param theLabel - 要删除的形状标签对象。
	 * @returns 返回布尔值，表示是否成功删除。
	 */
	removeShapeLabel(theLabel: Mx3dDbLabel): boolean;
	/**
	 * 删除指定的组件。
	 * @param theLabel - 要删除的标签对象。
	 */
	removeComponent(theLabel: Mx3dDbLabel): void;
	/**
	 * 获取顶级自由标签列表。
	 * @returns 返回顶级自由标签的数组。
	 */
	getTopFreeLabels(): Mx3dDbLabel[];
	/**
	 * 获取文档名称。
	 * @returns 返回文档名称的字符串。
	 */
	getDocName(): string;
	/**
	 * 获取视图对象。
	 * @returns 返回视图对象。
	 */
	getView(): Mx3dView;
	/**
	 * 添加一个新的颜色标签。
	 * @param theColor - 颜色对象。
	 * @returns 返回新增的颜色标签对象。
	 */
	addColorLabel(theColor: Mx3dGeColor): Mx3dDbLabel;
	/**
	 * 写入文档到指定路径。
	 * @param theFilePath - 文件路径。
	 * @param theFormat - 文件格式。
	 * @returns 返回布尔值，表示是否成功写入。
	 */
	write(theFilePath: string, theFormat: MdGe.MxFormat): boolean;
	/**
	 * 开启一个事务开始。
	 */
	newCommand(): void;
	/**
	 * 中止当前事务。
	 */
	abortCommand(): void;
	/**
	 * 提交当前事务。
	 * @returns 返回布尔值，表示是否成功提交。
	 */
	commitCommand(): boolean;
	/**
	 * 撤销最后一个记录的事务。
	 * @returns 返回布尔值，表示是否成功撤销。
	 */
	undo(): boolean;
	/**
	 * 重做最后一个撤销的事务。
	 * @returns 返回布尔值，表示是否成功重做。
	 */
	redo(): boolean;
}
/**
 * 文档标签类，继承自 Mx3dDbObject，提供对标签的各种操作。
 */
export declare class Mx3dDbLabel extends Mx3dDbObject {
	/**
	 * @internal
	 */
	constructor(p?: object);
	/**
	 * 设置标签的形状。
	 * @param theShape - 形状对象。
	 */
	setShape(theShape: Mx3dShapeObject): void;
	/**
	 * 获取标签的形状。
	 * @returns 返回形状对象。
	 */
	getShape(): Mx3dShapeObject;
	/**
	 * 检查标签是否有子标签。
	 * @returns 返回布尔值，表示是否有子标签。
	 */
	hasChildLabel(): boolean;
	/**
	 * 获取所有子标签。
	 * @returns 返回子标签的数组。
	 */
	getChildLabels(): Mx3dDbLabel[];
	/**
	 * 检查标签是否有父标签。
	 * @returns 返回布尔值，表示是否有父标签。
	 */
	hasParentLabel(): boolean;
	/**
	 * 获取父标签。
	 * @returns 返回父标签对象。
	 */
	getParentLabel(): Mx3dDbLabel;
	/**
	 * 添加一个子标签。
	 * @returns 返回新增的子标签对象。
	 */
	addChildLabel(): Mx3dDbLabel;
	/**
	 * 添加一个子形状。
	 * @param theShape - 形状对象。
	 * @returns 返回新增的子标签对象。
	 */
	addSubShape(theShape: Mx3dShapeObject): Mx3dDbLabel;
	/**
	 * 检查标签是否是引用。
	 * @returns 返回布尔值，表示是否是引用。
	 */
	isReference(): boolean;
	/**
	 * 检查标签是否是装配。
	 * @returns 返回布尔值，表示是否是装配。
	 */
	isAssembly(): boolean;
	/**
	 * 检查标签是否是简单形状。
	 * @returns 返回布尔值，表示是否是简单形状。
	 */
	isSimpleShape(): boolean;
	/**
	 * 检查标签是否是顶级标签。
	 * @returns 返回布尔值，表示是否是顶级标签。
	 */
	isTopLevel(): boolean;
	/**
	 * 检查标签是否是自由标签。
	 * @returns 返回布尔值，表示是否是自由标签。
	 */
	isFree(): boolean;
	/**
	 * 检查标签是否是形状。
	 * @returns 返回布尔值，表示是否是形状。
	 */
	isShape(): boolean;
	/**
	 * 检查标签是否是组件。
	 * @returns 返回布尔值，表示是否是组件。
	 */
	isComponent(): boolean;
	/**
	 * 检查标签是否是复合形状。
	 * @returns 返回布尔值，表示是否是复合形状。
	 */
	isCompound(): boolean;
	/**
	 * 检查标签是否是子形状。
	 * @returns 返回布尔值，表示是否是子形状。
	 */
	isSubShape(): boolean;
	/**
	 * 获取引用的标签。
	 * @returns 返回引用的标签对象。
	 */
	getReferredLabel(): Mx3dDbLabel;
	/**
	 * 获取标签的位置。
	 * @returns 返回位置对象。
	 */
	getLocation(): Mx3dGeLocation;
	/**
	 * 添加一个组件。
	 * @param comp - 组件标签对象。
	 * @param Loc - 位置对象。
	 * @returns 返回添加的组件标签对象。
	 */
	addComponent(comp: Mx3dDbLabel, Loc: Mx3dGeLocation): Mx3dDbLabel;
	/**
	 * 设置标签名称。
	 * @param theName - 标签名称。
	 */
	setName(theName: string): void;
	/**
	 * 检查标签是否有形状。
	 * @returns 返回布尔值，表示是否有形状。
	 */
	hasShape(): boolean;
	/**
	 * 检查标签是否设置了颜色。
	 * @returns 返回布尔值，表示是否设置了颜色。
	 */
	isSetColor(): boolean;
	/**
	 * 设置标签颜色。
	 * @param theColor - 颜色对象。
	 */
	setColor(theColor: Mx3dGeColor): void;
	/**
	 * 获取标签颜色。
	 * @returns 返回颜色对象。
	 */
	getColor(): Mx3dGeColor;
	/**
	 * 获取标签名称。
	 * @returns 返回标签名称的字符串。
	 */
	getName(): string;
	/**
	 * 获取标签条目，是一个唯一的数字字符序列。
	 * @returns 返回标签条目的字符串。
	 */
	getEntry(): string;
	/**
	 * 获取标签属性字符串，JSON字符串。
	 * @returns 返回标签属性字符串。
	 */
	getAttributeStr(): string;
	/**
	 * 设置标签形状的纹理。
	 * @param theFilePath - 纹理文件路径。
	 * @param theScaleU - U 方向缩放比例，默认值为 1。
	 * @param theScaleV - V 方向缩放比例，默认值为 1。
	 * @param theRepeatU - U 方向重复次数，默认值为 1。
	 * @param theRepeatV - V 方向重复次数，默认值为 1。
	 * @param theOriginU - U 方向起始位置，默认值为 0。
	 * @param theOriginV - V 方向起始位置，默认值为 0。
	 */
	setTexture(theFilePath: string, theScaleU?: number, theScaleV?: number, theRepeatU?: number, theRepeatV?: number, theOriginU?: number, theOriginV?: number): void;
	/**
	 * 设置标签形状的材质。
	 * @param theMaterial - 材质对象。
	 */
	setMaterial(theMaterial: Mx3dGeMaterial): void;
}
/**
 * 表示3D几何系统中的位置。
 * 提供了操作3D位置和变换的各种方法。
 */
export declare class Mx3dGeLocation extends Mx3dGeObject {
	/**
	 * 默认构造函数，创建一个单位位置。
	 */
	constructor();
	/**
	 * 构造函数，使用指定的变换初始化位置。
	 * @param theTrsf - 用于初始化位置的变换对象。
	 */
	constructor(theTrsf: Mx3dGeTrsf);
	/**
	 * 检查当前位置是否为单位变换。
	 * @returns 如果当前位置为单位变换，则返回true；否则返回false。
	 */
	IsIdentity(): boolean;
	/**
	 * 将当前位置设置为单位变换。
	 */
	Identity(): void;
	/**
	 * 获取位置的第一幂。
	 * @returns 位置的第一幂值。
	 */
	FirstPower(): number;
	/**
	 * 获取下一个位置对象。
	 * @returns 下一个位置对象。
	 */
	NextLocation(): Mx3dGeLocation;
	/**
	 * 计算当前位置的逆变换。
	 * @returns 逆变换后的位置对象。
	 */
	Inverted(): Mx3dGeLocation;
	/**
	 * 计算当前位置与另一个位置的乘积。
	 * @param theLocation - 另一个位置对象。
	 * @returns 乘积后的位置对象。
	 */
	Multiplied(theLocation: Mx3dGeLocation): Mx3dGeLocation;
	/**
	 * 计算当前位置与另一个位置的除法。
	 * @param Other - 另一个位置对象。
	 * @returns 除法后的位置对象。
	 */
	Divided(Other: Mx3dGeLocation): Mx3dGeLocation;
	/**
	 * 计算当前位置与另一个位置的左除（前除）。
	 * @param Other - 另一个位置对象。
	 * @returns 左除后的位置对象。
	 */
	Predivided(Other: Mx3dGeLocation): Mx3dGeLocation;
	/**
	 * 计算当前位置的幂运算。
	 * @param pwr - 幂的值。
	 * @returns 幂运算后的位置对象。
	 */
	Powered(pwr: number): Mx3dGeLocation;
	/**
	 * 检查当前位置是否与另一个位置相等。
	 * @param Other - 另一个位置对象。
	 * @returns 如果当前位置与另一个位置相等，则返回true；否则返回false。
	 */
	IsEqual(Other: Mx3dGeLocation): boolean;
	/**
	 * 检查当前位置是否与另一个位置不同。
	 * @param Other - 另一个位置对象。
	 * @returns 如果当前位置与另一个位置不同，则返回true；否则返回false。
	 */
	IsDifferent(Other: Mx3dGeLocation): boolean;
	/**
	 * 清除当前位置的变换。
	 */
	Clear(): void;
	/**
	 * 获取位置的缩放精度。
	 * @returns 位置的缩放精度值。
	 */
	ScalePrec(): number;
}
/**
 * 表示3D几何中的平面。
 * 平面对象可通过坐标系、点、方向向量等多种方式定义，并提供了多种几何变换和操作方法。
 */
export declare class Mx3dGePlane extends Mx3dGeObject {
	/**
	 * 默认构造函数，创建一个平面。
	 */
	constructor();
	/**
	 * 构造函数，使用指定坐标系初始化平面。
	 *
	 * @param theA3 - 用于初始化平面的坐标系（CSYS）对象。
	 */
	constructor(theA3: Mx3dGeCSYS);
	/**
	 * 构造函数，使用指定点和向量初始化平面。
	 *
	 * @param theP - 平面上的点。
	 * @param theV - 与平面垂直的向量，用于定义平面的方向。
	 */
	constructor(theP: Mx3dGePoint, theV: Mx3dGeDir);
	/**
	 * 构造函数，使用平面方程的系数初始化平面。
	 *
	 * @param theA - 平面方程中的系数A。
	 * @param theB - 平面方程中的系数B。
	 * @param theC - 平面方程中的系数C。
	 * @param theD - 平面方程中的系数D。
	 */
	constructor(theA: number, theB: number, theC: number, theD: number);
	/**
	 * 设置平面的轴向。
	 *
	 * @param theA1 - 平面轴向对象。
	 */
	SetAxis(theA1: Mx3dGeAxis): void;
	/**
	 * 设置平面的位置。
	 *
	 * @param theLoc - 平面上的一个点，用于定义平面的具体位置。
	 */
	SetLocation(theLoc: Mx3dGePoint): void;
	/**
	 * 设置平面的位置和方向。
	 *
	 * @param theA3 - 用于设置平面位置和方向的坐标系。
	 */
	SetPosition(theA3: Mx3dGeCSYS): void;
	/**
	 * 反转U方向。
	 */
	UReverse(): void;
	/**
	 * 反转V方向。
	 */
	VReverse(): void;
	/**
	 * 检查平面是否是右手坐标系。
	 *
	 * @returns 如果平面是右手坐标系，则返回true；否则返回false。
	 */
	Direct(): boolean;
	/**
	 * 获取平面的法向轴向。
	 *
	 * @returns 平面的法向轴向对象。
	 */
	Axis(): Mx3dGeAxis;
	/**
	 * 获取平面上的位置点。
	 *
	 * @returns 平面上的点对象。
	 */
	Location(): Mx3dGePoint;
	/**
	 * 获取平面的坐标系位置。
	 *
	 * @returns 平面的坐标系对象。
	 */
	Position(): Mx3dGeCSYS;
	/**
	 * 计算点到平面的距离。
	 *
	 * @param theP - 需要计算距离的点。
	 * @returns 点到平面的距离值。
	 */
	DistanceToPoint(theP: Mx3dGePoint): number;
	/**
	 * 计算两个平面之间的距离。
	 *
	 * @param theOther - 另一个平面对象。
	 * @returns 两个平面之间的距离值。
	 */
	DistanceToPlane(theOther: Mx3dGePlane): number;
	/**
	 * 计算点到平面的平方距离。
	 *
	 * @param theP - 需要计算平方距离的点。
	 * @returns 点到平面的平方距离值。
	 */
	SquareDistanceToPoint(theP: Mx3dGePoint): number;
	/**
	 * 计算两个平面之间的平方距离。
	 *
	 * @param theOther - 另一个平面对象。
	 * @returns 两个平面之间的平方距离值。
	 */
	SquareDistanceToPlane(theOther: Mx3dGePlane): number;
	/**
	 * 获取平面X轴的方向。
	 *
	 * @returns 平面X轴的轴向对象。
	 */
	XAxis(): Mx3dGeAxis;
	/**
	 * 获取平面Y轴的方向。
	 *
	 * @returns 平面Y轴的轴向对象。
	 */
	YAxis(): Mx3dGeAxis;
	/**
	 * 检查点是否在平面上。
	 *
	 * @param theP - 需要检查的点。
	 * @param theLinearTolerance - 线性容差，用于判定点是否在平面上。
	 * @returns 如果点在平面上，则返回true；否则返回false。
	 */
	Contains(theP: Mx3dGePoint, theLinearTolerance: number): boolean;
	/**
	 * 将平面通过指定点进行镜像。
	 *
	 * @param theP - 镜像点。
	 */
	MirrorByPoint(theP: Mx3dGePoint): void;
	/**
	 * 返回镜像平面对象（通过指定点）。
	 *
	 * @param theP - 镜像点。
	 * @returns 镜像后的平面对象。
	 */
	MirroredByPoint(theP: Mx3dGePoint): Mx3dGePlane;
	/**
	 * 将平面通过指定轴进行镜像。
	 *
	 * @param theA1 - 镜像轴向。
	 */
	MirrorByAxis(theA1: Mx3dGeAxis): void;
	/**
	 * 返回镜像平面对象（通过指定轴）。
	 *
	 * @param theA1 - 镜像轴向。
	 * @returns 镜像后的平面对象。
	 */
	MirroredByAxis(theA1: Mx3dGeAxis): Mx3dGePlane;
	/**
	 * 将平面通过指定坐标系进行镜像。
	 *
	 * @param theA2 - 镜像坐标系。
	 */
	MirrorByCSYSR(theA2: Mx3dGeCSYSR): void;
	/**
	 * 返回镜像平面对象（通过指定坐标系）。
	 *
	 * @param theA2 - 镜像坐标系。
	 * @returns 镜像后的平面对象。
	 */
	MirroredByCSYSR(theA2: Mx3dGeCSYSR): Mx3dGePlane;
	/**
	 * 将平面绕指定轴旋转。
	 *
	 * @param theA1 - 旋转轴向。
	 * @param theAng - 旋转角度。
	 */
	Rotate(theA1: Mx3dGeAxis, theAng: number): void;
	/**
	 * 返回旋转后的平面对象。
	 *
	 * @param theA1 - 旋转轴向。
	 * @param theAng - 旋转角度。
	 * @returns 旋转后的平面对象。
	 */
	Rotated(theA1: Mx3dGeAxis, theAng: number): Mx3dGePlane;
	/**
	 * 将平面缩放到指定点和比例。
	 *
	 * @param theP - 缩放点。
	 * @param theS - 缩放比例。
	 */
	Scale(theP: Mx3dGePoint, theS: number): void;
	/**
	 * 返回缩放后的平面对象。
	 *
	 * @param theP - 缩放点。
	 * @param theS - 缩放比例。
	 * @returns 缩放后的平面对象。
	 */
	Scaled(theP: Mx3dGePoint, theS: number): Mx3dGePlane;
	/**
	 * 对平面应用变换。
	 *
	 * @param theT - 变换矩阵。
	 */
	Transform(theT: Mx3dGeTrsf): void;
	/**
	 * 返回变换后的平面对象。
	 *
	 * @param theT - 变换矩阵。
	 * @returns 变换后的平面对象。
	 */
	Transformed(theT: Mx3dGeTrsf): Mx3dGePlane;
	/**
	 * 将平面沿指定向量平移。
	 *
	 * @param theV - 平移向量。
	 */
	TranslateByVec(theV: Mx3dGeVec): void;
	/**
	 * 返回平移后的平面对象。
	 *
	 * @param theV - 平移向量。
	 * @returns 平移后的平面对象。
	 */
	TranslatedByVec(theV: Mx3dGeVec): Mx3dGePlane;
	/**
	 * 将平面通过两点平移。
	 *
	 * @param theP1 - 第一个点。
	 * @param theP2 - 第二个点。
	 */
	TranslateBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): void;
	/**
	 * 返回通过两点平移后的平面对象。
	 *
	 * @param theP1 - 第一个点。
	 * @param theP2 - 第二个点。
	 * @returns 平移后的平面对象。
	 */
	TranslatedBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): Mx3dGePlane;
	/**
	 * 获取平面的拓扑形状。
	 *
	 * @returns 平面形状对象。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 获取平面在指定范围内的拓扑形状。
	 *
	 * @param UMin - U方向的最小值。
	 * @param UMax - U方向的最大值。
	 * @param VMin - V方向的最小值。
	 * @param VMax - V方向的最大值。
	 * @returns 平面形状对象。
	 */
	Shape(UMin: number, UMax: number, VMin: number, VMax: number): Mx3dShapeObject;
}
/**
 * 表示一个文字符号，继承自 Mx3dSymbolObject
 */
export declare class Mx3dSymbolText extends Mx3dSymbolObject {
	/**
	 * 创建一个默认的文字符号对象。
	 */
	constructor();
	/**
	 * 使用文本、高度和位置创建一个文字符号对象。
	 * @param text 文本内容。
	 * @param height 文本高度。
	 * @param position 文本位置。
	 */
	constructor(text: string, height: number, position: Mx3dGePoint);
	/**
	 * 设置文本颜色。
	 * @param theColor 颜色对象。
	 */
	SetColor(theColor: Mx3dGeColor): void;
	/**
	 * 设置文本颜色。
	 * @param theR 红色分量。
	 * @param theG 绿色分量。
	 * @param theB 蓝色分量。
	 */
	SetColor(theR: number, theG: number, theB: number): void;
	/**
	 * 设置文本内容。
	 * @param text 文本内容。
	 */
	SetText(text: string): void;
	/**
	 * 设置文本位置。
	 * @param position 文本位置。
	 */
	SetPositon(position: Mx3dGePoint): void;
	/**
	 * 设置水平对齐方式。
	 * @param theHJust 水平对齐方式。
	 */
	SetHJustification(theHJust: MdGe.MxHorizontalTextAlignment): void;
	/**
	 * 设置垂直对齐方式。
	 * @param theVJust 垂直对齐方式。
	 */
	SetVJustification(theVJust: MdGe.MxVerticalTextAlignment): void;
	/**
	 * 设置文本角度。
	 * @param theAngle 文本角度。
	 */
	SetAngle(theAngle: number): void;
	/**
	 * 设置是否可缩放。
	 * @param theIsZoomable 是否可缩放。
	 */
	SetZoomable(theIsZoomable: boolean): void;
	/**
	 * 设置文本高度。
	 * @param height 文本高度。
	 */
	SetHeight(height: number): void;
	/**
	 * 设置字体样式。
	 * @param theFontAspect 字体样式。
	 */
	SetFontAspect(theFontAspect: MdGe.MxFontAspect): void;
	/**
	 * 设置字体。
	 * @param theFont 字体名称。
	 */
	SetFont(theFont: string): void;
	/**
	 * 设置3D方向。
	 * @param theOrientation 3D方向。
	 */
	SetOrientation3D(theOrientation: Mx3dGeCSYSR): void;
	/**
	 * 取消3D方向设置。
	 */
	UnsetOrientation3D(): void;
	/**
	 * 获取文本位置。
	 * @returns 文本位置。
	 */
	Position(): Mx3dGePoint;
	/**
	 * 获取字体样式。
	 * @returns 字体外观样式。
	 */
	FontAspect(): MdGe.MxFontAspect;
	/**
	 * 获取3D方向。
	 * @returns 3D方向。
	 */
	Orientation3D(): Mx3dGeCSYSR;
	/**
	 * 检查是否有3D方向。
	 * @returns 是否有3D方向。
	 */
	HasOrientation3D(): boolean;
	/**
	 * 设置是否翻转。
	 * @param theIsFlipping 是否翻转。
	 */
	SetFlipping(theIsFlipping: boolean): void;
	/**
	 * 检查是否翻转。
	 * @returns 是否翻转。
	 */
	HasFlipping(): boolean;
	/**
	 * 检查是否有自定义锚点。
	 * @returns 是否有自定义锚点。
	 */
	HasOwnAnchorPoint(): boolean;
	/**
	 * 设置是否有自定义锚点。
	 * @param theOwnAnchorPoint 是否有自定义锚点。
	 */
	SetOwnAnchorPoint(theOwnAnchorPoint: boolean): void;
	/**
	 * 设置显示类型。
	 * @param theDisplayType 显示类型。
	 */
	SetDisplayType(theDisplayType: MdGe.MxTypeOfDisplayText): void;
	/**
	 * 设置副标题颜色。
	 * @param theR 红色分量。
	 * @param theG 绿色分量。
	 * @param theB 蓝色分量。
	 */
	SetColorSubTitle(theR: number, theG: number, theB: number): void;
}
/**
 * 形状对象的向下类型转换接口
 */
export declare class Mx3dShapeDownCast {
	/**
	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeVertex 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeVertex)
	 * @param S 需要转换的形状对象
	 * @returns 转换后的子类形状对象
	 */
	static Vertex(S: Mx3dShapeObject): Mx3dShapeVertex;
	/**
	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeEdge 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeEdge)
	 * @param S 需要转换的形状对象
	 * @returns 转换后的子类形状对象
	 */
	static Edge(S: Mx3dShapeObject): Mx3dShapeEdge;
	/**
	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeWire 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeWire)
	 * @param S 需要转换的形状对象
	 * @returns 转换后的子类形状对象
	 */
	static Wire(S: Mx3dShapeObject): Mx3dShapeWire;
	/**
	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeFace 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeFace)
	 * @param S 需要转换的形状对象
	 * @returns 转换后的子类形状对象
	 */
	static Face(S: Mx3dShapeObject): Mx3dShapeFace;
	/**
	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeShell 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeShell)
	 * @param S 需要转换的形状对象
	 * @returns 转换后的子类形状对象
	 */
	static Shell(S: Mx3dShapeObject): Mx3dShapeShell;
	/**
	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeSolid 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeSolid)
	 * @param S 需要转换的形状对象
	 * @returns 转换后的子类形状对象
	 */
	static Solid(S: Mx3dShapeObject): Mx3dShapeSolid;
	/**
	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeCompSolid 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeCompSolid)
	 * @param S 需要转换的形状对象
	 * @returns 转换后的子类形状对象
	 */
	static CompSolid(S: Mx3dShapeObject): Mx3dShapeCompSolid;
	/**
	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeCompound 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeCompound)
	 * @param S 需要转换的形状对象
	 * @returns 转换后的子类形状对象
	 */
	static Compound(S: Mx3dShapeObject): Mx3dShapeCompound;
}
/**
 * 拓扑转换为参数几何的接口
 */
export declare class Mx3dBrepCastGeom {
	/**
	 * 将拓扑面转换为参数几何曲面
	 * @param F 拓扑面
	 * @returns 参数几何曲面
	 */
	static Surface(F: Mx3dShapeFace): Mx3dGeomSurface;
	/**
	 * 将拓扑边Edge转换为参数几何曲线
	 * @param E 拓扑Edge
	 * @param SEParam 返回转换后曲线的起始参数
	 * @returns 参数几何曲线
	 */
	static Curve(E: Mx3dShapeEdge, SEParam: [
		FirstParam: number,
		LastParam: number
	]): Mx3dGeomCurve;
}
/**
 * 工具类
 */
export declare class Mx3dUtils {
	/**
	 * 从URL地址加载文件到虚拟文件系统
	 * @param theFileUrl 资源URL地址
	 * @param theSaveFileName 文件在虚拟文件系统的完整路径
	 * @returns 成功后返回文件在虚拟文件系统中的绝对路径
	 */
	static LoadFileFromUrl(theFileUrl: string, theSaveFileName: string): Promise<string>;
	/**
	 * 从虚拟文件系统中读取模型文件，返回模型文件中的形状
	 * @param theFilePath 模型文件的完整路径
	 * @param theFormat 模型文件的格式
	 * @returns 模型文件中读取到的形状
	 */
	static LoadShapeFromFile(theFilePath: string, theFormat: MdGe.MxFormat): Mx3dShapeObject[];
	static LoadLocalFile(theFile: File, theFilePath: string): Promise<string>;
}
/**
 * 表示非参数几何直线的类。
 */
export declare class Mx3dGeLine extends Mx3dGeCurve {
	/**
	 * 使用轴创建一条直线。
	 * @param A1 轴对象。
	 */
	constructor(A1: Mx3dGeAxis);
	/**
	 * 使用点和方向创建一条直线。
	 * @param P 起点。
	 * @param V 方向。
	 */
	constructor(P: Mx3dGePoint, V: Mx3dGeDir);
	/**
	 * 设置直线的方向。
	 * @param V 方向对象。
	 */
	SetDirection(V: Mx3dGeDir): void;
	/**
	 * 设置直线的起点。
	 * @param P 点对象。
	 */
	SetLocation(P: Mx3dGePoint): void;
	/**
	 * 设置直线的位置。
	 * @param A1 轴对象。
	 */
	SetPosition(A1: Mx3dGeAxis): void;
	/**
	 * 获取直线的位置。
	 * @returns 轴对象。
	 */
	Position(): Mx3dGeAxis;
	/**
	 * 反转直线的方向。
	 */
	Reverse(): void;
	/**
	 * 获取反转方向后的新直线。
	 * @returns 反转后的新直线对象。
	 */
	Reversed(): Mx3dGeLine;
	/**
	 * 获取反转参数。
	 * @param U 原参数。
	 * @returns 反转后的参数。
	 */
	ReversedParameter(U: number): number;
	/**
	 * 获取直线的起始参数。
	 * @returns 起始参数。
	 */
	FirstParameter(): number;
	/**
	 * 获取直线的终止参数。
	 * @returns 终止参数。
	 */
	LastParameter(): number;
	/**
	 * 检查直线是否闭合。
	 * @returns 是否闭合。
	 */
	IsClosed(): boolean;
	/**
	 * 检查直线是否是周期性的。
	 * @returns 是否周期性。
	 */
	IsPeriodic(): boolean;
	/**
	 * 获取直线的连续性。
	 * @returns 连续性枚举值。
	 */
	Continuity(): MdGe.MxGAShapeEnum;
	/**
	 * 检查直线的连续性等级。
	 * @param N 连续性等级。
	 * @returns 是否达到指定连续性等级。
	 */
	IsCN(N: number): boolean;
	/**
	 * 获取给定参数的点。
	 * @param U 参数值。
	 * @param P 点对象。
	 */
	D0(U: number, P: Mx3dGePoint): void;
	/**
	 * 获取给定参数的点和一阶导数向量。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 */
	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
	/**
	 * 获取给定参数的点、一阶导数向量和二阶导数向量。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 * @param V2 二阶导数向量。
	 */
	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
	/**
	 * 获取给定参数的点、一阶导数向量、二阶导数向量和三阶导数向量。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 * @param V2 二阶导数向量。
	 * @param V3 三阶导数向量。
	 */
	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
	/**
	 * 获取给定参数的N阶导数向量。
	 * @param U 参数值。
	 * @param N 导数阶数。
	 * @returns N阶导数向量。
	 */
	DN(U: number, N: number): Mx3dGeVec;
	/**
	 * 对直线应用变换。
	 * @param T 变换对象。
	 */
	Transform(T: Mx3dGeTrsf): void;
	/**
	 * 获取变换后的参数。
	 * @param U 原参数。
	 * @param T 变换对象。
	 * @returns 变换后的参数。
	 */
	TransformedParameter(U: number, T: Mx3dGeTrsf): number;
	/**
	 * 获取参数变换的结果。
	 * @param T 变换对象。
	 * @returns 参数变换结果。
	 */
	ParametricTransformation(T: Mx3dGeTrsf): number;
	/**
	 * 获取直线的周期。
	 * @returns 周期。
	 */
	Period(): number;
	/**
	 * 获取给定参数对应的点。
	 * @param U 参数值。
	 * @returns 点对象。
	 */
	Value(U: number): Mx3dGePoint;
	/**
	 * 获取指定参数区间内的边界。
	 * @param p1 起始参数。
	 * @param p2 终止参数。
	 * @returns 边界对象。
	 */
	Edge(p1: number, p2: number): Mx3dShapeEdge;
}
export interface Mx3dGeomObject {
	DynCast(theObject: Mx3dGeomObject): this;
}
/**
 * 表示参数几何对象的基类。
 */
export declare class Mx3dGeomObject extends Mx3dBaseObject {
	constructor(p?: object);
	/**
	 * 通过点对几何对象进行镜像变换。
	 * @param P 点对象。
	 */
	MirrorByPoint(P: Mx3dGePoint): void;
	/**
	 * 通过轴对几何对象进行镜像变换。
	 * @param A1 轴对象。
	 */
	MirrorByAxis(A1: Mx3dGeAxis): void;
	/**
	 * 通过右手坐标系对几何对象进行镜像变换。
	 * @param A2 右手坐标系对象。
	 */
	MirrorByCSYSR(A2: Mx3dGeCSYSR): void;
	/**
	 * 旋转几何对象。
	 * @param A1 轴对象。
	 * @param Ang 旋转角度。
	 */
	Rotate(A1: Mx3dGeAxis, Ang: number): void;
	/**
	 * 缩放几何对象。
	 * @param P 点对象。
	 * @param S 缩放比例。
	 */
	Scale(P: Mx3dGePoint, S: number): void;
	/**
	 * 通过向量平移几何对象。
	 * @param V 向量对象。
	 */
	TranslateByVec(V: Mx3dGeVec): void;
	/**
	 * 通过两个点平移几何对象。
	 * @param P1 起始点对象。
	 * @param P2 终止点对象。
	 */
	TranslateBy2Points(P1: Mx3dGePoint, P2: Mx3dGePoint): void;
	/**
	 * 返回通过点镜像变换后的新几何对象。
	 * @param P 点对象。
	 * @returns 新的几何对象。
	 */
	MirroredByPoint(P: Mx3dGePoint): this;
	/**
	 * 返回通过轴镜像变换后的新几何对象。
	 * @param A1 轴对象。
	 * @returns 新的几何对象。
	 */
	MirroredByAxis(A1: Mx3dGeAxis): this;
	/**
	 * 返回通过右手坐标系镜像变换后的新几何对象。
	 * @param A2 右手坐标系对象。
	 * @returns 新的几何对象。
	 */
	MirroredByCSYSR(A2: Mx3dGeCSYSR): this;
	/**
	 * 返回旋转后的新几何对象。
	 * @param A1 轴对象。
	 * @param Ang 旋转角度。
	 * @returns 新的几何对象。
	 */
	Rotated(A1: Mx3dGeAxis, Ang: number): this;
	/**
	 * 返回缩放后的新几何对象。
	 * @param P 点对象。
	 * @param S 缩放比例。
	 * @returns 新的几何对象。
	 */
	Scaled(P: Mx3dGePoint, S: number): this;
	/**
	 * 返回变换后的新几何对象。
	 * @param T 变换对象。
	 * @returns 新的几何对象。
	 */
	Transformed(T: Mx3dGeTrsf): this;
	/**
	 * 返回通过向量平移后的新几何对象。
	 * @param V 向量对象。
	 * @returns 新的几何对象。
	 */
	TranslatedByVec(V: Mx3dGeVec): this;
	/**
	 * 返回通过两个点平移后的新几何对象。
	 * @param P1 起始点对象。
	 * @param P2 终止点对象。
	 * @returns 新的几何对象。
	 */
	TranslatedBy2Points(P1: Mx3dGePoint, P2: Mx3dGePoint): this;
}
/**
 * 表示几何曲线的类，继承自 Mx3dGeomObject。
 */
export declare class Mx3dGeomCurve extends Mx3dGeomObject {
	constructor(p?: object);
	/**
	 * 返回反向后的新几何曲线对象。
	 * @returns 新的几何曲线对象。
	 */
	Reversed(): this;
	/**
	 * 返回曲线的周期。
	 * @returns 曲线的周期。
	 */
	Period(): number;
	/**
	 * 返回给定参数 U 处的点。
	 * @param U 参数值。
	 * @returns 给定参数处的点对象。
	 */
	Value(U: number): Mx3dGePoint;
	/**
	 * 返回对象的动态类型。
	 * @returns 动态类型的字符串。
	 */
	DynamicType(): string;
}
/**
 * 表示几何二次曲线(圆锥曲线)的类，继承自 Mx3dGeomCurve。
 */
export declare class Mx3dGeomConic extends Mx3dGeomCurve {
	constructor(p?: object);
	/**
	 * 设置二次曲线的轴。
	 * @param theA1 轴对象。
	 */
	SetAxis(theA1: Mx3dGeAxis): void;
	/**
	 * 设置二次曲线的位置。
	 * @param theP 点对象。
	 */
	SetLocation(theP: Mx3dGePoint): void;
	/**
	 * 设置二次曲线的右手坐标系。
	 * @param theA2 右手坐标系对象。
	 */
	SetPosition(theA2: Mx3dGeCSYSR): void;
	/**
	 * 获取二次曲线的轴。
	 * @returns 轴对象。
	 */
	Axis(): Mx3dGeAxis;
	/**
	 * 获取二次曲线的位置。
	 * @returns 点对象。
	 */
	Location(): Mx3dGePoint;
	/**
	 * 获取二次曲线的右手坐标系。
	 * @returns 右手坐标系对象。
	 */
	Position(): Mx3dGeCSYSR;
	/**
	 * 获取二次曲线的 X 轴。
	 * @returns X 轴对象。
	 */
	XAxis(): Mx3dGeAxis;
	/**
	 * 获取二次曲线的 Y 轴。
	 * @returns Y 轴对象。
	 */
	YAxis(): Mx3dGeAxis;
	/**
	 * 反转二次曲线的方向。
	 */
	Reverse(): void;
	/**
	 * 获取二次曲线的连续性。
	 * @returns 连续性枚举值。
	 */
	Continuity(): MdGe.MxGAShapeEnum;
	/**
	 * 检查二次曲线是否具有指定阶数的连续性。
	 * @param N 阶数。
	 * @returns 如果具有指定阶数的连续性，则返回 true，否则返回 false。
	 */
	IsCN(N: number): boolean;
	/**
	 * 返回对象的动态类型。
	 * @returns 动态类型的字符串。
	 */
	DynamicType(): string;
}
/**
 * 表示参数几何圆的类，继承自 Mx3dGeomConic。
 */
export declare class Mx3dGeomCircle extends Mx3dGeomConic {
	/**
	 * 构造函数，接受坐标系和半径参数。
	 * @param theCSYSR 坐标系对象。
	 * @param theRadius 圆的半径。
	 */
	constructor(theCSYSR: Mx3dGeCSYSR, theRadius: number);
	/**
	 * 设置圆的半径。
	 * @param R 半径。
	 */
	SetRadius(R: number): void;
	/**
	 * 获取圆的半径。
	 * @returns 圆的半径。
	 */
	Radius(): number;
	/**
	 * 获取反向参数。
	 * @param U 参数值。
	 * @returns 反向参数值。
	 */
	ReversedParameter(U: number): number;
	/**
	 * 获取圆的离心率。
	 * @returns 离心率。
	 */
	Eccentricity(): number;
	/**
	 * 获取圆的第一个参数。
	 * @returns 第一个参数。
	 */
	FirstParameter(): number;
	/**
	 * 获取圆的最后一个参数。
	 * @returns 最后一个参数。
	 */
	LastParameter(): number;
	/**
	 * 检查圆是否闭合。
	 * @returns 如果圆是闭合的，返回 true；否则返回 false。
	 */
	IsClosed(): boolean;
	/**
	 * 检查圆是否周期性。
	 * @returns 如果圆是周期性的，返回 true；否则返回 false。
	 */
	IsPeriodic(): boolean;
	/**
	 * 获取参数 U 处的点坐标。
	 * @param U 参数值。
	 * @param P 点对象。
	 */
	D0(U: number, P: Mx3dGePoint): void;
	/**
	 * 获取参数 U 处的一阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 */
	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的二阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 * @param V2 二阶导数向量。
	 */
	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的三阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 * @param V2 二阶导数向量。
	 * @param V3 三阶导数向量。
	 */
	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的 N 阶导数。
	 * @param U 参数值。
	 * @param N 阶数。
	 * @returns N 阶导数向量。
	 */
	DN(U: number, N: number): Mx3dGeVec;
	/**
	 * 对圆进行变换。
	 * @param T 变换对象。
	 */
	Transform(T: Mx3dGeTrsf): void;
	/**
	 * 复制圆对象。
	 * @returns 复制的圆对象。
	 */
	Copy(): Mx3dGeomObject;
	/**
	 * 获取圆的边。
	 * @param p1 第一个参数。
	 * @param p2 第二个参数。
	 * @returns 圆的边对象。
	 */
	Edge(p1: number, p2: number): Mx3dShapeEdge;
	/**
	 * 获取圆的线。
	 * @returns 圆的线对象。
	 */
	Wire(): Mx3dShapeWire;
	/**
	 * 获取圆的偏移曲线。
	 * @param Offset 偏移值。
	 * @param V 方向向量。
	 * @param isNotCheckC0 是否不检查 C0 连续性。
	 * @returns 圆的偏移曲线。
	 */
	OffsetCurve(Offset: number, V: Mx3dGeDir, isNotCheckC0: boolean): Mx3dShapeEdge;
	/**
	 * 三点画圆弧
	 * @param thePt1 第一个点
	 * @param thePt2 第二个点
	 * @param thePt3 第三个点
	 * @returns 圆弧曲线
	 */
	static MakeArcOfCircle(thePt1: UniPoint, thePt2: UniPoint, thePt3: UniPoint): Mx3dShapeEdge;
	/**
	 * @internal
	 */
	DynCast(theObject: Mx3dGeomObject): this;
	/**
	 * 父类对象转 Mx3dGeomCircle 类对象
	 * @param theObject 父类对象
	 * @returns Mx3dGeomCircle 类对象
	 */
	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomCircle;
	/**
	 * 返回对象的动态类型。
	 * @returns 动态类型的字符串。
	 */
	DynamicType(): string;
}
/**
 * 表示几何直线的类，继承自 Mx3dGeomCurve。
 */
export declare class Mx3dGeomLine extends Mx3dGeomCurve {
	/**
	 * 构造函数，接受一个轴作为参数。
	 * @param A1 轴对象。
	 */
	constructor(A1: Mx3dGeAxis);
	/**
	 * 构造函数，接受一个点和一个方向作为参数。
	 * @param P 点对象。
	 * @param V 方向对象。
	 */
	constructor(P: Mx3dGePoint, V: Mx3dGeDir);
	/**
	 * 设置直线的方向。
	 * @param V 方向对象。
	 */
	SetDirection(V: Mx3dGeDir): void;
	/**
	 * 设置直线的位置。
	 * @param P 点对象。
	 */
	SetLocation(P: Mx3dGePoint): void;
	/**
	 * 设置直线的位置。
	 * @param A1 轴对象。
	 */
	SetPosition(A1: Mx3dGeAxis): void;
	/**
	 * 获取直线的位置。
	 * @returns 轴对象。
	 */
	Position(): Mx3dGeAxis;
	/**
	 * 反转直线的方向。
	 */
	Reverse(): void;
	/**
	 * 获取反向参数。
	 * @param U 参数值。
	 * @returns 反向参数值。
	 */
	ReversedParameter(U: number): number;
	/**
	 * 获取直线的第一个参数。
	 * @returns 第一个参数。
	 */
	FirstParameter(): number;
	/**
	 * 获取直线的最后一个参数。
	 * @returns 最后一个参数。
	 */
	LastParameter(): number;
	/**
	 * 检查直线是否闭合。
	 * @returns 如果直线是闭合的，返回 true；否则返回 false。
	 */
	IsClosed(): boolean;
	/**
	 * 检查直线是否周期性。
	 * @returns 如果直线是周期性的，返回 true；否则返回 false。
	 */
	IsPeriodic(): boolean;
	/**
	 * 获取直线的连续性。
	 * @returns 连续性枚举值。
	 */
	Continuity(): MdGe.MxGAShapeEnum;
	/**
	 * 检查直线是否是 C^N 连续的。
	 * @param N 阶数。
	 * @returns 如果直线是 C^N 连续的，返回 true；否则返回 false。
	 */
	IsCN(N: number): boolean;
	/**
	 * 获取参数 U 处的点坐标。
	 * @param U 参数值。
	 * @param P 点对象。
	 */
	D0(U: number, P: Mx3dGePoint): void;
	/**
	 * 获取参数 U 处的一阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 */
	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的二阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 * @param V2 二阶导数向量。
	 */
	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的三阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 * @param V2 二阶导数向量。
	 * @param V3 三阶导数向量。
	 */
	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的 N 阶导数。
	 * @param U 参数值。
	 * @param N 阶数。
	 * @returns N 阶导数向量。
	 */
	DN(U: number, N: number): Mx3dGeVec;
	/**
	 * 对直线进行变换。
	 * @param T 变换对象。
	 */
	Transform(T: Mx3dGeTrsf): void;
	/**
	 * 获取变换后的参数。
	 * @param U 参数值。
	 * @param T 变换对象。
	 * @returns 变换后的参数值。
	 */
	TransformedParameter(U: number, T: Mx3dGeTrsf): number;
	/**
	 * 获取参数变换。
	 * @param T 变换对象。
	 * @returns 参数变换值。
	 */
	ParametricTransformation(T: Mx3dGeTrsf): number;
	/**
	 * 复制直线对象。
	 * @returns 复制的直线对象。
	 */
	Copy(): Mx3dGeomObject;
	/**
	 * 获取直线的边形状对象。
	 * @param p1 第一个参数。
	 * @param p2 第二个参数。
	 * @returns 直线的边形状对象。
	 */
	Edge(p1: number, p2: number): Mx3dShapeEdge;
	/**
	 * 获取直线的偏移曲线。
	 * @param Offset 偏移值。
	 * @param V 方向向量，与偏移方向垂直。
	 * @param isNotCheckC0 是否不检查 C0 连续性。
	 * @returns 直线的偏移曲线。
	 */
	OffsetCurve(Offset: number, V: Mx3dGeDir, isNotCheckC0: boolean): Mx3dShapeEdge;
	/**
	 * @internal
	 */
	DynCast(theObject: Mx3dGeomObject): this;
	/**
	 * 父类对象转 Mx3dGeomLine 类对象
	 * @param theObject 父类对象
	 * @returns Mx3dGeomLine 类对象
	 */
	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomLine;
	/**
	 * 返回对象的动态类型。
	 * @returns 动态类型的字符串。
	 */
	DynamicType(): string;
}
/**
 * 表示参数几何椭圆的类，继承自 Mx3dGeomConic。
 */
export declare class Mx3dGeomEllipse extends Mx3dGeomConic {
	/**
	 * 构造函数，接受一个坐标系、长轴半径和短轴半径作为参数。
	 * @param A2 坐标系对象。
	 * @param MajorRadius 长轴半径。
	 * @param MinorRadius 短轴半径。
	 */
	constructor(A2: Mx3dGeCSYSR, MajorRadius: number, MinorRadius: number);
	/**
	 * 设置长轴半径。
	 * @param MajorRadius 长轴半径。
	 */
	SetMajorRadius(MajorRadius: number): void;
	/**
	 * 设置短轴半径。
	 * @param MinorRadius 短轴半径。
	 */
	SetMinorRadius(MinorRadius: number): void;
	/**
	 * 获取反向参数。
	 * @param U 参数值。
	 * @returns 反向参数值。
	 */
	ReversedParameter(U: number): number;
	/**
	 * 获取第一个准线。
	 * @returns 准线对象。
	 */
	Directrix1(): Mx3dGeAxis;
	/**
	 * 获取第二个准线。
	 * @returns 准线对象。
	 */
	Directrix2(): Mx3dGeAxis;
	/**
	 * 获取离心率。
	 * @returns 离心率值。
	 */
	Eccentricity(): number;
	/**
	 * 获取焦距。
	 * @returns 焦距值。
	 */
	Focal(): number;
	/**
	 * 获取第一个焦点。
	 * @returns 第一个焦点对象。
	 */
	Focus1(): Mx3dGePoint;
	/**
	 * 获取第二个焦点。
	 * @returns 第二个焦点对象。
	 */
	Focus2(): Mx3dGePoint;
	/**
	 * 获取长轴半径。
	 * @returns 长轴半径值。
	 */
	MajorRadius(): number;
	/**
	 * 获取短轴半径。
	 * @returns 短轴半径值。
	 */
	MinorRadius(): number;
	/**
	 * 获取参数。
	 * @returns 参数值。
	 */
	Parameter(): number;
	/**
	 * 获取椭圆的第一个参数。
	 * @returns 第一个参数。
	 */
	FirstParameter(): number;
	/**
	 * 获取椭圆的最后一个参数。
	 * @returns 最后一个参数。
	 */
	LastParameter(): number;
	/**
	 * 检查椭圆是否闭合。
	 * @returns 如果椭圆是闭合的，返回 true；否则返回 false。
	 */
	IsClosed(): boolean;
	/**
	 * 检查椭圆是否周期性。
	 * @returns 如果椭圆是周期性的，返回 true；否则返回 false。
	 */
	IsPeriodic(): boolean;
	/**
	 * 获取参数 U 处的点坐标。
	 * @param U 参数值。
	 * @param P 点对象。
	 */
	D0(U: number, P: Mx3dGePoint): void;
	/**
	 * 获取参数 U 处的一阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 */
	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的二阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 * @param V2 二阶导数向量。
	 */
	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的三阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 * @param V2 二阶导数向量。
	 * @param V3 三阶导数向量。
	 */
	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的 N 阶导数。
	 * @param U 参数值。
	 * @param N 阶数。
	 * @returns N 阶导数向量。
	 */
	DN(U: number, N: number): Mx3dGeVec;
	/**
	 * 对椭圆进行变换。
	 * @param T 变换对象。
	 */
	Transform(T: Mx3dGeTrsf): void;
	/**
	 * 复制椭圆对象。
	 * @returns 复制的椭圆对象。
	 */
	Copy(): Mx3dGeomObject;
	/**
	 * 获取椭圆的边形状对象。
	 * @param p1 第一个参数。
	 * @param p2 第二个参数。
	 * @returns 椭圆的边形状对象。
	 */
	Edge(p1: number, p2: number): Mx3dShapeEdge;
	/**
	 * 获取椭圆的Wire形状对象。
	 * @returns 椭圆的Wire形状对象。
	 */
	Wire(): Mx3dShapeWire;
	/**
	 * 获取椭圆的偏移曲线。
	 * @param Offset 偏移值。
	 * @param V 方向向量，与偏移方向垂直。
	 * @param isNotCheckC0 是否不检查 C0 连续性。
	 * @returns 椭圆的偏移曲线。
	 */
	OffsetCurve(Offset: number, V: Mx3dGeDir, isNotCheckC0: boolean): Mx3dShapeEdge;
	/**
	 * @internal
	 */
	DynCast(theObject: Mx3dGeomObject): this;
	/**
	 * 父类对象转 Mx3dGeomEllipse 类对象
	 * @param theObject 父类对象
	 * @returns Mx3dGeomEllipse 类对象
	 */
	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomEllipse;
	/**
	 * 返回对象的动态类型。
	 * @returns 动态类型的字符串。
	 */
	DynamicType(): string;
}
/**
 * 表示参数几何双曲线的类，继承自 Mx3dGeomConic。
 */
export declare class Mx3dGeomHyperbola extends Mx3dGeomConic {
	/**
	 * 构造函数，接受一个坐标系、长轴半径和短轴半径作为参数。
	 * @param A2 坐标系对象。
	 * @param MajorRadius 长轴半径。
	 * @param MinorRadius 短轴半径。
	 */
	constructor(A2: Mx3dGeCSYSR, MajorRadius: number, MinorRadius: number);
	/**
	 * 设置长轴半径。
	 * @param MajorRadius 长轴半径。
	 */
	SetMajorRadius(MajorRadius: number): void;
	/**
	 * 设置短轴半径。
	 * @param MinorRadius 短轴半径。
	 */
	SetMinorRadius(MinorRadius: number): void;
	/**
	 * 获取反向参数。
	 * @param U 参数值。
	 * @returns 反向参数值。
	 */
	ReversedParameter(U: number): number;
	/**
	 * 获取双曲线的第一个参数。
	 * @returns 第一个参数。
	 */
	FirstParameter(): number;
	/**
	 * 获取双曲线的最后一个参数。
	 * @returns 最后一个参数。
	 */
	LastParameter(): number;
	/**
	 * 检查双曲线是否闭合。
	 * @returns 如果双曲线是闭合的，返回 true；否则返回 false。
	 */
	IsClosed(): boolean;
	/**
	 * 检查双曲线是否周期性。
	 * @returns 如果双曲线是周期性的，返回 true；否则返回 false。
	 */
	IsPeriodic(): boolean;
	/**
	 * 获取第一个渐近线。
	 * @returns 渐近线对象。
	 */
	Asymptote1(): Mx3dGeAxis;
	/**
	 * 获取第二个渐近线。
	 * @returns 渐近线对象。
	 */
	Asymptote2(): Mx3dGeAxis;
	/**
	 * 获取第一个共轭支。
	 * @returns 第一个共轭支对象。
	 */
	ConjugateBranch1(): Mx3dGeomHyperbola;
	/**
	 * 获取第二个共轭支。
	 * @returns 第二个共轭支对象。
	 */
	ConjugateBranch2(): Mx3dGeomHyperbola;
	/**
	 * 获取第一个准线。
	 * @returns 准线对象。
	 */
	Directrix1(): Mx3dGeAxis;
	/**
	 * 获取第二个准线。
	 * @returns 准线对象。
	 */
	Directrix2(): Mx3dGeAxis;
	/**
	 * 获取离心率。
	 * @returns 离心率值。
	 */
	Eccentricity(): number;
	/**
	 * 获取焦距。
	 * @returns 焦距值。
	 */
	Focal(): number;
	/**
	 * 获取第一个焦点。
	 * @returns 第一个焦点对象。
	 */
	Focus1(): Mx3dGePoint;
	/**
	 * 获取第二个焦点。
	 * @returns 第二个焦点对象。
	 */
	Focus2(): Mx3dGePoint;
	/**
	 * 获取长轴半径。
	 * @returns 长轴半径值。
	 */
	MajorRadius(): number;
	/**
	 * 获取短轴半径。
	 * @returns 短轴半径值。
	 */
	MinorRadius(): number;
	/**
	 * 获取另一支双曲线。
	 * @returns 另一支双曲线对象。
	 */
	OtherBranch(): Mx3dGeomHyperbola;
	/**
	 * 获取参数。
	 * @returns 参数值。
	 */
	Parameter(): number;
	/**
	 * 获取参数 U 处的点坐标。
	 * @param U 参数值。
	 * @param P 点对象。
	 */
	D0(U: number, P: Mx3dGePoint): void;
	/**
	 * 获取参数 U 处的一阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 */
	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的二阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 * @param V2 二阶导数向量。
	 */
	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的三阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 * @param V2 二阶导数向量。
	 * @param V3 三阶导数向量。
	 */
	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的 N 阶导数。
	 * @param U 参数值。
	 * @param N 阶数。
	 * @returns N 阶导数向量。
	 */
	DN(U: number, N: number): Mx3dGeVec;
	/**
	 * 对双曲线进行变换。
	 * @param T 变换对象。
	 */
	Transform(T: Mx3dGeTrsf): void;
	/**
	 * 复制双曲线对象。
	 * @returns 复制的双曲线对象。
	 */
	Copy(): Mx3dGeomObject;
	/**
	 * 获取双曲线的边。
	 * @param p1 第一个参数。
	 * @param p2 第二个参数。
	 * @returns 双曲线的边对象。
	 */
	Edge(p1: number, p2: number): Mx3dShapeEdge;
	/**
	 * 获取双曲线的偏移曲线。
	 * @param Offset 偏移量。
	 * @param V 方向向量，与偏移方向垂直。
	 * @param isNotCheckC0 是否检查 C0 连续性。
	 * @returns 偏移曲线的边对象。
	 */
	OffsetCurve(Offset: number, V: Mx3dGeDir, isNotCheckC0: boolean): Mx3dShapeEdge;
	/**
	 * @internal
	 */
	DynCast(theObject: Mx3dGeomObject): this;
	/**
	 * 父类对象转 Mx3dGeomHyperbola 类对象
	 * @param theObject 父类对象
	 * @returns Mx3dGeomHyperbola 类对象
	 */
	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomHyperbola;
	/**
	 * 返回对象的动态类型。
	 * @returns 动态类型的字符串。
	 */
	DynamicType(): string;
}
export declare class Mx3dGeomParabola extends Mx3dGeomConic {
	/**
	 * 构造函数，接受一个坐标系和焦距作为参数。
	 * @param A2 坐标系对象。
	 * @param Focal 焦距。
	 */
	constructor(A2: Mx3dGeCSYSR, Focal: number);
	/**
	 * 设置焦距。
	 * @param Focal 焦距。
	 */
	SetFocal(Focal: number): void;
	/**
	 * 获取反向参数。
	 * @param U 参数值。
	 * @returns 反向参数值。
	 */
	ReversedParameter(U: number): number;
	/**
	 * 获取抛物线的第一个参数。
	 * @returns 第一个参数。
	 */
	FirstParameter(): number;
	/**
	 * 获取抛物线的最后一个参数。
	 * @returns 最后一个参数。
	 */
	LastParameter(): number;
	/**
	 * 检查抛物线是否闭合。
	 * @returns 如果抛物线是闭合的，返回 true；否则返回 false。
	 */
	IsClosed(): boolean;
	/**
	 * 检查抛物线是否周期性。
	 * @returns 如果抛物线是周期性的，返回 true；否则返回 false。
	 */
	IsPeriodic(): boolean;
	/**
	 * 获取准线。
	 * @returns 准线所在轴对象。
	 */
	Directrix(): Mx3dGeAxis;
	/**
	 * 获取离心率。
	 * @returns 离心率值。
	 */
	Eccentricity(): number;
	/**
	 * 获取焦点。
	 * @returns 焦点对象。
	 */
	Focus(): Mx3dGePoint;
	/**
	 * 获取焦距。
	 * @returns 焦距值。
	 */
	Focal(): number;
	/**
	 * 获取参数。
	 * @returns 参数值。
	 */
	Parameter(): number;
	/**
	 * 获取参数 U 处的点坐标。
	 * @param U 参数值。
	 * @param P 点对象。
	 */
	D0(U: number, P: Mx3dGePoint): void;
	/**
	 * 获取参数 U 处的一阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 */
	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的二阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 * @param V2 二阶导数向量。
	 */
	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的三阶导数。
	 * @param U 参数值。
	 * @param P 点对象。
	 * @param V1 一阶导数向量。
	 * @param V2 二阶导数向量。
	 * @param V3 三阶导数向量。
	 */
	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
	/**
	 * 获取参数 U 处的 N 阶导数。
	 * @param U 参数值。
	 * @param N 阶数。
	 * @returns N 阶导数向量。
	 */
	DN(U: number, N: number): Mx3dGeVec;
	/**
	 * 对抛物线进行变换。
	 * @param T 变换对象。
	 */
	Transform(T: Mx3dGeTrsf): void;
	/**
	 * 获取变换后的参数。
	 * @param U 参数值。
	 * @param T 变换对象。
	 * @returns 变换后的参数值。
	 */
	TransformedParameter(U: number, T: Mx3dGeTrsf): number;
	/**
	 * 获取参数变换。
	 * @param T 变换对象。
	 * @returns 参数变换值。
	 */
	ParametricTransformation(T: Mx3dGeTrsf): number;
	/**
	 * 复制抛物线对象。
	 * @returns 复制的抛物线对象。
	 */
	Copy(): Mx3dGeomObject;
	/**
	 * 获取抛物线的边。
	 * @param p1 第一个参数。
	 * @param p2 第二个参数。
	 * @returns 抛物线的边对象。
	 */
	Edge(p1: number, p2: number): Mx3dShapeEdge;
	/**
	 * 获取抛物线的偏移曲线。
	 * @param Offset 偏移量。
	 * @param V 方向向量，与偏移方向垂直。
	 * @param isNotCheckC0 是否检查 C0 连续性。
	 * @returns 偏移曲线的边对象。
	 */
	OffsetCurve(Offset: number, V: Mx3dGeDir, isNotCheckC0: boolean): Mx3dShapeEdge;
	/**
	 * @internal
	 */
	DynCast(theObject: Mx3dGeomObject): this;
	/**
	 * 父类对象转 Mx3dGeomParabola 类对象
	 * @param theObject 父类对象
	 * @returns Mx3dGeomParabola 类对象
	 */
	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomParabola;
	/**
	 * 返回对象的动态类型。
	 * @returns 动态类型的字符串。
	 */
	DynamicType(): string;
}
/**
 * 基础几何建模基类，继承自 Mx3dBaseObject
 */
export declare class Mx3dMkObject extends Mx3dBaseObject {
	/**
	 * @internal
	 */
	constructor(p?: object);
}
/**
 * 表示建模长方体的类，继承自 Mx3dMkObject
 */
export declare class Mx3dMkBox extends Mx3dMkObject {
	/**
	 * 构造函数，接受长方体的两个对角点作为参数。
	 * @param thePnt1 第一个对角点。
	 * @param thePnt2 第二个对角点。
	 */
	constructor(thePnt1: UniPoint, thePnt2: UniPoint);
	/**
	 * 构造函数，以世界坐标系的(0, 0, 0)点作为第一个角点，接受三个数值(theDX, theDY, theDZ)作为第二个角点参数。
	 * @param theDX 第二个角点X方向分量。
	 * @param theDY 第二个角点Y方向分量。
	 * @param theDZ 第二个角点Z方向分量。
	 */
	constructor(theDX: number, theDY: number, theDZ: number);
	/**
	 * 构造函数，以 theAxes 坐标系的(0, 0, 0)点作为第一个角点，接受三个数值(theDX, theDY, theDZ)作为第二个角点参数。
	 * @param theAxes 坐标系对象。
	 * @param theDX 第二个角点X方向分量。
	 * @param theDY 第二个角点Y方向分量。
	 * @param theDZ 第二个角点Z方向分量。
	 */
	constructor(theAxes: Mx3dGeCSYSR, theDX: number, theDY: number, theDZ: number);
	/**
	 * 执行长方体的建模算法。
	 */
	Build(): void;
	/**
	 * 获取长方体的拓扑形状。
	 * @returns 拓扑形状。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 获取长方体的拓扑外壳形状。
	 * @returns 拓扑壳形状。
	 */
	Shell(): Mx3dShapeShell;
	/**
	 * 获取长方体的拓扑实体形状。
	 * @returns 拓扑实体形状。
	 */
	Solid(): Mx3dShapeSolid;
	/**
	 * 获取长方体的底面拓扑面形状。
	 * @returns 拓扑面形状。
	 */
	BottomFace(): Mx3dShapeFace;
	/**
	 * 获取长方体的背面拓扑面形状。
	 * @returns 拓扑面形状。
	 */
	BackFace(): Mx3dShapeFace;
	/**
	 * 获取长方体的前面拓扑面形状。
	 * @returns 拓扑面形状。
	 */
	FrontFace(): Mx3dShapeFace;
	/**
	 * 获取长方体的左面拓扑面形状。
	 * @returns 拓扑面形状。
	 */
	LeftFace(): Mx3dShapeFace;
	/**
	 * 获取长方体的右面拓扑面形状。
	 * @returns 拓扑面形状。
	 */
	RightFace(): Mx3dShapeFace;
	/**
	 * 获取长方体的顶面拓扑面形状。
	 * @returns 拓扑面形状。
	 */
	TopFace(): Mx3dShapeFace;
	/**
	 * 检查建模算法是否执行完成。
	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
	 */
	IsDone(): boolean;
}
/**
 * 表示建模圆锥的类，继承自 Mx3dMkObject
 */
export declare class Mx3dMkCone extends Mx3dMkObject {
	/**
	 * 构造函数，接受圆锥的坐标系、底面半径、顶面半径、高度，以及可选的角度参数。
	 * @param Axes 坐标系对象。
	 * @param R1 底面半径。
	 * @param R2 顶面半径。
	 * @param H 高度。
	 * @param angle （可选）角度。
	 */
	constructor(Axes: Mx3dGeCSYSR, R1: number, R2: number, H: number, angle?: number);
	/**
	 * 执行圆锥的建模算法。
	 */
	Build(): void;
	/**
	 * 获取圆锥的拓扑形状。
	 * @returns 拓扑形状。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 获取圆锥的拓扑面形状。
	 * @returns 拓扑面形状。
	 */
	Face(): Mx3dShapeFace;
	/**
	 * 获取圆锥的拓扑外壳形状。
	 * @returns 拓扑壳形状。
	 */
	Shell(): Mx3dShapeShell;
	/**
	 * 获取圆锥的拓扑实体形状。
	 * @returns 拓扑实体形状。
	 */
	Solid(): Mx3dShapeSolid;
	/**
	 * 检查建模算法是否执行完成。
	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
	 */
	IsDone(): boolean;
}
/**
 * 表示建模圆柱的类，继承自 Mx3dMkObject
 */
export declare class Mx3dMkCylinder extends Mx3dMkObject {
	/**
	 * 构造函数，接受圆柱的坐标系、半径、高度，以及可选的角度参数。
	 * @param Axes 坐标系对象。
	 * @param R 半径。
	 * @param H 高度。
	 * @param Angle （可选）角度。
	 */
	constructor(Axes: Mx3dGeCSYSR, R: number, H: number, Angle?: number);
	/**
	 * 执行圆柱的建模算法。
	 */
	Build(): void;
	/**
	 * 获取圆柱的拓扑形状。
	 * @returns 拓扑形状。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 获取圆柱的拓扑面形状。
	 * @returns 拓扑面形状。
	 */
	Face(): Mx3dShapeFace;
	/**
	 * 获取圆柱的拓扑外壳形状。
	 * @returns 拓扑壳形状。
	 */
	Shell(): Mx3dShapeShell;
	/**
	 * 获取圆柱的拓扑实体形状。
	 * @returns 拓扑实体形状。
	 */
	Solid(): Mx3dShapeSolid;
	/**
	 * 检查建模算法是否执行完成。
	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
	 */
	IsDone(): boolean;
}
/**
 * 表示旋转体建模的类，继承自 Mx3dMkObject
 */
export declare class Mx3dMkRevol extends Mx3dMkObject {
	/**
	 * 构造函数，接受一个形状对象、旋转轴和可选的旋转角度参数。
	 * @param S 形状对象。
	 * @param A 旋转轴。
	 * @param D （可选）旋转角度。
	 */
	constructor(S: Mx3dShapeObject, A: Mx3dGeAxis, D?: number);
	/**
	 * 执行旋转体的建模算法。
	 */
	Build(): void;
	/**
	 * 获取旋转体的拓扑形状。
	 * @returns 拓扑形状。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 检查建模算法是否执行完成。
	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
	 */
	IsDone(): boolean;
}
/**
 * 表示建模球体的类，继承自 Mx3dMkObject
 */
export declare class Mx3dMkSphere extends Mx3dMkObject {
	/**
	 * 构造函数，接受坐标系对象和球体半径作为参数。
	 * @param Axes 坐标系对象。
	 * @param R 球体半径。
	 */
	constructor(Axes: Mx3dGeCSYSR, R: number);
	/**
	 * 构造函数，接受坐标系对象、球体半径和一个角度参数。
	 * @param Axes 坐标系对象。
	 * @param R 球体半径。
	 * @param angle 角度参数。
	 */
	constructor(Axes: Mx3dGeCSYSR, R: number, angle: number);
	/**
	 * 构造函数，接受坐标系对象、球体半径和两个角度参数。
	 * @param Axes 坐标系对象。
	 * @param R 球体半径。
	 * @param angle1 第一个角度参数。
	 * @param angle2 第二个角度参数。
	 */
	constructor(Axes: Mx3dGeCSYSR, R: number, angle1: number, angle2: number);
	/**
	 * 构造函数，接受坐标系对象、球体半径和三个角度参数。
	 * @param Axes 坐标系对象。
	 * @param R 球体半径。
	 * @param angle1 第一个角度参数。
	 * @param angle2 第二个角度参数。
	 * @param angle3 第三个角度参数。
	 */
	constructor(Axes: Mx3dGeCSYSR, R: number, angle1: number, angle2: number, angle3: number);
	/**
	 * 执行球体的建模算法。
	 */
	Build(): void;
	/**
	 * 获取球体的拓扑形状。
	 * @returns 拓扑形状。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 获取球体的拓扑面形状。
	 * @returns 拓扑面形状。
	 */
	Face(): Mx3dShapeFace;
	/**
	 * 获取球体的拓扑外壳形状。
	 * @returns 拓扑壳形状。
	 */
	Shell(): Mx3dShapeShell;
	/**
	 * 获取球体的拓扑实体形状。
	 * @returns 拓扑实体形状。
	 */
	Solid(): Mx3dShapeSolid;
	/**
	 * 检查建模算法是否执行完成。
	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
	 */
	IsDone(): boolean;
}
/**
 * 表示建模圆环体的类，继承自 Mx3dMkObject
 */
export declare class Mx3dMkTorus extends Mx3dMkObject {
	/**
	 * 构造函数，接受坐标系对象、圆环体主半径和次半径作为参数。
	 * @param Axes 坐标系对象。
	 * @param R1 圆环体主半径。
	 * @param R2 圆环体次半径。
	 */
	constructor(Axes: Mx3dGeCSYSR, R1: number, R2: number);
	/**
	 * 构造函数，接受坐标系对象、圆环体主半径、次半径和一个角度参数。
	 * @param Axes 坐标系对象。
	 * @param R1 圆环体主半径。
	 * @param R2 圆环体次半径。
	 * @param angle 角度参数。
	 */
	constructor(Axes: Mx3dGeCSYSR, R1: number, R2: number, angle: number);
	/**
	 * 构造函数，接受坐标系对象、圆环体主半径、次半径和两个角度参数。
	 * @param Axes 坐标系对象。
	 * @param R1 圆环体主半径。
	 * @param R2 圆环体次半径。
	 * @param angle1 第一个角度参数。
	 * @param angle2 第二个角度参数。
	 */
	constructor(Axes: Mx3dGeCSYSR, R1: number, R2: number, angle1: number, angle2: number);
	/**
	 * 构造函数，接受坐标系对象、圆环体主半径、次半径和三个角度参数。
	 * @param Axes 坐标系对象。
	 * @param R1 圆环体主半径。
	 * @param R2 圆环体次半径。
	 * @param angle1 第一个角度参数。
	 * @param angle2 第二个角度参数。
	 * @param angle3 第三个角度参数。
	 */
	constructor(Axes: Mx3dGeCSYSR, R1: number, R2: number, angle1: number, angle2: number, angle: number);
	/**
	 * 执行圆环体的建模算法。
	 */
	Build(): void;
	/**
	 * 获取圆环体的拓扑形状。
	 * @returns 拓扑形状。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 获取圆环体的拓扑面形状。
	 * @returns 拓扑面形状。
	 */
	Face(): Mx3dShapeFace;
	/**
	 * 获取圆环体的拓扑外壳形状。
	 * @returns 拓扑壳形状。
	 */
	Shell(): Mx3dShapeShell;
	/**
	 * 获取圆环体的拓扑实体形状。
	 * @returns 拓扑实体形状。
	 */
	Solid(): Mx3dShapeSolid;
	/**
	 * 检查建模算法是否执行完成。
	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
	 */
	IsDone(): boolean;
}
/**
 * 表示建模路径扫掠体的类，继承自 Mx3dMkObject
 */
export declare class Mx3dMkPipe extends Mx3dMkObject {
	/**
	 * 构造函数，接受一条路径和一个截面形状来创建扫掠体。
	 * @param Spine 路径线。
	 * @param Profile 截面形状。
	 */
	constructor(Spine: Mx3dShapeWire, Profile: Mx3dShapeObject);
	/**
	 * 构造函数，接受一条路径、一个截面形状、一个模式和一个布尔值来创建扫掠体。
	 * @param Spine 路径线。
	 * @param Profile 截面形状。
	 * @param aMode 模式。
	 * @param ForceApproxC1 强制近似C1连续性。
	 */
	constructor(Spine: Mx3dShapeWire, Profile: Mx3dShapeObject, aMode: MdGe.MxGFTrihedron, ForceApproxC1: boolean);
	/**
	 * 执行路径扫掠体的建模算法。
	 */
	Build(): void;
	/**
	 * 获取路径扫掠体的拓扑形状。
	 * @returns 拓扑形状。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 检查建模算法是否执行完成。
	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
	 */
	IsDone(): boolean;
}
/**
 *
 */
export declare class Mx3dMkPipeShell extends Mx3dMkObject {
	constructor(Spine: Mx3dShapeWire);
	SetTransitionMode(Mode: MdGe.MxTransitionMode): void;
	Add(Profile: Mx3dShapeObject): void;
	Build(): void;
	MakeSolid(): boolean;
	Shape(): Mx3dShapeObject;
	IsDone(): boolean;
}
/**
 * 表示建模拉伸扫掠体的类，继承自 Mx3dMkObject。
 */
export declare class Mx3dMkPrism extends Mx3dMkObject {
	/**
	 * 构造函数，接受一个拓扑形状和一个向量来创建拉伸扫掠体。
	 * @param S 拓扑形状对象。
	 * @param V 拉伸方向向量。
	 */
	constructor(S: Mx3dShapeObject, V: Mx3dGeVec);
	/**
	 * 构造函数，接受一个拓扑形状和一个方向来创建拉伸扫掠体。
	 * @param S 拓扑形状对象。
	 * @param D 拉伸方向。
	 */
	constructor(S: Mx3dShapeObject, D: Mx3dGeDir);
	/**
	 * 执行拉伸扫掠体的建模算法。
	 */
	Build(): void;
	/**
	 * 获取拉伸扫掠体的形状。
	 * @returns 拉伸扫掠体的形状对象。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 检查建模算法是否执行完成。
	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
	 */
	IsDone(): boolean;
}
/**
 * 表示建模楔形体的类，继承自 Mx3dMkObject。
 */
export declare class Mx3dMkWedge extends Mx3dMkObject {
	/**
	 * 构造函数，接受三个尺寸参数和一个长度参数来创建楔形体。
	 * @param dx 楔形体的宽度沿x轴方向的尺寸。
	 * @param dy 楔形体的宽度沿y轴方向的尺寸。
	 * @param dz 楔形体的高度沿z轴方向的尺寸。
	 * @param ltx 楔形体的长度参数。
	 */
	constructor(dx: number, dy: number, dz: number, ltx: number);
	/**
	 * 构造函数，接受坐标系和尺寸参数来创建楔形体。
	 * @param Axes 坐标系对象。
	 * @param dx 楔形体的宽度沿x轴方向的尺寸。
	 * @param dy 楔形体的宽度沿y轴方向的尺寸。
	 * @param dz 楔形体的高度沿z轴方向的尺寸。
	 * @param ltx 楔形体的长度参数。
	 */
	constructor(Axes: Mx3dGeCSYSR, dx: number, dy: number, dz: number, ltx: number);
	/**
	 * 构造函数，接受尺寸参数和两个边界值来创建楔形体。
	 * @param dx 楔形体的宽度沿x轴方向的尺寸。
	 * @param dy 楔形体的宽度沿y轴方向的尺寸。
	 * @param dz 楔形体的高度沿z轴方向的尺寸。
	 * @param xmin 楔形体在x轴方向的最小边界值。
	 * @param zmin 楔形体在z轴方向的最小边界值。
	 * @param xmax 楔形体在x轴方向的最大边界值。
	 * @param zmax 楔形体在z轴方向的最大边界值。
	 */
	constructor(dx: number, dy: number, dz: number, xmin: number, zmin: number, xmax: number, zmax: number);
	/**
	 * 构造函数，接受坐标系、尺寸参数和边界值来创建楔形体。
	 * @param Axes 坐标系对象。
	 * @param dx 楔形体的宽度沿x轴方向的尺寸。
	 * @param dy 楔形体的宽度沿y轴方向的尺寸。
	 * @param dz 楔形体的高度沿z轴方向的尺寸。
	 * @param xmin 楔形体在x轴方向的最小边界值。
	 * @param zmin 楔形体在z轴方向的最小边界值。
	 * @param xmax 楔形体在x轴方向的最大边界值。
	 * @param zmax 楔形体在z轴方向的最大边界值。
	 */
	constructor(Axes: Mx3dGeCSYSR, dx: number, dy: number, dz: number, xmin: number, zmin: number, xmax: number, zmax: number);
	/**
	 * 执行楔形体的建模算法。
	 */
	Build(): void;
	/**
	 * 获取楔形体的拓扑形状。
	 * @returns 拓扑形状对象。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 获取楔形体的壳体形状。
	 * @returns 壳体形状对象。
	 */
	Shell(): Mx3dShapeShell;
	/**
	 * 获取楔形体的实体形状。
	 * @returns 实体形状对象。
	 */
	Solid(): Mx3dShapeSolid;
	/**
	 * 检查建模算法是否执行完成。
	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
	 */
	IsDone(): boolean;
}
/**
 * 表示建模放样体的类，继承自 Mx3dMkObject。
 */
export declare class Mx3dMkLoft extends Mx3dMkObject {
	/**
	 * 构造函数，初始化放样体对象。
	 * @param isSolid 是否创建实体放样体，默认为 false。
	 * @param ruled 是否使用规则放样，默认为 false。
	 * @param pres3d 放样体的平面分辨率，默认为 0。
	 */
	constructor(isSolid?: boolean, ruled?: boolean, pres3d?: number);
	/**
	 * 添加一个Wire到放样体。
	 * @param wire 要添加的Wire对象。
	 */
	AddWire(wire: Mx3dShapeWire): void;
	/**
	 * 添加一个顶点到放样体。
	 * @param aVertex 要添加的顶点对象。
	 */
	AddVertex(aVertex: Mx3dShapeVertex): void;
	/**
	 * 设置是否使用平滑处理。
	 * @param UseSmoothing 使用平滑处理的标志。
	 */
	SetSmoothing(UseSmoothing: boolean): void;
	/**
	 * 设置放样体的连续性。
	 * @param C 形状的连续性枚举值。
	 */
	SetContinuity(C: MdGe.MxGAShapeEnum): void;
	/**
	 * 获取放样体的连续性。
	 * @returns 当前放样体的连续性枚举值。
	 */
	Continuity(): MdGe.MxGAShapeEnum;
	/**
	 * 检查是否使用平滑处理。
	 * @returns 平滑处理的使用状态，true 为使用，false 为不使用。
	 */
	UseSmoothing(): boolean;
	/**
	 * 执行放样体的建模算法。
	 */
	Build(): void;
	/**
	 * 获取放样体的形状。
	 * @returns 放样体的形状对象。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 检查建模算法是否执行完成。
	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
	 */
	IsDone(): boolean;
}
/**
 * 表示建模多段线的类，继承自 Mx3dMkObject。
 */
export declare class Mx3dMkPolygon extends Mx3dMkObject {
	/**
	 * 构造函数，初始化多段线对象。
	 */
	constructor();
	/**
	 * 添加一个顶点到多段线。
	 * @param P 要添加的点对象。
	 */
	Add(P: Mx3dGePoint): void;
	/**
	 * 检查最后添加的顶点是否与前一个顶点重合。
	 * @returns 如果最后一个添加的顶点与前一个顶点不重合，则返回 true；否则返回 false。
	 */
	Added(): boolean;
	/**
	 * 闭合多段线，形成一个闭合的图形。
	 */
	Close(): void;
	/**
	 * 获取多段线的第一个顶点。
	 * @returns 第一个顶点对象。
	 */
	FirstVertex(): Mx3dShapeVertex;
	/**
	 * 获取多段线的最后一个顶点。
	 * @returns 最后一个顶点对象。
	 */
	LastVertex(): Mx3dShapeVertex;
	/**
	 * 执行多段线的建模算法。
	 */
	Build(): void;
	/**
	 * 获取多段线的形状。
	 * @returns 多段线的形状对象。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 检查建模算法是否执行完成。
	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
	 */
	IsDone(): boolean;
	/**
	 * 获取多段线的Edge对象。
	 * @returns 多段线的Edge对象。
	 */
	Edge(): Mx3dShapeEdge;
	/**
	 * 获取多段线的Wire对象。
	 * @returns 多段线的Wire对象。
	 */
	Wire(): Mx3dShapeWire;
}
/**
 * 表示建模面的类，继承自 Mx3dMkObject。
 */
export declare class Mx3dMkFace extends Mx3dMkObject {
	/**
	 * 构造函数，接受一个Wire对象和一个布尔值来初始化面对象。
	 * @param theWire 要使用的线条对象 或 面形状对象(可添加Wire，形成Hole)。
	 * @param OnlyPlane 是否仅限于平面构建，默认为 false。
	 */
	constructor(theWire: Mx3dShapeWire | Mx3dShapeFace, OnlyPlane?: boolean);
	/**
	 * 执行面的建模算法。
	 */
	Build(): void;
	/**
	 * 获取面的形状对象。
	 * @returns 面的形状对象。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 获取面的具体对象。
	 * @returns 面的具体对象。
	 */
	Face(): Mx3dShapeFace;
	/**
	 * 检查建模算法是否执行完成。
	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
	 */
	IsDone(): boolean;
	Add(W: Mx3dShapeWire): void;
}
/**
 * 表示建模厚壁固体的类，继承自 Mx3dMkObject。
 */
export declare class Mx3dMkThickSolid extends Mx3dMkObject {
	/**
	 * 构造函数，初始化厚壁固体对象。
	 */
	constructor();
	/**
	 * 使用简单算法构建厚壁固体。
	 * 该方法基于一个固体和一个偏移值来创建厚壁固体。此算法不支持面移除。
	 * @param theS 要使用的初始固体对象。
	 * @param theOffsetValue 厚度值，定义壁的厚度。
	 */
	MakeThickSolidBySimple(theS: Mx3dShapeObject, theOffsetValue: number): void;
	/**
	 * 使用连接算法构建厚壁固体。
	 * 该方法基于一个固体和一组闭合面来创建厚壁固体。
	 * @param S 要使用的初始固体对象。
	 * @param ClosingFaces 要移除的面对象数组。
	 * @param Offset 厚度值，定义壁的厚度。正值表示外侧，负值表示内侧。
	 * @param Tol 公差值，定义生成形状的重合度标准。
	 * @param Mode 构造模式，默认为 BRepOffset_Skin，定义自由边的平行线构造方式。
	 * @param Intersection 是否计算交集，默认不计算。
	 * @param SelfInter 是否消除自交，默认不消除。
	 * @param Join 连接类型，默认为 GeomAbs_Arc，用于填充平行线之间的空隙。
	 * @param RemoveIntEdges 是否移除内部边，默认不移除。
	 */
	MakeThickSolidByJoin(S: Mx3dShapeObject, ClosingFaces: Mx3dShapeObject[], Offset: number, Tol: number, Mode?: MdGe.MxOffsetModeEnum, Intersection?: boolean, SelfInter?: boolean, Join?: MdGe.MxGAJoinTypeEnum, RemoveIntEdges?: boolean): void;
	/**
	 * 执行厚壁固体的建模算法。
	 * 此方法完成厚壁固体的构建过程。
	 */
	Build(): void;
	/**
	 * 获取厚壁固体的形状对象。
	 * @returns 厚壁固体的形状对象。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 检查建模算法是否执行完成。
	 * @returns 如果建模算法执行完成，则返回 true；否则返回 false。
	 */
	IsDone(): boolean;
}
/**
 * 处理 Wire 的接口
 */
export declare class Mx3dWireTool {
	/**
	 * 将一组边连接成最大长度的线条（线）。连接的标准是边的端点间的距离应小于给定的容差。
	 * 该方法将输入的边集合转换为最大长度的线条集合。
	 *
	 * @param edges - 要连接的边对象数组。
	 * @param toler - 边连接时的容差值。
	 * @param shared - 如果为 true，则仅在相邻边共享相同顶点时连接；如果为 false，则在相邻边的端点距离小于容差时连接。
	 * @returns 一个新的线条对象数组，包含连接后的最大长度的线条。
	 */
	static ConnectEdgesToWires(edges: Mx3dShapeObject[], toler?: number, shared?: boolean): Mx3dShapeObject[];
	/**
	 * 将一组线条连接成最大长度的线条（线）。连接的标准是线条的端点间的距离应小于给定的容差。
	 * 该方法将输入的线条集合转换为最大长度的线条集合。
	 *
	 * @param wires - 要连接的线条对象数组。
	 * @param toler - 线条连接时的容差值。
	 * @param shared - 如果为 true，则仅在相邻线条共享相同顶点时连接；如果为 false，则在相邻线条的端点距离小于容差时连接。
	 * @returns 一个新的线条对象数组，包含连接后的最大长度的线条。
	 */
	static ConnectWiresToWires(wires: Mx3dShapeObject[], toler?: number, shared?: boolean): Mx3dShapeObject[]; /**
	 * Edge 转换为 Wire
	 * @param theEdge 待转换的 Edge
	 * @returns 转换后的 Wire
	 */
	static EdgeToWire(theEdge: Mx3dShapeEdge): Mx3dShapeWire;
}
/**
 * 表示有限范围的曲线的基类
 */
export declare class Mx3dGeomBoundedCurve extends Mx3dGeomCurve {
	/**
	 * @internal
	 */
	constructor(p?: object);
	/**
	 * 返回对象的动态类型。
	 * @returns 动态类型的字符串。
	 */
	DynamicType(): string;
}
/**
 * 代表一个B样条曲线。
 * 该类继承自Mx3dGeomBoundedCurve并封装了B样条曲线的操作和属性。
 */
export declare class Mx3dGeomBSplineCurve extends Mx3dGeomBoundedCurve {
	/**
	 * 构造函数用于创建一个B样条曲线。
	 * @param Poles 控制点的数组。
	 * @param Knots 节点序列的数组。
	 * @param Multiplicities 节点的多重性。
	 * @param Degree 曲线的阶数。
	 */
	constructor(Poles: Mx3dGePoint[], Knots: number[], Multiplicities: number[], Degree: number);
	/**
   * 构造函数用于创建一个带权重的B样条曲线。
   * @param Poles 控制点的数组。
   * @param Weights 控制点的权重数组。
   * @param Knots 节点序列的数组。
   * @param Multiplicities 节点的多重性。
   * @param Degree 曲线的阶数。
   */
	constructor(Poles: Mx3dGePoint[], Weights: number[], Knots: number[], Multiplicities: number[], Degree: number);
	/**
	 * 提高曲线的阶数。
	 * @param Degree 新的阶数。
	 */
	IncreaseDegree(Degree: number): void;
	/**
	 * 提高指定索引处的节点多重性。
	 * @param Index 节点的索引。
	 * @param M 新的多重性。
	 */
	IncreaseMultiplicity(Index: number, M: number): void;
	/**
	 * 提高指定范围内的节点多重性。
	 * @param I1 范围起始索引。
	 * @param I2 范围结束索引。
	 * @param M 新的多重性。
	 */
	IncreaseMultiplicity(I1: number, I2: number, M: number): void;
	/**
	 * 增量提高指定范围内的节点多重性。
	 * @param I1 起始索引。
	 * @param I2 结束索引。
	 * @param M 增加的多重性值。
	 */
	IncrementMultiplicity(I1: number, I2: number, M: number): void;
	/**
	 * 插入一个新的节点。
	 * @param U 新节点的位置。
	 * @param M 新节点的多重性（可选）。
	 * @param ParametricTolerance 参数容差（可选）。
	 * @param Add 是否添加节点而不是替换（可选）。
	 */
	InsertKnot(U: number, M?: number, ParametricTolerance?: number, Add?: boolean): void;
	/**
	 * 插入多个新的节点。
	 * @param Knots 新节点的位置数组。
	 * @param Mults 新节点的多重性数组。
	 * @param ParametricTolerance 参数容差（可选）。
	 * @param Add 是否添加节点而不是替换（可选）。
	 */
	InsertKnots(Knots: number[], Mults: number[], ParametricTolerance?: number, Add?: boolean): void;
	/**
	 * 移除一个节点。
	 * @param Index 节点的索引。
	 * @param M 节点的多重性。
	 * @param Tolerance 容差。
	 * @returns 是否成功移除节点。
	 */
	RemoveKnot(Index: number, M: number, Tolerance: number): boolean;
	/**
	 * 反转曲线。
	 */
	Reverse(): void;
	/**
	 * 获取反转参数值。
	 * @param U 原参数值。
	 * @returns 反转后的参数值。
	 */
	ReversedParameter(U: number): number;
	/**
	 * 截取曲线的一个段。
	 * @param U1 段的起始参数值。
	 * @param U2 段的结束参数值。
	 */
	Segment(U1: number, U2: number): void;
	/**
	 * 设置节点。
	 * @param Index 节点索引。
	 * @param K 新的节点值。
	 */
	SetKnot(Index: number, K: number): void;
	/**
	 * 设置节点并指定其多重性。
	 * @param Index 节点索引。
	 * @param K 新的节点值。
	 * @param M 节点的多重性。
	 */
	SetKnot(Index: number, K: number, M: number): void;
	/**
	 * 设置所有节点。
	 * @param dK 节点值数组。
	 */
	SetKnots(dK: number[]): void;
	/**
	 * 设置曲线为周期性。
	 */
	SetPeriodic(): void;
	/**
	 * 设置原点。
	 * @param Index 原点索引。
	 */
	SetOrigin(Index: number): void;
	/**
	 * 设置原点并指定容差。
	 * @param U 原点参数值。
	 * @param Tol 容差。
	 */
	SetOrigin(U: number, Tol: number): void;
	/**
	 * 设置曲线为非周期性。
	 */
	SetNotPeriodic(): void;
	/**
	 * 设置指定索引处的控制点。
	 * @param Index 控制点的索引。
	 * @param P 控制点。
	 */
	SetPole(Index: number, P: UniPoint): void;
	/**
	 * 设置指定索引处的控制点和权重。
	 * @param Index 控制点的索引。
	 * @param P 控制点。
	 * @param Weight 权重。
	 */
	SetPole(Index: number, P: UniPoint, Weight: number): void;
	/**
	 * 设置指定索引处的权重。
	 * @param Index 权重的索引。
	 * @param Weight 权重。
	 */
	SetWeight(Index: number, Weight: number): void;
	/**
	 * 检查曲线在指定阶数下是否连续。
	 * @param N 阶数。
	 * @returns 如果曲线在指定阶数下是连续的，则返回true；否则返回false。
	 */
	IsCN(N: number): boolean;
	/**
	 * 检查曲线在指定范围内是否满足G1连续性。
	 * @param theTf 起始参数。
	 * @param theTl 结束参数。
	 * @param theAngTol 角度公差。
	 * @returns 如果曲线在指定范围内满足G1连续性，则返回true；否则返回false。
	 */
	IsG1(theTf: number, theTl: number, theAngTol: number): boolean;
	/**
	 * 检查曲线是否闭合。
	 * @returns 如果曲线闭合，则返回true；否则返回false。
	 */
	IsClosed(): boolean;
	/**
	 * 检查曲线是否周期性。
	 * @returns 如果曲线是周期性的，则返回true；否则返回false。
	 */
	IsPeriodic(): boolean;
	/**
	 * 检查曲线是否是有理的。
	 * @returns 如果曲线是有理的，则返回true；否则返回false。
	 */
	IsRational(): boolean;
	/**
	 * 获取曲线的连续性。
	 * @returns 曲线的连续性。
	 */
	Continuity(): MdGe.MxGAShapeEnum;
	/**
	 * 获取曲线的阶数。
	 * @returns 曲线的阶数。
	 */
	Degree(): number;
	/**
	 * 在给定参数处计算曲线的点。
	 * @param U 参数。
	 * @param P 结果点。
	 */
	D0(U: number, P: Mx3dGePoint): void;
	/**
	 * 在给定参数处计算曲线的点和一阶导数。
	 * @param U 参数。
	 * @param P 结果点。
	 * @param V1 一阶导数。
	 */
	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
	/**
	 * 在给定参数处计算曲线的点、一阶导数和二阶导数。
	 * @param U 参数。
	 * @param P 结果点。
	 * @param V1 一阶导数。
	 * @param V2 二阶导数。
	 */
	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
	/**
	 * 在给定参数处计算曲线的点、一阶导数、二阶导数和三阶导数。
	 * @param U 参数。
	 * @param P 结果点。
	 * @param V1 一阶导数。
	 * @param V2 二阶导数。
	 * @param V3 三阶导数。
	 */
	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
	/**
	 * 在给定参数处计算曲线的N阶导数。
	 * @param U 参数。
	 * @param N 阶数。
	 * @returns N阶导数。
	 */
	DN(U: number, N: number): Mx3dGeVec;
	/**
	 * 在指定范围内计算局部参数的点。
	 * @param U 参数。
	 * @param FromK1 起始节点索引。
	 * @param ToK2 结束节点索引。
	 * @returns 局部参数的点。
	 */
	LocalValue(U: number, FromK1: number, ToK2: number): Mx3dGePoint;
	/**
	 * 在指定范围内计算局部参数的点。
	 * @param U 参数。
	 * @param FromK1 起始节点索引。
	 * @param ToK2 结束节点索引。
	 * @param P 结果点。
	 */
	LocalD0(U: number, FromK1: number, ToK2: number, P: Mx3dGePoint): void;
	/**
	 * 在指定范围内计算局部参数的点和一阶导数。
	 * @param U 参数。
	 * @param FromK1 起始节点索引。
	 * @param ToK2 结束节点索引。
	 * @param P 结果点。
	 * @param V1 一阶导数。
	 */
	LocalD1(U: number, FromK1: number, ToK2: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
	/**
	 * 在指定范围内计算局部参数的点、一阶导数和二阶导数。
	 * @param U 参数。
	 * @param FromK1 起始节点索引。
	 * @param ToK2 结束节点索引。
	 * @param P 结果点。
	 * @param V1 一阶导数。
	 * @param V2 二阶导数。
	 */
	LocalD2(U: number, FromK1: number, ToK2: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
	/**
	 * 在指定范围内计算局部参数的点、一阶导数、二阶导数和三阶导数。
	 * @param U 参数。
	 * @param FromK1 起始节点索引。
	 * @param ToK2 结束节点索引。
	 * @param P 结果点。
	 * @param V1 一阶导数。
	 * @param V2 二阶导数。
	 * @param V3 三阶导数。
	 */
	LocalD3(U: number, FromK1: number, ToK2: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
	/**
	 * 在指定范围内计算局部参数的N阶导数。
	 * @param U 参数。
	 * @param FromK1 起始节点索引。
	 * @param ToK2 结束节点索引。
	 * @param N 阶数。
	 * @returns N阶导数。
	 */
	LocalDN(U: number, FromK1: number, ToK2: number, N: number): Mx3dGeVec;
	/**
	 * 获取曲线的终点。
	 * @returns 曲线的终点。
	 */
	EndPoint(): Mx3dGePoint;
	/**
	 * 获取曲线的第一个节点索引。
	 * @returns 第一个节点索引。
	 */
	FirstUKnotIndex(): number;
	/**
	 * 返回曲线的第一个参数值。
	 * 通常用于确定曲线的起始点。
	 * @returns 第一个参数值。
	 */
	FirstParameter(): number;
	/**
	 * 获取曲线在指定索引处的节点。
	 * @param Index 节点的索引。
	 * @returns 节点。
	 */
	Knot(Index: number): number;
	/**
	 * 获取曲线的节点序列。
	 * @returns 节点序列的数组。
	 */
	Knots(): number[];
	/**
	 * 获取曲线的最后一个节点索引。
	 * @returns 最后一个节点索引。
	 */
	LastUKnotIndex(): number;
	/**
	 * 返回曲线的最后一个参数值。
	 * 通常用于确定曲线的终点。
	 * @returns 最后一个参数值。
	 */
	LastParameter(): number;
	/**
	 * 获取指定索引处的节点多重性。
	 * 节点多重性用于定义曲线在特定参数值处的重复程度。
	 * @param Index 节点索引。
	 * @returns 节点的多重性值。
	 */
	Multiplicity(Index: number): number;
	/**
	 * 返回曲线的所有节点多重性值。
	 * 节点多重性用于定义曲线在特定参数值处的重复程度。
	 * @returns 节点多重性值的数组。
	 */
	Multiplicities(): number[];
	/**
	 * 获取曲线的节点数。
	 * @returns 节点数。
	 */
	NbKnots(): number;
	/**
	 * 获取曲线的控制点数。
	 * @returns 控制点数。
	 */
	NbPoles(): number;
	/**
	 * 获取指定索引处的控制点。
	 * 控制点定义了曲线的形状和位置。
	 * @param Index 控制点的索引。
	 * @returns 指定索引处的控制点对象。
	 */
	Pole(Index: number): Mx3dGePoint;
	/**
	 * 获取曲线的控制点序列。
	 * @returns 控制点序列的数组。
	 */
	Poles(): Mx3dGePoint[];
	/**
	 * 获取曲线的起点。
	 * @returns 曲线的起点。
	 */
	StartPoint(): Mx3dGePoint;
	/**
	 * 获取指定索引处的权重值。
	 * 权重值用于定义B样条曲线的局部形状和重要性。
	 * @param Index 权重值的索引。
	 * @returns 指定索引处的权重值。
	 */
	Weight(Index: number): number;
	/**
	 * 获取曲线的权重序列。
	 * @returns 权重序列的数组。
	 */
	Weights(): number[];
	/**
	 * 应用给定的变换矩阵变换曲线。
	 * @param T 变换矩阵。
	 */
	Transform(T: Mx3dGeTrsf): void;
	/**
	 * 创建当前B样条曲线的副本。
	 * @returns 返回一个新的B样条曲线对象。
	 */
	Copy(): Mx3dGeomObject;
	/**
	 * 获取曲线的边。
	 * @param p1 边的起始点参数。
	 * @param p2 边的终止点参数。
	 * @returns 返回指定参数范围内的曲线边。
	 */
	Edge(p1: number, p2: number): Mx3dShapeEdge;
	/**
	 * 获取曲线的Wire。
	 * @returns 返回表示曲线的Wire对象。
	 */
	Wire(): Mx3dShapeWire;
	/**
	 * 创建曲线的偏移副本。
	 * @param Offset 偏移量。
	 * @param V 偏移方向，与偏移方向垂直。
	 * @param isNotCheckC0 是否不检查C0连续性。
	 * @returns 返回偏移后的曲线边对象。
	 */
	OffsetCurve(Offset: number, V: UniDir, isNotCheckC0: boolean): Mx3dShapeEdge;
	/**
	 * 比较当前曲线与另一条曲线的相等性。
	 * @param theOther 另一个B样条曲线对象。
	 * @param thePreci 比较精度。
	 * @returns 如果两条曲线在指定精度下相等，返回true；否则返回false。
	 */
	IsEqual(theOther: Mx3dGeomBSplineCurve, thePreci: number): boolean;
	/**
	 * @internal
	 */
	DynCast(theObject: Mx3dGeomObject): this;
	/**
	 * 父类对象转 Mx3dGeomBSplineCurve 类对象
	 * @param theObject 父类对象
	 * @returns Mx3dGeomBSplineCurve 类对象
	 */
	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomBSplineCurve;
	/**
	 * 返回对象的动态类型。
	 * @returns 动态类型的字符串。
	 */
	DynamicType(): string;
}
/**
 * Mx3dGeomBezierCurve 表示Bezier曲线，提供了一系列方法来操作和查询Bezier曲线的属性。
 */
export declare class Mx3dGeomBezierCurve extends Mx3dGeomBoundedCurve {
	/**
	   * 构造函数，创建一个Bezier曲线。
	   * @param CurvePoles - 控制点数组。
	   * @param PoleWeights - 控制点权重数组（可选）。
	   */
	constructor(CurvePoles: Mx3dGePoint[], PoleWeights?: number[]);
	/**
	   * 提高Bezier曲线的阶数。
	   * @param Degree - 新的阶数。
	   */
	Increase(Degree: number): void;
	/**
	   * 在指定索引之后插入一个控制点。
	   * @param Index - 插入点的索引。
	   * @param P - 新的控制点。
	   * @param Weight - 新的控制点的权重（可选）。
	   */
	InsertPoleAfter(Index: number, P: Mx3dGePoint, Weight?: number): void;
	/**
	   * 在指定索引之前插入一个控制点。
	   * @param Index - 插入点的索引。
	   * @param P - 新的控制点。
	   * @param Weight - 新的控制点的权重（可选）。
	   */
	InsertPoleBefore(Index: number, P: Mx3dGePoint, Weight?: number): void;
	/**
	   * 删除指定索引的控制点。
	   * @param Index - 要删除的控制点的索引。
	   */
	RemovePole(Index: number): void;
	/**
	   * 反转Bezier曲线的参数方向。
	   */
	Reverse(): void;
	/**
	   * 获取反转后的参数值。
	   * @param U - 原参数值。
	   * @returns 反转后的参数值。
	   */
	ReversedParameter(U: number): number;
	/**
	   * 截取Bezier曲线的一部分。
	   * @param U1 - 起始参数值。
	   * @param U2 - 结束参数值。
	   */
	Segment(U1: number, U2: number): void;
	/**
	   * 设置指定索引的控制点。
	   * @param Index - 要设置的控制点的索引。
	   * @param P - 新的控制点。
	   * @param Weight - 新的控制点的权重（可选）。
	   */
	SetPole(Index: number, P: Mx3dGePoint, Weight?: number): void;
	/**
	   * 设置指定索引的控制点权重。
	   * @param Index - 要设置的控制点的索引。
	   * @param Weight - 新的权重值。
	   */
	SetWeight(Index: number, Weight: number): void;
	/**
	   * 检查曲线是否闭合。
	   * @returns 曲线是否闭合。
	   */
	IsClosed(): boolean;
	/**
	   * 检查曲线的连续性。
	   * @param N - 连续性的阶数。
	   * @returns 曲线是否具有指定阶数的连续性。
	   */
	IsCN(N: number): boolean;
	/**
	   * 检查曲线的参数化是否周期性。
	   * @returns 曲线是否周期性。
	   */
	IsPeriodic(): boolean;
	/**
	   * 检查曲线是否是有理Bezier曲线。
	   * @returns 曲线是否是有理的。
	   */
	IsRational(): boolean;
	/**
	   * 获取曲线的连续性类型。
	   * @returns 曲线的连续性类型。
	   */
	Continuity(): MdGe.MxGAShapeEnum;
	/**
	   * 获取曲线的阶数。
	   * @returns 曲线的阶数。
	   */
	Degree(): number;
	/**
	   * 计算曲线在指定参数值处的点。
	   * @param U - 参数值。
	   * @param P - 计算得到的点。
	   */
	D0(U: number, P: Mx3dGePoint): void;
	/**
	   * 计算曲线在指定参数值处的点及其一阶导数。
	   * @param U - 参数值。
	   * @param P - 计算得到的点。
	   * @param V1 - 计算得到的一阶导数。
	   */
	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
	/**
	   * 计算曲线在指定参数值处的点及其一阶和二阶导数。
	   * @param U - 参数值。
	   * @param P - 计算得到的点。
	   * @param V1 - 计算得到的一阶导数。
	   * @param V2 - 计算得到的二阶导数。
	   */
	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
	/**
	   * 计算曲线在指定参数值处的点及其一阶、二阶和三阶导数。
	   * @param U - 参数值。
	   * @param P - 计算得到的点。
	   * @param V1 - 计算得到的一阶导数。
	   * @param V2 - 计算得到的二阶导数。
	   * @param V3 - 计算得到的三阶导数。
	   */
	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
	/**
	   * 计算曲线在指定参数值处的N阶导数。
	   * @param U - 参数值。
	   * @param N - 导数的阶数。
	   * @returns 计算得到的N阶导数。
	   */
	DN(U: number, N: number): Mx3dGeVec;
	/**
	   * 获取曲线的起始点。
	   * @returns 曲线的起始点。
	   */
	StartPoint(): Mx3dGePoint;
	/**
	   * 获取曲线的终点。
	   * @returns 曲线的终点。
	   */
	EndPoint(): Mx3dGePoint;
	/**
	   * 获取曲线的第一个参数值。
	   * @returns 曲线的第一个参数值。
	   */
	FirstParameter(): number;
	/**
	   * 获取曲线的最后一个参数值。
	   * @returns 曲线的最后一个参数值。
	   */
	LastParameter(): number;
	/**
	   * 获取曲线的控制点数量。
	   * @returns 曲线的控制点数量。
	   */
	NbPoles(): number;
	/**
	   * 获取指定索引的控制点。
	   * @param Index - 控制点的索引。
	   * @returns 指定的控制点。
	   */
	Pole(Index: number): Mx3dGePoint;
	/**
	   * 获取所有控制点。
	   * @returns 所有控制点的数组。
	   */
	Poles(): Mx3dGePoint[];
	/**
	   * 获取指定索引的控制点权重。
	   * @param Index - 控制点的索引。
	   * @returns 指定的控制点权重。
	   */
	Weight(Index: number): number;
	/**
	   * 获取所有控制点的权重。
	   * @returns 所有控制点权重的数组。
	   */
	Weights(): number[];
	/**
	   * 对曲线应用变换。
	   * @param T - 变换矩阵。
	   */
	Transform(T: Mx3dGeTrsf): void;
	/**
	   * 复制曲线对象。
	   * @returns 复制的曲线对象。
	   */
	Copy(): Mx3dGeomObject;
	/**
	   * 创建一条边。
	   * @param p1 - 边的起点参数。
	   * @param p2 - 边的终点参数。
	   * @returns 创建的边对象。
	   */
	Edge(p1: number, p2: number): Mx3dShapeEdge;
	/**
	   * 创建一条线。
	   * @returns 创建的线对象。
	   */
	Wire(): Mx3dShapeWire;
	/**
	   * 创建偏移曲线。
	   * @param Offset - 偏移量。
	   * @param V - 偏移方向，与偏移方向垂直。
	   * @param isNotCheckC0 - 是否检查C0连续性。
	   * @returns 创建的偏移曲线。
	   */
	OffsetCurve(Offset: number, V: UniDir, isNotCheckC0: boolean): Mx3dShapeEdge;
	/**
	 * @internal
	 */
	DynCast(theObject: Mx3dGeomObject): this;
	/**
	 * 父类对象转 Mx3dGeomBezierCurve 类对象
	 * @param theObject 父类对象
	 * @returns Mx3dGeomBezierCurve 类对象
	 */
	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomBezierCurve;
	/**
	 * 返回对象的动态类型。
	 * @returns 动态类型的字符串。
	 */
	DynamicType(): string;
}
/**
 * Mx3dGeomSurface 类，提供了 3D 表面操作的方法。
 */
export declare class Mx3dGeomSurface extends Mx3dGeomObject {
	/**
	   * @internal
	   */
	constructor(p?: object);
	/**
	   * 反转 U 方向的参数化。
	   * @returns 返回当前对象以实现链式调用。
	   */
	UReversed(): this;
	/**
	   * 反转 V 方向的参数化。
	   * @returns 返回当前对象以实现链式调用。
	   */
	VReversed(): this;
	/**
	   * 根据给定的变换矩阵 T 变换表面参数。
	   * @param UV 参数数组，包含 U 和 V 的值。
	   * @param T 变换矩阵。
	   */
	TransformParameters(UV: [
		dU: number,
		dV: number
	], T: Mx3dGeTrsf): void;
	/**
	   * 返回表面在 U 方向的周期。
	   * @returns 表面在 U 方向的周期。
	   */
	UPeriod(): number;
	/**
	   * 返回表面在 V 方向的周期。
	   * @returns 表面在 V 方向的周期。
	   */
	VPeriod(): number;
	/**
	   * 计算参数 (U, V) 对应的表面上的点。
	   * @param U 表面参数 U。
	   * @param V 表面参数 V。
	   * @returns 对应的点。
	   */
	Value(U: number, V: number): Mx3dGePoint;
	/**
	   * 返回对象的动态类型。
	   * @returns 动态类型的字符串表示。
	   */
	DynamicType(): string;
}
/**
 * Mx3dGeomElementarySurface 类是对几何基础表面（Elementary Surface）类的封装，提供了对简单参数方程表面的操作接口。
 * 这些表面包括平面、圆柱、圆锥、球体等。该类继承自 Mx3dGeomSurface，并扩展了相关的几何操作功能。
 */
export declare class Mx3dGeomElementarySurface extends Mx3dGeomSurface {
	/**
	 * @internal
	 */
	constructor(p?: object);
	/**
	 * 设置表面的主轴（Z轴）。
	 * @param theA1 表面的主轴定义。
	 */
	SetAxis(theA1: Mx3dGeAxis): void;
	/**
	 * 设置表面局部坐标系的位置点。
	 * @param theLoc 新的位置点。
	 */
	SetLocation(theLoc: Mx3dGePoint): void;
	/**
	 * 设置表面的局部坐标系。
	 * @param theAx3 新的坐标系，包含位置和方向。
	 */
	SetPosition(theAx3: Mx3dGeCSYSR): void;
	/**
	 * 获取表面的主轴（Z轴）。
	 * @returns 表面的主轴定义。
	 */
	Axis(): Mx3dGeAxis;
	/**
	 * 获取表面局部坐标系的位置点。
	 * @returns 表面位置点。
	 */
	Location(): Mx3dGePoint;
	/**
	 * 获取表面的局部坐标系。
	 * @returns 表面的局部坐标系。
	 */
	Position(): Mx3dGeCSYSR;
	/**
	 * 反转表面在 U 参数方向上的参数化方向。
	 */
	UReverse(): void;
	/**
	 * 反转表面在 V 参数方向上的参数化方向。
	 */
	VReverse(): void;
	/**
	 * 返回表面在全局上的连续性（MxGAShapeEnum）。
	 * @returns 表面在全局上的连续性。
	 */
	Continuity(): MdGe.MxGAShapeEnum;
	/**
	 * 检查表面在 U 参数方向上的连续性是否达到指定的等级。
	 * @param N 要检查的连续性等级。
	 * @returns 如果连续性等级满足条件，则返回 true；否则返回 false。
	 */
	IsCNu(N: number): boolean;
	/**
	 * 检查表面在 V 参数方向上的连续性是否达到指定的等级。
	 * @param N 要检查的连续性等级。
	 * @returns 如果连续性等级满足条件，则返回 true；否则返回 false。
	 */
	IsCNv(N: number): boolean;
	/**
	 * 返回对象的动态类型名称。
	 * @returns 对象的类型名称字符串。
	 */
	DynamicType(): string;
}
/**
 * Mx3dGeomPlane 类，提供描述和操作3D空间中平面的功能。
 * 一个平面由坐标系 (Mx3dGeCSYSR) 定义，可以通过其法向量、原点和参数方向来描述。
 */
export declare class Mx3dGeomPlane extends Mx3dGeomElementarySurface {
	/**
	   * 根据指定的轴向位置构造一个位于3D空间中的平面。
	   * @param A3 - 定义平面位置和方向的坐标系 (Mx3dGeCSYSR)。
	   */
	constructor(A3: Mx3dGeCSYSR);
	/**
	   * 根据一个点和法向量构造一个平面。
	   * @param P - 平面的原点。
	   * @param V - 法向量，指向平面的方向。
	   */
	constructor(P: UniPoint, V: UniDir);
	/**
	   * 根据平面方程的系数构造一个平面。
	   * @param A - 方程 Ax + By + Cz + D = 0 的系数 A。
	   * @param B - 方程 Ax + By + Cz + D = 0 的系数 B。
	   * @param C - 方程 Ax + By + Cz + D = 0 的系数 C。
	   * @param D - 方程 Ax + By + Cz + D = 0 的系数 D。
	   */
	constructor(A: number, B: number, C: number, D: number);
	/**
	   * 翻转平面在 U 参数方向上的方向。
	   */
	UReverse(): void;
	/**
	 * 计算在平面翻转 U 参数方向后的 U 参数值。
	 * @param U - 原始的 U 参数。
	 * @returns 翻转后的 U 参数。
	 */
	UReversedParameter(U: number): number;
	/**
	   * 翻转平面在 V 参数方向上的方向。
	   */
	VReverse(): void;
	/**
	   * 计算在平面翻转 V 参数方向后的 V 参数值。
	   * @param V - 原始的 V 参数。
	   * @returns 翻转后的 V 参数。
	   */
	VReversedParameter(V: number): number;
	/**
	   * 将 U 和 V 参数以及变换 T 应用于平面。
	   * @param UV - 参数值数组 [dU, dV]。
	   * @param T - 变换 (Mx3dGeTrsf)。
	   */
	TransformParameters(UV: [
		dU: number,
		dV: number
	], T: Mx3dGeTrsf): void;
	/**
	   * 计算平面的参数范围。
	   * @param U1U2V1V2 - 参数范围数组 [dU1, dU2, dV1, dV2]。
	   */
	Bounds(U1U2V1V2: [
		dU1: number,
		dU2: number,
		dV1: number,
		dV2: number
	]): void;
	/**
	   * 计算平面方程的系数。
	   * @param ABCD - 系数数组 [dA, dB, dC, dD]。
	   */
	Coefficients(ABCD: [
		dA: number,
		dB: number,
		dC: number,
		dD: number
	]): void;
	/**
	   * 判断平面在 U 方向上是否闭合。
	   * @returns 返回 false。
	   */
	IsUClosed(): boolean;
	/**
	   * 判断平面在 V 方向上是否闭合。
	   * @returns 返回 false。
	   */
	IsVClosed(): boolean;
	/**
	   * 判断平面在 U 方向上是否周期性。
	   * @returns 返回 false。
	   */
	IsUPeriodic(): boolean;
	/**
	   * 判断平面在 V 方向上是否周期性。
	   * @returns 返回 false。
	   */
	IsVPeriodic(): boolean;
	/**
	 * 计算在指定的 U 和 V 参数值处的点。
	 * @param U - U 参数值。
	 * @param V - V 参数值。
	 * @param P - 用于存储计算点的目标对象 (Mx3dGePoint)。
	 * 计算公式为 P = O + U * XDir + V * YDir，
	 * 其中 O 为平面的原点，XDir 和 YDir 分别是 U 和 V 参数方向的基向量。
	 */
	D0(U: number, V: number, P: Mx3dGePoint): void;
	/**
	 * 计算在指定的 U 和 V 参数值处的点及其一阶导数。
	 * @param U - U 参数值。
	 * @param V - V 参数值。
	 * @param P - 用于存储计算点的目标对象 (Mx3dGePoint)。
	 * @param D1U - 用于存储 U 方向第一导数的目标对象 (Mx3dGeVec)。
	 * @param D1V - 用于存储 V 方向第一导数的目标对象 (Mx3dGeVec)。
	 * 计算公式为：
	 * - 点：P = O + U * XDir + V * YDir。
	 * - 第一导数：D1U 和 D1V 分别为 XDir 和 YDir 的偏导数。
	 */
	D1(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
	/**
	 * 计算在指定的 U 和 V 参数值处的点、第一阶和第二阶导数。
	 * @param U - U 参数值。
	 * @param V - V 参数值。
	 * @param P - 用于存储计算点的目标对象 (Mx3dGePoint)。
	 * @param D1U - 用于存储 U 方向第一导数的目标对象 (Mx3dGeVec)。
	 * @param D1V - 用于存储 V 方向第一导数的目标对象 (Mx3dGeVec)。
	 * @param D2U - 用于存储 U 方向第二导数的目标对象 (Mx3dGeVec)。
	 * @param D2V - 用于存储 V 方向第二导数的目标对象 (Mx3dGeVec)。
	 * @param D2UV - 用于存储 UV 方向第二导数的目标对象 (Mx3dGeVec)。
	 * 计算公式为：
	 * - 点：P = O + U * XDir + V * YDir。
	 * - 第一导数：D1U 和 D1V 分别为 XDir 和 YDir 的偏导数。
	 * - 第二导数：D2U、D2V 和 D2UV 为二阶偏导数。
	 */
	D2(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
	/**
	 * 计算在指定的 U 和 V 参数值处的点、第一、第二和第三阶导数。
	 * @param U - U 参数值。
	 * @param V - V 参数值。
	 * @param P - 用于存储计算点的目标对象 (Mx3dGePoint)。
	 * @param D1U - 用于存储 U 方向第一导数的目标对象 (Mx3dGeVec)。
	 * @param D1V - 用于存储 V 方向第一导数的目标对象 (Mx3dGeVec)。
	 * @param D2U - 用于存储 U 方向第二导数的目标对象 (Mx3dGeVec)。
	 * @param D2V - 用于存储 V 方向第二导数的目标对象 (Mx3dGeVec)。
	 * @param D2UV - 用于存储 UV 方向第二导数的目标对象 (Mx3dGeVec)。
	 * @param D3U - 用于存储 U 方向第三导数的目标对象 (Mx3dGeVec)。
	 * @param D3V - 用于存储 V 方向第三导数的目标对象 (Mx3dGeVec)。
	 * @param D3UUV - 用于存储 UUU 方向第三导数的目标对象 (Mx3dGeVec)。
	 * @param D3UVV - 用于存储 UVV 方向第三导数的目标对象 (Mx3dGeVec)。
	 * 计算公式为：
	 * - 点：P = O + U * XDir + V * YDir。
	 * - 第一导数：D1U 和 D1V 分别为 XDir 和 YDir 的偏导数。
	 * - 第二导数：D2U、D2V 和 D2UV 为二阶偏导数。
	 * - 第三导数：D3U、D3V、D3UUV 和 D3UVV 为三阶偏导数。
	 */
	D3(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
	/**
	 * 计算在指定的 U 和 V 参数值处的指定阶数的导数。
	 * @param U - U 参数值。
	 * @param V - V 参数值。
	 * @param Nu - U 方向的导数阶数。
	 * @param Nv - V 方向的导数阶数。
	 * @returns 返回计算的向量对象 (Mx3dGeVec)。
	 * @throws 错误：如果 Nu + Nv < 1 或 Nu < 0 或 Nv < 0，则抛出异常。
	 * 计算公式为计算指定阶数的偏导数，返回对应的向量。
	 */
	DN(U: number, V: number, Nu: number, Nv: number): Mx3dGeVec;
	/**
	 * 应用变换 T 到平面上。
	 * @param T - 变换 (Mx3dGeTrsf)。
	 */
	Transform(T: Mx3dGeTrsf): void;
	/**
	 * 创建一个新的对象，作为该平面的副本。
	 * @returns 返回新的平面对象 (Mx3dGeomObject)。
	 */
	Copy(): Mx3dGeomObject;
	/**
	 * 返回对象的动态类型字符串。
	 * @returns 类型名称字符串。
	 */
	DynamicType(): string;
	/**
	 * @internal
	 */
	DynCast(theObject: Mx3dGeomObject): this;
	/**
	 * 父类对象转 Mx3dGeomPlane 类对象
	 * @param theObject 父类对象
	 * @returns Mx3dGeomPlane 类对象
	 */
	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomPlane;
	/**
	 * 根据公差生成一个平面面。
	 * @param TolDegen - 公差值。
	 * @returns 生成的平面面 (Mx3dShapeFace)。
	 */
	Face(TolDegen: number): Mx3dShapeFace;
	/**
	 * 根据给定的轮廓线和是否在内部生成一个平面面。
	 * @param W - 轮廓线 (Mx3dShapeWire)。
	 * @param Inside - 是否在内部。
	 * @returns 生成的平面面 (Mx3dShapeFace)。
	 */
	Face(W: Mx3dShapeWire, Inside: boolean): Mx3dShapeFace;
	/**
	 * 根据 U 和 V 范围以及公差生成一个平面面。
	 * @param UMin - U 方向的最小值。
	 * @param UMax - U 方向的最大值。
	 * @param VMin - V 方向的最小值。
	 * @param VMax - V 方向的最大值。
	 * @param TolDegen - 公差值。
	 * @returns 生成的平面面 (Mx3dShapeFace)。
	 */
	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): Mx3dShapeFace;
}
/**
 * 表示三维空间中的圆锥曲面。
 * 圆锥曲面由其顶点的半角、参考半径和坐标系定义。
 */
export declare class Mx3dGeomConicalSurface extends Mx3dGeomElementarySurface {
	/**
	 * 构造一个具有指定坐标系、半角和半径的圆锥曲面。
	 * @param A3 - 圆锥曲面的局部坐标系。
	 * @param Ang - 圆锥曲面的半角。其绝对值应在 [0, PI/2] 范围内。
	 * @param Radius - 圆锥曲面参考平面上的圆的半径。
	 */
	constructor(A3: Mx3dGeCSYSR, Ang: number, Radius: number);
	/**
	 * 设置放置平面中的圆锥曲面的半径。
	 * @param R - 新的半径。必须为非负值。
	 */
	SetRadius(R: number): void;
	/**
	 * 设置圆锥曲面的半角。
	 * @param Ang - 新的半角。其绝对值应在 ]0, PI/2[ 范围内。
	 */
	SetSemiAngle(Ang: number): void;
	/**
	 * 返回反转后的U参数。
	 * @param U - 原始U参数。
	 * @returns 反转后的U参数。
	 */
	UReversedParameter(U: number): number;
	/**
	 * 返回反转后的V参数。
	 * @param V - 原始V参数。
	 * @returns 反转后的V参数。
	 */
	VReversedParameter(V: number): number;
	/**
	 * 反转V参数方向。
	 */
	VReverse(): void;
	/**
	 * 变换参数。
	 * @param UV - 参数数组 [dU, dV]。
	 * @param T - 变换。
	 */
	TransformParameters(UV: [
		dU: number,
		dV: number
	], T: Mx3dGeTrsf): void;
	/**
	 * 计算并返回圆锥的顶点。顶点在圆锥的旋转轴的负侧（半角为正）或正侧（半角为负）。
	 * @returns 圆锥的顶点。
	 */
	Apex(): Mx3dGePoint;
	/**
	 * 返回圆锥曲面的参数范围。
	 * @param U1U2V1V2 - 参数范围数组 [dU1, dU2, dV1, dV2]。
	 */
	Bounds(U1U2V1V2: [
		dU1: number,
		dU2: number,
		dV1: number,
		dV2: number
	]): void;
	/**
	 * 返回圆锥曲面的隐式方程的系数。
	 * 方程形式：A1.X^2 + A2.Y^2 + A3.Z^2 + 2*(B1.X.Y + B2.X.Z + B3.Y.Z) + 2*(C1.X + C2.Y + C3.Z) + D = 0
	 * @param A1A2A3B1B2B3C1C2C3D - 系数数组 [A1, A2, A3, B1, B2, B3, C1, C2, C3, D]。
	 */
	Coefficients(A1A2A3B1B2B3C1C2C3D: [
		A1: number,
		A2: number,
		A3: number,
		B1: number,
		B2: number,
		B3: number,
		C1: number,
		C2: number,
		C3: number,
		D: number
	]): void;
	/**
	 * 返回圆锥曲面的参考半径。
	 * @returns 参考半径。
	 */
	RefRadius(): number;
	/**
	 * 返回圆锥顶点的半角。
	 * @returns 圆锥的半角。
	 */
	SemiAngle(): number;
	/**
	 * 检查U参数是否闭合。
	 * @returns 总是返回 true。
	 */
	IsUClosed(): boolean;
	/**
	 * 检查V参数是否闭合。
	 * @returns 总是返回 false。
	 */
	IsVClosed(): boolean;
	/**
	 * 检查U参数是否周期性。
	 * @returns 总是返回 true。
	 */
	IsUPeriodic(): boolean;
	/**
	 * 检查V参数是否周期性。
	 * @returns 总是返回 false。
	 */
	IsVPeriodic(): boolean;
	/**
	 * 计算并返回曲面上给定参数 (U, V) 处的点。
	 * @param U - U参数。
	 * @param V - V参数。
	 * @param P - 结果点。
	 */
	D0(U: number, V: number, P: Mx3dGePoint): void;
	/**
	 * 计算并返回曲面上给定参数 (U, V) 处的点及其在U和V方向的第一导数。
	 * @param U - U参数。
	 * @param V - V参数。
	 * @param P - 结果点。
	 * @param D1U - U方向的第一导数。
	 * @param D1V - V方向的第一导数。
	 */
	D1(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
	/**
	 * 计算并返回曲面上给定参数 (U, V) 处的点及其在U和V方向的第一和第二导数。
	 * @param U - U参数。
	 * @param V - V参数。
	 * @param P - 结果点。
	 * @param D1U - U方向的第一导数。
	 * @param D1V - V方向的第一导数。
	 * @param D2U - U方向的第二导数。
	 * @param D2V - V方向的第二导数。
	 * @param D2UV - UV方向的混合导数。
	 */
	D2(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
	/**
	 * 计算并返回曲面上给定参数 (U, V) 处的点及其在U和V方向的第一、第二和第三导数。
	 * @param U - U参数。
	 * @param V - V参数。
	 * @param P - 结果点。
	 * @param D1U - U方向的第一导数。
	 * @param D1V - V方向的第一导数。
	 * @param D2U - U方向的第二导数。
	 * @param D2V - V方向的第二导数。
	 * @param D2UV - UV方向的混合导数。
	 * @param D3U - U方向的第三导数。
	 * @param D3V - V方向的第三导数。
	 * @param D3UUV - UU方向的混合导数。
	 * @param D3UVV - UV方向的混合导数。
	 */
	D3(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
	/**
	 * 计算并返回给定参数 (U, V) 处的指定阶数的导数。
	 * @param U - U参数。
	 * @param V - V参数。
	 * @param Nu - U方向的导数阶数。
	 * @param Nv - V方向的导数阶数。
	 * @returns 指定阶数的导数向量。
	 * @throws 如果Nu + Nv小于1，或Nu或Nv为负，则抛出异常。
	 */
	DN(U: number, V: number, Nu: number, Nv: number): Mx3dGeVec;
	/**
	 * 对圆锥曲面应用变换。
	 * @param T - 变换。
	 */
	Transform(T: Mx3dGeTrsf): void;
	/**
	 * 创建并返回一个此圆锥曲面的副本。
	 * @returns 圆锥曲面的副本。
	 */
	Copy(): Mx3dGeomObject;
	/**
	 * 返回对象的动态类型。
	 * @returns 动态类型的字符串表示。
	 */
	DynamicType(): string;
	/**
	 * @internal
	 */
	DynCast(theObject: Mx3dGeomObject): this;
	/**
	 * 父类对象转 Mx3dGeomConicalSurface 类对象
	 * @param theObject 父类对象
	 * @returns Mx3dGeomConicalSurface 类对象
	 */
	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomConicalSurface;
	/**
	 * 根据圆锥曲面创建一个面。
	 * @param TolDegen - 简化面容差。
	 * @returns 创建的面对象。
	 */
	Face(TolDegen: number): Mx3dShapeFace;
	/**
	 * 根据给定的线和方向创建一个面。
	 * @param W - 给定的线。
	 * @param Inside - 内部方向标志。
	 * @returns 创建的面对象。
	 */
	Face(W: Mx3dShapeWire, Inside: boolean): Mx3dShapeFace;
	/**
	 * 根据指定的参数范围创建一个面。
	 * @param UMin - U参数的最小值。
	 * @param UMax - U参数的最大值。
	 * @param VMin - V参数的最小值。
	 * @param VMax - V参数的最大值。
	 * @param TolDegen - 简化面容差。
	 * @returns 创建的面对象。
	 */
	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): Mx3dShapeFace;
}
/**
 * Mx3dGeomCylindricalSurface 类封装了圆柱面几何的功能，继承自 Mx3dGeomElementarySurface。
 */
export declare class Mx3dGeomCylindricalSurface extends Mx3dGeomElementarySurface {
	/**
	 * 构造函数，创建一个新的圆柱面对象。
	 * @param A3 圆柱面的局部坐标系。
	 * @param Radius 圆柱面的半径。
	 */
	constructor(A3: Mx3dGeCSYSR, Radius: number);
	/**
	 * 设置圆柱面的半径。
	 * @param R 新的半径值。
	 */
	SetRadius(R: number): void;
	/**
	 * 返回参数 U 在反向圆柱面上的对应参数值。
	 * @param U 参数 U。
	 * @returns 反向参数值。
	 */
	UReversedParameter(U: number): number;
	/**
	 * 返回参数 V 在反向圆柱面上的对应参数值。
	 * @param V 参数 V。
	 * @returns 反向参数值。
	 */
	VReversedParameter(V: number): number;
	/**
	 * 变换参数 U 和 V。
	 * @param UV 原始参数 [dU, dV]。
	 * @param T 变换矩阵。
	 */
	TransformParameters(UV: [
		dU: number,
		dV: number
	], T: Mx3dGeTrsf): void;
	/**
	 * 获取圆柱面的参数范围。
	 * @param U1U2V1V2 参数范围 [dU1, dU2, dV1, dV2]。
	 */
	Bounds(U1U2V1V2: [
		dU1: number,
		dU2: number,
		dV1: number,
		dV2: number
	]): void;
	/**
	 * 获取圆柱面方程的系数。
	 * @param A1A2A3B1B2B3C1C2C3D 方程系数 [A1, A2, A3, B1, B2, B3, C1, C2, C3, D]。
	 */
	Coefficients(A1A2A3B1B2B3C1C2C3D: [
		A1: number,
		A2: number,
		A3: number,
		B1: number,
		B2: number,
		B3: number,
		C1: number,
		C2: number,
		C3: number,
		D: number
	]): void;
	/**
	 * 返回圆柱面的半径。
	 * @returns 半径值。
	 */
	Radius(): number;
	/**
	 * 判断圆柱面在 U 方向是否闭合。
	 * @returns 如果是闭合的，返回 true，否则返回 false。
	 */
	IsUClosed(): boolean;
	/**
	 * 判断圆柱面在 V 方向是否闭合。
	 * @returns 如果是闭合的，返回 true，否则返回 false。
	 */
	IsVClosed(): boolean;
	/**
	 * 判断圆柱面在 U 方向是否周期性。
	 * @returns 如果是周期性的，返回 true，否则返回 false。
	 */
	IsUPeriodic(): boolean;
	/**
	 * 判断圆柱面在 V 方向是否周期性。
	 * @returns 如果是周期性的，返回 true，否则返回 false。
	 */
	IsVPeriodic(): boolean;
	/**
	 * 计算当前点在圆柱面上的位置及其法向量。
	 * @param U 参数 U。
	 * @param V 参数 V。
	 * @param P 存储点的位置。
	 */
	D0(U: number, V: number, P: Mx3dGePoint): void;
	/**
	 * 计算当前点在圆柱面上的位置及其一阶导数。
	 * @param U 参数 U。
	 * @param V 参数 V。
	 * @param P 存储点的位置。
	 * @param D1U 存储 U 方向的一阶导数。
	 * @param D1V 存储 V 方向的一阶导数。
	 */
	D1(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
	/**
	 * 计算当前点在圆柱面上的位置及其一阶、二阶导数。
	 * @param U 参数 U。
	 * @param V 参数 V。
	 * @param P 存储点的位置。
	 * @param D1U 存储 U 方向的一阶导数。
	 * @param D1V 存储 V 方向的一阶导数。
	 * @param D2U 存储 U 方向的二阶导数。
	 * @param D2V 存储 V 方向的二阶导数。
	 * @param D2UV 存储 U 和 V 方向的混合二阶导数。
	 */
	D2(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
	/**
	 * 计算当前点在圆柱面上的位置及其一阶、二阶、三阶导数。
	 * @param U 参数 U。
	 * @param V 参数 V。
	 * @param P 存储点的位置。
	 * @param D1U 存储 U 方向的一阶导数。
	 * @param D1V 存储 V 方向的一阶导数。
	 * @param D2U 存储 U 方向的二阶导数。
	 * @param D2V 存储 V 方向的二阶导数。
	 * @param D2UV 存储 U 和 V 方向的混合二阶导数。
	 * @param D3U 存储 U 方向的三阶导数。
	 * @param D3V 存储 V 方向的三阶导数。
	 * @param D3UUV 存储 U 和 U 方向的混合三阶导数。
	 * @param D3UVV 存储 U 和 V 方向的混合三阶导数。
	 */
	D3(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
	/**
	 * 计算指定阶数的导数向量。
	 * @param U 参数 U。
	 * @param V 参数 V。
	 * @param Nu 导数阶数在 U 方向。
	 * @param Nv 导数阶数在 V 方向。
	 * @returns 导数向量。
	 */
	DN(U: number, V: number, Nu: number, Nv: number): Mx3dGeVec;
	/**
	 * 应用变换 T 到圆柱面。
	 * @param T 变换矩阵。
	 */
	Transform(T: Mx3dGeTrsf): void;
	/**
	 * 创建当前圆柱面的副本。
	 * @returns 圆柱面的副本。
	 */
	Copy(): Mx3dGeomObject;
	/**
	 * 获取当前对象的动态类型信息。
	 * @returns 对象的类型字符串。
	 */
	DynamicType(): string;
	/**
	 * @internal
	 */
	DynCast(theObject: Mx3dGeomObject): this;
	/**
	 * 父类对象转 Mx3dGeomCylindricalSurface 类对象
	 * @param theObject 父类对象
	 * @returns Mx3dGeomCylindricalSurface 类对象
	 */
	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomCylindricalSurface;
	/**
	 * 创建圆柱面的面对象。
	 * @param TolDegen 面的退化容差。
	 * @returns 面对象。
	 */
	Face(TolDegen: number): Mx3dShapeFace;
	/**
	 * 创建圆柱面的面对象，指定是否包含内部区域。
	 * @param W 轮廓线。
	 * @param Inside 是否包含内部区域。
	 * @returns 面对象。
	 */
	Face(W: Mx3dShapeWire, Inside: boolean): Mx3dShapeFace;
	/**
	 * 创建圆柱面的面对象，指定参数范围。
	 * @param UMin 参数 U 的最小值。
	 * @param UMax 参数 U 的最大值。
	 * @param VMin 参数 V 的最小值。
	 * @param VMax 参数 V 的最大值。
	 * @param TolDegen 面的退化容差。
	 * @returns 面对象。
	 */
	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): Mx3dShapeFace;
}
/**
 * 表示三维空间中的球面。
 * 此类封装了操作球面属性和方法的功能。
 */
export declare class Mx3dGeomSphericalSurface extends Mx3dGeomElementarySurface {
	/**
	 * 构造一个具有给定坐标系统和半径的球面。
	 * @param A3 表面局部坐标系统（Mx3dGeCSYSR）。
	 * @param Radius 球的半径。
	 */
	constructor(A3: Mx3dGeCSYSR, Radius: number);
	/**
	 * 设置球面半径。
	 * @param R 新的球面半径。必须为非负数。
	 */
	SetRadius(R: number): void;
	/**
	 * 计算在给定点上U参数方向反转后的U参数值。
	 * @param U 原始的U参数。
	 * @returns 反转后的U参数值。
	 */
	UReversedParameter(U: number): number;
	/**
	 * 计算在给定点上V参数方向反转后的V参数值。
	 * @param V 原始的V参数。
	 * @returns 反转后的V参数值。
	 */
	VReversedParameter(V: number): number;
	/**
	 * 计算球面面积。
	 * @returns 表面面积。
	 */
	Area(): number;
	/**
	 * 检索参数域的边界。
	 * @param U1U2V1V2 包含边界的数组：[dU1, dU2, dV1, dV2]。
	 */
	Bounds(U1U2V1V2: [
		dU1: number,
		dU2: number,
		dV1: number,
		dV2: number
	]): void;
	/**
	 * 设置球面隐式方程的系数。
	 * @param A1A2A3B1B2B3C1C2C3D 系数数组：[A1, A2, A3, B1, B2, B3, C1, C2, C3, D]。
	 */
	Coefficients(A1A2A3B1B2B3C1C2C3D: [
		A1: number,
		A2: number,
		A3: number,
		B1: number,
		B2: number,
		B3: number,
		C1: number,
		C2: number,
		C3: number,
		D: number
	]): void;
	/**
	 * 返回球面半径。
	 * @returns 球的半径。
	 */
	Radius(): number;
	/**
	 * 计算球面体积。
	 * @returns 表面体积。
	 */
	Volume(): number;
	/**
	 * 检查表面在U方向是否闭合。
	 * @returns 如果U方向闭合则为True，否则为False。
	 */
	IsUClosed(): boolean;
	/**
	 * 检查表面在V方向是否闭合。
	 * @returns 如果V方向闭合则为True，否则为False。
	 */
	IsVClosed(): boolean;
	/**
	 * 检查表面在U方向是否周期性。
	 * @returns 如果U方向周期性则为True，否则为False。
	 */
	IsUPeriodic(): boolean;
	/**
	 * 检查表面在V方向是否周期性。
	 * @returns 如果V方向周期性则为True，否则为False。
	 */
	IsVPeriodic(): boolean;
	/**
	 * 计算给定U和V参数的表面点。
	 * @param U U参数。
	 * @param V V参数。
	 * @param P 表面上的点。
	 */
	D0(U: number, V: number, P: Mx3dGePoint): void;
	/**
	 * 计算给定U和V参数的点及其一阶导数。
	 * @param U U参数。
	 * @param V V参数。
	 * @param P 表面上的点。
	 * @param D1U U方向的导数。
	 * @param D1V V方向的导数。
	 */
	D1(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
	/**
	 * 计算给定U和V参数的点、一阶和二阶导数。
	 * @param U U参数。
	 * @param V V参数。
	 * @param P 表面上的点。
	 * @param D1U U方向的一阶导数。
	 * @param D1V V方向的一阶导数。
	 * @param D2U U方向的二阶导数。
	 * @param D2V V方向的二阶导数。
	 * @param D2UV 二阶混合导数。
	 */
	D2(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
	/**
	 * 计算给定U和V参数的点、一阶、二阶和三阶导数。
	 * @param U U参数。
	 * @param V V参数。
	 * @param P 表面上的点。
	 * @param D1U U方向的一阶导数。
	 * @param D1V V方向的一阶导数。
	 * @param D2U U方向的二阶导数。
	 * @param D2V V方向的二阶导数。
	 * @param D2UV 二阶混合导数。
	 * @param D3U U方向的三阶导数。
	 * @param D3V V方向的三阶导数。
	 * @param D3UUV 三阶混合导数（U和U）。
	 * @param D3UVV 三阶混合导数（U和V）。
	 */
	D3(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
	/**
	 * 计算在U和V方向上的指定阶数导数。
	 * @param U U参数。
	 * @param V V参数。
	 * @param Nu U方向上的导数阶数。
	 * @param Nv V方向上的导数阶数。
	 * @returns 第N阶导数向量。
	 */
	DN(U: number, V: number, Nu: number, Nv: number): Mx3dGeVec;
	/**
	 * 应用变换到球面。
	 * @param T 要应用的变换。
	 */
	Transform(T: Mx3dGeTrsf): void;
	/**
	 * 创建球面的副本。
	 * @returns 球面的新实例。
	 */
	Copy(): Mx3dGeomObject;
	/**
	 * 返回对象的动态类型。
	 * @returns 动态类型的字符串。
	 */
	DynamicType(): string;
	/**
	 * @internal
	 */
	DynCast(theObject: Mx3dGeomObject): this;
	/**
	 * 父类对象转 Mx3dGeomSphericalSurface 类对象
	 * @param theObject 父类对象
	 * @returns Mx3dGeomSphericalSurface 类对象
	 */
	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomSphericalSurface;
	/**
	 * 使用退化容差生成表面的面。
	 * @param TolDegen 退化容差。
	 * @returns 表面表示的面。
	 */
	Face(TolDegen: number): Mx3dShapeFace;
	/**
	 * 使用线框和内部标志生成表面的面。
	 * @param W 定义边界的线框。
	 * @param Inside 布尔值，表示面是否在线框内。
	 * @returns 表面表示的面。
	 */
	Face(W: Mx3dShapeWire, Inside: boolean): Mx3dShapeFace;
	/**
	 * 使用指定的参数范围和退化容差生成表面的面。
	 * @param UMin 参数范围的最小U值。
	 * @param UMax 参数范围的最大U值。
	 * @param VMin 参数范围的最小V值。
	 * @param VMax 参数范围的最大V值。
	 * @param TolDegen 退化容差，用于处理几何退化情况。
	 * @returns 表面表示的面，通常是一个闭合的曲面片段。
	 */
	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): Mx3dShapeFace;
}
/**
 * 表示三维空间中的环面（Toroidal Surface）。
 * 此类封装了操作环面属性和方法的功能。
 */
export declare class Mx3dGeomToroidalSurface extends Mx3dGeomElementarySurface {
	/**
	 * 构造一个具有给定坐标系统和主要、次要半径的环面。
	 * @param A3 表面局部坐标系统（Mx3dGeCSYSR）。
	 * @param MajorRadius 环面的主要半径。
	 * @param MinorRadius 环面的次要半径。
	 */
	constructor(A3: Mx3dGeCSYSR, MajorRadius: number, MinorRadius: number);
	/**
	 * 设置环面主要半径。
	 * @param MajorRadius 新的主要半径。必须为非负数。
	 */
	SetMajorRadius(MajorRadius: number): void;
	/**
	 * 设置环面次要半径。
	 * @param MinorRadius 新的次要半径。必须为非负数。
	 */
	SetMinorRadius(MinorRadius: number): void;
	/**
	 * 计算在给定U参数上的环面U方向反转后的参数值。
	 * @param U 原始的U参数。
	 * @returns 反转后的U参数值。
	 */
	UReversedParameter(U: number): number;
	/**
	 * 计算在给定V参数上的环面V方向反转后的参数值。
	 * @param V 原始的V参数。
	 * @returns 反转后的V参数值。
	 */
	VReversedParameter(V: number): number;
	/**
	 * 计算并返回环面的表面积。
	 * @returns 表面积。
	 */
	Area(): number;
	/**
	 * 设置参数范围的边界。
	 * @param U1U2V1V2 参数范围[U1, U2, V1, V2]。
	 */
	Bounds(U1U2V1V2: [
		dU1: number,
		dU2: number,
		dV1: number,
		dV2: number
	]): void;
	/**
	 * 获取隐式方程系数。
	 * @param Coef 系数数组，长度至少为31。
	 */
	Coefficients(Coef: number[]): void;
	/**
	 * 返回环面的主要半径。
	 * @returns 主要半径。
	 */
	MajorRadius(): number;
	/**
	 * 返回环面的次要半径。
	 * @returns 次要半径。
	 */
	MinorRadius(): number;
	/**
	 * 计算并返回环面的体积。
	 * @returns 体积。
	 */
	Volume(): number;
	/**
	 * 检查环面U方向是否闭合。
	 * @returns 如果U方向闭合则返回true，否则返回false。
	 */
	IsUClosed(): boolean;
	/**
	 * 检查环面V方向是否闭合。
	 * @returns 如果V方向闭合则返回true，否则返回false。
	 */
	IsVClosed(): boolean;
	/**
	 * 检查环面U方向是否周期性。
	 * @returns 如果U方向周期性则返回true，否则返回false。
	 */
	IsUPeriodic(): boolean;
	/**
	 * 检查环面V方向是否周期性。
	 * @returns 如果V方向周期性则返回true，否则返回false。
	 */
	IsVPeriodic(): boolean;
	/**
	 * 计算并返回指定U和V参数处的点。
	 * @param U 参数U。
	 * @param V 参数V。
	 * @param P 输出点（Mx3dGePoint）。
	 */
	D0(U: number, V: number, P: Mx3dGePoint): void;
	/**
	 * 计算当前点和U、V方向的一阶导数。
	 * @param U 参数U。
	 * @param V 参数V。
	 * @param P 输出点（Mx3dGePoint）。
	 * @param D1U 输出U方向的一阶导数（Mx3dGeVec）。
	 * @param D1V 输出V方向的一阶导数（Mx3dGeVec）。
	 */
	D1(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
	/**
	 * 计算当前点、一阶和二阶导数。
	 * @param U 参数U。
	 * @param V 参数V。
	 * @param P 输出点（Mx3dGePoint）。
	 * @param D1U 输出U方向的一阶导数（Mx3dGeVec）。
	 * @param D1V 输出V方向的一阶导数（Mx3dGeVec）。
	 * @param D2U 输出U方向的二阶导数（Mx3dGeVec）。
	 * @param D2V 输出V方向的二阶导数（Mx3dGeVec）。
	 * @param D2UV 输出U,V方向的二阶混合导数（Mx3dGeVec）。
	 */
	D2(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
	/**
	 * 计算当前点、一阶、二阶和三阶导数。
	 * @param U 参数U。
	 * @param V 参数V。
	 * @param P 输出点（Mx3dGePoint）。
	 * @param D1U 输出U方向的一阶导数（Mx3dGeVec）。
	 * @param D1V 输出V方向的一阶导数（Mx3dGeVec）。
	 * @param D2U 输出U方向的二阶导数（Mx3dGeVec）。
	 * @param D2V 输出V方向的二阶导数（Mx3dGeVec）。
	 * @param D2UV 输出U,V方向的二阶混合导数（Mx3dGeVec）。
	 * @param D3U 输出U方向的三阶导数（Mx3dGeVec）。
	 * @param D3V 输出V方向的三阶导数（Mx3dGeVec）。
	 * @param D3UUV 输出U方向的二阶混合三阶导数（Mx3dGeVec）。
	 * @param D3UVV 输出V方向的二阶混合三阶导数（Mx3dGeVec）。
	 */
	D3(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
	/**
	 * 计算指定参数(U, V)处的高阶导数。
	 * @param U 参数U。
	 * @param V 参数V。
	 * @param Nu 高阶导数的U方向阶数。
	 * @param Nv 高阶导数的V方向阶数。
	 * @returns 高阶导数（Mx3dGeVec）。
	 */
	DN(U: number, V: number, Nu: number, Nv: number): Mx3dGeVec;
	/**
	 * 应用变换T到环面。
	 * @param T 变换（Mx3dGeTrsf）。
	 */
	Transform(T: Mx3dGeTrsf): void;
	/**
	 * 创建一个新的对象，它是此环面的副本。
	 * @returns 环面的副本（Mx3dGeomObject）。
	 */
	Copy(): Mx3dGeomObject;
	/**
	 * 返回对象的动态类型字符串。
	 * @returns 动态类型字符串。
	 */
	DynamicType(): string;
	/**
	 * @internal
	 */
	DynCast(theObject: Mx3dGeomObject): this;
	/**
	 * 父类对象转 Mx3dGeomToroidalSurface 类对象
	 * @param theObject 父类对象
	 * @returns Mx3dGeomToroidalSurface 类对象
	 */
	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomToroidalSurface;
	/**
	 * 创建一个表示环面的平面（由面容表示）。
	 * @param TolDegen 退化容差。
	 * @returns 平面（Mx3dShapeFace）。
	 */
	Face(TolDegen: number): Mx3dShapeFace;
	/**
	 * 创建一个表示环面的平面（由线条表示）。
	 * @param W 线条（Mx3dShapeWire）。
	 * @param Inside 表示环面是否在内部。
	 * @returns 平面（Mx3dShapeFace）。
	 */
	Face(W: Mx3dShapeWire, Inside: boolean): Mx3dShapeFace;
	/**
	 * 创建一个表示环面的平面（指定U, V范围）。
	 * @param UMin 最小U参数。
	 * @param UMax 最大U参数。
	 * @param VMin 最小V参数。
	 * @param VMax 最大V参数。
	 * @param TolDegen 退化容差。
	 * @returns 平面（Mx3dShapeFace）。
	 */
	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): Mx3dShapeFace;
}
/**
 * 表示一定范围内曲面的基类。
 */
export declare class Mx3dGeomBoundedSurface extends Mx3dGeomSurface {
	/**
	 * @internal
	 */
	constructor(p?: object);
	/**
	 * 返回对象的动态类型字符串。
	 * @returns 动态类型字符串。
	 */
	DynamicType(): string;
}
/**
 * 表示一个B样条曲面，继承自Mx3dGeomBoundedSurface。
 * 提供多种操作和查询方法来处理B样条曲面。
 */
export declare class Mx3dGeomBSplineSurface extends Mx3dGeomBoundedSurface {
	/**
	 * 构造函数用于创建一个B样条曲面。
	 * @param Poles 控制点数组，二维数组表示U方向和V方向的控制点。
	 * @param dUKnots U方向的节点序列。
	 * @param dVKnots V方向的节点序列。
	 * @param iUMults U方向节点的多重性。
	 * @param iVMults V方向节点的多重性。
	 * @param UDegree U方向的曲线阶数。
	 * @param VDegree V方向的曲线阶数。
	 * @param UPeriodic U方向是否为周期性。
	 * @param VPeriodic V方向是否为周期性。
	 */
	constructor(Poles: Mx3dGePoint[][], dUKnots: number[], dVKnots: number[], iUMults: number[], iVMults: number[], UDegree: number, VDegree: number, UPeriodic: boolean, VPeriodic: boolean);
	/**
   * 构造函数用于创建一个带权的B样条曲面。
   * @param Poles 控制点数组，二维数组表示U方向和V方向的控制点。
   * @param dWeights 控制点权重的二维数组。
   * @param dUKnots U方向的节点序列。
   * @param dVKnots V方向的节点序列。
   * @param iUMults U方向节点的多重性。
   * @param iVMults V方向节点的多重性。
   * @param UDegree U方向的曲线阶数。
   * @param VDegree V方向的曲线阶数。
   * @param UPeriodic U方向是否为周期性。
   * @param VPeriodic V方向是否为周期性。
   */
	constructor(Poles: Mx3dGePoint[][], dWeights: number[][], dUKnots: number[], dVKnots: number[], iUMults: number[], iVMults: number[], UDegree: number, VDegree: number, UPeriodic: boolean, VPeriodic: boolean);
	/**
	 * 交换U和V方向的节点序列。
	 */
	ExchangeUV(): void;
	/**
	 * 设置U方向为周期性。
	 */
	SetUPeriodic(): void;
	/**
	 * 设置V方向为周期性。
	 */
	SetVPeriodic(): void;
	/**
	 * 对节点序列进行周期化规范化。
	 * @param UV 代表U和V方向的参数。
	 */
	PeriodicNormalization(UV: [
		dU: number,
		dV: number
	]): void;
	/**
	 * 设置U方向的原点索引。
	 * @param Index 原点索引。
	 */
	SetUOrigin(Index: number): void;
	/**
	 * 设置V方向的原点索引。
	 * @param Index 原点索引。
	 */
	SetVOrigin(Index: number): void;
	/**
	 * 设置U方向为非周期性。
	 */
	SetUNotPeriodic(): void;
	/**
	 * 设置V方向为非周期性。
	 */
	SetVNotPeriodic(): void;
	/**
	 * 反转U方向节点序列。
	 */
	UReverse(): void;
	/**
	 * 反转V方向节点序列。
	 */
	VReverse(): void;
	/**
	 * 计算U方向反向参数。
	 * @param U 参数值。
	 * @returns 返回反向后的参数值。
	 */
	UReversedParameter(U: number): number;
	/**
	 * 计算V方向反向参数。
	 * @param V 参数值。
	 * @returns 返回反向后的参数值。
	 */
	VReversedParameter(V: number): number;
	/**
	 * 提高曲面的U和V方向阶数。
	 * @param UDegree 提高后的U方向阶数。
	 * @param VDegree 提高后的V方向阶数。
	 */
	IncreaseDegree(UDegree: number, VDegree: number): void;
	/**
	 * 插入U方向节点。
	 * @param dKnots 节点值数组。
	 * @param iMults 节点多重性数组。
	 * @param dParametricTolerance 参数容差。
	 * @param Add 是否添加到曲面中。
	 */
	InsertUKnots(dKnots: number[], iMults: number[], dParametricTolerance: number, Add: boolean): void;
	/**
	 * 插入V方向节点。
	 * @param dKnots 节点值数组。
	 * @param iMults 节点多重性数组。
	 * @param dParametricTolerance 参数容差。
	 * @param Add 是否添加到曲面中。
	 */
	InsertVKnots(dKnots: number[], iMults: number[], dParametricTolerance: number, Add: boolean): void;
	/**
	 * 移除U方向节点。
	 * @param iIndex 节点索引。
	 * @param iM 多重性。
	 * @param dTolerance 容差值。
	 * @returns 返回是否成功移除。
	 */
	RemoveUKnot(iIndex: number, iM: number, dTolerance: number): boolean;
	/**
	 * 移除V方向节点。
	 * @param iIndex 节点索引。
	 * @param iM 多重性。
	 * @param dTolerance 容差值。
	 * @returns 返回是否成功移除。
	 */
	RemoveVKnot(iIndex: number, iM: number, dTolerance: number): boolean;
	/**
	 * 增加U方向节点的多重性。
	 * @param UIndex 节点索引。
	 * @param M 多重性增量。
	 */
	IncreaseUMultiplicity(UIndex: number, M: number): void;
	/**
	 * 增加U方向节点多重性在指定区间内。
	 * @param FromI1 起始索引。
	 * @param ToI2 结束索引。
	 * @param M 多重性增量。
	 */
	IncreaseUMultiplicity(FromI1: number, ToI2: number, M: number): void;
	/**
	 * 增加U方向节点多重性在指定区间内，按步骤增加。
	 * @param FromI1 起始索引。
	 * @param ToI2 结束索引。
	 * @param Step 增量步骤。
	 */
	IncrementUMultiplicity(FromI1: number, ToI2: number, Step: number): void;
	/**
	 * 增加V方向节点的多重性。
	 * @param VIndex 节点索引。
	 * @param M 多重性增量。
	 */
	IncreaseVMultiplicity(VIndex: number, M: number): void;
	/**
	 * 增加V方向节点多重性在指定区间内。
	 * @param FromI1 起始索引。
	 * @param ToI2 结束索引。
	 * @param M 多重性增量。
	 */
	IncreaseVMultiplicity(FromI1: number, ToI2: number, M: number): void;
	/**
	 * 增加V方向节点多重性在指定区间内，按步骤增加。
	 * @param FromI1 起始索引。
	 * @param ToI2 结束索引。
	 * @param Step 增量步骤。
	 */
	IncrementVMultiplicity(FromI1: number, ToI2: number, Step: number): void;
	/**
	 * 插入U方向节点。
	 * @param U 节点值。
	 * @param M 多重性。
	 * @param ParametricTolerance 参数容差。
	 * @param Add 是否添加到曲面中。
	 */
	InsertUKnot(U: number, M: number, ParametricTolerance: number, Add: boolean): void;
	/**
	 * 插入V方向节点。
	 * @param V 节点值。
	 * @param M 多重性。
	 * @param ParametricTolerance 参数容差。
	 * @param Add 是否添加到曲面中。
	 */
	InsertVKnot(V: number, M: number, ParametricTolerance: number, Add: boolean): void;
	/**
	 * 获取指定U和V范围内的曲面片段。
	 * @param U1 起始U参数。
	 * @param U2 结束U参数。
	 * @param V1 起始V参数。
	 * @param V2 结束V参数。
	 */
	Segment(U1: number, U2: number, V1: number, V2: number): void;
	/**
	 * 检查并获取指定U和V范围内的曲面片段。
	 * @param U1 起始U参数。
	 * @param U2 结束U参数。
	 * @param V1 起始V参数。
	 * @param V2 结束V参数。
	 */
	CheckAndSegment(U1: number, U2: number, V1: number, V2: number): void;
	/**
	 * 设置U方向的节点值。
	 * @param UIndex 节点索引。
	 * @param K 新节点值。
	 */
	SetUKnot(UIndex: number, K: number): void;
	/**
	 * 设置U方向的节点值，包含多重性。
	 * @param UIndex 节点索引。
	 * @param K 新节点值。
	 * @param M 多重性。
	 */
	SetUKnot(UIndex: number, K: number, M: number): void;
	/**
	 * 设置V方向的节点值。
	 * @param VIndex 节点索引。
	 * @param K 新节点值。
	 */
	SetVKnot(VIndex: number, K: number): void;
	/**
	 * 设置V方向的节点值，包含多重性。
	 * @param VIndex 节点索引。
	 * @param K 新节点值。
	 * @param M 多重性。
	 */
	SetVKnot(VIndex: number, K: number, M: number): void;
	/**
	 * 设置U方向节点序列。
	 * @param dUK 新的U方向节点序列。
	 */
	SetUKnots(dUK: number[]): void;
	/**
	 * 设置V方向节点序列。
	 * @param dVK 新的V方向节点序列。
	 */
	SetVKnots(dVK: number[]): void;
	/**
	 * 定位U方向的节点。
	 * @param U 参数值。
	 * @param ParametricTolerance 参数容差。
	 * @param I1I2 返回的起始和结束节点索引。
	 * @param WithKnotRepetition 是否包含节点重复。
	 */
	LocateU(U: number, ParametricTolerance: number, I1I2: [
		iI1: number,
		iI2: number
	], WithKnotRepetition: boolean): void;
	/**
	 * 定位V方向的节点。
	 * @param V 参数值。
	 * @param ParametricTolerance 参数容差。
	 * @param I1I2 返回的起始和结束节点索引。
	 * @param WithKnotRepetition 是否包含节点重复。
	 */
	LocateV(V: number, ParametricTolerance: number, I1I2: [
		iI1: number,
		iI2: number
	], WithKnotRepetition: boolean): void;
	/**
	 * 设置指定U和V索引的控制点。
	 * @param UIndex U方向索引。
	 * @param VIndex V方向索引。
	 * @param P 控制点。
	 */
	SetPole(UIndex: number, VIndex: number, P: Mx3dGePoint): void;
	/**
	 * 设置指定U和V索引的控制点及权重。
	 * @param UIndex U方向索引。
	 * @param VIndex V方向索引。
	 * @param P 控制点。
	 * @param Weight 权重值。
	 */
	SetPole(UIndex: number, VIndex: number, P: Mx3dGePoint, Weight: number): void;
	/**
	 * 设置指定V方向索引的控制点列。
	 * @param VIndex V方向索引。
	 * @param CPoles 控制点数组。
	 */
	SetPoleCol(VIndex: number, CPoles: Mx3dGePoint[]): void;
	/**
	 * 设置指定V方向索引的控制点列及权重。
	 * @param VIndex V方向索引。
	 * @param CPoles 控制点数组。
	 * @param dCPoleWeights 控制点权重数组。
	 */
	SetPoleCol(VIndex: number, CPoles: Mx3dGePoint[], dCPoleWeights: number[]): void;
	/**
	 * 设置指定U方向索引的控制点行。
	 * @param UIndex U方向索引。
	 * @param CPoles 控制点数组。
	 */
	SetPoleRow(UIndex: number, CPoles: Mx3dGePoint[]): void;
	/**
	 * 设置指定U方向索引的控制点行及权重。
	 * @param UIndex U方向索引。
	 * @param CPoles 控制点数组。
	 * @param dCPoleWeights 控制点权重数组。
	 */
	SetPoleRow(UIndex: number, CPoles: Mx3dGePoint[], dCPoleWeights: number[]): void;
	/**
	 * 设置指定U和V索引的权重值。
	 * @param UIndex U方向索引。
	 * @param VIndex V方向索引。
	 * @param Weight 权重值。
	 */
	SetWeight(UIndex: number, VIndex: number, Weight: number): void;
	/**
	 * 设置指定V方向索引的权重列。
	 * @param VIndex V方向索引。
	 * @param dCPoleWeights 权重数组。
	 */
	SetWeightCol(VIndex: number, dCPoleWeights: number[]): void;
	/**
	 * 设置指定U方向索引的权重行。
	 * @param UIndex U方向索引。
	 * @param dCPoleWeights 权重数组。
	 */
	SetWeightRow(UIndex: number, dCPoleWeights: number[]): void;
	/**
	 * 移动指定U和V索引的控制点。
	 * @param U U参数值。
	 * @param V V参数值。
	 * @param P 新的控制点。
	 * @param UIndex1 U方向起始索引。
	 * @param UIndex2 U方向结束索引。
	 * @param VIndex1 V方向起始索引。
	 * @param VIndex2 V方向结束索引。
	 * @param UFULVFVL 索引数组。
	 */
	MovePoint(U: number, V: number, P: Mx3dGePoint, UIndex1: number, UIndex2: number, VIndex1: number, VIndex2: number, UFULVFVL: [
		iUF: number,
		iUL: number,
		iVF: number,
		iVL: number
	]): void;
	/**
	 * 检查U方向是否为周期性。
	 * @returns 返回是否为周期性。
	 */
	IsUClosed(): boolean;
	/**
	 * 检查V方向是否为周期性。
	 * @returns 返回是否为周期性。
	 */
	IsVClosed(): boolean;
	/**
	 * 检查U方向是否为连续N阶。
	 * @param N 连续阶数。
	 * @returns 返回是否为连续N阶。
	 */
	IsCNu(N: number): boolean;
	/**
	 * 检查V方向是否为连续N阶。
	 * @param N 连续阶数。
	 * @returns 返回是否为连续N阶。
	 */
	IsCNv(N: number): boolean;
	/**
	 * 检查U方向是否为周期性。
	 * @returns 返回是否为周期性。
	 */
	IsUPeriodic(): boolean;
	/**
	 * 检查U方向是否为有理。
	 * @returns 返回是否为有理。
	 */
	IsURational(): boolean;
	/**
	 * 检查V方向是否为周期性。
	 * @returns 返回是否为周期性。
	 */
	IsVPeriodic(): boolean;
	/**
	 * 检查V方向是否为有理。
	 * @returns 返回是否为有理。
	 */
	IsVRational(): boolean;
	/**
	 * 获取曲面的边界。
	 * @param U1U2V1V2 边界参数。
	 */
	Bounds(U1U2V1V2: [
		dU1: number,
		dU2: number,
		dV1: number,
		dV2: number
	]): void;
	/**
	 * 获取曲面的连续性。
	 * @returns 返回曲面的连续性类型。
	 */
	Continuity(): MdGe.MxGAShapeEnum;
	/**
	 * 获取U方向的第一个节点索引。
	 * @returns 返回第一个节点索引。
	 */
	FirstUKnotIndex(): number;
	/**
	 * 获取V方向的第一个节点索引。
	 * @returns 返回第一个节点索引。
	 */
	FirstVKnotIndex(): number;
	/**
	 * 获取U方向的最后一个节点索引。
	 * @returns 返回最后一个节点索引。
	 */
	LastUKnotIndex(): number;
	/**
	 * 获取V方向的最后一个节点索引。
	 * @returns 返回最后一个节点索引。
	 */
	LastVKnotIndex(): number;
	/**
	 * 获取U方向节点数目。
	 * @returns 返回节点数目。
	 */
	NbUKnots(): number;
	/**
	 * 获取U方向控制点数目。
	 * @returns 返回控制点数目。
	 */
	NbUPoles(): number;
	/**
	 * 获取V方向节点数目。
	 * @returns 返回节点数目。
	 */
	NbVKnots(): number;
	/**
	 * 获取V方向控制点数目。
	 * @returns 返回控制点数目。
	 */
	NbVPoles(): number;
	/**
	 * 获取指定U和V索引的控制点。
	 * @param UIndex U方向索引。
	 * @param VIndex V方向索引。
	 * @returns 返回控制点。
	 */
	Pole(UIndex: number, VIndex: number): Mx3dGePoint;
	/**
	 * 获取所有控制点。
	 * @returns 返回控制点数组。
	 */
	Poles(): Mx3dGePoint[][];
	/**
	 * 获取U方向的阶数。
	 * @returns 返回U方向的阶数。
	 */
	UDegree(): number;
	/**
	 * 获取指定U方向的节点值。
	 * @param UIndex 节点索引。
	 * @returns 返回节点值。
	 */
	UKnot(UIndex: number): number;
	/**
	 * 获取U方向节点数组。
	 * @returns 返回节点数组。
	 */
	UKnots(): number[];
	/**
	 * 获取U方向节点序列。
	 * @returns 返回节点序列。
	 */
	UKnotSequence(): number[];
	/**
	 * 获取U方向节点多重性。
	 * @param UIndex 节点索引。
	 * @returns 返回节点多重性。
	 */
	UMultiplicity(UIndex: number): number;
	/**
	 * 获取U方向节点多重性数组。
	 * @returns 返回节点多重性数组。
	 */
	UMultiplicities(): number[];
	/**
	 * 获取V方向的阶数。
	 * @returns 返回V方向的阶数。
	 */
	VDegree(): number;
	/**
	 * 获取指定V方向的节点值。
	 * @param VIndex 节点索引。
	 * @returns 返回节点值。
	 */
	VKnot(VIndex: number): number;
	/**
	 * 获取V方向节点数组。
	 * @returns 返回节点数组。
	 */
	VKnots(): number[];
	/**
	 * 获取V方向节点序列。
	 * @returns 返回节点序列。
	 */
	VKnotSequence(): number[];
	/**
	 * 获取V方向节点多重性。
	 * @param VIndex 节点索引。
	 * @returns 返回节点多重性。
	 */
	VMultiplicity(VIndex: number): number;
	/**
	 * 获取V方向节点多重性数组。
	 * @returns 返回节点多重性数组。
	 */
	VMultiplicities(): number[];
	/**
	 * 获取指定U和V索引的权重值。
	 * @param UIndex U方向索引。
	 * @param VIndex V方向索引。
	 * @returns 返回权重值。
	 */
	Weight(UIndex: number, VIndex: number): number;
	/**
	 * 获取所有权重数组。
	 * @returns 返回权重数组。
	 */
	Weights(): number[][];
	/**
	 * 计算指定参数点的零阶导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param P 返回的点。
	 */
	D0(U: number, V: number, P: Mx3dGePoint): void;
	/**
	 * 计算指定参数点的一阶导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param P 返回的点。
	 * @param D1U U方向的一阶导数。
	 * @param D1V V方向的一阶导数。
	 */
	D1(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
	/**
	 * 计算指定参数点的二阶导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param P 返回的点。
	 * @param D1U U方向的一阶导数。
	 * @param D1V V方向的一阶导数。
	 * @param D2U U方向的二阶导数。
	 * @param D2V V方向的二阶导数。
	 * @param D2UV U和V方向的混合二阶导数。
	 */
	D2(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
	/**
	 * 计算指定参数点的三阶导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param P 返回的点。
	 * @param D1U U方向的一阶导数。
	 * @param D1V V方向的一阶导数。
	 * @param D2U U方向的二阶导数。
	 * @param D2V V方向的二阶导数。
	 * @param D2UV U和V方向的混合二阶导数。
	 * @param D3U U方向的三阶导数。
	 * @param D3V V方向的三阶导数。
	 * @param D3UUV U和U方向的混合三阶导数。
	 * @param D3UVV U和V方向的混合三阶导数。
	 */
	D3(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
	/**
	 * 计算指定参数点的N阶导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param Nu 导数阶数U。
	 * @param Nv 导数阶数V。
	 * @returns 返回导数向量。
	 */
	DN(U: number, V: number, Nu: number, Nv: number): Mx3dGeVec;
	/**
	 * 计算局部参数点的零阶导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param FromUK1 从U方向的起始节点。
	 * @param ToUK2 到U方向的结束节点。
	 * @param FromVK1 从V方向的起始节点。
	 * @param ToVK2 到V方向的结束节点。
	 * @param P 返回的点。
	 */
	LocalD0(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, P: Mx3dGePoint): void;
	/**
	 * 计算局部参数点的一阶导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param FromUK1 从U方向的起始节点。
	 * @param ToUK2 到U方向的结束节点。
	 * @param FromVK1 从V方向的起始节点。
	 * @param ToVK2 到V方向的结束节点。
	 * @param P 返回的点。
	 * @param D1U U方向的一阶导数。
	 * @param D1V V方向的一阶导数。
	 */
	LocalD1(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
	/**
	 * 计算局部参数点的二阶导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param FromUK1 从U方向的起始节点。
	 * @param ToUK2 到U方向的结束节点。
	 * @param FromVK1 从V方向的起始节点。
	 * @param ToVK2 到V方向的结束节点。
	 * @param P 返回的点。
	 * @param D1U U方向的一阶导数。
	 * @param D1V V方向的一阶导数。
	 * @param D2U U方向的二阶导数。
	 * @param D2V V方向的二阶导数。
	 * @param D2UV U和V方向的混合二阶导数。
	 */
	LocalD2(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
	/**
	 * 计算局部参数点的三阶导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param FromUK1 从U方向的起始节点。
	 * @param ToUK2 到U方向的结束节点。
	 * @param FromVK1 从V方向的起始节点。
	 * @param ToVK2 到V方向的结束节点。
	 * @param P 返回的点。
	 * @param D1U U方向的一阶导数。
	 * @param D1V V方向的一阶导数。
	 * @param D2U U方向的二阶导数。
	 * @param D2V V方向的二阶导数。
	 * @param D2UV U和V方向的混合二阶导数。
	 * @param D3U U方向的三阶导数。
	 * @param D3V V方向的三阶导数。
	 * @param D3UUV U和U方向的混合三阶导数。
	 * @param D3UVV U和V方向的混合三阶导数。
	 */
	LocalD3(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
	/**
	 * 计算局部参数点的N阶导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param FromUK1 从U方向的起始节点。
	 * @param ToUK2 到U方向的结束节点。
	 * @param FromVK1 从V方向的起始节点。
	 * @param ToVK2 到V方向的结束节点。
	 * @param Nu 导数阶数U。
	 * @param Nv 导数阶数V。
	 * @returns 返回导数向量。
	 */
	LocalDN(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, Nu: number, Nv: number): Mx3dGeVec;
	/**
	 * 在局部范围内计算曲面上的点。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param FromUK1 U方向起始索引。
	 * @param ToUK2 U方向结束索引。
	 * @param FromVK1 V方向起始索引。
	 * @param ToVK2 V方向结束索引。
	 * @returns 返回计算点的二维点。
	 */
	LocalValue(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number): Mx3dGePoint;
	/**
	 * 应用变换矩阵到曲面。
	 * @param T 变换矩阵。
	 */
	Transform(T: Mx3dGeTrsf): void;
	/**
	 * 复制当前曲面对象。
	 * @returns 返回一个新的曲面对象。
	 */
	Copy(): Mx3dGeomObject;
	/**
	 * 获取动态类型名称。
	 * @returns 返回类型名称的字符串。
	 */
	DynamicType(): string;
	/**
	 * @internal
	 */
	DynCast(theObject: Mx3dGeomObject): this;
	/**
	 * 父类对象转 Mx3dGeomBSplineSurface 类对象
	 * @param theObject 父类对象
	 * @returns Mx3dGeomBSplineSurface 类对象
	 */
	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomBSplineSurface;
	/**
	 * 根据容忍度生成面片。
	 * @param TolDegen 容忍度。
	 * @returns 返回生成的面片对象。
	 */
	Face(TolDegen: number): Mx3dShapeFace;
	/**
	 * 根据线条和是否在内部生成面片。
	 * @param W 线条对象。
	 * @param Inside 是否在内部。
	 * @returns 返回生成的面片对象。
	 */
	Face(W: Mx3dShapeWire, Inside: boolean): Mx3dShapeFace;
	/**
	 * 根据U、V范围和容忍度生成面片。
	 * @param UMin U方向最小值。
	 * @param UMax U方向最大值。
	 * @param VMin V方向最小值。
	 * @param VMax V方向最大值。
	 * @param TolDegen 容忍度。
	 * @returns 返回生成的面片对象。
	 */
	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): Mx3dShapeFace;
}
/**
 * 表示一个Bezier曲面，继承自Mx3dGeomBoundedSurface。
 * 提供多种操作和查询方法来处理Bezier曲面。
 */
export declare class Mx3dGeomBezierSurface extends Mx3dGeomBoundedSurface {
	/**
	 * 构造函数用于创建一个Bezier曲面。
	 * @param SurfacePoles 控制点数组，二维数组形式。
	 * @param PoleWeights 控制点权重数组（可选）。
	 */
	constructor(SurfacePoles: Mx3dGePoint[][], PoleWeights?: number[][]);
	/**
	 * 交换U和V方向的顺序。
	 */
	ExchangeUV(): void;
	/**
	 * 增加曲面的阶数。
	 * @param UDeg U方向的增加阶数。
	 * @param VDeg V方向的增加阶数。
	 */
	Increase(UDeg: number, VDeg: number): void;
	/**
	 * 在指定列后插入一个新的控制点列。
	 * @param VIndex 列的索引。
	 * @param CPoles 要插入的控制点数组。
	 * @param CPoleWeights 控制点权重数组（可选）。
	 */
	InsertPoleColAfter(VIndex: number, CPoles: Mx3dGePoint[], CPoleWeights?: number[]): void;
	/**
	 * 在指定列前插入一个新的控制点列。
	 * @param VIndex 列的索引。
	 * @param CPoles 要插入的控制点数组。
	 * @param CPoleWeights 控制点权重数组（可选）。
	 */
	InsertPoleColBefore(VIndex: number, CPoles: Mx3dGePoint[], CPoleWeights?: number[]): void;
	/**
	 * 在指定行后插入一个新的控制点行。
	 * @param UIndex 行的索引。
	 * @param CPoles 要插入的控制点数组。
	 * @param CPoleWeights 控制点权重数组（可选）。
	 */
	InsertPoleRowAfter(UIndex: number, CPoles: Mx3dGePoint[], CPoleWeights?: number[]): void;
	/**
	 * 在指定行前插入一个新的控制点行。
	 * @param UIndex 行的索引。
	 * @param CPoles 要插入的控制点数组。
	 * @param CPoleWeights 控制点权重数组（可选）。
	 */
	InsertPoleRowBefore(UIndex: number, CPoles: Mx3dGePoint[], CPoleWeights?: number[]): void;
	/**
	 * 移除指定列的控制点。
	 * @param VIndex 列的索引。
	 */
	RemovePoleCol(VIndex: number): void;
	/**
	 * 移除指定行的控制点。
	 * @param UIndex 行的索引。
	 */
	RemovePoleRow(UIndex: number): void;
	/**
	 * 定义曲面的一个部分，指定U和V的范围。
	 * @param U1 起始U值。
	 * @param U2 结束U值。
	 * @param V1 起始V值。
	 * @param V2 结束V值。
	 */
	Segment(U1: number, U2: number, V1: number, V2: number): void;
	/**
	 * 设置指定位置的控制点和权重。
	 * @param UIndex U方向的索引。
	 * @param VIndex V方向的索引。
	 * @param P 控制点位置。
	 * @param Weight 控制点权重（可选）。
	 */
	SetPole(UIndex: number, VIndex: number, P: Mx3dGePoint, Weight?: number): void;
	/**
	 * 设置指定列的控制点和权重。
	 * @param VIndex 列的索引。
	 * @param CPoles 控制点数组。
	 * @param CPoleWeights 控制点权重数组（可选）。
	 */
	SetPoleCol(VIndex: number, CPoles: Mx3dGePoint[], CPoleWeights?: number[]): void;
	/**
	 * 设置指定行的控制点和权重。
	 * @param UIndex 行的索引。
	 * @param CPoles 控制点数组。
	 * @param CPoleWeights 控制点权重数组（可选）。
	 */
	SetPoleRow(UIndex: number, CPoles: Mx3dGePoint[], CPoleWeights?: number[]): void;
	/**
	 * 设置指定控制点的权重。
	 * @param UIndex U方向的索引。
	 * @param VIndex V方向的索引。
	 * @param Weight 权重值。
	 */
	SetWeight(UIndex: number, VIndex: number, Weight: number): void;
	/**
	 * 设置指定列的控制点权重。
	 * @param VIndex 列的索引。
	 * @param CPoleWeights 控制点权重数组。
	 */
	SetWeightCol(VIndex: number, CPoleWeights: number[]): void;
	/**
	 * 设置指定行的控制点权重。
	 * @param UIndex 行的索引。
	 * @param CPoleWeights 控制点权重数组。
	 */
	SetWeightRow(UIndex: number, CPoleWeights: number[]): void;
	/**
	 * 反转U方向的参数。
	 */
	UReverse(): void;
	/**
	 * 计算反向U参数。
	 * @param U 参数U值。
	 * @returns 返回反向参数。
	 */
	UReversedParameter(U: number): number;
	/**
	 * 反转V方向的参数。
	 */
	VReverse(): void;
	/**
	 * 计算反向V参数。
	 * @param V 参数V值。
	 * @returns 返回反向参数。
	 */
	VReversedParameter(V: number): number;
	/**
	 * 获取曲面的边界范围。
	 * @param U1U2V1V2 范围数组。
	 */
	Bounds(U1U2V1V2: [
		dU1: number,
		dU2: number,
		dV1: number,
		dV2: number
	]): void;
	/**
	 * 获取曲面的连续性。
	 * @returns 返回连续性枚举值。
	 */
	Continuity(): MdGe.MxGAShapeEnum;
	/**
	 * 计算曲面在指定点的零阶导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param P 输出点。
	 */
	D0(U: number, V: number, P: Mx3dGePoint): void;
	/**
	 * 计算曲面在指定点的一级导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param P 输出点。
	 * @param D1U 输出U方向的一阶导数向量。
	 * @param D1V 输出V方向的一阶导数向量。
	 */
	D1(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
	/**
	 * 计算曲面在指定点的二阶导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param P 输出点。
	 * @param D1U 输出U方向的一阶导数向量。
	 * @param D1V 输出V方向的一阶导数向量。
	 * @param D2U 输出U方向的二阶导数向量。
	 * @param D2V 输出V方向的二阶导数向量。
	 * @param D2UV 输出UV方向的二阶导数向量。
	 */
	D2(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
	/**
	 * 计算曲面在指定点的三阶导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param P 输出点。
	 * @param D1U 输出U方向的一阶导数向量。
	 * @param D1V 输出V方向的一阶导数向量。
	 * @param D2U 输出U方向的二阶导数向量。
	 * @param D2V 输出V方向的二阶导数向量。
	 * @param D2UV 输出UV方向的二阶导数向量。
	 * @param D3U 输出U方向的三阶导数向量。
	 * @param D3V 输出V方向的三阶导数向量。
	 * @param D3UUV 输出UU方向的三阶导数向量。
	 * @param D3UVV 输出UV方向的三阶导数向量。
	 */
	D3(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
	/**
	 * 计算曲面在指定点的N阶导数。
	 * @param U 参数U值。
	 * @param V 参数V值。
	 * @param Nu U方向阶数。
	 * @param Nv V方向阶数。
	 * @returns 返回导数向量。
	 */
	DN(U: number, V: number, Nu: number, Nv: number): Mx3dGeVec;
	/**
	 * 获取U方向上的控制点数量。
	 * @returns 返回U方向控制点数量。
	 */
	NbUPoles(): number;
	/**
	 * 获取V方向上的控制点数量。
	 * @returns 返回V方向控制点数量。
	 */
	NbVPoles(): number;
	/**
	 * 获取指定控制点位置。
	 * @param UIndex U方向的索引。
	 * @param VIndex V方向的索引。
	 * @returns 返回控制点位置。
	 */
	Pole(UIndex: number, VIndex: number): Mx3dGePoint;
	/**
	 * 获取所有控制点数组。
	 * @returns 返回控制点二维数组。
	 */
	Poles(): Mx3dGePoint[][];
	/**
	 * 获取U方向的阶数。
	 * @returns 返回U方向的阶数。
	 */
	UDegree(): number;
	/**
	 * 获取指定控制点的权重。
	 * @param UIndex U方向的索引。
	 * @param VIndex V方向的索引。
	 * @returns 返回权重值。
	 */
	Weight(UIndex: number, VIndex: number): number;
	/**
	 * 获取所有控制点权重数组。
	 * @returns 返回控制点权重二维数组。
	 */
	Weights(): number[][];
	/**
	 * 判断U方向是否闭合。
	 * @returns 返回是否闭合的布尔值。
	 */
	IsUClosed(): boolean;
	/**
	 * 判断V方向是否闭合。
	 * @returns 返回是否闭合的布尔值。
	 */
	IsVClosed(): boolean;
	/**
	 * 判断U方向上的连续阶数。
	 * @param N 阶数。
	 * @returns 返回是否连续的布尔值。
	 */
	IsCNu(N: number): boolean;
	/**
	 * 判断V方向上的连续阶数。
	 * @param N 阶数。
	 * @returns 返回是否连续的布尔值。
	 */
	IsCNv(N: number): boolean;
	/**
	 * 判断U方向是否周期性。
	 * @returns 返回是否周期性的布尔值。
	 */
	IsUPeriodic(): boolean;
	/**
	 * 判断V方向是否周期性。
	 * @returns 返回是否周期性的布尔值。
	 */
	IsVPeriodic(): boolean;
	/**
	 * 判断U方向是否为有理曲面。
	 * @returns 返回是否有理曲面的布尔值。
	 */
	IsURational(): boolean;
	/**
	 * 判断V方向是否为有理曲面。
	 * @returns 返回是否有理曲面的布尔值。
	 */
	IsVRational(): boolean;
	/**
	 * 应用变换矩阵到曲面。
	 * @param T 变换矩阵。
	 */
	Transform(T: Mx3dGeTrsf): void;
	/**
	 * 复制当前曲面对象。
	 * @returns 返回一个新的曲面对象。
	 */
	Copy(): Mx3dGeomObject;
	DynCast(theObject: Mx3dGeomObject): this;
	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomBezierSurface;
	/**
	 * 根据容忍度生成面片。
	 * @param TolDegen 容忍度。
	 * @returns 返回生成的面片对象。
	 */
	Face(TolDegen: number): Mx3dShapeFace;
	/**
	 * 根据线条和是否在内部生成面片。
	 * @param W 线条对象。
	 * @param Inside 是否在内部。
	 * @returns 返回生成的面片对象。
	 */
	Face(W: Mx3dShapeWire, Inside: boolean): Mx3dShapeFace;
	/**
	 * 根据U、V范围和容忍度生成面片。
	 * @param UMin U方向最小值。
	 * @param UMax U方向最大值。
	 * @param VMin V方向最小值。
	 * @param VMax V方向最大值。
	 * @param TolDegen 容忍度。
	 * @returns 返回生成的面片对象。
	 */
	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): Mx3dShapeFace;
}
/**
 * 表示三维图形中的材料属性，封装了材料的各种属性和设置方法。
 */
export declare class Mx3dGeMaterial extends Mx3dBaseObject {
	/**
	 * 创建一个默认材料对象。
	 */
	constructor();
	/**
	 * 创建一个具有指定名称的材料对象。
	 * @param theName 材料名称，参见 MdGe.MxNameOfMaterial。
	 */
	constructor(theName: MdGe.MxNameOfMaterial);
	/**
	 * 返回材料的名称。
	 * @returns 材料名称。
	 */
	Name(): MdGe.MxNameOfMaterial;
	/**
	 * 返回请求的材料名称。
	 * @returns 请求的材料名称。
	 */
	RequestedName(): MdGe.MxNameOfMaterial;
	/**
	 * 返回材料的字符串表示形式。
	 * @returns 材料的字符串名称。
	 */
	StringName(): string;
	/**
	 * 返回材料的名称（字符串形式）。
	 * @returns 材料的字符串名称。
	 */
	MaterialName(): string;
	/**
	 * 设置材料的名称。
	 * @param theName 新的材料名称。
	 */
	SetMaterialName(theName: string): void;
	/**
	 * 重置材料属性为默认值。
	 */
	Reset(): void;
	/**
	 * 返回材料的颜色。
	 * @returns 材料的颜色。
	 */
	Color(): Mx3dGeColor;
	/**
	 * 设置材料的颜色。
	 * @param theColor 新的颜色。
	 */
	SetColor(theColor: Mx3dGeColor): void;
	/**
	 * 返回透明度系数（0.0为完全透明，1.0为完全不透明）。
	 * @returns 透明度系数。
	 */
	Transparency(): number;
	/**
	 * 返回反透明度系数（0.0为完全透明，1.0为完全不透明）。
	 * @returns 反透明度系数。
	 */
	Alpha(): number;
	/**
	 * 设置透明度系数。
	 * @param theValue 透明度系数（0.0至1.0）。
	 */
	SetTransparency(theValue: number): void;
	/**
	 * 设置反透明度系数。
	 * @param theValue 反透明度系数（0.0至1.0）。
	 */
	SetAlpha(theValue: number): void;
	/**
	 * 返回环境光颜色。
	 * @returns 环境光颜色。
	 */
	AmbientColor(): Mx3dGeColor;
	/**
	 * 设置环境光颜色。
	 * @param theColor 新的环境光颜色。
	 */
	SetAmbientColor(theColor: Mx3dGeColor): void;
	/**
	 * 返回漫反射颜色。
	 * @returns 漫反射颜色。
	 */
	DiffuseColor(): Mx3dGeColor;
	/**
	 * 设置漫反射颜色。
	 * @param theColor 新的漫反射颜色。
	 */
	SetDiffuseColor(theColor: Mx3dGeColor): void;
	/**
	 * 返回镜面反射颜色。
	 * @returns 镜面反射颜色。
	 */
	SpecularColor(): Mx3dGeColor;
	/**
	 * 设置镜面反射颜色。
	 * @param theColor 新的镜面反射颜色。
	 */
	SetSpecularColor(theColor: Mx3dGeColor): void;
	/**
	 * 返回发光颜色。
	 * @returns 发光颜色。
	 */
	EmissiveColor(): Mx3dGeColor;
	/**
	 * 设置发光颜色。
	 * @param theColor 新的发光颜色。
	 */
	SetEmissiveColor(theColor: Mx3dGeColor): void;
	/**
	 * 返回材料的光泽度。
	 * @returns 光泽度值。
	 */
	Shininess(): number;
	/**
	 * 设置材料的光泽度。
	 * @param theValue 新的光泽度值（通常在0到1之间）。
	 */
	SetShininess(theValue: number): void;
	/**
	 * 增加光泽度。
	 * @param theDelta 增加的百分比。
	 */
	IncreaseShine(theDelta: number): void;
	/**
	 * 返回折射率。
	 * @returns 折射率值。
	 */
	RefractionIndex(): number;
	/**
	 * 设置折射率。
	 * @param theValue 新的折射率值，必须大于等于1.0。
	 */
	SetRefractionIndex(theValue: number): void;
	/**
	 * 检查指定类型的反射模式是否启用。
	 * @param theType 反射类型，参见 MdGe.MxTypeOfReflection。
	 * @returns 如果指定类型的反射模式启用，则返回 true，否则返回 false。
	 */
	ReflectionMode(theType: MdGe.MxTypeOfReflection): boolean;
	/**
	 * 返回材料类型。
	 * @returns 材料类型，参见 MdGe.MxTypeOfMaterial。
	 */
	MaterialType(): MdGe.MxTypeOfMaterial;
	/**
	 * 设置材料类型。
	 * @param theType 新的材料类型，参见 MdGe.MxTypeOfMaterial。
	 */
	SetMaterialType(theType: MdGe.MxTypeOfMaterial): void;
	/**
	 * 检查当前材料是否与另一个材料不同。
	 * @param theOther 另一个材料对象。
	 * @returns 如果当前材料与另一个材料不同，则返回 true，否则返回 false。
	 */
	IsDifferent(theOther: Mx3dGeMaterial): boolean;
	/**
	 * 检查当前材料是否与另一个材料相等。
	 * @param theOther 另一个材料对象。
	 * @returns 如果当前材料与另一个材料相等，则返回 true，否则返回 false。
	 */
	IsEqual(theOther: Mx3dGeMaterial): boolean;
}
/**
 * 表示线样式。
 */
export declare class Mx3dAspectLine extends Mx3dAspectObject {
	/**
	 * 构造函数，创建一个指定颜色，线型，线宽的线样式对象。
	 * @param theColor 颜色。
	 * @param theType 线型。
	 * @param theWidth 线宽。
	 */
	constructor(theColor: Mx3dGeColor, theType: MdGe.MxTypeOfLine, theWidth: number);
	/**
	 * 设置线样式对象的颜色。
	 * @param theColor 要设置的颜色对象（Mx3dGeColor）。
	 */
	SetColor(theColor: Mx3dGeColor): void;
	/**
	 * 设置线样式对象的线型。
	 * @param theType 线型。
	 */
	SetTypeOfLine(theType: MdGe.MxTypeOfLine): void;
	/**
	 * 设置线样式对象的线宽。
	 * @param theWidth 线宽。
	 */
	SetWidth(theWidth: number): void;
}
/**
 * 表示用于定义文本显示属性的类。
 * 此类封装了设置文本颜色、字体、高度、角度、对齐方式和方向的方法。
 */
export declare class Mx3dAspectText extends Mx3dAspectObject {
	/**
	 * 创建一个默认的文字样式对象。
	 */
	constructor();
	/**
	 * 设置文本显示的颜色。
	 * @param theColor 要设置的颜色对象（Mx3dGeColor）。
	 */
	SetColor(theColor: Mx3dGeColor): void;
	/**
	 * 设置文本显示的字体。
	 * @param theFont 要设置的字体名称。
	 */
	SetFont(theFont: string): void;
	/**
	 * 设置文本显示的高度。
	 * @param theHeight 要设置的文本高度。
	 */
	SetHeight(theHeight: number): void;
	/**
	 * 设置文本显示的角度。
	 * @param theAngle 要设置的文本角度。
	 */
	SetAngle(theAngle: number): void;
	/**
	 * 获取文本显示的高度。
	 * @returns 文本的高度。
	 */
	Height(): number;
	/**
	 * 获取文本显示的角度。
	 * @returns 文本的角度。
	 */
	Angle(): number;
	/**
	 * 设置文本的水平对齐方式。
	 * @param theJustification 要设置的水平对齐方式（MdGe.MxHorizontalTextAlignment）。
	 */
	SetHorizontalJustification(theJustification: MdGe.MxHorizontalTextAlignment): void;
	/**
	 * 设置文本的垂直对齐方式。
	 * @param theJustification 要设置的垂直对齐方式（MdGe.MxVerticalTextAlignment）。
	 */
	SetVerticalJustification(theJustification: MdGe.MxVerticalTextAlignment): void;
	/**
	 * 设置文本的显示方向。
	 * @param theOrientation 要设置的文本方向（MdGe.MxTextPath）。
	 */
	SetOrientation(theOrientation: MdGe.MxTextPath): void;
	/**
	 * 获取文本的水平对齐方式。
	 * @returns 水平对齐方式（MdGe.MxHorizontalTextAlignment）。
	 */
	HorizontalJustification(): MdGe.MxHorizontalTextAlignment;
	/**
	 * 获取文本的垂直对齐方式。
	 * @returns 垂直对齐方式（MdGe.MxVerticalTextAlignment）。
	 */
	VerticalJustification(): MdGe.MxVerticalTextAlignment;
	/**
	 * 获取文本的显示方向。
	 * @returns 文本方向（MdGe.MxTextPath）。
	 */
	Orientation(): MdGe.MxTextPath;
}
/**
 * Mx3dAspectArrow 类用于定义箭头的显示属性。
 * 该类提供了设置箭头角度、长度、颜色和缩放特性的方法。
 */
export declare class Mx3dAspectArrow extends Mx3dAspectObject {
	/**
	 * 构造一个箭头显示属性对象。
	 */
	constructor();
	/**
	 * 构造一个具有指定角度和长度的箭头显示属性对象。
	 * @param anAngle 箭头的角度。
	 * @param aLength 箭头的长度。
	 */
	constructor(anAngle: number, aLength: number);
	/**
	 * 设置箭头的角度。
	 * @param anAngle 要设置的箭头角度。
	 */
	SetAngle(anAngle: number): void;
	/**
	 * 获取箭头的当前角度。
	 * @returns 当前箭头的角度。
	 */
	Angle(): number;
	/**
	 * 设置箭头的长度。
	 * @param theLength 要设置的箭头长度。
	 */
	SetLength(theLength: number): void;
	/**
	 * 获取箭头的当前长度。
	 * @returns 当前箭头的长度。
	 */
	Length(): number;
	/**
	 * 设置箭头是否可缩放。
	 * @param theIsZoomable 如果为 true，箭头是可缩放的；否则为 false。
	 */
	SetZoomable(theIsZoomable: boolean): void;
	/**
	 * 检查箭头是否可缩放。
	 * @returns 如果箭头是可缩放的，则返回 true；否则返回 false。
	 */
	IsZoomable(): boolean;
	/**
	 * 设置箭头的颜色。
	 * @param theColor 要设置的箭头颜色。
	 */
	SetColor(theColor: Mx3dGeColor): void;
}
/**
 * Mx3dAspectDim 类定义了在 3D 表示中显示尺寸的属性。
 * 这包括尺寸测量相关的线条、文本和箭头的设置。
 */
export declare class Mx3dAspectDim extends Mx3dAspectObject {
	/**
	 * 构造函数，创建一个默认的显示尺寸的属性对象。
	 */
	constructor();
	/**
	 * 设置尺寸线条的显示属性。
	 * @param theAspect - 线条显示属性。
	 */
	SetLineAspect(theAspect: Mx3dAspectLine): void;
	/**
	 * 设置尺寸文本的显示属性。
	 * @param theAspect - 文本显示属性。
	 */
	SetTextAspect(theAspect: Mx3dAspectText): void;
	/**
	 * 检查尺寸文本是否为 3D。
	 * @returns 如果文本为 3D，返回 true，否则返回 false。
	 */
	IsText3d(): boolean;
	/**
	 * 设置尺寸文本为 3D 或 2D。
	 * @param isText3d - 如果为 true，将文本设置为 3D；否则为 2D。
	 */
	MakeText3d(isText3d: boolean): void;
	/**
	 * 检查 3D 尺寸文本是否有阴影。
	 * @returns 如果文本有阴影，返回 true，否则返回 false。
	 */
	IsTextShaded(): boolean;
	/**
	 * 开启或关闭 3D 尺寸文本的阴影。
	 * @param theIsTextShaded - 如果为 true，开启阴影；否则关闭阴影。
	 */
	MakeTextShaded(theIsTextShaded: boolean): void;
	/**
	 * 检查箭头是否为 3D。
	 * @returns 如果箭头为 3D，返回 true，否则返回 false。
	 */
	IsArrows3d(): boolean;
	/**
	 * 设置箭头为 3D 或 2D。
	 * @param theIsArrows3d - 如果为 true，将箭头设置为 3D；否则为 2D。
	 */
	MakeArrows3d(theIsArrows3d: boolean): void;
	/**
	 * 检查是否显示单位。
	 * @returns 如果显示单位，返回 true，否则返回 false。
	 */
	IsUnitsDisplayed(): boolean;
	/**
	 * 设置是否显示单位。
	 * @param theIsDisplayed - 如果为 true，显示单位；否则不显示。
	 */
	MakeUnitsDisplayed(theIsDisplayed: boolean): void;
	/**
	 * 设置箭头的方向（外部或内部）。
	 * @param theArrowOrient - 箭头方向。
	 */
	SetArrowOrientation(theArrowOrient: MdGe.MxDimensionArrowOrientation): void;
	/**
	 * 获取箭头的方向。
	 * @returns 箭头方向。
	 */
	ArrowOrientation(): MdGe.MxDimensionArrowOrientation;
	/**
	 * 设置文本的垂直位置。
	 * @param thePosition - 文本的垂直位置。
	 */
	SetTextVerticalPosition(thePosition: MdGe.MxDimensionTextVerticalPosition): void;
	/**
	 * 获取文本的垂直位置。
	 * @returns 文本的垂直位置。
	 */
	TextVerticalPosition(): MdGe.MxDimensionTextVerticalPosition;
	/**
	 * 设置文本的水平位置。
	 * @param thePosition - 文本的水平位置。
	 */
	SetTextHorizontalPosition(thePosition: MdGe.MxDimensionTextHorizontalPosition): void;
	/**
	 * 获取文本的水平位置。
	 * @returns 文本的水平位置。
	 */
	TextHorizontalPosition(): MdGe.MxDimensionTextHorizontalPosition;
	/**
	 * 设置尺寸箭头的显示属性。
	 * @param theAspect - 箭头显示属性。
	 */
	SetArrowAspect(theAspect: Mx3dAspectArrow): void;
	/**
	 * 为尺寸的所有部分（线条、箭头和文本）设置相同的颜色。
	 * @param theColor - 颜色值。
	 */
	SetCommonColor(theColor: Mx3dGeColor): void;
	/**
	 * 设置延伸尺寸的大小。
	 * @param theSize - 尺寸值。
	 */
	SetExtensionSize(theSize: number): void;
	/**
	 * 获取延伸尺寸的大小。
	 * @returns 尺寸值。
	 */
	ExtensionSize(): number;
	/**
	 * 设置箭头尾部的大小（无文本的延伸）。
	 * @param theSize - 尺寸值。
	 */
	SetArrowTailSize(theSize: number): void;
	/**
	 * 获取箭头尾部的大小。
	 * @returns 尺寸值。
	 */
	ArrowTailSize(): number;
	/**
	 * 设置用于格式化尺寸值标签的语法格式。
	 * @param theFormat - 格式字符串。
	 */
	SetValueStringFormat(theFormat: string): void;
	/**
	 * 获取尺寸值标签的格式。
	 * @returns 格式字符串。
	 */
	ValueStringFormat(): string;
}
/**
 * @class Mx3dDimDiameter
 * @extends Mx3dDimObject
 *
 * 表示3D环境中的直径尺寸。该类封装了在圆形或可以通过其直径进行测量的形状上创建、管理和显示直径尺寸的逻辑。
 * 它与几何定义和表示方面集成，以便在3D空间中实现精确的尺寸标注。
 */
export declare class Mx3dDimDiameter extends Mx3dDimObject {
	/**
	 * 构造直径尺寸，针对指定的圆形。
	 * @param theCircle 要测量的圆形。
	 */
	constructor(theCircle: Mx3dGeCircle);
	/**
	 * 构造直径尺寸，针对指定的圆形，并按照给定的平面进行定向。
	 * @param theCircle 要测量的圆形。
	 * @param thePlane 定义尺寸首选定向的平面。
	 */
	constructor(theCircle: Mx3dGeCircle, thePlane: Mx3dGePlane);
	/**
	 * @returns 返回该尺寸正在测量的圆形。
	 */
	Circle(): Mx3dGeCircle;
	/**
	 * @returns 返回圆上的锚点，用于此直径尺寸。
	 */
	AnchorPoint(): Mx3dGePoint;
	/**
	 * @returns 返回正在测量的形状对象。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 设置要测量的几何体。
	 * @param theCircle 要测量的圆形。
	 */
	SetMeasuredGeometry(theCircle: Mx3dGeCircle): void;
	/**
	 * 设置文本位置。
	 * @param theTextPos 文本位置点。
	 */
	SetTextPosition(theTextPos: Mx3dGePoint): void;
	/**
	 * 获取文本位置。
	 * @returns 返回文本位置点。
	 */
	GetTextPosition(): Mx3dGePoint;
	/**
	 * 设置显示单位。
	 * @param theUnits 单位字符串。
	 */
	SetDisplayUnits(theUnits: string): void;
	/**
	 * 设置模型单位。
	 * @param theUnits 单位字符串。
	 */
	SetModelUnits(theUnits: string): void;
	/**
	 * 获取当前的尺寸值。
	 * @returns 返回当前的尺寸值。
	 */
	GetValue(): number;
	/**
	 * 设置计算的尺寸值。
	 */
	SetComputedValue(): void;
	/**
	 * 设置自定义尺寸值。
	 * @param theValue 自定义尺寸值。
	 */
	SetCustomValue(theValue: number): void;
	/**
	 * 获取当前的平面。
	 * @returns 返回当前的平面。
	 */
	GetPlane(): Mx3dGePlane;
	/**
	 * 获取几何类型。
	 * @returns 返回几何类型。
	 */
	GetGeometryType(): number;
	/**
	 * 设置自定义平面。
	 * @param thePlane 自定义平面。
	 */
	SetCustomPlane(thePlane: Mx3dGePlane): void;
	/**
	 * 取消自定义平面。
	 */
	UnsetCustomPlane(): void;
	/**
	 * 判断文本位置是否为自定义。
	 * @returns 返回布尔值，表示文本位置是否为自定义。
	 */
	IsTextPositionCustom(): boolean;
	/**
	 * 设置尺寸的显示外观。
	 * @param theDimensionAspect 尺寸外观。
	 */
	SetDimensionAspect(theDimensionAspect: Mx3dAspectDim): void;
	/**
	 * 获取尺寸类型。
	 * @returns 返回尺寸类型。
	 */
	KindOfDimension(): MdGe.MxKindOfDimension;
	/**
	 * 取消固定文本位置。
	 */
	UnsetFixedTextPosition(): void;
	/**
	 * 获取二维文本的选择容差。
	 * @returns 返回二维文本的选择容差。
	 */
	SelToleranceForText2d(): number;
	/**
	 * 设置二维文本的选择容差。
	 * @param theTol 容差值。
	 */
	SetSelToleranceForText2d(theTol: number): void;
	/**
	 * 获取尺寸线位置距离。
	 * @returns 返回尺寸线位置距离。
	 */
	GetFlyout(): number;
	/**
	 * 设置尺寸线位置距离。
	 * @param theFlyout 尺寸线位置距离值。
	 */
	SetFlyout(theFlyout: number): void;
	/**
	 * 判断当前尺寸是否有效。
	 * @returns 返回布尔值，表示尺寸是否有效。
	 */
	IsValid(): boolean;
}
/**
 * @class Mx3dDimRadius
 * @extends Mx3dDimObject
 *
 * 表示3D环境中的半径尺寸。该类封装了在圆形或可以通过其半径进行测量的形状上创建、管理和显示半径尺寸的逻辑。
 * 它与几何定义和表示方面集成，以便在3D空间中实现精确的尺寸标注。
 */
export declare class Mx3dDimRadius extends Mx3dDimObject {
	/**
	 * 构造半径尺寸，针对指定的圆形。
	 * @param theCircle 要测量的圆形。
	 */
	constructor(theCircle: Mx3dGeCircle);
	/**
	 * 构造半径尺寸，针对指定的圆形，并按照给定的锚点进行定向。
	 * @param theCircle 要测量的圆形。
	 * @param theAnchorPoint 用于定向的锚点，必须位于圆上。
	 */
	constructor(theCircle: Mx3dGeCircle, theAnchorPoint: Mx3dGePoint);
	/**
	 * 获取正在测量的圆形。
	 * @returns 返回该尺寸正在测量的圆形。
	 */
	Circle(): Mx3dGeCircle;
	/**
	 * 获取圆上的锚点，用于此半径尺寸。
	 * @returns 返回圆上的锚点。
	 */
	AnchorPoint(): Mx3dGePoint;
	/**
	 * 获取测量的形状。
	 * @returns 返回测量的形状。
	 */
	Shape(): Mx3dShapeObject;
	/**
	 * 设置测量的圆形。
	 * @param theCircle 要测量的圆形。
	 */
	SetMeasuredGeometry(theCircle: Mx3dGeCircle): void;
	/**
	 * 设置测量的圆形，并指定锚点。
	 * @param theCircle 要测量的圆形。
	 * @param theAnchorPoint 用于定向的锚点，必须位于圆上。
	 * @param theHasAnchor 是否使用锚点。
	 */
	SetMeasuredGeometry(theCircle: Mx3dGeCircle, theAnchorPoint: Mx3dGePoint, theHasAnchor: boolean): void;
	/**
	 * 设置文本位置。
	 * @param theTextPos 文本的位置。
	 */
	SetTextPosition(theTextPos: Mx3dGePoint): void;
	/**
	 * 获取文本位置。
	 * @returns 返回文本位置。
	 */
	GetTextPosition(): Mx3dGePoint;
	/**
	 * 获取尺寸值。
	 * @returns 返回尺寸值。
	 */
	GetValue(): number;
	/**
	 * 设置计算的尺寸值。
	 */
	SetComputedValue(): void;
	/**
	 * 设置自定义的尺寸值。
	 * @param theValue 自定义的尺寸值。
	 */
	SetCustomValue(theValue: number): void;
	/**
	 * 获取尺寸平面。
	 * @returns 返回尺寸平面。
	 */
	GetPlane(): Mx3dGePlane;
	/**
	 * 获取几何类型。
	 * @returns 返回几何类型。
	 */
	GetGeometryType(): number;
	/**
	 * 设置自定义平面。
	 * @param thePlane 自定义平面。
	 */
	SetCustomPlane(thePlane: Mx3dGePlane): void;
	/**
	 * 取消自定义平面。
	 */
	UnsetCustomPlane(): void;
	/**
	 * 检查文本位置是否为自定义。
	 * @returns 返回是否为自定义文本位置。
	 */
	IsTextPositionCustom(): boolean;
	/**
	 * 设置尺寸的外观。
	 * @param theDimensionAspect 尺寸的外观。
	 */
	SetDimensionAspect(theDimensionAspect: Mx3dAspectDim): void;
	/**
	 * 获取尺寸类型。
	 * @returns 返回尺寸类型。
	 */
	KindOfDimension(): MdGe.MxKindOfDimension;
	/**
	 * 取消固定文本位置。
	 */
	UnsetFixedTextPosition(): void;
	/**
	 * 获取2D文本选择公差。
	 * @returns 返回2D文本选择公差。
	 */
	SelToleranceForText2d(): number;
	/**
	 * 设置2D文本选择公差。
	 * @param theTol 2D文本选择公差。
	 */
	SetSelToleranceForText2d(theTol: number): void;
	/**
	 * 获取尺寸线位置距离。
	 * @returns 返回尺寸线位置距离。
	 */
	GetFlyout(): number;
	/**
	 * 设置尺寸线位置距离。
	 * @param theFlyout 尺寸线位置距离。
	 */
	SetFlyout(theFlyout: number): void;
	/**
	 * 检查该半径尺寸是否有效。
	 * @returns 返回是否有效。
	 */
	IsValid(): boolean;
}
/**
 * @class Mx3dDimAngle
 * @extends Mx3dDimObject
 *
 * 表示3D环境中的角度尺寸。该类封装了在不同几何体（如线段、点和面）之间创建、管理和显示角度尺寸的逻辑。
 * 它集成了几何定义和显示参数，以便在3D空间中实现精确的角度标注。
 */
export declare class Mx3dDimAngle extends Mx3dDimObject {
	/**
	 * 构造角度尺寸，针对指定的两条交叉边。
	 * @param theFirstEdge 第一条边。
	 * @param theSecondEdge 第二条边。
	 */
	constructor(theFirstEdge: Mx3dShapeEdge, theSecondEdge: Mx3dShapeEdge);
	/**
	 * 构造角度尺寸，针对指定的三点。
	 * @param theFirstPoint 第一点。
	 * @param theSecondPoint 第二点（角度中心点）。
	 * @param theThirdPoint 第三点。
	 */
	constructor(theFirstPoint: Mx3dGePoint, theSecondPoint: Mx3dGePoint, theThirdPoint: Mx3dGePoint);
	/**
	 * @returns 返回角度的第一点。
	 */
	FirstPoint(): Mx3dGePoint;
	/**
	 * @returns 返回角度的第二点。
	 */
	SecondPoint(): Mx3dGePoint;
	/**
	 * @returns 返回角度的中心点。
	 */
	CenterPoint(): Mx3dGePoint;
	/**
	 * @returns 返回第一个形状对象。
	 */
	FirstShape(): Mx3dShapeObject;
	/**
	 * @returns 返回第二个形状对象。
	 */
	SecondShape(): Mx3dShapeObject;
	/**
	 * @returns 返回第三个形状对象。
	 */
	ThirdShape(): Mx3dShapeObject;
	/**
	 * 设置测量几何体为圆锥面。
	 * @param theCone 圆锥面。
	 */
	SetMeasuredGeometry(theCone: Mx3dShapeFace): void;
	/**
	 * 设置测量几何体为两条交叉边。
	 * @param theFirstEdge 第一条边。
	 * @param theSecondEdge 第二条边。
	 */
	SetMeasuredGeometry(theFirstEdge: Mx3dShapeEdge, theSecondEdge: Mx3dShapeEdge): void;
	/**
	 * 设置测量几何体为三点。
	 * @param theFirstPoint 第一点。
	 * @param theSecondPoint 第二点（角度中心点）。
	 * @param theThridPoint 第三点。
	 */
	SetMeasuredGeometry(theFirstPoint: Mx3dGePoint, theSecondPoint: Mx3dGePoint, theThridPoint: Mx3dGePoint): void;
	/**
	 * 设置文本位置。
	 * @param theTextPos 文本位置点。
	 */
	SetTextPosition(theTextPos: Mx3dGePoint): void;
	/**
	 * @returns 返回文本位置点。
	 */
	GetTextPosition(): Mx3dGePoint;
	/**
	 * @returns 返回显示单位字符串。
	 */
	GetDisplayUnits(): string;
	/**
	 * @returns 返回模型单位字符串。
	 */
	GetModelUnits(): string;
	/**
	 * 设置显示单位字符串。
	 * @param theUnits 显示单位。
	 */
	SetDisplayUnits(theUnits: string): void;
	/**
	 * 设置模型单位字符串。
	 * @param theUnits 模型单位。
	 */
	SetModelUnits(theUnits: string): void;
	/**
	 * 设置角度类型。
	 * @param theType 角度类型。
	 */
	SetType(theType: MdGe.MxTypeOfAngle): void;
	/**
	 * @returns 返回当前角度类型。
	 */
	GetType(): MdGe.MxTypeOfAngle;
	/**
	 * 设置箭头可见性类型。
	 * @param theType 箭头可见性类型。
	 */
	SetArrowsVisibility(theType: MdGe.MxTypeOfAngleArrowVisibility): void;
	/**
	 * @returns 返回箭头可见性类型。
	 */
	GetArrowsVisibility(): MdGe.MxTypeOfAngleArrowVisibility;
	/**
	 * @returns 返回角度值。
	 */
	GetValue(): number;
	/**
	 * 设置计算值。
	 */
	SetComputedValue(): void;
	/**
	 * 设置自定义值。
	 * @param theValue 自定义角度值。
	 */
	SetCustomValue(theValue: number): void;
	/**
	 * @returns 返回角度的平面。
	 */
	GetPlane(): Mx3dGePlane;
	/**
	 * @returns 返回几何类型。
	 */
	GetGeometryType(): number;
	/**
	 * 设置自定义平面。
	 * @param thePlane 自定义平面。
	 */
	SetCustomPlane(thePlane: Mx3dGePlane): void;
	/**
	 * 取消设置自定义平面。
	 */
	UnsetCustomPlane(): void;
	/**
	 * @returns 返回文本位置是否自定义。
	 */
	IsTextPositionCustom(): boolean;
	/**
	 * 设置尺寸外观。
	 * @param theDimensionAspect 尺寸外观。
	 */
	SetDimensionAspect(theDimensionAspect: Mx3dAspectDim): void;
	/**
	 * @returns 返回尺寸的类型。
	 */
	KindOfDimension(): MdGe.MxKindOfDimension;
	/**
	 * 取消设置固定文本位置。
	 */
	UnsetFixedTextPosition(): void;
	/**
	 * @returns 返回二维文本选择公差。
	 */
	SelToleranceForText2d(): number;
	/**
	 * 设置二维文本选择公差。
	 * @param theTol 选择公差。
	 */
	SetSelToleranceForText2d(theTol: number): void;
	/**
	 * @returns 返回尺寸线位置距离。
	 */
	GetFlyout(): number;
	/**
	 * 设置尺寸线位置距离。
	 * @param theFlyout 尺寸线位置距离。
	 */
	SetFlyout(theFlyout: number): void;
	/**
	 * @returns 返回是否有效。
	 */
	IsValid(): boolean;
}
/**
 * @class Mx3dDimLength
 * @extends Mx3dDimObject
 *
 * 表示3D环境中的长度尺寸。该类封装了在不同几何体（如点和面）之间创建、管理和显示长度尺寸的逻辑。
 * 它集成了几何定义和显示参数，以便在3D空间中实现精确的长度标注。
 */
export declare class Mx3dDimLength extends Mx3dDimObject {
	/**
	 * 构造一个空的长度尺寸对象。
	 */
	constructor();
	/**
	 * 构造长度尺寸，针对指定的边和平面。
	 * @param theEdge 测量的边。
	 * @param thePlane 测量的平面。
	 */
	constructor(theEdge: Mx3dShapeEdge, thePlane: Mx3dGePlane);
	/**
	 * 构造长度尺寸，针对指定的两点和平面。
	 * @param theFirstPoint 第一点。
	 * @param theSecondPoint 第二点。
	 * @param thePlane 测量的平面。
	 */
	constructor(theFirstPoint: Mx3dGePoint, theSecondPoint: Mx3dGePoint, thePlane: Mx3dGePlane);
	/**
	 * 返回长度尺寸的第一点。
	 * @returns 第一点。
	 */
	FirstPoint(): Mx3dGePoint;
	/**
	 * 返回长度尺寸的第二点。
	 * @returns 第二点。
	 */
	SecondPoint(): Mx3dGePoint;
	/**
	 * 返回长度尺寸的第一形状对象。
	 * @returns 第一形状对象。
	 */
	FirstShape(): Mx3dShapeObject;
	/**
	 * 返回长度尺寸的第二形状对象。
	 * @returns 第二形状对象。
	 */
	SecondShape(): Mx3dShapeObject;
	/**
	 * 设置测量几何，基于指定的两点和平面。
	 * @param theFirstPoint 第一点。
	 * @param theSecondPoint 第二点。
	 * @param thePlane 测量的平面。
	 */
	SetMeasuredGeometry(theFirstPoint: Mx3dGePoint, theSecondPoint: Mx3dGePoint, thePlane: Mx3dGePlane): void;
	/**
	 * 设置测量几何，基于指定的形状。
	 * @param theFirstShape 第一形状对象。
	 * @param theSecondShape 第二形状对象。
	 */
	SetMeasuredShapes(theFirstShape: Mx3dShapeObject, theSecondShape: Mx3dShapeObject): void;
	/**
	 * 设置文本位置。
	 * @param theTextPos 文本位置。
	 */
	SetTextPosition(theTextPos: Mx3dGePoint): void;
	/**
	 * 获取文本位置。
	 * @returns 文本位置。
	 */
	GetTextPosition(): Mx3dGePoint;
	/**
	 * 设置自定义方向。
	 * @param theDirection 方向。
	 * @param theUseDirection 是否使用自定义方向。
	 */
	SetDirection(theDirection: Mx3dGeDir, theUseDirection: boolean): void;
	/**
	 * 获取尺寸值。
	 * @returns 尺寸值。
	 */
	GetValue(): number;
	/**
	 * 设置计算值。
	 */
	SetComputedValue(): void;
	/**
	 * 设置自定义值。
	 * @param theValue 自定义值。
	 */
	SetCustomValue(theValue: number): void;
	/**
	 * 获取测量平面。
	 * @returns 测量平面。
	 */
	GetPlane(): Mx3dGePlane;
	/**
	 * 获取几何类型。
	 * @returns 几何类型。
	 */
	GetGeometryType(): number;
	/**
	 * 设置自定义平面。
	 * @param thePlane 自定义平面。
	 */
	SetCustomPlane(thePlane: Mx3dGePlane): void;
	/**
	 * 取消自定义平面设置。
	 */
	UnsetCustomPlane(): void;
	/**
	 * 检查文本位置是否自定义。
	 * @returns 如果文本位置是自定义的，则返回 true；否则，返回 false。
	 */
	IsTextPositionCustom(): boolean;
	/**
	 * 设置尺寸外观。
	 * @param theDimensionAspect 尺寸外观。
	 */
	SetDimensionAspect(theDimensionAspect: Mx3dAspectDim): void;
	/**
	 * 获取尺寸类型。
	 * @returns 尺寸类型。
	 */
	KindOfDimension(): MdGe.MxKindOfDimension;
	/**
	 * 取消固定文本位置。
	 */
	UnsetFixedTextPosition(): void;
	/**
	 * 获取2D文本选择公差。
	 * @returns 2D文本选择公差。
	 */
	SelToleranceForText2d(): number;
	/**
	 * 设置2D文本选择公差。
	 * @param theTol 2D文本选择公差。
	 */
	SetSelToleranceForText2d(theTol: number): void;
	/**
	 * 获取尺寸线位置距离。
	 * @returns 尺寸线位置距离。
	 */
	GetFlyout(): number;
	/**
	 * 设置尺寸线位置距离。
	 * @param theFlyout 尺寸线位置距离。
	 */
	SetFlyout(theFlyout: number): void;
	/**
	 * 检查尺寸是否有效。
	 * @returns 如果尺寸有效，则返回 true；否则，返回 false。
	 */
	IsValid(): boolean;
}
/**
 * 表示插值B样条曲线算法。
 */
export declare class Mx3dInterpolateBSplineCurve extends Mx3dBaseObject {
	/**
	 * 构造函数，创建用于生成B样条曲线的对象。
	 * @param Points 插值点数组。
	 * @param PeriodicFlag 周期性标志。
	 * @param Tolerance 精度。
	 */
	constructor(Points: Mx3dGePoint[], PeriodicFlag: boolean, Tolerance: number);
	/**
	 * 构造函数，创建用于生成B样条曲线的对象。
	 * @param Points 插值点数组。
	 * @param Parameters 参数值数组。
	 * @param PeriodicFlag 周期性标志。
	 * @param Tolerance 精度。
	 */
	constructor(Points: Mx3dGePoint[], Parameters: number[], PeriodicFlag: boolean, Tolerance: number);
	/**
	 * 设置起点终点切向。
	 * @param InitialTangent 起点切向。
	 * @param FinalTangent 终点切向。
	 */
	LoadEnds(InitialTangent: UniVec, FinalTangent: UniVec): void;
	/**
	 * 设置所有插值点切向。
	 * @param Tangents 切向数组。
	 * @param TangentFlags 是否应用切向数组。
	 */
	Load(Tangents: Mx3dGeVec[], TangentFlags: boolean[]): void;
	/**
   * 执行算法。
   */
	Perform(): void;
	/**
	 * 获取插值算法生成的B样条曲线。
	 * @returns B样条曲线。
	 */
	Curve(): Mx3dGeomBSplineCurve;
	/**
	 * 判断算法是否执行成功。
	 * @returns 算法是否执行成功标志，true 成功， false 失败。
	 */
	IsDone(): boolean;
}

export {};
`,za={...Pe,enhanceApp(r){const{app:e,siteData:n}=r;n.value.router.prefetchLinks=!1,Pe.enhanceApp(r),e.mixin({async mounted(){H(()=>import("./mxdraw.esm.Ci5sugkA.js"),[]).then(t=>{Te("mxdraw",t.default||t)}),H(()=>import("./index.BUgJn_nY.js"),[]).then(t=>{Te("mxcad3d",t.default||t)})}}),e.use(Fa,{defaultDirection:"column",ms:300,handleError(t){},onMonacoCreated(t){t.languages.typescript.typescriptDefaults.addExtraLib(`
          declare module 'mxcad3d' { 
            ${wa} 
          }
          `,"mxcad3d")}})}};export{ja as A,Ka as O,Wa as P,za as R,$a as a,Co as c,O as u,La as v};
