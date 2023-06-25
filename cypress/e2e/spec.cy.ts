describe("Navigation", () => {
  it("should navigate to the detail page", () => {
    cy.visit("http://localhost:3000")

    cy.get("header:first").click()

    cy.url().should("include", "/")
  })
})
