var count = 0;
var activate = 0;

function shake()

{
    var activate = 1;

    count=Math.random(0-1)

    if(activate=1)
    {
        
    if(count>=0 && count<0.1 )
    {
        document.getElementById("reply").innerHTML="No";
        console.log("no");
        
        console.log(count);
        count = 0;
        var activate=0;
        
    }

    if(count>=0.1 && count<0.2)
    {
        document.getElementById("reply").innerHTML="Yes";
        console.log("yes");
        
        console.log(count);
        count = 0;
        var activate=0;
       
    }

    if(count>=0.2 && count<0.3)
    {
        document.getElementById("reply").innerHTML="Cannot Decide Now";
        console.log("Can't Decide");
        count=0;
        var activate=0;
    }

    if(count>=0.3 && count<0.4)
    {
        document.getElementById("reply").innerHTML="It Is Certain";
        console.log("It Is Certain");
        count=0;
        var activate=0;
    }

    if(count>=0.4 && count<0.5)
    {
        document.getElementById("reply").innerHTML="Absolutely Not";
        console.log("Absolutely Not");
        count=0;
        var activate=0;
    }

    if(count>=0.5 && count<0.6)
    {
        document.getElementById("reply").innerHTML="Never";
        console.log("Never");
        count=0;
        var activate=0;
    }

    if(count>=0.6 && count<0.7)
    {
        document.getElementById("reply").innerHTML="Without A Doubt";
        console.log("Without A Doubt");
        count=0;
        var activate=0;
    }

    if(count>=0.7 && count<0.8)
    {
        document.getElementById("reply").innerHTML="Sure";
        console.log("Sure");
        count=0;
        var activate=0;
    }
    if(count>=0.8 && count<0.9)
    {
        document.getElementById("reply").innerHTML="No, Just No";
        console.log("No, Just No");
        count=0;
        var activate=0;
    }

    if(count>=0.9 && count<=1)
    {
        document.getElementById("reply").innerHTML="Ok";
        console.log("Ok");
        count=0;
        var activate=0;
    }
    }

   
    



    
    
}

function reset()
{
    document.getElementById("reply").innerHTML="";
    document.getElementById("textbox").value="";
}