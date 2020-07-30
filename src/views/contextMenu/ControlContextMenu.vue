<template>
  <div>
    <div class="outercontext-div">
      <div class="wrapper-context">
        <button class="wrapper1-context" @click="cutControl">
          <i style="font-size:15px" class="fa">&#xf0c4;</i>
          <span class="iset-context">
            Cu<u>t</u>
          </span>
        </button>
        <button class="wrapper1-context" @click="copyControl">
          <i style="font-size:15px" class="fa">&#xf0c5;</i>
          <span class="iset-context">
            <u>C</u>opy
          </span>
        </button>
        <button class="wrapper1-context" @click="pastedControl" >
          <i style="font-size:15px;" class="fa">&#xf0ea;</i>
          <span class="iset-context" :class="Object.keys(getCuttedControlList).length !== 0?'':'disabled'">
            <u>P</u>aste
          </span>
        </button>
        <button class="wrapper1-context" @click="deleteControl">
          <div></div>
          <span class="set-context">
            <u>D</u>elete
          </span>
        </button>
        <div>
          <hr />
        </div>
        <button class="wrapper1-context" @click="blinkControl">
          <i style="font-size:15px" class="fa">&#xf187;</i>
          <span class="iset-context">
            Prope<u>r</u>ties
          </span>
        </button>
        <button class="wrapper1-context">
          <div>
            <i style="font-size:15px" class="fa">&#xf1ea;</i>
          </div>
          <span class="set-context">
            View C<u>o</u>de
          </span>
        </button>
        <div>
          <hr />
        </div>
        <button class="wrapper1-context wrapper21">
          <div></div>
          <ul class="set-context top-level-menu">
            <li>
              <a href="#">
                <u>A</u>lign
              </a>
              <ul class="third-level-menu">
                <li class="wrapper1-context">
                  <div>
                    <i style="font-size:13px" class="fa third">&#xf036;</i>
                  </div>
                  <a href="#">
                    <u>L</u>efts
                  </a>
                </li>
                <li class="wrapper1-context">
                  <div>
                    <i style="font-size:13px" class="fa third">&#xf037;</i>
                  </div>
                  <a href="#">
                    <u>C</u>enters
                  </a>
                </li>
                <li class="wrapper1-context">
                  <div>
                    <i style="font-size:13px" class="fa third">&#xf038;</i>
                  </div>
                  <a href="#">
                    <u>R</u>ights
                  </a>
                </li>
                <hr />
                <li class="wrapper1-context">
                  <div>
                    <i style="font-size:13px" class="fa third">&#xf161;</i>
                  </div>
                  <a href="#">
                    <u>T</u>ops
                  </a>
                </li>
                <li class="wrapper1-context">
                  <div>
                    <i style="font-size:13px" class="fa third">&#xf039;</i>
                  </div>
                  <a href="#">
                    <u>M</u>iddles
                  </a>
                </li>
                <li class="wrapper1-context">
                  <div>
                    <i style="font-size:13px" class="fa third">&#xf160;</i>
                  </div>
                  <a href="#">
                    <u>B</u>ottoms
                  </a>
                </li>
                <hr />
                <li class="wrapper1-context">
                  <div>
                    <i style="font-size:13px" class="fa third">&#xf00a;</i>
                  </div>
                  <a href="#" style="padding-left:15px;">
                    To<u>G</u>rids
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="triangle-right"></div>
        </button>
        <button class="wrapper1-context wrapper21">
          <div></div>
          <ul class="top-level-menu1 set-context">
            <li>
              <a href="#">
                <u>M</u>ake Same Size
              </a>
              <ul class="third-level-menu">
                <li class="wrapper1-context">
                  <div>
                    <i style="font-size:13px" class="fa third">&#xf035;</i>
                  </div>
                  <a href="#">
                    <u>W</u>idth
                  </a>
                </li>
                <li class="wrapper1-context">
                  <div>
                    <i style="font-size:13px" class="fa third">&#xf034;</i>
                  </div>
                  <a href="#">
                    <u>H</u>eight
                  </a>
                </li>
                <li class="wrapper1-context">
                  <div>
                    <i style="font-size:13px" class="fa third">&#xf047;</i>
                  </div>
                  <a href="#">
                    <u>B</u>oth
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="triangle-right"></div>
        </button>
        <div>
          <hr />
        </div>
        <button class="wrapper1-context">
          <div>
            <i style="font-size:15px" class="fa">&#xf247;</i>
          </div>
          <span class="set-context">
            <u>G</u>roup
          </span>
        </button>
        <button class="wrapper1-context">
          <div>
            <i style="font-size:15px" class="fa">&#xf0c5;</i>
          </div>
          <span class="set-context">
            Bring<u>F</u>orward
          </span>
        </button>
        <button class="wrapper1-context">
          <div>
            <i style="font-size:15px" class="fa">&#xf0c5;</i>
          </div>
          <span class="set-context">
            Send Back<u>w</u>ard
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Mutation, Getter } from "vuex-class";

