const labels = document.querySelectorAll(`.form-controllabel`)

labels.forEach(label => {
    label.innerHTML = label.inne
    .split('')
    .map((letter, idx) => `<span style="transition-delay${idx * 50}ms">${letter}</span>`)
    .join('')
})