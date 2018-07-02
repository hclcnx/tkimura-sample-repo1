if(typeof(dojo) != "undefined") { 
  require(["dojo/domReady!"], function(){ 
    try { 
      // utility function to wait for a specific element to load... 
      var waitFor = function(callback, eXpath, eXpathRt, maxIV, waitTime){ 
        if(!eXpathRt) var eXpathRt = dojo.body(); 
        if(!maxIV) var maxIV = 10000; // intervals before expiring 
        if(!waitTime) var waitTime = 1; // 1000=1 second 
        if(!eXpath) return; 
        var waitInter = 0; // current interval 
        var intId = setInterval( function(){ 
          if(++waitInter < maxIV && !dojo.query(eXpath,eXpathRt).length) 
           return; 
  
          clearInterval(intId); 
          if( waitInter >= maxIV) { 
            console.log("**** WAITFOR ["+eXpath+"] WATCH EXPIRED!!! interval "+waitInter+" (max:"+ maxIV +")"); 
          } else { 
            console.log("**** WAITFOR ["+eXpath+"] WATCH TRIPPED AT interval "+waitInter+" (max:"+maxInter+")"); 
            callback(); 
          } 
        }, waitTime); // end setInterval() 
      }; // end waitFor() 
  
      // here we use waitFor to wait for the 
      // .lotusStreamTopLoading div.loaderMain.lotusHidden element 
      // before we proceed to customize the page... 
      waitFor( function(){ 
        // wait until the "loading..." node has been hidden 
        // indicating that we have loaded content. 
  
        dojo.query("span.shareSome-title")[0].textContent="Hello World Sample!!!! "; 
  
      }, ".lotusStreamTopLoading div.loaderMain.lotusHidden"); 
  
    } catch(e) { 
      alert("Exception occurred in helloWorld: " + e); 
    } 
  }); 
 }