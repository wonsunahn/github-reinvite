// Organization and assignment mappings
export const ORGANIZATIONS = {
  "CS1632-Spring2026": {
    name: "CS1632 (Spring2026)",
    owner: "CS1632-Spring2026", // GitHub organization/owner name
    assignments: {
      "Exercise 0: Java Assessment": "exercise-0-java-assessment",
      "Exercise 1: Test Plans": "exercise-1-test-plans",
      "Deliverable 1: Test Plans": "deliverable-1-test-plans",
    }
  }
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
