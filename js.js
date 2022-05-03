// const container =document.querySelector('#container');

// const request =new XMLHttpRequest();
// request.open('GET','http://data.fixer.io/api/latest?access_key=e91099018abec513b055156f80de3e0e&base=EUR&symbols=AED');
// const response=request.send(request);



// request.addEventListener('load',function(){
//     console.log(this.responseText);
//     const m1=new Map();
//     const m2=new Map();
//     var res = JSON.parse(this.responseText);
//     console.log(typeof(res));
//     var a=res.rates;
//     console.log(a.AED);
// }
// )
// function fn(phonename){
//     return function(a,b){
//      let x=a[phonename];
//      y=b[phonename];
//      if(x>y){
//          console.log('hii')
//     }else if(x<y){
//          console.log('false')
//      }else{
//         console.log('okkk')
//      }

//     };
// }
// let products=[
//    {name:'iphone',price:900},
//    {name:'samsung galaxy',price:850},
//    {name:'sony xpera',price : 700},
   
// ]
// console.log(products);
// products.sort(fn('price'));
// console.log(products);
 

// console.table(products);




// Api cAALING JOKES

// const jokes =document.querySelector('#jokes');
// const Btn=document.querySelector('#bt');
// const setHeader={
//     headers:{
//         Accept:"application/json"
//     }
// }
// function genereratejokes(){
//     fetch('https://icanhazdadjoke.com/',setHeader)
//     .then((res)=>res.json())
//         .then((data)=>{
//          jokes.innerHTML=data.joke;
//         }).catch((error)=>{
//            console.log(error);
//         })
// }
// Btn.addEventListener('click',genereratejokes);
// genereratejokes();
     
//another way to call api await


// const jokes =document.querySelector('#jokes');
// const Btn=document.querySelector('#bt');
// const setHeader={
//     headers:{
//         Accept:"application/json"
//     }
//     fetch()
// }
//    async function genereratejokes(){
//     const res=   await fetch('https://icanhazdadjoke.com/',setHeader);
//     const data =await res.json();
//     jokes.innerHTML=data.joke;
//    }
//    Btn.addEventListener('click',genereratejokes);
//    genereratejokes();
// const get=()=>{
//     setInterval(displayHello, 1000);
// }
// var a=10;
// function displayHello(){
//     if(a==0){
//         clearInterval(get);
//     }else{
//     console.log(a);
//     a--;
//     }
// }

//   var check=true;
// const getval=()=>{
//       if(check){
//       check=false;
      
//         get();
//        }
    
    
//     }
var c=Math.floor(Math.random()*10);

console.log(c);







