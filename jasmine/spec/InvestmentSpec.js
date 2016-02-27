// 1번 구현
describe("주식 투자는", function() {
    it("대상이 주식이어야 한다", function() {
        var stock = new Stock();
        var investment = new Investment(stock);
        expect(investment.stock).toBe(stock);
    });
});

// 2~4번 구현q
describe("주식 투자는", function() {
    var stock, investment;

    beforeEach(function() {
        stock = new Stock();
        investment = new Investment({
            stock : stock,
            shares : 100,
            sharePrice : 20
        });
    });

    it("대상이 주식이어야 한다", function() {
        expect(investment.stock).toBe(stock);
    });

    it("매수 수량이 있어야 한다", function() {
        expect(investment.shares).toEqual(100);
    });

    it("매수 단가가 있어야 한다", function() {
        expect(investment.sharePrice).toEqual(20);
    });

    it("비용이 수반된다", function() {
        expect(investment.cost).toEqual(2000);
    });
});


// describe 중첩
/*
describe("주식 투자는", function() {
    var stock, investment;

    beforeEach(function() {
        stock = new Stock();
        investment = new Investment({
            stock : stock,
            shares : 100,
            sharePrice : 20
        });
    });

    it("대상이 주식이어야 한다", function() {
        expect(investment.stock).toBe(stock);
    });

    it("매수 수량이 있어야 한다", function() {
        expect(investment.shares).toEqual(100);
    });

    it("매수 단가가 있어야 한다", function() {
        expect(investment.sharePrice).toEqual(20);
    });

    it("비용이 수반된다", function() {
        expect(investment.cost).toEqual(2000);
    });

    // 중첩
    describe("주가가 상승하면", function() {
        beforeEach(function() {
            stock.sharePrice = 40;
        });

        it("투자 수익률은 양(+)의 값을 가진다", function() {
            expect(investment.roi()).toEqual(1);
        });

        it("우량 투자자다", function() {
            expect(investment.isGood()).toBeTruthy();
        });
    });
});*/
