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
            <button class="devour" data-id="${data.insertedId}">Devour</button>
            `
            // append element onto burger list
            document.getElementById('burgersList').append(burgerElem)
    }) 
    .catch(err => console.error(err))
})  

document.getElementById('devour').addEventListener('click', event => {
    event.preventDefault()
    axios.put('api/burgers', {
        
    })
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
