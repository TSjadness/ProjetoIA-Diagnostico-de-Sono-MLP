let chart; 

// Adiciona o evento de submit ao formulário
document.getElementById("sleepForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Previne o comportamento padrão de envio do formulário


  document.getElementById("loadingMessage").style.display = "block";
  document.getElementById("result").innerText = ""; 

  // Coleta os dados do formulário
  const data = {
    Age: parseInt(document.getElementById("age").value),
    Study_Hours: parseFloat(document.getElementById("study_hours").value),
    Screen_Time: parseFloat(document.getElementById("screen_time").value),
    Caffeine_Intake: parseInt(document.getElementById("caffeine_intake").value),
    Physical_Activity: parseInt(
      document.getElementById("physical_activity").value
    ),
    Sleep_Duration: parseFloat(document.getElementById("sleep_duration").value),
    Gender:
      document.getElementById("gender").value === "Male"
        ? 0
        : document.getElementById("gender").value === "Female"
        ? 1
        : 2, 
  };

  try {
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro ao fazer a previsão");
    }

    const result = await response.json();

    // Mapeia o Diagnósticoo para a mensagem correspondente
    const qualityMessages = {
      1: "Seu padrão de sono está muito abaixo do ideal. Recomenda-se aumentar a quantidade de sono e reduzir a cafeína.",
      2: "Seu sono é considerado pobre. Considere limitar o consumo de cafeína e aumentar a duração do sono.",
      3: "Seu sono está em um nível regular. Melhore o sono reduzindo cafeína e telas antes de dormir.",
      4: "Seu padrão de sono está abaixo da média. Manter consistência nos horários pode ajudar.",
      5: "Seu sono é considerado médio. Pequenos ajustes podem levar a uma melhora significativa.",
      6: "Seu padrão de sono está acima da média. Continue, mas há espaço para melhorias.",
      7: "Seu sono está em um nível bom. Mantenha hábitos saudáveis.",
      8: "Muito bom! Seu padrão de sono é satisfatório. Mantenha-se assim.",
      9: "Excelente! Seu sono é de alta qualidade. Continue com seus hábitos saudáveis.",
      10: "Perfeito! Você está apresentando um padrão de sono ideal. Continue assim!",
    };

    // Exibe a  mensagem de Diagnóstico
    const sleepQualityMessage =
      qualityMessages[result.prediction] || "Diagnóstico inválido.";
    document.getElementById(
      "result"
    ).innerText = `Diagnóstico: ${result.prediction}\n${sleepQualityMessage}`;

    // Adiciona os dados ao gráfico
    const chartData = [
      data.Age,
      data.Study_Hours,
      data.Screen_Time,
      data.Caffeine_Intake,
      data.Physical_Activity,
      data.Sleep_Duration,
    ];

    // Limpa o gráfico anterior se existir
    if (chart) {
      chart.destroy();
    }

    // Renderiza o gráfico
    renderChart(chartData);
  } catch (error) {
    document.getElementById("result").innerText = `Erro: ${error.message}`;
  } finally {
    document.getElementById("loadingMessage").style.display = "none";
  }
});

// Função para renderizar o gráfico
function renderChart(chartData) {
  const ctx = document.getElementById("sleepChart").getContext("2d");

  chart = new Chart(ctx, {
    type: "bar", 
    data: {
      labels: [
        "Idade",
        "Horas de Estudo",
        "Tempo de Tela",
        "Ingestão de Cafeína",
        "Atividade Física",
        "Duração do Sono",
      ], // Labels do gráfico
      datasets: [
        {
          label: "Dados do Sono correspondentes à Predição", 
          data: chartData,
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Mostra o botão de exportação
  document.getElementById("exportButton").style.display = "block";

  // Adiciona a funcionalidade de exportação
  document.getElementById("exportButton").onclick = function () {
    const link = document.createElement("a");
    link.href = chart.toBase64Image();
    link.download = "Grafico.png";
    link.click();
  };

  // Reseta o formulário
  document.getElementById("sleepForm").reset();
}
