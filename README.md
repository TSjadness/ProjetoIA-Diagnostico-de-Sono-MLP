Aqui está um README detalhado e estruturado para o seu **Projeto de Diagnóstico de Sono**:

---

# Projeto de Diagnóstico de Sono

Este projeto consiste em uma aplicação web interativa que realiza o diagnóstico da qualidade do sono com base em dados fornecidos pelo usuário. Através de uma interface intuitiva, o usuário insere informações como duração do sono, horário de dormir e acordar, entre outros fatores. A aplicação processa esses dados e gera um gráfico interativo exibindo as informações coletadas. Além disso, é possível exportar o gráfico gerado como imagem para uso pessoal.

## Sumário

- [Projeto de Diagnóstico de Sono](#projeto-de-diagnóstico-de-sono)
  - [Sumário](#sumário)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Funcionalidades](#funcionalidades)
  - [Estrutura do Projeto](#estrutura-do-projeto)
    - [Estrutura de Pastas (Exemplo)](#estrutura-de-pastas-exemplo)
  - [Requisitos](#requisitos)
    - [Software:](#software)
    - [Dependências Python:](#dependências-python)
  - [Instalação](#instalação)
  - [Como Rodar o Projeto](#como-rodar-o-projeto)
    - [Rodando o Frontend](#rodando-o-frontend)
    - [Rodando o Backend](#rodando-o-backend)
    - [Testando a Aplicação](#testando-a-aplicação)
    - [Exportando o Gráfico](#exportando-o-gráfico)
  - [Licença](#licença)
  - [Autores](#autores)

## Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Python, Flask
- **Machine Learning**: Redes Neurais Artificiais (RNA) utilizando Multilayer Perceptrons (MLP)
- **Gráficos**: Chart.js (visualização de dados)
- **IDE**: Visual Studio Code
- **Controle de Versão**: Git, GitHub
- **Sistema de Gerenciamento de Projetos**: [a definir, se houver]

## Funcionalidades

- **Entrada de Dados**: Um formulário de fácil uso para que o usuário insira informações sobre seu padrão de sono, como horas dormidas, ingestão de cafeína, entre outros.
- **Previsão da Qualidade do Sono**: Baseada nos dados fornecidos, o sistema faz uma análise e exibe um diagnóstico sobre a qualidade do sono.
- **Gráfico Interativo**: As informações fornecidas pelo usuário são exibidas em um gráfico dinâmico, permitindo uma visualização clara dos dados.
- **Exportação de Gráfico**: O gráfico gerado pode ser exportado como uma imagem (formato PNG) para que o usuário possa guardá-lo ou compartilhá-lo.
- **Notificações Interativas**: Utiliza Toastify para exibir notificações de sucesso ou erro, melhorando a experiência do usuário.

## Estrutura do Projeto

- **Frontend**: Implementado em HTML, CSS e JavaScript, responsável pela interface do usuário e exibição dos resultados.
- **Backend**: Implementado em Python com Flask, responsável por processar os dados e executar os cálculos necessários para a previsão da qualidade do sono.
- **Gráficos**: Utilização da biblioteca Chart.js para visualização dos dados coletados e análise do padrão de sono.
  
### Estrutura de Pastas (Exemplo)

```
/projeto-diagnostico-sono
│
├── /frontend                 # Interface do usuário (HTML, CSS, JS)
│   ├── images
│   │   ├── grafico.png
│   ├── scripts
│   │   ├── script.js
│   ├── styles
│   │   ├── style.css
│   ├── index.html 
│
├── /backend                  # API e processamento (Python, Flask)
│   ├── data
│   │   ├── student_sleep_patterns.csv
│   └── models
│   │   ├── model.py
│   ├── app.py
│
│   └── ...
├── README.md                 # Documentação do projeto
└── requirements.txt          # Dependências do backend
```

## Requisitos

### Software:

- **Python 3.x**: Necessário para rodar o backend (API).
- **Navegador Web**: Para rodar o frontend e interagir com a aplicação.

### Dependências Python:

As seguintes bibliotecas Python são necessárias para o backend:

- `Flask`: Para criar e rodar a API.
- `flask-cors`: Para permitir a comunicação entre o frontend e o backend (Cross-Origin Resource Sharing).
- Outras bibliotecas podem ser adicionadas de acordo com o modelo de machine learning.

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/projeto-diagnostico-sono.git
   cd projeto-diagnostico-sono
   ```

2. **Instale as dependências do backend**:

   ```bash
   pip install -r requirements.txt
   ```

   Se necessário, adicione bibliotecas adicionais para o modelo de machine learning:

   ```bash
   pip install <nome-da-biblioteca>
   ```

## Como Rodar o Projeto

### Rodando o Frontend

1. Navegue até a pasta `frontend`:

   ```bash
   cd frontend
   ```

2. Inicie um servidor local utilizando o Python para servir os arquivos HTML:

   ```bash
   python -m http.server 5500
   ```

3. Abra o navegador e acesse o seguinte endereço:

   ```url
   http://localhost:5500
   ```

### Rodando o Backend

1. Navegue até a pasta `backend`:

   ```bash
   cd backend
   ```

2. Inicie o servidor Flask:

   ```bash
   python app.py
   ```

3. O backend estará rodando na porta `5000`. Acesse a API em:

   ```url
   http://localhost:5000
   ```

### Testando a Aplicação

1. Preencha o formulário no frontend com os dados solicitados (idade, horas de estudo, ingestão de cafeína, etc.).
2. Clique em **Enviar**. O backend processará os dados e exibirá o diagnóstico.
3. Um gráfico interativo será gerado automaticamente com os dados fornecidos.

### Exportando o Gráfico

1. Após a geração do gráfico, clique no botão **Exportar Gráfico** logo abaixo do gráfico.
2. O gráfico será exportado e salvo automaticamente no formato PNG.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autores

- **Jadson Tavares Santos**: [GitHub](https://github.com/TSjadness)

---

