<template>
  <div>
    <label
      class="lbl"
      ref="labelRef"
      v-if="control"
      :id="control.id"
      :key="control.id"
      :title="control.title"
      :tabindex="control.tabindex"
      :style="controlStyle"
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
  @Prop() private control!: any;
  @Prop() private modal!: any;

  @Getter getPrevControlIndex!: any;
  @Mutation userFormIndex!: Function;
  @Mutation updatePrevControlIndex!: Function;
  @Mutation controlIndex!: Function;
  @Mutation updateControlIndex!: Function;
  @Mutation activateControl!: Function;

  controlStyle = {
    left: this.control.style.left,
    top: this.control.style.top,
    width: this.control.style.width,
    height: this.control.style.height,
    zIndex: this.control.style.zIndex,
    border: this.control.style.border,
    backColor: this.control.style.backColor,
    borderColor: this.control.style.borderColor,
    font: this.control.style.font,
    foreColor: this.control.style.foreColor,
    textAlign: this.control.style.textAlign,
    cursor: this.control.style.cursor,
    specialEffect: this.control.style.specialEffect,
    wordWrap: this.control.style.wordWrap,
    overflow: this.control.style.overflow,
    whiteSpace: this.control.style.whiteSpace
  };

  customLabelClick() {
    console.log("clickd");
    this.userFormIndex(this.modal);
    this.controlIndex(this.control);
    this.updatePrevControlIndex();
    this.updateControlIndex(this.getPrevControlIndex);
    this.activateControl();
    EventBus.$emit("userFormClicked", this.control, this.modal);
  }
}
</script>
<style scoped>
</style>