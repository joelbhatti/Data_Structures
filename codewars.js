let x = 2;
let y = 2;
// let points = 3;
let results = [];
function Xscore() {
    let x = 30;
    let y = 10;
    for (i = 0; i <= 5; i++) {
        results.push([i])
        console.log(results, "Results")
    }

}
console.log(Xscore())
function points() {
    if (x > y)
        results.push(3)
    else if (x < y)
        results.push(0)
    else if (x = y)
        results.push(1)

}
if (x > y) {
    results.unshift = (3)
    console.log("X won", "Points gain =", points)
}
else if (x < y) {
    results.unshift(0)
    console.log("X loss", "Points gain =", 0)
}
else if (x = y) {
    results.unshift(1)
    console.log("Match Tied", "Points gain =", 1)
}
console.log(results)
// }