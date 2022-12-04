// Main file for rolling function

export default function roll(sides, dice, rolls) {
  const results = [];
  for(var i=0; i < rolls; i++) {
    var sum = 0;
    for(var j=0; j < dice; j++) {
      sum = sum + Math.floor((Math.random() * sides) + 1);
    }
    results[i] = sum;
  }

return {sides, dice, rolls, results}; 

}
