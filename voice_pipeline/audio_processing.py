import numpy as np
import librosa
import matplotlib.pyplot as plt

class AudioProcessing:
    def __init__(self, file_path):
        self.file_path = file_path

    def process_audio(self):
        y, sr = librosa.load(self.file_path)
        mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13)
        return np.mean(mfccs.T, axis=0)

    def visualize_audio(self):
        y, sr = librosa.load(self.file_path)
        plt.figure(figsize=(14, 5))
        librosa.display.waveshow(y, sr=sr)
        plt.title("Audio Waveform")
        plt.show()