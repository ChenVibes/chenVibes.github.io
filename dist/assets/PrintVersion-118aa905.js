import{f as o,j as t,r as c,o as r,l as a,w as i,a as p}from"./app-2f8c304a.js";import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";const d="mo7-blog",u="1.4.0",_="墨七的个人博客",v="MIT",m="module",f={build:"vuepress build src",dev:"vuepress dev src --clean-cache",preview:"go run ./_shell/main.go ",update:"pnpm dlx vp-update",sync:"./_shell/GitSync.sh",deploy:"./_shell/Deploy.sh"},h={"@vuepress/client":"2.0.0-beta.63","@vuepress/plugin-register-components":"2.0.0-beta.58",aplayer:"^1.10.1",axios:"^1.4.0",vue:"^3.3.4",vuepress:"2.0.0-beta.63","vuepress-theme-hope":"2.0.0-beta.226"},y={"@types/store":"^2.0.2","nodejs-jieba":"^0.0.2",store:"^2.0.12","vue-router":"^4.2.2"},b={name:d,version:u,description:_,license:v,type:m,scripts:f,devDependencies:h,dependencies:y},g=p("div",{class:"none"},"版本打印",-1),x=`   
███╗   ███╗ ██████╗ ███████╗
████╗ ████║██╔═══██╗╚════██║
██╔████╔██║██║   ██║    ██╔╝
██║╚██╔╝██║██║   ██║   ██╔╝ 
██║ ╚═╝ ██║╚██████╔╝   ██║  
╚═╝     ╚═╝ ╚═════╝    ╚═╝`,P=o({__name:"PrintVersion",setup(C){const e=()=>{console.info(x+b.version)};return t(()=>{e()}),(s,k)=>{const n=c("ClientOnly");return r(),a(n,null,{default:i(()=>[g]),_:1})}}}),j=l(P,[["__file","PrintVersion.vue"]]);export{j as default};
