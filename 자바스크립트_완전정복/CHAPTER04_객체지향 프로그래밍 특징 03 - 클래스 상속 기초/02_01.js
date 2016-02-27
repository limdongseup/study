function MyParent() {
    this.property = 10;
}

MyParent.prototype.method1 = function() {
    console.log('this.property1 = ' + this.property);
};

// 첫번째
function MyClassA() {

}

MyClassA.prototype = new MyParent();

MyClassA.prototype.method2 = function() {
    console.log('이 기능은 myClassA에 있는 기능입니다.');
};

// 두번째
function MyClassB() {

}

MyClassB.prototype = new MyParent();

MyClassB.prototype.method2 = function() {
    console.log('이 기능은 myCLassB에 있는 기능입니다.');
};
