class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount() {
    return `${this.amount} €`;
  }  
}

class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}

class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid; // true or false
    this.type = "expense";
  }

  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

class Budget {
  constructor() {
    this.entries = [];
  }

  addEntry(entry) {
    this.entries.push(entry);
  }

  getTotalIncome() {
    let total = 0;

    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        total += entry.amount;
      }
    });
    return total;
  }

  getTotalExpense() {
    let total = 0;
    this.entries.forEach((entry) => {
      if (entry.type === "expense") {
        total += entry.amount;
      }
    });
    return total;
  }

  getCurrentBalance() {
    return this.getTotalIncome() - this.getTotalExpense();
  }

  // Bonus: Iteration 5 | Get total by type
  getTotal(entryType) {
    let total = 0;
    this.entries.forEach((entry) => {
      if (entry.type === entryType) {
        total += entry.amount;
      }
    });

    return total;

    // // OR using filter() and reduce()
    // return this.entries
    //   .filter((entry) => entry.type === entryType)
    //   .reduce((total, entry) => total + entry.amount, 0);
  }

  // Bonus: Iteration 6 | Get Formatted Entries
  getFormattedEntries() {
    const formattedEntries = [];

    this.entries.forEach((entry) => {
      formattedEntries.push(
        `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
      );
    }
    );
    return formattedEntries;


    // // OR using map()
    // return this.entries.map((entry) => {
    //   return `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
    // });
  }
}