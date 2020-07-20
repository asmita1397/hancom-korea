<template>
  <div>
    <button
      v-if="control"
      :id="control.id"
      :key="control.id"
      @mousedown="customButtonClick"
      @mouseup.stop
      :style="control.style"
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
  @Prop() private control!: object;
  @Prop() private modal!: object;

  @Getter getPrevControlIndex!: any;
  @Mutation userFormIndex!: Function;
  @Mutation updatePrevControlIndex!: Function;
  @Mutation controlIndex!: Function;
  @Mutation updateControlIndex!: Function;
  @Mutation activateControl!: Function;
  customButtonClick() {
    console.log("clickd");
    this.userFormIndex(this.modal);
    this.controlIndex(this.control);
    this.updatePrevControlIndex();
    this.updateControlIndex(this.getPrevControlIndex);
    this.activateControl()
    EventBus.$emit("userFormClicked", this.control, this.modal);
  }
}
</script>