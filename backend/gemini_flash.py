import google.generativeai as genai

# Replace with your actual API key
API_KEY = "AIzaSyB2T-tr8FGgIF976scv2dU7zUz5dTLgzXQ"

# Configure the API
genai.configure(api_key=API_KEY)

# Specify the model (e.g., Gemini 1.5 Flash)
model = genai.GenerativeModel('gemini-1.5-flash')

# Example prompt
prompt = input("Whats your distress:")

# Generate a response
response = model.generate_content(prompt)

# Print the response
print(response.text)