function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let nome="";
    let descricao="";
    let tags = "";
  
    // Itera sobre cada dado no array de dados
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    // Constrói o HTML para cada resultado, formatando o nome, descrição e link
            resultados += `
         <div class="item-resultado">
            <h2>
               <a href="#">${dado.nome}</a>
             </h2>
             <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Saiba mais</a>
         </div>
      `;
      }
        
    }

    if (!resultados) {
        resultados = "<p>Nada encontrado</p>"
    }
  
    // Atribui a string com os resultados ao conteúdo da seção
    section.innerHTML = resultados;
  }