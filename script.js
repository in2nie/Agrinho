// VARIÁVEL GLOBAL - Guarda o estado do site (false = Vila da Folha, true = Akatsuki)
let modoAkatsukiAtivo = false;

// =========================================================================
// 1. BANCO DE DADOS DOS MODAIS (Textos da Vila da Folha vs. Akatsuki)
// =========================================================================
const dadosModais = {
    madeira: {
        tituloFolha: "🌳 Mokuton: Avanços Florestais no Paraná",
        textoFolha: `
            <p><strong>Dados Reais (IBGE/Inpe):</strong> O estado do Paraná tem se destacado nacionalmente na conservação ambiental. Nos últimos anos, o monitoramento por satélite ajudou a reduzir drasticamente os índices de desmatamento ilegal na Mata Atlântica paranaense, registrando quedas sucessivas na perda de vegetação nativa.</p>
            <p><strong>A Força do Campo:</strong> Através da técnica de ILPF (Integração Lavoura-Pecuária-Floresta), propriedades rurais do Paraná plantam árvores no meio das pastagens. Isso sequestra carbono da atmosfera, protege as nascentes (matas ciliares) e melhora o clima local, provando que é possível produzir florestando.</p>
        `,
        tituloAkatsuki: "☁️ Mokuton Quebrado: O Fim das Florestas",
        textoAkatsuki: `
            <p><strong>O Problema e suas Causas:</strong> Quando o equilíbrio é ignorado, o desmatamento ilegal e os incêndios criminosos destroem as matas nativas. A principal causa é a falta de conscientização e a busca por lucro rápido, limpando áreas protegidas sem autorização.</p>
            <p><strong>As Consequências:</strong> Sem as árvores, o ciclo de chuvas é interrompido, gerando secas severas que prejudicam a própria agricultura. A biodiversidade perde seu habitat e o solo fica desprotegido.</p>
            <p><strong>Sugestões de Soluções Sustentáveis:</strong> 
                <br>• Criação de <em>Corredores Ecológicos</em> para conectar fragmentos de florestas.
                <br>• Implantação rigorosa de brigadas comunitárias de prevenção a incêndios.
                <br>• Reflorestamento obrigatório de Áreas de Preservação Permanente (APPs).
            </p>
        `
    },
    terra: {
        tituloFolha: "🚜 Doton: O Solo Sagrado do Paraná",
        textoFolha: `
            <p><strong>Dados Reais (SABER/IBGE):</strong> O Paraná é considerado uma referência mundial em conservação de solos. Mais de 90% das terras agrícolas de grãos do estado utilizam o sistema de <strong>Plantio Direto</strong>, uma técnica que revolucionou o campo.</p>
            <p><strong>A Força do Campo:</strong> Ao plantar a nova semente sobre a palha da colheita anterior e praticar a rotação de culturas (como alternar soja, milho e trigo), os agricultores paranaenses mantêm a biologia do solo viva, retêm a umidade e evitam que toneladas de terra fértil sumam com as chuvas.</p>
        `,
        tituloAkatsuki: "☁️ Doton Corrompido: A Ruína do Solo",
        textoAkatsuki: `
            <p><strong>O Problema e suas Causas:</strong> A erosão severa (formação de voçorocas/crateras) e a compactação da terra. As causas incluem o manejo inadequado, o uso de tratores pesados em solo encharcado e o hábito de deixar a terra "careca" (exposta ao sol e às fortes chuvas).</p>
            <p><strong>As Consequências:</strong> A água da chuva arrasta a camada mais fértil do solo, entupindo rios com lama (assoreamento) e tornando a terra infértil e improdutiva.</p>
            <p><strong>Sugestões de Soluções Sustentáveis:</strong> 
                <br>• Uso contínuo do <em>Plantio Direto na Palha</em> para cobrir o solo.
                <br>• Construção de curvas de nível (terraços) para frear a velocidade das enxurradas.
                <br>• Plantio de plantas de cobertura (como nabo forrageiro) para descompactar a terra com as raízes.
            </p>
        `
    },
    mapa: {
        tituloFolha: "🗺️ O Mapa Digital: Monitoramento Inteligente",
        textoFolha: `
            <p><strong>Dados Reais (CAR/Sema):</strong> O Paraná possui um dos cadastros de propriedades rurais mais modernos do país. Com o uso do CAR (Cadastro Ambiental Rural) e imagens de satélite, o estado consegue mapear e validar as áreas que produzem e as que preservam.</p>
            <p><strong>A Força do Campo:</strong> O uso de tecnologias como drones, sensores de solo e GPS nos tratores (Agricultura de Precisão) permite que o produtor aplique água e adubo na quantidade exata, evitando desperdícios e protegendo os recursos naturais.</p>
        `,
        tituloAkatsuki: "☁️ O Mapa Apagado: A Cegueira Tecnológica",
        textoAkatsuki: `
            <p><strong>O Problema e suas Causas:</strong> O mau uso de insumos e a falta de controle ambiental na propriedade. A principal causa é a falta de acesso à tecnologia ou a negligência em monitorar o impacto da produção no meio ambiente.</p>
            <p><strong>As Consequências:</strong> Sem mapas e satélites, o produtor não vê focos de incêndio chegando, não prevê pragas a tempo e pode acabar poluindo nascentes por aplicar produtos no lugar errado.</p>
            <p><strong>Sugestões de Soluções Sustentáveis:</strong> 
                <br>• Incentivo ao uso de aplicativos gratuitos de mapeamento agrícola.
                <br>• Treinamento de pequenos produtores em tecnologia de precisão através de cooperativas.
                <br>• Integração total da fazenda aos alertas em tempo real do sistema de monitoramento do estado.
            </p>
        `
    }
};

