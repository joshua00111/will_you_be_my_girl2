const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const resultDiv = document.getElementById('result');

yesBtn.addEventListener('click', () => {
    resultDiv.innerHTML = '<i class="happy-sticker">&#128525;&#128149;</i><p>I love you Juanita</p>';
});

noBtn.addEventListener('click', () => {
    resultDiv.innerHTML = '<i class="sad-sticker">&#128533;&#128580;</i><p>I love you Juanita</p>';
});
