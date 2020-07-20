<template>
  <div>
    <div class="btn-group">
      <button class="button" default>Alphabetic</button>
      <button class="button">Categorized</button>
    </div>
    <table class="table">
      <tr>
        <td>(Name)</td>
        <td>
          <input type="text" :value="getSelectedControl.name"   @input="handleChangeInput($event,'name')"/>
        </td>
      </tr>
      <tr>
        <td>Accelerator</td>
        <td>
          <input type="text" :value="getSelectedControl.accelerator"  @input="handleChangeInput($event,'accelerator')"/>
        </td>
      </tr>
      <tr>
        <td>AutoSize</td>
        <td>
          <select :value="getSelectedControl.autoSize" @change="handleChangeInput($event,'autoSize')">
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BackColor</td>
        <td>
          <select :value="getSelectedControl.style.backgroundColor"  @change="changeInput($event,'backgroundColor')">
            <option v-for="(item,key) in backColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BackStyle</td>
        <select :value="getSelectedControl.style.backgroundColor"  @change="changeInput($event,'backgroundColor')">
          <option v-for="(item,key) in backStyle" :key="key" :value="item">{{key}}</option>
        </select>
      </tr>
      <tr>
        <td>Caption</td>
        <td>
          <input type="text" :value="getSelectedControl.caption"   @input="handleChangeInput($event,'caption')"/>
        </td>
      </tr>
      <tr>
        <td>ControlTipText</td>
        <td>
          <input type="text" :value="getSelectedControl.title"  @input="handleChangeInput($event,'title')"/>
        </td>
      </tr>
      <tr>
        <td>Default</td>
        <td>
          <select :value="getSelectedControl.default" @change="handleChangeInput($event,'default')">
            <option selected>true</option>
            <option>false</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Enabled</td>
        <td>
          <select :value="getSelectedControl.enabled" @change="handleChangeInput($event,'enabled')">
            <option selected :value="true">True</option>
            <option :value="false">False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Font</td>
        <td>
          <select :value="getSelectedControl.style.fontFamily" @change="changeInput($event,'fontFamily')">
            <option v-for="(value,key) in font" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ForeColor</td>
        <td>
          <select :value="getSelectedControl.style.color" @change="changeInput($event,'color')">
            <option v-for="(value,key) in foreColor" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Height</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.style.height | sizeFilter"
            @change="validators.sizeValidateForControls($event,getSelectedControl,'height')"
            @keyup.enter="validators.sizeValidateForControls($event,getSelectedControl,'height')"
          />
        </td>
      </tr>
      <tr>
        <td>HelpContextId</td>
        <td>
          <input type="number" :value="getSelectedControl.helpContextId"  @input="handleChangeInput($event,'helpContextId')"/>
        </td>
      </tr>
      <tr>
        <td>Left</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.style.left | sizeFilter"
            @change="validators.sizeValidateForControls($event,getSelectedControl,'left')"
            @keyup.enter="validators.sizeValidateForControls($event,getSelectedControl,'left')"
          />
        </td>
      </tr>
      <tr>
        <td>Locked</td>
        <td>
          <select :value="getSelectedControl.locked" @change="handleChangeInput($event,'locked')">
            <option selected>True</option>
            <option>False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>MouseIcon</td>
        <td>
          <input type="file"  />
        </td>
      </tr>
      <tr>
        <td>MousePointer</td>
        <td>
          <select :value="getSelectedControl.style.cursor" @change="changeInput($event,'cursor')">
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
          <select :value="getSelectedControl.picturePosition" @change="handleChangeInput($event,'picturePosition')">
            <option v-for="(value,key) in picturePosition" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>TabIndex</td>
        <td>
          <input type="number" :value="getSelectedControl.tabindex"   @input="handleChangeInput($event,'tabindex')"/>
        </td>
      </tr>
      <tr>
        <td>TabStop</td>
        <td>
          <select :value="getSelectedControl.tabStop" @change="handleChangeInput($event,'tabStop')">
            <option :value="false" selected>False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Tag</td>
        <td>
          <input type="text" :value="getSelectedControl.tag"  @input="handleChangeInput($event,'tag')" />
        </td>
      </tr>
      <tr>
        <td>TakeFocusOnClick</td>
        <td>
          <select :value="getSelectedControl.takeFocusOnClick" @change="handleChangeInput($event,'takeFocusOnClick')">
            <option selected>True</option>
            <option>False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Top</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.style.top | sizeFilter"
            @change="validators.sizeValidateForControls($event,getSelectedControl,'top')"
            @keyup.enter="validators.sizeValidateForControls($event,getSelectedControl,'top')"
          />
        </td>
      </tr>
      <tr>
        <td>Visible</td>
        <td>
          <select :value="getSelectedControl.visible" @change="handleChangeInput($event,'visible')">
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
            :value="getSelectedControl.style.width | sizeFilter"
            @change="validators.sizeValidateForControls($event,getSelectedControl,'width')"
            @keyup.enter="validators.sizeValidateForControls($event,getSelectedControl,'width')"
          />
        </td>
      </tr>
      <tr>
        <td>WordWrap</td>
        <td>
          <select ::value="getSelectedControl.wordWrap" @change="handleChangeInput($event,'wordWrap')">
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
import font from "../models/font.json";
import foreColor from "../models/foreColor.json";
import mousePointer from "../models/mousePointer.json";
import picturePosition from "../models/picturePosition.json";
import specialEffect from "../models/specialEffect.json";
import textAlign from "../models/textAlign.json";
import { validators } from "../validators/validator";
import { Getter, Mutation } from "vuex-class";
@Component({
  filters: {
    sizeFilter(value: any) {
      return parseInt(value, 10);
    }
  }
})
export default class UserFormTable extends Vue {
  @Prop() selectedUserForm: any;
  validators: object = validators;

  backColor: object = backColor;
  backStyle: object = backStyle;
  font: object = font;
  foreColor: object = foreColor;
  mousePointer: object = mousePointer;
  specialEffect: object = specialEffect;
  picturePosition: object = picturePosition;
  textAlign: object = textAlign;

  @Getter getSelectedControl!: any;
  @Mutation updateControl!: any;
  @Mutation updateControlStyle!: any;

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

  
}
</script>

<style scoped>
table,
td {
  margin-right: 0%;
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  font-size: 11px;
  padding: none;
  color: black;
}

td {
  text-align: left;
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
  width: 100%;
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
</style>