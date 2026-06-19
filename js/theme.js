const toggle =
document.getElementById(
'theme-toggle'
);

toggle.addEventListener(
'click',
()=>{

const current =
document.documentElement
.getAttribute(
'data-theme'
);

if(current === 'dark'){
document.documentElement
.setAttribute(
'data-theme',
'light'
);
}
else{
document.documentElement
.setAttribute(
'data-theme',
'dark'
);
}
});