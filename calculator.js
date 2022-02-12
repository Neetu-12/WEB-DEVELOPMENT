function save(neetu){
    document.getElementById("screen").value+=neetu
}
function solve(){
    var a=document.getElementById('screen').value//display hoke value aaegi yha like:-'2+5'-ye user me string me hoga...
    var b=eval(a)//ye string ko intergers me convert krke deta h...jese:=7
    document.getElementById('screen').value=b
}
