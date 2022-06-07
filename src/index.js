// complete the function
function prime (num) {
  var sqrtnum=Math.floor(Math.sqrt(num));
  var prime = num != 1;
  for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
      if(num % i == 0) {
          prime = false;
          break;
      }
  }
  return prime;
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };