const { expect } = require('chai');

describe('ErrorRepository', function() {
    let repo;

    beforeEach(function() {
        repo = new ErrorRepository();
    });

    it('should translate known error codes', function() {
        expect(repo.translate(100)).to.equal("Invalid input");
        expect(repo.translate(101)).to.equal("Access denied");
        expect(repo.translate(102)).to.equal("Network error");
    });

    it('should return "Unknown error" for unknown error codes', function() {
        expect(repo.translate(999)).to.equal("Unknown error");
        expect(repo.translate(0)).to.equal("Unknown error");
    });

    it('should return "Unknown error" for non-integer codes', function() {
        expect(repo.translate("abc")).to.equal("Unknown error");
        expect(repo.translate(null)).to.equal("Unknown error");
    });
});