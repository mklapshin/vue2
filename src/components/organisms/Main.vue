<template>
  <div :class="$style.content">
    <Tasks />

    <form @submit.prevent="submit">
      <input
        :class="$style.contentAdd"
        type="text"
        placeholder="Введите пост"
        v-model="text"
      />
      <input
        :class="$style.contentAdd"
        type="text"
        placeholder="Введите имя автора"
        v-model="text2"
      />
      <button type="submit">Добавить</button>
    </form>
    <!-- <p>{{ text2 }}</p> -->
  </div>
</template>

<script>
import Tasks from "../molecules/Tasks.vue";
import { mapMutations } from "vuex";

export default {
  name: "App",
  data() {
    return {
      text: "",
      text2: "",
    };
  },
  methods: {
    ...mapMutations(["addTask"]),
    submit() {
      this.addTask(this.text, this.text2);
    },
  },
  components: {
    Tasks,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.content {
  padding: 1.875rem 1.875rem;
  background-color: $linen;
}

.contentAdd {
  padding: 0.75rem 1rem;
  width: 100%;
  outline: none;
  background: $serenade;
  border: 0.125rem dashed $peachOrange;
  border-radius: 0.625rem;
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: $mainColor;
  text-align: center;
  &::placeholder {
    font-family: "Inter", sans-serif;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: $peachOrange;
  }
  &:focus {
    border: 0.125rem solid $carrotOrange;
  }
}
</style>
 