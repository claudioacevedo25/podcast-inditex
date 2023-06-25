import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { HomeComponent } from "../Home/home.component"

describe("<HomeComponent/>", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should filter podcasts when searching", async () => {
    render(
      <HomeComponent
        handleSearch={() => {}}
        podcasts={{ feed: { entry: [] } } as any}
        key={2}
      />
    )

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "podcast1" },
    })

    await waitFor(() => {
      expect(screen.getAllByText("There are not results")).toBeDefined()
    })
  })
})
