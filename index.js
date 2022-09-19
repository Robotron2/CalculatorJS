function btnClick(press) {
    if (expressionDisp.value == 0) {
        expressionDisp.value = press;
    } else if (expressionDisp.value != 0) {
        expressionDisp.value += press;
    }
}

function calc() {
    answerDisp.value = eval(expressionDisp.value);
    // expressionDisp.value = ""
}
function cls() {
    expressionDisp.value = "";
    answerDisp.value = "";
}
function backSpace() {
    expressionDisp.value = expressionDisp.value.slice(0, -1);
}

function sfnClick() {
    // expressionDisp.value += spress;
    expressionDisp.value += btnClick("sin(");
    answerDisp.value = sin(expressionDisp.value);
}
