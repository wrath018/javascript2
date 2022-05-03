var mousex;
var mousey;
var elex;
var eley;
var arr;
function handlechange(){
  var x= document.getElementById('input1').value; 
   console.log(x);
 var photos=document.getElementById('center');

document.getElementById('input').innerHTML='';
arr=x.split('');

for(let i=0;i<arr.length;i++){

function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
//   var newContent = document.createTextNode(this.arr[i]); 
  newDiv.id=i;
  newDiv.classList.add('text');
  newDiv.innerHTML=this.arr[i] ;
  // add the text node to the newly created div
//   newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  
//   var currentDiv = document.getElementById(i-1); 
  photos.appendChild(newDiv);//ye samjana
//   document.body.insertBefore(newDiv, currentDiv); 
  console.log(newDiv);
}


addElement();

}
document.addEventListener("mousemove", cursorMoved);
function cursorMoved(event) {
    let elements = document.getElementsByClassName('text')
    for(let i = 0; i < elements.length; i++){
        let element = elements[i];
        mousex=event.pageX;
        mousey=event.pageY;
        let pos = element.getBoundingClientRect();//ye samjana
        var x=mousex-pos.x;
        var y=mousey-pos.y;
        var c=Math.sqrt(x*x+y*y);
        console.log(c);
        element.setAttribute("style", `font-variation-settings: "wght" ${Math.floor(900 - c * 2)}`);
    }
    // console.log(event.pageX, event.pageY);

    // if(c<200&&c>100){
    //     document.getElementById('center').style.color="brown";
    //     document.getElementById('center').style.fontWeight="bold";
    // }
    // else if(c<100){
    //     document.getElementById('center').style.color="brown";
    //     document.getElementById('center').style.fontSize="100px";
    //     document.getElementById('center').style.fontWeight="bolder";
    // }

    // else{
    //     document.getElementById('center').style.color="black";
    //     document.getElementById('center').style.fontSize="50px";
    //     document.getElementById('center').style.fontWeight="lighter";
    // }
    
    
    
    // document.getElementById('1').setAttribute("style", `font-variation-settings: "wght" ${Math.floor(900 - c)}`);
}

       
}








