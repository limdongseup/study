// 1번 구현
/*
function Investment(stock) {
    this.stock = stock;
}
*/


// 2~4번 구현
/*
function Investment(parameters) {
    var params = parameters || {};
    this.stock = params.stock;
    this.shares = params.shares;
    this.sharePrice = params.sharePrice;
    this.cost = this.shares * this.sharePrice;
}*/


// describe 중첩
function Investment(parameters) {
    var params = parameters || {};
    this.stock = params.stock;
    this.shares = params.shares;
    this.sharePrice = params.sharePrice;
    this.cost = this.shares * this.sharePrice;
}

Investment.prototype.roi = function() {
    return (this.stock.sharePrice - this.sharePrice) / this.sharePrice;
};

Investment.prototype.isGood = function() {
    return this.roi() > 0;
};
