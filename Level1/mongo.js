/*Create a mongo.js file
Inside the file:
Create a function that accepts the 4 attributes plus a 5th variable called db. 
This variable would reference the mongo db like in the shell.
Write the javascript code that would insert the four attributes into the “monster” collection.
Write the code that would then console.log all the documents inside the collection.
Write the command that will find your monster based on it’s name
Write the command that will find a monster based on one of the attacks it has (if possible use a command that will return more than one monster with the same attack type)
Write the command that will find a monster based on their defense stat.
Note: you do not need to run the file to confirm it works. Writing the same lines in the mongo console should do this. This is just to confirm you know the syntax.
*/


function createMonsters(Name,Health,Last_fought,Attacks,Stats, db){
    var myGame = use myGame;
    db.monsters.insert(
    {
        "Name":"Monster Bigfoot",
        "Health": "Good",
        "Last_fought": new Date(2017,8,12),
        "Attacks": ["bite","fight","fright"],
        "Stats":{"Attack":1,"Defense":2}
        },
        {
            "Name":"Monster Vampire",
            "Health": "Bad",
            "Last_fought": new Date(2017,8,12),
            "Attacks": ["bite","fight","fright"],
            "Stats":{"Attack":1,"Defense":1}  
        })
};

console.log(db.monsters.find());
db.monsters.find({"Name":"Monster Bigfoot"});
db.monsters.find({"Attacks":"bite"});
db.monsters.find({"Stats.Attack":1});
