(this["webpackJsonpduel-monsters-app"]=this["webpackJsonpduel-monsters-app"]||[]).push([[0],{27:function(e,t,i){},29:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},40:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),c=i(20),r=i.n(c),s=(i(27),i(11)),d=i(2),l=i(16),o=i.n(l),u=i(21),j=i(6),p=i(7),h=i(9),b=i(8),m=(i(29),i(0)),x=function(e){Object(h.a)(i,e);var t=Object(b.a)(i);function i(e){var n;return Object(j.a)(this,i),(n=t.call(this,e)).onClick=function(e){document.getElementsByClassName("inventoryList")[0].style.left="25%",document.getElementById("detailsPanel").style.visibility="visible";var t=e.target.innerText.includes(" (")?e.target.innerText.substring(0,e.target.innerText.indexOf(" (")):e.target.innerText;n.props.onSelectedCard(t)},n.state={cardList:e.cardList},n}return Object(p.a)(i,[{key:"componentDidMount",value:function(){this.setState({cardList:this.props.cardList})}},{key:"componentDidUpdate",value:function(){this.state.cardList!==this.props.cardList&&this.setState({cardList:this.props.cardList})}},{key:"formatListEntries",value:function(e){var t=this;return Object.values(e).map((function(e){for(var i=e[0].count,n=1;n<e.length;n++)i+=e[n].count;return Object(m.jsx)("li",{id:"inventoryItem",className:e[0].cardType.toLowerCase()+"Item",onClick:t.onClick,children:e[0].cardName+(e.length>1?" ("+i+")":"")})}))}},{key:"render",value:function(){var e=this.state.cardList,t=this.formatListEntries(e);return Object(m.jsx)("div",{children:Object(m.jsx)("ul",{className:"inventoryList",children:t})})}}]),i}(n.Component),O=(i(31),function(e){Object(h.a)(i,e);var t=Object(b.a)(i);function i(e){var n;return Object(j.a)(this,i),(n=t.call(this,e)).state={cardInfo:e.cardInfo,cardName:e.cardName,attr:e.attr,level:e.level,desc:e.desc,atk:e.atk,def:e.def,cardNo:e.formattedCardNo,types:e.formattedTypes,decks:e.formattedDecks,tags:e.formattedTags,count:e.count},n}return Object(p.a)(i,[{key:"componentDidMount",value:function(){void 0===this.props.cardInfo&&this.setState({cardInfo:[]})}},{key:"componentDidUpdate",value:function(){this.state.cardInfo!==this.props.cardInfo&&this.setState({cardInfo:this.props.cardInfo}),this.state.cardName!==this.props.cardName&&this.setState({cardName:this.props.cardName,attr:this.props.attr,level:this.props.level,desc:this.props.desc,atk:this.props.atk,def:this.props.def,types:this.props.formattedTypes,cardNo:this.props.formattedCardNo,decks:this.props.formattedDecks,tags:this.props.formattedTags,count:this.props.count})}},{key:"render",value:function(){var e=this.state,t=e.cardInfo,i=e.cardName,n=e.attr,a=(e.level,e.desc),c=e.atk,r=e.def,s=e.cardNo,d=e.types,l=e.decks,o=e.tags,u=e.count;return t?Object(m.jsxs)("span",{id:"detailsPanel",className:"detailsPanel",children:[Object(m.jsx)("div",{id:"cardTitle",style:{fontSize:"20px",marginTop:"0px"},children:i}),Object(m.jsx)("div",{id:"cardNo",style:{fontSize:"14px"},children:s}),Object(m.jsx)("div",{id:"attribute",style:{fontSize:"14px"},children:n}),Object(m.jsx)("div",{id:"lv"}),Object(m.jsx)("div",{id:"type",style:{fontSize:"18px"},children:d}),Object(m.jsx)("div",{id:"desc",style:{fontSize:"16px"},children:a}),c?Object(m.jsxs)("div",{id:"atkDef",children:[Object(m.jsx)("span",{id:"atk",children:"ATK: "+c}),Object(m.jsx)("span",{children:" / "}),Object(m.jsx)("span",{id:"def",children:"DEF: "+r})]}):Object(m.jsx)("span",{}),Object(m.jsx)("div",{id:"count",children:u}),Object(m.jsx)("div",{id:"decks",children:l}),Object(m.jsx)("div",{id:"tags",children:o})]}):Object(m.jsx)("div",{})}}]),i}(n.Component)),f=function(e){Object(h.a)(i,e);var t=Object(b.a)(i);function i(e){var n;return Object(j.a)(this,i),(n=t.call(this,e)).onClick=function(e){document.getElementsByClassName("selected")[0].classList.remove("selected"),document.getElementById(e.target.id).classList.add("selected"),document.getElementsByClassName("inventoryList")[0].style.left="40%",document.getElementById("detailsPanel").style.visibility="hidden",n.updateCardList(e.target.innerText)},n.handleSelectionChange=function(e){n.setState({selectedCard:e})},n.state={currentView:0,masterList:[],cardList:[],condensedList:[],selectedType:"All",selectedCard:""},n}return Object(p.a)(i,[{key:"componentDidMount",value:function(){this.getCardList()}},{key:"getCardList",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,i,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(window.location.origin,"/inventory"),e.next=3,fetch(t);case 3:return i=e.sent,e.next=6,i.json();case 6:n=e.sent,this.setState({masterList:n,cardList:n}),this.condenseCardList(n);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateCardList",value:function(e){var t=this.state.masterList,i="All"===e?t:t.filter((function(t){return t.cardType===e}));this.setState({selectedType:e,cardList:i}),this.condenseCardList(i)}},{key:"condenseCardList",value:function(e){e.sort((function(e,t){return e.cardName>t.cardName?1:-1}));var t={};e.map((function(e){t[e.cardName]?t[e.cardName].push(e):t[e.cardName]=[e]})),this.setState({condensedList:t})}},{key:"combineAttributeValues",value:function(e,t){for(var i=[],n=[],a=0;a<e.length;a++)i=i.concat(e[a][t]);n.push(i[0]);for(var c=1;c<i.length;c++)n.includes(i[c])||n.push(i[c]);return n.length>1?n.join(" / "):n[0]}},{key:"combineCardNo",value:function(e){for(var t=[],i=0;i<e.length;i++)t.push(e[i].cardNo);return t.length>1?t.join(" / "):t[0]}},{key:"render",value:function(){var e,t,i,n,a,c,r,s,d,l,o,u=this.state,j=u.cardList,p=u.condensedList,h=u.selectedCard,b=p[h];return void 0!==b&&(e=b[0].cardName,t=b[0].attribute,i=0===b[0].level?null:b[0].level,n=b[0].description,a=b[0].atk,c=b[0].def,r=b.reduce((function(e,t){return e+t.count}),0),s=this.combineCardNo(b),l=this.combineAttributeValues(b,"deck"),d=b[0].type.length>1?b[0].type.join(" / "):p[h][0].type[0],o=this.combineAttributeValues(b,"tag")),Object(m.jsxs)("div",{style:{position:"relative"},children:[Object(m.jsxs)("span",{style:{position:"absolute",width:"100%",marginTop:"10%",marginLeft:"25%"},children:[Object(m.jsx)("button",{id:"allBtn",className:"sortButton selected",onClick:this.onClick,children:"All"}),Object(m.jsx)("button",{id:"monsterBtn",className:"sortButton",onClick:this.onClick,children:"Monster"}),Object(m.jsx)("button",{id:"spellBtn",className:"sortButton",onClick:this.onClick,children:"Spell"}),Object(m.jsx)("button",{id:"trapBtn",className:"sortButton",onClick:this.onClick,children:"Trap"}),Object(m.jsx)("button",{id:"pendulumBtn",className:"sortButton",onClick:this.onClick,children:"Pendulum"}),Object(m.jsx)("button",{id:"fusionBtn",className:"sortButton",onClick:this.onClick,children:"Fusion"}),Object(m.jsx)("button",{id:"xyzBtn",className:"sortButton",onClick:this.onClick,children:"Xyz"}),Object(m.jsx)("button",{id:"synchroBtn",className:"sortButton",onClick:this.onClick,children:"Synchro"}),Object(m.jsx)("button",{id:"linkBtn",className:"sortButton",onClick:this.onClick,children:"Link"})]}),Object(m.jsx)(x,{cardList:p,onSelectedCard:this.handleSelectionChange}),j?Object(m.jsx)("div",{children:Object(m.jsx)(O,{cardInfo:j[j.length-1],cardName:e,attr:t,level:i,desc:n,atk:a,def:c,formattedCardNo:s,formattedTypes:d,formattedDecks:l,formattedTags:o,count:r})}):Object(m.jsx)("div",{})]})}}]),i}(n.Component),y=(i(32),i(33),Object.freeze({AQUA:"Aqua",BEAST:"Beast",BEAST_WARRIOR:"Beast-Warrior",CREATOR_GOD:"Creator God",CYBERSE:"Cyberse",DINOSAUR:"Dinosaur",DIVINE_BEAST:"Divine Beast",DRAGON:"Dragon",FAIRY:"Fairy",FIEND:"Fiend",FISH:"Fish",INSECT:"Insect",MACHINE:"Machine",PLANT:"Plant",PSYCHIC:"Psychic",PYRO:"Pyro",REPTILE:"Reptile",ROCK:"Rock",SEA_SERPENT:"Sea Serpent",SPELLCASTER:"Spellcaster",THUNDER:"Thunder",WARRIOR:"Warrior",WINGED_BEAST:"Winged Beast",WYRM:"Wyrm",ZOMBIE:"Zombie"})),v=Object.freeze({FLIP:"Flip",GEMINI:"Gemini",SPIRIT:"Spirit",TOON:"Toon",UNION:"Union"}),g=Object.freeze({EFFECT:"Effect",NORMAL:"Normal",PENDULUM:"Pendulum",SPECIAL_SUMMON:"Special Summon",TUNER:"Tuner"}),N=i.p+"static/media/level_icon.b0d6fa4f.png",C=i.p+"static/media/attr_fire_icon.f71b71b3.png",k=i.p+"static/media/attr_wind_icon.f4ff73e3.png",R=function(e){Object(h.a)(i,e);var t=Object(b.a)(i);function i(e){return Object(j.a)(this,i),t.call(this,e)}return Object(p.a)(i,[{key:"render",value:function(){var e=Object.values(y),t=Object.values(v),i=Object.values(g);return Object(m.jsx)("div",{style:{position:"relative"},children:Object(m.jsxs)("div",{className:"contentWrapper",children:[Object(m.jsx)("div",{id:"header",style:{textAlign:"center"},children:"Add Card"}),Object(m.jsxs)("div",{id:"description",style:{marginLeft:"35%"},children:[Object(m.jsxs)("ol",{id:"instructions",children:[Object(m.jsx)("li",{children:"Select a card type"}),Object(m.jsx)("li",{children:"Fill in the card information. (All information is required)"}),Object(m.jsx)("li",{children:'Click "Add" to add card to your inventory'})]}),Object(m.jsx)("div",{style:{width:"500px",textAlign:"center"},children:"Cards are stored based on the card number. This number is uneditable, so make sure you've entered it correctly. All other information can be edited at a later time."})]}),Object(m.jsxs)("span",{id:"cardTypeSelection",className:"radioGroup",children:[Object(m.jsx)("input",{type:"radio",id:"monsterRadio",name:"cardTypeRadioGroup",value:"monster"}),Object(m.jsx)("label",{for:"monsterRadio",children:"Monster"}),Object(m.jsx)("input",{type:"radio",id:"spellRadio",name:"cardTypeRadioGroup",value:"spell"}),Object(m.jsx)("label",{for:"spellRadio",children:"Spell"}),Object(m.jsx)("input",{type:"radio",id:"trapRadio",name:"cardTypeRadioGroup",value:"trap"}),Object(m.jsx)("label",{for:"trapRadio",children:"Trap"}),Object(m.jsx)("input",{type:"radio",id:"pendulumRadio",name:"cardTypeRadioGroup",value:"pendulum"}),Object(m.jsx)("label",{for:"pendulumRadio",children:"Pendulum"}),Object(m.jsx)("input",{type:"radio",id:"fusionRadio",name:"cardTypeRadioGroup",value:"fusion"}),Object(m.jsx)("label",{for:"fusionRadio",children:"Fusion"}),Object(m.jsx)("input",{type:"radio",id:"xyzRadio",name:"cardTypeRadioGroup",value:"xyz"}),Object(m.jsx)("label",{for:"xyzRadio",children:"Xyz"}),Object(m.jsx)("input",{type:"radio",id:"synchroRadio",name:"cardTypeRadioGroup",value:"synchro"}),Object(m.jsx)("label",{for:"synchroRadio",children:"Synchro"}),Object(m.jsx)("input",{type:"radio",id:"linkRadio",name:"cardTypeRadioGroup",value:"link"}),Object(m.jsx)("label",{for:"linkRadio",children:"Link"})]}),Object(m.jsxs)("div",{style:{marginLeft:"34%",marginTop:"20px"},children:[Object(m.jsx)("input",{type:"text",placeholder:"Card Number",id:"cardNoInput",className:"basicInput",maxLength:"10",style:{marginRight:"25px"}}),Object(m.jsx)("input",{type:"text",placeholder:"Card Name",id:"cardNameInput",className:"basicInput",maxLength:"50",style:{width:"350px"}})]}),Object(m.jsxs)("div",{style:{marginLeft:"42%",marginTop:"20px"},children:[Object(m.jsx)("label",{for:"levelSelect",style:{verticalAlign:"middle"},children:Object(m.jsx)("img",{src:N,alt:"Monster Level Icon",height:"40px",width:"40px"})}),Object(m.jsxs)("select",{id:"levelSelect",className:"cardInfoSelect",style:{width:"125px",verticalAlign:"middle"},children:[Object(m.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Level"}),[0,1,2,3,4,5,6,7,8,9,10,11,12].map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))]})]}),Object(m.jsxs)("div",{style:{marginLeft:"32%",marginTop:"20px"},children:[Object(m.jsx)("input",{type:"radio",id:"fireRadio",name:"attrRadioGroup",value:"fire",style:{fontSize:"25px"}}),Object(m.jsx)("label",{for:"fireRadio",style:{verticalAlign:"middle"},children:Object(m.jsx)("img",{src:C,alt:"Fire Attribute Icon",height:"40px",width:"40px"})}),Object(m.jsx)("input",{type:"radio",id:"windRadio",name:"attrRadioGroup",value:"wind"}),Object(m.jsx)("label",{for:"windRadio",style:{verticalAlign:"middle"},children:Object(m.jsx)("img",{src:k,alt:"Wind Attribute Icon",height:"40px",width:"40px"})}),Object(m.jsx)("input",{type:"radio",id:"fireRadio",name:"attrRadioGroup",value:"synchro"}),Object(m.jsx)("label",{for:"fireRadio",style:{verticalAlign:"middle"},children:Object(m.jsx)("img",{src:C,alt:"Fire Attribute Icon",height:"40px",width:"40px"})}),Object(m.jsx)("input",{type:"radio",id:"fireRadio",name:"attrRadioGroup",value:"synchro"}),Object(m.jsx)("label",{for:"fireRadio",style:{verticalAlign:"middle"},children:Object(m.jsx)("img",{src:C,alt:"Fire Attribute Icon",height:"40px",width:"40px"})}),Object(m.jsx)("input",{type:"radio",id:"fireRadio",name:"attrRadioGroup",value:"synchro"}),Object(m.jsx)("label",{for:"fireRadio",style:{verticalAlign:"middle"},children:Object(m.jsx)("img",{src:C,alt:"Fire Attribute Icon",height:"40px",width:"40px"})}),Object(m.jsx)("input",{type:"radio",id:"fireRadio",name:"attrRadioGroup",value:"synchro"}),Object(m.jsx)("label",{for:"fireRadio",style:{verticalAlign:"middle"},children:Object(m.jsx)("img",{src:C,alt:"Fire Attribute Icon",height:"40px",width:"40px"})}),Object(m.jsx)("input",{type:"radio",id:"fireRadio",name:"attrRadioGroup",value:"synchro"}),Object(m.jsx)("label",{for:"fireRadio",style:{verticalAlign:"middle"},children:Object(m.jsx)("img",{src:C,alt:"Fire Attribute Icon",height:"40px",width:"40px"})})]}),Object(m.jsxs)("div",{style:{marginLeft:"30%",marginTop:"20px"},children:[Object(m.jsxs)("select",{id:"typeSelect",className:"cardInfoSelect",required:!0,children:[Object(m.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Type"}),e.map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))]}),Object(m.jsxs)("select",{id:"abilitySelect",className:"cardInfoSelect",children:[Object(m.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Ability"}),t.map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))]}),Object(m.jsxs)("select",{id:"classSelect",className:"cardInfoSelect",children:[Object(m.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Class"}),i.map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))]})]})]})})}}]),i}(n.Component),S=i.p+"static/media/millenium_eye_trnp_1.1d937b88.png",L=(i(34),function(e){Object(h.a)(i,e);var t=Object(b.a)(i);function i(e){var n;return Object(j.a)(this,i),(n=t.call(this,e)).state={selected:"None"},n}return Object(p.a)(i,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"menu",children:Object(m.jsxs)("ul",{id:"menuOptions",className:"menuOptions",children:[Object(m.jsx)("li",{children:Object(m.jsxs)(s.b,{className:"menuLink",to:"/add",children:[Object(m.jsx)("img",{src:S,alt:"Add Card",height:"40px",width:"75px"}),"Add Card"]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(s.b,{className:"menuLink",to:"/inventory",children:[Object(m.jsx)("img",{src:S,alt:"Inventory",height:"40px",width:"75px"}),"Inventory"]})}),Object(m.jsx)("li",{children:"Second Card"}),Object(m.jsx)("li",{children:"Third Card"}),Object(m.jsx)("li",{children:"Fourth Card"})]})})}}]),i}(n.Component)),I=function(e){Object(h.a)(i,e);var t=Object(b.a)(i);function i(){return Object(j.a)(this,i),t.apply(this,arguments)}return Object(p.a)(i,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)(L,{})})}}]),i}(n.Component),T=function(){return Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{path:"/inventory",component:f}),Object(m.jsx)(d.a,{path:"/add",component:R}),Object(m.jsx)(d.a,{path:"/",component:I})]})};function A(){return Object(m.jsx)(s.a,{children:Object(m.jsx)(T,{})})}r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(s.a,{routes:T,children:Object(m.jsx)(A,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d8e5e94f.chunk.js.map