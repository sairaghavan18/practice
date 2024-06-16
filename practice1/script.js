let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
let button1=document.querySelector("#button1")
let button2=document.querySelector("#button2")
let button3=document.querySelector("button3")
const text= document.querySelector("#text");
const xpText=document.querySelector("#xpText");
const healthText=document.querySelector("#healthText");
const goldText=document.querySelector("#goldText");
const monsterStats=document.querySelector("#monsterStats");
const monsterName=document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
const monsters=[{name:"slime",level:2,health:15},{name:"fanged beast",level:8,health:60},{name:"dragon",level:20,health:300}]
const locations=[{
  name: "town square",
  "button text": ["Go to store", "Go to cave", "Fight dragon"],
  "button functions": [goStore, goCave, fightDragon],
  text: "You are in the town square. You see a sign that says \"Store\"."
},
{
  name: "store",
  "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
  "button functions": [buyHealth, buyWeapon, goTown],
  text: "You enter the store."
},{
  name: "cave",
  "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
  "button functions": [fightSlime, fightBeast, goTown],
  text: "You enter the cave. You see some monsters."
},
{
  name: "fight",
  "button text": ["Attack", "Dodge", "Run"],
  "button functions": [attack, dodge, goTown],
  text: "You are fighting a monster."
}]

function update(location){

  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "You are in the town square. You see a sign that says Store.";
}
function goTown(){
  update(locations[0])

}
function goStore() {
  update(locations[1])
  }
  
  function goCave() {
    update(locations[2]);
  }
  
  
  // initialize buttons
button1.onclick = goStore;
button2.onclick= goCave;
button3.onclick= fightDragon;
function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}
function buyWeapon() {
  if(currentWeaponIndex <weapons.length-1){
  if (gold >= 30) {
    gold -= 30;
    currentWeaponIndex++;
    goldText.innerText = gold;
    let newWeapon = weapons[currentWeaponIndex].name;
    text.innerText = "You now have a " + newWeapon + ".";
    inventory.push(newWeapon);
    text.innerText += "In your inventory you have: "+inventory;

    
  }else{
    text.innerText="You do not have enough gold to buy a weapon."
  }}else{
    text.innerText="You already have the most powerful weapon!"
    button2.innerText="Sell weSapon for 15 gold"
    button2.onclick=(sellWeapon)
  }
}
function fightSlime() {
  fighting=0
  goFight()

}

function fightBeast() {
  fighting=1

}
function fightDragon() {
  fighting=2
}
function sellWeapon(){
  if (inventory>1){
    let currentWeapon= ineventory.shift()
    gold +=15
    goldText.innerText=gold
    text.innerText="You sold a "+currentWeapon+".";
    text.innerText=" In your inventory you have :"+ inventory;
  }else{
    text.innerText="dont sell ypur only weapon"
  }
}
function goFight(){
  update(loctions(3))
  monsterHealth= monsters[fighting].health
  monsterStats.style.display='block';
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack(){}
function dodge(){}