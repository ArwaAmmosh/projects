
/*golabal variable*/
let totale=0;
let expenses;

/*act &actn*/
function act() {
    let loginform = document.querySelector(".addform");
    loginform.classList.toggle("active");
}
function actn() {
    let loginform = document.querySelector(".addform");
    loginform.classList.remove("active");


}
/*expense*/
if (localStorage.expense != null) {
    expenses = JSON.parse(localStorage.expense);
}
else {
    expenses = []
}
function addexp() {
    let dat = document.getElementById('dat').value;
    let nam = document.getElementById('nam').value;
    let am = parseInt(document.getElementById('am').value);
    let newrecord = {
        dat, nam, am
    }
    expenses.push(newrecord);
    localStorage.setItem('expense', JSON.stringify(expenses));
    document.getElementById('dat').value = null;
    document.getElementById('nam').value = null;
    document.getElementById('am').value = null;
    show_exp();
    actn();
}
function show_exp() {
    let table = "";
    for (let i = 0; i < expenses.length; i++) {
        table += '<tr><td>' + expenses[i].dat + '</td><td> ' + expenses[i].nam + '</td><td> ' + expenses[i].am + ' </td><td><input type="button"class="btn" value="remove" onclick="remove_exp(' + i + ')"></td></tr>';
    }
    document.getElementById('record3').innerHTML = table;
}
show_exp();
function remove_exp(i) {
    expenses.splice(i, 1);
    localStorage.expense = JSON.stringify(expenses)
    show_exp();
}
function display_total() {
    for(i=0;i<expenses.length;i++){
        let n=parseInt(expenses[i].am);
        totale += n;
       }
    document.getElementById('tota').value = totale;
    act();
}

