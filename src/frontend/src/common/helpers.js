export const normalizeDough = (dough) => {
  return {
    ...dough,
    value: dough.id == 1 ? "light" : "large",
  };
};

export const normalizeSize = (size) => {
  return {
    ...size,
    value: size.id == 1 ? "small" : size.id == 2 ? "normal" : "big",
  };
};

export const normalizeSauces = (sauces) => {
  return {
    ...sauces,
    value: sauces.id == 1 ? "tomato" : "creamy",
  };
};

export const normalizeIngredients = (ingredients) => {
  let nameClass = {
    Грибы: "mushrooms",
    Чеддер: "cheddar",
    Салями: "salami",
    Ветчина: "ham",
    Ананас: "ananas",
    Бекон: "bacon",
    Лук: "onion",
    Чили: "chile",
    Халапеньо: "jalapeno",
    Маслины: "olives",
    Томаты: "tomatoes",
    Лосось: "salmon",
    Моцарелла: "mozzarella",
    Пармезан: "parmesan",
    "Блю чиз": "blue_cheese",
  };
  return {
    ...ingredients,
    value:
      typeof nameClass[ingredients.name] != "undefined"
        ? nameClass[ingredients.name]
        : "",
  };
};
