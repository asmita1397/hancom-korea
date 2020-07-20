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
          <input type="text" :value="getSelectedUserForm.name"  @input="e=>handleChangeInput(e,'name')"/>
        </td>
      </tr>
      <tr>
        <td>BackColor</td>
        <td>
          <select :value="getSelectedUserForm.innerWindowStyle.container.backgroundColor" @change="ChangeInput($event,'backgroundColor')" >
            <option v-for="(item,key) in backColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BorderColor</td>
        <td>
          <select :value="getSelectedUserForm.innerWindowStyle.container.borderColor" @change="ChangeInput($event,'borderColor')">
            <option v-for="(item,key) in borderColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BorderStyle</td>
        <td>
          <select :value="getSelectedUserForm.innerWindowStyle.container.border" @change="ChangeInput($event,'border')">
            <option v-for="(item,key) in borderStyle" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Caption</td>
        <td>
          <input type="text" :value="getSelectedUserForm.caption"   @input="e=>handleChangeInput(e,'caption')"/>
        </td>
      </tr>
      <tr>
        <td>Cycle</td>
        <td>
          <select :value="getSelectedUserForm.cycle" @change="handleChangeInput($event,'cycle')">
            <option v-for="(item,key) in cycle" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>DrawBuffer</td>
        <td>
          <input
            type="number"
            v-model="getSelectedUserForm.drawBuffer"
            @change="drawBufferValidate(getSelectedUserForm.drawBuffer)"
          />
        </td>
      </tr>
      <tr>
        <td>Enabled</td>
        <td>
          <select :value="getSelectedUserForm.enabled" @change="handleChangeInput($event,'enabled')">
            <option :value="true" selected>True</option>
            <option :value="false">False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Font</td>
        <td>
          <select :value="getSelectedUserForm.innerWindowStyle.container.fontFamily" @change="ChangeInput($event,'fontFamily')">
            <option v-for="(item,key) in font" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ForeColor</td>
        <td>
          <select :value="getSelectedUserForm.innerWindowStyle.container.color" @change="ChangeInput($event,'color')">
            <option v-for="(item,key) in foreColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Height</td>
        <td>
          <input
            type="number"
            :value="getSelectedUserForm.innerWindowStyle.container.height | sizeFilter"
            @change="validators.sizeValidate($event,getSelectedUserForm,'height')"
            @keyup.enter="validators.sizeValidate($event,getSelectedUserForm,'height')"
          />
        </td>
      </tr>
      <tr>
        <td>HelpContextId</td>
        <td>
          <input
            type="number"
            v-model="getSelectedUserForm.helpContextId"
           @change="helpContextIdValidate(selectedUserForm.helpContextId)" 
          />
          
        </td>
      </tr>
      <tr>
        <td>KeepScrollsBarsVisible</td>
        <td>
          <select :value="getSelectedUserForm.keepScrollsBarsVisible" @change="handleChangeInput($event,'keepScrollsBarsVisible')">
            <option v-for="(item,key) in keepScrollsBarsVisible" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Left</td>
        <td>
          <input
            type="number"
            :value="getSelectedUserForm.innerWindowStyle.container.left"
            @change="validators.sizeValidate($event,getSelectedUserForm,'left')"
            @keyup.enter="validators.sizeValidate($event,getSelectedUserForm,'left')"
          />
        </td>
      </tr>
      <tr>
        <td>MouseIcon</td>
        <td>
          <input type="file" accept=".ico" />
        </td>
      </tr>
      <tr>
        <td>MousePointer</td>
        <td>
          <select :value="getSelectedUserForm.innerWindowStyle.container.cursor" @change="ChangeInput($event,'cursor')"> 
            <option v-for="(item,key) in mousePointer" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Picture</td>
        <td>
          <input type="file" accept=".png, .jpg, .jpeg, .ico" />
        </td>
      </tr>
      <tr>
        <td>PictureAlignment</td>
        <td>
          <select :value="getSelectedUserForm.pictureAlignment" @change="handleChangeInput($event,'pictureAlignment')">
            <option v-for="(item,key) in pictureAlignment" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>PictureSizeMode</td>
        <td>
          <select :value="getSelectedUserForm.pictureSizeMode" @change="handleChangeInput($event,'pictureSizeMode')">
            <option v-for="(item,key) in pictureSizeMode" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>PictureTiling</td>
        <td>
          <select :value="getSelectedUserForm.pictureTiling" @change="handleChangeInput($event,'pictureTiling')">
            <option :value="false" selected>False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>RightToLeft</td>
        <td>
          <select
            v-model="getSelectedUserForm.rightToLeft"
            @change="rightToLeft(getSelectedUserForm.rightToLeft)"
          >
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ScrollBars</td>
        <td>
          <select :value="getSelectedUserForm.scrollBars" @change="handleChangeInput($event,'scrollBars')">
            <option v-for="(item,key) in scrollBars" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ScrollHeight</td>
        <td>
          <input type="number" :value="getSelectedUserForm.scrollHeight"   @input="e=>handleChangeInput(e,'scrollHeight')"/>
        </td>
      </tr>
      <tr>
        <td>ScrollLeft</td>
        <td>
          <input type="number" :value="getSelectedUserForm.scrollLeft"  @input="e=>handleChangeInput(e,'scrollLeft')" />
        </td>
      </tr>
      <tr>
        <td>ScrollTop</td>
        <td>
          <input type="number" :value="getSelectedUserForm.scrollTop"   @input="e=>handleChangeInput(e,'scrollTop')"/>
        </td>
      </tr>

      <tr>
        <td>ScrollWidth</td>
        <td>
          <input type="number" :value="getSelectedUserForm.scrollWidth"   @input="e=>handleChangeInput(e,'scrollWidth')"/>
        </td>
      </tr>
      <tr>
        <td>ShowModal</td>
        <td>
          <select :value="getSelectedUserForm.showModal" @change="handleChangeInput($event,'showModal')">
            <option :value="true" selected>True</option>
            <option :value="false">False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>SpecialEffect</td>
        <td>
          <select :value="getSelectedUserForm.innerWindowStyle.container.boxShadow" @change="ChangeInput($event,'boxShadow')">
            <option v-for="(item,key) in specialEffect" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>StartUpPosition</td>
        <td>
          <select :value="getSelectedUserForm.startUpPosition" @change="handleChangeInput($event,'startUpPosition')">
            <option v-for="(item,key) in startUpPosition" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Tag</td>
        <td>
          <input type="text" :value="getSelectedUserForm.tag"  @input="e=>handleChangeInput(e,'tag')"/>
        </td>
      </tr>
      <tr>
        <td>Top</td>
        <td>
          <input
            type="number"
            :value="getSelectedUserForm.innerWindowStyle.container.top"
            @change="validators.sizeValidate($event,getSelectedUserForm,'top')"
            @keyup.enter="validators.sizeValidate($event,getSelectedUserForm,'top')"
          />
        </td>
      </tr>
      <tr>
        <td>WhatsThisButton</td>
        <td>
          <select
            v-model="getSelectedUserForm.whatsThisButton"
            @change="handleWhatsThis(getSelectedUserForm.whatsThisButton)"
          >
            <option :value="true">True</option>
            <option :value="false" selected>False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>WhatsThisHelp</td>
        <td>
          <select :value="getSelectedUserForm.whatsThisButton" @change="handleChangeInput($event,'whatsThisButton')">
            <option :value="true">True</option>
            <option :value="false" selected>False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Width</td>
        <td>
          <input
            type="number"
            :value="getSelectedUserForm.innerWindowStyle.container.width | sizeFilter"
            @change="validators.sizeValidate($event,getSelectedUserForm,'width')"
            @keyup.enter="validators.sizeValidate($event,getSelectedUserForm,'width')"
          />
        </td>
      </tr>
      <tr>
        <td>Zoom</td>
        <td>
          <input
            type="number"
            :value="getSelectedUserForm.innerWindowStyle.container.zoom | sizeFilter"
            @change="validators.zoomValidate($event,getSelectedUserForm,'zoom')"
            @keyup.enter="validators.zoomValidate($event,getSelectedUserForm,'zoom')"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import backColor from "../models/backColor.json";
