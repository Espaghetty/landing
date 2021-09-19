_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[77],{fVJL:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("cpVT"),o=a("dhJC"),r=(a("q1tI"),a("7ljp")),i=a("aArQ");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var s={__resourcePath:"docs/server/t4/loading-mods.md",__scans:{},title:"Loading mods on a dedicated server",layout:"index"},d={frontMatter:s},p=i.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(p,c(c(c({},d),a),{},{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",c({},{id:"loading-mods-on-a-dedicated-server"}),"Loading mods on a dedicated server",Object(r.b)("a",c({parentName:"h1"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#loading-mods-on-a-dedicated-server"}),Object(r.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(r.b)("h2",c({},{id:"where-do-i-put-the-mod"}),"Where do I put the mod?",Object(r.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#where-do-i-put-the-mod"}),Object(r.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Navigate to the T4 Plutonium Folder by pressing ",Object(r.b)("inlineCode",{parentName:"p"},"Win+R")," and pasting ",Object(r.b)("inlineCode",{parentName:"p"},"%localappdata%\\Plutonium\\storage\\t4")," into it, and hitting Ok.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a folder called ",Object(r.b)("inlineCode",{parentName:"p"},"mods")))),Object(r.b)("p",null,Object(r.b)("img",c({parentName:"p"},{src:"/images/docs/server/t4/loading-mods/Zzpf3O5.png",alt:"img"}))),Object(r.b)("ol",c({},{start:3}),Object(r.b)("li",{parentName:"ol"},"Place any mods in that folder.")),Object(r.b)("hr",null),Object(r.b)("h2",c({},{id:"editing-your-startbat-file"}),"Editing your start.bat file",Object(r.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#editing-your-startbat-file"}),Object(r.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(r.b)("p",null,"Next, open your server's start.bat file and edit the line that says ",Object(r.b)("inlineCode",{parentName:"p"},'set mod=""')," to add your mod. For example, if your mod is called ",Object(r.b)("inlineCode",{parentName:"p"},"mp_mymod")," that line should say: ",Object(r.b)("inlineCode",{parentName:"p"},'set mod="mods/mp_mymod"')),Object(r.b)("p",null,Object(r.b)("img",c({parentName:"p"},{src:"/images/docs/server/t4/loading-mods/O3nMhCZ.png",alt:"Screenie"}))),Object(r.b)("hr",null),Object(r.b)("h2",c({},{id:"loading-custom-maps-mp"}),"Loading Custom Maps (MP)",Object(r.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#loading-custom-maps-mp"}),Object(r.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Navigate to the T4 Plutonium Folder by pressing ",Object(r.b)("inlineCode",{parentName:"p"},"Win+R")," and pasting ",Object(r.b)("inlineCode",{parentName:"p"},"%localappdata%\\Plutonium\\storage\\t4")," into it, and hitting Ok.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a folder called ",Object(r.b)("inlineCode",{parentName:"p"},"mods")))),Object(r.b)("p",null,Object(r.b)("img",c({parentName:"p"},{src:"/images/docs/server/t4/loading-mods/Zzpf3O5.png",alt:"img"}))),Object(r.b)("ol",c({},{start:3}),Object(r.b)("li",{parentName:"ol"},"Place any custom maps in that folder.")),Object(r.b)("p",null,"Once the map is in the correct place, edit your server configuration to use it in your map rotation, and if you aren't already running a mod, set one in your start batch file. (Example: ",Object(r.b)("inlineCode",{parentName:"p"},'set mod="mods/mp_custommaps"'),")"),Object(r.b)("p",null,"Note: If you don't have any mods and just want to load custom MP maps, loading a blank/dummy mod like above works just fine."),Object(r.b)("hr",null),Object(r.b)("h2",c({},{id:"setting-up-fastdl"}),"Setting up FastDL",Object(r.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#setting-up-fastdl"}),Object(r.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(r.b)("p",null,"If you want to setup FastDL (recommended) to allow players to download your mod quicker, see ",Object(r.b)("a",c({parentName:"p"},{href:"/docs/server/t4/fastdl"}),"Setting up FastDL"),"."))}b.isMDXComponent=!0},"n+Yf":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/server/t4/loading-mods",function(){return a("fVJL")}])}},[["n+Yf",0,1,2,3,4,5,6]]]);