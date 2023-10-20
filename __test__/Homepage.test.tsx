import Slider from "@/app/components/homepage/Slider";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Slider", () => {
  const banners = [
    {
      image: "/images/image_1.png",
      title: "Banner 1",
      subtitle: "Subtitle 1",
      button: "Button 1",
      url: "/category",
    },
    {
      image: "/images/image_1.png",
      title: "Banner 2",
      subtitle: "Subtitle 2",
      button: "Button 2",
      url: "/",
    },
  ];

  it("renders the component with the correct number of banners", () => {
    render(<Slider banners={banners} />);
    const bannerImages = screen.getAllByRole("img");
    expect(bannerImages.length).toBe(banners.length);
  });

  it("changes the slide when a navigation button is clicked", () => {
    render(<Slider banners={banners} />);
    const slideIndicator = screen.getByText("Button 1");
    const nextButton = screen.getByTestId("slider-0");
    const prevButton = screen.getByTestId("slider-1");

    expect(slideIndicator).toBeInTheDocument();
    expect(slideIndicator).toHaveTextContent("Button 1");

    fireEvent.click(nextButton);
    expect(slideIndicator).toHaveTextContent("Button 1");

    fireEvent.click(prevButton);
    expect(slideIndicator).toHaveTextContent("Button 1");
  });
});