import borderColor from "../models/borderColor.json";
import borderStyle from "../models/borderStyle.json";
import cycle from "../models/cycle.json";
import font from "../models/font.json";
import foreColor from "../models/foreColor.json";
import keepScrollsBarsVisible from "../models/keepScrollsBarsVisible.json";
import mousePointer from "../models/mousePointer.json";
import pictureAlignment from "../models/pictureAlignment.json";
import scrollBars from "../models/scrollBars.json";
import specialEffect from "../models/specialEffect.json";
import startUpPosition from "../models/startUpPosition.json";
import pictureSizeMode from "../models/pictureSizeMode.json";
import { validators } from "../validators/validator.js";
import { Getter, Mutation } from 'vuex-class';
@Component({
  
  filters:{
    sizeFilter(value: any) {
      return parseInt(value, 10)
    }
  }
})


export default class UserFormTable extends Vue {
  @Prop() selectedUserForm: any;
  validators: object = validators;
  pictureSizeMode: object = pictureSizeMode;
  backColor: object = backColor;
  borderColor: object = borderColor;
  borderStyle: object = borderStyle;
  cycle: object = cycle;
  font: object = font;
  foreColor: object = foreColor;
  keepScrollsBarsVisible: object = keepScrollsBarsVisible;
  mousePointer: object = mousePointer;
  pictureAlignment: object = pictureAlignment;
  scrollBars: object = scrollBars;
  specialEffect: object = specialEffect;
  startUpPosition: object = startUpPosition;
  previousDrawBuffer = this.selectedUserForm.drawBuffer;
  previoushelpContextId = this.selectedUserForm.helpContextId;


 
   @Getter getSelectedUserForm!: any
   @Mutation updateStyle!: Function
   @Mutation updatedInnerWindowStyle!: Function

   mounted()
   {
     console.log(this.getSelectedUserForm)
   }

handleChangeInput(e: any, styleName: string)
{
  this.updateStyle({styleValue:e.target.value,styleName:styleName})
  
}
ChangeInput(e: any, styleName: string)
{
  this.updatedInnerWindowStyle({styleValue:e.target.value,styleName:styleName})
  
}


  drawBufferValidate(data: any) {
    if (data > 16000 && data <= 1048576) {
      this.getSelectedUserForm.drawBuffer = data;
    } else {
      this.getSelectedUserForm.drawBuffer = this.previousDrawBuffer;
    }
  }

  helpContextIdValidate(data: any): void {
    if (data > 2147000000) {
      this.getSelectedUserForm.helpContextId = this.previoushelpContextId;
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
  margin-right: 0%;
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  font-size: 11px;
  font-display: initial;
  color: black;
}
th,
td {
  text-align: left;
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
  width: 166px;
  padding: 1px 2px;
}
input {
  width: 158px;
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