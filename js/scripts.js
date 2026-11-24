function carregarPagina(pagina) {
    let local = document.querySelector("#paginas")

    let requisicao = new XMLHttpRequest();

    requisicao.onreadystatechange = () => {
        if (requisicao.readyState == 4 && requisicao.status == 200 ) {
            local.innerHTML = requisicao.response
        }
    }
    requisicao.open('GET', `${pagina}.html`)
    requisicao.send()
}

function filtrar(categoria) {
    const exercicios = document.querySelectorAll("#paginas .exercicio, .lista-exercicios .exercicio");

    exercicios.forEach((exercicio) => {

        const img = exercicio.querySelector(`img.${categoria}`);
        if (img) {
 
            exercicio.style.display = "flex";
        } else {
   
            exercicio.style.display = "none";
        }
    });
}

const bancoExercicios = [
    { categoria: 'ombro', nome: 'Desenvolvimento com halteres', desc: 'Exercício para desenvolver os músculos dos ombros, principalmente a porção anterior e lateral do deltoide.', img: '../assets/exercicios/ombro/desenvovlimento-halter.png' },
    { categoria: 'ombro', nome: 'Desenvolvimento Arnold', desc: 'Variação do desenvolvimento tradicional que trabalha as diferentes porções dos ombros por meio da rotação dos braços.', img: '../assets/exercicios/ombro/desenvolvimento-arnold.png' },
    { categoria: 'ombro', nome: 'Elevação lateral na polia', desc: 'Exercício que enfatiza a porção lateral dos ombros, contribuindo para o desenvolvimento da largura dos deltoides.', img: '../assets/exercicios/ombro/elevacao-lateral-polia.png' },
    { categoria: 'ombro', nome: 'Elevação frontal', desc: 'Movimento que trabalha principalmente a porção anterior dos ombros, elevando os braços à frente do corpo.', img: '../assets/exercicios/ombro/elevacao-frontal.png' },
    { categoria: 'ombro', nome: 'Face pull', desc: 'Exercício realizado na polia que trabalha a parte posterior dos ombros e auxilia no fortalecimento da região escapular.', img: '../assets/exercicios/ombro/face-pull.png' },

    { categoria: 'gluteo', nome: 'Abdução na polia', desc: 'Exercício que trabalha principalmente o glúteo médio, realizando o movimento de afastamento da perna.', img: '../assets/exercicios/gluteo/abducao-polia.png' },
    { categoria: 'gluteo', nome: 'Good morning', desc: 'Movimento de inclinação do tronco que trabalha a cadeia posterior, incluindo glúteos e músculos posteriores da coxa.', img: '../assets/exercicios/gluteo/good-morning.png' },
    { categoria: 'gluteo', nome: 'Elevação pélvica', desc: 'Exercício focado no fortalecimento dos glúteos, realizado por meio da extensão do quadril.', img: '../assets/exercicios/gluteo/elevacao-pelvica.png' },
    { categoria: 'gluteo', nome: 'Coice na polia', desc: 'Exercício que trabalha os glúteos por meio da extensão da perna para trás, utilizando a resistência da polia.', img: '../assets/exercicios/gluteo/coice-polia.png' },
    { categoria: 'gluteo', nome: 'Agachamento búlgaro', desc: 'Exercício unilateral que trabalha glúteos e quadríceps, com uma das pernas apoiada em um banco.', img: '../assets/exercicios/gluteo/bulgaro.png' },
    { categoria: 'gluteo', nome: 'Banco romano', desc: 'Exercício que pode trabalhar glúteos e posteriores da coxa, dependendo da execução e do posicionamento do corpo.', img: '../assets/exercicios/gluteo/banco-romano.png' },
    { categoria: 'gluteo', nome: 'Agachamento sumô', desc: 'Variação do agachamento com os pés afastados, que trabalha glúteos, quadríceps e músculos adutores.', img: '../assets/exercicios/gluteo/agachamento-sumo.png' },

    { categoria: 'costas', nome: 'Graviton', desc: 'Equipamento com assistência para realizar movimentos de barra fixa, trabalhando principalmente os músculos das costas.', img: '../assets/exercicios/costas/graviton.png' },
    { categoria: 'costas', nome: 'Puxada aberta', desc: 'Exercício na polia que trabalha principalmente o latíssimo do dorso, contribuindo para o desenvolvimento das costas.', img: '../assets/exercicios/costas/puxada-aberta.png' },
    { categoria: 'costas', nome: 'Crucifixo invertido', desc: 'Movimento que enfatiza a porção posterior dos ombros e também recruta músculos da região superior das costas.', img: '../assets/exercicios/costas/cruxifico-invertido.png' },
    { categoria: 'costas', nome: 'Barra fixa', desc: 'Exercício de puxada com o peso corporal que trabalha costas, bíceps e músculos estabilizadores.', img: '../assets/exercicios/costas/barra-fixa.png' },
    { categoria: 'costas', nome: 'Remada curvada', desc: 'Exercício que trabalha a musculatura das costas por meio da puxada da barra em direção ao tronco.', img: '../assets/exercicios/costas/remada-curvada.png' },
    { categoria: 'costas', nome: 'Remada baixa', desc: 'Exercício realizado na polia que trabalha a região média das costas, incluindo romboides e latíssimo do dorso.', img: '../assets/exercicios/costas/remada-baixa.png' },
    { categoria: 'costas', nome: 'Serrote', desc: 'Remada unilateral com halter que trabalha os músculos das costas, permitindo exercitar um lado de cada vez.', img: '../assets/exercicios/costas/serrote.png' },

    { categoria: 'biceps', nome: 'Rosca alternada com halteres', desc: 'Exercício que trabalha os bíceps alternando a flexão dos braços, um de cada vez.', img: '../assets/exercicios/biceps/biceps-alternado-halter.png' },
    { categoria: 'biceps', nome: 'Rosca Scott', desc: 'Exercício realizado com apoio dos braços no banco Scott, isolando o movimento de flexão dos cotovelos.', img: '../assets/exercicios/biceps/rosca-scooth.png' },
    { categoria: 'biceps', nome: 'Rosca direta na polia', desc: 'Exercício que utiliza a resistência constante da polia para trabalhar os músculos bíceps.', img: '../assets/exercicios/biceps/rosca-direta-polia.png' },
    { categoria: 'biceps', nome: 'Rosca direta com halteres', desc: 'Movimento de flexão dos cotovelos com halteres, focado no fortalecimento dos bíceps.', img: '../assets/exercicios/biceps/rosca-direta-halter.png' },
    { categoria: 'biceps', nome: 'Rosca direta com barra', desc: 'Exercício tradicional para bíceps, realizado com a flexão simultânea dos cotovelos segurando uma barra.', img: '../assets/exercicios/biceps/biceps-barra.png' },
    { categoria: 'biceps', nome: 'Rosca no banco inclinado', desc: 'Exercício com halteres realizado em banco inclinado, trabalhando os bíceps com os braços posicionados atrás do tronco.', img: '../assets/exercicios/biceps/biceps-banco-inclinado.png' },

    { categoria: 'quad', nome: 'Cadeira extensora', desc: 'Exercício isolado que trabalha o quadríceps por meio da extensão dos joelhos.', img: '../assets/exercicios/quad/extensora.png' },
    { categoria: 'quad', nome: 'Belt squat', desc: 'Variação do agachamento com carga posicionada no quadril, enfatizando o trabalho dos quadríceps e glúteos.', img: '../assets/exercicios/quad/belt-squat.png' },
    { categoria: 'quad', nome: 'Agachamento livre', desc: 'Exercício multiarticular que trabalha quadríceps e glúteos, além de exigir estabilidade do tronco.', img: '../assets/exercicios/quad/agachamento-livre.png' },
    { categoria: 'quad', nome: 'Afundo com avanço', desc: 'Exercício unilateral que trabalha quadríceps e glúteos por meio de passadas à frente.', img: '../assets/exercicios/quad/afundo-com-avanço.png' },
    { categoria: 'quad', nome: 'Leg press', desc: 'Exercício realizado em máquina que trabalha principalmente quadríceps e glúteos, com participação dos posteriores da coxa.', img: '../assets/exercicios/quad/leg-press.png' },
    { categoria: 'quad', nome: 'Agachamento hack', desc: 'Exercício realizado em máquina que enfatiza o trabalho dos quadríceps e também recruta os glúteos.', img: '../assets/exercicios/quad/hack.png' },
    { categoria: 'quad', nome: 'Passada', desc: 'Exercício unilateral que trabalha quadríceps e glúteos, exigindo equilíbrio e coordenação.', img: '../assets/exercicios/quad/passada.png' },

    { categoria: 'triceps', nome: 'Tríceps no banco', desc: 'Exercício com peso corporal que trabalha os tríceps por meio da flexão e extensão dos cotovelos.', img: '../assets/exercicios/triceps/triceps-banco.png' },
    { categoria: 'triceps', nome: 'Extensão de tríceps', desc: 'Movimento de extensão dos cotovelos que trabalha os músculos da parte posterior dos braços.', img: '../assets/exercicios/triceps/extensao-triceps.png' },
    { categoria: 'triceps', nome: 'Tríceps francês unilateral', desc: 'Exercício realizado com um braço de cada vez, levando o peso atrás da cabeça e estendendo o cotovelo.', img: '../assets/exercicios/triceps/triceps-frances-unilateral.png' },
    { categoria: 'triceps', nome: 'Tríceps na polia', desc: 'Exercício que trabalha os tríceps por meio da extensão dos cotovelos utilizando a resistência da polia.', img: '../assets/exercicios/triceps/triceps-polia.png' },

    { categoria: 'abdomen', nome: 'Abdominal com rolinho', desc: 'Exercício que exige força e estabilidade do core, trabalhando principalmente a musculatura abdominal.', img: '../assets/exercicios/abdomen/abd-rolinho.png' },
    { categoria: 'abdomen', nome: 'Abdominal lateral com anilha', desc: 'Exercício com carga externa que trabalha os músculos oblíquos do abdômen.', img: '../assets/exercicios/abdomen/abs-anilha-lateral.png' },
    { categoria: 'abdomen', nome: 'Abdominal bicicleta', desc: 'Movimento que combina flexão e rotação do tronco, trabalhando o reto abdominal e os oblíquos.', img: '../assets/exercicios/abdomen/ads-bicicleta.png' },
    { categoria: 'abdomen', nome: 'Abdominal na polia', desc: 'Exercício com resistência da polia que trabalha o reto abdominal por meio da flexão do tronco.', img: '../assets/exercicios/abdomen/abs-cabo.png' },
    { categoria: 'abdomen', nome: 'Cadeira isométrica', desc: 'Exercício de sustentação estática que exige resistência muscular dos membros inferiores e estabilidade do core.', img: '../assets/exercicios/abdomen/cadeira-isometrica.png' },
    { categoria: 'abdomen', nome: 'Prancha lateral', desc: 'Exercício isométrico que fortalece os músculos oblíquos e melhora a estabilidade lateral do tronco.', img: '../assets/exercicios/abdomen/prancha-lateral.png' },
    { categoria: 'abdomen', nome: 'Prancha com toque nos ombros', desc: 'Variação dinâmica da prancha que trabalha o core e exige estabilidade para alternar os toques nos ombros.', img: '../assets/exercicios/abdomen/prancha-toque-nos-ombros.png' },
    { categoria: 'abdomen', nome: 'Prancha abdominal', desc: 'Exercício isométrico que fortalece a musculatura abdominal e melhora a estabilidade do tronco.', img: '../assets/exercicios/abdomen/prancha.png' },

    { categoria: 'posterior', nome: 'Flexora em pé', desc: 'Exercício isolado que trabalha os músculos posteriores da coxa por meio da flexão dos joelhos.', img: '../assets/exercicios/posterior/flexora-em-pe.png' },
    { categoria: 'posterior', nome: 'RDL', desc: 'Levantamento terra romeno que trabalha principalmente posteriores da coxa e glúteos por meio da extensão do quadril.', img: '../assets/exercicios/posterior/rdl.png' },
    
    { categoria: 'panturrilha', nome: 'Panturrilha sentada', desc: 'Exercício que enfatiza o músculo sóleo, realizando a elevação dos calcanhares na posição sentada.', img: '../assets/exercicios/panturrilha/panturrilha-sentado.png' },

    { categoria: 'peito', nome: 'Supino reto livre', desc: 'Exercício multiarticular que trabalha principalmente os músculos peitorais, com participação dos tríceps e ombros.', img: '../assets/exercicios/peito/supino-deitado-livre.png' },
    { categoria: 'peito', nome: 'Crucifixo', desc: 'Exercício que trabalha os músculos peitorais por meio da aproximação dos braços à frente do corpo.', img: '../assets/exercicios/peito/cruxifixo.png' },
    { categoria: 'peito', nome: 'Cross over', desc: 'Exercício realizado nas polias que trabalha os peitorais por meio da adução horizontal dos braços.', img: '../assets/exercicios/peito/cross-over.png' },
    { categoria: 'peito', nome: 'Supino inclinado', desc: 'Variação do supino que enfatiza a porção superior do peitoral, com participação dos ombros e tríceps.', img: '../assets/exercicios/peito/supino-inclinado.png' },
    { categoria: 'peito', nome: 'Supino na máquina', desc: 'Exercício de empurrar realizado em equipamento guiado, trabalhando principalmente os músculos peitorais.', img: '../assets/exercicios/peito/supino-maquina.png' }
];

