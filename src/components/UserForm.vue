<template>
  <div>
    <div v-bind:key="index" v-for="(modal,index) in getTreeBrowserData">
      <div
        :style="modal.outerWindowStyle.container"
        :ref="'outrWindowDrag'.concat(modal.name)"
        @mousedown="make(modal)"
      >
        <div :style="modal.outerWindowStyle.top" @mousedown="dragMouseDown($event,modal)">
          <span>Book1 {{modal.name}} (UserForm)</span>
          <OuterWindowButton :userForm="modal" />
        </div>

        <div :style="modal.innerWindowStyle.container" v-resize @resize="onResize($event,modal)">
          <div :style="modal.innerWindowStyle.top">
            <span v-bind:class="{ rightToLeft: modal.rightToLeft}">{{modal.caption}}</span>
            <button
              :style="modal.innerWindowStyle.whatsThisButton"
              v-show="modal.whatsThisButton==='True'"
            >?</button>
            <img
              class="close"
              :style="modal.innerWindowStyle.closeButton"
              src="https://img.icons8.com/fluent/48/000000/close-window.png"
            />
          </div>
          <div
            @mouseup="handleMouseUp(modal.name)"
            :style="modal.innerWindowStyle.innerContainer"
            v-on:click.stop="createTool($event,modal)"
            @mousedown="handleDeactivate"
          >
            <drag-selector
              :ref="'dragselector'.concat(modal.name)"
              v-model="checkedList"
              @change="handleDragSelectorChange"
              class="drag-selector"
            >
              <UserFormControl :modal="modal" :ref="modal.name" />
            </drag-selector>
          </div>
        </div>
      </div>
    </div>
    <!--   <Dragable ref="child" /> -->
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Mutation } from "vuex-class";
import UserFormControl from "./UserFormControl.vue";
import OuterWindowButton from "./OuterWindowButton.vue";
import DragSelector from "./DragSelector.vue";
import { EventBus } from "./event-bus";
@Component({
  components: {
    UserFormControl,
    OuterWindowButton,
    DragSelector
  }
})
export default class UserForm extends Vue {
  selectedAreaStyle: any;
  modalName!: string;
  @Getter getTreeBrowserData!: Function;
  @Getter getLabelControl!: any;
  @Getter getCommandButtonControl!: any;
  @Getter selectedControl!: any;
  @Getter prevModalZIndex!: any;
  @Getter selectedUserForm!: any;
  @Getter getControlIndex!: any;

  @Mutation userFormIndex!: Function;
  @Mutation addControl!: Function;
  @Mutation updateSelectedControl!: Function;
  @Mutation dragOuterWindow!: Function;
  @Mutation makeActive!: Function;
  @Mutation updatePrevModalZIndex!: any;
  @Mutation updateSelectedUserForm!: any;
  @Mutation updateSelect!: any;
  @Mutation resizeUserForm!: any;
  @Mutation activateControl!: any;
  @Mutation deactivateControl!: any;
  @Mutation controlIndex!: any;
  @Mutation dragSelectedControls!: any

  positions: any = {
    clientX: "",
    clientY: "",
    movementX: 0,
    movementY: 0
  };
checkedList =[]
  mounted() {
    EventBus.$on(
      "selectedControlOption",
      (selectedForm: any, selectedControlOption: any) => {
        if (selectedControlOption.type !== "UserForm") {
          this.activateControl();
        } else {
          this.deactivateControl();
        }
      }
    );
  }

