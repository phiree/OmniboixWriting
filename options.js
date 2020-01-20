// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


let content = document.getElementById('ow_content');
 
function updateContent()
{
document.getElementById("lastupdatetime").innerText=new Date();;
content.value=window.localStorage.getItem("ow_content");
setTimeout(updateContent,10000);
};
updateContent();
content.onkeypress=function(){
	
	var changedContent=this.value;
	window.localStorage.setItem("ow_content",changedContent);
}
var btnClear=document.getElementById("clear");
btnClear.onclick=function(){
	var sure=window.confirm("are you sure? all data will be lost!!");
	if(sure)
	{
		content.value="";
		window.localStorage.clear();
	};
};

 