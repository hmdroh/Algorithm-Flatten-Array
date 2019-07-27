function steamrollArray(arr) {
    // I'm a steamroller, baby
    var flattenArr = [];

    var flatten = function(nested){
      if(!Array.isArray(nested)){
        flattenArr.push(nested);
      }else{
        for(var i = 0; i < nested.length; i++){
          flatten(nested[i]);
        }
      }
    }
    arr.forEach(flatten);
    return flattenArr;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));