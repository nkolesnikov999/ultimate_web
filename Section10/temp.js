var result = 0;

for(var i = 0; i < 64; i++ ) {
    result += Math.pow(2,i);
    var sq = i + 1;
    console.log(sq + " - " + result);
}

console.log(result + " зерен");

// в граммах 1 зерно = 35 мг
result = result / 1000 * 35;
console.log(result + " грамм");

result = result / 1000;
console.log(result + " килограмм");

result = result / 1000;
console.log(result + " тонн");

result = result / 1000000000;
console.log(result + " млрд тонн");

