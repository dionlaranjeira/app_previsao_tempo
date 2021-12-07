# app_previsao_tempo
<h1 align="center" >Aplicativo desenvolvido em React Native que mostra a previsão do tempo para uma determinada cidade.</h1>

<h3 align="center">PROJETO EM CONSTRUÇÃO</h1>

<figure align="center">
  <img src="https://github.com/dionlaranjeira/app_previsao_tempo/blob/main/tela_inicial.png" alt="Tela inical">
  <figcaption>Tela inicial do aplicativo</figcaption>
</figure>

<p align="center">
<a href="#sobre">Sobre | </a>
<a href="#instalacao">Instalação | </a>
<a href="#instalacao">Utilização | </a>
<a href="#telas">Telas | </a>  
<a href="#atualizacoes">Atualizações</a>
</p>



<h1>#sobre</h1>
<p>Esse aplicativo consulta uma API desenvolvida em python (disponivel em: https://github.com/dionlaranjeira/api-previsao-python). O usuário poderá fazer a busca por uma cidade (você pode baixar a lista de cidade disponíveis para consulta em: http://bulk.openweathermap.org/sample/), no momento em que a cidade é selecionda, é retornado uma previsão do clima para as proxímas 120 horas para a cidade escolhida.</p> 
<p>Após isso, o usuário ver as previsões do dia atual (conforme o horário do servidor). Caso o usuário queria ver as previsões de outro dia, ele poderá fazê-lo com um simples clique em um card.</p> 
<h3>Esse aplicativo encontra-se em construção, por isso alguns tratamentos de layout de tela e falta de conexão com o servidor não foram concluídos.</h3> 
<h3>Algumas refatorações precisam ser feitas no código, para o mesmo se torne mais fácil de compreender e dá manuntenção.</h3> 
<h3>O layout do aplicativo está otimizado para dispositivos Android. Em dispositivos que usem o IOS podem ocorrer alguns problemas com o layout no formato landscape</h3> 

<h1>#instalacao</h1>
<p>Esse aplicativo foi desenvolvido utilizando o FrameWork React Native, por isso, siga todas as orientações para configuração do ambiente de desenvolvimento listatas em: https://reactnative.dev/docs/0.61/enviroment-setup .</p>
<p>Clone o aplicativo para sua máquina.</p>
<p>Certifique-se que o yarn está devidamento configurado em seu ambiente de desenvolvimento.</p>
<p>Abra o terminal na pasta do aplicativo e baixe as depências utilizando o comando "yarn".</p>
<p>No arquivo service (https://github.com/dionlaranjeira/app_previsao_tempo/blob/main/src/service/api.js), altere a "const ip" com o endereço do servidor python, já mencionado na seção <span>#sobre</span>.</p>
<p>Certifique-se que seu dispositivo possuem conexão com o servidor python.</p>
<p>Execute o aplicativo com o comando "yarn ios" ou "yarn android".</p> 

<h1>#Utilização</h1>


<p>Esse aplicativo está com o layout otimizado para ser utilizado na orientação horizontal.</p>
<p>Por padrão, o aplicativo inicia obtendo informações da cidade de Brasília-DF.</p>
<p>O Usuário pode pesquisar por uma cidade utilizando um campo de pesquisa na parte superior do aplicativo.</p>
<p>Após a pesquisa, o usuário pode selecionar uma cidade afim de obter previsões do tempo.</p>
<p>O Usuário pode selecionar um dia para exibir mais informações clicando em pequeno card que possui uma listra laranja.</p>
<p>O card representante do dia selecionado, fica com uma listra amarela maior que as dos cards não selecionados.</p>
<p>Caso não acha conexão com o servidor, problemas ainda não tratados poderão ocorrer na utilização do aplicativo.</p>

<h1>#telas</h1>
<p>Tela inicial - Resultados da previsão do tempo de Brasília - DF</p>
<figure align="center">
  <img src="https://github.com/dionlaranjeira/app_previsao_tempo/blob/main/tela_inicial.png" alt="Tela inical">
  <figcaption>Tela inicial do aplicativo</figcaption>
</figure>

<p>Tela de carregamento de busca por cidades</p>
<figure align="center">
  <img src="https://github.com/dionlaranjeira/app_previsao_tempo/blob/main/load_cidades.png" alt="Buscando cidades">
  <figcaption>Buscando cidades</figcaption>
</figure>


<p>Tela de carregamento de busca por cidades</p>
<figure align="center">
  <img src="https://github.com/dionlaranjeira/app_previsao_tempo/blob/main/load_cidades.png" alt="Buscando cidades">
  <figcaption>Buscando cidades</figcaption>
</figure>

<p>Tela de seleção por cidades</p>
<figure align="center">
  <img src="https://github.com/dionlaranjeira/app_previsao_tempo/blob/main/tela_lista_cidades.png" alt="Lista de cidades">
  <figcaption>Lista de Cidades</figcaption>
</figure>

<p>Tela de carregamento de previsões</p>
<figure align="center">
  <img src="https://github.com/dionlaranjeira/app_previsao_tempo/blob/main/load_previsoes.png" alt="Lista de cidades">
  <figcaption>Lista de Cidades</figcaption>
</figure>

<h1>#atualizacoes</h1>

<p>Atualizações futuras do app:</p>
<p>Listar o Estado da cidade com base nas geocoordenadas, já que a api que retorna os dados não fornece o estado mas somente o nome da cidade e paîs.</p>
<p>Otimizar o layout do app para uso na orientação vertical.</p>
<p>Tratar erros de falta de conexão com o servidor.</p>
<p>Armazenar dados de pesquisas do usuário (para isso, sugere-se o RealmDB).</p>
