pragma solidity ^0.4.23;

contract Bank {
	// 此合約的擁有者
    address private owner;

	// 儲存所有會員的餘額
    mapping (address => uint256) private balances;
    mapping (address => uint256) private nccuBalances;
    // 定存金額
    mapping (address => uint256) private certificateDeposit;
    // 定存期數
    mapping (address => uint256) private Year;

	// 事件們，用於通知前端 web3.js
    event DepositEvent(address indexed from, uint256 value, uint256 timestamp);
    event WithdrawEvent(address indexed from, uint256 value, uint256 timestamp);
    event TransferEvent(address indexed from, address indexed to, uint256 value, uint256 timestamp);

    event mintEvent(address indexed toWho, uint256 value, uint256 timestamp);
    event BuyEvent(address indexed from, uint256 value, uint256 timestamp);
    event SellEvent(address indexed from, uint256 value, uint256 timestamp);
    event CDEvent(address indexed from, uint256 value, uint256 year, uint256 timestamp);


	// 建構子
    constructor() public {
        owner = msg.sender;
    }

	// 存錢進去
    function deposit() public payable {
        balances[msg.sender] += msg.value;

        emit DepositEvent(msg.sender, msg.value, now);
    }

	// 提錢出來
    function withdraw(uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balances[msg.sender] >= weiValue);

        require(msg.sender.send(weiValue));

        balances[msg.sender] -= weiValue;

        emit WithdrawEvent(msg.sender, etherValue, now);
    }

	// 轉帳
    function transfer(address to, uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balances[msg.sender] >= weiValue);

        balances[msg.sender] -= weiValue;
        balances[to] += weiValue;

        emit TransferEvent(msg.sender, to, etherValue, now);
    }

    //鑄造
    function mint(address mintAccount,uint256 amounts) public{
        require(msg.sender == owner);
        
        nccuBalances[mintAccount] += amounts;
        emit mintEvent(mintAccount, amounts, now);
    }

    // 買 NCCU Coin
    function buy(uint256 amounts) public {
        uint256 nccuValue = amounts;// 1 : 1
        //require(balances[msg.sender] >= nccuValue);
        balances[msg.sender] -= nccuValue;
        nccuBalances[msg.sender] += nccuValue;

        emit BuyEvent(msg.sender, nccuValue, now);
    }

    // 賣NCCU Coin
    function sell(uint256 amounts) public {
        uint256 nccuValue = amounts;// 1 : 1
        //require(nccuBalances[msg.sender] >= nccuValue);
        nccuBalances[msg.sender] -= nccuValue;
        balances[msg.sender] += nccuValue;

        emit SellEvent(msg.sender, nccuValue, now);
    }

    // 定存
    function certificate(uint256 amounts, uint256 year) public {
        require(nccuBalances[msg.sender] >= amounts);

        nccuBalances[msg.sender] -= amounts;
        certificateDeposit[msg.sender] += amounts;
        Year[msg.sender] = year;
        emit CDEvent(msg.sender, amounts, Year[msg.sender], now);
    }

	// 檢查銀行帳戶餘額
    function checkBankBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

	// 檢查以太帳戶餘額
    function checkEtherBalance() public view returns (uint256) {
        return msg.sender.balance;
    }
    // 檢查nccu coin餘額
    function checkNCCUBalance() public view returns (uint256) {
        return nccuBalances[msg.sender];
    }
    // 檢查定存額度
    function checkCDBalance() public view returns (uint256) {
        return certificateDeposit[msg.sender];
    }
    
    // 檢查定存年份
    function checkYear() public view returns (uint256) {
        return Year[msg.sender];
    }
}