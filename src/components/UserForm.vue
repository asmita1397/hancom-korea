<template>
  <div>
    <div v-bind:key="userFormKey" v-for="(userForm,userFormKey) in getTreeData">
      <div
        v-if="userFormKey.startsWith('ID_')"
        :style="{
          display:userForm.property.display, 
          zIndex: userForm.property.outerWindowZIndex, 
          top: userForm.property.outerWindowtop,
          left: userForm.property.outerWindowleft
        }"
        class="outerWindowContainer"
        :ref="'outrWindowDrag'.concat(userFormKey)"
        @mousedown="make(userFormKey)"
      >
        <div class="outerWindowTop" @mousedown="dragMouseDown($event,userFormKey)">
          <span>Book1 {{userForm.property.name}} (UserForm)</span>
          <OuterWindowButton :userForm="userFormKey" />
        </div>

        <div
          :style="{
            color: userForm.property.foreColor,
            left: userForm.property.left,
            top:userForm.property.top,
            zoom:userForm.property.zoom,
            cursor: userForm.property.mousePointer,
            boxShadow: userForm.property.specialEffect,
            position: userForm.property.position,
            textAlign: userForm.property.textAlign,
            border: userForm.property.border,
            width: userForm.property.width,
            margin: userForm.property.margin,
            backgroundColor: userForm.property.backColor,
            borderColor: userForm.property.borderColor,
            fontFamily:userForm.property.font,
            height:userForm.property.height,
            resize: userForm.property.resize,
            overflow: userForm.property.overflow,
            borderTopLeftRadius: userForm.property.borderTopLeftRadius,
            borderTopRightRadius:userForm.property.borderTopRightRadius,
            maxWidth: userForm.property.maxWidth,
            maxHeight: userForm.property.maxHeight,
          }"
          v-resize
          @resize="onResize($event,userFormKey)"
        >
          <div class="innerWindowtop">
            <span
              v-bind:class="{ rightToLeft: userForm.property.rightToLeft}"
            >{{userForm.property.caption}}</span>
            <!--   <button :style="whatsThisButton" v-show="userForm.property.whatsThisButton===true">?</button> -->
            <img
              class="innerWindowCloseButton"
              src="https://img.icons8.com/fluent/48/000000/close-window.png"
            />
          </div>
          <div
            @mouseup="handleMouseUp(userFormKey)"
            :style="innerWindowContainer"
            class="innerWindowContainer"
            @click="createTool($event,userFormKey)"
            @mousedown="handleDeactivate"
          >
            <drag-selector
              :ref="'dragselector'.concat(userFormKey)"
              v-model="checkedList"
              @change="handleDragSelectorChange"
              class="drag-selector"
            >
              <UserFormControl :userFormKey="userFormKey" :userForm="userForm" :key="componentKey" />
            </drag-selector>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { State, Getter, Mutation } from "vuex-class";
import UserFormControl from "./UserFormControl.vue";
import OuterWindowButton from "./OuterWindowButton.vue";
import DragSelector from "./DragSelector.vue";
import { EventBus } from "./event-bus";
import { TreeUserFormData } from "../entities/TreeUserFormData";
import { Label } from "../models/Label";
import { CommandButton } from "../models/CommandButton";
import { Label as LabelType } from "../entities/Label";
import { CommandButton as CommandButtonType } from "../entities/CommandButton";
@Component({
  components: {
    UserFormControl,
    OuterWindowButton,
    DragSelector
  }
})
export default class UserForm extends Vue {
  @Getter getTreeData: any;

  selectedAreaStyle: any;
  userFormName!: string;
  userFormKey!: string;

  @Getter getTreeBrowserData!: Function;

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
  @Mutation dragSelectedControls!: any;
  @Mutation incrementControl!: any;

  componentKey = 0;
  positions: any = {
    clientX: "",
    clientY: "",
    movementX: 0,
    movementY: 0
  };

  getLabelControl: LabelType = Label;
  getCommandButtonControl: CommandButtonType = CommandButton;

  innerWindowContainer = {
    backgroundSize: " 9px 10px",
    backgroundImage:
      "radial-gradient(circle, rgb(0, 0, 0) 0.5px, rgba(0, 0, 0, 0) 0.2px)"
  };

  checkedList = [];

  mounted() {
    /*  EventBus.$on(
      "selectedControlOption",
      (selectedForm: any, selectedControlOption: any) => {
        if (selectedControlOption.type !== "UserForm") {
          this.activateControl();
        } else {
          this.deactivateControl();
        }
      }
    ); */
  }

