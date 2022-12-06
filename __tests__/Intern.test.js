const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("getName", () => {
    it("should return the intern's name", () => {
      const str = 'John Doe';
      const result = new Intern('John Doe', '12345', 'johndoe@email.com', 'University').getName();

      expect(result).toBe(str);
    });
  });

  describe("getId", () => {
    it("should return the intern's ID", () => {
      const str = '12345';
      const result = new Intern('John Doe', '12345', 'johndoe@email.com', 'University').getId();

      expect(result).toBe(str);
    });
  });

  describe("getEmail", () => {
    it("should return the intern's email", () => {
      const str = 'johndoe@email.com';
      const result = new Intern('John Doe', '12345', 'johndoe@email.com', 'University').getEmail();

      expect(result).toBe(str);
    });
  });

  describe("getSchool", () => {
    it("should return the intern's school", () => {
      const str = 'University';
      const result = new Intern('John Doe', '12345', 'johndoe@email.com', 'University').getSchool();

      expect(result).toBe(str);
    });
  });

  describe("getRole", () => {
    it("should return Intern", () => {
      const str = 'Intern'
      const result = new Intern().getRole();

      expect(result).toBe(str);
    });
  });
});
