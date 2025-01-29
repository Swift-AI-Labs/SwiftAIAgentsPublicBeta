from web3 import Web3

class Blockchain:
    def __init__(self, provider_url):
        self.web3 = Web3(Web3.HTTPProvider(provider_url))

    def connect(self):
        if self.web3.isConnected():
            print("Connected to the blockchain!")
        else:
            print("Failed to connect to the blockchain.")

    def get_block_number(self):
        return self.web3.eth.blockNumber

    def get_balance(self, address):
        balance = self.web3.eth.getBalance(address)
        return self.web3.fromWei(balance, 'ether')