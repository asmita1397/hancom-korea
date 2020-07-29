<template>
  <div>
    <div class="btn-group">
      <button class="button" default>Alphabetic</button>
      <button class="button">Categorized</button>
    </div>
    <table :class="getBlinkProperty?'table blink-me':'table'">
      <tr>
        <td>(Name)</td>
        <td>
          <input
            type="text"
            :value="selectedUserForm.name"
            @input="handleChangeInput($event,'name')"
          />
        </td>
      </tr>
      <tr>
        <td>Accelerator</td>
        <td>
          <input
            type="text"
            :value="selectedUserForm.accelerator"
            @input="handleChangeInput($event,'accelerator')"
          />
        </td>
      </tr>
      <tr>
        <td>AutoSize</td>
        <td>
          <select v-model="selectedUserForm.autoSize" @change="autoSizeChange">
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BackColor</td>
        <td>
          <select :value="selectedUserForm.backColor" @change="changeInput($event,'backColor')">
            <option v-for="(item,key) in backColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BackStyle</td>
        <select :value="selectedUserForm.backColor" @change="changeInput($event,'backColor')">
          <option v-for="(item,key) in backStyle" :key="key" :value="item">{{key}}</option>
        </select>
      </tr>
      <tr>
        <td>BorderColor</td>
        <td>
          <select :value="selectedUserForm.borderColor" @change="changeInput($event,'borderColor')">
            <option v-for="(item,key) in borderColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BorderStyle</td>
        <td>
          <select :value="selectedUserForm.border" @change="changeInput($event,'border')">
            <option v-for="(item,key) in borderStyle" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Caption</td>
        <td>
          <input
            type="text"
            :value="selectedUserForm.caption"
            @input="handleChangeInput($event,'caption')"
          />
        </td>
      </tr>
      <tr>
        <td>ControlTipText</td>
        <td>
          <input
            type="text"
            :value="selectedUserForm.title"
            @input="handleChangeInput($event,'title')"
          />
        </td>
      </tr>
      <tr>
        <td>Enabled</td>
        <td>
          <select
            v-model="selectedUserForm.enabled"
            @change="handleEnabled(selectedUserForm.enabled)"
          >
            <option selected :value="true">True</option>
            <option :value="false">False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Font</td>
        <td>
          <select :value="selectedUserForm.font" @change="changeInput($event,'font')">
            <option v-for="(value,key) in font" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ForeColor</td>
        <td>
          <select :value="selectedUserForm.foreColor" @change="changeInput($event,'foreColor')">
            <option v-for="(value,key) in foreColor" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Height</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.height  | sizeFilter"
            @change="validators.sizeValidateForControls($event,selectedUserForm,'height')"
            @keyup.enter="validators.sizeValidateForControlsForControls($event,selectedUserForm,'height')"
          />
        </td>
      </tr>
      <tr>
        <td>HelpContextId</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.helpContextId"
            @input="handleChangeInput($event,'helpContextId')"
          />
        </td>
      </tr>
      <tr>
        <td>Left</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.left  | sizeFilter"
            @change="validators.sizeValidateForControls($event,selectedUserForm,'left')"
            @keyup.enter="validators.sizeValidateForControls($event,selectedUserForm,'left')"
          />
        </td>
      </tr>
      <tr>
        <td>MouseIcon</td>
        <td>
          <input type="file" />
        </td>
      </tr>
      <tr>
        <td>MousePointer</td>
        <td>
          <select :value="selectedUserForm.cursor" @change="changeInput($event,'cursor')">
            <option v-for="(value,key) in mousePointer" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Picture</td>
        <td>
          <input type="file" />
        </td>
      </tr>
      <tr>
        <td>PicturePosition</td>
        <td>
          <select
            :value="selectedUserForm.picturePosition"
            @change="handleChangeInput($event,'specialEffect')"
          >
            <option v-for="(value,key) in picturePosition" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>SpecialEffect</td>
        <td>
          <select
            :value="selectedUserForm.specialEffect"
            @change="changeInput($event,'specialEffect')"
          >
            <option v-for="(value,key) in specialEffect" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>TabIndex</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.tabindex"
            @input="handleChangeInput($event,'tabindex')"
          />
        </td>
      </tr>
      <tr>
        <td>TabStop</td>
        <td>
          <select :value="selectedUserForm.tabStop" @change="handleChangeInput($event,'tabStop')">
            <option :value="false" selected>False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Tag</td>
        <td>
          <input type="text" :value="selectedUserForm.tag" @input="handleChangeInput($event,'tag')" />
        </td>
      </tr>
      <tr>
        <td>TextAlign</td>
        <td>
          <select value="selectedUserForm.textAlign" @change="changeInput($event,'textAlign')">
            <option v-for="(value,key) in textAlign" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Top</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.top  | sizeFilter"
            @change="validators.sizeValidateForControls($event,selectedUserForm,'top')"
            @keyup.enter="validators.sizeValidateForControls($event,selectedUserForm,'top')"
          />
        </td>
      </tr>
      <tr>
        <td>Visible</td>
        <td>
          <select :value="selectedUserForm.visible" @change="handleChangeInput($event,'visible')">
            <option :value="false">False</option>
            <option :value="true" selected>True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Width</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.width  | sizeFilter"
            @change="validators.sizeValidateForControls($event,selectedUserForm,'width')"
            @keyup.enter="validators.sizeValidateForControls($event,selectedUserForm,'width')"
          />
        </td>
      </tr>
      <tr>
        <td>WordWrap</td>
        <td>
          <select :v-model="selectedUserForm.wordWrap" @change="wordWrapChange($event)">
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import backColor from "../models/backColor.json";
import backStyle from "../models/backStyle.json";
import borderColor from "../models/borderColor.json";
import borderStyle from "../models/borderStyle.json";
import font from "../models/font.json";
import foreColor from "../models/foreColor.json";
import mousePointer from "../models/mousePointer.json";
import picturePosition from "../models/picturePosition.json";
import specialEffect from "../models/specialEffect.json";
import textAlign from "../models/textAlign.json";
/* import { validators } from "../validators/validator"; */
import { Mutation, Getter } from "vuex-class";
@Component({
  filters: {
    sizeFilter(value: any) {
      return parseInt(value, 10);
    }
  }
})
export default class UserFormTable extends Vue {
  @Prop() selectedUserForm: any;

