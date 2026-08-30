const TAXA_ENTREGA = 4;

const WHATSAPP = "5544997323438";

let tipoRecebimento = "entrega";

let carrinho = [];


/* =========================
   PRODUTOS
========================= */

const produtos = {

    lanches: [

        ["X-Burguer", 19, "Acompanha 1 molho de alho."],

        ["Pop Chicken", 22, "Acompanha 1 molho de alho."],

        ["Chicken", 26, "Acompanha 1 molho de alho."],

        ["X-Calabresa", 27, "Acompanha 1 molho de alho."],

        ["X-Bacon", 27, "Acompanha 1 molho de alho."],

        ["X-Salada", 25, "Acompanha 1 molho de alho."],

        ["X-Rings", 27, "Acompanha 1 molho de alho."],

        ["Especial Duplo Cheddar", 37, "Acompanha 1 molho de alho."],

        ["Duplo Cheddar", 33, "Acompanha 1 molho de alho."],

        ["Americano", 28, "Acompanha 1 molho de alho."]
    ],


    baldes: [

        [
            "Balde 8 unidades",
            21,
            "8 unidades — escolha Sassami, coxinha ou tulipa. Acompanha 1 ketchup e 1 barbecue."
        ],

        [
            "Balde P",
            40,
            "12 unidades — escolha Sassami, coxinha ou tulipa. Acompanha 1 ketchup e 1 barbecue."
        ],

        [
            "Balde M",
            50,
            "15 unidades — escolha Sassami, coxinha ou tulipa. Acompanha 1 ketchup e 1 barbecue."
        ],

        [
            "Balde G",
            60,
            "20 unidades — escolha Sassami, coxinha ou tulipa. Acompanha 1 ketchup e 1 barbecue."
        ],

        [
            "Balde Fritas P",
            55.90,
            "12 unidades de Sassami, coxinha ou tulipa + 400 g de batata ou polenta. Metade frango e metade fritas."
        ],

        [
            "Balde Fritas M",
            65.90,
            "15 unidades de Sassami, coxinha ou tulipa + 600 g de batata ou polenta. Metade frango e metade fritas."
        ]
    ],


    combos: [

        [
            "Combo Individual de Frango",
            36,
            "8 unidades de Sassami, coxinha ou tulipa + 300 g de batata ou polenta + barbecue + ketchup + refrigerante 220 ml."
        ],

        [
            "Combo Duo de Frango",
            66,
            "12 unidades de Sassami, coxinha ou tulipa + 300 g de batata ou polenta + barbecue + ketchup + creme de alho + refrigerante 600 ml."
        ],

        [
            "Combo Família de Frango",
            106,
            "20 unidades de coxinha, Sassami ou tulipa + 500 g de batata ou polenta + barbecue + ketchup + creme de alho + mostarda e mel + refrigerante 2 L."
        ],

        [
            "Combo 1",
            96,
            "1 kg de frango — coxinha, Sassami ou tulipa + 1 kg de batata com bacon e cheddar."
        ],

        [
            "Combo 2 — Misto",
            120,
            "1 kg de coxinha e Sassami + 1 kg de polenta frita + 500 g de calabresa acebolada."
        ],

        [
            "Combo 3",
            116,
            "1 kg de coxinha + 500 g de batata frita + 500 g de anel de cebola + 500 g de polenta frita + refrigerante 2 L."
        ],

        [
            "Combo 4",
            120,
            "1 kg de mandioca frita + 1 kg de Sassami + 500 g de calabresa acebolada + refrigerante 2 L."
        ],

        [
            "Combo 5",
            50,
            "1 kg de batata com bacon e cheddar."
        ],

        [
            "Combo 6",
            40,
            "1 kg de mandioca frita + 500 g de calabresa acebolada."
        ],

        [
            "Combo Individual de Lanche",
            45,
            "1 Chicken + 300 g de batata frita + refrigerante 220 ml."
        ],

        [
            "Combo Duo de Lanche",
            66,
            "2 Chickens + 500 g de batata + 2 refrigerantes 220 ml."
        ],

        [
            "Combo Trio",
            80,
            "3 Chickens + 500 g de batata + 3 refrigerantes 220 ml."
        ],

        [
            "Combo Família de Lanche",
            150,
            "5 Chickens + 1 kg de batata + refrigerante 2 L."
        ],

        [
            "Combo Especial Duplo Cheddar — Duo",
            84,
            "2 Especial Duplo Cheddar + 600 g de batata frita + 2 refrigerantes 220 ml."
        ],

        [
            "Combo Especial Duplo Cheddar — Individual",
            47,
            "1 Especial Duplo Cheddar + 300 g de batata frita + 1 refrigerante 220 ml."
        ],

        [
            "Combo Especial Lanche",
            80,
            "2 Chickens + 500 g de batata com bacon e cheddar + refrigerante 600 ml."
        ],

        [
            "Combo Individual Chicken",
            40,
            "1 Chicken + 300 g de batata com cheddar e bacon + refrigerante 220 ml."
        ]
    ],


    porcoes: [

        [
            "Salada Americana",
            28,
            "Alface americano + tomate-cereja + frango crocante + molho especial."
        ],

        [
            "Batata Apimentada",
            38,
            "Acompanha molho de pimenta."
        ],

        [
            "Batata frita — 500 g",
            30,
            ""
        ],

        [
            "Batata com bacon e cheddar — 500 g",
            36,
            ""
        ],

        [
            "Batata frita — 300 g",
            19,
            ""
        ],

        [
            "Polenta frita — 500 g",
            17,
            ""
        ],

        [
            "Polenta frita — 300 g",
            12,
            ""
        ],

        [
            "Anel de cebola — 500 g",
            35,
            ""
        ],

        [
            "Anel de cebola — 300 g",
            20,
            ""
        ]
    ],


    molhos: [

        ["Molho cheddar", 6, ""],

        ["Molho de pimenta", 6, ""],

        ["Mostarda e mel", 6, ""],

        ["Abacaxi com pimenta", 6, ""],

        ["Creme de alho", 6, ""],

        ["Barbecue", 5, ""],

        ["Ketchup", 5, ""]
    ],


    bebidas: [

        ["Coca-Cola — 350 ml", 6, ""],

        ["Coca-Cola Zero — 350 ml", 6, ""],

        ["Fanta Guaraná — 350 ml", 6, ""],

        ["Sprite — 350 ml", 6, ""],

        ["Fanta Laranja — 350 ml", 6, ""],


        ["Coca-Cola — 600 ml", 9, ""],

        ["Coca-Cola Zero — 600 ml", 9, ""],

        ["Fanta Guaraná — 600 ml", 9, ""],

        ["Sprite — 600 ml", 9, ""],

        ["Fanta Laranja — 600 ml", 9, ""],


        ["Coca-Cola — 2 litros", 15, ""],

        ["Coca-Cola Zero — 2 litros", 15, ""],

        ["Guaraná — 2 litros", 14, ""],

        ["Fanta — 2 litros", 14, ""],

        ["Sprite — 2 litros", 14, ""],


        ["Água com gás", 3.50, ""]
    ],


    adicionais: [

        ["Anel de cebola", 3, ""],

        ["Hambúrguer", 10, ""],

        ["Bacon", 5, ""],

        ["Muçarela", 4, ""],

        ["Alface", 1, ""],

        ["Catupiry", 5, ""],

        ["Tomate", 1, ""],

        ["Cebola", 1, ""],

        ["Cheddar", 5, ""],

        ["Cebola roxa", 4, ""]
    ]
};


