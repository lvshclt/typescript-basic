//  설치
//npm i -g typescript
//리액트하는 경우 같이 설치
//@types/node @types/react @types/react-dom @types/jes @types/react-router-dom
//JS로 컴파일하기
//tsc -w
//타입스크립트의 에러
//오직 타입스크립트 ide와 터미널에서만 나타난다. ts에서 에러떠도 그대로 js로 컴파일 되어버림.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  기본
let 변수1 = 'mew';
let 변수2 = 123;
let 변수3 = [123];
let 변수4 = ['mew', 'new'];
let 변수5 = { name: 'alice' };
let 변수6 = {};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  유니온 타입
// 불명확하긴 한거라 주의가 필요.
let 변수7 = 23;
let 변수8 = [1, '2', 3];
// -> let sdfsdf: number | string[] = [1, '2', 3]; <- 이거아님
let 변수9 = { a: '1' };
//유니온 타입일 때, 엄격히 narrowing 해야하는 경우가 많다.  ex_원래 되던 사칙연산 안됨
let mew1 = '가';
mew1 + 324;
let mew2;
mew2 + 24;
// => string, number 각각 + 연산자 가능하지만, 유니온타입은 안 된다. 애매한 상태거든.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  자동 타입 설정
//사실 타입 자동으로 지정됨
let namesd = 'lvshclt';
namesd = 234;
let age = 28;
age = 'dlsfkj';
let hometown = 'changwon';
hometown = 123;
let object = {
    artist: 'ed sheeran',
    song: 'shape of you',
};
let project = {
    member: ['jay', 'kin'],
    days: 24,
    started: true,
};
let user = 'kim';
let agsfe = undefined;
let married = false;
let cjftn = [user, age, married];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  any 타입
// 아예 ts 쉴드 해제 ; 사실상 any 한 것은 아예 완전히 js라고 생각해야하는 듯; 아예 타입 개념 자체가 없어짐.
let 변수10 = 'sfsdfsd';
변수10 = 1243;
변수10 = { dfsdf: 3423 };
변수10 = [234, 23, 43, 5];
let yyyy = 변수10;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  unknown 타입
//약간 null느낌. unknown이라는 타입 자체가 따로있다.
let mew11 = 1332;
mew11 = { dslfk: 234, sdfs: 'dsfs' };
// any와는 다른 unknown의 장점
let xxxx = mew11;
let yy = 123;
let kkk = [1, true, 'hi'];
let jonh = { a: '12', dsfsd: 'dsfsdf', dslkfj: 'true' };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//함수
//파라미터와 리턴값 둘다 타입 지정가능
//1 화살표함수
const func = (x) => {
    return x * 2;
};
func(31);
func('31');
//2 함수선언식
function 함수993(a) {
    return 3;
}
//3 함수표현식
const 함수392 = function (b) {
    return true;
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  void
//리턴값이 없다는 뜻
function func2(x) {
    console.log(313);
    return 'dskfj';
}
//함수 선언 시, 파라미터가 type과 함께 선언했다면,
//호출 시, 반드시 파라미터 넣어서 호출해야함. 즉 func() 안됨
func2();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ?연산자
// 있을 수도, 없을 수도 있는 경우 ; 사실은 undefined | xx 인 셈
function func4(x) { }
function func5(x) { }
function func3(x) { }
func3(3);
func3();
func3('a');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//퀴즈 1
let school = { score: [23, 3, 3, 4], teacher: 'phil', friend: 'jon' };
school.score[5] = false;
school.friend = ['lee', school.teacher];
// 퀴즈 2
// narrowing 방법 1 ; typeof 연산자
const home1 = (name) => {
    if (typeof name === 'string')
        return `안녕하세요 ${name}`;
    else if (typeof name === 'undefined')
        return '이름이 없습니다.';
};
home1('dsf');
home1();
const home2 = (parameter) => {
    if (typeof parameter === 'string')
        return parameter.length;
    else if (typeof parameter === 'number') {
        return parameter.toString().length;
    }
};
// 퀴즈 3
const home3 = (월소득, 집보유여부, 매력점수) => {
    const score = 월소득 * 1 + (집보유여부 ? 500 : 0) + (매력점수 === '상' ? 100 : 0);
    console.log(score);
    if (score >= 600)
        return '결혼가능';
};
console.log(home3(700, false, '중'));
console.log(home3(100, false, '상'));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// html 태그
// html 태그는 타입 자체가 element | null 인 유니온타입 상태이다.
let 제목 = document.querySelector('#title');
// 그래서 narrowing해줘야 뭘 할 수 있다. 예로 아래가 안됨
제목.innerHTML = '반가워요';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  narrowing
//유니온 타입에서 하나의 타입으로 narrow down하는 것.
//어쨌거나 고유하게 지정만 되면 narrowing으로 쳐줌
//방법 1
if (제목 !== null) {
    제목.innerHTML = '반가워요';
}
//방법2  instanceof (추천) // html태그마다 해당하는 타입이 있다. 그걸 해야 그 태그의 속성을 제대로 이용할 수 있다
if (제목 instanceof HTMLHeadingElement) {
    제목.innerHTML = '반가워요';
}
//3 as (쓰지않는 것을 추천)
let 제목2 = document.querySelector('#title');
제목2.innerHTML = '반가워요';
//4 옵셔널체이닝; ?.이후가 가능하면 실행, 아니면 전체를 undefined로
if (제목?.innerHTML) {
    제목.innerHTML = '반가워요';
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//다른예제
let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
let 버튼 = document.querySelector('.button');
if (버튼 instanceof HTMLButtonElement) {
    버튼.addEventListener('click', () => { });
}
let 버튼2 = document.querySelector('.button');
버튼2?.addEventListener('click', () => { });
// let 이미지 = document.querySelector('#image');
// if (이미지 instanceof HTMLImageElement) 이미지.src = 'new.jpg';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  유사배열객체 ;
//forEach는 유사배열객체도 사용가능
let 링크들 = document.querySelectorAll('.naver');
링크들.forEach((a) => {
    if (a instanceof HTMLAnchorElement)
        a.href = 'kakao.com';
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   as
// assertion (평소에 쓰지 말 것. 남이 짠 코드 왜 타입에러나는지 모를때 씀)
//오직 애매한(유니온 타입 등) 상태일때, narrowing할때만 쓰지
// 타입a->타입b이렇게 쓰는거 아님
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 퀴즈 1
const 클리닝함수 = (parameter) => {
    let 클리닝완료 = [];
    parameter.forEach((v) => {
        if (typeof v === 'string')
            클리닝완료.push(Number(v));
        else
            클리닝완료.push(v);
    });
    return 클리닝완료;
};
console.log(클리닝함수([1, 2, '3']));
//퀴즈 2
let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };
const 만들함수 = (x) => {
    if (typeof x.subject === 'string')
        return x.subject;
    else if (Array.isArray(x.subject))
        return x.subject[x.subject.length - 1];
    else
        return '없다';
};
const animal1 = { name: 'dsfs', age: 324 };
const thisKid = {
    name: 'jack',
    phone: 423423,
    email: '23423@nds.com',
    over19: true,
};
// {x:number, y:number}
let example = { x: 324, y: 324 };
const sdjlfaj = { name: '12' };
let 테스트용변수 = {
    size: 123,
    position: [1, 2, 3],
};
테스트용변수.position = [24];
const sample = { name: 'jay' };
sample.name = 'jisoo';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//타입스크립트 에러는, 에디터와 터미널에서만 존재함.
//즉 컴파일 전부 되어버려서 에러있는 대로 컴파일됨
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//literal Types ; 정해놓은 문자만 입력되게. string, number만 되는가??
let 이름;
이름 = 456;
이름 = 123;
let 이름3;
이름3 = '안녕';
이름3 = '잘가';
function 함수334(a) {
    return 0;
}
함수334('bye');
함수334('hello');
function lsafjsldj(a) {
    return ['가위'];
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//literal type 문제점.
// literal type은, 그 값 자체가 새로운 type이다. type은 값으로 쓸 수 없다.
let 자료 = { name: 'jay' };
const 함수91 = (a) => { };
함수91(자료.name);
// => 매개변수에 와야하는 것은 'jay'라는 "타입".
// 반면 자료.name은 string타입에, 값이 'jay'인것이다.
// as const ; literal type 문제점 해결;
// 기능
// 1. obj의 value를 그대로 타입으로 지정해준다
// 2. readonly 생긴다
let 자료2 = { name: 'jay' };
//=> 이 obj는 수정할수도 없고, 자료2.name 의 val은 'jay'이면서 type도 'jay'다.
const 함수32 = (a) => { };
함수(자료2.name);
//사용할 때;
const 함234수 = (p) => {
    return 10;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//메소드 ; 객체안에 정의된 함수를 의미함.
const 회원정보2 = {
    name: 'suzy',
    plusOne() {
        return 3 + 2;
    },
    plusTwo: () => { },
};
// -> 그냥 객체 안에서 함수를 만들 때, key와 value를 저런식으로 한다고 이해하면 되는 듯.
//메소드 호출시
회원정보2.plusOne();
let 회원정보3 = {
    name: 'kim',
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log('안녕');
    },
};
회원정보3.plusOne(1);
회원정보3.changeName();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//콜백함수 ; 고차함수 다음에 호출되는 함수.
function 함수9() { }
function 함수10(a) { }
함수10(함수9);
const cutZero = (x) => {
    let result = x.replace(/^0+/, '');
    return result;
};
const removeDash = (y) => {
    let result = Number(y.replace(/-/g, ''));
    return result;
};
//-> 참고로 litral type은 말그대로 string값만 되는 듯. 함수자체는 안되는 듯.
//시도1
const superFunc = (a, func1, func2) => {
    console.log(func2(func1(a)));
};
// -> 이렇게하면 에러난다.. 선언할거면 변수에 직접지정해야하나..??????
//시도2
const superFunc1 = (a, func1, func2) => {
    console.log(func2(func1(a)));
};
//시도3
function superFunc2(a, func1, func2) {
    console.log(func2(func1(a)));
}
superFunc('010-1111-2222', cutZero, removeDash);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class
// class;  object 뽑아 내는 기계
//부모
class MachineThatLaysHeroes {
    q;
    w;
    e;
    r;
    constructor(q, w, e, r) {
        this.q = q;
        this.w = w;
        this.e = e;
        this.r = r;
    }
}
//자식
const 럭스 = new MachineThatLaysHeroes('속박', '방어막', '빛', '궁');
const 세나 = new MachineThatLaysHeroes('공격', '속박', '이속', '글로벌궁');
console.log(럭스);
///////////////////////////////////////////////////////////////////////////////////////////////
//prototype ; obj 형태로서, 자동적으로 몰래 가지고 있는, 부모가 가지고 있는 유전자.
class Mewsdlfj {
    name;
    constructor(a) {
        this.name = a;
    }
    // prototype함수는 이렇게 만든다.
    함수(a) {
        console.log(a);
    }
}
Mewsdlfj;
class Ming {
    name;
    constructor(a) {
        this.name = a;
    }
    func() {
        console.log(3);
    }
}
class 기계 {
    q;
    w;
    constructor() {
        this.q = 'strike';
        this.w = 'snowball';
    }
    newMethod() { }
}
기계.prototype.name = '999999999999999999999aa';
// 이제 기계.name 하면 쓸 수 있다.
기계.prototype.showName = (x) => {
    console.log(x);
};
//이제 기계.showName(3) 이렇게 사용가능
const 누누 = new 기계();
// 부모의 유전자인 prototype은, 자식에게 은밀히 상속된다.
console.log(누누.name);
누누.showName(3);
///////////////////////////////////////////////////////////////////////////////////////////////
// prototype chain
// js 원리 ;  object에서 자료뽑을 때 일어나는 일
// 그게 있다면 출력, 없다면 부모에게 물어봄. // 없으면 계속 올라감.
const array1 = [1, 2, 3];
array1.length;
const array2 = new Array(1, 2, 3);
//=> 실제로는 컴퓨터입장에서 이렇게 배열을 만든다.
array2.length;
//=> 부모인 Array의 메소드를 빌려다 쓰는 것이다.
///////////////////////////////////////////////////////////////////////////////////////////////
// 부모-자식 상속 방법 3가지
//0. class 안에서, 필드값
// -> 파라미터를 사용할 수 있는 장점 존재
// 1. class안에서, constructor안에서,  this. 로 상속
// -> 자식이 {q:'strike'} 이렇게 직접 가짐
//2. class밖에서, 부모.prototype.xxx = xxx 로 상속
// 원칙 상, 자식이 가지고 있지 않고, 부모가 은밀히 보유 중.
// 하지만 자식이 자식.xxx 하는 경우, 자식에게 없어도
// 윗세대를 거슬로 올라가 찾는 js작동원리 때문에 사용가능하다.
//////////////////////////////////////
// 클래스 필드값
class Perso21n {
    //필드값
    data = 0;
    data3 = 0;
    //둘다 사실 타입지정 알아서됨
    //constructor 안에서, this.xx는, constructor 밖에서 선언이 필요.
    //즉 ts 는 js와 달리, 필드값에서 한번 선언해줘야함
    name;
    constructor(a) {
        this.name = a;
    }
}
// constructor의 경우, 내뱉는 자식이 무조건 객체라, 리턴의 타입은안해줘도됨
class Person35 {
    data = 0;
}
let john = new Person35();
let kim = new Person35();
console.log(john.data);
console.log(kim.data);
//this.어쩌구를 사용하고 싶으면 어쩌구를 미리 필드값으로 만들어줘야합니다.
//안그러면 에러남
class Car {
    model;
    price;
    constructor(a, b) {
        this.model = a;
        this.price = b;
    }
    tax() {
        return this.price / 10;
    }
}
let car1 = new Car('소나타', 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300
class Word {
    num;
    str;
    constructor(...param) {
        let 숫자들 = [];
        let 문자들 = [];
        param.forEach((v) => {
            if (typeof v === 'string')
                문자들.push(v);
            else
                숫자들.push(v);
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
}
let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
let 선생 = { name: 'jake', age: 234 };
let 상품 = {
    brand: 'Samsung',
    serialNumber: 1360,
    model: ['TV', 'phone'],
};
let 장바구니 = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
];
const aobject = {
    plus: (a, b) => {
        return a + b;
    },
    minus: (a, b) => {
        return a - b;
    },
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2부
//  rest parameter
// 매개변수 갯수 미정일때 배열로 받아냄.
const 함수124 = (a, ...b) => { };
//=> 항상 마지막에 써야하는 듯?
//rest parameter의 type지정
const 함수125 = (...a) => { };
// 무조건 배열로 나오니까
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 참고로 ...의 사용
//1. rest parameter ; 매개변수 미정일대 배열로 받는 것
//2. spread operator ; 배열 펼치기
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   destructuring  구조분해
// array와 object 안에 있는 key의 value를,   변수로 쓰고플때
// 좌우 생김새를 맞춰주고 변수로 쉽게 뽑아내자.
//구
let arr9 = ['안녕', 300];
let 변수81 = arr9[0];
let 변수82 = arr9[1];
console.log(변수81);
//신 - 배열; 쌍을 똑같이 만든다는 원리, 배열일때는 변수명이 일치하지 않아도 된다.
let [변수93, 변수94] = ['안녕', 300];
console.log(변수93);
//신- 객체 ; 객체일땐 변수이름을 (key)와(value) 모두에  맞춰야 쓸만함
let { students: students, ages: ages } = { students: true, ages: 20 };
//    실제 키 : 변수명
console.log(students, ages);
//신 - 최종 ; key와 val이 완전히 같을때 그냥 하나씩 쓰기로함.
let { studenta, agea } = { studenta: true, agea: 20 };
//         변수명                      값
console.log(studenta, agea);
// 적용
let object100 = { name: 'jisoo', born: 1995 };
const 함수100 = ({ name: name, born: born }) => {
    console.log(`${name} was born in ${born}`);
};
함수100(object100);
// 해설,
// 함수100은 {}을 파라미터로 받는다.
// 근데 그 객체는, name: ldskjfsl , born :dskjlsdf 이라는 형식이다.
// 나는 근데, 내 함수안에서, 그 name키에 해당하는 값을 name이라는 변수로 지칭하겠다.
// 따라서, 함수안에서 name은, 내가 파라미터로 받은 객체의 name키의 실제 val 이다.
//결론
// 객체를 파라미터로 받을 때, ()안에 { a, b } 라고하면
// 일단, 내가 함수에서 쓸 파라미터는 a, b인데 그 값은, 내가 받은 객체에서, a,b라는 key의 값을 그대로 변수로 쓰겠다는 것이다
let person13 = { student: true, age: 20 };
function 함수344({ student, age }) {
    console.log(student, age);
}
함수344({ student: true, age: 20 });
function sljfsdl({ a: dsf, b: asdf }) { }
//숙제1
const 최댓값 = (...n) => {
    // n [1,2,3,4,]
    return n.sort((e, s) => s - e)[0];
};
console.log(최댓값(6, 3, 7, 2));
const 정답최댓값 = (...n) => {
    let max = Number.MIN_VALUE;
    n.map((v) => {
        if (v > max)
            max = v;
    });
    return max;
};
console.log(정답최댓값(6, 3, 7, 2));
const 함수222 = ({ user, comment, admin }) => {
    console.log(user, comment, admin);
};
함수222({ user: 'kim', comment: [3, 5, 4], admin: false });
const 함수333 = ([a, b, c]) => {
    console.log(a, b, c);
};
함수333(['40', 'wine', false]);
//=>array[] destructuring할 때는 자유작명이 가능합니다
///////////////////////////////////////////////////////////////////////
//   Narrowing 할 수 있는 방법 더 알아보기
// && 연산자 자세히 알기.
// 원래 &&  : 조건식 2개가 참이면 전부 참으로 판정해주세요~ 라는 논리연산자
// 자료형을 넣으면 :
// && 사이에서 처음 등장하는 falsy 값을 찾아서 그걸 리턴하고 멈춤, 없다면 '마지막 값'을 리턴함.
// 1 && null && 3   // null이 남음
// undefined && '안녕' && 100  // undefined 남음
function printAll(strs) {
    if (strs && typeof strs === 'string') {
        console.log(s);
    }
}
//typeof는 alias 분별못함
function 함수02(animal) {
    if (typeof animal === Fish) {
    }
}
//in 은 가능, 서로 배타적인 속성을 가지고있을대
// key   in   변수 -> 이 변수에 이 key가 있냐?는 뜻
function 함수03(animal) {
    if ('swim' in animal) {
        animal.swim = 'sdlfkjl';
    }
    else if ('fly' in animal) {
        animal.fly = 'sdfsdf';
    }
}
// 2. object두개가 비슷하면 부모class가 누군지 물어봐서 narrowing 가능
// 자식 instanceof 부모클래스
let 날짜 = new Date();
if (날짜 instanceof Date) {
    console.log(12);
}
function 함67수(x) {
    if (x.wheel === '4개') {
        console.log('이 차는 ' + x.color);
    }
    else if (x.wheel === '2개') {
        console.log('이 바이크는 ' + x.color);
    }
}
//////////////////////////////////////////////////
//  never 타입.
//사실상 거의 안씀. 실무에선 void쓰면되니까.
// 보이는 경우? 내 코드가 이상하다는 뜻임. 점검하라는 신호임.
// 조건 1) 절대 return을 하지 않아야하고
// 조건 2) 함수 실행이 끝나지 않아야합니다 (전문용어로 endpoint가 없어야합니다)
// 실은 조건1, 2는 같은 소리인데 모든 자바스크립트 함수 맨 밑엔 return undefined 라는 숨겨진 코드를 가지고 있습니다.
// 그래서 조건2가 맞으면 1도 맞음
function 함수234() {
    while (true) {
        console.log(123);
    }
}
function 함수2342() {
    throw new Error('에러메세지');
}
function 함수1235(parameter) {
    if (typeof parameter === 'string') {
        parameter + 1;
    }
    else {
        parameter;
    }
}
// 위 함수는 뭔가 이상한 함수입니다.
// 지금 narrowing을 이용해서 파라미터의 타입이 string 이면 뭔가 해달라고 써놨는데
// else 문이 존재합니다. 타입이 string이 아닐 경우 이거 해달라는 뜻입니다.
// 근데 else문은 말이 안되죠? 지금 파라미터가 string 밖에 못들어오는데 말입니다.
// 이런 잘못된 narrowing을 사용했을 때 파라미터의 타입이 never로 변합니다. 파라미터에 마우스 올려보셈
// 이런 건 있을 수 없다, 일어나면 안된다고 알려주는 느낌입니다.
// 그럴 때 never를 구경할 수 있으니 never 타입이 발견되는 경우 코드를 수정하는게 어떨까요.
///////////////////////////////////////////////////////////////////////////////////////////////////////
// 함수 선언문이 아무것도 return 하지 않고 끝나지도 않을 경우 void 타입이 자동으로 return 타입으로 할당되며
function 함수() {
    // throw new Error();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
// 함수 표현식이 아무것도 return 하지 않고 끝나지도 않을 경우 never 타입이 자동으로 return 타입으로 할당됩니다.
let 함수2 = function () {
    // throw new Error();
};
///////////////////////////////////////////////////////////////////////////////////////////////////////
// 마우스 올려보면 나옵니다.
// 또는 tsconfig.json에서 strict 옵션을 켜둘 경우
// 함부로 any 타입을 지정해주지 않는 경우가 있습니다.
// 그럴 때 array 같은거 대충 타입지정 안하고 만들면
// let arr = [];
// 원래는 any[] 이런 타입이 되는데 any를 가질 수 없어서
// never[] 이런 타입이 발견되기도 합니다.
// 아무튼 쓸 일이 별로 없기 때문에 이럴 때도 등장한다고 알아두기만 하면 됩니다.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 타입스크립트의 고유 문법 ;
// 1. class의 public
//자식이 수정할 수 있다.
//2. class의 private
//자식이 수정할 수 없다.
class User {
    name;
    constructor() {
        this.name = 'kim';
    }
    //부모인 user의 prototype함수 선언함
    add(a) {
        console.log(a);
    }
}
const 유저1 = new User();
유저1.name = 'park';
유저1.add = () => {
    return 2;
};
console.log(유저1);
class User3 {
    name;
    familyName;
    constructor() {
        this.name = 'kim';
        let hello = this.familyName + '안뇽'; //가능
    }
}
let 유저31 = new User3();
유저31.name = 'park'; //가능
유저31.familyName = 456; //에러남
/////////////////////////////////////////////////////////////////////////////////////
//class에서 사용가능한 protected, static 키워드
class User3213 {
    x = 10;
    y = 10;
}
class NewUser44 extends User3213 {
    z = 30;
    doThis() {
        this.x = 20;
        this.y = 20;
    }
}
// user3213의 내용을 44에 복붙한 꼴.
// protected ; static
// private ; extends
class User32 {
    a = 10;
    b = 10;
    c = 10;
    static d = 10;
    e = 10;
}
class User999 extends User32 {
}
class User456 {
    static x = 10;
    static y = 20;
    static addOne(a) {
        User456.x = User456.x + a;
    }
    static printX() {
        console.log(User456.x);
    }
}
User456.addOne(3); //이렇게 하면 x가 3 더해져야함
User456.addOne(4); //이렇게 하면 x가 4 더해져야함
User456.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
class Square {
    $div;
    가로;
    세로;
    배경색;
    constructor(가로, 세로, 배경색) {
        this.가로 = 가로;
        this.세로 = 세로;
        this.배경색 = 배경색;
    }
    draw() {
        this.$div = document.createElement('div');
        this.$div.style.width = `${this.가로}px`;
        this.$div.style.height = `${this.세로}px`;
        this.$div.style.backgroundColor = this.배경색;
        this.$div.style.position = 'absolute';
        this.$div.style.top = `${Math.random() * 370}px`;
        this.$div.style.left = `${Math.random() * 370}px`;
        document.body.append(this.$div);
    }
}
let 네모 = new Square(30, 30, 'red');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
let dog1 = 'bark';
let dog2 = { name: 'paw' };
//////////////////////////////////////////////////
//  Generic 함수
// 함수에 타입파라미터 넣을 수 있다.
function 함324234(x) {
    return x[0]; // as number;
}
let a = 함324234([4, 2]);
console.log(a);
console.log(a + 1);
//
function 함수1994(x, y) {
    return x[0]; // y[0];
}
let adsf = 함수1994([4, 5], ['4', ' 5']);
let adsf2 = 함수1994(['4', ' 5'], [4, 5]);
//
//여기서 extends는 복사가아니라, 체크한다는 의미
// t가 number 타입의 속성을 가지고 있는지 체크하겠다.
function 함324수(x) {
    return x - 1;
}
함324수(3);
// t가 newtype233을 만족합니까~~~? 라는 의미의 extends
function 함수3331(x) {
    return x.length;
}
let kk = 함수3331({ length: 4 });
//////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////
//Redux
//////////////////////////////////////////////////////////////////
//Tuple 타입
let 멍멍 = ['a', true];
let 멍멍1 = ['a'];
let 멍멍2 = ['a'];
let 멍멍3 = ['a'];
// -> ?은 항상 맨 마지막. 없는경우number가 두번째고 이러니까...
// restparameter에서 tuple
function 함수1991(...x) {
    console.log(x);
}
함수1991(189, 'dkdk');
// spead연산자
let arr99 = [1, 2, 3, 99999, 999999];
let arr2 = [4, ...arr99];
//
const 데이터 = ['스타벅스 어텀블렌드', 18000, true];
//몇개올지 모를때는 ... 타입  [] 이렇게간다.
let arr = [
    '동서녹차',
    4000,
    true,
    false,
    true,
    true,
    false,
    true,
];
//
function 미친졸려(a, b, ...c) { }
미친졸려('a', true, 6, 3, '1', 4);
//
function 지겹다뭔가(...r) {
    let answer = [[], []];
    r.forEach((v) => {
        if (typeof v === 'string')
            answer[0].push(v);
        else if (typeof v === 'number')
            answer[1].push(v);
    });
    return answer;
}
console.log(지겹다뭔가('b', 5, 6, 8, 'a'));
/////////////////////////////////
//  declare
//어딘가 정의되어있으니, 지금 여기서 에러나게하지마세요
//
console.log(decdec + 1);
