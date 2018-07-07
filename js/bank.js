//const bankBytecode = '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610530806100606000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806316cba9d3146100725780632e1a7d4d1461009d5780636a4b3eca146100ca578063a9059cbb146100f5578063d0e30db014610142575b600080fd5b34801561007e57600080fd5b5061008761014c565b6040518082815260200191505060405180910390f35b3480156100a957600080fd5b506100c86004803603810190808035906020019092919050505061016b565b005b3480156100d657600080fd5b506100df6102af565b6040518082815260200191505060405180910390f35b34801561010157600080fd5b50610140600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506102f6565b005b61014a61045f565b005b60003373ffffffffffffffffffffffffffffffffffffffff1631905090565b6000670de0b6b3a76400008202905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156101c857600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050151561020857600080fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff167f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab8342604051808381526020018281526020019250505060405180910390a25050565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000670de0b6b3a76400008202905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561035357600080fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd68442604051808381526020018281526020019250505060405180910390a3505050565b34600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae26603442604051808381526020018281526020019250505060405180910390a25600a165627a7a72305820cb365ddddca40a818d05c33334d13993f5d13387123c5e3704dbb35ce498a2d30029'
//const bankBytecode = '608060405234801561001057600080fd5b5060008054600160a060020a033316600160a060020a03199091161790556103f58061003d6000396000f3006080604052600436106100825763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301ee8c00811461008757806316cba9d3146100ae5780632e1a7d4d146100c357806340c10f19146100dd5780636a4b3eca14610101578063a9059cbb14610116578063d0e30db01461013a575b600080fd5b34801561009357600080fd5b5061009c610142565b60408051918252519081900360200190f35b3480156100ba57600080fd5b5061009c61015e565b3480156100cf57600080fd5b506100db60043561016c565b005b3480156100e957600080fd5b506100db600160a060020a036004351660243561022e565b34801561010d57600080fd5b5061009c6102a9565b34801561012257600080fd5b506100db600160a060020a03600435166024356102c5565b6100db610368565b600160a060020a03331660009081526002602052604090205490565b600160a060020a0333163190565b600160a060020a033316600090815260016020526040902054670de0b6b3a764000082029081111561019d57600080fd5b604051600160a060020a0333169082156108fc029083906000818181858888f1935050505015156101cd57600080fd5b600160a060020a033316600081815260016020908152604091829020805485900390558151858152429181019190915281517f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab929181900390910190a25050565b60005433600160a060020a0390811691161461024957600080fd5b600160a060020a0382166000818152600260209081526040918290208054850190558151848152429181019190915281517f9670c8b300c38cd3db8d3f9429dd902e67f418c4dd193e2497f06d20efc79560929181900390910190a25050565b600160a060020a03331660009081526001602052604090205490565b600160a060020a033316600090815260016020526040902054670de0b6b3a76400008202908111156102f657600080fd5b600160a060020a033381166000818152600160209081526040808320805487900390559387168083529184902080548601905583518681524291810191909152835191937fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd692918290030190a3505050565b600160a060020a0333166000818152600160209081526040918290208054349081019091558251908152429181019190915281517fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae2660929181900390910190a25600a165627a7a723058201e9b645a5c36eea94ac9915d6d5ccb8b57ea89222f47d1f4f96f2b1ea25503ed0029'
//const bankBytecode = '608060405234801561001057600080fd5b5060008054600160a060020a033316600160a060020a03199091161790556104868061003d6000396000f30060806040526004361061008d5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301ee8c00811461009257806316cba9d3146100b95780632e1a7d4d146100ce57806340c10f19146100e85780636a4b3eca1461010c578063a9059cbb14610121578063d0e30db014610145578063d96a094a1461014d575b600080fd5b34801561009e57600080fd5b506100a7610165565b60408051918252519081900360200190f35b3480156100c557600080fd5b506100a7610181565b3480156100da57600080fd5b506100e660043561018f565b005b3480156100f457600080fd5b506100e6600160a060020a0360043516602435610251565b34801561011857600080fd5b506100a76102cc565b34801561012d57600080fd5b506100e6600160a060020a03600435166024356102e8565b6100e661038b565b34801561015957600080fd5b506100e66004356103ec565b600160a060020a03331660009081526002602052604090205490565b600160a060020a0333163190565b600160a060020a033316600090815260016020526040902054670de0b6b3a76400008202908111156101c057600080fd5b604051600160a060020a0333169082156108fc029083906000818181858888f1935050505015156101f057600080fd5b600160a060020a033316600081815260016020908152604091829020805485900390558151858152429181019190915281517f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab929181900390910190a25050565b60005433600160a060020a0390811691161461026c57600080fd5b600160a060020a0382166000818152600260209081526040918290208054850190558151848152429181019190915281517f9670c8b300c38cd3db8d3f9429dd902e67f418c4dd193e2497f06d20efc79560929181900390910190a25050565b600160a060020a03331660009081526001602052604090205490565b600160a060020a033316600090815260016020526040902054670de0b6b3a764000082029081111561031957600080fd5b600160a060020a033381166000818152600160209081526040808320805487900390559387168083529184902080548601905583518681524291810191909152835191937fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd692918290030190a3505050565b600160a060020a0333166000818152600160209081526040918290208054349081019091558251908152429181019190915281517fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae2660929181900390910190a2565b600160a060020a03331660008181526001602090815260408083208054869003905560028252918290208054850190558151848152429181019190915281518493927f02eaa22fbb9062b92c96f349b0e3103065eb20fcdd0de3ea47072c85492cdab0928290030190a250505600a165627a7a72305820aaa9197348dce6a39cb69770357b2219f45a23a529ff1ec8d0b16a720fa947120029'

