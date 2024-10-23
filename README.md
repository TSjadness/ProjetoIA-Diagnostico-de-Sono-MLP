# Projeto de Diagnóstico de Sono

Este projeto consiste em uma aplicação web para diagnóstico de qualidade do sono. O usuário fornece dados sobre seu sono, como horário de dormir, horário de acordar, quantidade de horas dormidas, entre outros, e a aplicação faz uma previsão sobre a qualidade do sono baseada nesses dados. O diagnóstico é exibido na tela, juntamente com um gráfico interativo com as informações fornecidas. O usuário também pode exportar o gráfico gerado como imagem.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python, Flask
- **Machine Learning**: Redes Neurais Artificiais (RNA) Multilayer Perceptrons (MLP)
- **Gráficos**: Chart.js
- **IDE**: Visual Studio Code
- **Controle de Versão**: Git, GitHub
- **Sistema de Gerenciamento de Projetos**: 


## Funcionalidades

- Formulário para entrada de dados do usuário.
- Previsão de qualidade do sono baseada nos dados fornecidos.
- Exibição de diagnóstico com mensagens específicas para diferentes níveis de qualidade do sono.
- Exibição de um gráfico interativo com os dados fornecidos.
- Possibilidade de exportar o gráfico gerado como imagem.

## Estrutura do Projeto

- **Frontend**: Interface com formulário e exibição de resultados, implementada em HTML, CSS e JavaScript.
- **Backend**: API para processamento dos dados e previsão, desenvolvida em Python com Flask.
- **Gráficos**: Implementados com a biblioteca Chart.js para visualização dos dados fornecidos pelo usuário.

## Requisitos

- **Python 3.x**: Necessário para rodar tanto o frontend (simulação de servidor local) quanto o backend.
- **Bibliotecas Python**: As seguintes bibliotecas Python são necessárias para o backend:
  - `Flask`: Para servir a API.
  - `flask-cors`: Para permitir a comunicação entre o frontend e o backend.
  - Outras dependências podem variar dependendo do seu modelo de machine learning.

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/projeto-diagnostico-sono.git
   cd projeto-diagnostico-sono

2. **Instale as dependências**:

   ```bash
    pip install flask flask-cors
    ```
    Se houver outras bibliotecas necessárias (dependendo do modelo de machine learning), instale-as também com:

    ```bash
    pip install <biblioteca-necessaria>
    ```
## Como Rodar o Projeto

### Rodando o Frontend

1. Navegue até a pasta do frontend onde estão seus arquivos HTML, CSS e JavaScript.

   ```bash
   cd frontend
   ```
2. Inicie um servidor HTTP local usando o módulo `http.server` do Python. Este comando vai servir o frontend na porta `5500`:

   ```bash
    python -m http.server 5500
    ```
3. Acesse o frontend abrindo o navegador na seguinte URL:
4. http://localhost:5500
   
5. ### Rodando o Backend
6. Navegue até a pasta do backend onde está o arquivo `app.py`.

   ```bash
   cd backend
   ```
7. Inicie o servidor Flask executando o arquivo `app.py`:

   ```bash
    python app.py
    ```
8. O servidor Flask vai rodar na porta `5000` por padrão. A API estará disponível em:
9.  http://localhost:5000
10. ### Testando a Aplicação
11. Preencha o formulário com os dados solicitados e clique no botão "Enviar".
12. A aplicação vai fazer uma previsão sobre a qualidade do sono baseada nos dados fornecidos.
13. O diagnóstico e um gráfico com as informações fornecidas serão exibidos na tela.
14. ### Exportando o Gráfico
15. Para exportar o gráfico gerado como imagem, clique no botão "Exportar Gráfico" abaixo do gráfico.
16. O gráfico será salvo automaticamente no seu computador.
17. ## Licença
18. Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
19. ## Autores
20. - **Autor 1**: [Jadson Tavares Santos]( [https://github  .com/jadson179](https://github.com/TSjadness))   

    

  





