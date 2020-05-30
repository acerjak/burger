//axios to hit route to retrieve all groceries with button
document.getElementById('addBurger').addEventListener('click', event => {
    event.preventDefault()
    axios.post('/api/burgers', {
        burger_name: document.getElementById('burgerName').value,
        devoured: false
    })
    .then(({ data }) => {
        // console.log(data)
        let burgerElem = document.createElement('li')
            // burgerElem.classList.add('notDevoured')
            burgerElem.innerHTML = `
            ${document.getElementById('burgerName').value}
            <button id="devour" data-id="${data.insertedId}">Devour</button>
            `
            // append element onto burger list
            document.getElementById('burgersList').append(burgerElem)
    }) 
    .catch(err => console.error(err))
})  

document.getElementById('devour').addEventListener('click', event => {
    if (event.target.className === 'devour') {
    axios.put(`/api/burgers/${event.target.dataset.id}`, {devoured: 1})
      .then(({ data }) => {
        const nomElem = document.createElement('li')
        nomElem.innerHTML = `
        ${event.target.value}`
        document.getElementById('devoured').append(nomElem)
      })
      .catch(err => console.log(err))
    }
})

// const getBurgers = () => {
//     axios.get('/api/burgers')
//     .then(({data}) => {
//         // console.log(data)
//         data.forEach(burger => {
            
//         })
//     })
//     .catch(err => console.error(err))
// } 
