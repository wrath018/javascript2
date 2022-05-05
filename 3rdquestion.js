const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
var pos=135;
var count=0;
let ind='';

//preview.addEventListener("click", prev);

canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";
var addButton=document.querySelector('.inputype');
var Showpop= document.querySelector(".inputtype");
var show=document.querySelector(".type");
var divClose=document.querySelector(".modal-close");

const image = document.getElementById("imgDisplayed");
//const logo = document.getElementById("logo");

function prev(){
      ctx.clearRect(0,0,canvas.width,canvas.height)
      let inName = document.getElementById("inName").value;
      let inBirth = document.getElementById("inBirth").value;
      let inYear = document.getElementById("class").value;
      if(count>0){
        let newlab=document.getElementById(`label1`).innerHTML;
        let newin=document.getElementById(`newInputBox1`).value;
        console.log(newin);
        ctx.fillText(newlab+":"+newin,110,pos)     
        
      }
      if(count>1){
        let newlab=document.getElementById(`label2`).innerHTML;
        let newin=document.getElementById(`newInputBox2`).value;
        console.log(newin);
        ctx.fillText(newlab+":"+newin,110,pos+20) 
      }
     
 
      //let newin=document.getElementById("newInputBox").value;

      const name = document.getElementById("name");
      const birth = document.getElementById("birth");
      const fieldYear = document.getElementById("fieldYear");
      const num = document.getElementById("num");

      name.innerHTML = inName;
      birth.innerHTML = inBirth;
      fieldYear.innerHTML =  inYear;
      //num.innerHTML = inNum;

      ctx.fillStyle = "#159";
      ctx.rect(0, 0, 300, 56);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.fillText("California University", 10, 25);
      ctx.font = "16px Arial";
      //ctx.fillText("Undergraduate", 15, 45);
      //ctx.drawImage(logo, 230, 3, 50, 50);
      ctx.fillStyle = "#000";
      ctx.fillText("Name : "+name.innerHTML, 110, 75);
      ctx.fillText("Date Of Birth:"+birth.innerHTML, 110, 95);
      ctx.fillText("Class: "+fieldYear.innerHTML, 110, 115);  
     // ctx.fillText(newin,115,135)
      ctx.drawImage(image, 10, 65, 80, 110); 
}

function loadImage(event) {
  const image = document.getElementById("imgDisplayed");
  image.src = URL.createObjectURL(event.target.files[0]);
  setTimeout(prev,10)
  
}
function createNewElement() {
    Showpop.classList.add('bg-active')
}

function hidediv(){
  count++;  
  Showpop.classList.remove("bg-active");
  var labelVal=document.getElementById('label').value;
  var fieldType=document.getElementById('fieldtype').value;
  let temp="newInputBox"+count;
  console.log(temp);
  // First create a DIV element.
  var txtNewInputBox = document.createElement('div');

  // Then add the content (a new input box) of the element.
   txtNewInputBox.innerHTML = `<label id="label${count}">${labelVal}</label>
   <input type=${fieldType} id=${temp} class="new" oninput="prev()">`;

   // Finally put it where it is supposed to appear.
   document.getElementById("newElementId").appendChild(txtNewInputBox);
  //  ctx.fillText(labelVal+" :",110,pos);
  //  pos+=20;

}