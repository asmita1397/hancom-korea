<template >
  <div class="tree" style="min-height:'50px'">
    <div @click="nodeClicked" :style="{'margin-left': `${depth * 2}px`}" class="node">
      <span v-if="hasChildren" class="fa">{{expanded ? '[-] &#xf07c;' : '[+] &#xf07b;'}}   </span>
      <span class="type" v-else>
        <i style="font-size:15px" class="fa">&#xf15c;</i>
        {{node}}
      </span>
    
    </div>

    <ul v-if="expanded">
      <TreeBrowser
        v-for="child in node"
        :key="child.name"
        :node="child.property"
        :depth="depth + 1"
        @onClick="(node) => $emit('onClick',node)"
      />
    </ul>
  </div>
</template>


<script lang="ts">

import { Component, Vue, Prop } from "vue-property-decorator";
import { Mutation, Getter } from "vuex-class";

@Component({})

export default class TreeBrowser extends Vue {
  @Prop() node!: any;

  @Getter prevModalZIndex!: any;

  @Mutation updatePrevModalZIndex!: any;
  @Mutation userFormIndex!: Function;
  @Mutation makeActive!: Function;
  @Mutation updateSelect!: any;
  @Mutation updateSelectedUserForm!: any;
  @Mutation displayUserForm!: any;

  depth: object = {
    type: 0,
    default: 0
  };
  expanded = false;
  
  mounted() {
    this.updateSelect(true);
    console.log("===========",this.node)
    if(this.node.name=== undefined)
    {
      this.node= this.node["VBAProject1"]
    }
    console.log("===========",this.node)
  }

  nodeClicked() {
    this.expanded = !this.expanded;
    if (!this.hasChildren) {
      this.$emit("onClick", this.node);
    }
  }

  
  get hasChildren() {
    console.log(this.node)
    return this.node;
  }
}
</script>



<style scoped>
.tree {
  width: 300px;
  position: initial;
  z-index: 1;
  top: 30;
  left: 0;
}
.node {
  text-align: left;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 7px;
  margin-block-end: 1px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  cursor: pointer;
}
</style>
