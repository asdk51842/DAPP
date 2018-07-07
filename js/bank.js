//const bankBytecode = '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610530806100606000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806316cba9d3146100725780632e1a7d4d1461009d5780636a4b3eca146100ca578063a9059cbb146100f5578063d0e30db014610142575b600080fd5b34801561007e57600080fd5b5061008761014c565b6040518082815260200191505060405180910390f35b3480156100a957600080fd5b506100c86004803603810190808035906020019092919050505061016b565b005b3480156100d657600080fd5b506100df6102af565b6040518082815260200191505060405180910390f35b34801561010157600080fd5b50610140600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506102f6565b005b61014a61045f565b005b60003373ffffffffffffffffffffffffffffffffffffffff1631905090565b6000670de0b6b3a76400008202905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156101c857600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050151561020857600080fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff167f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab8342604051808381526020018281526020019250505060405180910390a25050565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000670de0b6b3a76400008202905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561035357600080fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd68442604051808381526020018281526020019250505060405180910390a3505050565b34600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae26603442604051808381526020018281526020019250505060405180910390a25600a165627a7a72305820cb365ddddca40a818d05c33334d13993f5d13387123c5e3704dbb35ce498a2d30029'
const bankBytecode = '608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506106ee806100606000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ee8c001461008857806316cba9d3146100b35780632e1a7d4d146100de578063611091a31461010b5780636a4b3eca14610158578063a9059cbb14610183578063b6b55f25146101d0575b600080fd5b34801561009457600080fd5b5061009d6101f0565b6040518082815260200191505060405180910390f35b3480156100bf57600080fd5b506100c8610237565b6040518082815260200191505060405180910390f35b3480156100ea57600080fd5b5061010960048036038101908080359060200190929190505050610256565b005b34801561011757600080fd5b50610156600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061035a565b005b34801561016457600080fd5b5061016d61045c565b6040518082815260200191505060405180910390f35b34801561018f57600080fd5b506101ce600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104a3565b005b6101ee6004803603810190808035906020019092919050505061060c565b005b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60003373ffffffffffffffffffffffffffffffffffffffff1631905090565b6000670de0b6b3a76400008202905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156102b357600080fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff167f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab8342604051808381526020018281526020019250505060405180910390a25050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103b557600080fd5b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff167f9670c8b300c38cd3db8d3f9429dd902e67f418c4dd193e2497f06d20efc795608242604051808381526020018281526020019250505060405180910390a25050565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000670de0b6b3a76400008202905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561050057600080fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd68442604051808381526020018281526020019250505060405180910390a3505050565b6000670de0b6b3a76400008202905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae26608342604051808381526020018281526020019250505060405180910390a250505600a165627a7a723058203fd2b6781b46b578dad7ac1cc9f6e3bccedb7f40bf5550f16fcbc40c6cd2e23a0029'
    
const bankAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "toWho",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "mintEvent",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "mintAccount",
                "type": "address"
            },
            {
                "name": "amounts",
                "type": "uint256"
            }
        ],
        "name": "coin",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "TransferEvent",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "WithdrawEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DepositEvent",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "etherValue",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "etherValue",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "checkBankBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "checkEtherBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "checkNCCUBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]