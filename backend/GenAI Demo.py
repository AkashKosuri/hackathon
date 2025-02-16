import pandas as pd
import google.generativeai as genai

# Load the CSV file into a DataFrame
df = pd.read_csv("C:/Users/kolpr/Desktop/reddit_text-davinci-002.csv")

# Load dataset
df = pd.read_csv("reddit_text-davinci-002.csv")
# Remove duplicates
df = df.drop_duplicates()

# Remove rows with missing values
df = df.dropna()

# Example: Formatting for fine-tuning
formatted_data = []
for index, row in df.iterrows():
    input_text = row["prompt"]
    output_text = row["completion"]
    formatted_data.append({"prompt": input_text, "completion": output_text})

formatted_data = [
    {"prompt": "I feel really anxious today.", "completion": "I'm sorry to hear that. Let's talk about what's causing your anxiety."},
    {"prompt": "I can't stop overthinking.", "completion": "Overthinking can be overwhelming. Try focusing on one thing at a time."},
    # Add more examples
]

#API--------

# Replace with your actual API key
API_KEY = "AIzaSyB2T-tr8FGgIF976scv2dU7zUz5dTLgzXQ"

# Configure the API
genai.configure(api_key=API_KEY)

# Specify the model (e.g., Gemini 1.5 Flash)
model = genai.GenerativeModel('gemini-1.5-flash')

#------------

# Example function to send data to Gemini
def send_to_gemini(prompt):
    response = model.generate_content(prompt)
    return response.text

# Test with a sample input
sample_input = "I feel really anxious today."
response = send_to_gemini(sample_input)
print(response)

#----------------
#Fine tuning

# Define a system prompt
system_prompt = """
You are a compassionate and empathetic therapist. Provide supportive and non-judgmental responses to the user's concerns.
"""

# Combine system prompt with user input
def therapy_ai(prompt):
    full_prompt = f"{system_prompt}\nUser: {prompt}\nTherapist:"
    response = send_to_gemini(full_prompt)
    return response

# Test the function
user_input = "I feel really anxious today."
print(therapy_ai(user_input))

#------------

# Example prompt
prompt = input(":")

# Generate a response
response = model.generate_content(prompt)

# Print the response
print(response.text)

