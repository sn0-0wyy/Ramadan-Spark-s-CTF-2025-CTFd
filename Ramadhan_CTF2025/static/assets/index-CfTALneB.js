import{u as l,i as e,a as c,b as o,c as f,d as u,e as r,f as $,g as b,h as m,j as d,k as j,l as O,m as g}from"./echarts-B9qlSbt8.js";function h(n,t){for(const s of Object.keys(t))t[s]instanceof Object&&Object.assign(t[s],h(n[s],t[s]));return Object.assign(n||{},t),n}function p(n){let t=n.concat();for(let s=0;s<n.length;s++)t[s]=n.slice(0,s+1).reduce(function(a,i){return a+i});return t}l([c,o,f,u,r,$,b,m,d,j,O,g]);function v(n,t){let s=e(n);s.setOption(t,!0),window.addEventListener("resize",()=>{s&&s.resize()})}export{p as c,v as e,h as m};
