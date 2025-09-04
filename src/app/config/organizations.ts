// Organization and assignment mappings
export const ORGANIZATIONS = {
  "CS1632-Fall2025": {
    name: "CS1632-Fall2025",
    owner: "wonsunahn", // GitHub organization/owner name
    assignments: {

      "Exercise 0: Java Assessment": "cs1632-fall2025-exercise-0-java-assessment-",
      "Exercise 1: Test Plans": "cs1632-fall2025-exercise-1-test-plans-",
    }
  },
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
