const drinks = [
  {
    name: "Margarita",
    id: "1",
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
    id: "2",
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
    season: "autumn",
  },

  {
    name: "Espresso martini",
    id: "3",
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

  {
    name: "Hot Toddy",
    id: "4",
    category: "Coctail",
    alcoholic: "Alcoholic",
    image:
      "https://cdn.vectorstock.com/i/1000x1000/02/37/wassail-hot-apple-cider-traditional-winter-vector-39380237.webp",
    description:
      "A hot toddy, also known as hot whiskey in Ireland, is typically a mixed drink made of liquor and water with honey, lemon, herbs and spices, and served hot. Recipes vary, and hot toddy is traditionally drunk before retiring for the night, in wet or cold weather or to relieve the symptoms of the cold and flu. In How to Drink, Victoria Moore describes the drink as 'the vitamin C for health, the honey to soothe, the alcohol to numb.' ",
    instructions:
      "A hot toddy is a mixture of a spirit (usually whisky), hot water, and honey (or, in some recipes, sugar). In Canada, maple syrup may be used. Additional ingredients such as cloves, a lemon slice or cinnamon (in stick or ground form) are often also added.",

    ingredients1: "whiskey",
    ingredients2: "¾ cup water",
    ingredients3: "2 to 3 teaspoons honey, to taste",
    ingredients4: "2 to 3 teaspoons lemon juice, to taste",
    ingredients5: "1 lemon round",
    ingredients6: "1 cinnamon stick",
    season: "winter",
  },

  {
    name: "Mulled Wine",
    id: "5",
    category: "Coctail",
    alcoholic: "Alcoholic",
    image:
      "https://cdn.vectorstock.com/i/1000x1000/12/03/composition-on-white-with-mulled-wine-vector-12181203.webp",
    description:
      "Mulled wine, also known as spiced wine, is an alcoholic drink usually made with red wine, along with various mulling spices and sometimes raisins, served hot or warm. It is a traditional drink during winter, especially around Christmas. It is usually served at Christmas markets in Europe, primarily in Germany and eastern France. There are non-alcoholic versions of it. Vodka-spiked mulled wine can be found in Polish Christmas markets, where mulled wine is commonly used as a mixer. ",
    instructions:
      "Gently rewarm mulled wine in a large pot on the stovetop over low heat, or pour leftovers into your slow cooker and reheat on LOW until warm. If you choose to reheat your leftover refrigerated mulled wine, be aware that the flavors may not be as vibrant as they are when it's freshly made.",

    ingredients1: "Red Wine",
    ingredients2: "Brandy",
    ingredients3: "1 large cinnamon stick, or 2 small ones",
    ingredients4: "2 star anise",
    ingredients5: "2 strips lemon zest, pared using a vegetable peeler",
    ingredients6: "4 tbsp caster sugar",
    season: "winter",
  },

  {
    name: "Grapefruit Paloma",
    id: "6",
    category: "Coctail",
    alcoholic: "Alcoholic",
    image:
      "https://cdn.vectorstock.com/i/1000x1000/05/74/paloma-cocktail-icon-alcoholic-mixed-drink-vector-44090574.webp",
    description:
      "Little is known about the historical origin of the Paloma, the most popular tequila-based cocktail in Mexico. Some believe that it is named after La Paloma (“The Dove”), the popular folk song composed in the early 1860s. Diffords guide states it was created by the legendary Don Javier Delgado Corona, owner and bartender of La Capilla, in Tequila, Mexico.",
    instructions:
      "Looking for something to drink on a sunny spring day…tequila with freshly squeezed grapefruit juice and mixed with a bit of lime juice and agave to round everything off…you have a real crowd pleaser. A touch of kosher salt on the rim of the glass will add a little extra touch.",

    ingredients1: "Tequila ",
    ingredients2: "50ml freshly squeezed pink grapefruit juice",
    ingredients3: "15ml freshly squeezed lime",
    ingredients4: "15ml agave nectar",
    ingredients5: "Top up with Grapefruit soda water",
    ingredients6: "4 tbsp caster sugar",
    season: "spring",
  },
];

const drink = {
  status: "success",
  result: drinks.length,
  drinks: drinks,
};

module.exports = drink;
