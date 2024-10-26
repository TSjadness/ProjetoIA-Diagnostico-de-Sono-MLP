
import pandas as pd
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report
import joblib

class SleepQualityModel:
    def __init__(self, data_path):
        self.data_path = data_path
        self.model = None
        self.scaler = None

    def load_data(self):
        # Carregando os dados
        data = pd.read_csv(self.data_path)

        # Mapeando gênero para valores numéricos
        gender_mapping = {'Male': 0, 'Female': 1, 'Other': 2}
        data['Gender'] = data['Gender'].map(gender_mapping)

        # Selecionando as features e rótulo
        X = data[['Age', 'Study_Hours', 'Screen_Time', 'Caffeine_Intake', 'Physical_Activity', 'Sleep_Duration', 'Gender']]
        y = data['Sleep_Quality']

        return X, y

    def train(self):
        X, y = self.load_data()

        # Dividindo os dados
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Pré-processamento
        self.scaler = StandardScaler()
        X_train_scaled = self.scaler.fit_transform(X_train)
        X_test_scaled = self.scaler.transform(X_test)

        # Ajuste fino do modelo MLP
        self.model = MLPClassifier(hidden_layer_sizes=(30, 30), activation='relu', max_iter=1500, random_state=42)
        self.model.fit(X_train_scaled, y_train)

        # Avaliando o modelo
        y_pred = self.model.predict(X_test_scaled)
        print(classification_report(y_test, y_pred))

    def save_model(self):
        # Salvando o modelo e o scaler
        joblib.dump(self.model, 'mlp_model.pkl')
        joblib.dump(self.scaler, 'scaler.pkl')

    def load_model(self):
        # Carrega o modelo e o scaler
        self.model = joblib.load('mlp_model.pkl')
        self.scaler = joblib.load('scaler.pkl')

    def predict(self, symptoms):
        symptoms_scaled = self.scaler.transform([symptoms])
        prediction = self.model.predict(symptoms_scaled)
        return prediction[0]
