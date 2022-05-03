const tempload=()=>{
    let temp=document.getElementById('temp');
    temp.innerHTML="&#xf10c";

    setTimeout(()=> {
        temp.innerHTML="&#xf2ca";
    },1000)
    
    setTimeout(()=> {
        temp.innerHTML="&#xf2c9";
    },3000)
 
    setTimeout(()=> {
        temp.innerHTML="&#xf2c8";
    },5000)

    setTimeout(()=> {
        temp.innerHTML="&#xf2c7";
    },7000)
}
tempload();

let rain=document.getElementsByClassName('fas fa-rainbow');
rain.innerHTML="&#xf238";



function ti(){let t =new Date(2022,11,4);
let a=document.getElementById('first');
a.innerHTML=t.getDate();

}
ti();