// �θ�Ŭ����
function MyParent() {
    this.property1 = 'value1';
}

MyParent.prototype.method1 = function() {
    console.log('myparent.method1() ' +  this.property1);
};

// �ڽ� Ŭ����
function MyChild() {

}

// ���
MyChild.prototype = new MyParent();

//�ν��Ͻ� ����
var child1 = new MyChild();
// �θ��� ������Ƽ�� �޼��� ȣ��
console.log('child1.property1 = ' + child1.property1);
child1.method1();