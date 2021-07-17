(this["webpackJsonpduel-monsters-app"]=this["webpackJsonpduel-monsters-app"]||[]).push([[0],{27:function(t,e,n){},29:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var s=n(1),i=n.n(s),c=n(20),r=n.n(c),a=(n(27),n(11)),o=n(2),d=n(16),l=n.n(d),u=n(21),h=n(6),j=n(7),p=n(9),b=n(8),m=(n(29),n(0)),f=function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(h.a)(this,n),(s=e.call(this,t)).onClick=function(t){document.getElementsByClassName("inventoryList")[0].style.left="25%",document.getElementById("detailsPanel").style.visibility="visible";var e=t.target.innerText.includes(" (")?t.target.innerText.substring(0,t.target.innerText.indexOf(" (")):t.target.innerText;s.props.onSelectedCard(e)},s.state={cardList:t.cardList},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.setState({cardList:this.props.cardList})}},{key:"componentDidUpdate",value:function(){this.state.cardList!==this.props.cardList&&this.setState({cardList:this.props.cardList})}},{key:"formatListEntries",value:function(t){var e=this;return Object.values(t).map((function(t){for(var n=t[0].count,s=1;s<t.length;s++)n+=t[s].count;return Object(m.jsx)("li",{id:"inventoryItem",className:t[0].cardType.toLowerCase()+"Item",onClick:e.onClick,children:t[0].cardName+(t.length>1?" ("+n+")":"")})}))}},{key:"render",value:function(){var t=this.state.cardList,e=this.formatListEntries(t);return Object(m.jsx)("div",{children:Object(m.jsx)("ul",{className:"inventoryList",children:e})})}}]),n}(s.Component),v=(n(31),function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(h.a)(this,n),(s=e.call(this,t)).state={cardInfo:t.cardInfo,cardName:t.cardName,attr:t.attr,level:t.level,desc:t.desc,atk:t.atk,def:t.def,cardNo:t.formattedCardNo,types:t.formattedTypes,decks:t.formattedDecks,tags:t.formattedTags,count:t.count},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){void 0===this.props.cardInfo&&this.setState({cardInfo:[]})}},{key:"componentDidUpdate",value:function(){this.state.cardInfo!==this.props.cardInfo&&this.setState({cardInfo:this.props.cardInfo}),this.state.cardName!==this.props.cardName&&this.setState({cardName:this.props.cardName,attr:this.props.attr,level:this.props.level,desc:this.props.desc,atk:this.props.atk,def:this.props.def,types:this.props.formattedTypes,cardNo:this.props.formattedCardNo,decks:this.props.formattedDecks,tags:this.props.formattedTags,count:this.props.count})}},{key:"render",value:function(){var t=this.state,e=t.cardInfo,n=t.cardName,s=t.attr,i=(t.level,t.desc),c=t.atk,r=t.def,a=t.cardNo,o=t.types,d=t.decks,l=t.tags,u=t.count;return e?Object(m.jsxs)("span",{id:"detailsPanel",className:"detailsPanel",children:[Object(m.jsx)("div",{id:"cardTitle",style:{fontSize:"20px",marginTop:"0px"},children:n}),Object(m.jsx)("div",{id:"cardNo",style:{fontSize:"14px"},children:a}),Object(m.jsx)("div",{id:"attribute",style:{fontSize:"14px"},children:s}),Object(m.jsx)("div",{id:"lv"}),Object(m.jsx)("div",{id:"type",style:{fontSize:"18px"},children:o}),Object(m.jsx)("div",{id:"desc",style:{fontSize:"16px"},children:i}),c?Object(m.jsxs)("div",{id:"atkDef",children:[Object(m.jsx)("span",{id:"atk",children:"ATK: "+c}),Object(m.jsx)("span",{children:" / "}),Object(m.jsx)("span",{id:"def",children:"DEF: "+r})]}):Object(m.jsx)("span",{}),Object(m.jsx)("div",{id:"count",children:u}),Object(m.jsx)("div",{id:"decks",children:d}),Object(m.jsx)("div",{id:"tags",children:l})]}):Object(m.jsx)("div",{})}}]),n}(s.Component)),O=function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(h.a)(this,n),(s=e.call(this,t)).onClick=function(t){document.getElementsByClassName("selected")[0].classList.remove("selected"),document.getElementById(t.target.id).classList.add("selected"),document.getElementsByClassName("inventoryList")[0].style.left="40%",document.getElementById("detailsPanel").style.visibility="hidden",s.updateCardList(t.target.innerText)},s.handleSelectionChange=function(t){s.setState({selectedCard:t})},s.state={currentView:0,masterList:[],cardList:[],condensedList:[],selectedType:"All",selectedCard:""},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getCardList()}},{key:"getCardList",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e,n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(window.location.origin,"/inventory"),t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:s=t.sent,this.setState({masterList:s,cardList:s}),this.condenseCardList(s);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"updateCardList",value:function(t){var e=this.state.masterList,n="All"===t?e:e.filter((function(e){return e.cardType===t}));this.setState({selectedType:t,cardList:n}),this.condenseCardList(n)}},{key:"condenseCardList",value:function(t){t.sort((function(t,e){return t.cardName>e.cardName?1:-1}));var e={};t.map((function(t){e[t.cardName]?e[t.cardName].push(t):e[t.cardName]=[t]})),this.setState({condensedList:e})}},{key:"combineAttributeValues",value:function(t,e){for(var n=[],s=[],i=0;i<t.length;i++)n=n.concat(t[i][e]);s.push(n[0]);for(var c=1;c<n.length;c++)s.includes(n[c])||s.push(n[c]);return s.length>1?s.join(" / "):s[0]}},{key:"combineCardNo",value:function(t){for(var e=[],n=0;n<t.length;n++)e.push(t[n].cardNo);return e.length>1?e.join(" / "):e[0]}},{key:"render",value:function(){var t,e,n,s,i,c,r,a,o,d,l,u=this.state,h=u.cardList,j=u.condensedList,p=u.selectedCard,b=j[p];return void 0!==b&&(t=b[0].cardName,e=b[0].attribute,n=0===b[0].level?null:b[0].level,s=b[0].description,i=b[0].atk,c=b[0].def,r=b.reduce((function(t,e){return t+e.count}),0),a=this.combineCardNo(b),d=this.combineAttributeValues(b,"deck"),o=b[0].type.length>1?b[0].type.join(" / "):j[p][0].type[0],l=this.combineAttributeValues(b,"tag")),console.log("inventory"),console.log(o),Object(m.jsxs)("div",{style:{position:"relative"},children:[Object(m.jsxs)("span",{style:{position:"absolute",width:"100%",marginTop:"10%",marginLeft:"25%"},children:[Object(m.jsx)("button",{id:"allBtn",className:"sortButton selected",onClick:this.onClick,children:"All"}),Object(m.jsx)("button",{id:"monsterBtn",className:"sortButton",onClick:this.onClick,children:"Monster"}),Object(m.jsx)("button",{id:"spellBtn",className:"sortButton",onClick:this.onClick,children:"Spell"}),Object(m.jsx)("button",{id:"trapBtn",className:"sortButton",onClick:this.onClick,children:"Trap"}),Object(m.jsx)("button",{id:"pendulumBtn",className:"sortButton",onClick:this.onClick,children:"Pendulum"}),Object(m.jsx)("button",{id:"fusionBtn",className:"sortButton",onClick:this.onClick,children:"Fusion"}),Object(m.jsx)("button",{id:"xyzBtn",className:"sortButton",onClick:this.onClick,children:"Xyz"}),Object(m.jsx)("button",{id:"synchroBtn",className:"sortButton",onClick:this.onClick,children:"Synchro"}),Object(m.jsx)("button",{id:"linkBtn",className:"sortButton",onClick:this.onClick,children:"Link"})]}),Object(m.jsx)(f,{cardList:j,onSelectedCard:this.handleSelectionChange}),h?Object(m.jsx)("div",{children:Object(m.jsx)(v,{cardInfo:h[h.length-1],cardName:t,attr:e,level:n,desc:s,atk:i,def:c,formattedCardNo:a,formattedTypes:o,formattedDecks:d,formattedTags:l,count:r})}):Object(m.jsx)("div",{})]})}}]),n}(s.Component),x=function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(t){return Object(h.a)(this,n),e.call(this,t)}return Object(j.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:"Hello Gorgeous"})}}]),n}(s.Component),y=n.p+"static/media/millenium_eye_trnp_1.1d937b88.png",k=(n(32),function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(h.a)(this,n),(s=e.call(this,t)).state={selected:"None"},s}return Object(j.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"menu",children:Object(m.jsxs)("ul",{id:"menuOptions",className:"menuOptions",children:[Object(m.jsx)("li",{children:Object(m.jsxs)(a.b,{className:"menuLink",to:"/add",children:[Object(m.jsx)("img",{src:y,alt:"Add Card",height:"40px",width:"75px"}),"Add Card"]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(a.b,{className:"menuLink",to:"/inventory",children:[Object(m.jsx)("img",{src:y,alt:"Inventory",height:"40px",width:"75px"}),"Inventory"]})}),Object(m.jsx)("li",{children:"Second Card"}),Object(m.jsx)("li",{children:"Third Card"}),Object(m.jsx)("li",{children:"Fourth Card"})]})})}}]),n}(s.Component)),C=function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)(k,{})})}}]),n}(s.Component),g=function(){return Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/inventory",component:O}),Object(m.jsx)(o.a,{path:"/add",component:x}),Object(m.jsx)(o.a,{path:"/",component:C})]})};function N(){return Object(m.jsx)(a.a,{children:Object(m.jsx)(g,{})})}r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(a.a,{routes:g,children:Object(m.jsx)(N,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f46859b5.chunk.js.map