function myfun() {
    
    var removeEmptyItems=0;
    var str=document.getElementById('t1').value;
var v=document.getElementById('t2').value;
    if (!v || v.length === 0) return [str];
    if (!str || str.length === 0) return [];
    var result =[];
    var j = 0;
    var lastStart = 0;
    for (var i=0;i<=str.length;) {
      if (i == str.length || str.substr(i,v.length) == v)
      {
        if (!removeEmptyItems || lastStart != i)
        {
            result[j++] = str.substr(lastStart, i-lastStart);
        }
        lastStart = i+v.length;
        i += v.length;    
      } else i++;
    }
    console.log(result);
  }









