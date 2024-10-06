document.getElementById('addBookButton').addEventListener('click', function() {
    const titleInput = document.getElementById('bookTitle');
    const authorInput = document.getElementById('bookAuthor');
    const message = document.getElementById('message');
    const bookList = document.getElementById('bookList').getElementsByTagName('tbody')[0];

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (title === '' || author === '') {
        alert('책 이름과 저자를 입력해주세요.');
        return;
    }

    // 새로운 행 생성
    const newRow = bookList.insertRow();
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td><button class="removeButton">X</button></td>
    `;

    // 메시지 표시
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 2000);

    // 입력 필드 초기화
    titleInput.value = '';
    authorInput.value = '';

    // 삭제 버튼 이벤트 리스너 추가
    const removeButton = newRow.querySelector('.removeButton');
    removeButton.addEventListener('click', function() {
        bookList.deleteRow(newRow.rowIndex - 1); // -1은 헤더를 고려한 인덱스 조정
    });
});
