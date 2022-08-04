<template>
  <div>
    <pre>
      {{ $config }}
    </pre>
    <br>
    <br>
    <VTooltip>
      <a>Sponsor me</a>

      <template #popper> Help me fund my open source </template>
    </VTooltip>
    <pre>
    {{ $store.state.user }}
    </pre>

    <pre>
    {{ user }}
    </pre>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "IndexPage",

  data() {
    return {};
  },

  //mounted só roda em client side, não roda em server side
  mounted() {
    console.log(this.$name("Jon Snow"));
    console.log(this.$dayjs().format());
  },

  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>