/* =========================
   FORMATAÇÃO
========================= */

function dinheiro(valor) {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );
}


/* =========================
   CRIAR OS PRODUTOS
========================= */

function carregarProdutos() {

    Object.keys(produtos).forEach(categoria => {

        const container =
            document.getElementById(
                "lista-" + categoria
            );


        produtos[categoria].forEach(produto => {

            const nome = produto[0];

            const preco = produto[1];

            const descricao = produto[2];


            const card =
                document.createElement("article");

            card.className = "card";


            card.innerHTML = `

                <h3>${nome}</h3>

                ${
                    descricao
                    ?
                    `<p>${descricao}</p>`
                    :
                    ""
                }

                <div class="preco">

                    ${dinheiro(preco)}

                </div>

                <button
                    class="adicionar"
                    onclick="adicionarCarrinho('${nome}', ${preco})">

                    🛒 ADICIONAR AO PEDIDO

                </button>

            `;


            container.appendChild(card);

        });

    });

}


/* =========================
   CATEGORIAS
========================= */

function mostrarCategoria(categoria) {

    document
        .querySelectorAll(".categoria")
        .forEach(secao => {

            secao.classList.remove("ativa");

        });


    document
        .getElementById(categoria)
        .classList.add("ativa");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================
   CARRINHO
========================= */

function adicionarCarrinho(nome, preco) {

    const item =
        carrinho.find(
            produto => produto.nome === nome
        );


    if (item) {

        item.quantidade++;

    }

    else {

        carrinho.push({

            nome: nome,

            preco: preco,

            quantidade: 1

        });

    }


    atualizarCarrinho();

}


/* =========================
   ATUALIZAR CARRINHO
========================= */

function atualizarCarrinho() {

    const container =
        document.getElementById(
            "itensCarrinho"
        );


    const contador =
        document.getElementById(
            "quantidadeCarrinho"
        );


    const quantidade =
        carrinho.reduce(
            (total, item) =>
                total + item.quantidade,
            0
        );


    contador.textContent = quantidade;


    container.innerHTML = "";


    if (carrinho.length === 0) {

        container.innerHTML =
            "<p>Seu pedido está vazio. 🍗</p>";

    }


    carrinho.forEach((item, index) => {

        const div =
            document.createElement("div");

        div.className =
            "item-carrinho";


        div.innerHTML = `

            <div>

                <strong>
                    ${item.quantidade}x
                    ${item.nome}
                </strong>

                <br>

                ${dinheiro(
                    item.preco *
                    item.quantidade
                )}

            </div>


            <div class="controles">

                <button
                    onclick="alterarQuantidade(${index}, -1)">

                    −

                </button>


                <button
                    onclick="alterarQuantidade(${index}, 1)">

                    +

                </button>

            </div>

        `;


        container.appendChild(div);

    });


    atualizarTotal();

}


/* =========================
   QUANTIDADE
========================= */

function alterarQuantidade(index, valor) {

    carrinho[index].quantidade += valor;


    if (
        carrinho[index].quantidade <= 0
    ) {

        carrinho.splice(index, 1);

    }


    atualizarCarrinho();

}


/* =========================
   TOTAL
========================= */

function calcularSubtotal() {

    return carrinho.reduce(

        (total, item) =>

            total +
            item.preco *
            item.quantidade,

        0

    );

}


function atualizarTotal() {

    const subtotal =
        calcularSubtotal();


    const entrega =
        tipoRecebimento === "entrega"
        ?
        TAXA_ENTREGA
        :
        0;


    const total =
        subtotal + entrega;


    document.getElementById(
        "subtotal"
    ).textContent =
        dinheiro(subtotal);


    document.getElementById(
        "valorEntrega"
    ).textContent =
        dinheiro(entrega);


    document.getElementById(
        "total"
    ).textContent =
        dinheiro(total);

}


/* =========================
   ENTREGA / RETIRADA
========================= */

function escolherEntrega(tipo) {

    tipoRecebimento = tipo;


    const entrega =
        document.getElementById(
            "botaoEntrega"
        );


    const retirada =
        document.getElementById(
            "botaoRetirada"
        );


    entrega.classList.remove(
        "selecionado"
    );


    retirada.classList.remove(
        "selecionado"
    );


    if (tipo === "entrega") {

        entrega.classList.add(
            "selecionado"
        );


        document.getElementById(
            "campoEndereco"
        ).style.display = "block";

    }

    else {

        retirada.classList.add(
            "selecionado"
        );


        document.getElementById(
            "campoEndereco"
        ).style.display = "none";

    }


    atualizarTotal();

}


/* =========================
   ABRIR CARRINHO
========================= */

function abrirCarrinho() {

    document
        .getElementById(
            "carrinhoModal"
        )
        .classList.add("aberto");


    atualizarCarrinho();

}


/* =========================
   FECHAR CARRINHO
========================= */

function fecharCarrinho() {

    document
        .getElementById(
            "carrinhoModal"
        )
        .classList.remove("aberto");

}


/* =========================
   WHATSAPP
========================= */

function enviarWhatsApp() {

    if (carrinho.length === 0) {

        alert(
            "Adicione algum produto ao pedido."
        );

        return;

    }


    const nome =
        document
            .getElementById(
                "nomeCliente"
            )
            .value
            .trim();


    const endereco =
        document
            .getElementById(
                "endereco"
            )
            .value
            .trim();


    const observacoes =
        document
            .getElementById(
                "observacoes"
            )
            .value
            .trim();


    if (!nome) {

        alert(
            "Digite seu nome."
        );

        return;

    }


    if (
        tipoRecebimento === "entrega"
        &&
        !endereco
    ) {

        alert(
            "Digite o endereço para entrega."
        );

        return;

    }


    let mensagem =
        "*BENVENUTO CHICKEN 🍗*%0A%0A";


    mensagem +=
        "*Nome:* " +
        nome +
        "%0A";


    mensagem +=
        "*Recebimento:* " +
        (
            tipoRecebimento === "entrega"
            ?
            "Entrega 🚚"
            :
            "Retirada 🏪"
        ) +
        "%0A";


    if (
        tipoRecebimento === "entrega"
    ) {

        mensagem +=
            "*Endereço:* " +
            endereco +
            "%0A";

    }


    mensagem +=
        "%0A*PEDIDO:*%0A";


    carrinho.forEach(item => {

        mensagem +=

            item.quantidade +
            "x " +
            item.nome +
            " — " +
            dinheiro(
                item.preco *
                item.quantidade
            ) +
            "%0A";

    });


    const subtotal =
        calcularSubtotal();


    const entrega =
        tipoRecebimento === "entrega"
        ?
        TAXA_ENTREGA
        :
        0;


    const total =
        subtotal + entrega;


    mensagem +=
        "%0A*Subtotal:* " +
        dinheiro(subtotal);


    mensagem +=
        "%0A*Entrega:* " +
        dinheiro(entrega);


    mensagem +=
        "%0A*TOTAL:* " +
        dinheiro(total);


    if (observacoes) {

        mensagem +=
            "%0A%0A*Observações:* " +
            observacoes;

    }


    const url =
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        encodeURIComponent(
            mensagem
        );


    window.open(
        url,
        "_blank"
    );

}


/* =========================
   INICIAR
========================= */

carregarProdutos();

atualizarCarrinho();