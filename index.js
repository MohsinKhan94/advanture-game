#! /usr/bin/env node
import inquirer from "inquirer";
//------------------------------ Game Variables --------------------------------
let enemies = ['Skeleton', 'Zombie', 'Warrior', 'Assassin'];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
//------------------------------- Player Variables--------------------------------
let heroHealth = 100;
let attactDamageToEnemy = 50;
let numHealthPotion = 3;
let healthPotionHealAmount = 30;
let healPotionDropChance = 50;
//------------------------------ While Loop Condition --------------------------------
let gameRunning = true;
console.log("Welcome to DeadZone");
Game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has appeared # \n`);
    while (enemyHealth > 0) {
        console.log(`Your Health: ${heroHealth}`);
        console.log(`${enemy} Health: ${enemyHealth}`);
        let options = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "What would you like to do?",
            choices: ["1.Attack", "2.Take Health Potion", "3. Run"]
        });
        if (options.ans === "1.Attack") {
            let attactDamageToEnemy = 50;
            let damageToEnemy = Math.floor(Math.random() * attactDamageToEnemy + 1);
            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= damageToEnemy;
            heroHealth -= damageToHero;
            console.log(`You strike the ${enemy} for ${damageToEnemy}`);
            console.log((`${enemy} strike you for ${damageToHero}`));
            if (heroHealth < 1) {
                console.log("You have taken too much damage.You are too weak to continue.");
                break;
            }
        }
        else if (options.ans === "2.Take Health Potion") {
            if (numHealthPotion > 0) {
                heroHealth += healthPotionHealAmount;
                numHealthPotion--;
                console.log(`You use health potion for ${healthPotionHealAmount}`);
                console.log(`You have now ${heroHealth} health`);
                console.log(`You have ${numHealthPotion} health potion left.`);
            }
            else {
                console.log(`You have no health potion left. Defeat enemy to get health potion`);
            }
        }
        else if (options.ans === "3. Run") {
            console.log(`You have run away from ${enemy}`);
            continue Game;
        }
    }
    if (heroHealth < 1) {
        console.log(`You are out from battle.Your are too weak.`);
        break;
    }
    console.log(`${enemy} defeated!`);
    console.log(`You have ${heroHealth} health.`);
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < healPotionDropChance) {
        numHealthPotion++;
        console.log(`enemy give you health potion`);
        console.log(`Your health is ${heroHealth}`);
        console.log(`Your health potion is ${numHealthPotion}`);
    }
    let userOption = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "What would you like to do now",
        choices: ["1.Continue", "2.Exit"]
    });
    if (userOption === "1.Continue") {
        console.log("Your continue on your advanture");
    }
    else {
        console.log("You successfuly Exit from your DeadZone");
        break;
    }
    console.log("Thank you for playing.\n");
}