function gerarTreino() {

    let resultado = document.querySelector("#paginas #resultado-treino");
    
    if (!resultado) {
        resultado = document.createElement("div");
        resultado.id = "resultado-treino";
        
        const paginas = document.querySelector("#paginas");
        if (paginas) {
            paginas.appendChild(resultado);
        }
    }

    resultado.innerHTML = "";

    const categorias = {};
    bancoExercicios.forEach(ex => {
        if (!categorias[ex.categoria]) {
            categorias[ex.categoria] = [];
        }
        categorias[ex.categoria].push(ex);
    });

    const repeticoes = [10, 12, 15];
    
    Object.keys(categorias).forEach(c => {
        const listaDaCategoria = categorias[c];
        const exercicio = listaDaCategoria[Math.floor(Math.random() * listaDaCategoria.length)];
        const repeticoes2 = repeticoes[Math.floor(Math.random() * repeticoes.length)];

        const div = document.createElement("div");
        div.className = "exercicio";
        
        div.innerHTML = `
            <img class="${exercicio.categoria}" src="${exercicio.img}" alt="${exercicio.nome}">
            <div class="descricao">
                <h2>${exercicio.nome}</h2>
                <p>3x${repeticoes2} repetições</p>
            </div>
        `;
        
        resultado.appendChild(div);
    });
}

function exibirMensagemSucesso() {
    window.event.preventDefault();
    const mensagem = document.querySelector("#paginas .mensagem-sucesso");
    mensagem.style.display = "block";
    document.querySelector("#paginas form").reset();

    setTimeout(() => {
        mensagem.style.display = "none";
    }, 3000);
}