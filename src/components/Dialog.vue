<template>
  <div v-if="dialog.state.active">
    <div class="dialog-inner">
      <h3 v-if="dialog.state.title">{{dialog.state.title}}</h3>

      <p v-if="dialog.state.html" v-html="dialog.state.message"></p>
      <p v-else>{{ dialog.state.message }}</p>

      <input v-if="dialog.state.type === 'prompt'" :type="dialog.state.inputType" v-model="userInput">

      <div>
        <button v-if="dialog.state.type !== 'alert'" @click="dialog.cancel()">{{dialog.state.cancelText}}</button>
        <button @click="dialog.ok(userInput)">{{dialog.state.okText}}</button>
      </div>

    </div>
    <div class="dialog-bg"></div>
  </div>
</template>

<script>
import dialog from '@/dialog'
export default{
  data(){
    return {
      userInput: '',
      dialog
    }
  },
}
</script>

<style>
.dialog-bg{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,.5);
}
.dialog-inner{
  background:white;
  z-index: 2;
  padding:20px;
  position:fixed;
  top:200px;
  left: 50%;
  transform: translateX(-50%);
  min-width:200px;
}
</style>
