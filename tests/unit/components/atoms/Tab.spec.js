import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import Tab from '@/components/atoms/Tab.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

// describe("test for Tab", () => {
//   let store;
//   let getters;


// }