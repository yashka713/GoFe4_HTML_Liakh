/**
 * Created by Ярик on 16.04.2016.
 */
"use strict"

var base = new Base({
    title   : 'This is private property',
    student : [{
        name: 'Liakh Yaroslav',
        mobile: '+380506456220',
        residence: 'Kharkiv, Ukraine ',
        company: 'UpSale',
        education: 'University: Simon Kuznets Kharkiv National University of Economics'
    }, {
        name: 'Liakh Yaroslav',
        mobile: '+380506456220',
        residence: 'Kharkiv, Ukraine ',
        company: 'UpSale',
        education: 'University: Simon Kuznets Kharkiv National University of Economics'
        }],
    template: _.template(document.getElementById('base-template').innerHTML)
});
document.body.appendChild(base);