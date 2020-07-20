import Vue from 'vue'
import Vuex from 'vuex'
import { userForms } from './UserForms'
import { treeBrowserData } from "./treeBrowserData";
import { globalProperty } from "./globalProperty";
import { control } from "./control";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: { userForms, treeBrowserData, globalProperty,control }
})
