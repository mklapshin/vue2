import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import Tasks from '@/components/molecules/Tasks.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

// describe("test for Tasks", () => {
//   let store;
//   let getters;


// }