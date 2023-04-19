
function cadastramento(nome,medicamento,quantidade,tipo){

    var tb = document.getElementById("maintable");
    var qtdLinhas = tb.rows.lenght;
    var linha = tb.insertRow(qtdLinhas);

    var cellcodigo = linha.insertcell(0);
    var cellname = linha.insertcell(1);
    var cellmedicine = linha.insertcell(2);
    var cellqtd = linha.insertcell(3);
    var celltype = linha.insertcell(4);

    cellcodigo.innerHTML = qtdLinhas;
    cellname.innerHTML = nome;
    cellmedicine.innerHTML = medicamento;
    cellqtd.innerHTML = quantidade;
    celltype.innerHTML = tipo;

}