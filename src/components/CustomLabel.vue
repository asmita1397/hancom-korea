<template>
  <div v-on:contextmenu.stop="openMenu">
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

    <div
      id="right-click-menu"
      tabindex="-1"
      v-if="viewMenu"
      :style="{top:top, left:left}"
      v-on:blur="closeMenu"
    >
      <ControlContextMenu
        :control="control"
        :controlKey="controlKey"
        :userFormKey="userFormKey"
        @closeMenu="closeMenu"
      />
    </div>
  </div>
</template>



<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Mutation, Getter } from "vuex-class";
import { EventBus } from "./event-bus";
import ControlContextMenu from "../views/contextMenu/ControlContextMenu.vue";

@Component({
  components: {
    ControlContextMenu
  }
})
export default class CustomLabel extends Vue {
  @Prop() control!: any;
  @Prop() userFormKey!: any;
  @Prop() controlKey: string;

  @Getter getPrevControlIndex!: any;
  @Getter getCuttedControlList!: any;
  @Getter getTreeData!: any;

  @Mutation updatePrevControlIndex!: Function;
  @Mutation updateControlIndex!: Function;
  @Mutation activateControl!: Function;
  @Mutation cutSelectedControl!: Function;
  @Mutation cutControlList!: Function;
  @Mutation updateCuttedControlList!: Function;
  @Mutation updateContextMenuType!: Function;
  @Mutation updateBlinkProperty!: Function;
  @Mutation pasteControl!: Function;
  @Mutation emptySelectAllControls!: Function;

  viewMenu = false;
  top = "0px";
  left = "0px";

  openMenu(e: any) {
    e.preventDefault();
    this.updateBlinkProperty(false);
    console.log(e);
    this.top = `${e.offsetY}px`;
    this.left = `${e.offsetX}px`;
    this.viewMenu = true;
    console.log("context menu");
  }

  closeMenu() {
    this.viewMenu = false;
  }

  customLabelClick() {
    this.updatePrevControlIndex(this.userFormKey);
    this.updateControlIndex({
      userFormKey: this.userFormKey,
      controlKey: this.controlKey
    });
    this.activateControl({
      controlKey: this.controlKey,
      userFormKey: this.userFormKey
    });
    console.log(this.getTreeData[this.userFormKey]);
    EventBus.$emit(
      "userFormClicked",
      this.getTreeData[this.userFormKey],
      this.control
    );
  }
}
</script>
<style scoped>
#right-click-menu {
  background: #fafafa;
  border: 1px solid #bdbdbd;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100px;
  z-index: 999999;
}

#right-click-menu li {
  border-bottom: 1px solid #e0e0e0;
  margin: 0;
  padding: 5px 5px;
}

#right-click-menu li:last-child {
  border-bottom: none;
}

#right-click-menu li:hover {
  background: #1e88e5;
  color: #fafafa;
}
.disabled {
  /* pointer-events:none;  */
  opacity: 0.5;
}
</style>