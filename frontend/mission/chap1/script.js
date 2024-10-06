// 음식 데이터: 이미지, 설명, 가격
const menu = {
    chinese: [
        { name: "짜장면", img: "img/짜장면.jpg", desc: "달콤하고 짭짤한 면 요리", price: "₩7,000" },
        { name: "짬뽕", img: "img/짬뽕.jpg", desc: "매콤하고 얼큰한 해물탕면", price: "₩8,000" },
        { name: "탕수육", img: "img/탕수육.jpg", desc: "바삭하게 튀긴 고기에 새콤달콤한 소스", price: "₩7,000" }
    ],
    japanese: [
        { name: "초밥", img: "img/초밥.jpg", desc: "신선한 생선과 밥이 조화를 이루는 일식", price: "₩10,000" },
        { name: "오코노미야끼", img: "img/오코노미야끼.jpg", desc: "다양한 재료를 넣어 구운 일본식 전", price: "₩7,000" },
        { name: "카이센동", img: "img/카이센동.jpeg", desc: "신선한 해산물이 듬뿍 들어간 덮밥", price: "₩7,000" }
    ],
    korean: [
        { name: "불고기", img: "img/불고기.jpg", desc: "달달한 양념에 재운 고기 요리", price: "₩8,000" },
        { name: "김치찌개", img: "img/김치찌개.jpg", desc: "얼큰하고 시원한 김치와 돼지고기 찌개", price: "₩7,000" },
        { name: "국밥", img: "img/국밥.png", desc: "따뜻하고 든든한 한 그릇 국밥", price: "₩7,000" }
    ],
    western: [
        { name: "스테이크", img: "img/스테이크.jpg", desc: "고급스러운 육즙 가득한 양식 요리", price: "₩20,000" },
        { name: "햄버거", img: "img/햄버거.jpg", desc: "육즙 가득한 패티가 들어간 햄버거", price: "₩7,000" },
        { name: "피자", img: "img/피자.png", desc: "쫄깃한 도우 위에 치즈와 다양한 토핑", price: "₩7,000" }
    ]
};

// 메뉴 표시 함수
const displayMenu = (type) => {
    const menuItemsDiv = document.getElementById("menu_items");
    menuItemsDiv.innerHTML = ''; // 기존 내용을 지우고 새로운 내용 추가

    let selectedMenu;

    // 'all' 타입일 경우 모든 카테고리의 메뉴를 합침
    if (type === "all") {
        selectedMenu = Object.values(menu).flat();
    } else {
        selectedMenu = menu[type];
    }

    selectedMenu.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu_item");

        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.name;

        const name = document.createElement("h3");
        name.textContent = item.name;

        const desc = document.createElement("p");
        desc.textContent = item.desc;

        const price = document.createElement("p");
        price.textContent = item.price;

        itemDiv.appendChild(img);
        itemDiv.appendChild(name);
        itemDiv.appendChild(desc);
        itemDiv.appendChild(price);

        menuItemsDiv.appendChild(itemDiv);
    });
};

// 동적으로 버튼 생성 및 이벤트 리스너 추가
const categories = Object.keys(menu);
const buttonContainer = document.getElementById("button_container");

// 'All' 버튼 생성
const allButton = document.createElement("button");
allButton.textContent = "All";
allButton.addEventListener('click', () => displayMenu("all"));
buttonContainer.appendChild(allButton);

// 각 카테고리에 대한 버튼 생성
categories.forEach(category => {
    const button = document.createElement("button");
    button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    button.addEventListener('click', () => displayMenu(category));
    buttonContainer.appendChild(button);
});

// 기본 메뉴는 'all'로 표시
displayMenu("all");
