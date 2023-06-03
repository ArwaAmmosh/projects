/*golabal variable*/
let temp;
let moodc = "create";
let companys;

/*act &actn*/
function act() {
    let loginform = document.querySelector(".addform");
    loginform.classList.toggle("active");
}
function actn() {
    let loginform = document.querySelector(".addform");
    loginform.classList.remove("active");


}

/*company*/
if (localStorage.company != null) {
    companys = JSON.parse(localStorage.company);

}
else {
    companys = []
}
function addc() {
    let id = document.getElementById('ci').value;
    let name = document.getElementById('cn').value;
    let phone = document.getElementById('cna').value;
    let bank = document.getElementById('ba').value;
    let newrecord = {
        id, name, phone, bank
    }
    if (moodc === "create") {
        companys.push(newrecord);
    }
    else {
        companys[temp] = newrecord;
        moodc = "create";
        document.getElementById('add').value = "add";
        document.getElementById('la').innerText = "Add company";
        document.getElementById('ci').value = null;
        document.getElementById('cn').value = null;
        document.getElementById('cna').value = null;
        document.getElementById('ba').value = null;
    }
    localStorage.setItem('company', JSON.stringify(companys));
    show_company()
    actn();
}
function show_company() {
    let table = "";
    for (let i = 0; i < companys.length; i++) {
        table += '<tr><td>' + companys[i].id + '</td><td> ' + companys[i].name + '</td><td> ' + companys[i].phone + ' </td><td>' + companys[i].bank + '</td> <td><input type="button"class="btn" value="edit" onclick="update_company(' + i + ')"></td><td><input type="button"class="btn" value="remove" onclick="remove_company(' + i + ')"></td></tr>';
    }
    document.getElementById('record2').innerHTML = table;
}
function update_company(i) {
    temp = i;
    document.getElementById('ci').value = companys[i].id;
    document.getElementById('cn').value = companys[i].job;
    document.getElementById('cna').value = companys[i].name;
    document.getElementById('ba').value = companys[i].phone;
    document.getElementById('add').value = "update";
    document.getElementById('la').innerText = "update company";
    act();
    moodc = "update";
}
function remove_company(i) {
    companys.splice(i, 1);
    localStorage.company = JSON.stringify(companys)
    show_company();
}
show_company();