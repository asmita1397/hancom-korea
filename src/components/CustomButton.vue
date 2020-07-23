<template>
  <div>
    <button
      v-if="control"
      :id="control.id"
      :key="control.id"
      @mousedown="customButtonClick"
      @mouseup.stop
      :style="{
        left: control.left,
        top: control.top,
        width: control.width,
        height:control.height,
        zIndex: control.zIndex,
        border: control.border,
        backgroundColor: control.backColor,
        borderColor: control.borderColor,
        fontFamily: control.font,
        color: control.foreColor,
        textAlign: control.textAlign,
        cursor: control.mousePointer,
        boxShadow: control.specialEffect,
        wordWrap: control.wordWrap,
        overflow: control.overflow,
        whiteSpace:control.whiteSpace,
        borderStyle: 'solid'
      }"
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
    this.activateControl();
    EventBus.$emit("userFormClicked", this.control, this.userForm);
  }
}
</script>