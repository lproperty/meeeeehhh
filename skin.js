/*
#!name=topic
#!desc=yang
[Script]
Ylgy = type=http-response, pattern=^https?://cat-match.easygame2021.com/sheep/v1/game/skin/info(.*)$, requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/lproperty/meeeeehhh/master/sheepppp.js,argument=
[MITM]
hostname = cat-match.easygame2021.com
*/
var obj = JSON.parse($response.body);

obj.data.ts=1664644392;

$done({body: JSON.stringify(obj)});
