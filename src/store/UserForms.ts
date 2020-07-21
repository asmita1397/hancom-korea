import { GetterTree, MutationTree, ActionTree } from 'vuex'
import {userFormData} from '../models/UserFormData'
import {UserForm} from '../entities/UserForm'

export const state: UserForm =  userFormData


export const getters: GetterTree<any, any> = {
    getUserForm: state => state.userForms
}

export const mutations: MutationTree<any> =
{
    addUserForm: (state,userForm) =>  state.userForms = userForm

}

export const actions: ActionTree<any, any> = {


}



export const userForms = {
    state,
    getters,
    mutations,
    actions
}