  handleDragSelectorChange(list: any) {
    /* for (const val in list) {
      console.log(list[val])
      this.controlIndex(list[val])
      this.dragSelectedControls()
   }
 */
  }
  handleDeactivate() {
    this.checkedList = [];
  }
  make(userFormKey: string): void {
    this.updatePrevModalZIndex();
    this.makeActive({ zIndex: this.prevModalZIndex, key: userFormKey });
    /*  this.updateSelect(true);
    this.updateSelectedUserForm(userFormKey);
    EventBus.$emit(
      "userFormClicked",
      this.selectedUserForm,
      this.selectedUserForm
    ); */
  }
  dragMouseDown(event: any, userFormKey: any): void {
    console.log("dragging", userFormKey);
    this.userFormKey = userFormKey;
    this.userFormName = "outrWindowDrag".concat(userFormKey);
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
      (this as any).$refs[this.userFormName][0].offsetTop -
      this.positions.movementY +
      "px";
    const left =
      (this as any).$refs[this.userFormName][0].offsetLeft -
      this.positions.movementX +
      "px";
    console.log(left, top);
    this.dragOuterWindow({
      userFormKey: this.userFormKey,
      top: top,
      left: left
    });
  }
  closeDragElement(): void {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  onResize(e: any, userFormKey: object) {
    this.resizeUserForm({ styleDetail: e.detail, userFormKey: userFormKey });
  }
  createTool(e: any, userFormKey: any) {
    if (this.selectedControl === "label") {
      this.incrementControl({ userFormKey: userFormKey, type: "label" });
      const getLabelControl = JSON.parse(JSON.stringify(this.getLabelControl));

      const tool = {
        ...getLabelControl,
        name: "Label".concat(this.getTreeData[userFormKey].elementsCount.label),
        caption: "Label".concat(
          this.getTreeData[userFormKey].elementsCount.label
        ),
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
            ? getLabelControl.width
            : this.selectedAreaStyle.width,
        height:
          this.selectedAreaStyle.height === "0px"
            ? getLabelControl.height
            : this.selectedAreaStyle.height
      };
      console.log("tool", tool);
      this.addControl({
        newControl: tool,
        userFormKey: userFormKey
      });
    } else if (this.selectedControl === "commandbutton") {
      this.incrementControl({
        userFormKey: userFormKey,
        type: "commandButton"
      });
      const getCommandButtonControl = JSON.parse(
        JSON.stringify(this.getCommandButtonControl)
      );

      const tool = {
        ...getCommandButtonControl,
        name: "CommandButton".concat(
          this.getTreeData[userFormKey].elementsCount.commandButton
        ),
        caption: "CommandButton".concat(
          this.getTreeData[userFormKey].elementsCount.commandButton
        ),
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
            ? this.getCommandButtonControl.width
            : this.selectedAreaStyle.width,
        height:
          this.selectedAreaStyle.height === "0px"
            ? this.getCommandButtonControl.height
            : this.selectedAreaStyle.height
      };

      this.addControl({
        newControl: tool,
        userFormKey: userFormKey
      });
    }
    this.updateSelectedControl("select");
  }
  handleMouseUp(userFormKey: string) {
    const dragRef = "dragselector".concat(userFormKey);
    this.selectedAreaStyle = (this as any).$refs[dragRef][0].selectAreaStyle;
    console.log(this.selectedAreaStyle);
    /* for (const val in this.checkedList) {
      console.log( this.checkedList[val])
      this.controlIndex( this.checkedList[val])
      console.log(this.getControlIndex)
      
   } */
    this.dragSelectedControls({ selectedControlList:this.checkedList,userFormKey:userFormKey});
    if (this.selectedAreaStyle.width === "0px") {
      this.deactivateControl(userFormKey);
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
.innerWindowtop {
  padding: 8px;
  background: linear-gradient(
    30deg,
    rgb(195, 220, 236) 0%,
    rgb(152, 192, 215) 50%,
    rgb(137, 193, 226) 51%,
    rgba(161, 189, 210, 0.56) 100%
  );
  height: 21px;
}
.innerWindowCloseButton {
  right: 10px;
  position: absolute;
  background-color: red;
  top: 8px;
}
.outerWindowTop {
  padding: 8px;
  background: linear-gradient(
    30deg,
    rgb(195, 220, 236) 0%,
    rgb(152, 192, 215) 50%,
    rgb(137, 193, 226) 51%,
    rgba(161, 189, 210, 0.56) 100%
  );
  height: 21px;
}
.outerWindowContainer {
  position: absolute;
  text-align: left;
  border: 3px solid rgb(159, 196, 224);
  width: 700px;
  height: 400px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: white;
  resize: both;
  overflow: hidden;
  min-height: 300px;
  min-width: 100px;
}
.innerWindowContainer {
  width: 100%;
  height: calc(100% - 37px);
  position: absolute;
  left: 0px;
  top: 37px;
  background-color: #e3e3e357;
}
.whatsThisButton {
  right: 35px;
  top: 11px;
  position: absolute;
  border-style: none;
  color: white;
  background-color: #9fb0cb;
}
</style>