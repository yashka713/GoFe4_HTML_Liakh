var unit = {
    GCD: function (a,b) {
        try{
            var r;          //остаток от деления a на b
            var q;          //частное от целочисленного деления a на b ; a = b*q + r
            var m1 = 1;     //a = m1 * a + n1 * b
            var n1 = 0;
            var m2 = 0;     //b = m2 * a + n2 * b
            var n2 = 1;
            var t;
            while (b!=0)
            {
                r = a%b;
                q = (a-r)/b;
                a = b;
                b = r;
                t = m1 - q * m2;
                m1 = m2;
                m2 = t;
                t = n1 - q * n2;
                n1 = n2;
                n2 = t;
            }
            var str = 'Наибольший общий делитель чисел '+ a + ' и ' + b + ' равен '+ a +';';
            if (a<0)  a = '('+a+')';
            if (b<0)  b = '('+b+')';
            if (m1<0)  m1 = '('+m1+')';
            if (n1<0)  n1 = '('+n1+')';
            str = str + a + ' = '+ m1 + ' * ' + a + ' + ' + n1 + ' * ' + b;
            return console.log(a);
        }
        catch (e){
            console.log("!something wrong!")
        }
    }
};
unit.GCD(-5,0);

//разрешение на вызов файла в nodeJs
module.exports = unit;