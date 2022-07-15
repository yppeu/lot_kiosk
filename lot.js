
// 로고 타이핑 효과
const content = "고객님 환영합니다!";
const text = document.querySelector("#popup");
text.style.margin = '0 50px 50px 50px';
let index = 0;

function typing() {
    text.textContent = text.textContent + content[index++];
    if (index > content.length) {
        text.textContent = ""
    }
}
setInterval(typing, 200);
clearInterval(typing);



// 물품 - (버거,스낵,음료)이름, 가격 -> 오브젝트 생성
var Product = {
    name: '',
    price: 0,
    count: 0
};

// 선택한 데이터 리스트
var ProductList = [];

// 결제용 리스트
var CartSubmit = [];



// 체크박스 체크 시, productList에 데이터 추가, 또는 삭제
function getradioValue(e) {
    // 개수를 선택하기 위해 카운트 버튼 표시 처리
    document.getElementById('plusminBT').style.display = 'block';
    document.getElementById('countresult').innerText = Number(0);
    Product.count = 0;
    switch (e.target.id) {
        case 'bul':
            ConfCheck(e.target.checked, '불고기버거', 2000, 0);
            break;

        case 'shrimp':
            ConfCheck(e.target.checked, '새우버거', 2000, 0);
            break;

        case 'cow':
            ConfCheck(e.target.checked, '한우버거', 6500, 0);
            break;

        case 'cheese':
            ConfCheck(e.target.checked, '치즈스틱', 1600, 0);
            break;

        case 'potato':
            ConfCheck(e.target.checked, '양념감자', 1600, 0);
            break;

        case 'tornado':
            ConfCheck(e.target.checked, '토네이도', 1400, 0);
            break;

        case 'coke':
            ConfCheck(e.target.checked, '콜라', 1200, 0);
            break;

        case 'cider':
            ConfCheck(e.target.checked, '사이다', 1200, 0);
            break;

        case 'juice':
            ConfCheck(e.target.checked, '오렌지쥬스', 1500, 0);
            break;
    }
}



// Product 제품 연결해서 ProductList 배열에 삽입
function ConfCheck(checked, name, price, count) {
    if (checked) {
        var newProduct = {};
        newProduct.name = name;
        newProduct.price = price;
        newProduct.count = count;
        console.log(count);
        // resultbt1.addEventListener(function counts(){
        //     resultbt1.addEventListener('click',counts) 
        // });
        ProductList = ProductList.concat(newProduct);

        //console.log(ProductList);
        //console.log(JSON.stringify(ProductList));

    } else {
        ProductList = ProductList.filter(function (product) {
            return product.name !== name;
        });
    }
    console.log(ProductList);
}


    // 제품 갯수 설정
    function counts(type) {
        let resultElement = document.getElementById('countresult');
        if (type == 'plus') {
            Product.count += 1;
        } else if (type == 'minus') {
            if (Product.count > 0) {
                Product.count -= 1;
            }
        }
        resultElement.innerText = Product.count;
    }



// 장바구니 출력 함수
function select() {
    let nameresult = '';
    let priceresult = 0;

    if (Product.count > 0) {
        document.getElementById('content').innerHTML = '';
        for (i = 0; i < ProductList.length; i++) {
            nameresult = ProductList[i].name;
            priceresult = ProductList[i].price;

            let result = '상품 : ' + nameresult + ' 수량 : ' + Product.count + ' 가격 : ' + priceresult + '원';
            let resultText = document.createElement('p');

            resultText.innerHTML = result;
            document.getElementById('content').append(resultText);
        }
    } else {
        alert('개수를 선택해주세요.');
    }
}



// 장바구니 담기
function cart() {
    select();
    let chk = document.querySelectorAll("input[type='radio']");
    chk.forEach(item => {
        Product.count = 0;
        item.checked = false;
        document.getElementById('countresult').innerText = '';
    });
}



// 결제
function pay() {
    unchecked();
    alert('결제가 완료되었습니다.');
    document.getElementById('content').innerText = '';
    document.getElementById('countresult').innerText = '';
}



// 취소
function unchecked() {
    //debugger;
    let chk = document.querySelectorAll("input[type='radio']:checked");
    chk.forEach(item => {
        item.checked = false;
        document.getElementById('plusminBT').style.display = 'none';
        ProductList = []; // 타입 맞춰주기
        document.getElementById('content').innerText = '';
        document.getElementById('countresult').innerText = '';
    });
}



function cancle() {
    unchecked();
}
