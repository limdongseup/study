// 부모클래스
function MyParent() {
    this.property1 = 'value1';
}

MyParent.prototype.method1 = function() {
    console.log('myparent.method1() ' +  this.property1);
};

// 자식 클래스
function MyChild() {

}

// 상속
MyChild.prototype = new MyParent();

//인스턴스 생성
var child1 = new MyChild();
// 부모의 프로퍼티와 메서드 호출
console.log('child1.property1 = ' + child1.property1);
child1.method1();