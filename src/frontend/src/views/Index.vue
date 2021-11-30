<template>
  <div>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <BuilderDoughSelector
            :doughs="doughs"
            :selected_doughs="selected_doughs"
            @changeDoughs="changeDoughs"
          />
          <BuilderSizeSelector
            :sizes="sizes"
            :selected_size="selected_size"
            @changeSize="changeSize"
          />
          <div class="content__ingredients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингредиенты
              </h2>
              <div class="sheet__content ingredients">
                <BuilderSaucesSelector
                  :sauces="sauces"
                  :selected_sauces="selected_sauces"
                  @changeSauces="changeSauces"
                />
                <BuilderIngredientsSelector
                  :ingredients="ingredients"
                  @changeIngredients="changeIngredients"
                />
              </div>
            </div>
          </div>
          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>
            <BuilderPizzaView
              :ingredients="selected_ingredients"
              :sauces="selected_sauces"
              :doughs="selected_doughs"
            />
            <BuilderPriceCounter :total="price" />
          </div>
        </div>
      </form>
    </main>
  </div>
</template>
<script>
// список пицц
import pizza from "@/static/pizza.json";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderSaucesSelector from "@/modules/builder/components/BuilderSaucesSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
// приводим список пицц к нужному формату для вёрстки
import {
  normalizeDough,
  normalizeSize,
  normalizeSauces,
  normalizeIngredients,
} from "@/common/helpers";

export default {
  name: "IndexPizza",
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderSaucesSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
    BuilderPriceCounter,
  },
  data() {
    return {
      selected_doughs: "light",
      selected_size: "normal",
      selected_sauces: "tomato",
      selected_ingredients: [],
      name: "",
      price: 0,
      doughs: pizza.dough.map((dough) => normalizeDough(dough)),
      ingredients: pizza.ingredients.map((ingredients) =>
        normalizeIngredients(ingredients)
      ),
      sauces: pizza.sauces.map((sauces) => normalizeSauces(sauces)),
      sizes: pizza.sizes.map((size) => normalizeSize(size)),
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      this.refresh_price();
    });
  },
  methods: {
    changeDoughs(val) {
      this.selected_doughs = val;
    },
    changeSize(val) {
      this.selected_size = val;
    },
    changeSauces(val) {
      this.selected_sauces = val;
    },
    changeIngredients(result, type) {
      if (type == "add") {
        if (this.selected_ingredients.length > 0) {
          if (
            this.selected_ingredients.findIndex((x) => x.name == result.name) !=
            -1
          ) {
            this.selected_ingredients[
              this.selected_ingredients.findIndex((x) => x.name == result.name)
            ].count = result.count;
          } else {
            this.selected_ingredients.splice(
              this.selected_ingredients.length,
              0,
              {
                name: result.name,
                price: result.price,
                count: result.count,
              }
            );
          }
        } else {
          this.selected_ingredients.splice(
            this.selected_ingredients.length,
            0,
            {
              name: result.name,
              price: result.price,
              count: result.count,
            }
          );
        }
      }
      if (type == "remove") {
        if (this.selected_ingredients.length > 0) {
          if (result.count == 0) {
            this.selected_ingredients.splice(
              this.selected_ingredients.findIndex((x) => x.name == result.name),
              1
            );
          } else {
            this.selected_ingredients[
              this.selected_ingredients.findIndex((x) => x.name == result.name)
            ].count = result.count;
          }
        }
      }
      this.refresh_price();
    },
    //пересчет общей цены
    refresh_price() {
      let price = 0;
      //считаем цену ингридиентов
      for (let i = 0; i < this.selected_ingredients.length; i++) {
        price +=
          this.selected_ingredients[i].count *
          this.selected_ingredients[i].price;
      }
      //считаем цену соуса
      price +=
        this.sauces[
          this.sauces.findIndex((x) => x.value == this.selected_sauces)
        ].price;
      //считаем цену теста
      price +=
        this.doughs[
          this.doughs.findIndex((x) => x.value == this.selected_doughs)
        ].price;
      this.price = price;
    },
  },
};
</script>
<style lang="scss" scoped></style>
