const vardi = ['Lauris Bigauns', 'Jana Svetlana', 'Nauris Normunds', 'Osis Birze', 'Paula Svilpe'];
const balvas = ['Maja', 'Masina', 'Laiva', 'Dators', 'Celojums'];
const naudasKopa = 100000000;
let uzvaretajuSkaits = 5;
let rindas=document.querySelector('.rindas');//pievieno mainīgo

for (let i = 0; i < uzvaretajuSkaits; i++) {

    let rand = Math.random() * vardi.length;//vārdu skaits mainīgs
    rand = Math.floor(rand);//noapaļo uz leju
    let uzvaretajs=vardi[rand];//console.log vietā
    rindas.innerHTML+=`
<tr>
<td>${i+1}</td> 
<td>${uzvaretajs}</td>
</tr>` //izvade vairākās rindas //$ norāda mainīgo

}




