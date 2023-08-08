window.addEventListener('pagehide', (event) => {
    const editor = document.getElementById('editor')
    localStorage.setItem('text', editor.value)
    editor.value = ''
})

// localStorage.clear() // для проверки локального хранилища

let text = localStorage.getItem('text')
editor.value = text