  @Getter getBlinkProperty!: any;
  /* validators: object = validators; */
  backColor: object = backColor;
  borderColor: object = borderColor;
  borderStyle: object = borderStyle;
  backStyle: object = backStyle;
  font: object = font;
  foreColor: object = foreColor;
  mousePointer: object = mousePointer;
  specialEffect: object = specialEffect;
  picturePosition: object = picturePosition;
  textAlign: object = textAlign;

  /* @Getter selectedUserForm!: any */
  @Mutation updateControl!: any;
  @Mutation updateControlStyle!: any;

  mounted() {
    console.log();
  }

  handleChangeInput(e: any, styleName: string) {
    console.log("inputd", e.target.value);
    this.updateControl({ styleValue: e.target.value, styleName: styleName });
  }
  changeInput(e: any, styleName: string) {
    this.updateControlStyle({
      styleValue: e.target.value,
      styleName: styleName
    });
  }
  autoSizeChange(e: any) {
    if (e.target.value) {
      this.selectedUserForm.overflowWrap = "break-word";
    } else {
      this.selectedUserForm.overflowWrap = "normal";
    }
  }
  handleEnabled(data: boolean) {
    if (data) {
      this.selectedUserForm.foreColor = "black";
    } else {
      this.selectedUserForm.foreColor = "#DCDCDC";
    }
  }
  wordWrapChange(event: any) {
    if (event.target.value === "true") {
      this.selectedUserForm.wordWrap = "break-word";
      this.selectedUserForm.whiteSpace = "normal";
    } else {
      this.selectedUserForm.wordWrap = "normal";
      this.selectedUserForm.whiteSpace = "nowrap";
    }
  }
}
</script>




<style>
.node {
  text-align: left;
}
table,
th,
td {
  /* table-layout: fixed; */
  margin-right: 0%;
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  color: black;
}
th,
td {
  text-align: left;
  font-size: 11px;
}
th {
  width: 120%;
  font-size: 12px;
}
.form-control {
  float: left;
  width: 280px;
  cursor: pointer;
  background-color: rgb(190, 185, 185);
  /* border: 6px solid grey; */
}
label {
  float: left;
}
select {
  /* width: 100%; */
  width: 166px;
  padding: 1px 2px;
}

/* Must be added as style for the new data */
.btn-group .button {
  border: none;
  color: black;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  /* float: left; */
}
.btn-group .button {
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
  /* float: left; */
}
.blink-me {
  animation-name: toggle;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
}

@keyframes toggle {
  from {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  to {
    visibility: visible;
  }
}
</style>