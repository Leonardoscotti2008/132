const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal vantagem de reduzir o uso de plástico no dia a dia?",
        alternativas: [           
            {
                texto: "Menos poluição nos oceanos.",
                afirmacao: "Ao reduzir o uso de plástico, contribuímos para a diminuição da poluição nos oceanos, protegendo a vida marinha e preservando os ecossistemas aquáticos."
            },
            {
                texto: "Economia de recursos naturais.",
                afirmacao: "Reduzir o uso de plástico também ajuda a economizar recursos naturais, como petróleo e gás, que são utilizados na produção de plásticos."
            }
        ]
    },
    {
        enunciado: "Como a reciclagem contribui para a preservação do meio ambiente?",
        alternativas: [           
            {
                texto: "Reduzindo a quantidade de lixo nos aterros sanitários.",
                afirmacao: "A reciclagem diminui a quantidade de resíduos que vão parar em aterros sanitários, reduzindo a contaminação do solo e da água."
            },
            {
                texto: "Diminuindo a emissão de gases de efeito estufa.",
                afirmacao: "Ao reciclar, evitamos a produção de novos materiais a partir de matérias-primas, o que diminui o consumo de energia e, consequentemente, a emissão de gases de efeito estufa."
            }
        ]
    },
    {
        enunciado: "Qual é uma prática eficaz para economizar água em casa?",
        alternativas: [           
            {
                texto: "Tomar banhos mais curtos.",
                afirmacao: "Reduzir o tempo de banho pode economizar dezenas de litros de água por dia, contribuindo para a preservação desse recurso vital."
            },
            {
                texto: "Reutilizar a água da chuva para regar plantas.",
                afirmacao: "Coletar e reutilizar a água da chuva para regar plantas ou lavar áreas externas é uma maneira eficiente de economizar água potável."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Suas ações mudam o mundo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta();
