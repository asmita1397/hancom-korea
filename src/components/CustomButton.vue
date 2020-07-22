<template>
  <div>
    <button
      v-if="control"
      :id="control.id"
      :key="control.id"
      @mousedown="customButtonClick"
      @mouseup.stop
      :style="commandButtonStyle"
      :title="control.title"
      :tabindex="control.tabindex"
      :v-model="control.caption"
      :value="control.caption"
      :disabled="!control.enabled"
      @keyup.enter="trigger"
    >{{control.caption}}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";
import { EventBus } from "./event-bus";
@Component({})
export default class CustomLabel extends Vue {
  @Prop() private control!: any;
  @Prop() private userForm!: object;

  commandButtonStyle=
  { 

    left: this.control.left,
    top: this.control.top,
    width: this.control.width,
    height:this.control.height,
    zIndex: this.control.zIndex,
    border: this.control.border,
    backgroundColor: this.control.backColor,
    borderColor: this.control.borderColor,
    fontFamily: this.control.font,
    color: this.control.foreColor,
    textAlign: this.control.textAlign,
    cursor: this.control.mousePointer,
    boxShadow: this.control.specialEffect,
    wordWrap: this.control.wordWrap,
    overflow: this.control.overflow,
    whiteSpace:this.control.whiteSpace,
    borderStyle: "solid",
  }

  @Getter getPrevControlIndex!: any;
  @Mutation userFormIndex!: Function;
  @Mutation updatePrevControlIndex!: Function;
  @Mutation controlIndex!: Function;
  @Mutation updateControlIndex!: Function;
  @Mutation activateControl!: Function;
  customButtonClick() {
    console.log("clickd");
    this.userFormIndex(this.userForm);
    this.controlIndex(this.control);
    this.updatePrevControlIndex();
    this.updateControlIndex(this.getPrevControlIndex);
    this.activateControl()
    EventBus.$emit("userFormClicked", this.control, this.userForm);
  }
}
</script>