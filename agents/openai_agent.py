import openai
from agents.agent_model import Agent

class OpenAIAgent(Agent):
    def __init__(self, name, api_key):
        super().__init__(name)
        openai.api_key = api_key

    def generate_response(self, prompt):
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        return response['choices'][0]['message']['content']

    def summarize_text(self, text):
        prompt = f"Please summarize the following text: {text}"
        return self.generate_response(prompt)
