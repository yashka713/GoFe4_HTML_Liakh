var unit = {
    GCD: function (a=0, b=0) {
        try {
            function isInteger(num) {
                if (num > 1000000000) return num;
                return (num ^ 0) === num
            }

            a = Math.abs(a);
            b = Math.abs(b);
            if (isInteger(a) && isInteger(b)) {
                let r;          //остаток от деления a на b
                let q;          //частное от целочисленного деления a на b ; a = b*q + r
                let m1 = 1;     //a = m1 * a + n1 * b
                let n1 = 0;
                let m2 = 0;     //b = m2 * a + n2 * b
                let n2 = 1;
                let t;
                while (b != 0) {
                    r = a % b;
                    q = (a - r) / b;
                    a = b;
                    b = r;
                    t = m1 - q * m2;
                    m1 = m2;
                    m2 = t;
                    t = n1 - q * n2;
                    n1 = n2;
                    n2 = t;
                }
                let str = a;
                if ((a == 0) && (b == 0)) return NaN;
                if (a < 0)  a = '(' + a + ')';
                if (b < 0)  b = '(' + b + ')';
                if (m1 < 0)  m1 = '(' + m1 + ')';
                if (n1 < 0)  n1 = '(' + n1 + ')';
                return a;
            } else return undefined;
        } catch (e) {
            console.log("!something wrong in GCD!")
        }
    },
    factor: function (n=0) {
        try {
            let arr = [];
            let res;
            if (isNaN(n) || !isFinite(n) || n % 1 || n == 0) return n.toString();
            if (n < 0) return null;
            res = (n) => {
                var minFactor = (f) => {
                    if (isNaN(n) || !isFinite(n)) return NaN;
                    if (n == 0) return 0;
                    if (n % 1 || n * n < 2) return 1;
                    if (n % 2 == 0) return 2;
                    if (n % 3 == 0) return 3;
                    if (n % 5 == 0) return 5;
                    let m = Math.sqrt(n);
                    for (let i = 7; i <= m; i += 30) {
                        if (n % i == 0)      return i;
                        if (n % (i + 4) == 0)  return i + 4;
                        if (n % (i + 6) == 0)  return i + 6;
                        if (n % (i + 10) == 0) return i + 10;
                        if (n % (i + 12) == 0) return i + 12;
                        if (n % (i + 16) == 0) return i + 16;
                        if (n % (i + 22) == 0) return i + 22;
                        if (n % (i + 24) == 0) return i + 24;
                    }
                    return n;
                };
                if (f == minFactor) return f.toString();
                return minFactor + ',' + searchFactor(f / minFactor);;
            arr = res.split(',');
            for(let i= 0; i< arr.length; i++){
                arr[i] = parseInt(arr[i]);}
            return arr;
            }
        } catch (e) {
            console.log("!something wrong in factor!")
        }
    }
};

//разрешение на вызов файла в nodeJs
try {
    module.exports = unit;
} catch (e) {
    console.log("!something wrong with 'module.exports'")
}