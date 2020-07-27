import { GetterTree, MutationTree, ActionTree } from 'vuex'
import Vue from "vue";
import store from './index'

export const state: any = {
    selectedUserForm: {},
    selectedControl: "",
    prevModalZIndex: 5,
    selected: false,
    cuttedControlList:{},
    cutControlUserform:''
}


export const getters: GetterTree<any, any> = {
    selectedUserForm: state => state.selectedUserForm,
    selectedControl: state => state.selectedControl,
    prevModalZIndex: state => state.prevModalZIndex,
    selected: state => state.selected,
    getCuttedControlList: state => state.cuttedControlList,
    getCutControlUserform: state => state.cutControlUserform
}

export const mutations: MutationTree<any> =
{
    updateSelectedUserForm: (state, userForm) => {
        state.selectedUserForm = userForm 
    },
    updateSelectedControl: (state, tool) => state.selectedControl = tool,
    updatePrevModalZIndex: state => state.prevModalZIndex = state.prevModalZIndex + 1,
    updateSelect: (state, isSelect) => state.selected = isSelect,

    updateStyle: (state,updatedStyle) =>
    {
        console.log(state.selectedUserForm)
        state.selectedUserForm.property[updatedStyle.styleName] = updatedStyle.styleValue
    },
    cutControlList: (state,controlObject) =>
    {
        state.cutControlUserform = controlObject.userFormKey
        Vue.set(state.cuttedControlList,controlObject.controlKey,controlObject.control );
       
    },
    updateCuttedControlList: (state) =>
    {
        state.cuttedControlList={}
       
    },


}

export const actions: ActionTree<any, any> = {

    updatePrevModalZIndex: ({ commit }) => {
        commit('updatePrevModalZIndex')
    },
    updateSelectedControl: ({ commit }, tool) => {
        commit('updateSelectedControl', tool)
    },

}



export const globalProperty = {
    state,
    getters,
    mutations,
    actions
}
