import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import Tabs from '@/components/molecules/Tabs.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

// describe("test for Tabs", () => {
//   let store;
//   let getters;


// }