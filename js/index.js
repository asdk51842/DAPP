// please launch geth locally and unlock your accounts first
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
let bank

function log(...inputs) {
	for (let input of inputs) {
		if (typeof input === 'object') {
			input = JSON.stringify(input, null, 2)
		}
		logger.html(input + '\n' + logger.html())
	}
}

let contractAddressH5 = $('#contractAddressH5')
let deployedContractAddressInput = $('#deployedContractAddressInput')
let loadDeployedContractButton = $('#loadDeployedContractButton')
let deployNewContractButton = $('#deployNewContractButton')
let whoami = $('#whoami')
let whoamiButton = $('#whoamiButton')
let deposit = $('#deposit')
let depositButton = $('#depositButton')
let withdraw = $('#withdraw')
let withdrawButton = $('#withdrawButton')
let transferTo = $('#transferTo')
let transferEtherValue = $('#transferEtherValue')
let transferButton = $('#transferButton')
let logger = $('#logger')

//let nccuBalance = $('#nccuBalance')
let mintAccount = $('#mintAccount')
let mintNumber = $('#mintNumber')
let mint = $('#mint')
//buy
let buyAmount = $('#buyAmount')
let buyButton = $('#buyButton')
//sell
let sellAmount = $('#sellAmount')
let sellButton = $('#sellButton')
//定存
let CDAmounts = $('#CDAmounts')
let CDYears = $('#CDYears')
let CDButton = $('#CDButton')
//解約
let period = $('#period')
let periodButton = $('#periodButton')
let doneButton = $('#doneButton')

// 載入使用者至 select tag
web3.eth.getAccounts().then((accounts) => {
	for (let account of accounts) {
		whoami.append(`<option value="${account}">${account}</option>`)
	}
	log(accounts, '以太帳戶')
})

// 當按下載入既有合約位址時
loadDeployedContractButton.on('click', function () {
	loadBank(deployedContractAddressInput.val())
})

// 當按下部署合約時
deployNewContractButton.on('click', function () {
	newBank()
})

// 當按下登入按鍵時
whoamiButton.on('click', async function () {
	// 先取得 etherBalance
	let ethBalance = await web3.eth.getBalance(whoami.val())
    
    // 再取得 nccu balance
    bank.methods.checkNCCUBalance().call({
		from: whoami.val()
	}).then(function (nccuBalance) {
		// 更新活動紀錄
		log({
			address: whoami.val(),
			ethBalance: ethBalance,
			//bankBalance: bankBalance
			nccuBalance: nccuBalance
		})
		log('更新帳戶資料')

		$('#ethBalance').text('以太帳戶餘額 (wei): ' + ethBalance)
		//$('#bankBalance').text('銀行合約餘額 (wei): ' + bankBalance)
		$('#nccuBalance').text('NCCU Coin: ' + nccuBalance)
	})

	// 再取得 bank balance
	// { from: account } 為 tx object
	bank.methods.checkBankBalance().call({
		from: whoami.val()
	}).then(function (bankBalance) {
		// 更新活動紀錄
		log({
			address: whoami.val(),
			ethBalance: ethBalance,
			bankBalance: bankBalance
			//nccuBalance: nccuBalance
		})
		log('更新帳戶資料')

		$('#ethBalance').text('以太帳戶餘額 (wei): ' + ethBalance)
		$('#bankBalance').text('銀行合約餘額 (wei): ' + bankBalance)
		//$('#nccuBalance').text('NCCU Coin: ' + nccuBalance)
	})
})

// 當按下存款按鍵時
depositButton.on('click', function () {
	// 更新介面 
	waitTransactionStatus();
	// 存款
	// 而 deposit 雖然本身沒有 args，但是需要透過描述 tx object 來達成送錢與表明自己的身分 (以哪個帳戶的名義)
	bank.methods.deposit().send({
		from: whoami.val(),
		value: web3.utils.toWei(deposit.val(), 'ether'),
		gas: 4600000
	}).on('receipt', function (receipt) {
		console.log(receipt)
		log(receipt.events.DepositEvent.returnValues, '存款成功')

		// 觸發更新帳戶資料
		whoamiButton.trigger('click')
		
		// 更新介面 
		doneTransactionStatus()
	}).on('error', function (err) {
		log(err.toString())
		// 更新介面 
		doneTransactionStatus()
	})
})

// 當按下提款按鍵時
withdrawButton.on('click', function () {
	// 更新介面
	waitTransactionStatus()
	// 提款
	// withdraw 本身只有一個 args，而 { from: account, gas: ...  } 為 tx object
	bank.methods.withdraw(parseInt(withdraw.val(), 10)).send({
		from: whoami.val(),
		gas: 4600000
	}).on('receipt', function (receipt) {
		console.log(receipt)
		log(receipt.events.WithdrawEvent.returnValues, '提款成功')

		// 觸發更新帳戶資料
		whoamiButton.trigger('click')

		// 更新介面
		doneTransactionStatus()
	}).on('error', function (err) {
		log(err.toString())
		// 更新介面 
		doneTransactionStatus()
	})
})

