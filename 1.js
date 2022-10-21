let createXHR = function (){
    let versions = ['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp']
    for(let i=0,version;version = versions[i++];){
       console.log('i',i,version);
    }
}

createXHR()