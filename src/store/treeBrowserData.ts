import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { treeData } from '../models/TreeData'
import { TreeUserFormData } from "../entities/TreeUserFormData";
import Vue from 'vue'
export const state: TreeUserFormData = treeData
// ={
  // treeBrowserData: treeData,
  /* useFormIdIndex: -1,
  controlIdIndex: -1 */
// }




export const getters: GetterTree<TreeUserFormData, any> = {

 /*  getTreeBrowserData: state => state.treeBrowserData.userForms[0].userForms,
  getRoot: state => state.treeBrowserData,
  getUserFormIndex: state => state.useFormIdIndex,
  getControlIndex: state => state.controlIdIndex,
  getPrevControlIndex: state => state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controlZIndex,
  getSelectedUserForm: state => state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex],
  getSelectedControl: state => state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex], */
    
  getTreeData: state => state.VBAProject1,
  getUseFormCount: state=> state.VBAProject1.userFormCount

}

export const mutations: MutationTree<any> =
{

  dragOuterWindow: (state, userForm) => {
    
    state.VBAProject1[userForm.userFormKey].property.outerWindowtop = userForm.top
    state.VBAProject1[userForm.userFormKey].property.outerWindowleft= userForm.left
    

  },
  incrementuserFormCount:(state) => {
    state.VBAProject1.userFormCount += 1
  },
  makeActive: (state, userForm) => {
    state.VBAProject1[userForm.key].property.outerWindowZIndex= userForm.zIndex.toString()
  },

  addtreeBrowserData: (state, userForm) => {
     const newKey=`ID_USERFORM${state.VBAProject1.userFormCount+1}`
     Vue.set(state.VBAProject1,newKey, userForm)
    
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

  addControl: (state, addControl) => {
    
     if(addControl.newControl.type === 'Label')
     {
      state.VBAProject1[addControl.userFormKey].elementsCount.label += 1
      const newControlKey =  `ID_LABEL${state.VBAProject1[addControl.userFormKey].controls.length}`
      Vue.set(state.VBAProject1[addControl.userFormKey].controls, newControlKey,  addControl.newControl);
  
     }
    
  },


  userFormIndex: (state, userForm) => {
    state.useFormIdIndex = state.treeBrowserData.userForms[0].userForms.findIndex((val: any) => val.id === userForm.id)
  },
  controlIndex: (state, control) => {
    state.controlIdIndex = state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls.findIndex((val: any) => val.id === control.id)
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
  activateControl: (state,keys) => {
  
    state.VBAProject1[keys.userFormKey].controls[keys.controlKey].isActive=true

    /* state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls.map((val: any, index: number) => {
      if (index === state.controlIdIndex) {
        val.isActive = true
      }
      else {
        val.isActive = false
      }
    }) */
  },
  deactivateControl: (state) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls.map((val: any) => {
      if (val.isActive === true) {
        val.isActive = false
      }
    })
  },
  dragSelectedControls: (state, contolList) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls.map((val: any) => {
      val.isActive= false
      contolList.map((control: any) => {
        if (control.id === val.id) {
          val.isActive = true
        }
        
      }
      )
    })
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
