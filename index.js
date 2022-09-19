const btnClick = (press) => {
    if (expressionDisp.value == 0) {
        expressionDisp.value = press;
    } else if (expressionDisp.value != 0) {
        expressionDisp.value += press;
    }
};

const calc = () => {
    answerDisp.value = eval(expressionDisp.value);
    // expressionDisp.value = ""
};
const cls = () => {
    expressionDisp.value = "";
    answerDisp.value = "";
};
const backSpace = () => {
    expressionDisp.value = expressionDisp.value.slice(0, -1);
};

// const sfnClick = () => {
//     // expressionDisp.value += spress;
//     expressionDisp.value += btnClick("sin(");
//     answerDisp.value = sin(expressionDisp.value);
// };
