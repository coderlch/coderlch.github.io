import{_ as S,r as A,o,c as i,d as L,f as C,i as P,j as p,k as _e,h as e,F as I,l as R,m as w,a as g,t as x,n as z,p as Y,q as T,w as N,s as ve,v as $,b as j,x as X,y as Te,z as xe,A as Ne,B as J,C as Q,D as K,E as pe,G as he,H as E,u as me,g as D,T as fe,I as O,J as be,K as q,L as G,M as Be,N as De,O as Z,P as ge,Q as ke,e as Ie,R as ee,S as He,U,V as te,W as Me,X as Pe,Y as Ee,Z as Ae}from"./app.8d54902a.js";const Re={},Fe={class:"theme-default-content custom"};function Oe(v,n){const t=A("Content");return o(),i("div",Fe,[L(t)])}var ze=S(Re,[["render",Oe],["__file","HomeContent.vue"]]);const We={key:0,class:"features"},Ve=C({__name:"HomeFeatures",setup(v){const n=P(),t=p(()=>_e(n.value.features)?n.value.features:[]);return(u,r)=>e(t).length?(o(),i("div",We,[(o(!0),i(I,null,R(e(t),_=>(o(),i("div",{key:_.title,class:"feature"},[g("h2",null,x(_.title),1),g("p",null,x(_.details),1)]))),128))])):w("",!0)}});var Ue=S(Ve,[["__file","HomeFeatures.vue"]]);const je=["innerHTML"],Ke=["textContent"],qe=C({__name:"HomeFooter",setup(v){const n=P(),t=p(()=>n.value.footer),u=p(()=>n.value.footerHtml);return(r,_)=>e(t)?(o(),i(I,{key:0},[e(u)?(o(),i("div",{key:0,class:"footer",innerHTML:e(t)},null,8,je)):(o(),i("div",{key:1,class:"footer",textContent:x(e(t))},null,8,Ke))],64)):w("",!0)}});var Ge=S(qe,[["__file","HomeFooter.vue"]]);const Xe=["href","rel","target","aria-label"],Ye=C({inheritAttrs:!1}),Je=C({...Ye,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(v){const n=v,t=z(),u=Ne(),{item:r}=Y(n),_=p(()=>X(r.value.link)),m=p(()=>Te(r.value.link)||xe(r.value.link)),h=p(()=>{if(!m.value){if(r.value.target)return r.value.target;if(_.value)return"_blank"}}),a=p(()=>h.value==="_blank"),s=p(()=>!_.value&&!m.value&&!a.value),l=p(()=>{if(!m.value){if(r.value.rel)return r.value.rel;if(a.value)return"noopener noreferrer"}}),c=p(()=>r.value.ariaLabel||r.value.text),d=p(()=>{const y=Object.keys(u.value.locales);return y.length?!y.some(f=>f===r.value.link):r.value.link!=="/"}),b=p(()=>d.value?t.path.startsWith(r.value.link):!1),k=p(()=>s.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(t.path):b.value:!1);return(y,f)=>{const B=A("RouterLink"),H=A("AutoLinkExternalIcon");return e(s)?(o(),T(B,ve({key:0,class:{"router-link-active":e(k)},to:e(r).link,"aria-label":e(c)},y.$attrs),{default:N(()=>[$(y.$slots,"before"),j(" "+x(e(r).text)+" ",1),$(y.$slots,"after")]),_:3},16,["class","to","aria-label"])):(o(),i("a",ve({key:1,class:"external-link",href:e(r).link,rel:e(l),target:e(h),"aria-label":e(c)},y.$attrs),[$(y.$slots,"before"),j(" "+x(e(r).text)+" ",1),e(a)?(o(),T(H,{key:0})):w("",!0),$(y.$slots,"after")],16,Xe))}}});var M=S(Je,[["__file","AutoLink.vue"]]);const Qe={class:"hero"},Ze={key:0,id:"main-title"},et={key:1,class:"description"},tt={key:2,class:"actions"},at=C({__name:"HomeHero",setup(v){const n=P(),t=J(),u=Q(),r=p(()=>u.value&&n.value.heroImageDark!==void 0?n.value.heroImageDark:n.value.heroImage),_=p(()=>n.value.heroText===null?null:n.value.heroText||t.value.title||"Hello"),m=p(()=>n.value.heroAlt||_.value||"hero"),h=p(()=>n.value.tagline===null?null:n.value.tagline||t.value.description||"Welcome to your VuePress site"),a=p(()=>_e(n.value.actions)?n.value.actions.map(({text:l,link:c,type:d="primary"})=>({text:l,link:c,type:d})):[]),s=()=>{if(!r.value)return null;const l=K("img",{src:pe(r.value),alt:m.value});return n.value.heroImageDark===void 0?l:K(he,()=>l)};return(l,c)=>(o(),i("header",Qe,[L(s),e(_)?(o(),i("h1",Ze,x(e(_)),1)):w("",!0),e(h)?(o(),i("p",et,x(e(h)),1)):w("",!0),e(a).length?(o(),i("p",tt,[(o(!0),i(I,null,R(e(a),d=>(o(),T(M,{key:d.text,class:E(["action-button",[d.type]]),item:d},null,8,["class","item"]))),128))])):w("",!0)]))}});var nt=S(at,[["__file","HomeHero.vue"]]);const ot={class:"home"},rt=C({__name:"Home",setup(v){return(n,t)=>(o(),i("main",ot,[L(nt),L(Ue),L(ze),L(Ge)]))}});var st=S(rt,[["__file","Home.vue"]]);const lt=C({__name:"NavbarBrand",setup(v){const n=me(),t=J(),u=D(),r=Q(),_=p(()=>u.value.home||n.value),m=p(()=>t.value.title),h=p(()=>r.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),a=()=>{if(!h.value)return null;const s=K("img",{class:"logo",src:pe(h.value),alt:m.value});return u.value.logoDark===void 0?s:K(he,()=>s)};return(s,l)=>{const c=A("RouterLink");return o(),T(c,{to:e(_)},{default:N(()=>[L(a),e(m)?(o(),i("span",{key:0,class:E(["site-name",{"can-hide":e(h)}])},x(e(m)),3)):w("",!0)]),_:1},8,["to"])}}});var ut=S(lt,[["__file","NavbarBrand.vue"]]);const it=C({__name:"DropdownTransition",setup(v){const n=u=>{u.style.height=u.scrollHeight+"px"},t=u=>{u.style.height=""};return(u,r)=>(o(),T(fe,{name:"dropdown",onEnter:n,onAfterEnter:t,onBeforeLeave:n},{default:N(()=>[$(u.$slots,"default")]),_:3}))}});var $e=S(it,[["__file","DropdownTransition.vue"]]);const ct=["aria-label"],vt={class:"title"},dt=g("span",{class:"arrow down"},null,-1),_t=["aria-label"],pt={class:"title"},ht={class:"navbar-dropdown"},mt={class:"navbar-dropdown-subtitle"},ft={key:1},bt={class:"navbar-dropdown-subitem-wrapper"},gt=C({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(v){const n=v,{item:t}=Y(n),u=p(()=>t.value.ariaLabel||t.value.text),r=O(!1),_=z();be(()=>_.path,()=>{r.value=!1});const m=a=>{a.detail===0?r.value=!r.value:r.value=!1},h=(a,s)=>s[s.length-1]===a;return(a,s)=>(o(),i("div",{class:E(["navbar-dropdown-wrapper",{open:r.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":e(u),onClick:m},[g("span",vt,x(e(t).text),1),dt],8,ct),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":e(u),onClick:s[0]||(s[0]=l=>r.value=!r.value)},[g("span",pt,x(e(t).text),1),g("span",{class:E(["arrow",r.value?"down":"right"])},null,2)],8,_t),L($e,null,{default:N(()=>[q(g("ul",ht,[(o(!0),i(I,null,R(e(t).children,l=>(o(),i("li",{key:l.text,class:"navbar-dropdown-item"},[l.children?(o(),i(I,{key:0},[g("h4",mt,[l.link?(o(),T(M,{key:0,item:l,onFocusout:c=>h(l,e(t).children)&&l.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(o(),i("span",ft,x(l.text),1))]),g("ul",bt,[(o(!0),i(I,null,R(l.children,c=>(o(),i("li",{key:c.link,class:"navbar-dropdown-subitem"},[L(M,{item:c,onFocusout:d=>h(c,l.children)&&h(l,e(t).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(o(),T(M,{key:1,item:l,onFocusout:c=>h(l,e(t).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,r.value]])]),_:1})],2))}});var kt=S(gt,[["__file","NavbarDropdown.vue"]]);const de=v=>decodeURI(v).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),$t=(v,n)=>{if(n.hash===v)return!0;const t=de(n.path),u=de(v);return t===u},Le=(v,n)=>v.link&&$t(v.link,n)?!0:v.children?v.children.some(t=>Le(t,n)):!1,ye=v=>!X(v)||/github\.com/.test(v)?"GitHub":/bitbucket\.org/.test(v)?"Bitbucket":/gitlab\.com/.test(v)?"GitLab":/gitee\.com/.test(v)?"Gitee":null,Lt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},yt=({docsRepo:v,editLinkPattern:n})=>{if(n)return n;const t=ye(v);return t!==null?Lt[t]:null},wt=({docsRepo:v,docsBranch:n,docsDir:t,filePathRelative:u,editLinkPattern:r})=>{if(!u)return null;const _=yt({docsRepo:v,editLinkPattern:r});return _?_.replace(/:repo/,X(v)?v:`https://github.com/${v}`).replace(/:branch/,n).replace(/:path/,Be(`${De(t)}/${u}`)):null},St={key:0,class:"navbar-items"},Ct=C({__name:"NavbarItems",setup(v){const n=()=>{const s=Z(),l=me(),c=J(),d=D();return p(()=>{var B,H;const b=Object.keys(c.value.locales);if(b.length<2)return[];const k=s.currentRoute.value.path,y=s.currentRoute.value.fullPath;return[{text:(B=d.value.selectLanguageText)!=null?B:"unknown language",ariaLabel:(H=d.value.selectLanguageAriaLabel)!=null?H:"unkown language",children:b.map(F=>{var oe,re,se,le,ue,ie;const W=(re=(oe=c.value.locales)==null?void 0:oe[F])!=null?re:{},ae=(le=(se=d.value.locales)==null?void 0:se[F])!=null?le:{},ne=`${W.lang}`,Se=(ue=ae.selectLanguageName)!=null?ue:ne;let V;if(ne===c.value.lang)V=y;else{const ce=k.replace(l.value,F);s.getRoutes().some(Ce=>Ce.path===ce)?V=ce:V=(ie=ae.home)!=null?ie:F}return{text:Se,link:V}})}]})},t=()=>{const s=D(),l=p(()=>s.value.repo),c=p(()=>l.value?ye(l.value):null),d=p(()=>l.value&&!X(l.value)?`https://github.com/${l.value}`:l.value),b=p(()=>d.value?s.value.repoLabel?s.value.repoLabel:c.value===null?"Source":c.value:null);return p(()=>!d.value||!b.value?[]:[{text:b.value,link:d.value}])},u=s=>ge(s)?ke(s):s.children?{...s,children:s.children.map(u)}:s,_=(()=>{const s=D();return p(()=>(s.value.navbar||[]).map(u))})(),m=n(),h=t(),a=p(()=>[..._.value,...m.value,...h.value]);return(s,l)=>e(a).length?(o(),i("nav",St,[(o(!0),i(I,null,R(e(a),c=>(o(),i("div",{key:c.text,class:"navbar-item"},[c.children?(o(),T(kt,{key:0,item:c},null,8,["item"])):(o(),T(M,{key:1,item:c},null,8,["item"]))]))),128))])):w("",!0)}});var we=S(Ct,[["__file","NavbarItems.vue"]]);const Tt=["title"],xt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Nt=Ie('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Bt=[Nt],Dt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},It=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Ht=[It],Mt=C({__name:"ToggleDarkModeButton",setup(v){const n=D(),t=Q(),u=()=>{t.value=!t.value};return(r,_)=>(o(),i("button",{class:"toggle-dark-button",title:e(n).toggleDarkMode,onClick:u},[q((o(),i("svg",xt,Bt,512)),[[G,!e(t)]]),q((o(),i("svg",Dt,Ht,512)),[[G,e(t)]])],8,Tt))}});var Pt=S(Mt,[["__file","ToggleDarkModeButton.vue"]]);const Et=["title"],At=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),Rt=[At],Ft=C({__name:"ToggleSidebarButton",emits:["toggle"],setup(v){const n=D();return(t,u)=>(o(),i("div",{class:"toggle-sidebar-button",title:e(n).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=r=>t.$emit("toggle"))},Rt,8,Et))}});var Ot=S(Ft,[["__file","ToggleSidebarButton.vue"]]);const zt=C({__name:"Navbar",emits:["toggle-sidebar"],setup(v){const n=D(),t=O(null),u=O(null),r=O(0),_=p(()=>r.value?{maxWidth:r.value+"px"}:{}),m=p(()=>n.value.darkMode);ee(()=>{const s=h(t.value,"paddingLeft")+h(t.value,"paddingRight"),l=()=>{var c;window.innerWidth<=719?r.value=0:r.value=t.value.offsetWidth-s-(((c=u.value)==null?void 0:c.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)});function h(a,s){var d,b,k;const l=(k=(b=(d=a==null?void 0:a.ownerDocument)==null?void 0:d.defaultView)==null?void 0:b.getComputedStyle(a,null))==null?void 0:k[s],c=Number.parseInt(l,10);return Number.isNaN(c)?0:c}return(a,s)=>{const l=A("NavbarSearch");return o(),i("header",{ref_key:"navbar",ref:t,class:"navbar"},[L(Ot,{onToggle:s[0]||(s[0]=c=>a.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:u},[L(ut)],512),g("div",{class:"navbar-items-wrapper",style:He(e(_))},[$(a.$slots,"before"),L(we,{class:"can-hide"}),$(a.$slots,"after"),e(m)?(o(),T(Pt,{key:0})):w("",!0),L(l)],4)],512)}}});var Wt=S(zt,[["__file","Navbar.vue"]]);const Vt={class:"page-meta"},Ut={key:0,class:"meta-item edit-link"},jt={key:1,class:"meta-item last-updated"},Kt={class:"meta-item-label"},qt={class:"meta-item-info"},Gt={key:2,class:"meta-item contributors"},Xt={class:"meta-item-label"},Yt={class:"meta-item-info"},Jt=["title"],Qt=C({__name:"PageMeta",setup(v){const n=()=>{const a=D(),s=U(),l=P();return p(()=>{var H,F,W;if(!((F=(H=l.value.editLink)!=null?H:a.value.editLink)!=null?F:!0))return null;const{repo:d,docsRepo:b=d,docsBranch:k="main",docsDir:y="",editLinkText:f}=a.value;if(!b)return null;const B=wt({docsRepo:b,docsBranch:k,docsDir:y,filePathRelative:s.value.filePathRelative,editLinkPattern:(W=l.value.editLinkPattern)!=null?W:a.value.editLinkPattern});return B?{text:f!=null?f:"Edit this page",link:B}:null})},t=()=>{const a=D(),s=U(),l=P();return p(()=>{var b,k,y,f;return!((k=(b=l.value.lastUpdated)!=null?b:a.value.lastUpdated)!=null?k:!0)||!((y=s.value.git)!=null&&y.updatedTime)?null:new Date((f=s.value.git)==null?void 0:f.updatedTime).toLocaleString()})},u=()=>{const a=D(),s=U(),l=P();return p(()=>{var d,b,k,y;return((b=(d=l.value.contributors)!=null?d:a.value.contributors)!=null?b:!0)&&(y=(k=s.value.git)==null?void 0:k.contributors)!=null?y:null})},r=D(),_=n(),m=t(),h=u();return(a,s)=>{const l=A("ClientOnly");return o(),i("footer",Vt,[e(_)?(o(),i("div",Ut,[L(M,{class:"meta-item-label",item:e(_)},null,8,["item"])])):w("",!0),e(m)?(o(),i("div",jt,[g("span",Kt,x(e(r).lastUpdatedText)+": ",1),L(l,null,{default:N(()=>[g("span",qt,x(e(m)),1)]),_:1})])):w("",!0),e(h)&&e(h).length?(o(),i("div",Gt,[g("span",Xt,x(e(r).contributorsText)+": ",1),g("span",Yt,[(o(!0),i(I,null,R(e(h),(c,d)=>(o(),i(I,{key:d},[g("span",{class:"contributor",title:`email: ${c.email}`},x(c.name),9,Jt),d!==e(h).length-1?(o(),i(I,{key:0},[j(", ")],64)):w("",!0)],64))),128))])])):w("",!0)])}}});var Zt=S(Qt,[["__file","PageMeta.vue"]]);const ea={key:0,class:"page-nav"},ta={class:"inner"},aa={key:0,class:"prev"},na={key:1,class:"next"},oa=C({__name:"PageNav",setup(v){const n=a=>a===!1?null:ge(a)?ke(a):Me(a)?a:!1,t=(a,s,l)=>{const c=a.findIndex(d=>d.link===s);if(c!==-1){const d=a[c+l];return d!=null&&d.link?d:null}for(const d of a)if(d.children){const b=t(d.children,s,l);if(b)return b}return null},u=P(),r=te(),_=z(),m=p(()=>{const a=n(u.value.prev);return a!==!1?a:t(r.value,_.path,-1)}),h=p(()=>{const a=n(u.value.next);return a!==!1?a:t(r.value,_.path,1)});return(a,s)=>e(m)||e(h)?(o(),i("nav",ea,[g("p",ta,[e(m)?(o(),i("span",aa,[L(M,{item:e(m)},null,8,["item"])])):w("",!0),e(h)?(o(),i("span",na,[L(M,{item:e(h)},null,8,["item"])])):w("",!0)])])):w("",!0)}});var ra=S(oa,[["__file","PageNav.vue"]]);const sa={class:"page"},la={class:"theme-default-content"},ua=C({__name:"Page",setup(v){return(n,t)=>{const u=A("Content");return o(),i("main",sa,[$(n.$slots,"top"),g("div",la,[$(n.$slots,"content-top"),L(u),$(n.$slots,"content-bottom")]),L(Zt),L(ra),$(n.$slots,"bottom")])}}});var ia=S(ua,[["__file","Page.vue"]]);const ca={class:"sidebar-item-children"},va=C({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(v){const n=v,{item:t,depth:u}=Y(n),r=z(),_=Z(),m=p(()=>Le(t.value,r)),h=p(()=>({"sidebar-item":!0,"sidebar-heading":u.value===0,active:m.value,collapsible:t.value.collapsible})),a=O(!0),s=O(void 0);return t.value.collapsible&&(a.value=m.value,s.value=()=>{a.value=!a.value},_.afterEach(()=>{a.value=m.value})),(l,c)=>{var b;const d=A("SidebarItem",!0);return o(),i("li",null,[e(t).link?(o(),T(M,{key:0,class:E(e(h)),item:e(t)},null,8,["class","item"])):(o(),i("p",{key:1,tabindex:"0",class:E(e(h)),onClick:c[0]||(c[0]=(...k)=>s.value&&s.value(...k)),onKeydown:c[1]||(c[1]=Pe((...k)=>s.value&&s.value(...k),["enter"]))},[j(x(e(t).text)+" ",1),e(t).collapsible?(o(),i("span",{key:0,class:E(["arrow",a.value?"down":"right"])},null,2)):w("",!0)],34)),(b=e(t).children)!=null&&b.length?(o(),T($e,{key:2},{default:N(()=>[q(g("ul",ca,[(o(!0),i(I,null,R(e(t).children,k=>(o(),T(d,{key:`${e(u)}${k.text}${k.link}`,item:k,depth:e(u)+1},null,8,["item","depth"]))),128))],512),[[G,a.value]])]),_:1})):w("",!0)])}}});var da=S(va,[["__file","SidebarItem.vue"]]);const _a={key:0,class:"sidebar-items"},pa=C({__name:"SidebarItems",setup(v){const n=z(),t=te();return ee(()=>{be(()=>n.hash,u=>{const r=document.querySelector(".sidebar");if(!r)return;const _=document.querySelector(`.sidebar a.sidebar-item[href="${n.path}${u}"]`);if(!_)return;const{top:m,height:h}=r.getBoundingClientRect(),{top:a,height:s}=_.getBoundingClientRect();a<m?_.scrollIntoView(!0):a+s>m+h&&_.scrollIntoView(!1)})}),(u,r)=>e(t).length?(o(),i("ul",_a,[(o(!0),i(I,null,R(e(t),_=>(o(),T(da,{key:_.link||_.text,item:_},null,8,["item"]))),128))])):w("",!0)}});var ha=S(pa,[["__file","SidebarItems.vue"]]);const ma={class:"sidebar"},fa=C({__name:"Sidebar",setup(v){return(n,t)=>(o(),i("aside",ma,[L(we),$(n.$slots,"top"),L(ha),$(n.$slots,"bottom")]))}});var ba=S(fa,[["__file","Sidebar.vue"]]);const ga=C({__name:"Layout",setup(v){const n=U(),t=P(),u=D(),r=p(()=>t.value.navbar!==!1&&u.value.navbar!==!1),_=te(),m=O(!1),h=f=>{m.value=typeof f=="boolean"?f:!m.value},a={x:0,y:0},s=f=>{a.x=f.changedTouches[0].clientX,a.y=f.changedTouches[0].clientY},l=f=>{const B=f.changedTouches[0].clientX-a.x,H=f.changedTouches[0].clientY-a.y;Math.abs(B)>Math.abs(H)&&Math.abs(B)>40&&(B>0&&a.x<=80?h(!0):h(!1))},c=p(()=>[{"no-navbar":!r.value,"no-sidebar":!_.value.length,"sidebar-open":m.value},t.value.pageClass]);let d;ee(()=>{d=Z().afterEach(()=>{h(!1)})}),Ee(()=>{d()});const b=Ae(),k=b.resolve,y=b.pending;return(f,B)=>(o(),i("div",{class:E(["theme-container",e(c)]),onTouchstart:s,onTouchend:l},[$(f.$slots,"navbar",{},()=>[e(r)?(o(),T(Wt,{key:0,onToggleSidebar:h},{before:N(()=>[$(f.$slots,"navbar-before")]),after:N(()=>[$(f.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:B[0]||(B[0]=H=>h(!1))}),$(f.$slots,"sidebar",{},()=>[L(ba,null,{top:N(()=>[$(f.$slots,"sidebar-top")]),bottom:N(()=>[$(f.$slots,"sidebar-bottom")]),_:3})]),$(f.$slots,"page",{},()=>[e(t).home?(o(),T(st,{key:0})):(o(),T(fe,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e(k),onBeforeLeave:e(y)},{default:N(()=>[(o(),T(ia,{key:e(n).path},{top:N(()=>[$(f.$slots,"page-top")]),"content-top":N(()=>[$(f.$slots,"page-content-top")]),"content-bottom":N(()=>[$(f.$slots,"page-content-bottom")]),bottom:N(()=>[$(f.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var $a=S(ga,[["__file","Layout.vue"]]);export{$a as default};
