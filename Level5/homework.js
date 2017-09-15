//the db has the following monster collection layout:
{
	"name": "Bat",
	"Level": 4,
	"health": 25,
	"type": "Flying",
	"attacks": ["scratch", "bite"],
	"stats": {
		"attack": 5,
		"defense": 2
	}
	"style": "cool"
	"Location": "Cave"
}

//Please complete the following syntax to group together our monsters by their type.
//Answer syntax: item1 item2 item3 item4 No double quotes as they are already there.
//db.monsters.______({"______" {"_____": "_____"}})
db.monsters.aggregate({"$group": {"_id": "$type"}})

//Please complete the following syntax to group the monsters together by their type, 
//then include a count of all the monsters for that type and that types average attack.
//(the first three items are the answer to the prior question)
//db.monsters.______({"______" {"_____": "_____", "total": { "____":"____"}, "averageAttack": {"____":"____"}})
//same syntax as before.

db.monsters.aggregate({"$group": {"_id": "$type", "total": { "$sum":1}, "averageAttack": {"$avg":"$stats.attack"}})


