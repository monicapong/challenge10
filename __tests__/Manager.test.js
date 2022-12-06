const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("getName", () => {
    it("should return the manager's name", () => {
      const str = 'John Doe';
      const result = new Manager('John Doe', '12345', 'johndoe@email.com', '123-456-7890').getName();

      expect(result).toBe(str);
    });
  });

  describe("getId", () => {
    it("should return the manager's ID", () => {
      const str = '12345';
      const result = new Manager('John Doe', '12345', 'johndoe@email.com', '123-456-7890').getId();

      expect(result).toBe(str);
    });
  });

  describe("getEmail", () => {
    it("should return the manager's email", () => {
      const str = 'johndoe@email.com';
      const result = new Manager('John Doe', '12345', 'johndoe@email.com', '123-456-7890').getEmail();

      expect(result).toBe(str);
    });
  });

  describe("getOfficeNumber", () => {
    it("should return the manager's office number", () => {
      const str = '123-456-7890';
      const result = new Manager('John Doe', '12345', 'johndoe@email.com', '123-456-7890').getOfficeNumber();

      expect(result).toBe(str);
    });
  });

  describe("getRole", () => {
    it("should return Manager", () => {
      const str = 'Manager'
      const result = new Manager().getRole();

      expect(result).toBe(str);
    });
  });
});
