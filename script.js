var obj = {
  className:'asd sdsa'
};

function addClass(obj, cls) {
  var keys;
  if(obj.className){
   keys = obj.className.split(' ');
  }else{
   keys = [];
  }
  //[open,menu,(),()]
  if (-1 === keys.indexOf(cls)) {
    keys.splice(keys.length, 0, cls);
    obj.className = keys.join(' ');
  } else {
    return false;
  }
}
console.log(addClass(obj, 'ru22ny'));

console.log(obj.className);
