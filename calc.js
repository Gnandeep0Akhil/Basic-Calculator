var input = document.getElementById('input');

function insertNum(value){
    input.textContent += value;
}

function equalTo() {
    if (input.textContent){
        input.textContent = eval(input.textContent);
    }
}

function eraseNum(){
    var res = input.textContent.length - 1;
    input.textContent = input.textContent.substring(0, res);
}

function clearInput(){
    input.textContent = '';
}