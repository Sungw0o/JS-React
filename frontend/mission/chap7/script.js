window.onload = function () {
    const textDisplay = document.getElementById('text-display');
    const textInput = document.getElementById('text-input');
    const errorsDisplay = document.getElementById('errors');
    const timeDisplay = document.getElementById('time');
    const accuracyDisplay = document.getElementById('accuracy');
    const restartBtn = document.getElementById('restart-btn');

    const text = 'And in the end it turned out that the creature was her grandfather';
    let startTime;
    let timer;
    let totalErrors = 0;

    // Reset everything
    function resetTest() {
        clearInterval(timer);
        textInput.value = '';
        errorsDisplay.textContent = '0';
        timeDisplay.textContent = '0s';
        accuracyDisplay.textContent = '100';
        totalErrors = 0;
        startTime = null;
        textInput.disabled = false;
    }

    // Start timer and test
    function startTest() {
        if (!startTime) {
            startTime = new Date().getTime();
            timer = setInterval(updateTime, 1000);
        }
    }

    // Update timer
    function updateTime() {
        const currentTime = new Date().getTime();
        const timePassed = Math.floor((currentTime - startTime) / 1000);
        timeDisplay.textContent = `${timePassed}s`;
    }

    // Calculate accuracy
    function calculateAccuracy() {
        const typedText = textInput.value;
        const correctChars = typedText.split('').filter((char, i) => char === text[i]).length;
        const accuracy = Math.round((correctChars / typedText.length) * 100);
        return isNaN(accuracy) ? 100 : accuracy;
    }

    // Handle typing event
    textInput.addEventListener('input', () => {
        startTest();

        const typedText = textInput.value;
        const textLength = typedText.length;

        if (text.substring(0, textLength) === typedText) {
            textDisplay.style.color = 'green';
        } else {
            textDisplay.style.color = 'red';
            totalErrors++;
            errorsDisplay.textContent = totalErrors;
        }

        accuracyDisplay.textContent = calculateAccuracy();

        if (typedText === text) {
            clearInterval(timer);
            textInput.disabled = true;
        }
    });

    // Restart button
    restartBtn.addEventListener('click', resetTest);

    resetTest();  // Initialize app
}
