<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <Header />
        <hr class="hr" />
      </div>
      <div class="mainbody">
        <div class="left"></div>
        <div class="sidenav">
          <div class="sideheader">
            <span class="sideheader1">
              Project - VBAProject 
              <button style="float:right">
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
            <hr />

            <UserFormPropertiesList />
          </div>
        </div>
        <div class="right">
          <UserForm />

          <ToolBox />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserForm from "./components/UserForm.vue";
import { State, Getter, Mutation } from "vuex-class";
import Header from "./components/Header.vue";
import TreeBrowser from "./components/TreeBrowser.vue";
import ToolBox from "./components/ToolBox.vue";
import UserFormPropertiesList from "./components/UserFormPropertiesList.vue";
import { EventBus } from "./components/event-bus";
@Component({
  components: {
    UserForm,
    Header,
    TreeBrowser,
    ToolBox,
    UserFormPropertiesList
  }
})
export default class App extends Vue {
  
  @State("userForms") userForms: any;
  @Getter getUserForm: any;
  @Getter getRoot!: any;
  @Getter getTreeBrowserData: any;

  @Getter prevModalZIndex: any;
  @Mutation userFormIndex: any;
  @Mutation displayUserForm: any;
  @Mutation updatePrevModalZIndex: any;
  @Mutation makeActive: any;

  @Getter selectedUserForm!: any;
  @Getter selected!: any

  @Mutation updateSelect: any;
  @Mutation updateSelectedUserForm: any;

  make(modal: any): void {
    this.userFormIndex(modal);
    this.updatePrevModalZIndex();
    this.makeActive(this.prevModalZIndex);
    this.displayUserForm();
  }
  nodeWasClicked(node: any) {
    this.updateSelect(true);
    this.updateSelectedUserForm(node);
    this.make(node);
    console.log(this.selected)
    
    EventBus.$emit(
        "userFormClicked",
        this.selectedUserForm,
        this.selectedUserForm
      );
  }

  mounted() {
    console.log(this.getRoot);
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

hr {
  margin-block-start: 0em;
  margin-block-end: 0em;
}
.sidenav {
  height: 81%;
  width: 330px;
  position: fixed;
  z-index: 1;
  top: 5;
  left: 5;
  background-color: white;
  overflow-x: hidden;
  border: 2px solid grey;
}

.sideheader1 {
  top: 0%;
  width: 250px;
  background-color: rgb(142, 191, 231);
  margin-bottom: 8px;
}
.sideheader {
  height: 22px;
  text-align: left;
  padding: 0pc;
  background-color: rgb(142, 191, 231);
}
.left {
  left: 0;
  height: 100%;
  width: 40%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 20px;
}

.right {
  right: 0;
  background-color: #80888e;
  height: 100%;
  width:70%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 20px;
}
.container {
  width: 100%;
  max-height: 500px;
}
.mainbody,
.header,
.footer {
  padding: 5px;
}
.mainbody {
  margin-top: 46px;
  min-height: 150px;
  max-height: 388px;
  overflow: auto;
}
.header {
  height: 40px;
  border-bottom: 1px solid #eee;
  background-color: #ffffff;
  height: 40px;
  -webkit-border-top-left-radius: 5px;
  -webkit-border-top-right-radius: 5px;
  -moz-border-radius-topleft: 5px;
  -moz-border-radius-topright: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>

