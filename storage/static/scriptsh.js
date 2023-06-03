/*golabal variable*/
let temp;
let moodsh = "create";
let shipment11;
let numm;

/*act &actn*/
function act() {
    let loginform = document.querySelector(".addform");
    loginform.classList.toggle("active");
}
function actn() {
    let loginform = document.querySelector(".addform");
    loginform.classList.remove("active");


}

/*shipment1*/
if (localStorage.shipment1 != null) {
    shipment11 = JSON.parse(localStorage.shipment1);
    numm = shipment11.length;
}
else {
    shipment11 = [];
    numm = 1
}
function addsh() {
    let date=document.getElementById('da').value;
    let amount = document.getElementById('am').value;
    let type = document.getElementById('ts').value;
    let price = document.getElementById('pa').value;
    let sell = document.getElementById('se').value;
    let expe = document.getElementById('ex').value;
    let pro = (sell * amount) - expe - price;

    if (moodsh === "create") {
        let num = numm;
        let newrecord = {
            date,num, amount, type, price, expe, pro
        }
        numm++;
        shipment11.push(newrecord);
    }
    else {
        let num = temp + 1;
        let newrecord = {
            date,num, amount, type, price, expe, pro
        }
        shipment11[temp] = newrecord;
        document.getElementById('add').value = "add";
        document.getElementById('la').innerText = "add shipment";
        moodsh="create"
    }
    actn();
    document.getElementById('da').value = null;

    document.getElementById('am').value = null;
    document.getElementById('ts').value = null;
    document.getElementById('pa').value = null;
    document.getElementById('se').value = null;
    document.getElementById('ex').value = null;
    localStorage.setItem('shipment1', JSON.stringify(shipment11));
    show_shimpent1();
}
function show_shimpent1() {
    let table = "";
    for (let i = 0; i < shipment11.length; i++) {
        table += '<tr><td>' + shipment11[i].date + '</td><td>' + shipment11[i].num + '</td><td> ' + shipment11[i].amount + '</td><td> ' + shipment11[i].type + ' </td><td> ' + shipment11[i].price + ' </td><td> ' + shipment11[i].expe + ' </td><td> ' + shipment11[i].pro + ' </td><td><input type="button"class="btn" value="edit" onclick="edit_sh(' + i + ')"></td></tr>';
    }
    document.getElementById('record4').innerHTML = table;
}
function edit_sh(i) {
    temp = i;
    document.getElementById('da').value = shipment11[i].date;
    document.getElementById('am').value = shipment11[i].amount;
    document.getElementById('ts').value = shipment11[i].type;
    document.getElementById('pa').value = shipment11[i].price;
    document.getElementById('ex').value = shipment11[i].expe;
    document.getElementById('add').value = "update";
    document.getElementById('la').innerText = "update shipment";
    act();
    moodsh = "update";

}
show_shimpent1();