$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json", function (JSONvalue) {

// 1

        var arrSkills = [];
        for (var i = 0; i < JSONvalue.length; i++) {
            arrSkills = _.orderBy(_.uniq(_.concat(arrSkills, JSONvalue[i].skills), [], ['asc']));
        };
        console.log(arrSkills);

//2

        var objPick = [];
        for (var j = 0; j < JSONvalue.length; j++) {
            var objWork = _.pick(JSONvalue[j], ['name', 'friends']);
            objPick.push(objWork);
        };

        for (var j = 0, len = objPick.length - 1; j < len; j++) {
          var swapped = false;
          var i = 0;
          while (i < len) {
            if (objPick[i].friends.length > objPick[i+1].friends.length) {
              var c = objPick[i];
              objPick[i] = objPick[i+1];
              objPick[i+1] = c;
              swapped = true;
            }
            i++;
          }

          if(!swapped)
            break;
        }
        console.log(objPick);

        //3
        var arrFriends = [];
        for (var i=0; i < JSONvalue.length; i++){
            arrFriends = _.orderBy( _.uniq(_.concat(arrFriends, _.map(JSONvalue[i].friends, 'name')), [],['asc']));
        };
        console.log(arrFriends);
    });
});