import{_ as a,l as o,F as i,k as n,G as p}from"../app.DTz0yk7C.js";import{p as m}from"./gitGraph-YCYPL57B.DWvTVYvF.js";import"./framework.CtD3w6uS.js";import"./commonjsHelpers.D6yTTuv9.js";import"./theme.8ezkG7UX.js";import"./baseUniq.DlCoihzf.js";import"./isSymbol.DnU6SLKZ.js";import"./basePickBy.B5X47RAH.js";import"./toFinite.CFYyTVp8.js";import"./clone.TcsJFy_f.js";var g={parse:a(async r=>{const t=await m("info",r);o.debug(t)},"parse")},v={version:p},d=a(()=>v.version,"getVersion"),c={getVersion:d},l=a((r,t,s)=>{o.debug(`rendering info diagram
`+r);const e=i(t);n(e,100,400,!0),e.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${s}`)},"draw"),f={draw:l},V={parser:g,db:c,renderer:f};export{V as diagram};
