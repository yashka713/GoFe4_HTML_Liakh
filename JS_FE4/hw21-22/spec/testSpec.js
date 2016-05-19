/**
 * Created by Ярик on 19.05.2016.
 */
// найти файл и подключить его к тестированию
var obj = require('../js/unit.js');
describe("Проверка самого алгоритма НОД(базовые требования)", function() {

    it("НОД(m, n)", function() {
        var result1;
        result1 = obj.GCD(18,222);
        expect(result1).toBe(6);
    });
    it("НОД(0, n) = n; НОД(m, 0) = m;НОД(m, m) = m", function() {
        var result1, result2, result3;
        result1 = obj.GCD(0,5);
        result2 = obj.GCD(5,0);
        result3 = obj.GCD(5,5);
        expect(result1).toBe(5);
        expect(result2).toBe(5);
        expect(result3).toBe(5);
    });
    it("НОД(1, n) = 1; НОД(m, 1) = 1;", function() {
        //подготовка (prepare)
        var result1, result2;
        //действие (act)
        result1 = obj.GCD(1,5);
        result2 = obj.GCD(5,1);
        //результат(assert)
        expect(result1).toBe(1);
        expect(result2).toBe(1);
    });
});

describe("Проверка 'уловок'", function() {

    it("НОД(m, n)", function() {
        var result1;
        result1 = obj.GCD(18,222);
        expect(result1).toBe(6);
    });

});