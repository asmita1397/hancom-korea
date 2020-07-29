<template>
  <div v-if="noDisplay===false">
    <div>
      <div class="sideheader">
        <span class="sideheader1">
          Properties -  
          <!--  {{this.selectedUserForm && this.selectedUserForm.property.name}} -->
          <button style="float:right" v-on:click="noDisplayTable">
            <b>X</b>
          </button>
        </span>
      </div>
    </div>
    <div class="form-group">
      <label for="userForm"></label>

       <select
        class="form-control"
        name="selectedUserForm"
        id="selectedUserForm"
        v-model="selectedOption"
        v-if="selectedUserForm"
        @change="handleSelectedOption(selectedUserForm,selectedOption)"
      >
        <option
          :value="selectedUserForm"
          :selected="true"
        >{{ selectedUserForm.property.name }} {{selectedUserForm.property.type}}</option>
        <option v-for="control in selectedUserForm.controls" :value="control" :key="control.id">
          <b>{{ control.name }} {{control.type}}</b>
        </option>
      </select>

      <UserFormTable
        v-if="selectedOption.property?selectedOption.property.type==='UserForm':null"
        :selectedUserForm="selectedUserForm"
      />
      <LabelControlTable v-if="selectedOption.type==='Label' " :selectedUserForm="selectedOption" />
      <CommandButtonControl
        v-if="selectedOption.type==='CommandButton'"
        :selectedUserForm="selectedOption"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";
import { EventBus } from "./event-bus";
import UserFormTable from "./UserFormTable.vue";
import LabelControlTable from "./LabelControlTable.vue";
import CommandButtonControl from "./CommandButtonControl.vue";
@Component({
  components: { UserFormTable, LabelControlTable, CommandButtonControl }
})
export default class UserFormPropertiesList extends Vue {
  @Getter getControlIndex!: any;
 

  selectedUserForm: object;
  selectedOption = {};
  userFormKey: string;
  noDisplay = false;
  @Mutation controlIndex!: any;

  mounted() {
    EventBus.$on("userFormClicked", (userForm: object, control: object) => {
    /*   console.log("-------", control, userForm); */
      this.selectedUserForm = userForm;
      this.selectedOption = control;
    });
   /*  console.log("====", this.selectedOption); */
  }

  handleSelectedOption(selectedUserForm: any, selectedOption: any) {
    this.controlIndex(this.selectedOption);
   /*  console.log(this.getControlIndex); */
    EventBus.$emit("selectedControlOption", selectedUserForm, selectedOption);
  }

  noDisplayTable() {
    this.noDisplay = true;
  }
}
</script>


<style scoped>
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
.form-control {
  float: left;
  width: 100%;
  cursor: pointer;
  background-color: white;
}
</style>