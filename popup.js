// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let content = document.getElementById('ow_content');
content.value=window.localStorage.getItem("ow_content");
var btnClear=document.getElementById("clear");
btnClear.onclick=function(){
	window.prompt("Clear???"
				,function(){
					content.value="";
					window.localStorage.clear();
				});
};

 