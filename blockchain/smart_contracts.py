from web3 import Web3

class SmartContract:
    def __init__(self, contract_address, abi, web3_instance):
        self.contract = web3_instance.eth.contract(address=contract_address, abi=abi)

    def call_function(self, function_name, *args):
        return getattr(self.contract.functions, function_name)(*args).call()

    def send_transaction(self, function_name, *args, account):
        tx = getattr(self.contract.functions, function_name)(*args).buildTransaction({
            'from': account,
            'nonce': web3_instance.eth.getTransactionCount(account),
            'gas': 2000000,
            'gasPrice': web3_instance.toWei('50', 'gwei')
        })
        signed_tx = web3_instance.eth.account.signTransaction(tx, private_key='YOUR_PRIVATE_KEY')
        return web3_instance.eth.sendRawTransaction(signed_tx.rawTransaction)

    def get_event_logs(self, event_name):
        event_filter = self.contract.events[event_name].createFilter(fromBlock='latest')
        return event_filter.get_all_entries()