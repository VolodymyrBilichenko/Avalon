

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.select__head').forEach((item) => {
        item.onclick = _ => {
            item.closest('.select').classList.toggle('active')
        }
    })
})