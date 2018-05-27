var order="+";
var flag=0;

function min(p){
    var id1='qty'+p;
    var tmp= parseInt(document.getElementById(id1).innerHTML);
    if(tmp>0){
        document.getElementById(id1).innerHTML=tmp-1;
    }
}
function max(p){
    var id1='qty'+p;
    var tmp= parseInt(document.getElementById(id1).innerHTML);
    if(tmp<10){
        document.getElementById(id1).innerHTML=tmp+1;
    }
}
function addItem(p){
    item=document.getElementById('name'+p).innerHTML;
    iCost=parseInt(document.getElementById('cost'+p).innerHTML);
    iQty=document.getElementById('qty'+p).innerHTML;
    order+=item+":"+iQty+":"+iCost;
    console.log(order);
    document.getElementById('allItem').value=order;
}
function addFlag(){
    flag=1;
    console.log(flag);
}

function check() {
    if(flag==1)
        return true;
    else
        return false;
}