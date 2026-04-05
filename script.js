//your JS code here. If required.

const form = document.querySelector("form")  
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  
  for (let c of cookies) {
    const [key, value] = c.split("=");
    if (key === name) return value;
  }
  return null;
}
window.onload=function(){ 
	// const cookies=document.cookie.split(";")
	const fontsize = getCookie("fontsize"); 
	const fontcolor = getCookie("fontcolor"); 
	  if (fontsize) {
	    document.body.style.fontSize = fontsize + "px";
	  }
	
	  if (fontcolor) {
	    document.body.style.color = fontcolor;
	  }
}
form.addEventListener('submit',(e)=>{ 
	e.preventDefault()
	const fontsize = document.getElementById("fontsize").value
	const fontcolor = document.getElementById("fontcolor").value
	document.body.style.fontSize= fontsize+"px"
	document.body.style.color= fontcolor
  document.cookie = `fontsize=${fontsize}; path=/`;
  document.cookie = `fontcolor=${fontcolor}; path=/`;
})
