# 3. Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="docs/2-Planejamento-Projeto.md"> Planejamento do Projeto de Software</a>

> Idosos, especialmente aqueles com Alzheimer, enfrentam desafios cognitivos relacionados à memória, atenção e raciocínio lógico. O jogo da memória, que exige concentração, reconhecimento de padrões e estratégias de memorização, pode ser uma maneira eficaz de estimular essas habilidades, promovendo não apenas o entretenimento, mas também o bem-estar mental e cognitivo dos participantes.
> 

> A solução é uma API de jogo da memória interativa, que permite aos usuários se engajarem em atividades cognitivas que melhorem a memória e a capacidade de reconhecimento de padrões. O jogo será simplificado, intuitivo e adaptável, oferecendo níveis de dificuldade ajustáveis conforme o progresso do usuário.
> 

> React (Biblioteca JavaScript):
React será a tecnologia principal utilizada para a construção da interface do usuário (UI) do projeto.
Ferramentas de Estilização e Design:
A estética e a usabilidade da interface são fundamentais para garantir que os idosos consigam interagir com o jogo sem dificuldades. Para isso, utilizaremos CSS.
> 

> Desenvolvimento da API:
A API que alimentará o jogo da memória precisa ser robusta, segura e eficiente para garantir que o jogo funcione sem falhas, armazenando dados de progresso do usuário, preferências de dificuldade e feedback de desempenho.
Node.js: Será utilizado como o ambiente de execução JavaScript no lado do servidor para criar a API. O Node.js é altamente eficiente e escalável, o que é ideal para lidar com múltiplos usuários simultaneamente.
> 

## 3.1 Histórias de Usuários

### a) Modifique o Quadro abaixo e insira as histórias de usuários para o seu projeto.

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR` |
| --- | --- | --- |
| Idoso com Alzheimer | Jogo da memória simples e prático | Treinar minha memória de forma gradual |
| Idoso sem Alzheimer | Jogo da memória com níveis dificuldade | Desafiar meu cérebro e manter a mente ativa |
| Cuidador(a) de idosos | Jogo da memória simples | Manter o desenvolvimento cognitivo de idosos |
| Criança em Desenvolvimento | Jogo com figuras e cores brilhantes | Aprender asssociar imagens e palavras |
| Mãe de criança | Jogo da memória simples e atrativo | Meu filho desenvolver habilidades intelectuais |
| Pessoa com deficiência Intelectual | Jogo da memória simples | Aumentar mimha autonomia no dia a dia |
| Pessoa com Estresse | Jogo da memória relaxante | Me distrair e reduzir minha ansiedade |
| Pessoa que sofre de Ansiedade | Jogo da memória sem limite de tempo | Relaxar sem me sentir pressionado pelo jogo |
| Pessoa em recuperação | De níveis que aumentam gradualmente | Desafiar habilidades e ajudar na recuperação |
| Pessoa que busca entretenimento | Jogo da memória divertido | Treinar minha memória e me divertir |
| Professora de informática | Jogo da memória web | Manter as criaças intertidas |

> Links Úteis:
> 
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## 3.2 Classificação dos Requisitos Funcionais x Requisitos não Funcionais

### Requisitos Funcionais

| ID         | Descrição do Requisito | Prioridade |
| ---        | --- | --- |
| RF-001     | Permitir que o usuário inicie um novo jogo e escolha o nível de dificuldade (ex.: Fácil, Médio, Difícil). | ALTA |
| RF-002     | Exibir as cartas dispostas na tela e possibilitar a seleção de duas cartas por vez para revelar seu conteúdo. | ALTA |
| RF-003     | Verificar a correspondência entre as cartas selecionadas e atualizar a pontuação do jogador, indicando acertos e erros. | ALTA |
| RF-004     | Registrar e exibir a pontuação final do jogo, permitindo comparação com pontuações anteriores (placar ou ranking). | MÉDIA |
| RF-005     | Permitir que o usuário reinicie o jogo a qualquer momento. | MÉDIA |
| RF-006     | Salvar e recuperar os dados de pontuação e progresso do jogo utilizando um backend em Node.js. | ALTA |
| RF-007     | Fornecer feedback visual e sonoro durante a interação (ex.: virar carta, acerto, erro, final de jogo). | MÉDIA |

### Requisitos não Funcionais

| ID        | Descrição do Requisito | Prioridade |
| ---       | --- | --- |
| RNF-001   | O sistema deve possuir uma interface responsiva, adaptando-se a diferentes tamanhos de tela, incluindo dispositivos móveis e desktops. | ALTA |
| RNF-002   | O jogo deve ser compatível com os principais navegadores (Chrome, Firefox, Safari, Edge). | ALTA |
| RNF-003   | As ações do usuário (como virar cartas ou iniciar novo jogo) devem ter respostas rápidas, com tempo de resposta inferior a 1 segundo. | ALTA |
| RNF-004   | O código da aplicação deve seguir boas práticas de desenvolvimento, sendo bem estruturado e documentado para facilitar futuras manutenções e expansões. | MÉDIA |
| RNF-005   | O backend em Node.js deve ser escalável e seguro, garantindo a integridade e a confidencialidade dos dados dos usuários (como pontuações e histórico de partidas). | MÉDIA |
| RNF-006   | O sistema deve ser modular, possibilitando a inclusão futura de novas funcionalidades sem comprometer a estabilidade da aplicação. | MÉDIA |

## Restrições

| ID | Restrição |
| --- | --- |
| 01 | O software deve ser compatível com os principais navegadores e dispositivos móveis, garantindo o acesso tanto em Windows quanto em Linux. |
| 02 | A aplicação deve ser desenvolvida utilizando HTML, CSS e JavaScript para o frontend, e Node.js para o backend. |
| 03 | A persistência dos dados (como pontuações e progresso do jogo) deverá ser realizada utilizando uma base de dados integrada ao Node.js (por exemplo, MySQL ou MongoDB). |

> Links Úteis:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
