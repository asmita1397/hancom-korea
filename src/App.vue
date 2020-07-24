<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <Header />
      </div>
      <div class="mainbody">
        <Split class="outersplit">
          <SplitArea :size="25" class="splitleft">
            <Split :direction="vertical">
              <SplitArea class="innersplit">
                 <div v-if="noDisplayTree===false">
                  <div class="sideheader">
                    <span class="sideheader1">
                      Project - VBAProject
                      <button
                        style="float:right"
                        v-on:click="noDisplayTreeBrowser"
                      >
                        <b>X</b>
                      </button>
                    </span>
                  </div>

                  <div>
                    <i class="material-icons">&#xe2c8;</i>
                  </div>
                  <hr />
                  <div>
                    <TreeBrowser :node="getRoot" @onClick="nodeWasClicked" style="cursor:pointer;" />
                  </div>
                </div>
              </SplitArea>

              <SplitArea class="innersplit">
                <UserFormPropertiesList />
              </SplitArea>
            </Split>
          </SplitArea>
          <SplitArea :size="75" class="right">
            <UserForm />
            <ToolBox />
          </SplitArea>
        </Split>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import UserForm from "./components/UserForm.vue";
import { State, Getter, Mutation } from "vuex-class";

import TreeBrowser from "./components/TreeBrowser.vue";
import ToolBox from "./components/ToolBox.vue";
import UserFormPropertiesList from "./components/UserFormPropertiesList.vue";
import { EventBus } from "./components/event-bus";
@Component({
  components: {
    Header,
    UserForm,
    TreeBrowser,
    ToolBox,
    UserFormPropertiesList
  }
})
export default class App extends Vue {
  vertical = "vertical";
  noDisplayTree= false;
  @State("userForms") userForms: any;

  @Getter getRoot!: any;
  @Getter getTreeBrowserData: any;

  @Getter prevModalZIndex: any;

  @Getter getTreeData: any;
  @Mutation userFormIndex: any;
  @Mutation displayUserForm: any;
  @Mutation updatePrevModalZIndex: any;
  @Mutation makeActive: any;

  @Getter selectedUserForm!: any;
  @Getter selected!: any;

  @Mutation updateSelect: any;
  @Mutation updateSelectedUserForm: any;

  make(modal: any): void {
    this.userFormIndex(modal);
    this.updatePrevModalZIndex();
    this.makeActive(this.prevModalZIndex);
    this.displayUserForm();
  }
  nodeWasClicked(node: any) {
    console.log(node);
    this.updateSelect(true);
    this.updateSelectedUserForm(node);
    this.make(node);
    console.log(this.selected);

    EventBus.$emit(
      "userFormClicked",
      this.selectedUserForm,
      this.selectedUserForm
    );
  }
   noDisplayTreeBrowser() {
      this.noDisplayTree = true;
    }
  mounted() {
    console.log(this.getTreeData);
    for (const key in this.getTreeData) {
      console.log(this.getTreeData[key]);
    }
  
  }
}
</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.splitleft {
  width: auto;
  z-index: 1;
  top: 5;
  left: 5;
  background-color: white;
  overflow-x: hidden;
  border: 2px solid grey;
}
.outersplit {
  height: 83%;
  position: fixed;
}
.innersplit {
  border: 1px solid grey;
}
.sideheader1 {
  /* width: 250px; */
  background-color: rgb(142, 191, 231);
  margin-bottom: 8px;
}
.sideheader {
  height: 22px;
  text-align: left;
  background-color: rgb(142, 191, 231);
}

.right {
  right: 0;
  background-color: #80888e;
  height: 100%;
  width: 75%;
  position: absolute;
  z-index: 1;
  overflow-x: hidden;
  /* padding-top: 20px; */
}
.container {
  width: 100%;
  max-height: 500px;
}
.header {
  /* height: 40px; */
  height: 10%;
  border-bottom: 1px solid #eee;
  background-color: #ffffff;
}
</style>

