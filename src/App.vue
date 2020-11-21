<template>
  <div id="app">
    <div>
      <button @click="alert()">Alert</button>
    </div>

    <div>
      <button @click="prompt()">Prompt </button>
      Answer: {{answer}}
    </div>

    <div>
      <button @click="confirm()">Confirm </button>
      Confirmed: {{confirmed ? 'Yes' : 'No' }}
    </div>

    <Dialog/>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog'
import dialog from '@/dialog'
export default {
  name: "App",
  components: {
    Dialog
  },
  data(){
    return {
      answer: '',
      confirmed: false,
    }
  },
  methods:{
    async alert(){
      await dialog.html().alert('This alert has <strong>rich text</strong>')
    },
    async prompt(){
      this.answer = await dialog
        .title('Pet Survey')
        .okText('Of course!')
        .cancelText("Nope")
        .prompt('Do you like dogs?')
    },
    async confirm(){
      this.confirmed = await dialog.okText('Yes').cancelText('No').confirm('Are you sure?')
    }
  }
};
</script>

<style scoped>
button{
  display:block;
}
div{
  marign-bottom:20px;
}
</style>
