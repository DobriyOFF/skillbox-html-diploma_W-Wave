const accordeon = () => {
    const accordeonItem = document.querySelectorAll('.guests__item')
    const elementContent = document.querySelectorAll('.guests__item-bottom')

    const removeActive = () => {
        for (let item of accordeonItem) {
            item.classList.remove('active')
        }
    }

    const addRemoveDesc = () => {
        for (let i = 0; i < accordeonItem.length; i++) {
            if (accordeonItem[i].classList.contains('active')) {
                elementContent[i].style.display = 'flex'
            } else {
                elementContent[i].style.display = 'none'
            }
        }
    }

    accordeonItem.forEach((item) => {
        addRemoveDesc()
        item.addEventListener('click', () => {
            if (item.classList.contains('active')) {
                item.classList.remove('active')
                addRemoveDesc()
            } else {
                removeActive()
                item.classList.add('active')
                addRemoveDesc()
            }
        })

    })
}

export default accordeon