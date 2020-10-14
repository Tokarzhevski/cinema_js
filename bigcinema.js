var kreslo = [[true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true ]];
var etalon = [[true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true ]];
window.onload=function () {
    initz();
document.getElementById("send").onclick=function () {
    sale();
    alert("Продано");
};
};

function initz() {
    for (var r=0; r<kreslo.length; r++){
        for (var m=0; m<kreslo[r].length; m++){
            if (kreslo[r][m]==true){
                document.getElementById("k"+(r+1)+(m+1)).src="image/seat_avail.png";
                document.getElementById("k"+(r+1)+(m+1)).title="Кресло свободно";
            }else {
                document.getElementById("k"+(r+1)+(m+1)).src="image/seat_select.png";
                document.getElementById("k"+(r+1)+(m+1)).title="Кресло зарезервивовано!";
            }
        }
    }
}
function rezv(r, m) {
    if (etalon[r-1] [m-1]){
        if (kreslo[r-1] [m-1]){
            kreslo[r-1] [m-1]=false;
            document.getElementById("k"+(r)+(m)).src="image/seat_select.png";
            document.getElementById("k"+(r)+(m)).title="Кресло зарезервивовано!";
        }else {
            kreslo[r-1] [m-1]=true;
            document.getElementById("k"+(r)+(m)).src="image/seat_avail.png";
            document.getElementById("k"+(r)+(m)).title="Кресло свободно";
        }
    }
}
function sale() {
var totalsum=0;
for (var r=0; r<kreslo.length; r++){
    for (var m=0; m<kreslo[r].length; m++){
        if (!kreslo[r][m]){
            if (r==0){
                totalsum+=150;
            }else if (r==4){
                totalsum+=50;
            }else {
                totalsum+=100;
            }
            etalon[r][m]=kreslo[r][m];
            document.getElementById("k"+[r+1]+[m+1]).src="image/seat_unavail.png";
            document.getElementById("k"+[r+1]+[m+1]).title="Кресло продано";
        }
    }
}
document.getElementById("sum").innerHTML="Всего: "+totalsum+"грн"
}


document.getElementById("send2").onclick=function () {
    search();
    sale();
};
function search() {
    var count = parseInt(document.getElementById("count").value);
var answer=false;
    switch (count){
        case 2:
            for ( var r=0; r<etalon.length; r++){
                for (var m=0; m<etalon[r].length; m++){
                    if (etalon[r][m] && etalon[r][m+1]){
                        var messege = "В ряду № "+(r+1)+"свободны кресла № "+(m+1)+" и "+(m+2)+"свободны , будете брать?";
                        answer=confirm(messege);
                        if (answer==true){
                            etalon[r][m]=kreslo[r][m]=false;
                            etalon[r][m+1]=kreslo[r][m+1]=false;
                            document.getElementById("k"+[r+1]+[m+1]).src="image/seat_unavail.png";
                            document.getElementById("k"+[r+1]+[m+1]).title="Кресло продано";
                            document.getElementById("k"+[r+1]+[m+2]).src="image/seat_unavail.png";
                            document.getElementById("k"+[r+1]+[m+2]).title="Кресло продано";
                            break;
                        }
                    }
                }
                if (answer==true){
                    break;
                }
            }
            break;
        case 3:
            for (var r=0; r<etalon.length; r++){
                for(var m=0; m<etalon[r].length; m++){
                    answer=poiskkresl(r, count, m);
                    if(answer){
                        break;
                    }
                    /*
                    if (etalon[r][m] && etalon[r][m+1] && etalon[r][m+2]){
                        var messege = "В ряду №"+(r+1)+"свободно место № "+(m+1)+"и "+(m+2)+"и "+(m+3)+"свободны , будете брать?";
                        answer=confirm(messege);
                        if(answer==true){
                            etalon[r][m]=kreslo[r][m]=false;
                            etalon[r][m+1]=kreslo[r][m+1]=false;
                            etalon[r][m+2]=kreslo[r][m+2]=false;
                            document.getElementById("k"+[r+1]+[m+1]).src="image/seat_unavail.png";
                            document.getElementById("k"+[r+1]+[m+1]).title="Кресло продано";
                            document.getElementById("k"+[r+1]+[m+2]).src="image/seat_unavail.png";
                            document.getElementById("k"+[r+1]+[m+2]).title="Кресло продано";
                            document.getElementById("k"+[r+1]+[m+3]).src="image/seat_unavail.png";
                            document.getElementById("k"+[r+1]+[m+3]).title="Кресло продано";
                            break;
                        }
                    }
                    */
                }
                if (answer){
                    break;
                }
            }
            break;
        case 4:
            for (var r=0; r<etalon.length; r++){
                for (var m=0; m<etalon[r].length; m++){
                    answer=poiskkresl(r,count,m);
                    if(answer){
                        break;
                    }
                    /*
                    if (etalon[r][m] && etalon[r][m+1] && etalon[r][m+2] && etalon[r][m+3]){
                        var messege = "В ряду №"+(r+1)+"место № "+(m+1)+"и № "+(m+2)+"и № "+(m+3)+"и № "+(m+4)+" свободно , будете брать?";
                        answer=confirm(messege);
                        if (answer==true){
                            etalon[r][m]=kreslo[r][m]=false;
                            etalon[r][m+1]=kreslo[r][m+1]=false;
                            etalon[r][m+2]=kreslo[r][m+2]=false;
                            etalon[r][m+3]=kreslo[r][m+3]=false;
                            document.getElementById("k"+[r+1]+[m+1]).src="image/seat_unavail.png";
                            document.getElementById("k"+[r+1]+[m+1]).title="Кресло продано";
                            document.getElementById("k"+[r+1]+[m+2]).src="image/seat_unavail.png";
                            document.getElementById("k"+[r+1]+[m+2]).title="Кресло продано";
                            document.getElementById("k"+[r+1]+[m+3]).src="image/seat_unavail.png";
                            document.getElementById("k"+[r+1]+[m+3]).title="Кресло продано";
                            document.getElementById("k"+[r+1]+[m+4]).src="image/seat_unavail.png";
                            document.getElementById("k"+[r+1]+[m+4]).title="Кресло продано";
                            break;
                        }
                    }*/
                }
                if(answer){
                    break;
                }
            }
            break;
    }
    if(answer==false){
        alert("Нет других мест");
    }
}
function poiskkresl(ryad, count, position) {
    var rezult=false;
    var answer=false;
    var number=0;
    for(var i=position; i<(position+count); i++){
        if(etalon[ryad][i]){
            rezult=true;
            number++;
        }else{
            rezult=false;
            number=0;
        }
    }
    if(rezult==true&&number==count){
        var messege="В ряду "+(ryad+1)+" крeсло № "+(position+1)+" по "+(position+count)+" свободны, будете брать?";
        answer=confirm(messege);
        if (answer){
            for(var z=position; z<(position+count); z++){
                etalon[ryad][z]=kreslo[ryad][z]=false;
                document.getElementById("k"+[ryad+1]+[z+1]).src="image/seat_unavail.png";
                document.getElementById("k"+[ryad+1]+[z+1]).title="Кресло продано";
            }
        }
    }
    return answer;
}























































