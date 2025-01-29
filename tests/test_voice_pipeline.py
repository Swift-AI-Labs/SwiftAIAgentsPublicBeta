import unittest
from voice_pipeline.voice_recognition import VoiceRecognition
import numpy as np

class TestVoiceRecognition(unittest.TestCase):
    def test_recognize_speech(self):
        vr = VoiceRecognition()
        result = vr.recognize_speech()
        self.assertIsInstance(result, str)

    def test_audio_processing(self):
        # Assuming you have a valid audio file for testing
        from voice_pipeline.audio_processing import AudioProcessing
        audio_processor = AudioProcessing("test_audio.wav")
        mfccs = audio_processor.process_audio()
        self.assertIsInstance(mfccs, np.ndarray)

if __name__ == '__main__':
    unittest.main()