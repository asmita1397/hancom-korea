<template>
  <div>
    <div :style="parent">
      <template>
        <vue-draggable-resizable
          :class-name-handle="control.isActive?'handle':''"
          :style="{zIndex:control.zIndex}"
          v-for="(control,controlKey) in userForm.controls"
          :key="controlKey"
          :id="key"
          :w="parseInt(control.width)"
          :h="parseInt(control.height)"
          :x="parseInt(control.left)"
          :y="parseInt(control.top)"
          :parent="true"
          @resizing="(x,y,width,height)=>onResize(controlKey,x,y,width,height)"
          @dragstop="(left, top) => dragstop(controlKey, left, top)"
          @deactivated="onDeactivated"
          @activated="onActivated(userForm,controlKey)"
        >
          <drag-selector-item :value="controlKey">
            <CustomLabel
              v-if="control.type==='Label'"
              :control="control"
              :controlKey="controlKey"
              :userFormKey="userFormKey"
            />
            <CustomButton
             v-if="control.type==='CommandButton'"
              :control="control"
              :controlKey="controlKey"
              :userFormKey="userFormKey" />
          </drag-selector-item>
        </vue-draggable-resizable>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import CustomLabel from "./CustomLabel.vue";
import CustomButton from "./CustomButton.vue";
import VueDraggableResizable from "./vue-draggable-resizable.vue";
import { Mutation, Getter } from "vuex-class";
import { EventBus } from "./event-bus";
import DragSelectorItem from "./DragSelectorItem.vue";

@Component({
  components: {
    CustomLabel,
    CustomButton,
    VueDraggableResizable,
    DragSelectorItem
  }
})
export default class UserFormControl extends Vue {
  @Prop() userFormKey!: string;
  @Prop() userForm!: any;
  parent: object = {
    width: "98%",
    height: "98%",
    position: "absolute",
    backColor: ""
  };

  deletingControlId: any = -1;
  deletingUserFormId: any = -1;
  selectedControl!: any;
  @Mutation userFormIndex!: Function;
  @Getter getUserFormIndex!: any;
  @Getter getControlIndex!: any;
  @Mutation controlIndex!: any;
  @Mutation resizeStyle!: any;
  @Mutation dragStyle!: any;
  @Mutation deletingControl!: Function;
  mounted() {
    console.log("mounted", this.userFormKey);
    document.addEventListener("keydown", this.deleteSingleControl);
  }

  deleteSingleControl(e: any) {
    if (e.keyCode === 13) {
      console.log("dlt")
      this.deletingControl(this.userFormKey);
     /*  if (this.deletingUserFormId !== -1 && this.deletingControlId !== -1) {
        if (this.userFormKey === this.deletingUserFormId) {
          this.userFormIndex(this.userFormKey);
          this.controlIndex(this.selectedControl);
          
          this.deletingControlId = -1;
          this.deletingUserFormId = -1;
          EventBus.$emit("userFormClicked", this.userFormKey, this.userFormKey);
        }
      } */
    }
  }

  onDeactivated() {
    this.deletingControlId = -1;
    this.deletingUserFormId = -1;
  }
  onActivated(userForm: any, controlKey: string) {
   
   /*  for (let i = 0; i < userForm.controls.length; i++) {
      if (userForm.controls[i].id === control.id) {
        this.selectedControl = userForm.controls[i];
        this.deletingControlId = i;
        this.deletingUserFormId = userForm.id;
      }
    } */
    
  }

  onResize(
    controlKey: string,
    x: number,
    y: number,
    width: number,
    height: number
  ): void {
    this.resizeStyle({
      width: `${width}px`,
      height: `${height}px`,
      left: `${x}px`,
      top: `${y}px`,
      controlKey: controlKey,
      userFormKey: this.userFormKey
    });
  }
  dragstop(controlKey: string, x: number, y: number): void {
    console.log("drag stop",controlKey,this.userFormKey)
    this.dragStyle({
      left: `${x}px`,
      top: `${y}px`,
      controlKey: controlKey,
      userFormKey: this.userFormKey
    });
  }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.handle {
  box-sizing: border-box;
  position: absolute;
  width: 10px;
  height: 10px;
  background: #eee;
  border: 1px solid #333;
}
.handle-tl {
  top: -10px;
  left: -10px;
  cursor: nw-resize;
}
.handle-tm {
  top: -10px;
  left: 50%;
  margin-left: -5px;
  cursor: n-resize;
}
.handle-tr {
  top: -10px;
  right: -10px;
  cursor: ne-resize;
}
.handle-ml {
  top: 50%;
  margin-top: -5px;
  left: -10px;
  cursor: w-resize;
}
.handle-mr {
  top: 50%;
  margin-top: -5px;
  right: -10px;
  cursor: e-resize;
}
.handle-bl {
  bottom: -10px;
  left: -10px;
  cursor: sw-resize;
}
.handle-bm {
  bottom: -10px;
  left: 50%;
  margin-left: -5px;
  cursor: s-resize;
}
.handle-br {
  bottom: -10px;
  right: -10px;
  cursor: se-resize;
}
</style>
