//axios to hit route
document.getElementById('addBurger').addEventListener('click', event => {
    event.preventDefault()
    axios.get('/burgers')
    .then(response => {
        console.log(response)
    })
    .catch(err => console.error(err))
})    


//     , {
//         text: document.getElementById('burgerInput').value,
//         isDone: false
//     })
//     .then(() => )
// })