import { Account } from "../models/account";

// Make into banking service

export class Bank
{
    // initialize the attribute(s)
    private accounts: Account[];

    // initialize the constructor
    constructor()
    {
        this.accounts = new Array<Account>(); // create new list when constructor is created
    }

    /**
     * CheckBankingBalanceAdequateById
     */
    public CheckBankingBalanceAdequateById(referalId: number, reqMinBalance: number) : boolean  {
        this.accounts.forEach(element => {
            if (element.user.referalId == referalId)
            {
                if (element.balance > reqMinBalance) {
                    return true;
                }
                return false;
            }            
        });
        return false;
    }

    /**
     * AddUser
     */
    public AddUser(referalId: number, firstName: string, surName: string = "", lastName: string, age: number, userName: string, startingBalance: number) {

        // Quick add items to array list via => this.accounts.push( -> {[Account Object]} <- )
        // Then add items via normal object creation 
        // name of the first variable = user: { -> [Items of the variable] <- }
        // name of the second variable = balance { -> [Items of the variable] <- }

        this.accounts.push({user: {referalId, firstName, surName, lastName, age, userName}, balance: startingBalance});
    }

    /**
     * TransferFundsTo
     */
    public TransferFundsFromTo(acc_1: Account, acc_2: Account) {
        var transferFrom = this.accounts.find(i => i = acc_1);
    }
}