import { GetterTree, MutationTree, ActionTree } from 'vuex'
import {Label} from '../models/Label'
import {CommandButton} from "../models/CommandButton";
export const state: any = {
    labelControl: Label,
    commandButtonControl: CommandButton


}


export const getters: GetterTree<any, any> = {
    getLabelControl: state => state.labelControl,
    getCommandButtonControl: state => state.commandButtonControl

}

export const mutations: MutationTree<any> =
{
    addUserForm: (state,userForm) =>  state.userForms = userForm

}

export const actions: ActionTree<any, any> = {


}



export const control = {
    state,
    getters,
    mutations,
    actions
}
