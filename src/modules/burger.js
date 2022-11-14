const burger = () => {
    const modalOverlay = document.querySelector('.burger__overlay')
    const modalCallback = document.querySelector('.burger__callback')

    const toggleModal = (e) => {
        if (e.target.closest('.header__primary-burger')) {
            e.preventDefault();
            modalCallback.style.display = 'block'
            modalOverlay.style.display = 'block'
        }
        if (e.target.closest('.burger__close') || e.target.closest('.burger__overlay')) {
            modalCallback.style.display = 'none'
            modalOverlay.style.display = 'none'
        }
    }
    document.addEventListener("click", (e) => toggleModal(e));
}

export default burger