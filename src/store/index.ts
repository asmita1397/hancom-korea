import Vue from 'vue'
import Vuex from 'vuex'
import { treeBrowserData } from "./treeBrowserData";
import { globalProperty } from "./globalProperty";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {  treeBrowserData, globalProperty }
})
