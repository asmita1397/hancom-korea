import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { treeData } from '../models/TreeData'
import { TreeUserFormData } from "../entities/TreeUserFormData";
import Vue from 'vue'
export const state: TreeUserFormData = treeData

export const getters: GetterTree<TreeUserFormData, any> = {
  getTreeData: state => state.VBAProject1,
  getUseFormCount: state => state.VBAProject1.userFormCount

}

export const mutations: MutationTree<any> =
{

  dragOuterWindow: (state, userForm) => {
    state.VBAProject1[userForm.userFormKey].property.outerWindowtop = userForm.top
    state.VBAProject1[userForm.userFormKey].property.outerWindowleft = userForm.left
  },
  incrementuserFormCount: (state) => {
    state.VBAProject1.userFormCount += 1
  },
  makeActive: (state, userForm) => {
    state.VBAProject1[userForm.key].property.outerWindowZIndex = userForm.zIndex.toString()
  },
  addtreeBrowserData: (state, userForm) => {
    const newKey = `ID_USERFORM${state.VBAProject1.userFormCount + 1}`
    Vue.set(state.VBAProject1, newKey, userForm)
  },
  closeWindow: (state, userForm) => {
    state.VBAProject1[userForm].property.display = "none";
  },
  resizeUserForm: (state, userForm) => {
    state.VBAProject1[userForm.userFormKey].property.width = `${userForm.styleDetail.width}px`
    state.VBAProject1[userForm.userFormKey].property.height = `${userForm.styleDetail.height}px`
  },
  resizeStyle: (state, controlStyle) => {
    state.VBAProject1[controlStyle.userFormKey].controls[controlStyle.controlKey].width = controlStyle.width
    state.VBAProject1[controlStyle.userFormKey].controls[controlStyle.controlKey].left = controlStyle.left
    state.VBAProject1[controlStyle.userFormKey].controls[controlStyle.controlKey].top = controlStyle.top
    state.VBAProject1[controlStyle.userFormKey].controls[controlStyle.controlKey].height = controlStyle.height
  },
  dragStyle: (state, controlStyle) => {
    state.VBAProject1[controlStyle.userFormKey].controls[controlStyle.controlKey].left = controlStyle.left
    state.VBAProject1[controlStyle.userFormKey].controls[controlStyle.controlKey].top = controlStyle.top
  },
  incrementControl(state, control) {
    state.VBAProject1[control.userFormKey].elementsCount[control.type] += 1
    console.log(state.VBAProject1[control.userFormKey].elementsCount[control.type])

  },
  addControl: (state, addControl) => {
    if (addControl.newControl.type === 'Label') {
      const newControlKey = `ID_LABEL${state.VBAProject1[addControl.userFormKey].elementsCount.label + 1}`
      Vue.set(state.VBAProject1[addControl.userFormKey].controls, newControlKey, addControl.newControl);
    }
    else if (addControl.newControl.type === 'CommandButton') {
      const newControlKey = `ID_COMMANDBUTTON${state.VBAProject1[addControl.userFormKey].elementsCount.commandButton + 1}`
      Vue.set(state.VBAProject1[addControl.userFormKey].controls, newControlKey, addControl.newControl);
    }

  },


  updatePrevControlIndex: (state) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controlZIndex += 1
  },
  updateControlIndex: (state, controlIndex) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.zIndex = controlIndex.toString()

  },
  displayUserForm: (state) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].outerWindowStyle.container.display = "block"
  },
  updateStyle: (state, updatedStyle) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex][updatedStyle.styleName] = updatedStyle.styleValue
  },
  updatedInnerWindowStyle: (state, updatedStyle) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].innerWindowStyle.container[updatedStyle.styleName] = updatedStyle.styleValue
  },

  
  updateControl: (state, updatedStyle) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex][updatedStyle.styleName] = updatedStyle.styleValue
  },


  updateControlStyle: (state, updatedStyle) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style[updatedStyle.styleName] = updatedStyle.styleValue
  },
  deletingControl: (state) => {
    console.log(state.treeBrowserData.userForms[0].userForms)
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls.splice(state.controlIdIndex, 1)
  },
  activateControl: (state, keys) => {

    state.VBAProject1[keys.userFormKey].controls[keys.controlKey].isActive = true

    /* state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls.map((val: any, index: number) => {
      if (index === state.controlIdIndex) {
        val.isActive = true
      }
      else {
        val.isActive = false
      }
    }) */
  },
  deactivateControl: (state,userFormKey) => {
    for (const key in state.VBAProject1[userFormKey].controls) {
      
      if(state.VBAProject1[userFormKey].controls[key].isActive)
      {
       state.VBAProject1[userFormKey].controls[key].isActive = false
      }
   }
  },
  dragSelectedControls: (state, selectedControl) => {
    for (const controlKey in state.VBAProject1[selectedControl.userFormKey].controls) {
      state.VBAProject1[selectedControl.userFormKey].controls[controlKey].isActive = false
      for (const key in selectedControl.selectedControlList) {
        if(selectedControl.selectedControlList[key] === controlKey)
        {
          state.VBAProject1[selectedControl.userFormKey].controls[controlKey].isActive = true
        }
     }
   }
  },



}






export const actions: ActionTree<any, any> = {

  addtreeBrowserData: ({ commit }, userForm) => {
    commit('addtreeBrowserData', userForm)
  },
  closeWindow: ({ commit }, userForm) => {
    commit('closeWindow', userForm)
  },
  userFormIndex: ({ commit }, userForm) => {
    commit('userFormIndex', userForm)
  },
  controlIndex: ({ commit }, control) => {
    commit('controlIndex', control)
  },
  resizeStyle: ({ commit }, controlStyle) => {
    commit('resizeStyle', controlStyle)
  },
  dragStyle: ({ commit }, controlStyle) => {
    commit('dragStyle', controlStyle)

  },
  addControl: ({ commit }, control) => {
    commit('addControl', control)

  },
  dragOuterWindow: ({ commit }, userForm) => {
    commit('dragOuterWindow', userForm)

  },
  makeActive: ({ commit }, userFormZIndex) => {
    commit('makeActive', userFormZIndex)

  },
  updatePrevControlIndex: ({ commit }) => {
    commit('updatePrevControlIndex')

  },
  updateControlIndex: ({ commit }, controlIndex) => {
    commit('updateControlIndex', controlIndex)

  }



}




export const treeBrowserData = {
  state,
  getters,
  mutations,
  actions
}
