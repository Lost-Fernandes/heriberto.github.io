document.querySelectorAll('.btn').forEach((button) => {
    document.getElementById(button.id).addEventListener('click', () => {
        voting(button);
    });
});

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let num5 = document.getElementById('num5');
let sondNumber = document.getElementById('sondNumber');
let sondConfirm = document.getElementById('sondConfirm');

function voting(button) {
    if (!num1.value) {
        num1.innerHTML = button.value;
        num1.value = button.value;
        sondNumber.play();
        return;
    } else if (!num2.value) {
        num2.innerHTML = button.value;
        num2.value = button.value;
        sondNumber.play();
        return;
    } else if (!num3.value) {
        num3.innerHTML = button.value;
        num3.value = button.value;
        sondNumber.play();
        return;
    } else if (!num4.value) {
        num4.innerHTML = button.value;
        num4.value = button.value;
        sondNumber.play();
        return;
    } else if (!num5.value) {
        num5.innerHTML = button.value;
        num5.value = button.value;
        sondNumber.play();
        showCandidate();
    }
}

let nameTitle = document.getElementById('nameTitle');
let nameCandidate = document.getElementById('nameCandidate');
let broken = document.getElementById('brokenCandidate');
let img = document.getElementById('imgPresident');
let legend = document.getElementById('legend');

function showCandidate() {
    const candidateNumber = `${num1.value}${num2.value}${num3.value}${num4.value}${num5.value}`;

    if (candidateNumber === '55789') {
        displayCandidate(candidato.heriberto);
    } else {
        displayInvalid();
    }
}

function displayCandidate(candidate) {
    nameTitle.innerText = candidate.name;
    nameCandidate.innerHTML = `Nome: <b>${candidate.nameComplete}</b>`;
    broken.innerHTML = `Partido: <b>${candidate.broken}</b>`;
    img.style.backgroundImage = candidate.img;
    legend.style.display = 'flex';
}

function displayInvalid() {
    nameTitle.innerText = 'INVALIDO';
    nameCandidate.innerText = 'INVALIDO';
    broken.innerText = 'INVALIDO';
    img.style.backgroundImage = "url('./images/person-icon.png')";
    legend.style.display = 'none';
    clearNumbers();
}

function clearNumbers() {
    num1.value = null;
    num2.value = null;
    num3.value = null;
    num4.value = null;
    num5.value = null;
    num1.innerHTML = '';
    num2.innerHTML = '';
    num3.innerHTML = '';
    num4.innerHTML = '';
    num5.innerHTML = '';
}

document.getElementById('btnConfirm').addEventListener('click', confirmVote);

function confirmVote() {
    if (document.getElementById('end').style.display == 'flex') {
        correct();
    } else {
        if (num1.value != null && num2.value != null && num3.value != null && num4.value != null && num5.value) {
            document.getElementById('end').style.display = 'flex';
            sondConfirm.play();
        } else {
            console.log('INVALIDO');
        }
    }
}

document.getElementById('btnReplace').addEventListener('click', correct);

function correct() {
    nameTitle.innerText = 'CANDIDATO';
    nameCandidate.innerText = 'Nome:';
    broken.innerText = 'Partido:';
    clearNumbers();
    sondNumber.play();
    img.style.backgroundImage = "url('./images/person-icon.png')";
    legend.style.display = 'none';
    document.getElementById('end').style.display = 'none';
}

document.getElementById('btnWhite').addEventListener('click', voteWhite);

function voteWhite() {
    nameTitle.innerText = 'VOTAR EM BRANCO';
    nameCandidate.innerText = '';
    broken.innerText = '';
    num1.innerText = '0';
    num2.innerText = '0';
    num3.innerText = '0';
    num4.innerText = '0';
    num5.innerText = '0';
    num1.value = '0';
    num2.value = '0';
    num3.value = '0';
    num4.value = '0';
    num5.value = '0';
    sondNumber.play();
    img.style.backgroundImage = "url('./images/person-icon.png')";
    legend.style.display = 'none';
}

let candidato = {
    heriberto: {
        name: 'VEREADOR',
        nameComplete: 'HERIBERTO GREGORIO',
        broken: 'PSD',
        img: "url('./images/heriberto.jfif')",
    },
};
