describe("Entry", () => {
  describe("constructor", () => {
    it("should take 3 arguments (date, amount, description)", () => {
      expect(Entry.length).toEqual(3);
    });

    it("should take 'date' as 1st argument and set it to the 'date' property", () => {
      const entry = new Entry("2024-06-17", 100, "food");
      expect(entry.date).toEqual("2024-06-17");
    });

    it("should take 'amount' as 2nd argument and set it to the 'amount' property", () => {
      const entry = new Entry("2024-06-17", 100, "food");
      expect(entry.amount).toEqual(100);
    });

    it("should take 'description' as 3rd argument and set it to the 'description' property", () => {
      const entry = new Entry("2024-06-17", 100, "food");
      expect(entry.description).toEqual("food");
    });

  });

  describe("getFormattedAmount", () => {
    it("should be defined", () => {
      const entry = new Entry("2024-06-17", 100, "food");
      expect(entry.getFormattedAmount).toBeDefined();
    });

    it("should take no arguments", () => {
      const entry = new Entry("2024-06-17", 100, "food");
      expect(entry.getFormattedAmount.length).toEqual(0);
    });

    it("should return a string with the amount and the € symbol like: \"100 €\"", () => {
      const entry = new Entry("2024-06-17", 100, "food");
      expect(entry.getFormattedAmount()).toEqual("100 €");
    });
  });
});

describe("Income", () => {
  describe("class", () => {
    it("should extend Entry class", () => {
      expect(Income).toBeDefined();
      expect(Income.prototype instanceof Entry).toEqual(true);
    });
  });

  describe("constructor", () => {
    it("should take 3 arguments (date, amount, description)", () => {
      expect(Income.length).toEqual(3);
    });

    it("should take 'date' as 1st argument and pass it to the parent class", () => {
      const entry = new Income("2024-06-17", 100, "food");
      expect(entry.date).toEqual("2024-06-17");
    });

    it("should take 'amount' as 2nd argument and set it to the 'amount' property", () => {
      const entry = new Income("2024-06-17", 100, "food");
      expect(entry.amount).toEqual(100);
    });

    it("should take 'description' as 3rd argument and set it to the 'description' property", () => {
      const entry = new Income("2024-06-17", 100, "food");
      expect(entry.description).toEqual("food");
    });

    it("should create a 'type' property with the initial value \"income\"", () => {
      const entry = new Income("2024-06-17", 100, "food");
      expect(entry.type).toEqual("income");
    });
  });
});

describe("Expense", () => {
  describe("class", () => {
    it("should extend Entry class", () => {
      expect(Expense).toBeDefined();
      expect(Expense.prototype instanceof Entry).toEqual(true);
    });
  });

  describe("constructor", () => {
    it("should take 4 arguments (date, amount, description, paid)", () => {
      expect(Expense.length).toEqual(4);
    });

    it("should take 'date' as 1st argument and pass it to the parent class", () => {
      const expense = new Expense("2024-06-17", 100, "food", true);
      expect(expense.date).toEqual("2024-06-17");
    });

    it("should take 'amount' as 2nd argument and set it to the 'amount' property", () => {
      const expense = new Expense("2024-06-17", 100, "food", true);
      expect(expense.amount).toEqual(100);
    });

    it("should take 'description' as 3rd argument and set it to the 'description' property", () => {
      const expense = new Expense("2024-06-17", 100, "food", true);
      expect(expense.description).toEqual("food");
    });

    it("should take 'paid' (boolean) as 4th argument and set it to the 'paid' property", () => {
      const expense1 = new Expense("2024-06-17", 100, "food", true);
      const expense2 = new Expense("2024-06-17", 100, "food", false);
      expect(expense1.paid).toEqual(true);
      expect(expense2.paid).toEqual(false);
    });

    it("should create a 'type' property with the initial value \"expense\"", () => {
      const expense = new Expense("2024-06-17", 100, "food", true);
      expect(expense.type).toEqual("expense");
    });
  });

  describe("getFormattedAmount", () => {
    it("should be defined", () => {
      const expense = new Expense("2024-06-17", 100, "food", true);
      expect(expense.getFormattedAmount).toBeDefined();
    });

    it("should take no arguments", () => {
      const expense = new Expense("2024-06-17", 100, "food", true);
      expect(expense.getFormattedAmount.length).toEqual(0);
    });

    it("should return a string with the minus sign, the amount and the € symbol like: \"-99 €\"", () => {
      const expense1 = new Expense("2024-06-17", 99, "food", true);
      const expense2 = new Expense("2024-06-17", 5, "food", false);
      expect(expense1.getFormattedAmount()).toEqual("-99 €");
      expect(expense2.getFormattedAmount()).toEqual("-5 €");
    });
  });
});

