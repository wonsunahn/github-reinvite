// Organization and assignment mappings
export const ORGANIZATIONS = {
  "CS1632-Spring2026": {
    name: "CS1632 (Spring2026)",
    owner: "CS1632-Spring2026", // GitHub organization/owner name
    assignments: {
      "Exercise 0: Java Assessment": "exercise-0-java-assessment",
      "Exercise 1: Test Plans": "exercise-1-test-plans",
      "Deliverable 1: Test Plans": "deliverable-1-test-plans",
      "Exercise 2: Unit Testing": "exercise-2-unit-testing",
      "Deliverable 2: Unit Testing": "deliverable-2-unit-testing",
      "Exercise 3: Playwright Testing": "exercise-3-playwright-testing",
      "Deliverable 3: Playwright Testing": "deliverable-3-playwright-testing",
      "Exercise 4: Performance Testing": "exercise-4-performance-testing", 
      "Deliverable 4: Performance Testing": "deliverable-4-performance-testing",
      "Exercise 5: Static Testing": "exercise-5-static-testing",
      "Exercise 5: Extra Credit":, "exercise-5-extra-credit",
      "Deliverable 5: Static and Dynamic Testing": "deliverable-5-static-and-dynamic-testing",
      "Supplementary Exercise 1: Cucumber Testing": "supplementary-exercise-1-cucumber-testing",
      "Supplementary Exercise 2: Stochastic Testing": "supplementary-exercise-2-stochastic-testing",
      "Supplementary Exercise 3: Sanitizers": "supplementary-exercise-3-sanitizers",
      "Supplementary Exercise 4: CI/CD Pipelines": "supplementary-exercise-4-ci-cd-pipelines"
    }
  },
  "CS2410-Spring2026": {
    name: "CS2410 (Spring2026)",
    owner: "CS2410-Spring2026", // GitHub organization/owner name
    assignments: {
      "CPU Simulator": "cpu-simulator"
    }
  }
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
