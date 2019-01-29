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
    
    prison();
    
        function prison(){
        var prison = prompt("You wake up...Your head is puonding and vision blurred. After pacing around walking off the headache your vision clears. It appears you are in prison and you cannot remember why. \n -look around \n - go back to sleep \n - taunt the guard").toLowerCase();
       
        
        if(prison == "look around" || prison == "look"){
            var prisonLook = prompt("The prison is small, dirty and damp. A rat scurries into a hole in the corner, Bugs squirm and scamper underfoot. There is a barred window to the back. an occupied bed a stranger asleep anoring to the right. The cell bars and locked door to the front. An empty bed whitch you had sleeped in the night before to the right. In the center of the dirt floor is lumpy moldy rug. \n -wake stranger \n -move rug \n -eat bugs").toLowerCase();
        }
    
        else if(prison == "go back to sleep" || prison == "sleep" || "go to bed"){
            alert("You fall back to sleep in your dirty cot. You dream of distant lands and adventures");
            //var resume = confirm ("do you wish to continue?").toLowerCase();
        }
            
         
        else if(prison == "taunt" || prison == "taunt the guard" || "taunt guard"){
            alert("you taunt the guard but does not move you make a sound but he is still standing as stone, you cant even see him breath").toLowerCase();
        }
        
        if(prison == "null"){
            prison();
        }
            
            if(resume == true){
                prison();
            }
            else{
                alert("game Over!");
            }
        }
    } 

    
    
    
    
    
    
    
    
    





