const bankBytecode = '608060405234801561001057600080fd5b5060008054600160a060020a033316600160a060020a03199091161790556105178061003d6000396000f3006080604052600436106100985763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301ee8c00811461009d57806316cba9d3146100c45780632e1a7d4d146100d957806340c10f19146100f35780636a4b3eca14610117578063a9059cbb1461012c578063d0e30db014610150578063d96a094a14610158578063e4849b3214610170575b600080fd5b3480156100a957600080fd5b506100b2610188565b60408051918252519081900360200190f35b3480156100d057600080fd5b506100b26101a4565b3480156100e557600080fd5b506100f16004356101b2565b005b3480156100ff57600080fd5b506100f1600160a060020a0360043516602435610274565b34801561012357600080fd5b506100b26102ef565b34801561013857600080fd5b506100f1600160a060020a036004351660243561030b565b6100f16103ae565b34801561016457600080fd5b506100f160043561040f565b34801561017c57600080fd5b506100f160043561047d565b600160a060020a03331660009081526002602052604090205490565b600160a060020a0333163190565b600160a060020a033316600090815260016020526040902054670de0b6b3a76400008202908111156101e357600080fd5b604051600160a060020a0333169082156108fc029083906000818181858888f19350505050151561021357600080fd5b600160a060020a033316600081815260016020908152604091829020805485900390558151858152429181019190915281517f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab929181900390910190a25050565b60005433600160a060020a0390811691161461028f57600080fd5b600160a060020a0382166000818152600260209081526040918290208054850190558151848152429181019190915281517f9670c8b300c38cd3db8d3f9429dd902e67f418c4dd193e2497f06d20efc79560929181900390910190a25050565b600160a060020a03331660009081526001602052604090205490565b600160a060020a033316600090815260016020526040902054670de0b6b3a764000082029081111561033c57600080fd5b600160a060020a033381166000818152600160209081526040808320805487900390559387168083529184902080548601905583518681524291810191909152835191937fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd692918290030190a3505050565b600160a060020a0333166000818152600160209081526040918290208054349081019091558251908152429181019190915281517fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae2660929181900390910190a2565b600160a060020a03331660008181526001602090815260408083208054869003905560028252918290208054850190558151848152429181019190915281518493927f02eaa22fbb9062b92c96f349b0e3103065eb20fcdd0de3ea47072c85492cdab0928290030190a25050565b600160a060020a03331660008181526002602090815260408083208054869003905560018252918290208054850190558151848152429181019190915281518493927f0356ae978fd98cb80469729ab3daedddcf918032e5641fb234622d14e78db2c5928290030190a250505600a165627a7a7230582097f7c62f4b44c5c9778711d6fba0617074d35109eae4a101138caacd278a03660029'
    
const bankAbi = [
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
        "name": "SellEvent",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "amounts",
                "type": "uint256"
            }
        ],
        "name": "buy",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
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
        "name": "mint",
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
        "name": "BuyEvent",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "amounts",
                "type": "uint256"
            }
        ],
        "name": "sell",
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