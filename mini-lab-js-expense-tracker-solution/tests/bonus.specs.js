describe("BONUS: Iteration 5", () => {
  describe("Budget - getTotal()", () => {
    it("should be defined", () => {
      const budget = new Budget();
      expect(budget.getTotal).toBeDefined();
    });

    it("should take 1 argument (entryType)", () => {
      const budget = new Budget();
      expect(budget.getTotal.length).toEqual(1);
    });

    it("should return the total amount (number) of all entries with the given type", () => {
      const budget = new Budget();
      const income1 = new Income("2024-06-17", 100, "food");
      const income2 = new Income("2024-06-17", 200, "food");
      const expense = new Expense("2024-06-17", 400, "food", true);

      budget.addEntry(income1);
      budget.addEntry(income2);
      budget.addEntry(expense);

      expect(budget.getTotal("income")).toEqual(300);
      expect(budget.getTotal("expense")).toEqual(400);
    });

    it("should use the 'forEach()' method to iterate over the entries array", () => {
      // Create an instance of Budget
      const budget = new Budget();
      // Spy on the forEach method of the entries array. This will allow us to check if the method has been called and with which arguments.
      const forEachSpy = spyOn(budget.entries, "forEach");

      // Call the getTotal method
      budget.getTotal("income");

      // Check if the forEach method has been called and with which arguments
      expect(forEachSpy).toHaveBeenCalled();
      expect(forEachSpy).toHaveBeenCalledWith(jasmine.any(Function));
    });
  });
});

describe("BONUS: Iteration 6", () => {
  describe("Budget - getFormattedEntries()", () => {
    it("should be defined", () => {
      const budget = new Budget();
      expect(budget.getFormattedEntries).toBeDefined();
    });

    it("should take no arguments", () => {
      const budget = new Budget();
      expect(budget.getFormattedEntries.length).toEqual(0);
    });

    it("should return an array of strings with the formatted entries", () => {
      // Create an instance of Budget
      const budget = new Budget();

      // Create few income and expense entries for the budget
      const income1 = new Income("2024-06-17", 10, "other");
      const income2 = new Income("2024-06-17", 3456, "salary");
      const expense1 = new Expense("2024-06-17", 100, "food", true);
      const expense2 = new Expense("2024-06-17", 99, "food", true);

      // Add the entries to the budget
      budget.addEntry(income1);
      budget.addEntry(income2);
      budget.addEntry(expense1);
      budget.addEntry(expense2);

      // Call the getFormattedEntries method
      const formattedEntries = budget.getFormattedEntries();

      // Check if the method returns an array of properly formatted strings
      expect(formattedEntries).toEqual([
        "2024-06-17 | other | 10 €",
        "2024-06-17 | salary | 3456 €",
        "2024-06-17 | food | -100 €",
        "2024-06-17 | food | -99 €",
      ]);
    });
  });
});