//CHAMAR BODY
const body = document.querySelector('body')

//CRIAR HEADER - filho body
const header = document.createElement('header')
body.appendChild(header)

//DIV CABECALHO - FILHO HEADER
const cabecalho = document.createElement('nav')
cabecalho.classList.add('cabecalho')
header.appendChild(cabecalho)

// IMG LOGO - FILHO CABECALHO
const logo = document.createElement('img')
logo.classList.add('logo')
logo.src = "./img/Partum Logo - Original - 5000x5000.png"
logo.alt = "Logo Partum"
cabecalho.appendChild(logo)

//DIV MENU - FILHO CABECALHO
const menu = document.createElement('div')
menu.classList.add('menu')
cabecalho.appendChild(menu)

//ICONES NAVEGAÇÃO - FILHOS MENU
const catTodos = document.createElement('button')
catTodos.classList.add('catTodos')
catTodos.innerText = 'Todos'
const catAcessorios = document.createElement('button')
catAcessorios.classList.add('catAcessorios')
catAcessorios.innerText = 'Acessórios'
const catUtilidades = document.createElement('button')
catUtilidades.classList.add('catUtilidades')
catUtilidades.innerText = 'Utilidades'
const catCosmeticos = document.createElement('button')
catCosmeticos.classList.add('catCosmeticos')
catCosmeticos.innerText = 'Cosméticos'
menu.append(catTodos, catAcessorios, catUtilidades, catCosmeticos)

//MAIN - FILHO BODY
const main = document.createElement('main')
body.appendChild(main)

//SECTION PRODUTOS - FILHO MAIN
const produtos = document.createElement('section')
produtos.classList.add('produtos')
main.appendChild(produtos)

//UL - FILHO PRODUTOS
const listagemProdutos = document.createElement('ul')
listagemProdutos.classList.add('listagemProdutos')
produtos.appendChild(listagemProdutos)

//SECTION CARRINHO
const carrinho = document.createElement('section')
carrinho.classList.add('carrinho')
main.appendChild(carrinho)

//DIV CAMPOPESQUISA - FILHO SECTION CARRINHO
const campoPesquisa = document.createElement('div')
campoPesquisa.classList.add('campoPesquisa')
carrinho.appendChild(campoPesquisa)

//INPUT - FILHO CAMPOPESQUISA
const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Digite aqui sua pesquisa'
campoPesquisa.appendChild(input)

//BUTTON PESQUISA - FILHO CAMPOPESQUISA
const botaoPesquisa = document.createElement('button')
botaoPesquisa.classList.add('botaoPesquisa')
botaoPesquisa.innerText = 'Pesquisar'
campoPesquisa.appendChild(botaoPesquisa)

//DIV CARRINHOCOMPRAS - FILHO CARRINHO
const carrinhoCompras = document.createElement('div')
carrinhoCompras.classList.add('carrinhoCompras')
carrinho.appendChild(carrinhoCompras)

//H3 TITULOCARRINHO - FILHO CARRINHOCOMPRAS
const tituloCarrinho = document.createElement('h3')
tituloCarrinho.classList.add('tituloCarrinho')
tituloCarrinho.innerText = 'Carrinho de compras'
carrinhoCompras.appendChild(tituloCarrinho)

//SECTION ITENSCARRINHO - FILHO CARRINHOCOMPRAS
const itensCarrinho = document.createElement('section')
itensCarrinho.classList.add('itensCarrinho')
carrinhoCompras.appendChild(itensCarrinho)

//UL COMPRASCARRINHO - FILHO CARRINHO COMPRAS
const comprasCarrinho = document.createElement('ul')
comprasCarrinho.classList.add('comprasCarrinho')
itensCarrinho.appendChild(comprasCarrinho)

//SECTION COMPRAS - FILHO CARRINHOCOMPRAS
const compras = document.createElement('section')
compras.classList.add('compras')
carrinhoCompras.appendChild(compras)

