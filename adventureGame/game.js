// ha ha we dun
/*
    alot
*/

//will tell the html what to do
//document.write("<h3>AAHHH you will <em>die</em> to day!!!</h3>");

//alert("Warning bad people are in your pc!!! Call 555-555-5555");

//confirm("Do you want to call?");

//prompt("Do you want to call now?(y,n)");

//prompt("really?! now?(y,n)");

//var pc = prompt("what is your name?");

//confirm("So your name is " + pc + "?");

//confirm("AH that sucks!! " + pc);

game();

function game(){
    
    document.write("Legend of my mouth");
    var playerName = prompt("waht is your name?");
    alert("welcome to the mouth! " + playerName);
    
    //Prison();
    ThePrison();
    
        
    } 


    function ThePrison(){
        var thePrison = prompt("You wake up and see a man in the same bed you are in you get up not knowing why you are in this place. \n -wake man \n -taunt guard");
        
        if(thePrison == "wake man" ||  thePrison == "wake"){
            var man = prompt("The man looks at you puzzled why you disturbed his slumber. \n -say sorry \n -punch him in the face");
            
            if(man == "say sorry")
                {
                    alert("the man says its fine I'm just...(snor)");
                    
                }
            if(man == "punch" || "punch him" || "punch him in the face")
                {
                    alert("The sudden hit to the face knocks him out and gave him a bloody nose.");
                    
                }
            StandingInThePrison();
        }
        
        if(thePrison == "taunt" || thePrison == "taunt guard"){
            var taunt = prompt("how do you want to taunt \n -spit \n -yell")
            
            if(taunt == "spit"){
                
                alert("you spit as hard as you can but just miss but he does not move you cant even see him breath");
               }
            if(taunt == "yell"){
                
                alert("you yell as loud as you can but he does not move you cant even see him breath");
               }
            StandingInThePrison();
        }
            
        
        else{
            alert("What?!");
            ThePrison();
        }
    function StandingInThePrison(){
        var standingInThePrison = prompt("You are in the midle of the room \n -look \n -sleep \n -kill the man in bed ");
        
        if(standingInThePrison == "look"){
            var looking = prompt("you see some mold, the man and a window. \n -kill the man in bed \n -eat mold \n -break window ")
            
            
        } 
            
        if(standingInThePrison == "sleep"){
            alert("You fall asleep in the cot.");
            ThePrison();
            
            
        }
        
        if(standingInThePrison == "kill the man in bed" || standingInThePrison == "kill"){
            
            
        }
            
           
            
    }
    }
        
        
        
        
    
    
    
    
    
    
    
    
    
    





















