<template>
  <div>
    <label
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
        whiteSpace: control.whiteSpace,
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


  @Mutation updatePrevControlIndex!: Function;
  @Mutation updateControlIndex!: Function;
  @Mutation activateControl!: Function;

  

  customLabelClick() {
    this.updatePrevControlIndex(this.userFormKey);
    this.updateControlIndex({userFormKey:this.userFormKey,controlKey:this.controlKey}); 
     /*  console.log("clickd");
    this.userFormIndex(this.userFormKey);
    this.controlIndex(this.control);
    
    */
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