function change(){
    // var name=document.getElementsByName('res0').value
    // document.getElementsByName('res01').value=name;
    // var dob=document.getElementsByName('res1').value
    // // document.getElementById('11').innerHTML=dob;
    // // var clas=document.getElementById('03').value;
    // // document.getElementById('11').innerHTML=clas;
    // // var pho=document.getElementById('04').value;
    // // document.getElementById('11').innerHTML=pho;
}


var count=0;

  function createNewElement() {
    var Showpop= document.querySelector(".inputtype");
    Showpop.classList.add('bg-active');
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
  }
