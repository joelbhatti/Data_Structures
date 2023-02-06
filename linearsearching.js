let abc = [20, 25, 8, 88, 64, 75]
let item = 75;
let index = undefined

for (i=0; i<=abc.length-1; i++){
    if (abc[i]===item)
    {
        index = i;
    }
}
console.warn(index);