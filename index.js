function spy() {
    const spy = "sup";
    return spy;
} 

function receivesAFunction(spy) {
    return spy() + ", much on today?";
}

function named() {
    return namedFunction(2, 2) * 3;
}

function namedFunction(num1, num2) {
    return num1 + num2;
}

function returnsANamedFunction() {
    return named;
}

function returnsAnAnonymousFunction() {
    return (() => {
        return ("Hi!");
});
}