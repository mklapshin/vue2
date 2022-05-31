import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import Task from '@/components/atoms/Task.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

// describe("test for Task", () => {
//   let store;
//   let getters;


// }