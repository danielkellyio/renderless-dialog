import dialog from '@/dialog'

describe('dialog object', ()=>{
  test('dialog.alert() assigns message to the dialog', ()=>{
    dialog.alert('hello world')
    expect(dialog.state.message).toBe('hello world')
  })
  
  test('dialog.alert() waits until user closes it to be inactive',  (done)=>{
    dialog.alert('hello world').then(async ()=>{
      expect(dialog.state.active).toBe(false)
      done()
    })
    expect(dialog.state.active).toBe(true);
    setTimeout(dialog.ok, 100)
  })
  
  test('can do multiple alerts one after another',()=>{
    dialog.alert('hello world')
    expect(dialog.state.active).toBe(true);
    expect(dialog.state.message).toBe('hello world');
    dialog.ok()
  
    dialog.alert('hello world 2')
    expect(dialog.state.active).toBe(true);
    expect(dialog.state.message).toBe('hello world 2');
    dialog.ok()
  })
  
  test('dialog.confirm() can be canceled', (done)=>{
    dialog.confirm('are you sure').then((confirmed)=>{
      expect(confirmed).toBe(false)
      done()
    })
    dialog.cancel()
  })
  
  test('dialog.confirm() can be confirmed', (done)=>{
    dialog.confirm('are you sure').then((confirmed)=>{
      expect(confirmed).toBe(true)
      done()
    })
    dialog.ok()
  })
  
  test('dialog.prompt() can be return user input', (done)=>{
    dialog.prompt('do you like dogs?').then((userInput)=>{
      expect(userInput).toBe('of course!')
      done()
    })
    dialog.ok('of course!')
  })
  
  test('dialog options can be chained', (done)=>{
    dialog
    .title('Dialog title')
    .html()
    .okText('Delete')
    .cancelText('Dont delete')
    .inputType('autofill')
    .prompt('Why are you deleting this thing>').then((userInput)=>{
      expect(userInput).toBe('It stinks')
      done()
    })
    expect(dialog.state.title).toBe('Dialog title')
    expect(dialog.state.html).toBe(true)
    expect(dialog.state.okText).toBe('Delete')
    expect(dialog.state.cancelText).toBe('Dont delete')
    expect(dialog.state.inputType).toBe('autofill')
    dialog.ok('It stinks')
  })
  
  test('dialog is reset on close', (done)=>{
    dialog
    .title('Dialog title')
    .html()
    .okText('Delete')
    .cancelText('Dont delete')
    .inputType('autofill')
    .prompt('Why are you deleting this thing>').then((userInput)=>{
      expect(dialog.state.title).toBe('')
      expect(dialog.state.html).toBe(false)
      expect(dialog.state.okText).toBe('Ok')
      expect(dialog.state.cancelText).toBe('Cancel')
      expect(dialog.state.inputType).toBe('text')
      done()
    })
    dialog.ok('It stinks')
  })
})
