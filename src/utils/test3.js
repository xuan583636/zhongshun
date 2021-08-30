export const dataOption = {
  category: [
    {
      id: "a",
      name: "Matcha Latte",
      label: "Matcha Latte",
      hidden: false,
    },
    {
      id: "b",
      name: "Milk Tea",
      label: "Milk Tea",
      hidden: false,
    },
    {
      id: "c",
      name: "Cheese Cocoa",
      label: "Cheese Cocoa",
      hidden: false,
    },
    {
      id: "d",
      name: "Walnut Brownie",
      label: "Walnut Brownie",
      hidden: false,
    },
  ],
  series: [
    {
      id: 2015,
      name: "Walnut Brownie",
      label: "Walnut Brownie",
      type: "scatter",
      hidden: false,
    },
    {
      id: 2016,
      name: "Walnut Brownie",
      label: "Walnut Brownie",
      type: "scatter",
      hidden: false,
    },
    {
      id: 2017,
      name: "Walnut Brownie",
      label: "Walnut Brownie",
      type: "scatter",
      hidden: false,
    },
    {
      id: 2017,
      name: "Cheese Cocoa",
      label: "Cheese Cocoa",
      type: "scatter",
      hidden: false,
    },
    {
      id: 2017,
      name: "Matcha Latte",
      label: "Matcha Latte",
      type: "scatter",
      hidden: false,
    },
    {
      id: 2017,
      name: "Milk Tea",
      label: "Milk Tea",
      type: "scatter",
      hidden: false,
    },
  ],

  dataset: {
    dimensions: ["product", "2015", "2016", "2017"],
    source: [
      {
        product: "Matcha Latte",
        2015: 43.3,
        2016: 85.8,
        2017: 93.7,
      },
      {
        product: "Milk Tea",
        2015: 83.1,
        2016: 73.4,
        2017: 55.1,
      },
      {
        product: "Cheese Cocoa",
        2015: 86.4,
        2016: 65.2,
        2017: 82.5,
      },
      {
        product: "Walnut Brownie",
        2015: 72.4,
        2016: 53.9,
        2017: 39.1,
      },
    ],
  },
};
