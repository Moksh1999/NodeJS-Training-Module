var fruits = [
    {name:'mango' , color:'yellow'},
    {name:'apple' , color:'red'}
  ];
  
  function getfruits(){
    setTimeout(()=>{
      let output='';
      fruits.forEach((post)=>{
        output+=`<li>${post.name}</li>`
      });
      document.body.innerHTML=output;
    },1000);
  }
  
  function createfruit(fruit){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fruits.push(fruit);
            
            const err=false;

            if(!err)
            {
                resolve();
            }
            else
            {
                reject('Something went wrong');
            }

          },2000);
    })
}

createfruit({name:'guava',color:'green'}).then(getfruits);
  
  