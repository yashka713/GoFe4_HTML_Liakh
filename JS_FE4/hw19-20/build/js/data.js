$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json", function (JSONvalue) {

// 1

        var arrSkills = [];
        for (var i = 0; i < JSONvalue.length; i++) {
            arrSkills = _.orderBy(_.uniq(_.concat(arrSkills, JSONvalue[i].skills), [], ['asc']));
        }
        console.log(arrSkills);

//2
        var objPick = [];
        objPick =  _.map(_.sortBy(JSONvalue, function (obj){return obj.friends.length;}), 'name');
        console.log(objPick);
//3
        var arrFriends = [];
        for (var i = 0; i < JSONvalue.length; i++) {
            arrFriends = _.orderBy(_.uniq(_.concat(arrFriends, _.map(JSONvalue[i].friends, 'name')), [], ['asc']));
        }
        console.log(arrFriends);
    });
});