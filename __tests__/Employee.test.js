const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should return the employee's name", () => {
      const str = 'John Doe';
      const result = new Employee('John Doe', '12345', 'johndoe@email.com').getName();

      expect(result).toBe(str);
    });
  });

  describe("getId", () => {
    it("should return the employee's ID", () => {
      const str = '12345';
      const result = new Employee('John Doe', '12345', 'johndoe@email.com').getId();

      expect(result).toBe(str);
    });
  });

  describe("getEmail", () => {
    it("should return the employee's email", () => {
      const str = 'johndoe@email.com';
      const result = new Employee('John Doe', '12345', 'johndoe@email.com').getEmail();

      expect(result).toBe(str);
    });
  });

  describe("getRole", () => {
    it("should return Employee", () => {
      const str = 'Employee'
      const result = new Employee().getRole();

      expect(result).toBe(str);
    });
  });
});