@Component({
  components: {
   
  }
})
export default class ControlContextMenu extends Vue {
  @Prop() control!: any;
  @Prop() userFormKey!: any;
  @Prop() controlKey: string;
  @Prop() viewMenu: boolean;

  @Getter getCuttedControlList!: any;
  
  @Mutation cutSelectedControl!: Function;
  @Mutation cutControlList!: Function;
  @Mutation updateCuttedControlList!: Function;
  @Mutation updateContextMenuType!: Function;
  @Mutation updateBlinkProperty!: Function;
  @Mutation pasteControl!: Function
  @Mutation emptySelectAllControls!: Function
 
cutControl(e: any) {
    this.emptySelectAllControls()
   
     this.$emit('closeMenu')
    this.updateContextMenuType("cut");
    this.updateCuttedControlList();
    this.cutControlList({
      controlKey: this.controlKey,
      control: this.control,
      userFormKey: this.userFormKey
    });
    this.cutSelectedControl({
      userFormKey: this.userFormKey,
      controlList: this.getCuttedControlList
    });
    console.log("list", this.getCuttedControlList);
  }
  pastedControl() {
    this.$emit('closeMenu')
   
    this.pasteControl({
        userFormKey: this.userFormKey,
        controlList: this.getCuttedControlList
      });
  }
  blinkControl() {
     this.$emit('closeMenu')
    this.updateBlinkProperty(true);
   
  }
  copyControl() {
     this.$emit('closeMenu')
     
    this.emptySelectAllControls()
    this.updateContextMenuType("copy");
    this.updateCuttedControlList();
    this.cutControlList({
      controlKey: this.controlKey,
      control: this.control,
      userFormKey: this.userFormKey
    });
  }

  deleteControl() {
     this.$emit('closeMenu')
    this.updateCuttedControlList();
    this.cutControlList({
      controlKey: this.controlKey,
      control: this.control,
      userFormKey: this.userFormKey
    });
    this.cutSelectedControl({
      userFormKey: this.userFormKey,
      controlList: this.getCuttedControlList
    });
  }

} 
</script>

<style scoped>
.outercontext-div {
  border: 0.3px solid black;
  box-shadow: 2px 2px lightgray;
  width: 150px;
  height: auto;
  font-size: 13px;
}

.wrapper-context {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
}
.wrapper1-context {
  display: grid;
  grid-template-columns: 10% 90%;
  border: 0.3px solid white;
  background: white;
  height: 24px;
  padding-top: 5px;
  outline: none;
}
.wrapper1-context:hover {
  background-color: rgb(155, 215, 255);
  border: 0.3px solid rgb(0, 153, 255);
}
.wrapper21 {
  display: grid;
  grid-template-columns: 10% 85% 5%;
}
.triangle-right {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-left: 5px solid black;
  border-bottom: 5px solid transparent;
  padding-top: 2px;
}
.iset-context {
  text-align: left;
  padding-left: 15px;
  font-size: 12px;
}
.set-context {
  text-align: left;
  padding-left: 15px;
  font-size: 12px;
}
hr {
  margin: 0px;
}
ul {
  list-style-type: none;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}

/* testing submenu */

.top-level-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.top-level-menu > li {
  position: absolute;
  float: left;
  height: 30px;
  width: 143px;
}

.top-level-menu li:hover > ul {
  /* On hover, display the next level's menu */
  display: inline;
}

/* Menu Link Styles */

.top-level-menu a /* Apply to all links inside the multi-level menu */ {
  font-size: 12px;
  color: black;
  text-decoration: none;
  padding: 0 0 0 10px;
  padding-left: 15px;

  /* Make the link cover the entire list item-container */
  display: block;
}
.top-level-menu a:hover {
  color: black;
}
.third-level-menu {
  position: absolute;
  top: 0;
  right: -100px;
  width: 110px;
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;
  border: 1px solid black;
  background-color: white;
}

.third-level-menu > li {
  height: 20px;
  padding-top: 5px;
  /* margin: 1px; */
}
.third-level-menu > li:hover {
  background-color: rgb(155, 215, 255);
  border: 0.2px solid rgb(0, 153, 255);
}
.top-level-menu1 {
  list-style: none;
  padding: 0;
  margin: 0;
}

.top-level-menu1 > li {
  position: absolute;
  float: left;
  height: 30px;
  width: 143px;
}

.top-level-menu1 li:hover > ul {
  /* On hover, display the next level's menu */
  display: inline;
}

/* Menu Link Styles */

.top-level-menu1 a /* Apply to all links inside the multi-level menu */ {
  font-size: 12px;
  color: black;
  text-decoration: none;
  padding: 0 0 0 10px;
  padding-left: 15px;

  /* Make the link cover the entire list item-container */
  display: block;
}
.top-level-menu1 a:hover {
  color: black;
}
.third {
  padding-left: 5px;
}
.third > a {
  padding-left: 10px;
}
.disabled {
  /* pointer-events:none;  */
  opacity: 0.5;
}
</style>