// =========================================================================
// 2. FUNÇÃO PARA ABRIR E FECHAR AS JANELAS (MODAIS)
// =========================================================================
function abrirModal(estilo) {
    const modal = document.getElementById(`modal-${estilo}`);
    const tituloModal = document.getElementById(`modal-${estilo}-titulo`);
    const textoModal = document.getElementById(`modal-${estilo}-texto`);
    
    if (modoAkatsukiAtivo) {
        tituloModal.innerHTML = dadosModais[estilo].tituloAkatsuki;
        textoModal.innerHTML = dadosModais[estilo].textoAkatsuki;
    } else {
        tituloModal.innerHTML = dadosModais[estilo].tituloFolha;
        textoModal.innerHTML = dadosModais[estilo].textoFolha;
    }
    
    modal.style.display = "block";
}

function fecharModal(estilo) {
    const modal = document.getElementById(`modal-${estilo}`);
    modal.style.display = "none";
}

// =========================================================================
// 3. JUTSU DE ALTERNAR O MODO DO SITE (FOLHA VS. AKATSUKI)
// =========================================================================
function alternarModo() {
    modoAkatsukiAtivo = !modoAkatsukiAtivo;
    document.body.classList.toggle("modo-akatsuki");
    
    const botao = document.getElementById("btn-modo");
    const tituloPrincipal = document.getElementById("main-title");
    const subtituloPrincipal = document.getElementById("main-subtitle");
    const introTitulo = document.getElementById("intro-title");
    const introTexto = document.getElementById("intro-text");
    
    if (modoAkatsukiAtivo) {
        botao.innerHTML = "🍃 Ativar Modo Vila da Folha 🍃";
        tituloPrincipal.innerHTML = "Nuvens Vermelhas no Horizonte: O Clamor da Natureza Sem Proteção";
        subtituloPrincipal.innerHTML = "A ambição cega o homem e o equilíbrio é desfeito. Clique nos símbolos abaixo para entender as causas, os impactos e como reverter o ciclo de dor da terra.";
        introTitulo.innerHTML = "O Preço do Desequilíbrio";
        introTexto.innerHTML = "Quando ignoramos as leis da natureza para buscar o lucro rápido, colhemos a destruição. Sem o cuidado com o solo e com as florestas rurais, o campo sofre, a água desaparece e o deserto avança. Contemple as consequências de um futuro sem preservação e entenda por que o equilíbrio sustentável é nossa única salvação.";
    } else {
        botao.innerHTML = "☁️ Ativar Modo Akatsuki ☁️";
        tituloPrincipal.innerHTML = "Agro Forte, Futuro Sustentável";
        subtituloPrincipal.innerHTML = "Você sabia que o Paraná tem liderado grandes avanços na conservação ambiental? Clique nos pergaminhos abaixo e descubra os dados reais que provam a força das nossas florestas e do nosso solo!";
        introTitulo.innerHTML = "A Vontade do Fogo Verde";
        introTexto.innerHTML = "No universo dos ninjas, existe uma filosofia poderosa chamada <strong>\"A Vontade do Fogo\"</strong>: a compreensão de que o amor, a união e a proteção devem ser cultivados hoje para as próximas gerações. No mundo real, o agronegócio paranaense segue uma missão parecida. Para garantir um Agro Forte e um Futuro Sustentável, usamos a \"Vontade do Fogo Verde\", o compromisso de produzir alimentos mantendo o equilíbrio com o meio ambiente. Preservar o solo e proteger as florestas é o nosso \"jutsu\" de defense mais importante.";
    }
}

