var fruits = [
  {name:'mango' , color:'yellow'},
  {name:'apple' , color:'red'}
];



function getfruits(callback){
  setTimeout(()=>{
    let output='';
    fruits.forEach((post)=>{
      output+=`<li>${post.name}</li>`
    });
    document.body.innerHTML=output;
    callback();
  },1000);
}

function createfruit(fruit,callback){
  setTimeout(()=>{
    fruits.push(fruit);
    callback();
  },2000);
}

function printDemo(){
  document.body.innerHTML+=`<br>This is callback inside callback</br>`;
}


createfruit({name:'guava',color:'green'},getfruits(printDemo));
