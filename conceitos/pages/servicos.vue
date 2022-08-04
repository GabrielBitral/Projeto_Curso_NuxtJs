<template>
  <div>
    <h1 class="text-lg font-bold">Serviços</h1>
    <nuxt-link to="/servicos/desenvolvimento-de-sites"
      >Desenvolvimento de Sites</nuxt-link
    >
    <nuxt-link to="/servicos/marketing-digital">Marketing Digital</nuxt-link>
    <br /><br />

    <!-- <pre>
      {{ $fetchState }}
    </pre> -->

    <div v-if="$fetchState.pending">Carregando ...</div>

    <div v-else>
      <div
        v-for="service in services"
        :key="service.id"
        class="border-b border-gray-400 py-4"
      >
        {{ service.username }}
      </div>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
import { set } from 'vue';
export default {
  name: "",

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Minha descrição do serviço",
        },
      ],
      bodyAttrs: {
        class: 'bg-gray-400'
      }
    };
  },

  data() {
    return {
      title: '',
      services: []
    };
  },

  //é executado depois que o componente é montado
  async fetch() {
    /* await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 3000)
    })
    console.log(this) */
    this.services = await this.$axios.$get(
      "users?_limit=3"
    );
  },

  created() {
    this.getTitle()
  },

  methods: {
    getTitle() {
      setTimeout(() => {
        this.title = 'Serviços'
      }, 3000)
    }
  },
};
</script>
