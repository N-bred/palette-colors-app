(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{250:function(e,a,t){e.exports=t(499)},255:function(e,a,t){},318:function(e,a,t){},325:function(e,a,t){},327:function(e,a,t){},499:function(e,a,t){"use strict";t.r(a);var o,n,r,l,c,i,s,m,d=t(0),u=t.n(d),p=t(6),f=t.n(p),h=(t(255),t(28)),g=t(21),b=t(18),v=t(24),y=t(22),C=t(61),E=t(25),w=t(52),j=t(62),O=t(223),S=t(53),k=t.n(S),N=t(505),P=t(9),x=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},B={ColorBox:(o={position:"relative",cursor:"pointer",width:"20%",height:"25%",margin:"0 auto",display:"inline-block"},Object(P.a)(o,x("lg"),{width:"25%",height:"20%"}),Object(P.a)(o,x("md"),{width:"50%",height:"10%"}),Object(P.a)(o,x("sm"),{width:"100%",height:"5%"}),o),ColorBoxBig:(n={height:"45%"},Object(P.a)(n,x("md"),{height:"calc(100%/5.6)"}),Object(P.a)(n,x("sm"),{height:"calc(100%/11.1)"}),n),seeMore:{textTransform:"uppercase",padding:"1rem",position:"absolute",fontSize:"1.2rem",bottom:"0",right:"0",background:"rgba(255, 255, 255, 0.349)"},boxName:{textTransform:"uppercase",padding:"1rem",position:"absolute",fontSize:"1.2rem",bottom:"0",left:"0"},linkSeeMore:{textDecoration:"none"},copyContainer:Object(P.a)({display:"flex",justifyContent:"center",alignItems:"center",height:"100%","&:hover > button":{opacity:"1",pointerEvents:"all"}},x("xs"),{"&:hover > button":{opacity:"1",pointerEvents:"none"}}),copyButton:{background:"rgba(255, 255, 255, 0.4)",border:"none",padding:"0.5rem 2rem",color:"#444",cursor:"pointer",opacity:"0",transitionProperty:"background, transform",transition:"0.3s ease",pointerEvents:"none",borderRadius:"3px",textTransform:"uppercase","&:hover":{background:"rgba(255, 255, 255, 0.6)",transform:"translateY(-0.3rem)"},"&:focus":{outline:"none"},"&:active":{transform:"translateY(-0.1rem)"}},goBackButton:{background:"rgba(255, 255, 255, 0.4)",border:"none",padding:"0.5rem 2rem",cursor:"pointer",transitionProperty:"background, transform",transition:"0.3s ease",borderRadius:"3px",textTransform:"uppercase",color:"#fff",opacity:"1",pointerEvents:"all","&:hover":{background:"rgba(255, 255, 255, 0.6)",transform:"translateY(-0.3rem)"},"&:focus":{outline:"none"},"&:active":{transform:"translateY(-0.1rem)"}},copyOverlay:{position:"absolute",width:"100%",height:"100%",transition:"transform 500ms ease-in",zIndex:"-1",transform:"scale(1)",opacity:"0"},copyOverlayShow:(r={transform:"scale(20)",zIndex:"10",display:"block",opacity:"1"},Object(P.a)(r,x("md"),{transform:"scale(30)"}),Object(P.a)(r,x("sm"),{transform:"scale(40)"}),r),copyMsg:{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:"0",left:"0",bottom:"0",right:"0",flexDirection:"column",zIndex:"-1",opacity:"0",transform:"scale(0)",transition:"transform 100ms ease 350ms","& p":{fontSize:"1.1rem"}},copyMsgShow:(l={opacity:"1",zIndex:"20",transform:"scale(6)"},Object(P.a)(l,x("md"),{transform:"scale(4)"}),Object(P.a)(l,x("sm"),{transform:"scale(3)"}),Object(P.a)(l,x("xs"),{transform:"scale(2)"}),l),textWhite:{color:"#fff"},textBlack:{color:"#444"}},F=function(e){function a(){var e,t;Object(g.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(v.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).state={isCopying:!1},t.changeCopyState=function(){t.setState({isCopying:!0},function(){setTimeout(function(){t.setState({isCopying:!1})},1500)})},t}return Object(E.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){document.documentElement.style.setProperty("--overflowStyles","hidden")}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.color,o=e.id,n=e.paletteId,r=e.showMore,l=e.isBig,c=e.goBack,i=e.goBackMethod,s=e.classes,m=this.state.isCopying,d="".concat(k()(t).luminance()<.5?s.textWhite:s.textBlack),p=c?u.a.createElement("div",{className:s.copyContainer,onClick:i},u.a.createElement("button",{className:s.goBackButton},"Go Back")):u.a.createElement(O.CopyToClipboard,{text:t,onCopy:this.changeCopyState},u.a.createElement("div",{className:s.copyContainer},u.a.createElement("button",{className:"".concat(s.copyButton," ").concat(d)},"Copy"))),f=r&&u.a.createElement(w.b,{className:s.linkSeeMore,to:"/palette/".concat(n,"/").concat(o)},u.a.createElement("span",{className:"".concat(s.seeMore," ").concat(d)},"More"));return u.a.createElement("div",{className:"".concat(s.ColorBox," ").concat(l&&s.ColorBoxBig),style:{background:t}},u.a.createElement("div",{style:{background:t},className:"".concat(s.copyOverlay," ").concat(m&&s.copyOverlayShow)}),u.a.createElement("div",{className:"".concat(s.copyMsg," ").concat(m&&s.copyMsgShow," ").concat(d)},u.a.createElement("h1",null,"Copied!"),u.a.createElement("p",null,t)),p,u.a.createElement("span",{className:"".concat(s.boxName," ").concat(d)},a),f)}}]),a}(d.Component),D=Object(N.a)(B)(F),I=t(238),A=t(554),L=t(556),G=(t(317),t(318),function(e){function a(){return Object(g.a)(this,a),Object(v.a)(this,Object(y.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.handleColorChange,n=e.format,r=t&&u.a.createElement("div",{className:"Slider"},u.a.createElement("p",null,"Level: ",u.a.createElement("span",null,a)),u.a.createElement(I.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}));return u.a.createElement("div",{className:"Navbar"},u.a.createElement("div",{className:"Logo"},u.a.createElement(w.b,{to:"/"},"React Palettes")),r,u.a.createElement("div",{className:"Selection"},u.a.createElement(A.a,{onChange:o,value:n},u.a.createElement(L.a,{value:"hex"},"HEX - #FFFFFF"),u.a.createElement(L.a,{value:"rgb"},"RGB - rgb(255,255,255)"),u.a.createElement(L.a,{value:"rgba"},"RGBA - rgba(255,255,255,1)"))))}}]),a}(d.Component)),M=(t(325),function(e){function a(){var e,t;Object(g.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(v.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).state={level:500,format:"hex"},t.changeLevel=function(e){t.setState({level:e})},t.handleColorChange=function(e){t.setState({format:e.target.value})},t}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.state,a=e.level,t=e.format,o=this.props.palette,n=o.colors[a].map(function(e){return u.a.createElement(D,{key:e.name,name:e.name,color:e[t],id:e.id,paletteId:o.id,showMore:!0})});return u.a.createElement("div",{className:"Palette"},u.a.createElement(G,{level:a,changeLevel:this.changeLevel,handleColorChange:this.handleColorChange,format:t}),u.a.createElement("div",{className:"Palette-colors"},n),u.a.createElement("footer",{className:"palette-footer"},u.a.createElement("h3",null,o.paletteName," - ",o.emoji)))}}]),a}(d.Component)),T={root:{backgroundColor:"#fff",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden","&:hover":{cursor:"pointer"}},colors:{backgroundColor:"#fff",height:"150px",width:"100%",overflow:"hidden",display:"flex",flexWrap:"wrap",padding:".2rem",borderRadius:"5px"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem",position:"relative",fontSize:"1.6rem",fontWeight:"normal"},emoji:{marginLeft:"1rem",fontSize:"1.5rem"},miniBox:{height:"25%",flex:"0 0 20%",position:"relative"},delete:{position:"absolute",top:"0",right:"0",zIndex:"50",fontSize:"3.5rem",backgroundColor:"#e11d23",color:"#fff",opacity:"0",transition:".3s opacity ease-in",cursor:"pointer"},paletteContainer:{position:"relative","&:hover svg":{opacity:"1"}}},R=t(119),z=t.n(R),U=function(e){function a(){var e,t;Object(g.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(v.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).handleClick=function(){t.props.handleGoToPalette(t.props.id)},t.handleDelete=function(){t.props.removeSelf(t.props.id)},t}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors.map(function(e){return u.a.createElement("div",{key:e.name,style:{background:e.color},className:a.miniBox})});return u.a.createElement("div",{className:a.paletteContainer},u.a.createElement(z.a,{className:a.delete,onClick:this.handleDelete}),u.a.createElement("div",{className:a.root,onClick:this.handleClick},u.a.createElement("div",{className:a.colors},n),u.a.createElement("h5",{className:a.title},t," ",u.a.createElement("span",{className:a.emoji},o))))}}]),a}(d.PureComponent),W=Object(N.a)(T)(U),q={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"},".fade-enter":{opacity:0},".fade-enter-active":{opacity:1,transition:"opacity 500ms ease-out"}},root:{minHeight:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center"},link:{textDecoration:"none",color:"#000"},container:(c={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(P.a)(c,x("md"),{width:"70%"}),Object(P.a)(c,x("sm"),{width:"90%"}),c),nav:Object(P.a)({display:"flex",width:"100%",justifyContent:"space-between",color:"#fff","& h1":{fontWeight:"lighter",fontSize:"2.8rem",margin:"0 1rem"},margin:"1.5rem 0"},x("sm"),{flexDirection:"column",alignItems:"center",justifyContent:"center"}),palettes:(i={width:"100%",display:"grid",gridTemplateColumns:"repeat(3,30%)",gridGap:"3.5rem",justifyContent:"center"},Object(P.a)(i,x("md"),{gridTemplateColumns:"repeat(2,50%)",gridGap:"2rem"}),Object(P.a)(i,x("sm"),{gridTemplateColumns:"repeat(1,100%)",gridGap:"2.5rem",width:"60%",margin:"0 auto"}),i),link_new:Object(P.a)({color:"#fff",fontWeight:"lighter",textDecoration:"none",display:"flex",alignItems:"center",margin:"0 1rem",fontSize:"1.6rem","&:hover":{textDecoration:"underline"}},x("sm"),{margin:"1rem 0"}),refillContainer:(s={height:"200px",position:"fixed",top:"7.5%",left:"5%"},Object(P.a)(s,x("md"),{top:"90%",left:"1%"}),Object(P.a)(s,x("sm"),{display:"none"}),s)},H=t(543),V=t(555),J=t(542),Y=function(e){function a(){var e,t;Object(g.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(v.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).goToPalette=function(e){t.props.history.push("/palette/".concat(e))},t}return Object(E.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){document.documentElement.style.setProperty("--overflowStyles","auto")}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=a.removePalette,r=a.deleted,l=a.refillPalettes;return u.a.createElement("div",{className:o.root},u.a.createElement("div",{className:o.container},u.a.createElement("nav",{className:o.nav},u.a.createElement("h1",null,"UI Color Palettes"),u.a.createElement(w.b,{className:o.link_new,to:"/palette/new"},"Create new Palette")),u.a.createElement(V.a,{className:o.palettes},t.map(function(a){return u.a.createElement(J.a,{key:a.id,classNames:"fade",timeout:500},u.a.createElement(W,Object.assign({key:a.id},a,{handleGoToPalette:e.goToPalette,id:a.id,removeSelf:n})))})),u.a.createElement("div",{className:o.refillContainer},r&&u.a.createElement(H.a,{variant:"contained",color:"default",onClick:l},"Refill Palettes!"))))}}]),a}(d.Component),K=Object(N.a)(q)(Y),_=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"},{name:"reddish",color:"#D92B2B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Q=(t(327),function(e){return u.a.createElement("section",{className:"page"},e.children)}),X=[50,100,200,300,400,500,600,700,800,900],$=function(e,a){return k.a.scale(function(e){return[k()(e).darken(1.4).hex(),e,"#fff"]}(e)).mode("lab").colors(a)},Z=function(e){for(var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=0,o=X;t<o.length;t++){var n=o[t];a.colors[n]=[]}var r=!0,l=!1,c=void 0;try{for(var i,s=e.colors[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var m=i.value,d=$(m.color,10).reverse();for(var u in d)a.colors[X[u]].push({name:"".concat(m.name," ").concat(X[u]),id:m.name.toLowerCase().replace(/ /g,"-"),hex:d[u],rgb:k()(d[u]).css(),rgba:k()(d[u]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(p){l=!0,c=p}finally{try{r||null==s.return||s.return()}finally{if(l)throw c}}return a},ee=function(e){function a(){var e,t;Object(g.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(v.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).state={format:"hex"},t.handleColorChange=function(e){t.setState({format:e.target.value})},t.handleGoBack=function(){t.props.history.push("/palette/".concat(t.props.palette.id))},t.findColors=function(e,a){var t=[];for(var o in e.colors){var n=e.colors[o].filter(function(e){return e.id.toLowerCase()===a.toLowerCase()&&e});t.push.apply(t,Object(h.a)(n))}return t.slice(1)},t}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props,a=e.palette,t=e.id,o=this.state.format,n=this.findColors(a,t).map(function(e){return u.a.createElement(D,{key:e.name,name:e.name,color:e[o],id:e.id,paletteId:a.id,isBig:!0})});return u.a.createElement("div",{style:{height:"100vh",background:"#fff"}},u.a.createElement(G,{handleColorChange:this.handleColorChange,format:o}),n,u.a.createElement(D,{color:"#000",isBig:!0,goBack:!0,goBackMethod:this.handleGoBack}),u.a.createElement("footer",{className:"palette-footer"},u.a.createElement("h3",null,"".concat(a.paletteName,": ").concat(t.toUpperCase()," - ").concat(a.emoji," "))))}}]),a}(d.Component),ae=t(71),te=t(4),oe=t(120),ne={root:(m={width:"20%",height:"calc(100%/4 + 1px)",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(P.a)(m,x("lg"),{width:"25%",height:"20%"}),Object(P.a)(m,x("md"),{width:"50%",height:"10%"}),Object(P.a)(m,x("sm"),{width:"100%",height:"5%"}),m),boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return k()(e.color).luminance()<.5?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.6)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"1.6rem",display:"flex",justifyContent:"space-between",alignItems:"center"},deleteIcon:{transition:"all 0.3s ease-in-out",fontSize:"2.6rem"}},re=Object(oe.SortableElement)(function(e){var a=e.classes,t=e.handleClick,o=e.name,n=e.color;return u.a.createElement("div",{className:a.root,style:{backgroundColor:n}},u.a.createElement("div",{className:a.boxContent},u.a.createElement("span",null," ",o),u.a.createElement(z.a,{className:a.deleteIcon,onClick:t})))}),le=Object(N.a)(ne)(re),ce=Object(oe.SortableContainer)(function(e){var a=e.colors,t=e.removeColor,o=e.classes;return u.a.createElement("div",{className:o.root},a.map(function(e,a){return u.a.createElement(le,{index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})}))}),ie=Object(N.a)({root:{height:"100%",backgroundColor:"#fff"}})(ce),se=t(50),me=t(233),de=t.n(me),ue=t(549),pe=t(550),fe=t(551),he=t(242),ge=t(552),be=t(234),ve=t.n(be),ye=t(544),Ce=t(547),Ee=t(546),we=t(548),je=t(545),Oe=t(239);t(336);function Se(e){var a=e.savePalette,t=e.newPaletteName,o=e.handleNewPaletteName,n=e.showingForm,r=e.handleShowForm,l=e.classes,c=e.handleShowPicker,i=e.showingEmojiPicker,s=e.handleEmoji;function m(){r()}return u.a.createElement("div",null,i?u.a.createElement(ye.a,{open:i,onClose:m},u.a.createElement(je.a,{id:"form-dialog-title",className:l.modalTitle,variant:"h2",style:{textAlign:"center"}},"Pick an emoji for your Palette"),u.a.createElement(Ee.a,null,u.a.createElement(Oe.a,{set:"twitter",onSelect:function(e){s(e)}})),u.a.createElement(Ce.a,null,u.a.createElement(H.a,{color:"primary",onClick:function(){r(),a()}},"Save"))):u.a.createElement(ye.a,{open:n,onClose:m,"aria-labelledby":"form-dialog-title"},u.a.createElement(je.a,{id:"form-dialog-title",className:l.modalTitle,variant:"h2"},"New Palette"),u.a.createElement(se.ValidatorForm,{onSubmit:function(){c()}},u.a.createElement(Ee.a,null,u.a.createElement(we.a,{variant:"h5"},"Please enter a name for you new palette. Make sure it's unique!"),u.a.createElement(se.TextValidator,{label:"Palette Name",value:t,onChange:o,validators:["required","isPaletteNameUnique"],className:l.modalInput,fullWidth:!0,autoFocus:!0,errorMessages:["This field is required","Palettes need to have an unique name"]})),u.a.createElement(Ce.a,null,u.a.createElement(H.a,{onClick:m,color:"primary"},"Cancel"),u.a.createElement(H.a,{color:"primary",variant:"contained",type:"submit"},"Next")))))}var ke,Ne=function(e){function a(){var e,t;Object(g.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(v.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).state={open:!0,showingForm:!1,showingEmojiPicker:!1},t.handleShowForm=function(){t.setState({showingForm:!t.state.showingForm,showingEmojiPicker:!1})},t.handleShowPicker=function(){t.setState({showingEmojiPicker:!0})},t.closeShowEmojiPicker=function(){t.setState({showingEmojiPicker:!1})},t}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.handleDrawerOpen,o=e.savePalette,n=e.newPaletteName,r=e.handleNewPaletteName,l=e.history,c=e.open,i=e.handleEmoji;return u.a.createElement(u.a.Fragment,null,u.a.createElement(ue.a,null),u.a.createElement(pe.a,{color:"default",position:"fixed",className:Object(te.a)(a.appBar,Object(P.a)({},a.appBarShift,c))},u.a.createElement(fe.a,{className:a.toolbar},u.a.createElement(ge.a,{color:"inherit","aria-label":"Open drawer",onClick:t,edge:"start",className:Object(te.a)(a.menuButton,c&&a.hide)},u.a.createElement(ve.a,null)),u.a.createElement(he.a,{variant:"h4",noWrap:!0,className:a.navTitle},"Create a Palette"),u.a.createElement("div",{className:a.navBtns},u.a.createElement(H.a,{variant:"contained",color:"primary",type:"submit",onClick:this.handleShowForm},"Save Palette"),this.state.showingForm&&u.a.createElement(Se,{savePalette:o,newPaletteName:n,handleNewPaletteName:r,showingForm:this.state.showingForm,handleShowForm:this.handleShowForm,classes:a,handleShowPicker:this.handleShowPicker,showingEmojiPicker:this.state.showingEmojiPicker,handleEmoji:i}),u.a.createElement(H.a,{variant:"contained",color:"secondary",onClick:function(){return l.push("/")},className:a.goBackBtn},"Go back")))))}}]),a}(d.Component),Pe=t(235),xe=t(501),Be=window.innerWidth;ke=Be<=575.98?200:Be<=991.98?250:400;var Fe=Object(xe.a)(function(e){var a,t;return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between"},appBarShift:{width:"calc(100% - ".concat(ke,"px)"),marginLeft:ke,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:ke,flexShrink:0},drawerPaper:{width:ke},drawerHeader:Object(Pe.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-ke},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},navBtns:(a={display:"flex",justifyContent:"space-between",alignItems:"center",marginLeft:"auto","& form":{display:"flex",alignItems:"center"}},Object(P.a)(a,x("sm"),{justifyContent:"space-evenly"}),Object(P.a)(a,x("xs"),{"& > button":{padding:".5rem 1rem"}}),a),toolbar:{width:"100%"},goBackBtn:{alignItems:"center",margin:"0 1.5rem"},colorPickerContainer:{display:"flex",flexDirection:"column",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"},btnsContainer:Object(P.a)({width:"100%",display:"flex",justifyContent:"space-evenly",margin:"2rem 0",alignItems:"center"},x("md"),{flexDirection:"column","& > button":{margin:".5rem 0"}}),colorPicker:Object(P.a)({width:"90% !important"},x("sm"),{width:"80% !important"}),colorPickerForm:Object(P.a)({width:"90%",display:"flex",justifyContent:"center",margin:"2rem 0",flexDirection:"column","& label":{fontSize:"1.4rem"}},x("sm"),{width:"80%"}),navTitle:Object(P.a)({},x("sm"),{display:"none"}),modalInput:{"& label":{fontSize:"1.4rem"}},modalTitle:{"& h2":{fontSize:"1.9rem"}},drawerTitle:(t={},Object(P.a)(t,x("md"),{fontSize:"2.3rem"}),Object(P.a)(t,x("sm"),{fontSize:"1.8rem"}),t)}}),De=t(557),Ie=t(553),Ae=t(237),Le=t.n(Ae),Ge=t(236),Me=function(e){function a(){return Object(g.a)(this,a),Object(v.a)(this,Object(y.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props,a=e.clearColors,t=e.randomColor,o=e.disabledButtons,n=e.handleColorChange,r=e.actualColor,l=e.createColors,c=e.newName,i=e.handleNewName,s=e.classes;return u.a.createElement(u.a.Fragment,null,u.a.createElement(he.a,{variant:"h3",className:s.drawerTitle},"Desing your palette"),u.a.createElement("div",{className:s.btnsContainer},u.a.createElement(H.a,{variant:"contained",color:"secondary",onClick:a},"Clear Palette"),u.a.createElement(H.a,{variant:"contained",color:"primary",onClick:t,disabled:o},"Random color")),u.a.createElement(Ge.ChromePicker,{onChangeComplete:n,color:r,className:s.colorPicker}),u.a.createElement(se.ValidatorForm,{onSubmit:l,className:s.colorPickerForm},u.a.createElement(se.TextValidator,{label:"Choose a name",value:c,onChange:i,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["This field is required","The color name must be unique","The color must be unique"]}),u.a.createElement(H.a,{type:"submit",variant:"contained",color:"primary",style:{background:o?"grey":r,color:"#fff",margin:"1.5rem 0"},disabled:o},o?"Palette Full":"Add Color")))}}]),a}(d.Component),Te=function(e){function a(){return Object(g.a)(this,a),Object(v.a)(this,Object(y.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.handleDrawerClose,n=e.clearColors,r=e.randomColor,l=e.disabledButtons,c=e.handleColorChange,i=e.actualColor,s=e.createColors,m=e.newName,d=e.handleNewName;return u.a.createElement(u.a.Fragment,null,u.a.createElement(De.a,{className:a.drawer,variant:"persistent",anchor:"left",open:t,classes:{paper:a.drawerPaper}},u.a.createElement("div",{className:a.drawerHeader},u.a.createElement(ge.a,{onClick:o},u.a.createElement(Le.a,null))),u.a.createElement(Ie.a,null),u.a.createElement("div",{className:a.colorPickerContainer},u.a.createElement(Me,{clearColors:n,randomColor:r,disabledButtons:l,handleColorChange:c,actualColor:i,createColors:s,newName:m,handleNewName:d,classes:a}))))}}]),a}(d.Component);function Re(e){var a=Fe(),t=window.innerWidth<=575.98,o=u.a.useState(!t),n=Object(ae.a)(o,2),r=n[0],l=n[1],c=u.a.useState("#03a2ec"),i=Object(ae.a)(c,2),s=i[0],m=i[1],p=u.a.useState("\ud83e\udd19"),f=Object(ae.a)(p,2),g=f[0],b=f[1],v=u.a.useState([{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"},{name:"reddish",color:"#D92B2B"}].slice(0,-1)),y=Object(ae.a)(v,2),C=y[0],E=y[1],w=u.a.useState(""),j=Object(ae.a)(w,2),O=j[0],S=j[1],k=u.a.useState(""),N=Object(ae.a)(k,2),x=N[0],B=N[1];Object(d.useEffect)(function(){document.documentElement.style.setProperty("--overflowStyles","hidden")},[]),Object(d.useEffect)(function(){se.ValidatorForm.addValidationRule("isColorNameUnique",function(e){return C.every(function(a){return a.name.toLowerCase()!==e.toLowerCase()})}),se.ValidatorForm.addValidationRule("isColorUnique",function(){return C.every(function(e){return e.color!==s})}),se.ValidatorForm.addValidationRule("isPaletteNameUnique",function(){return e.palettes.every(function(e){return e.paletteName.toLowerCase()!==x.toLowerCase()})})});var F=C.length===e.maxColors;return u.a.createElement("div",{className:a.root},u.a.createElement(Ne,{classes:a,handleDrawerOpen:function(){l(!0)},savePalette:function(){var a={paletteName:x,id:x.toLowerCase().replace(/ /g,"-"),emoji:g,colors:C};e.savePalette(a),setTimeout(function(){e.history.push("/")},100)},newPaletteName:x,handleNewPaletteName:function(e){B(e.target.value)},history:e.history,open:r,handleEmoji:function(e){b(e.native)}}),u.a.createElement(Te,{classes:a,open:r,handleDrawerClose:function(){l(!1)},clearColors:function(){E([])},randomColor:function(){for(var a,t,o=e.palettes.map(function(e){return e.colors}).flat(),n=!0;n;)a=~~(Math.random()*o.length),t=o[a],n=C.some(function(e){return e.name===t.name});E([].concat(Object(h.a)(C),[t]))},disabledButtons:F,handleColorChange:function(e){m(e.hex)},actualColor:s,createColors:function(){var e={color:s,name:O};E([].concat(Object(h.a)(C),[e])),m("#446688"),S("")},newName:O,handleNewName:function(e){S(e.target.value)}}),u.a.createElement("main",{className:Object(te.a)(a.content,Object(P.a)({},a.contentShift,r))},u.a.createElement("div",{className:a.drawerHeader}),u.a.createElement(ie,{colors:C,removeColor:function(e){E(Object(h.a)(C.filter(function(a){return a.name!==e})))},axis:"xy",onSortEnd:function(e){var a=e.oldIndex,t=e.newIndex,o=C;E(Object(h.a)(de()(o,a,t)))},distance:10})))}var ze=function(e){function a(e){var t;return Object(g.a)(this,a),(t=Object(v.a)(this,Object(y.a)(a).call(this,e))).findPaletteByid=function(e){var a=t.state.palettes.find(function(a){return a.id.toLowerCase()===e.toLowerCase()});return Z(a)},t.savePalette=function(e){if(localStorage.getItem("newPalettes")){var a=[].concat(Object(h.a)(JSON.parse(localStorage.getItem("newPalettes"))),[e]);localStorage.setItem("newPalettes",JSON.stringify(Object(h.a)(a)))}else localStorage.setItem("newPalettes",JSON.stringify([e]));t.setState({palettes:[].concat(Object(h.a)(t.state.palettes),[e])})},t.removePalette=function(e){var a=t.state.palettes.filter(function(a){return a.id!==e});t.setState(function(){return{palettes:a,deleted:!0}}),localStorage.setItem("deleted",!0)},t.refillPalettes=function(){t.setState(function(){return localStorage.getItem("newPalettes")?{palettes:[].concat(Object(h.a)(_),Object(h.a)(JSON.parse(localStorage.getItem("newPalettes")))),deleted:!1}:{palettes:Object(h.a)(_),deleted:!1}}),localStorage.setItem("deleted",!1)},t.state={palettes:t.validateLSPalettes(),deleted:t.validateLSDeleted()},t.validateLS=t.validateLSPalettes.bind(Object(C.a)(t)),t.validateLS=t.validateLSDeleted.bind(Object(C.a)(t)),t}return Object(E.a)(a,e),Object(b.a)(a,[{key:"validateLSPalettes",value:function(){return localStorage.getItem("palettes")?JSON.parse(localStorage.getItem("palettes")):_}},{key:"validateLSDeleted",value:function(){return!!localStorage.getItem("deleted")&&JSON.parse(localStorage.getItem("deleted"))}},{key:"componentDidMount",value:function(){localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return u.a.createElement(w.a,{basename:"/"},u.a.createElement(j.b,{render:function(a){var t=a.location;return u.a.createElement(V.a,null,u.a.createElement(J.a,{key:t.key,classNames:"page",timeout:300},u.a.createElement(j.d,{location:t},u.a.createElement(j.b,{exact:!0,path:"/",render:function(a){return u.a.createElement(Q,null,u.a.createElement(K,Object.assign({palettes:e.state.palettes,removePalette:e.removePalette,deleted:e.state.deleted,refillPalettes:e.refillPalettes},a)))}}),u.a.createElement(j.b,{exact:!0,path:"/palette/new",render:function(a){return u.a.createElement(Q,null,u.a.createElement(Re,Object.assign({savePalette:e.savePalette},a,{palettes:e.state.palettes,maxColors:20})))}}),u.a.createElement(j.b,{exact:!0,path:"/palette/:id",render:function(a){return u.a.createElement(Q,null,u.a.createElement(M,{palette:e.findPaletteByid(a.match.params.id)}))}}),u.a.createElement(j.b,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return u.a.createElement(Q,null,u.a.createElement(ee,Object.assign({palette:e.findPaletteByid(a.match.params.paletteId)},a,{id:a.match.params.colorId.toLowerCase()})))}}),u.a.createElement(j.b,{exact:!0,path:"",render:function(){return u.a.createElement(j.a,{to:"/"})}}))))}}))}}]),a}(d.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.a.render(u.a.createElement(ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[250,1,2]]]);
//# sourceMappingURL=main.acbc2447.chunk.js.map