  handleDragSelectorChange(list: any) {
   /* for (const val in list) {
      console.log(list[val])
      this.controlIndex(list[val])
      this.dragSelectedControls()
   }
 */
  }
  handleDeactivate()
  {
      this.checkedList=[]
  }
  make(modal: any): void {
    this.userFormIndex(modal);
    this.updatePrevModalZIndex();
    console.log("mak activ");
    this.makeActive(this.prevModalZIndex);
    this.updateSelect(true);
    this.updateSelectedUserForm(modal);
    EventBus.$emit(
      "userFormClicked",
      this.selectedUserForm,
      this.selectedUserForm
    );
  }
  dragMouseDown(event: any, modal: any): void {
    this.userFormIndex(modal);
    console.log("dragging", modal.name);
    this.modalName = "outrWindowDrag".concat(modal.name);
    event.preventDefault();
    this.positions.clientX = event.clientX;
    this.positions.clientY = event.clientY;
    document.onmousemove = this.elementDrag;
    document.onmouseup = this.closeDragElement;
  }
  elementDrag(event: any): void {
    event.preventDefault();
    this.positions.movementX = this.positions.clientX - event.clientX;
    this.positions.movementY = this.positions.clientY - event.clientY;
    this.positions.clientX = event.clientX;
    this.positions.clientY = event.clientY;

    const top =
      (this as any).$refs[this.modalName][0].offsetTop -
      this.positions.movementY +
      "px";
    const left =
      (this as any).$refs[this.modalName][0].offsetLeft -
      this.positions.movementX +
      "px";
    this.dragOuterWindow({ top: top, left: left });
  }
  closeDragElement(): void {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  onResize(e: any, userForm: object) {
    /* console.log(userForm) */
    this.resizeUserForm(e.detail);
  }
  createTool(e: any, modal: any) {
    this.userFormIndex(modal);
    if (this.selectedControl === "label") {
      console.log("labl");
      const tool = {
        ...this.getLabelControl,
        id: modal.controls.length + 1,
        name: "Label".concat(modal.controls.length + 1),
        caption: "Label".concat(modal.controls.length + 1),
        style: {
          ...this.getLabelControl.style,
          left:
            this.selectedAreaStyle.width === "0px"
              ? `${e.offsetX}px`
              : this.selectedAreaStyle.left,
          top:
            this.selectedAreaStyle.width === "0px"
              ? `${e.offsetY}px`
              : this.selectedAreaStyle.top,
          width:
            this.selectedAreaStyle.width === "0px"
              ? this.getLabelControl.style.width
              : this.selectedAreaStyle.width,
          height:
            this.selectedAreaStyle.height === "0px"
              ? this.getLabelControl.style.height
              : this.selectedAreaStyle.height
        }
      };

      console.log("tool", tool);
      this.addControl(tool);
    } else if (this.selectedControl === "commandbutton") {
      const tool = {
        ...this.getCommandButtonControl,
        id: modal.controls.length + 1,
        name: "CommandButton".concat(modal.controls.length + 1),
        caption: "CommandButton".concat(modal.controls.length + 1),
        style: {
          ...this.getCommandButtonControl.style,
          left:
            this.selectedAreaStyle.width === "0px"
              ? `${e.offsetX}px`
              : this.selectedAreaStyle.left,
          top:
            this.selectedAreaStyle.width === "0px"
              ? `${e.offsetY}px`
              : this.selectedAreaStyle.top,
          width:
            this.selectedAreaStyle.width === "0px"
              ? this.getCommandButtonControl.style.width
              : this.selectedAreaStyle.width,
          height:
            this.selectedAreaStyle.height === "0px"
              ? this.getCommandButtonControl.style.height
              : this.selectedAreaStyle.height
        }
      };
      console.log("tool", tool);
      this.addControl(tool);
    }
    this.updateSelectedControl("select");
  }
  handleMouseUp(modal: string) {
    const dragRef = "dragselector".concat(modal);
    this.selectedAreaStyle = (this as any).$refs[dragRef][0].selectAreaStyle;

    /* for (const val in this.checkedList) {
      console.log( this.checkedList[val])
      this.controlIndex( this.checkedList[val])
      console.log(this.getControlIndex)
      
   } */
   this.dragSelectedControls(this.checkedList)
    console.log("mouse up");
    if(this.selectedAreaStyle.width === "0px")
    {
        this.deactivateControl();
    }
     
  }
}
</script>


<style scoped>
img {
  width: 24px;
}
.rightToLeft {
  float: right;
  padding-right: 45px;
}
.drag-selector {
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 10px;
}
.drag-selector1 {
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 10px;
}
</style>