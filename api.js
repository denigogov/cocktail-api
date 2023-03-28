const drinks = [
  {
    name: "Margarita",
    id: "22",
    category: "Coctail",
    alcoholic: "Alcoholic",
    image:
      "https://i.pinimg.com/564x/19/e1/da/19e1dacac79497c3dd76f7687d5de4e0.jpg",
    description:
      "A margarita is a cocktail consisting of Tequila, triple sec, and lime juice. Some margarita recipes include simple syrup as well and are often served with salt on the rim of the glass. Margaritas can either be served shaken with ice, without ice, or blended with ice.",
    instructions:
      "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",

    ingredients1: "Tequila",
    ingredients2: "Lime juice",
    ingredients3: "Fresh Limes",
    ingredients4: "Margarita Salt",
    ingredients5: "Triple Sec",
    ingredients6: "Fresh Fruit",
    ingredients6: "Fresh Fruit",
    ingredients7: "Ice",
    season: "summer",
  },

  {
    name: "Mojito",
    id: "2233",
    category: "Coctail",
    alcoholic: "Alcoholic",
    image:
      "https://i.pinimg.com/564x/68/02/ae/6802ae4809eaf7c8c9dc19e919478bca.jpg",
    description:
      "Mojito is a traditional Cuban punch. The cocktail often consists of five ingredients: white rum, sugar, lime juice, soda water, and mint. Its combination of sweetness, citrus, and herbaceous mint flavors is intended to complement the rum, and has made the mojito a popular summer drink",
    instructions:
      "Mint sprigs muddled with sugar and lime juice. Rum added and topped with soda water. Garnished with sprig of mint leaves. Served with a straw.",

    ingredients1: "White rum",
    ingredients2: "Fresh lime juice",
    ingredients3: "2 teaspoons Sugar",
    ingredients4: "6 leaves of Min",
    ingredients5: "Soda Water",
    ingredients6: "Ice",
    season: "summer",
  },

  {
    name: "Espresso martini",
    id: "2233111",
    category: "Coctail",
    alcoholic: "Alcoholic",
    image:
      "https://i.pinimg.com/564x/66/65/18/66651833afc98623b8dbfdaf5dd9ac8e.jpg",
    description:
      "The espresso martini, also known as a vodka espresso, is a cold caffeinated alcoholic drink made with espresso, coffee liqueur, and vodka. It is not a true martini as it contains neither gin nor vermouth, but is one of many drinks that incorporate the term martini into their names.",
    instructions:
      "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass",

    ingredients1: " Absolut Vodka",
    ingredients2: "Kahlúa",
    ingredients3: "Espresso",
    ingredients4: "3 Whole Coffee Beans",
    ingredients5: "Ice",
    season: "winter",
  },
];

const drink = {
  status: "success",
  result: drinks.length,
  drinks: drinks,
};

module.exports = drink;
