function setStyle( tag ){
	setHeight( tag );
	setFontSize( tag , "18px" );
}
function setHeight( tag ){
	tag.style.height = tag.contentWindow.document.body.scrollHeight + "px";
}
function setFontSize( tag , size){
	tag.contentWindow.document.body.style.fontSize = size;
}