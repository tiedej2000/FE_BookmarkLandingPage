const listItems = document.querySelectorAll('.feature-nav ul li')

listItems.forEach((listItem)=>{
    listItem.addEventListener('click', () =>{
        listItems.forEach((item) => item.classList.remove('active'))

        listItem.classList.add('active')
    })
})