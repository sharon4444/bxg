define(function(){
  return {
    getQueryUrl:function(){
    var pathy = location.search;
    pathy = pathy.slice(1);
    pathy = pathy.split("&");
    var result = {};
    for(var i =0;i<pathy.length;i++){
      var obj = pathy[i].split("=")
      result[obj[0]]=obj[1];
    }
    return result;
  }
  }
})