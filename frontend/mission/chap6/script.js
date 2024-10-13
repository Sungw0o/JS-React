window.onload = function () {
    const pwLengthInput = document.getElementById('pwLength');
    const numbersChk = document.getElementById('numbers');
    const smLettersChk = document.getElementById('smLetters');
    const capLettersChk = document.getElementById('capLetters');
    const symbolsChk = document.getElementById('symbols');
    const generateBtn = document.querySelector('button');
    const resultArea = document.querySelector('.resultArea');

    const charTypes = {
        numbers: '0123456789',
        smLetters: 'abcdefghijklmnopqrstuvwxyz',
        capLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        symbols: '!@#$%^&*'
    };

    generateBtn.addEventListener('click', function () {
        const length = parseInt(pwLengthInput.value);
        const options = {
            numbers: numbersChk.checked,
            smLetters: smLettersChk.checked,
            capLetters: capLettersChk.checked,
            symbols: symbolsChk.checked
        };

        if (!Object.values(options).some(Boolean)) {
            alert('조건을 추가해주세요.');
            return;
        }

        if (!length || length < 5 || length > 70) {
            alert(`비밀번호 길이는 5에서 70 사이여야 합니다.`);
            return;
        }

        resultArea.textContent = generatePassword(length, options);
    });

    function generatePassword(length, options) {
        let availableChars = '';
        let resultPw = '';

        for (const [key, chars] of Object.entries(charTypes)) {
            if (options[key]) {
                resultPw += getRandomChar(chars);
                availableChars += chars;
            }
        }

        for (let i = resultPw.length; i < length; i++) {
            resultPw += getRandomChar(availableChars);
        }

        return shuffle(resultPw);
    }

    function getRandomChar(charSet) {
        return charSet[Math.floor(Math.random() * charSet.length)];
    }

    function shuffle(str) {
        return str.split('').sort(() => Math.random() - 0.5).join('');
    }
}
