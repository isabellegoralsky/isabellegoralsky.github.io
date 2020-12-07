const home = document.querySelector(".home");
const change = ()=>{
	window.location.href = "index.html";
}
home.addEventListener("click",change);

const res = document.querySelector(".res");
const change2 = ()=>{
	window.location.href = "resume_isabelle-goralsky.pdf";
}
res.addEventListener("click",change2);


const email = document.querySelector(".email");
const change3 = ()=>{
	window.location.href = "mailto: isabellegoral@g.ucla.edu";
}
email.addEventListener("click",change3);
