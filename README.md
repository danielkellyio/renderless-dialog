# Renderless Dialogs (Alert, Confirm, Prompt) in Vue

See the full article at [https://danielkelly.io/blog/renderless-vue-dialog](https://danielkelly.io/blog/renderless-vue-dialog)

### Demo
1. Clone the repo
2. `npm install`
3. `npm run serve`

### Use 
Dialog object exists in `src/dialog.js`. If enough people find this useful I can turn it into a npm package. Won't know to do that though unless you reach out and tell me it's useful.
```javascript
/*
 * Alert
 */
await dialog.alert(message)
// carry on only after alert is dismissed

/*
 * Confirm
 */
const confirmed = await dialog.confirm(message, optionalTitle, options)
if(confirmed){
    // do the thing needing confirming
}else{
    // don't
}

/*
 * Prompt
 */
const value = await dialog.prompt(message)
console.log(value) // the result of the prompt
```

### Options
All options are set via chainable methods
```javascript
await dialog
    .title('Prompt Title')
    .inputType('number')
    .cancelText('Nevermind')
    .okText('Absolutely')
    .html()
    .prompt('Hello message with <strong>html</strong>')
```

### Follow Me
Twitter: [@danielkelly_io](https://twitter.com/danielkelly_io)

Github: [@danielkellyio](https://github.com/danielkellyio)

