/**
 * Created by Ярик on 19.05.2016.
 */
// найти файл и подключить его к тестированию
var obj = require('../js/unit.js');
describe("Проверка самого алгоритма НОД(базовые требования)", function() {

    it("НОД(m, n)", function() {
        var result1, result2, result3;
        result1 = obj.GCD(18,222);
        result2 = obj.GCD(11545520000,2020531205);
        result3 = obj.GCD(11545155315520000.55,202051554056541554631205.26);
        expect(result1).toBe(6);
        expect(result2).toBe(35);
        expect(result3).toBe(512);
    });
    it("НОД(0, n) = n; НОД(m, 0) = m;НОД(m, m) = m", function() {
        var result1, result2, result3, result4, result5;
        result1 = obj.GCD(0,5);
        result2 = obj.GCD(5,0);
        result3 = obj.GCD(5,5);
        result4 = obj.GCD(0,0);
        result5 = obj.GCD(2.5, 3.0);
        expect(result1).toBe(5);
        expect(result2).toBe(5);
        expect(result3).toBe(5);
        expect(result4).toBeNaN();
        expect(result5).toBeUndefined();
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
    it("НОД(-m, -n)", function() {
        var result1, result2, result3;
        result1 = obj.GCD(-18,-222);
        result2 = obj.GCD(-11545520000,2020531205);
        expect(result1).toBe(6);
        expect(result2).toBe(35);
    });
});

describe("Факторизации'", function() {

    it("факторизация 'простых' чисел", function() {
        var result1, result2, result3,result4;
        result1 = obj.factor(210);
        result2 = obj.factor(0);
        result3 = obj.factor(1);
        result4 = obj.factor(-210);
        expect(result1).toEqual([2, 3, 5, 7]);
        expect(result2).toEqual('0');
        expect(result3).toEqual([1]);
        expect(result3).toEqual([1]);
        expect(result4).toEqual(null);
    });
    it("число c 10 знаками", function() {
        var result1;
        result1 = obj.factor(1234567891);
        expect(result1).toEqual([1234567891]);
    });
    it("очень большое число :)", function() {
        var result1;
        result1 = obj.factor(8888888888888888);
        expect(result1).toEqual([2, 2, 2, 11, 17, 73, 101, 137, 5882353]);
    });
});