module.exports = function solveEquation(equation) {
    let res = equation.replace(/\s+/g, "").replace(/\^2/g, "").match(/([\-]?[0-9]+)/g);//Searching coefficients of equation
    let a = res[0], b = res[1], c = res[2];

    let d = Math.sqrt(Math.pow(b, 2) - 4*a*c).toFixed();//Calculating discriminant
    let val1 = Number(-1*b + +d).toFixed()/(2*a);//Finding equation root
    let val2 = Number(-1*b - d).toFixed()/(2*a);//Finding equation root

    return [val1, val2].sort((a, b) => a - b);
}
