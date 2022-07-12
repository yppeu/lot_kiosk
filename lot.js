// 물품 - (버거,스낵,음료)이름, 가격 -> 오브젝트 생성
var Product = {
    name: '',
    price: 0,
    count: 0
};


// 선택한 데이터 리스트
var ProductList = [];

// 결제용 리스트
var ProductPay = [];

// 체크박스 체크 시, productList에 데이터 추가, 또는 삭제
function getCheckboxValue(e) {
    //debugger;
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

        let resultBt = document.createElement('button onclick='counts("plus")' value=+ ');
        resultBt.innerHTML = 

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
    //let number = resultElement.innerText;
    if (type == 'plus') {
        Product.count = Product.count + 1;
    } else if (type == 'minus') {
        if (Product.count > 0) {
            Product.count = Product.count - 1;
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
    let chk = document.querySelectorAll("input[type='checkbox']");
    chk.forEach(item => {
        item.checked = false;
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
    let chk = document.querySelectorAll("input[type='checkbox']");
    chk.forEach(item => {
        item.checked = false;
        ProductList = []; // 타입 맞춰주기
        document.getElementById('content').innerText = '';
        document.getElementById('countresult').innerText = '';
    });
}



function cancle() {
    unchecked();
}