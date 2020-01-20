let key_content="ow_content";
chrome.omnibox.onInputEntered.addListener(function(e){
		 var existedData= window.localStorage.getItem(key_content); 
		 if(existedData==null){existedData="";}
		 var newData=existedData+"\r\n"+e;
		window.localStorage.setItem(key_content,newData); 
});