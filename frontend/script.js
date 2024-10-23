let myChart; // Variável global para armazenar o gráfico

document
  .getElementById("sleepForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = document.getElementById("sleepForm");

    // Mostra mensagem de "processando dados"
    document.getElementById("loadingMessage").style.display = "block";
    document.getElementById("result").textContent = "";
    document.getElementById("sleepChart").style.display = "none"; // Esconde o gráfico
    document.getElementById("exportButton").style.display = "none"; // Esconde o botão de exportação

    // Coleta os dados do formulário
    const age = document.getElementById("age").value;
    const study_hours = document.getElementById("study_hours").value;
    const screen_time = document.getElementById("screen_time").value;
    const caffeine_intake = document.getElementById("caffeine_intake").value;
    const physical_activity =
      document.getElementById("physical_activity").value;
    const sleep_duration = document.getElementById("sleep_duration").value;

    // Faz a requisição para o backend
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Age: age,
        Study_Hours: study_hours,
        Screen_Time: screen_time,
        Caffeine_Intake: caffeine_intake,
        Physical_Activity: physical_activity,
        Sleep_Duration: sleep_duration,
      }),
    });

    const data = await response.json();

    // Níveis de diagnóstico
    const levels = {
      1: "Infelizmente, seu padrão de sono está muito pobre. É importante que consideremos algumas estratégias para melhorar sua qualidade de descanso.",
      2: "Seu sono é considerado pobre. Recomendo avaliar fatores que possam estar contribuindo para isso e, se necessário, buscaremos orientações mais específicas.",
      3: "O seu sono está em um nível regular. Embora não seja alarmante, é desejável que exploremos maneiras de aprimorar a qualidade do seu descanso.",
      4: "Seu padrão de sono está abaixo da média. Vamos trabalhar juntos para identificar mudanças que podem ajudá-lo a alcançar uma melhor qualidade de sono.",
      5: "Seu sono é considerado médio. É um bom ponto de partida, mas podemos fazer ajustes que podem levar a uma melhora significativa.",
      6: "Você apresenta um padrão de sono acima da média. É um bom sinal, mas sempre há espaço para melhorias que podem contribuir para seu bem-estar geral.",
      7: "Seu sono está em um nível bom. Continue mantendo hábitos saudáveis, pois isso é fundamental para a sua saúde.",
      8: "Muito bom! Seu padrão de sono é satisfatório. Continue seguindo as recomendações de saúde para manter essa qualidade.",
      9: "Excelente! Seu sono é de alta qualidade, o que é benéfico para sua saúde física e mental. Continue assim!",
      10: "Perfeito! Você está apresentando um padrão de sono ideal. Isso é essencial para sua saúde e bem-estar. Continue com seus hábitos saudáveis.",
    };

    // Exibe o diagnóstico após 3 segundos
    setTimeout(() => {
      document.getElementById("loadingMessage").style.display = "none";
      document.getElementById("result").textContent = `Diagnóstico: ${
        levels[data.prediction]
      }`;

      // Exibe o gráfico com os dados do paciente
      showChart(
        age,
        study_hours,
        screen_time,
        caffeine_intake,
        physical_activity,
        sleep_duration
      );

      // Limpa os campos do formulário após a exibição do resultado
      form.reset();
    }, 3000); // Atraso de 3 segundos
  });

// Função para exibir o gráfico
function showChart(
  age,
  study_hours,
  screen_time,
  caffeine_intake,
  physical_activity,
  sleep_duration
) {
  const ctx = document.getElementById("sleepChart").getContext("2d");

  // Destroi o gráfico anterior, se existir
  if (myChart) {
    myChart.destroy();
  }

  // Dados para o gráfico
  const chartData = {
    labels: [
      "Idade",
      "Horas de Estudo",
      "Tempo de Tela",
      "Ingestão de Cafeína",
      "Atividade Física",
      "Duração do Sono",
    ],
    datasets: [
      {
        label: "Dados do Paciente",
        data: [
          age,
          study_hours,
          screen_time,
          caffeine_intake,
          physical_activity,
          sleep_duration,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.8)", // Aumenta a opacidade
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Criação do gráfico
  myChart = new Chart(ctx, {
    type: "bar",
    data: chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Valores",
          },
        },
        x: {
          title: {
            display: true,
            text: "Aspectos",
          },
        },
      },
    },
  });

  // Mostra o botão de exportação
  document.getElementById("exportButton").style.display = "block";
  document.getElementById("exportButton").onclick = function () {
    exportChartAsImage(myChart);
  };

  // Exibe o gráfico
  document.getElementById("sleepChart").style.display = "block";
}

// Função para exportar o gráfico como imagem
function exportChartAsImage(chart) {
  // Altera o fundo do canvas para branco
  const originalBackgroundColor = chart.canvas.style.backgroundColor;
  chart.canvas.style.backgroundColor = "white";

  const imgURI = chart.toBase64Image();
  const link = document.createElement("a");
  link.download = "grafico_dados_paciente.png";
  link.href = imgURI;
  link.click();

  // Restaura o fundo original do canvas
  chart.canvas.style.backgroundColor = originalBackgroundColor;
}
