import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import ToDo from '@/components/organisms/ToDo.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

// describe("test for ToDo", () => {
//   let store;
//   let getters;


// }