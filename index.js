function receivesAFunction(){
  return 'hello, ';
}
function greeting(msg,name){
  console.log(msg() +name);
}
greeting(receivesAFunction, 'moringa');
function returnsANamedFunction(){
  console.log ('hello')
}
returnsANamedFunction();
let returnsAnAnonymousFunction = ()=>{
  console.log('hi');
}