//SPAN QUANTIDADECOMPRA - FILHO COMPRAS
const quantidadeCompra = document.createElement('span')
quantidadeCompra.classList.add('quantidadeCompra')
compras.appendChild(quantidadeCompra)

//SPAN QUANTIDADE - FILHO QUANTIDADECOMPRA
const quantidade = document.createElement('span')
quantidade.classList.add('quantidade')
quantidade.innerText = 'Quantidade: '
quantidadeCompra.appendChild(quantidade)

//SPAN TOTALCOMPRA - FILHO COMPRAS
const totalCompra = document.createElement('span')
totalCompra.classList.add('totalCompra')
compras.appendChild(totalCompra)

//SPAN TOTAL - FILHO TOTALCOMPRA
const total = document.createElement('span')
total.classList.add('total')
total.innerText = 'Total:'
totalCompra.appendChild(total)



//FUNCTION LER ITENS DO OBJETO
function listarprodutos(listaprodutos){

    for(let i = 0; i <listaprodutos.length; i++){
        let produtosLista = listaprodutos[i]
        let cardProdutos = criarCardProdutos(produtosLista)
        listagemProdutos.appendChild(cardProdutos)
    }
}
listarprodutos(products)

//FUNCTION CRIAR CARDS
function criarCardProdutos(produtosLista){
    let imagemProduto = produtosLista.imagem 
    let categoriaProduto = produtosLista.categoria 
    let nomeProduto = produtosLista.nome
    let descricaoProduto = produtosLista.descricao
    let precoProduto = produtosLista.preco 
    let idProduto = produtosLista.id 

    let liProduto = document.createElement('li')
    let tagImagem = document.createElement('img')
    let caracteristicasProdutos = document.createElement('div')
    let span = document.createElement('span')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    let strong = document.createElement('strong')


    let addCarrinho = document.createElement('button') //produtoNoCarrinho

    addCarrinho.addEventListener("click", () => produtoNoCarrinho(produtosLista))


    //DEFININDO ID NO BUTTON
    if(idProduto != undefined){
        addCarrinho.setAttribute('idProduto', idProduto)
    }

    liProduto.classList.add('liProduto')
    tagImagem.classList.add('produtoImagem')
    caracteristicasProdutos.classList.add('caracteristicasProdutos')
    addCarrinho.classList.add('addCarrinho')

    tagImagem.src = imagemProduto
    tagImagem.alt = nomeProduto
    span.innerText = categoriaProduto
    h2.innerText = nomeProduto
    p.innerText = descricaoProduto
    strong.innerText = `R$ ${precoProduto.toFixed(2)}`.replace('.',',')
    addCarrinho.innerText = `Adicionar ao carrinho`

    liProduto.append(tagImagem, caracteristicasProdutos)
    caracteristicasProdutos.append(span, h2, p, strong, addCarrinho)

    return liProduto
}


let valorTotal = document.createElement('span')

let carrinhoArray = []

function produtoNoCarrinho(produto){
    comprasCarrinho.innerHTML = ''
    carrinhoArray.push(produto)
    criarCardsCarrinho(carrinhoArray)
    numeroQuantidade.innerText = `${carrinhoArray.length}`

}


