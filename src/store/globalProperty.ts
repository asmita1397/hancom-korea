import { GetterTree, MutationTree, ActionTree } from 'vuex'
import store from './index'

/* console.log("stor", store) */
export const state: any = {
    selectedUserForm: {},
    selectedControl: "",
    prevModalZIndex: 5,
    selected: false
}


export const getters: GetterTree<any, any> = {
    selectedUserForm: state => state.selectedUserForm,
    selectedControl: state => state.selectedControl,
    prevModalZIndex: state => state.prevModalZIndex,
    selected: state => state.selected
}

export const mutations: MutationTree<any> =
{
    updateSelectedUserForm: (state, userForm) => {
        state.selectedUserForm = userForm 
    },
    updateSelectedControl: (state, tool) => state.selectedControl = tool,
    updatePrevModalZIndex: state => state.prevModalZIndex = state.prevModalZIndex + 1,
    updateSelect: (state, isSelect) => state.selected = isSelect,

}

export const actions: ActionTree<any, any> = {

    updatePrevModalZIndex: ({ commit }) => {
        commit('updatePrevModalZIndex')
    },
    updateSelectedControl: ({ commit }, tool) => {
        commit('updateSelectedControl', tool)
    }

}



export const globalProperty = {
    state,
    getters,
    mutations,
    actions
}
