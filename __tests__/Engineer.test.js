const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("getName", () => {
    it("should return the engineer's name", () => {
      const str = 'John Doe';
      const result = new Engineer('John Doe', '12345', 'johndoe@email.com', 'johndoe').getName();

      expect(result).toBe(str);
    });
  });

  describe("getId", () => {
    it("should return the engineer's ID", () => {
      const str = '12345';
      const result = new Engineer('John Doe', '12345', 'johndoe@email.com', 'johndoe').getId();

      expect(result).toBe(str);
    });
  });

  describe("getEmail", () => {
    it("should return the engineer's email", () => {
      const str = 'johndoe@email.com';
      const result = new Engineer('John Doe', '12345', 'johndoe@email.com', 'johndoe').getEmail();

      expect(result).toBe(str);
    });
  });

  describe("getGithub", () => {
    it("should return the engineer's GitHub username", () => {
      const str = 'johndoe';
      const result = new Engineer('John Doe', '12345', 'johndoe@email.com', 'johndoe').getGitHub();

      expect(result).toBe(str);
    });
  });

  describe("getRole", () => {
    it("should return Engineer", () => {
      const str = 'Engineer'
      const result = new Engineer().getRole();

      expect(result).toBe(str);
    });
  });
});