//CRIAR CARDS CARRINHO
function criarCardsCarrinho(listaCarrinho){

    for(let i = 0; i < listaCarrinho.length; i++){
        let imagemCarrinho = listaCarrinho[i].imagem
        let nomeCarrinho = listaCarrinho[i].nome
        let precoCarrinho = listaCarrinho[i].preco

        let liCarrinho = document.createElement('li')
        let tagDiv = document.createElement('div')
        let tagImagem = document.createElement('img')
        let h2 = document.createElement('h2')
        let strong = document.createElement('strong')

        let removerCarrinho = document.createElement('button')
        removerCarrinho.innerText = 'Remover'
        removerCarrinho.id = `${listaCarrinho[i].id}`


        removerCarrinho.addEventListener('click', removerDoCarrinho)


        liCarrinho.classList.add('liCarrinho')

        tagImagem.src = imagemCarrinho
        tagImagem.alt = nomeCarrinho
        h2.innerText = nomeCarrinho

        
        valorTotal.classList.add('valorTotal')
        valorTotal.innerText =  `R$ ${precoCompra(carrinhoArray).toFixed(2)}`.replace('.',',')
        totalCompra.appendChild(valorTotal)

        strong.innerText = `R$ ${precoCarrinho.toFixed(2)}`.replace('.',',')


        tagDiv.append(h2, strong, removerCarrinho)
        liCarrinho.append(tagImagem, tagDiv)
        comprasCarrinho.appendChild(liCarrinho)
        }
    }


//REMOVER ITENS DO CARRINHO
function removerDoCarrinho(produto){

    comprasCarrinho.innerHTML = ''
    valorTotal.innerHTML = 'R$ 0,00'
    let produtoEncontrado = carrinhoArray.find(product => {
    return product.id == parseInt(produto.target.id)})

    let index = carrinhoArray.indexOf(produtoEncontrado)
    carrinhoArray.splice(index, 1)

    criarCardsCarrinho(carrinhoArray)

    numeroQuantidade.innerText = `${carrinhoArray.length}`
}


//FUNÇÃO CALCULAR VALOR TOTAL
function precoCompra(fechamentoCarrinho){
    let precoTotal = 0
    for(let key in carrinhoArray){
        precoTotal = precoTotal + carrinhoArray[key].preco

    }
    return precoTotal
}

let numeroQuantidade = document.createElement('span')
numeroQuantidade.classList.add('numeroQuantidade')
quantidadeCompra.appendChild(numeroQuantidade)


//FUNÇÕES PARA FILTRO NO NAVEGADOR
catTodos.addEventListener('click', function(){adcTodos(products)})

function adcTodos(products){
    listagemProdutos.innerHTML = ''
    listarprodutos(products)
}


catAcessorios.addEventListener('click', function(){adcAcessorios(products, 'Acessórios')})

function adcAcessorios(products, categoria){
    listagemProdutos.innerHTML = '' 
    let filtrados = [] 

    for(let i = 0; i < products.length; i++){ 
        let filtro = products[i].categoria.includes(categoria) 
        if(filtro == true){ 
            filtrados.push(products[i])
        }
    }
    listarprodutos(filtrados)
}

catUtilidades.addEventListener('click', function(){adcUtilidades(products, 'Utilidades')})

function adcUtilidades(products, categoria){
    listagemProdutos.innerHTML = ''
    let filtrados = []

    for(let i = 0; i < products.length; i++){
        let filtro = products[i].categoria.includes(categoria)
        if(filtro == true){
            filtrados.push(products[i])
        }
    }
    listarprodutos(filtrados)
}


catCosmeticos.addEventListener('click', function(){adcCosmeticos(products, 'Cosméticos')})

function adcCosmeticos(products, categoria){
    listagemProdutos.innerHTML = ''
    let filtrados = []

    for(let i = 0; i < products.length; i++){
        let filtro = products[i].categoria.includes(categoria)
        if(filtro == true){
            filtrados.push(products[i])
        }
    }
    listarprodutos(filtrados)
}

//FUNÇÃO - PESQUISAR INPUT E BOTÃO
botaoPesquisa.addEventListener("click", function(){pesquisaInput(products)})

function pesquisaInput(products){
    listagemProdutos.innerHTML = '' 
    let pesquisa = input.value 


    let pesquisado = products.filter(produto =>{
        let nome = produto.nome.toLowerCase()
        let categoria = produto.categoria.toLowerCase()
        return nome.includes(pesquisa) | categoria.includes(pesquisa)
    })
    listarprodutos(pesquisado)
}

