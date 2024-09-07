class ErrorRepository {
    constructor() {
        this.errorMap = {
            100: "Invalid input",
            101: "Access denied",
            102: "Network error"
        };
    }

    translate(code) {
        return this.errorMap[code] || "Unknown error";
    }
}

module.exports = ErrorRepository;