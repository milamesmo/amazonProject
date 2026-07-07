import { Product, Clothing, Appliance } from "../../data/products.js";

describe("test suite: Product", () => {
  it("creates a product with the provided details", () => {

    const product1 = new Product({
      id: "test-product-1",
      image: "images/products/camisa.jpg",
      name: "Camisa",
      rating: {
        stars: 4.5,
        count: 10,
      },
      priceCents: 2590,
    });

    expect(product1.id).toEqual("test-product-1");
    expect(product1.image).toEqual("images/products/camisa.jpg");
    expect(product1.name).toEqual("Camisa");
    expect(product1.rating).toEqual({
      stars: 4.5,
      count: 10,
    });
    expect(product1.priceCents).toEqual(2590);

    expect(product1.getStarsUrl()).toBe(`images/ratings/rating-45.png`);
    expect(product1.getPrice()).toBe(`$25.90`);
    expect(product1.extraInfoHTML()).toEqual("");
  });
});

describe("test suite: Clothing", () => {
 it("creates a clothing product with size chart information", () =>{

  const product2 = new Clothing({
      id: "test-clothing-1",
  image: "images/products/tshirt.jpg",
  name: "T-Shirt",
  rating: {
    stars: 4.5,
    count: 87,
  },
  priceCents: 1090,
  sizeChartLink: "images/clothing-size-chart.png",
});

expect(product2.extraInfoHTML()).toContain(`images/clothing-size-chart.png`);
 })
});

describe("test suite: Appliance", () => {
  it("creates an appliance product with instructions and warranty information", () =>{
    const product3 = new Appliance({
  id: "test-appliance-1",
  image: "images/products/toaster.jpg",
  name: "Toaster",
  rating: {
    stars: 4,
    count: 120,
  },
  priceCents: 2499,
  instructionsLink: "images/appliance-instructions.png",
  warrantyLink: "images/appliance-warranty.png",
});

expect(product3.extraInfoHTML()).toContain(`images/appliance-instructions.png`);
expect(product3.extraInfoHTML()).toContain(`images/appliance-warranty.png`);
  });
});