// =========================================================================
// 4. LÓGICA DO QUIZ NINJA AMBIENTAL
// =========================================================================
const perguntasQuiz = [
    {
        pergunta: "O estado do Paraná utiliza o sistema de Plantio Direto em mais de 90% das terras agrícolas de grãos.",
        respostaCorreta: true,
        explicacao: "O Paraná é referência mundial em conservação através do Plantio Direto sobre a palha!"
    },
    {
        pergunta: "A melhor forma de limpar o solo e mantê-lo fértil para as próximas gerações é ateando fogo na vegetação restante.",
        respostaCorreta: false,
        explicacao: "As queimadas destroem os nutrientes essenciais e matam a biologia saudável da terra!"
    },
    {
        pergunta: "A tecnologia de satélites e o Cadastro Ambiental Rural (CAR) auxiliam a reduzir o desmatamento ilegal na Mata Atlântica.",
        respostaCorreta: true,
        explicacao: "Isso mesmo! O monitoramento inteligente por mapas digitais ajuda a proteger nossas florestas rurais."
    },
    {
        pergunta: "O plantio de árvores no meio das pastagens (ILPF) prejudica o clima e reduz a proteção das nascentes d'água.",
        respostaCorreta: false,
        explicacao: "Pelo contrário! A integração florestal sequestra carbono, melhora o clima e protege as matas ciliares!"
    }
];

let indicePerguntaAtual = 0;
let pontosJogador = 0;
let pontosAkatsuki = 0;

function carregarPergunta() {
    const elementoTexto = document.getElementById("pergunta-texto");
    const elementoFeedback = document.getElementById("quiz-feedback");
    const transicao = document.getElementById("quiz-transicao");
    const botoesQuiz = document.getElementById("botoes-quiz");
    
    elementoFeedback.innerHTML = ""; 
    
    if (indicePerguntaAtual < perguntasQuiz.length) {
        elementoTexto.innerHTML = `<strong>Missão ${indicePerguntaAtual + 1}:</strong> ${perguntasQuiz[indicePerguntaAtual].pergunta}`;
    } else {
        if (pontosJogador > pontosAkatsuki) {
            elementoTexto.innerHTML = "🎉 Parabéns! Você defendeu a Vila e acumulou bastante Chakra Verde!";
        } else {
            elementoTexto.innerHTML = "☁️ A Akatsuki causou danos. Estude mais os dados reais para vencer na próxima!";
        }
        botoesQuiz.style.display = "none";
        transicao.style.display = "block";
    }
}

function verificarResposta(respostaUsuario) {
    const feedback = document.getElementById("quiz-feedback");
    const itemAtual = perguntasQuiz[indicePerguntaAtual];
    
    if (respostaUsuario === itemAtual.respostaCorreta) {
        feedback.innerHTML = `<span style="color: #2e8b57;">🟢 Acertou! ${itemAtual.explicacao}</span>`;
        pontosJogador++;
        document.getElementById("pontos-player").innerText = pontosJogador;
    } else {
        feedback.innerHTML = `<span style="color: #b22222;">🔴 Errou! ${itemAtual.explicacao}</span>`;
        pontosAkatsuki++;
        document.getElementById("pontos-akatsuki").innerText = pontosAkatsuki;
    }
    
    indicePerguntaAtual++;
    setTimeout(carregarPergunta, 3500);
}

// =========================================================================
// 5. LÓGICA DO SEGUNDO JOGO: JUTSU DA COLETA SELETIVA
// =========================================================================
const itensColeta = [
    { emoji: "🍌", nome: "Casca de Banana", tipo: "compostagem" },
    { emoji: "🍾", nome: "Garrafa de Vidro", tipo: "reciclavel" },
    { emoji: "🗞️", nome: "Jornal Velho", tipo: "reciclavel" },
    { emoji: "🩹", nome: "Curativo Usado", tipo: "comum" },
    { emoji: "🥤", nome: "Copo Plástico", tipo: "reciclavel" },
    { emoji: "🍎", nome: "Resto de Maçã", tipo: "compostagem" },
    { emoji: "🚬", nome: "Bituca de Cigarro", tipo: "comum" }
];

let itemAtualColeta = 0;
let pontosColeta = 0;

function iniciarColeta() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("coleta-game").style.display = "block";
    gerarItemColeta();
}

function gerarItemColeta() {
    if (itemAtualColeta < itensColeta.length) {
        const item = itensColeta[itemAtualColeta];
        document.getElementById("emoji-item").innerText = item.emoji;
        document.getElementById("nome-item").innerText = item.nome;
    } else {
        document.getElementById("item-coleta-box").innerHTML = "<h3>🏆 Vila Purificada com Sucesso!</h3><p>Seus jutsus de selamento ecológico salvaram o dia!</p>";
        document.querySelector(".coleta-botoes").style.display = "none";
    }
}

function jogarColeta(escolha) {
    const item = itensColeta[itemAtualColeta];
    const feedback = document.getElementById("coleta-feedback");
    
    if (escolha === item.tipo) {
        feedback.innerHTML = "<span style=\"color: #2e8b57;\">🟢 Selamento perfeito! Destino correto.</span>";
        pontosColeta++;
        document.getElementById("pontos-coleta").innerText = pontosColeta;
    } else {
        feedback.innerHTML = "<span style=\"color: #b22222;\">🔴 Falha no selamento! Objeto descartado incorretamente.</span>";
    }
    
    itemAtualColeta++;
    setTimeout(() => {
        feedback.innerHTML = "";
        gerarItemColeta();
    }, 1500);
}

window.onload = function() {
    carregarPergunta();
};