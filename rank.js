/*
#!name=topic
#!desc=yang
[Script]
Ylgy = type=http-response, pattern=^https?://cat-match.easygame2021.com/sheep/v1/game/personal_info(.*)$, requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/lproperty/meeeeehhh/master/sheepppp.js,argument=
[MITM]
hostname = cat-match.easygame2021.com
*/
var obj = JSON.parse($response.body);

// obj.data.map_md5[1] = "046ef1bab26e5b9bfe2473ded237b572";

obj.data.win_count = 1111111;

$done({body: JSON.stringify(obj)});
