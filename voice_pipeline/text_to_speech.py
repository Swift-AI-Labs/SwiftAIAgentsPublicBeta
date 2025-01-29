import pyttsx3

class TextToSpeech:
    def __init__(self):
        self.engine = pyttsx3.init()

    def speak(self, text):
        self.engine.say(text)
        self.engine.runAndWait()

    def set_voice(self, voice_id):
        voices = self.engine.getProperty('voices')
        self.engine.setProperty('voice', voices[voice_id].id)