import{d,i as u,a as p,f as l,E as i,g as a,t as c,o as s,_ as m}from"./index-943a7d29.js";const f=["innerHTML"],k=["textContent"],v=["textContent"],y=d({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(t){const n=t;return u(p),(o,e)=>t.noteHtml?(s(),l("div",{key:0,class:i(["prose overflow-auto outline-none",n.class]),onClick:e[0]||(e[0]=r=>o.$emit("click")),innerHTML:t.noteHtml},null,10,f)):t.note?(s(),l("div",{key:1,class:i(["prose overflow-auto outline-none",n.class]),onClick:e[1]||(e[1]=r=>o.$emit("click"))},[a("p",{textContent:c(t.note)},null,8,k)],2)):(s(),l("div",{key:2,class:i(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:e[2]||(e[2]=r=>o.$emit("click"))},[a("p",{textContent:c(n.placeholder||"No notes.")},null,8,v)],2))}}),x=m(y,[["__file","/home/runner/work/2023-modern-linux-cli-tools/2023-modern-linux-cli-tools/presentation/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{x as N};
