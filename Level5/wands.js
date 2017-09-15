         //Budget Castings
//A user has asked us to find out which makers have wands that are under 50 gems and have a damage.magic average above 40.
    //Write an aggregate to match wands that have a price that is less than 50.
    //Add the aggregate stage to group the wands by their maker.
    //Add an accumulator with a field named average_magic to find the average damage.magic per maker using the $avg accumulator.
    //Now that we've got our data all set, let's filter it down further.
    //Below the existing $match and $group aggregates, add another $match aggregate
    //so that we're only retrieving results with an average_magic that is greater than 40.

db.wands.aggregate([
  {"$match":{"price":{"$lt":50}}},
  {"$group":{"_id":"$maker", "average_magic":{"$avg":"$damage.magic"}}},
  {"$match":{"average_magic":{"$gt":40}}}
])


        //Clairvoyant Decisions
//We're always on the lookout for the best wand for its value. 
//Let's find out the top 5 makers that offer the most magic damage for a wand in our level range.
    //Write an aggregate that finds wands that have a level_required that's less than or equal to 5.
    //Add the aggregate stage to group the wands by their maker.
    //Add an accumulator with the field max_damage that finds the max damage.magic per maker.
    //Now that we have the bulk of our data, let's go ahead and sort the max_damage in descending order.
    //Add a limit stage so that we only find the first 4 results.After all, we don't have all day to look through wands!
    //There's one more stage we can add to our pipeline to make sure it's fully optimized. Since we only need the maker and damage.magic fields,
    //add a $project stage that only passes those fields along to the rest of operators.
    
db.wands.aggregate([
  {"$match":{"level_required":{"$lte":5}}},
  {"$project":{"_id":false,"maker":true, "damage.magic":true}},
  {"$group":{"_id":"$maker","max_damage":{"$max":"$damage.magic"}}},
  {"$sort":{"max_damage":-1}},
  {"$limit":4}
])    