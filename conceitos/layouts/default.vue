<template>
  <div>
    <div class="bg-gray-100">
      <div class="container flex items-center space-x-4 mx-auto h-10 mb-10">
        <nuxt-link :to="{ name: 'a-empresa' }">A empresa</nuxt-link>
        <nuxt-link to="/servicos">Serviços</nuxt-link>
        <nuxt-link to="/produtos">Produtos</nuxt-link>
      </div>
    </div>

    <div>
      <div class="container mx-auto">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "",

  data() {
    return {};
  },

  methods: {},
};
</script>
