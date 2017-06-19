class Transaction{
	constructor(amount,type){
		this.amount = amount;
		this.type = type
	}
}

class Account{
	constructor(){
		this.balance = 1000
		this.transactions = []
		this.withdrawCount = 0
	}
	deposit(amount){
		this.balance += amount
		this.transactions.push(new Transaction(amount,"Deposit"))
	}
	withdraw(amount){
		this.withdrawCount++
		this.balance -= amount
		this.transactions.push(new Transaction(amount,"Withdraw"))
		if(this.withdrawCount > 3){
			this.balance -= 2;
			this.transactions.push(new Transaction(2,"Withdraw fee"))
		}
	}
	printStatement(){
		console.log("***STATEMENT***");
		for(var i=0;i<this.transactions.length;i++){
			let txn = this.transactions[i]
			console.log(`${txn.type}: ${txn.amount}`);
		}
	}
	printBalance(){
		console.log(`Balance: ${this.balance}`);
	}
}
let acc1 = new Account();
acc1.deposit(200);
acc1.withdraw(100);
acc1.withdraw(100);
acc1.withdraw(100);
acc1.withdraw(100);
acc1.withdraw(100);
acc1.withdraw(100);
acc1.printBalance()
acc1.printStatement()