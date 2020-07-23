<template>
  <div>
    <div class="firstrow">
      <div class="ui-titlebar">
        <div class="ui-titletext">Visual Basic for Applications - Book1</div>
        <div class="ui-titlecontrols">
          <button class="ui-btn minimize">
            <svg x="0px" y="0px" viewBox="0 0 10.2 1">
              <rect x="0" y="50%" width="10.2" height="1" />
            </svg>
          </button>
          <button class="ui-btn maximize">
            <svg viewBox="0 0 10 10">
              <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z" />
            </svg>
          </button>
          <button class="ui-btn close">
            <svg viewBox="0 0 10 10">
              <polygon
                points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="secondrow">
      <i style="float:left" class="material-icons">&#xe5d4;</i>
      <div id="menu-bar">
        <ul class="main-menu">
          <li>File</li>
          <li>Edit</li>
          <li>
            View
            <ul>
              <li>Code</li>
              <li>object</li>
              <li class="separator"></li>
              <li>Objet Browser</li>
              <li class="separator"></li>
              <li>Immediate Window</li>
              <li>Locals Window</li>
              <li>Watch Window</li>
              <li>Call Stack</li>
              <li class="separator"></li>
              <li>Project Explorer</li>
              <li>Properties Window</li>
              <li class="separator"></li>
              <li>ToolBox</li>
              <li>Tab Order</li>
              <li>Microscoft Excel</li>
            </ul>
          </li>
          <li>
            Insert
            <ul>
              <li>Procedure</li>
              <li @click="handleAddUserForm">Userform</li>
              <li>Module</li>
              <li>class Module</li>
              <li class="separator"></li>
              <li>File</li>
            </ul>
          </li>
          <li>Format</li>
          <li>Debug</li>
          <li>Run</li>
          <li>Tools</li>
          <li>Add-Ins</li>
          <li>Window</li>
          <li>Help</li>
        </ul>
      </div>
    </div>

    <div class="thirdrow">
      <i class="material-icons">&#xe5d4;</i>
      <i style="font-size:17px" class="fa">&#xf1c3;</i>
      <i style="font-size:17px" class="fa">&#xf0c7;</i>
      <i style="font-size:17px" class="fa">&#xf0c4;</i>
      <i style="font-size:17px" class="fa">&#xf0c5;</i>
      <i style="font-size:17px" class="fa">&#xf0ea;</i>
      <i style="font-size:17px" class="fa">&#xf0e2;</i>
      <i style="font-size:17px" class="fa">&#xf01e;</i>
      <i style="font-size:15px" class="fa">&#xf04b;</i>
      <i style="font-size:17px" class="fa">&#xf28c;</i>
      <i style="font-size:17px" class="fa">&#xf04d;</i>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation, Getter } from "vuex-class";
import { EventBus } from "./event-bus";
import { UserFormEntity } from "../entities/UserForm";

@Component({})
export default class Header extends Vue {
 
  @Getter prevModalZIndex!: any;
  @Getter getUseFormCount!: any;
  @Mutation incrementuserFormCount!: any;

  
  @Mutation addtreeBrowserData!: Function;
  @Mutation updatePrevModalZIndex!: any;

  handleAddUserForm(): void {
    this.incrementuserFormCount();
    this.updatePrevModalZIndex();

    const getUserForm = new UserFormEntity()
    const newUserForm = {
      ...getUserForm,
      property: {
        ...getUserForm.property,
        name: "UserForm" + (this.getUseFormCount + 1),
        type: "UserForm",
        outerWindowZIndex: this.prevModalZIndex.toString()
      }
    };

    this.addtreeBrowserData(newUserForm);
  }
  
}
</script>

<style scoped>
.body {
  width: 100%;
}
.tablink {
  background-color: rgba(240, 234, 234, 0.877);
  color: rgb(17, 17, 17);
  padding: 5px;
  cursor: pointer;
  font-size: 12px;
  border: none;
  float: left;
}

.tablink:hover {
  background-color: #4dbce0;
}

.firstrow {
  font-size: 15px;
}
.secondrow {
  border: 1px transparent;
  /* color: rgba(194, 189, 189, 0.616); */
  padding: 5px;
  background-color: rgba(240, 234, 234, 0.877);
  height: 20px;
}
.buttons {
  float: right;
  line-height: normal;
}
.min .max .close1 {
  width: 40px;
}
.close1:hover {
  background-color: red;
}
.fa {
  padding: 3px;
  margin: 2px;
}
.material-icons {
  size: 15px;
}
i:hover {
  background-color: #4dbce0;
  cursor: default;
}

.ui-titlebar {
  display: flex;
  width: 100%;
  height: 32px;
  background: #0072c6;
  user-select: none;
  cursor: default;
}
.ui-titleicon {
  flex-grow: 1;
  max-width: 32px;
  max-height: 32px;
}
.ui-titletext {
  flex-grow: 2;
  max-height: 32px;
  width: auto;
  font: 12px/32px "Segoe UI", Arial, sans-serif;
  color: #fff;
  text-indent: 10px;
}
.ui-titlecontrols {
  max-width: 144px;
  max-height: 32px;
  flex-grow: 1;
}
.ui-btn {
  margin: 0;
  width: 48px;
  height: 32px;
  border: 0;
  outline: 0;
  background: transparent;
}
.ui-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}
.ui-btn.close:hover {
  background: #e81123;
}
.ui-btn svg path,
.ui-btn svg rect,
.ui-btn svg polygon {
  fill: #fff;
}
.ui-btn svg {
  width: 10px;
  height: 10px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.tablink:hover .dropdown-content {
  display: block;
}
.dropdown {
  position: relative;
  display: inline-block;
}

/* .tablink:hover .dropbtn {background-color: #3e8e41;} */
</style>