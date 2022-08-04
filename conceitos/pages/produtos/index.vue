<template>
  <div>
    <h1 class="text-lg font-bold">Produtos</h1>
    <nuxt-link to="/produtos/produto-a">Produto A</nuxt-link>
    <nuxt-link to="/produtos/produto-b">Produto B</nuxt-link>

    <br />
    <br />

    <div
    v-for="product in products" :key="product.id"
    class="border-b border-gray-400 py-3"
    >
      {{ product.title }}
    </div>
    <pre>
      {{ products }}
    </pre>
  </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {};
  },
  //é executado antes do componente ser criado
  /* async asyncData(context) {
    console.log(context)
    await new Promise( (resolve) => {
      setTimeout( () => {
        resolve()
        console.log('promise resolvida')
      }, 3000)
    })
    return {
      products: [
        { name: 'product-a' },
        { name: 'product-b' },
      ]
    }
  }, */

  async asyncData({ $axios }) {
    const products = await $axios.$get(
      "posts?_limit=3"
    );

    return {
      products,
    };
  },
  /* fetch() {

  }, */

  methods: {},
};
</script>

