function addElement(){
    var val= document.getElementById('Text_input').value;
    var table = document.getElementById('show');

    var row = table.insertRow(0);
    row.className = 'Row';
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var newone = document.createElement('button');
    
    
    cell1.innerHTML=val;
    cell2.innerHTML="<input type =\"button\" value =\"Delete\" onclick = \"deleteRow(this)\">";
    document.getElementById('Text_input').value="";
    
}

function deleteRow(btn){
    var i = btn.parentNode.parentNode.rowIndex;
    document.getElementById("show").deleteRow(i);
}


   
