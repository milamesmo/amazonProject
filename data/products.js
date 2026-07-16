import { formatCurrency } from "../scripts/utils/money.js";

export let products = [];

export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `$${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML() {
    return "";
  }
}

export class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    return `
      <a href="${this.sizeChartLink}" target="_blank">
        Size chart
      </a>
    `;
  }
}

export class Appliance extends Product {
  instructionsLink;
  warrantyLink;

  constructor(productDetails) {
    super(productDetails);
    this.instructionsLink = productDetails.instructionsLink;
    this.warrantyLink = productDetails.warrantyLink;
  }

  extraInfoHTML() {
    return `
      <a href="${this.instructionsLink}" target="_blank">
        Instructions
      </a>
      <br>
      <a href="${this.warrantyLink}" target="_blank">
        Warranty
      </a>
    `;
  }
}

function createProduct(productDetails) {
  const productName = productDetails.name.toLowerCase();

  if (
    productName.includes("toaster") ||
    productName.includes("kettle") ||
    productName.includes("blender")
  ) {
    productDetails.type = "appliance";
    productDetails.instructionsLink =
      "https://supersimple.dev/images/appliance-instructions.png";
    productDetails.warrantyLink =
      "https://supersimple.dev/images/appliance-warranty.png";
  }

  if (productDetails.type === "clothing") {
    return new Clothing(productDetails);
  }

  if (productDetails.type === "appliance") {
    return new Appliance(productDetails);
  }

  return new Product(productDetails);
}

export function loadProductsFetch() {
  return fetch("https://supersimplebackend.dev/products")
    .then((response) => {
      return response.json();
    })
    .then((productsData) => {
      products = productsData.map(createProduct);

      console.log("load products");
    });
}

export function loadProducts(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    products = JSON.parse(xhr.response).map(createProduct);

    console.log("load products");

    fun();
  });

  xhr.open("GET", "https://supersimplebackend.dev/products");
  xhr.send();
}