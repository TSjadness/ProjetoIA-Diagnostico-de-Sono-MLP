from models.model import SleepQualityModel

# Crie uma instância do modelo, fornecendo o caminho para os dados
model = SleepQualityModel(data_path='data/student_sleep_patterns.csv')

# Treine o modelo
model.train()

# Salve o modelo treinado e o scaler
model.save_model()
