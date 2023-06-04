var cartoes = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})/,
    Mastercard: /^5[1-5][0-9]{14}/
};

const numCard = document.getElementById('nCartao');
const nomeT = document.getElementById('nome');
const data = document.getElementById('data');
const cpf = document.getElementById('cpf');
const CVV = document.getElementById('cvv');


//Torna o verso do cartão visível

CVV.addEventListener('focus', e => {
    document.getElementById('img-card').style.display = 'none';
    document.getElementById('img-cvv').style.display = 'block';
    document.getElementById('img-cpf').style.display = 'none';
});

//Torna a imagem frontal do cartão visivel

numCard.addEventListener('focus', display);
nomeT.addEventListener('focus', display);
data.addEventListener('focus', display);


function display() {
    document.getElementById('img-card').style.display = 'block';
    document.getElementById('img-cvv').style.display = 'none';
    document.getElementById('img-cpf').style.display = 'none';

};

//Torna imagem do CPF visível

cpf.addEventListener('focus', e => {
    document.getElementById('img-cpf').style.display = 'block';
    document.getElementById('img-card').style.display = 'none';
    document.getElementById('img-cvv').style.display = 'none';
})

//Inserção do CVV

CVV.addEventListener('keyup', e => {

    if (e.key === 'Backspace') {
        document.getElementById('img-cvv').innerHTML = `<p>${CVV.value}</p>`;
    } else {
        document.getElementById('img-cvv').innerHTML = `<p>${CVV.value}</p>`;
    }
    if (CVV.value === '') {
        document.getElementById('img-cvv').innerHTML = `<p>***</p>`;
    }
})

//Inserção do CPF

cpf.addEventListener('keyup', e => {
    if (e.key === 'Backspace') {
        document.getElementById('img-cpf').innerHTML = `<p>${cpf.value}</p>`;

    } else if (cpf.value.length == 11) {
        cpf.value += '/';
        document.getElementById('img-cpf').innerHTML = `<p>${cpf.value}</p>`;

    } else if (cpf.value.length == 3) {
        cpf.value += '.';
        document.getElementById('img-cpf').innerHTML = `<p>${cpf.value}</p>`;

    } else if (cpf.value.length == 7) {
        cpf.value += '.';
        document.getElementById('img-cpf').innerHTML = `<p>${cpf.value}</p>`;

    } else {
        document.getElementById('img-cpf').innerHTML = `<p>${cpf.value}</p>`;
    }
    if (cpf.value === '') {
        document.getElementById('img-cpf').innerHTML = `<p>***.***.***/**</p>`;
    }
});

//Inserção do Numero do cartão

numCard.addEventListener('keyup', e => {
    let num = document.getElementById('nCartao').value;
    if (e.key === 'Backspace') {
        document.getElementById('numeroCartao').innerHTML = `<p>${numCard.value}</p>`;
    } else {
        document.getElementById('numeroCartao').innerHTML = `<p>${numCard.value}</p>`;
    }
    if (numCard.value.length === 16) {
        valida(numCard.value);
    }
    if (numCard.value === '') {
        document.getElementById('numeroCartao').innerHTML = `<p>****************</p>`;
    }


});

//Inserção do nome

nomeT.addEventListener('keyup', e => {

    let nome = document.getElementById('nome').value;
    let x = document.getElementById('data').value;
    if (e.key === 'Backspace') {
        document.getElementById('nomeTitular').innerHTML = `<p>${nome}</p><p>${x}</p>`;
    } else {
        document.getElementById('nomeTitular').innerHTML = `<p>${nome}</p><p>${x}</p>`;
    }
});

//Inserção da data

data.addEventListener('keyup', e => {

    let nome = document.getElementById('nome').value;
    let x = document.getElementById('data').value;
    let t = data.value.length;
    if (t == 2) {
        data.value += '/';
    }
    if (e.key === 'Backspace') {
        document.getElementById('nomeTitular').innerHTML = `<p>${nome}</p><p>${x}</p>`;
    } else {
        document.getElementById('nomeTitular').innerHTML = `<p>${nome}</p><p>${x}</p>`;
    }
});

//Validação do cartão (Visa e Mastercard)

function testarCC(nr, cartoes) {
    for (var cartao in cartoes) {
        if (nr.match(cartoes[cartao])) {
            switch (cartao) {
                case 'Visa':
                    document.getElementById('Visa').style.display = 'block';
                    document.getElementById('MasterCard').style.display = 'none';
                    break;
                case 'Mastercard':
                    document.getElementById('MasterCard').style.display = 'block';
                    document.getElementById('Visa').style.display = 'none';
                    break;
                default:
                    document.getElementById('invalido').style.display = 'block';
                    setTimeout(() => {
                        document.getElementById('invalido').style.display = 'none';
                    }, 1000);
                    break;
            }
        }
    }
}
function valida(e) {
    var valido = `${e}`;
    var invalido = '1234567890';

    [valido, invalido].forEach(function (teste) {
        console.log(testarCC(teste, cartoes));
    });
}
