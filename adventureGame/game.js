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
/*
case"inventory": case"i": case"check inventory":
    checkinventory();
    //your func.
*/


var invintory = {
    coins: 1000,
    food: 0,
    sword: 0,
    spitAmo: 10,
    badyM: 0
};

var checkinventory = function () {
    alert("stuff:\n coins: " + invintory.coins + "\n food: " + invintory.food + "\n sword: " + invintory.sword + "\n spitamo: " + invintory.spitAmo);
}

var manDead = 0;
var word;
/*
function getRandint(){
    var randInt = math.floor(Math,random()* Math,floor(max));
    
    return randInt;
}
*/
game();
//ReadytoFight();
function game(){
    //var wizardNames = ["fatty", "big fatty", "foot"];
    
    //alert("legend of "+wizardNames[math.floor(Math.random()* 4)]+"!");
    
    document.write("Legend of my mouth");
    var playerName = prompt("waht is your name?");
    alert("welcome to the mouth! " + playerName);
    
    ThePrison();
    //RunningAway();
    
        
} 

    function ThePrison(){
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
        var thePrison = prompt("You wake up and see a man in the same bed you are in you get up not knowing why you are in this place. \n -wake man \n -taunt guard");
        
        switch(thePrison){
            case"inventory": case"i": case"check inventory":
                checkinventory();
                ThePrison();
            break;
                
            case "1": case "wake man": case "wake":
                var man = prompt("The man looks at you puzzled why you disturbed his slumber. \n -say sorry \n -punch him in the face");
                switch(man){
                        case"inventory": case"i": case"check inventory":
                            checkinventory();
                            ThePrison();
                        break;
                    case "1": case "say sorry":
                        alert('the man says "its fine Im just..."(snore)');
                        StandingInThePrison();
                    break;
                        
                    case "2": case "punch": case "punch him": case "punch him in the face":
                        alert("The sudden hit to the face knocks him out and gave him a bloody nose.");
                        invintory.badyM += 1;
                        StandingInThePrison();
                    break;
                        
                    default:
                        alert("I dont know what " + man +" is.")
                        ThePrison();
                    break;
                }  
            break;
                
                
            case "2": case "taunt": case "taunt guard":
                var taunt = prompt("how do you want to taunt \n -spit \n -yell")
                switch(taunt){
                        case"inventory": case"i": case"check inventory":
                            checkinventory();
                            ThePrison();
                        break;
                        
                    case "1": case "spit":
                        alert("you spit as hard as you can but just miss but he does not move you cant even see him breath");
                        StandingInThePrison();
                    
                    break;
                        
                    case "2": case "yell":
                        alert("you yell as loud as you can but he does not move you cant even see him breath");
                        StandingInThePrison();
                
                    break;
                        
                    default:
                        alert("I dont know what " + taunt +" is.")
                        ThePrison();
                    break;
                }
                
            break;
                
            default:
                alert("I dont know what " + thePrison +" is.")
                ThePrison();
            break;
        }
    }
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

    
    function StandingInThePrison(){
        
        if(manDead == 0){
            var standingInThePrison = prompt("You are in the midle of the room \n -eat mold \n -sleep \n -kill the man in bed ");
        }
        if(manDead == 1){
            var standingInThePrison = prompt("You are in the midle of the room \n -eat mold \n -look \n -sleep");
        }
        
        switch(standingInThePrison){
                        case"inventory": case"i": case"check inventory":
                            checkinventory();
                            StandingInThePrison();
                        break;
                        
            case "1": case "eat mold":
                alert("you eat the mold and feel stronger now your ready to fight!");
                ReadytoFight();
                    
            break;
                        
            case "2": case "sleep":
                alert("You fall asleep in the cot.");
                ThePrison();
                
            break;
                
            case "3": case "kill the man in bed": case "kill": case "kill the man":
                alert("You stab the man while he snores and you see the blood on you hands now the prison is completely silent.");
                invintory.badyM += 1;
                manDead = 1;
                StandingInThePrison();
                
            break;  
                
                
            default:
                alert("I dont know what " + standingInThePrison +" is.")
                StandingInThePrison();
            break;
        }
    }
    function ReadytoFight(){
        var readytofight = prompt("Now what? \n - break window \n - dig under prison \n - spit at guard so hard he dies");
        
        switch(readytofight){
                        case"inventory": case"i": case"check inventory":
                            checkinventory();
                            ReadytoFight();
                        break;
                        
            case "1": case "break window": case "break":
                var window = alert("you break the window and run away!");
                
                RunningAway();
            break;
                
            case "2": case "dig under prison": case "dig":
                var window = alert("you dig and dig and see the light of day and run away!");
                
                RunningAway();
            break;
            
            case "3": case "spit at guard so hard he dies": case "spit": case "spit at guard":
                var window = alert("you spit so hard and pierces his helm but does not move.");
                
                RunningAway();
            break;
                
            default:
                alert("I dont know what " + readytofight +" is.")
                ReadytoFight();
            break;
            
        }
    }
        
        function RunningAway(){
            var runningaway = prompt("You are now running away! YA! You come to a fork in the road. \n - left \n - right");
            
            switch(runningaway){
                        case"inventory": case"i": case"check inventory":
                            checkinventory();
                            RunningAway();
                        break;
                        
            case "1": case "l": case "left":
                var window = alert("You go left and see an old man!");
                Left();
                    
            break;
                
            case "2": case "r": case "right":
                var window = alert("you go right and see an old lady!");
                
            break;
                    
            default:
                alert("I dont know what " + runningaway +" is.")
                RunningAway();
            break;
            }
        }
        function Left(){
            var left = prompt("The old man says 'In order to pass you must answer this ridle, there are 100 inhabitents in a vilage and you know at least one of them is a werewolf and you also know werewolf lie and humans tell the trueth all of the inhabitents say at least one of us is a human haw many werewolf are there?'")
            
            switch(left){
                        case"inventory": case"i": case"check inventory":
                            checkinventory();
                            Left();
                        break;
                        
            case "100": case "all": case "all of them":
                var window = alert("correct!! now you may pass.");
                
            break;
                    
            default:
                alert("ha ha ha no now you need to go back!! and try again")
                ThePrison();
            break;
            }
        }
        function Right(){
            var right = prompt("The old Lady says 'In order to pass you must answer this ridle, whats black and white and read all over!?'")
            
            switch(right){
                        case"inventory": case"i": case"check inventory":
                            checkinventory();
                            Right();
                        break;
                        
            case "news paper": case "news": case "panguin in the sun":
                var window = alert("correct!! now you may pass.");
                
            break;
                    
            default:
                alert("ha ha ha no now you need to go back!! and try again")
                ThePrison();
            break;
            }
        }

        function Downthepath(){
            var downthepath = prompt("As you go down the path you see a big brown Troly and he says.HA you tiny human you are not going to pass through me!! \n - hit \n - spit \n - run");
            
            switch(downthepath){
                        case"inventory": case"i": case"check inventory":
                            checkinventory();
                            Downthepath();
                        break;
                        
            case "hit": case "smack": case "punch":
                var hitting = prompt("What do you want to hit him with?\n - food \n - sword \n - spit");
                //  
                switch(hitting){
                        case"inventory": case"i": case"check inventory":
                            checkinventory();
                            Downthepath();
                        break;
                        
                    case"sword":
                        
                    break
                    case "spit":
                    var spitting = prompt("How hard do you want to spit you have "+invintory.spitAmo+"power left."); 
                        
                    switch(hitting){
                        case"inventory": case"i": case"check inventory":
                            checkinventory();
                            Downthepath();
                        break;
                        
                        case "5": case "6": case "7": case "8": case "9": case "10": 
                            prompt("You spit so hard it go right through his head.")
                        break;
                                
                        default:
                            alert("you try to spit but it just splats, he then crushes you.")
                            ThePrison();
                        break;
                    }   
                }
                //
                    
            break;
                    
            case "spit":
                alert("How hard do you want to spit you have "+invintory.spitAmo+"power left.");
                
            break;
                  
                    
            default:
                alert("I dont know what " + downthepath +" is.")
                Downthepath();
            break;
            }
            
        }
        /*
        if(readytofight == "break window" || readytofight == "break"){
            alert("a");
        }
        if(readytofight == "dig under prison" || readytofight == "dig"){
            alert("b");
        }
        if(readytofight == "spit at guard so hard he dies" || readytofight == "spit" || readytofight == "spit at guard") {
            alert("c");
        }
        */
    

        
        
        
        
    
    

                                                              
                                                              
                                                              
    
    
    
    
    





















