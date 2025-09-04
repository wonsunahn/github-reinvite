// Organization and assignment mappings
export const ORGANIZATIONS = {
  "CS1632-Fall2025": {
    name: "CS1632 (Fall2025)",
    owner: "CS1632-Fall2025", // GitHub organization/owner name
    assignments: {

      "Exercise 0: Java Assessment": "exercise-0-java-assessment",
      "Exercise 1: Test Plans": "exercise-1-test-plans",
      "Deliverable 1: Test Plans": "deliverable-1-test-plans",
    }
  },
  "CS1622-Fall2025": {
    name: "CS1622 (Fall2025)",
    owner: "CS1622-Fall2025", // GitHub organization/owner name
    assignments: {

      "Project 1: Lexical Analyzer": "project-1-lexical-analyzer",
    }
  }
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
