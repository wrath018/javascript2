const calculateTemp=()=>{
    const numbertemp=document.getElementById('temp').value;
    
    const tempselected=document.getElementById('temp_diff');
    const choose=temp_diff.options[tempselected.selectedIndex].value;
    const celtoFah=(val)=>{
        let value= Math.round((val * (9/5)) + 32 );
        return value;
    }
    const fahtocel=(val)=>{
        let value= 5/9 * (val-32);
        return value;
    }
   
    let result;

    if(choose=='cel'){
        result=celtoFah(numbertemp);
        document.getElementById('result_container').innerHTML=` =  ${result}°Fahreneit`;
        console.log(result);
    }else{
        result=fahtocel(numbertemp);
        document.getElementById('result_container').innerHTML=` =  ${result}°Celsius`;
        console.log(result);
    }
}

