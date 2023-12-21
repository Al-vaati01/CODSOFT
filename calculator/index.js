const input = document.querySelector('.calc-output__input');
const output = document.querySelector('.calc-output__result');
const clearBtn = document.querySelector('.calc-button--clear');
const historyBtn = document.querySelector('.calc-button--history');
const equalBtn = document.querySelector('.calc-button--equal');
const numBtns = document.querySelectorAll('.calc-button--number');
const opBtns = document.querySelectorAll('.calc-button--operator');
const dotBtn = document.querySelector('.calc-button--dot');
const historyWrapper = document.querySelector('.history-wrapper');

const history = new Array();

dotBtn.addEventListener('click', () => {
    if (input.value === '0') {
        input.value = "";
    }
    input.value += dotBtn.value;
}
);
numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (input.value === '0') {
            input.value = "";
        }else if(input.value === "SyntaxError"){
            input.value = "";
        }
        if(btn.value ==="00"){
            input.value += btn.value;
            return;
        }
        input.value += parseInt(btn.value);
    });
});
opBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        input.value += btn.value;
    });
});
clearBtn.addEventListener('click', () => {
    input.value = '0';
    output.textContent = '00';
});
equalBtn.addEventListener('click', () => {
    let total=0;
    try {
        total = eval(input.value);
    }
    catch (err) {
        output.textContent = "SyntaxError";
        return;
    }
    finally {
        if(total === 0) {
            return;
        }else{
            input.value = total;
            history.push(total);
        }
        output.textContent = input.value;
    }
});
historyBtn.addEventListener('click', () => {
    historyWrapper.classList.toggle('history-wrapper--active');
    historyWrapper.innerHTML = "";
    history.forEach((item, index) => {
        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.textContent = `${index+1}. ${item}`;
        historyWrapper.appendChild(historyItem);
    });
});
