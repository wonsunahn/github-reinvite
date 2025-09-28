// Organization and assignment mappings
export const ORGANIZATIONS = {
  "CS1632-Fall2025": {
    name: "CS1632 (Fall2025)",
    owner: "CS1632-Fall2025", // GitHub organization/owner name
    assignments: {
      "Exercise 0: Java Assessment": "exercise-0-java-assessment",
      "Exercise 1: Test Plans": "exercise-1-test-plans",
      "Exercise 2: Unit Testing": "exercise-2-unit-testing",
      "Exercise 3: Selenium Testing": "exercise-3-selenium-testing",
      "Deliverable 1: Test Plans": "deliverable-1-test-plans",
      "Deliverable 2: Unit Testing": "deliverable-2-unit-testing",
      "Deliverable 3: Selenium Testing": "deliverable-3-selenium-testing",
    }
  },
  "CS1622-Fall2025": {
    name: "CS1622 (Fall2025)",
    owner: "CS1622-Fall2025", // GitHub organization/owner name
    assignments: {
      "Project 1: Lexical Analyzer": "project-1-lexical-analyzer",
      "Project 2: Syntax Analyzer": "project-2-syntax-analyzer",
    }
  }
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
