document.getElementById('sleepForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Mostra a mensagem de carregamento
    document.getElementById('loadingMessage').style.display = 'block';
    document.getElementById('result').innerText = ''; // Limpa o resultado anterior

    // Coleta os dados do formulário
    const data = {
        Age: parseInt(document.getElementById('age').value),
        Study_Hours: parseFloat(document.getElementById('study_hours').value),
        Screen_Time: parseFloat(document.getElementById('screen_time').value),
        Caffeine_Intake: parseInt(document.getElementById('caffeine_intake').value),
        Physical_Activity: parseInt(document.getElementById('physical_activity').value),
        Sleep_Duration: parseFloat(document.getElementById('sleep_duration').value),
        Gender: document.getElementById('gender').value === "Male" ? 0 : 
                document.getElementById('gender').value === "Female" ? 1 : 2 // Mapeia gênero
    };

    try {
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Erro ao fazer a previsão');
        }

        const result = await response.json();
        
        // Exibe a predição
        document.getElementById('result').innerText = `Predição: ${result.prediction}`;

        // Aqui você pode adicionar código para renderizar o gráfico no canvas
        renderChart(result.prediction); // Supondo que você tenha essa função

    } catch (error) {
        document.getElementById('result').innerText = `Erro: ${error.message}`;
    } finally {
        // Esconde a mensagem de carregamento
        document.getElementById('loadingMessage').style.display = 'none';
    }
});

// Função para renderizar o gráfico (exemplo)
function renderChart(prediction) {
    const ctx = document.getElementById('sleepChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar', // ou 'line', dependendo do que você quiser
        data: {
            labels: ['Predição de Qualidade do Sono'],
            datasets: [{
                label: 'Predição',
                data: [prediction],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Mostra o botão de exportação
    document.getElementById('exportButton').style.display = 'block';
    
    // Adiciona a funcionalidade de exportação
    document.getElementById('exportButton').onclick = function() {
        const link = document.createElement('a');
        link.href = chart.toBase64Image();
        link.download = 'sleep_quality_prediction.png';
        link.click();
    };
}

