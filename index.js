function superbowlWin(x) { 
  const resultObject = x.find(s => s.result == "W");
 // resultObject ? resultObject.year : undefined;
  if(resultObject){
      return resultObject.year
    } else{
      return undefined;
    }
}
