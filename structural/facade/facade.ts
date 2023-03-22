class PaymentFacade {
  private account: Account;
  private wallet: Wallet;
  private security: Security;

  constructor() {
    this.account = new Account(1000);
    this.wallet = new Wallet(500);
    this.security = new Security();
  }

  public makePayment(amount: number): void {
    try {
      this.account.checkBalance(amount);
      this.wallet.debit(amount);
      this.security.verify();
      console.log(`Payment of $${amount.toFixed(2)} has been made`);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }
}

class Account {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  public checkBalance(amount: number): void {
    if (this.balance < amount) {
      throw new Error('not enough balance');
    }
  }
}

class Wallet {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  public debit(amount: number): void {
    if (this.balance < amount) {
      throw new Error('not enough balance');
    }
    this.balance -= amount;
  }
}

class Security {
  public verify(): void {
    console.log('Security verification complete');
  }
}

const payment = new PaymentFacade();
payment.makePayment(750.0);
