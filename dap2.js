var one;

    const userAction = async () => {
        document.getElementById('test').innerHTML="";
        var d=document.getElementById('table2').innerHTML="";
        const value=document.getElementById('search').value;
        console.log(value);
        const response = await fetch(`http://www.omdbapi.com/?t=${value}&apikey=249d380c`);
        const myJson = await response.json(); //extract JSON from the http response
        one=JSON.stringify(myJson);
        console.log(myJson);
        
          


        let name=myJson.Title;
        let Type=myJson.Type;
        let year=myJson.Year;
        let photo=myJson.Poster;
        document.getElementById('pic').src=photo;

       var d=document.getElementById('table2');
        var table = document.createElement('table');
        
        for (var i = 1; i < 3; i++){
             if(i===1){
                var tr = document.createElement('tr');   
        
                var td1 = document.createElement('th');
                var td2 = document.createElement('th');
                var td3 = document.createElement('th');
                

                var text1 = document.createTextNode('Name of movie');
                var text2 = document.createTextNode('Type');
                var text3 = document.createTextNode('Year');
                
             }else{
            
            var tr = document.createElement('tr');   
        
            var td1 = document.createElement('td',onmouseover="show()");
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');

            var text1 = document.createTextNode(`${name}`);
            var text2 = document.createTextNode(`${Type}`);
            var text3 = document.createTextNode(`${year}`);
             }
            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
        
            d.appendChild(tr);
        }
        
    

       
         
        
        
        // do something with myJson
      } 
      function show(){
         document.getElementById('test').innerHTML=one;           
        
   
    //   Guardians+of+the+Galaxy
      }

    