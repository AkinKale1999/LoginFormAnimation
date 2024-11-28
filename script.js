const labels = document.querySelectorAll(".form-control label");


labels.forEach(label => {
    label.innerHTML = label.innerText
    .split("")
    .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
    .join("")
})


// der wert (50)ms entscheidet darüber wie schnell
// die Worte Email oder Passwort transformiert werden (ZEILE100)
// .form-control input:focus + label span, 
// .form-control input:valid + label span 