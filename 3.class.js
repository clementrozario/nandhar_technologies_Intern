class Player{
   health = 100;
   static playerCount = 0;
    constructor(name){
        this.name= name;
        Player.playerCount++;   
    }    
    introduce(){
        console.log(`Hi my name is ${this.name} and i have ${this.health} health`)
    }
    static getRules(){
        console.log("the main rule is to have fun");
    }
}     
//=====================================================================================//
class Warrior extends Player{
    constructor(name,weapon){
        super(name)
        this.weapon=weapon;
    }
}
//=====================================================================================//

class Mage extends Player{
    #mana;
    constructor(name){
        super(name);
        this.#mana = 50;
    }
    castSpell(){
        if(this.#mana>10){
            this.#mana -= 10;
            console.log("Casting a powerful spell!");
            }else{
                console.log("Not enough mana!");
            }
        }
    
    getMana(){
        return this.#mana;
    }
}


const cla = new Player("clement");
cla.introduce();
const clem = new Player("francis");
clem.introduce();

const warrior = new Warrior("tom","gun");
warrior.introduce();
console.log(warrior.weapon);

const mages = new Mage("tony");
mages.castSpell();
mages.castSpell();
mages.castSpell();
console.log(mages.getMana());
//mages.#mana;//SyntaxError: Private field '#mana' must be declared in an enclosing class

const newPlayer1 = new Player("karthi");
const newPlayer2 = new Player("jai");
const newPlayer3 = new Warrior("joel");
const newPlayer4 = new Warrior("joseph");

Player.getRules();
console.log(Player.playerCount)
