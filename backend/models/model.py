import pandas as pd
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import joblib

# Carregando os dados
data = pd.read_csv('data/student_sleep_patterns.csv')

# Selecionando as features (variáveis independentes)
X = data[['Age', 'Study_Hours', 'Screen_Time', 'Caffeine_Intake', 'Physical_Activity', 'Sleep_Duration']]

# Selecionando o rótulo (variável dependente)
y = data['Sleep_Quality']  # ou outra coluna de interesse como alvo

# Dividindo os dados em treino e teste
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Pré-processamento
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Treinando o modelo MLP
mlp = MLPClassifier(hidden_layer_sizes=(10, 10), max_iter=1000)
mlp.fit(X_train_scaled, y_train)

# Salvando o modelo treinado e o scaler
joblib.dump(mlp, 'mlp_model.pkl')
joblib.dump(scaler, 'scaler.pkl')  # Salva o scaler para uso posterior

def predict_sleep_pattern(symptoms):
    # Carrega o modelo e faz previsões
    model = joblib.load('mlp_model.pkl')
    scaler = joblib.load('scaler.pkl')  # Carrega o scaler
    symptoms_scaled = scaler.transform([symptoms])  # Transforma os sintomas para o formato esperado
    prediction = model.predict(symptoms_scaled)
    return prediction[0]  # Retorna a previsão como um valor simples
