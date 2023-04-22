class Produto{

    constructor(){
        this.id = 1;
        this.arrayprodutos = [];
    }

    Adicionar(){
        let produto = this.LerDados()
        if(this.Validar(produto) == truen){
          this.Salvar(produto)
        }
    }

    LerDados(){
        let produto = {}

        produto.id = this.id;
        produto.nomeproduto = document.getElementById('input1').value
        produto.quantidadeproduto = document.getElementById('input2').value
        produto.classeproduto = document.getElementById('input3').value

        return produto
    }
    Validar(produto){
        let msg = '';

        if(produto.nomeproduto == ''){
            msg += 'Por favor, insira corretamente o nome do produto \n'
        }
        if(produto.quantidadeproduto == ''){
            msg += 'Por favor, insira a quantidade do produto'
        }
        if(produto.classeproduto == ''){
            msg += 'Por favor, insira a classe do produto'
        }
        if(msg != ''){
            alert(msg)
            return false
        }
            return true
    }
    Salvar(produto){
        this.arrayprodutos.push(produto)
        this.id++;
    }
    Listar(produto){
        let tbody = document.getElementById('linha')
        tbody.innerText = ''

        for(let i = 0; i < this.arrayprodutos.length; i++){

            let tr = linha.insertrow();
            
            let td_id = tr.insertcell();
            let td_nome = tr.insertcell();
            let td_quantidade = tr.insertcell();
            let td_classe = tr.insertcell();
            let td_del = tr.insertcell();

            td_id.innerText = this.arrayprodutos[i].id;
            td_nome.innerText = this.arrayprodutos[i].nomeproduto;
            td_quantidade.innerText = this.arrayprodutos[i].quantidadeproduto;
            td_classe.innerText = this.arrayprodutos[i].classeproduto;
            let images = documento.createelement('img')
            ImageBitmap.src='lixeira.svg'
            td_del.appendchild(imagem);
        }
    }
}

var produto =new Produto();