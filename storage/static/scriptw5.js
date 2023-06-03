/*golabal variable*/
let temp;
let moodsh = "create";
let shipment17;
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
if (localStorage.shipment7 != null) {
    shipment17 = JSON.parse(localStorage.shipment7);
    numm = shipment17.length;
}
else {
    shipment17 = [];
    numm = 1
}
function addsh() {
    let date = document.getElementById('da').value;
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
        shipment17.push(newrecord);
    }
    else {
        let num = temp + 1;
        let newrecord = {
          date,  num, amount, type, price, expe, pro
        }
        shipment17[temp] = newrecord;
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
    localStorage.setItem('shipment3', JSON.stringify(shipment17));
    show_shimpent1();
}
function show_shimpent1() {
    let table = "";
    for (let i = 0; i < shipment17.length; i++) {
        table += '<tr><td>' + shipment17[i].date + '</td><td>' + shipment17[i].num + '</td><td> ' + shipment17[i].amount + '</td><td> ' + shipment17[i].type + ' </td><td> ' + shipment17[i].price + ' </td><td> ' + shipment17[i].expe + ' </td><td> ' + shipment17[i].pro + ' </td><td><input type="button"class="btn" value="edit" onclick="edit_sh(' + i + ')"></td></tr>';
    }
    document.getElementById('record4').innerHTML = table;
}
function edit_sh(i) {
    temp = i;
    document.getElementById('da').value = shipment17[i].date;
    document.getElementById('am').value = shipment17[i].amount;
    document.getElementById('ts').value = shipment17[i].type;
    document.getElementById('pa').value = shipment17[i].price;
    document.getElementById('ex').value = shipment17[i].expe;
    document.getElementById('add').value = "update";
    document.getElementById('la').innerText = "update shipment";
    act();
    moodsh = "update";

}
show_shimpent1();