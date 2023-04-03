//reset the function
function reset(){
    document.getElementById("num1").value=null;
    document.getElementById("demo").value=null;
    document.getElementById("num2").value=null;
    document.getElementById("num3").value=null;
    document.getElementById("demo1").value=null;
}
//round the function
function round(){
    var a=document.getElementById("num1").value;
    document.getElementById("demo").innerHTML=Math.round(a);
}
//ceil the function
function ceil(){
    var a=document.getElementById("num1").value;
    document.getElementById("demo").innerHTML=Math.ceil(a);
}
//floor the function
function floor(){
    var a=document.getElementById("num1").value;
    document.getElementById("demo").innerHTML=Math.floor(a);
}
//trunc the function
function trunc(){
    var a=document.getElementById("num1").value;
    document.getElementById("demo").innerHTML=Math.trunc(a);
}
//sign the function
function sign(){
    var a=document.getElementById("num1").value;
    document.getElementById("demo").innerHTML=Math.sign(a);
}

//sqrt the function
function sqrt(){
    var a=document.getElementById("num1").value;
    document.getElementById("demo").innerHTML=Math.sqrt(a);
}

//abs the function
function abs(){
    var a=document.getElementById("num1").value;
    document.getElementById("demo").innerHTML=Math.abs(a);
}

//min the function
function min(){
    var a=String(document.getElementById("num1").value);
    var b=a.split(",");
    let result = Math.min.apply(null,b);
    document.getElementById("demo").innerHTML=
    "The Math.Minimum Value is:"+""+result;
}
//min the function
function max(){
   var a=String(document.getElementById("num1").value);
    var b=a.split(",");
    let result = Math.max.apply(null,b);
    document.getElementById("demo").innerHTML=
    "The Math.Maximum Value is:"+""+ result;
}

//log the function
function log(){
    var a=document.getElementById("num1").value;
    document.getElementById("demo").innerHTML=Math.log(a);
}
//log2 the function
function log2(){
    var a=document.getElementById("num1").value;
    document.getElementById("demo").innerHTML=Math.log2(a);
}
//log10 the function
function log10(){
    var a=document.getElementById("num1").value;
    document.getElementById("demo").innerHTML=Math.log10(a);
}

//part-2

//pow the function
function pow(){
    var a=document.getElementById("num2").value;
    var b=document.getElementById("num3").value;
    document.getElementById("demo1").innerHTML=Math.pow(a,b);
}
//sin the function
function sin(){
    var a=document.getElementById("num2").value;
    var b=document.getElementById("num3").value;
    document.getElementById("demo1").innerHTML=Math.sin(a,b);
}
//cos the function
function cos(){
    var a=document.getElementById("num2").value;
    var b=document.getElementById("num3").value;
    document.getElementById("demo1").innerHTML=Math.cos(a,b);
}