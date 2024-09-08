function buscar() {
    let section = document.getElementById("pesquisas-resultado");

    let campoPesquisa = document.getElementById("cidade-pesquisa").value


    if (!campoPesquisa) {
        section.innerHTML = "<p>Cidade nao encontrada voce precisa digitar o nome da cidade.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let titulo = "";
    let descricao = "";
    let localizacao = "";
    let tags = "";

    for (let dado of cidadesHistoricas) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        localizacao = dado.localizacao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || localizacao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
    <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.localizacao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                        <!-- Exibir a imagem da cidade -->
                <img src="${dado.imagem}" alt="${dado.titulo}" style="width:50%; height:auto;">
            </div>
    `;
        }
    }
    if (!resultados) {
        resultados = "<p>Nao localizado</p>"
    }
    section.innerHTML = resultados;
}