from setuptools import setup, find_packages

setup(
    name='AI-Agents-Project',
    version='0.1',
    packages=find_packages(),
    install_requires=[
        'speechrecognition',
        'pyttsx3',
        'numpy',
        'librosa',
        'openai',
        'web3',
    ],
    entry_points={
        'console_scripts': [
            'ai-agents=main:main',  # Assuming you have a main.py file with a main function
        ],
    },
)
