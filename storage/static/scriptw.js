/*golabal variable*/
let workers;
let temp;
let moodw = "create";
let salaries = 0;
/*act &actn*/
function act() {
    let loginform = document.querySelector(".addform");
    loginform.classList.toggle("active");
}
function actn() {
    let loginform = document.querySelector(".addform");
    loginform.classList.remove("active");


}
/*functions*/
if (localStorage.worker != null) {
    workers = JSON.parse(localStorage.worker);
}
else {
    workers = [];
}
function addw() {
    let id = document.getElementById('wi').value;
    let job = document.getElementById('jo').value;
    let name = document.getElementById('na').value;
    let phone = document.getElementById('ph').value;
    let days = document.getElementById('da').value;
    let salary = document.getElementById('sa').value;
    let newrecord = {
        id, job, name, phone, days, salary
    }
    if (moodw === "create") {
        workers.push(newrecord);
        salaries += salary;
    }
    else {
        salaries -= workers[temp].salary;
        salaries += salary;
        workers[temp] = newrecord;
        moodw = "create";
        document.getElementById('wi').value = null;
        document.getElementById('jo').value = null;
        document.getElementById('na').value = null;
        document.getElementById('ph').value = null;
        document.getElementById('da').value = null;
        document.getElementById('sa').value = null;
        document.getElementById('add').value = "add";
        document.getElementById('la').innerText = "add worker"
    }
    localStorage.setItem('worker', JSON.stringify(workers));
    show_worker()
    actn();
}
function show_worker() {
    let table = "";
    for (let i = 0; i < workers.length; i++) {
        table += '<tr><td>' + workers[i].id + '</td><td> ' + workers[i].job + '</td><td> ' + workers[i].name + ' </td><td>' + workers[i].phone + '</td><td> ' + workers[i].days + ' </td><td>' + workers[i].salary + '</td> <td><input type="button"class="btn" value="edit" onclick="update_worker(' + i + ')"></td><td><input type="button"class="btn" value="remove" onclick="remove_worker(' + i + ')"></td></tr>';
    }
    document.getElementById('record1').innerHTML = table;

}
function remove_worker(i) {
    workers.splice(i, 1);
    localStorage.worker = JSON.stringify(workers)
    show_worker()
}
function update_worker(i) {
    temp = i;
    document.getElementById('wi').value = workers[i].id;
    document.getElementById('jo').value = workers[i].job;
    document.getElementById('na').value = workers[i].name;
    document.getElementById('ph').value = workers[i].phone;
    document.getElementById('da').value = workers[i].days;
    document.getElementById('sa').value = workers[i].salary;
    document.getElementById('add').value = "update";
    document.getElementById('la').innerText = "update worker";
    act();
    moodw = "update";

}
show_worker();
