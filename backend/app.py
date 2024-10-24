from flask import Flask, request, jsonify
from flask_cors import CORS  # Importa o CORS
import pandas as pd
import joblib
from models.model import predict_sleep_pattern

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas as rotas

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    # Coleta os dados fornecidos pelo formulário
    symptoms = [
        int(data['Age']), 
        float(data['Study_Hours']), 
        float(data['Screen_Time']), 
        int(data['Caffeine_Intake']), 
        int(data['Physical_Activity']), 
        float(data['Sleep_Duration'])
    ]  # Converta os valores para tipos nativos do Python
    
    prediction = predict_sleep_pattern(symptoms)
    
    return jsonify({"prediction": int(prediction)})  # Converta a previsão para int

if __name__ == '__main__':
    app.run(debug=True)
