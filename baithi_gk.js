function myFunctionreset(){
    document.getElementById("gta").value=null;
    document.getElementById("gtb").value=null;
    document.getElementById("gtc").value=null;
    document.getElementById("gtd").value=null;
    document.getElementById("null").innerText=null;
}
function myFunction(){
    // var a=document.getElementById("gta").value;
    var b=document.getElementById("gtb").value;
    var c=document.getElementById("gtc").value;
    var d=document.getElementById("gtd").value;
    
    if(c.length <8)    
        document.getElementById("null").innerText="vui lòng nhập mật khẩu có độ dài >=8";
       
    else if(d!=c)
    {
        document.getElementById("null").innerText="vui lòng nhập mật khẩu trùng nhau";
        document.getElementById("gtd").value=null;}
        else
        document.getElementById("null").innerText=null;
}