// 當按下轉帳按鍵時
transferButton.on('click', function () {
	// 更新介面
	waitTransactionStatus()
	// 轉帳
	// transfer 本身有兩個 args，而 { from: from, gas: ... } 為 tx object
	bank.methods.transfer(transferTo.val(), parseInt(transferEtherValue.val(), 10)).send({
		from: whoami.val(),
		gas: 4600000
	}).on('receipt', function (receipt) {
		console.log(receipt)
		log(receipt.events.TransferEvent.returnValues, '轉帳成功')

		// 觸發更新帳戶資料
		whoamiButton.trigger('click')

		// 更新介面
		doneTransactionStatus()
	}).on('error', console.error)
})

//當按下鑄造時
mint.on('click', function () {
	// 更新介面
	waitTransactionStatus()
	// 轉帳
	// transfer 本身有兩個 args，而 { from: from, gas: ... } 為 tx object
	bank.methods.mint(mintAccount.val(), parseInt(mintNumber.val(), 10)).send({
		from: whoami.val(),
		gas: 4600000
	}).on('receipt', function (receipt) {
		console.log(receipt)
		log(receipt.events.mintEvent.returnValues, '鑄造成功')

		// 觸發更新帳戶資料
		whoamiButton.trigger('click')

		// 更新介面
		doneTransactionStatus()
	}).on('error', console.error)
})

// 當按下買幣按鍵時
buyButton.on('click', function () {
    // 更新介面
    waitTransactionStatus()

    // buy 本身只有一個 args，而 { from: account, gas: ...  } 為 tx object
    bank.methods.buy(parseInt(buyAmount.val(), 10)).send({
        from: whoami.val(),
        gas: 4600000
    }).on('receipt', function (receipt) {
        console.log(receipt)
        log(receipt.events.BuyEvent.returnValues, '購買nccu幣成功')

        // 觸發更新帳戶資料
        whoamiButton.trigger('click')

        // 更新介面
        doneTransactionStatus()
    }).on('error', function (err) {
        log(err.toString())
        // 更新介面
        doneTransactionStatus()
    })
})
// 當按下賣幣按鍵時
sellButton.on('click', function () {
    // 更新介面
    waitTransactionStatus()

    // sell 本身只有一個 args，而 { from: account, gas: ...  } 為 tx object
    bank.methods.sell(parseInt(sellAmount.val(), 10)).send({
        from: whoami.val(),
        gas: 4600000
    }).on('receipt', function (receipt) {
        console.log(receipt)
        log(receipt.events.SellEvent.returnValues, '賣出成功')

        // 觸發更新帳戶資料
        whoamiButton.trigger('click')

        // 更新介面
        doneTransactionStatus()
    }).on('error', function (err) {
        log(err.toString())
        // 更新介面
        doneTransactionStatus()
    })
})

// 當按下定存時
CDButton.on('click', function () {
    // 更新介面
    waitTransactionStatus()
    
    bank.methods.certificate(parseInt(CDAmounts.val(), 10), parseInt(CDYears.val(), 10)).send({
        from: whoami.val(),
        gas: 4600000
    }).on('receipt', function (receipt) {
        console.log(receipt)
        log(receipt.events.CDEvent.returnValues, '完成定存')

        // 觸發更新帳戶資料
        whoamiButton.trigger('click')

        // 更新介面
        doneTransactionStatus()
    }).on('error', console.error)
})

// 當按下提前解約時
periodButton.on('click', function () {
    // 更新介面
    waitTransactionStatus()
    bank.methods.done(parseInt(period.val(), 10)).send({
        from: whoami.val(),
        gas: 4600000
    }).on('receipt', function (receipt) {
        console.log(receipt)
        log(receipt.events.doneCDEvent.returnValues, '成功提前解除合約')

        // 觸發更新帳戶資料
        whoamiButton.trigger('click')

        // 更新介面
        doneTransactionStatus()
    }).on('error', console.error)
})

// 當按下期滿解除定存時
doneButton.on('click', function () {
    // 更新介面
    waitTransactionStatus()
    bank.methods.done(10).send({
        from: whoami.val(),
        gas: 4600000
    }).on('receipt', function (receipt) {
        console.log(receipt)
        log(receipt.events.doneCDEvent.returnValues, '期滿返還成功')

        // 觸發更新帳戶資料
        whoamiButton.trigger('click')

        // 更新介面
        doneTransactionStatus()
    }).on('error', console.error)
})

function loadBank(address) {
	if (!(address === undefined || address === null || address === '')) {
		bank = new web3.eth.Contract(bankAbi, address)
		contractAddressH5.text('合約位址:' + address)
		console.log(bank)
		log(bank, '載入合約')
	}
}

async function newBank() {
	let bankContract = new web3.eth.Contract(bankAbi)
	// 更新介面
	waitTransactionStatus()

	bankContract.deploy({
		data: bankBytecode,
	}).send({
		from: await web3.eth.getCoinbase(),
		gas: 4700000
	}).on('error', (error) => {
		console.log(error)
	}).then(function (newContractInstance) {
		console.log('New Bank is at', newContractInstance.options.address)
		log(newContractInstance, '部署合約')
		bank = newContractInstance

		// 更新合約介面
		contractAddressH5.text('合約位址:' + newContractInstance.options.address)
		deployedContractAddressInput.val(newContractInstance.options.address)

		// 更新介面
		doneTransactionStatus()
	})
}

function waitTransactionStatus() {
	$('#accountStatus').html('帳戶狀態 <b style="color: blue">(等待交易驗證中...)</b>')
}

function doneTransactionStatus() {
	$('#accountStatus').text('帳戶狀態')
}