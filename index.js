// const myBtnElement = document.getElementById('btn')
// const inputByQselector = document.querySelector('input')
// // console.log('input by query selector tagname')
// // console.log(inputByQselector);

// btn3.addEventListener( 'click', ()=>{
//     console.log('BTN 3 HAS BEEN CLICKED')
//     const inputElement = document.getElementsByTagName('input')[0]
//     inputElement.value = +inputElement.value + 1 // Number(inputElement.value)
// } )


myForm.addEventListener('UPDATE', (event)=>{
    event.preventDefault()
    const myFormInput = document.getElementById('my-form-input')
    if (myFormInput.value == 'no') { // do not submit form if no.
        alert('answered no. won\'t submit')
    }else{
        window.location.href = '/myformsubmitted'
    }

})
