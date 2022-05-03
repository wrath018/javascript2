var strarr=[];
var chararr=[];
var vowarr=['a','e','i','o','u','A','E','I','O','U'];
function change(){    
  document.getElementById('2').innerHTML="";
  document.getElementById('1').innerHTML="";
    var a=document.getElementById('area').value;
    var b=document.getElementById('input').value;
    strarr=a.split(",");
    chararr=b.split(",");
    console.log(strarr);
    console.log(chararr);


    strarr.forEach(element => {
      var arr=element.split("");
      console.log(arr);
      var count=0;
    
       
      if(chararr.includes(arr[0])&&chararr.includes(arr[arr.length-1])){
        for(let i=0;i<arr.length;i++){
          if(vowarr.includes(arr[i])){
            count++;
           
          }
        }
       document.getElementById('2').innerHTML +=
       `<div>${element} ${count}</div><br />`;
      }
       
         else if(chararr.includes(arr[0])){
          count=0;
          for(let i=1;i<arr.length-1;i++){
           if(vowarr.includes(arr[i])){
             count++;
           }
         }
          
       document.getElementById('2').innerHTML +=
       `<div>${element} ${count}</div><br />`;
          }
          else if(chararr.includes(arr[arr.length-1])){
            count=0;
            for(let i=1;i<arr.length-1;i++){
              if(vowarr.includes(arr[i])){
                count++;
              }
            }
           document.getElementById('2').innerHTML +=
           `<div>${element} ${count}</div><br />`;
          }
           
    })

    
    

   strarr.forEach(element => {
     var arr=element.split("");
     console.log(arr);
     if(chararr.includes(arr[0])&&chararr.includes(arr[arr.length-1])){
      document.getElementById('1').innerHTML +=
      `<div><i><b><u>${element}</i></b></u></div><br />`;
     }
        else if(chararr.includes(arr[0])){
        
         
      document.getElementById('1').innerHTML +=
      `<div><b>${element}</b></div><br />`;
         }
         else if(chararr.includes(arr[arr.length-1])){
          document.getElementById('1').innerHTML +=
          `<div><i>${element}</i></div><br />`;
         }
          
   })

    }

    document.getElementById('1').addEventListener('mouseover',function handle(){
      document.getElementById('1').style.color='#F9D342';
    })

    document.getElementById('1').addEventListener('mouseout',function handle(){
      document.getElementById('1').style.color='#1D1B1B';
    })

