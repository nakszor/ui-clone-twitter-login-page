const buttonPassword = document.querySelector("#button-password")
const modal = document.getElementById("modal")

const closeModal = document.getElementById("close-modal")

buttonPassword.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('show-modal')
})

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden')
    modal.classList.remove('show-modal')
})