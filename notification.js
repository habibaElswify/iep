function addNewRow(){
    let notification = document.getElementById('notification').value;

    let table = document.getElementById('notification_table');

    let row = document.createElement('tr');
    let col1 = document.createElement('td');
    let notification1 = document.createTextNode(notification);

    let div = document.createElement('div');
    div.appendChild(notification1);
    div.setAttribute('class', 'gold-border1');
    col1.appendChild(div);
    row.appendChild(col1);

    table.appendChild(row);

    document.getElementById('notification').value = "";
    
}