describe("Budget", () => {
  describe("constructor", () => {
    it("should take no arguments", () => {
      expect(Budget).toBeDefined();
      expect(Budget.length).toEqual(0);
    });

    it("should create an 'entries' property with an empty array as its initial value", () => {
      const budget = new Budget();
      expect(budget.entries).toEqual([]);
    });
  });

  describe("addEntry", () => {
    it("should be defined", () => {
      const budget = new Budget();
      expect(budget.addEntry).toBeDefined();
    });
    it("should take 1 argument (entry)", () => {
      const budget = new Budget();
      expect(budget.addEntry.length).toEqual(1);
    });

    it("should add the entry argument to the 'entries' array", () => {
      const budget = new Budget();
      const income = new Income("2024-06-17", 100, "food");
      const expense = new Expense("2024-06-17", 100, "food", true);
      budget.addEntry(income);
      budget.addEntry(expense);
      expect(budget.entries).toEqual([income, expense]);
    });
  });

  describe("getTotalIncome", () => {
    it("should be defined", () => {
      const budget = new Budget();
      expect(budget.getTotalIncome).toBeDefined();
    });
    it("should take no arguments", () => {
      const budget = new Budget();
      expect(budget.getTotalIncome.length).toEqual(0);
    });

    it("should return 0 if there are no entries", () => {
      const budget = new Budget();
      expect(budget.getTotalIncome()).toEqual(0);
    });

    it('should return the total income of all "income" entries', () => {
      const budget = new Budget();
      const income1 = new Income("2024-06-17", 100, "food");
      const income2 = new Income("2024-06-17", 200, "food");
      const expense = new Expense("2024-06-17", 100, "food", true);

      budget.addEntry(income1);
      budget.addEntry(income2);
      budget.addEntry(expense);

      expect(budget.getTotalIncome()).toEqual(300);
    });

    it("should use the 'forEach()' method to iterate over the entries array", () => {
      const budget = new Budget();
      spyOn(budget.entries, "forEach").and.callThrough();
      budget.getTotalIncome();
      expect(budget.entries.forEach).toHaveBeenCalled();
      expect(budget.entries.forEach).toHaveBeenCalledWith(
        jasmine.any(Function)
      );
    });
  });

  describe("getTotalExpense", () => {
    it("should be defined", () => {
      const budget = new Budget();
      expect(budget.getTotalExpense).toBeDefined();
    });
    it("should take no arguments", () => {
      const budget = new Budget();
      expect(budget.getTotalExpense.length).toEqual(0);
    });

    it("should return 0 if there are no entries", () => {
      const budget = new Budget();
      expect(budget.getTotalExpense()).toEqual(0);
    });

    it('should return the total expense of all "expense" entries', () => {
      const budget = new Budget();
      const expense1 = new Expense("2024-06-17", 100, "food", true);
      const expense2 = new Expense("2024-06-17", 200, "food", false);
      const income = new Income("2024-06-17", 100, "food");
      budget.addEntry(expense1);
      budget.addEntry(expense2);
      budget.addEntry(income);
      expect(budget.getTotalExpense()).toEqual(300);
    });

    it("should use the 'forEach()' method to iterate over the entries array", () => {
      const budget = new Budget();
      spyOn(budget.entries, "forEach").and.callThrough();
      budget.getTotalExpense();
      expect(budget.entries.forEach).toHaveBeenCalled();
      expect(budget.entries.forEach).toHaveBeenCalledWith(
        jasmine.any(Function)
      );
    });
  });

  describe("getCurrentBalance", () => {
    it("should be defined", () => {
      const budget = new Budget();
      expect(budget.getCurrentBalance).toBeDefined();
    });

    it("should take no arguments", () => {
      const budget = new Budget();
      expect(budget.getCurrentBalance.length).toEqual(0);
    });

    it("should return 0 if there are no entries", () => {
      const budget = new Budget();
      expect(budget.getCurrentBalance()).toEqual(0);
    });

    it("should return the difference between the total income and the total expense of all entries", () => {
      const budget1 = new Budget();
      const budget2 = new Budget();
      const income1 = new Income("2024-06-17", 200, "food");
      const income2 = new Income("2024-06-17", 200, "food");
      const expense1 = new Expense("2024-06-17", 100, "food", true);
      const expense2 = new Expense("2024-06-17", 500, "food", false);

      budget1.addEntry(income1);
      budget1.addEntry(income2);
      budget1.addEntry(expense1);
      budget1.addEntry(expense2);
      expect(budget1.getCurrentBalance()).toEqual(-200);

      budget2.addEntry(income1);
      budget2.addEntry(income2);
      budget2.addEntry(expense1);
      expect(budget2.getCurrentBalance()).toEqual(300);
    });
  });
});
