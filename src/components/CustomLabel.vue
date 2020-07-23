<template>
  <div>
    <label
      class="lbl"
      ref="labelRef"
      v-if="control"
      :key="control.name"
      :title="control.title"
      :tabindex="control.tabIndex"
      :style=" { 
        left: control.left,
    top: control.top,
    width: control.width,
    height: control.height,
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
    whiteSpace: control.whiteSpace
    }"
      @mousedown="customLabelClick"
      @mouseup.stop
      :v-model="control.caption"
      :value="control.caption"
      :disabled="!control.enabled"
      @keyup.enter="trigger"
    >{{control.caption}}</label>
  </div>
</template>



<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Mutation, Getter } from "vuex-class";
import { EventBus } from "./event-bus";
@Component({})
export default class CustomLabel extends Vue {
  @Prop() control!: any;
  @Prop() userFormKey!: any;
  @Prop() controlKey: string;

  @Getter getPrevControlIndex!: any;
  @Mutation userFormIndex!: Function;
  @Mutation updatePrevControlIndex!: Function;
  @Mutation controlIndex!: Function;
  @Mutation updateControlIndex!: Function;
  @Mutation activateControl!: Function;

  labelStyle = {
    left: this.control.left,
    top: this.control.top,
    width: this.control.width,
    height: this.control.height,
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
    whiteSpace: this.control.whiteSpace
  };

  customLabelClick() {
    /*   console.log("clickd");
    this.userFormIndex(this.userFormKey);
    this.controlIndex(this.control);
    this.updatePrevControlIndex();
    this.updateControlIndex(this.getPrevControlIndex); */
    this.activateControl({
      controlKey: this.controlKey,
      userFormKey: this.userFormKey
    });
    /*  EventBus.$emit("userFormClicked", this.control, this.userFormKey); */
  }
}
</script>
<style scoped>
</style>