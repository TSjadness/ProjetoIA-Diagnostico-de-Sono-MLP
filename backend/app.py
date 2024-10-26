from flask import Flask, request, jsonify
from flask_cors import CORS
from models.model import SleepQualityModel

app = Flask(__name__)
CORS(app)

# Inicializando o modelo
model = SleepQualityModel(data_path='data/student_sleep_patterns.csv')
model.train()  # Treine o modelo ao iniciar
model.save_model()  # Salve o modelo treinado

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        # Valida os dados recebidos
        if not all(key in data for key in ['Age', 'Study_Hours', 'Screen_Time', 'Caffeine_Intake', 'Physical_Activity', 'Sleep_Duration', 'Gender']):
            return jsonify({"error": "Dados incompletos"}), 400

        symptoms = [
            int(data['Age']),
            float(data['Study_Hours']),
            float(data['Screen_Time']),
            int(data['Caffeine_Intake']),
            int(data['Physical_Activity']),
            float(data['Sleep_Duration']),
            int(data['Gender'])
        ]
        
        model.load_model()  # Carrega o modelo para fazer previsões
        prediction = model.predict(symptoms)
        
        return jsonify({"prediction": int(prediction)})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

