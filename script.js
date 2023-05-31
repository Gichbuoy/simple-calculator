function add() {
    var act=0, b=0;
act=f.tbox.value;
b=act.charAt(act.length-1);
if(b=='+' || b=='-' || b=='/' || b=='*') {
    f.tbox.value=act.substring(0, act.length-1);
    f.tbox.value+='+';
}else {
    f.tbox.value+='+';
}

    
}

function sub() {
    var act=0, b=0;
act=f.tbox.value;
b=act.charAt(act.length-1);
if(b=='+' || b=='-' || b=='/' || b=='*') {
    f.tbox.value=act.substring(0, act.length-1);
    f.tbox.value+='-';
}else {
    f.tbox.value+='-';
}

    
}

function div() {
    var act=0, b=0;
act=f.tbox.value;
b=act.charAt(act.length-1);
if(b=='+' || b=='-' || b=='/' || b=='*') {
    f.tbox.value=act.substring(0, act.length-1);
    f.tbox.value+='/';
}else {
    f.tbox.value+='/';
}

    
}

function mul() {
    var act=0, b=0;
act=f.tbox.value;
b=act.charAt(act.length-1);
if(b=='+' || b=='-' || b=='/' || b=='*') {
    f.tbox.value=act.substring(0, act.length-1);
    f.tbox.value+='*';
}else {
    f.tbox.value+='*';
}

}