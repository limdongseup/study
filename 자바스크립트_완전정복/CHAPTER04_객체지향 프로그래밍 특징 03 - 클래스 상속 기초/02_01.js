function MyParent() {
    this.property = 10;
}

MyParent.prototype.method1 = function() {
    console.log('this.property1 = ' + this.property);
};

// ù��°
function MyClassA() {

}

MyClassA.prototype = new MyParent();

MyClassA.prototype.method2 = function() {
    console.log('�� ����� myClassA�� �ִ� ����Դϴ�.');
};

// �ι�°
function MyClassB() {

}

MyClassB.prototype = new MyParent();

MyClassB.prototype.method2 = function() {
    console.log('�� ����� myCLassB�� �ִ� ����Դϴ�.');
};
