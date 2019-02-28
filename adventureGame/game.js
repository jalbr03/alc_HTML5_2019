var invintory = {
    coins: 1000,
    food: 0,
    sword: 0,
    spitAmo: 10,
    HP:10,
    badyM: 0
};
var badyHP = 10;
var checkinventory = function () {
    alert("stuff:\n coins: " + invintory.coins + "\n food: " + invintory.food + "\n sword: " + invintory.sword + "\n spitamo: " + invintory.spitAmo);
}
var manDead = 0;
var word;
//const answer = 100;
var badyHP = 10;
var again = true;
//game();
Fighting();
function game(){
    document.write("Legend of my mouth");
    var playerName = prompt("waht is your name?");
    alert("welcome to the mouth! " + playerName);
    ThePrison();
}
    function ThePrison(){
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
        var thePrison = prompt("You wake up and see a man in the same bed you are in you get up not knowing why you are in this place. \n -wake man \n -taunt guard");
        //invintory.spitAm = 10;
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
                        while (again){
                            if(invintory.spitAmo <= 0){
                                alert("your mouth is dry");
                                StandingInThePrison();
                            }
                            var againspit = prompt("You spit as hard as you can but just miss but he does not move you cant even see him breath. Do you want to spit again? You have :" +invintory.spitAmo  + " spitamo");
                            switch(againspit){
                                case"y": case"yes":
                                    invintory.spitAmo--;
                                    break;
                                case"n": case"no":
                                    StandingInThePrison();
                                break;
                                default:
                                    alert("I dont know what " + againspit +" is.") 
                                break;
                            }
                        
                        }
                        
                    
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
    function StandingInThePrison(){
        
        if(manDead == 0){
            var standingInThePrison = prompt("You are in the midle of the room and see some mold, the bed and a man sleeping in the bed \n -eat mold \n -sleep \n -kill the man in bed ");
        }
        if(manDead == 1){
            var standingInThePrison = prompt("You are in the midle of the room \n -eat mold \n -sleep");
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
                
                Fighting();
            break;
                
            case "2": case "dig under prison": case "dig":
                var window = alert("you dig and dig and see the light of day and run away!");
                
                Fighting();
            break;
            
            case "3": case "spit at guard so hard he dies": case "spit": case "spit at guard":
                var window = alert("you spit so hard and pierces his helm but does not move.");
                
                Fighting();
            break;
                
            default:
                alert("I dont know what " + readytofight +" is.")
                ReadytoFight();
            break;
            
        }
    }
    function Fighting(){
        var fighting = alert("You come to a fat mage man and he says 'Fight me! I'm lonely.'");
        Fightingmore();
        function Fightingmore(){
            for(i=5;i>=0;i--){
            var fightingmore = prompt("What do you want to fight him with? \n - sword \n - spit \n - hands");
            switch(fightingmore){
                case "1": case "sword":
                    badyHP -=2
                    alert("you slash at him and strike a hit! He is now at " +badyHP+" HP");
                    invintory.HP--;
                    alert("He slaps you. You are at "+invintory.HP+" HP!");
                    if(badyHP <= 0){
                            alert("You win!");
                            RunningAway();
                        }
                break;
                
                case "2": case "spit":
                    if(invintory.spitAmo > 0){
                        invintory.spitAmo -= 5
                        badyHP -=3
                        alert("you spit at him and spats all over his face! He is now at " +badyHP+" HP \n You now have "+invintory.spitAmo+" spitamo left" );
                        invintory.HP--;
                        alert("He spits back at you. You are at "+invintory.HP+" HP!");
                    }
                    else{
                        alert("Your mouth is dry!")
                        Fightingmore()
                    }
                    if(badyHP <= 0){
                            alert("You win!");
                            RunningAway();
                        }
                    
                break;
            
                case "3": case "hands":
                    badyHP -=1
                    alert("you smack him and strike a hit! He is now at " +badyHP+" HP");
                    invintory.HP--;
                    alert("He stabs you with his finger. You are at "+invintory.HP+" HP!");
                    if(badyHP <= 0){
                            alert("You win!");
                            RunningAway();
                        }
                    
                break;
                
                default:
                    alert("I dont know what " + fightingmore +" is.")
                break;
                
                }
            }
            }
            if(badyHP <= 0){
                i = 0;
                RunningAway();
            }
            else if(badyHP > 0){
                var die = confirm("You die. Continue?");
                if(die == true){
                    ThePrison()
                }   
                else{
                    end();
                }
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
            Right();
        break;
                    
        default:
            alert("I dont know what " + runningaway +" is.")
            RunningAway();
        break;
        }
    }
    function Left(){
        var left = prompt("The old man says 'In order to pass you must answer this ridle, there are 100 inhabitents in a vilage and you know at least one of them is a werewolf and you also know werewolf lie and humans tell the trueth all of the inhabitents say at least one of us is a human how many werewolf are there?'")
            
        switch(left){
                    case"inventory": case"i": case"check inventory":
                        checkinventory();
                        Left();
                    break;
                        
        case "100": case "all": case "all of them":
            var window = alert("correct!! The answer is " +answer+ " now you may pass.");
                
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
            ldksfja  
        break;
                    
        default:
            alert("ha ha ha no now you need to go back!! and try again")
            ThePrison();
        break;
        }
    }
    function end(){}