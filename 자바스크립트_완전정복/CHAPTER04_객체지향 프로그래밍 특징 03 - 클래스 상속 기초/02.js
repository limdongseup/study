// 첫번째
function MyClassA() {
    this.property1 = 10;
}

MyClassA.prototype.method1 = function() {
    console.log('this.property1 = ' + this.property1);
};

MyClassA.prototype.method2 = function() {
    console.log('이 기능은 myClassA에 있는 기능입니다.');
};

// 두번째
function MyClassB() {
    this.property1 =10;
}

MyClassB.prototype.method1 = function() {
    console.log('this.property1 = ' + this.property1);
};

MyClassB.prototype.method2 = function() {
    console.log('이 기능은 myCLassB에 있는 기능입니다.');
};

// 인스턴스 생성
var classA = new MyClassA();
// 프로퍼티와 메서드 접근
console.log('classA.property1 = ' + classA.property1);
classA.method1();
classA.method2();

var classB = new MyClassB();
// 프로퍼티와 메서드 접근
console.log('classB.property1 = ' + classB.property1);
classB.method1();
classB.method2();