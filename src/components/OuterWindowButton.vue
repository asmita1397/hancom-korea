<template>
  <div class="closeButton">
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
      <button class="ui-btn close" @click="closeWindow(userForm)">
        <svg viewBox="0 0 10 10">
          <polygon
            points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
          />
        </svg>
      </button>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";

@Component({})
export default class OuterWindowbutton extends Vue {
  @Prop() userForm!: object;
  @Mutation closeWindow!: any;

 
}
</script>



<style scoped>
.ui-btn {
  margin: 2px;
  background: #7e7ea666;
  border: 1px solid #7e7ea666;
}
.ui-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}
.ui-btn.close {
  background: #e81123;
}
.ui-btn svg path,
.ui-btn svg rect,
.ui-btn svg polygon {
  fill: white;
}
.ui-btn svg {
  width: 10px;
  height: 10px;
  stroke: white;
  stroke-width: 2px;
}
.closeButton {
  right: 10px;
  position: absolute;
  top: 5px;
}
</style>