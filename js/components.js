Vue.component("card", {
  props: ["dato", "img", "p"],
  template: `
            <div class="card mx-2" style="width: 18rem;">
            <img :src="img" class="card-img-top h-50" alt="pizzas-images">
            <div class="card-body d-flex justify-content-between flex-column align-items-center">
            <h5 class="card-title">{{ dato }}</h5>
            <p class="card-text">{{  p  }}</p>
            <a href="#" class="btn btn-primary btn-sm w-50">Pedir</a>
            </div>
            </div>
        `,
});



var app = new Vue({
  el: "#app",
  data: {
    heading: "Pizza Fast",
    productos: "Menu",
    pizza1: "Todas las carnes",
    pizza2: "4 quesos",
    pizza3: "Margarita",
    pizza4: "Anchoas",
    img2: "../img/margarita.webp",
    img1: "../img/carnes.png",
    img3: "../img/quesos.jpg",
    img4: "../img/anchoas.jpg",
    descriptionCarnes:
      "Rica pizza de pollo, carne de cerdo, carne de vacuno, tocino, jamon y pepperoni",
    descriptionQueso:
      "Con queso parmesano, queso provolone, queso de cabra, y queso mozarella esta pizza es altamente recomendada",
    descriptionMar: "Pizza de queso Mozzarella, jamón, tomate al oreganato y albahaca sumamente deliciosa",
    descriptionAnch: "Pizza de anchoas, tocino y doble queso.",
  },
});