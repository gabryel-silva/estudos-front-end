const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    insertResult(countOfLetters());
});

const countOfLetters = () => {
    const phrase = document.getElementById("frase").value;
    const selectedLetter = document.getElementById("letra").value;

    const latters = phrase.toUpperCase().split('');
    const selectedLetterUp = selectedLetter.toUpperCase();  

    console.log(latters);
    
    const totalOfLatters = latters.reduce((acc, value) => {
        return selectedLetterUp === value ? acc + 1 : acc;
    }, 0);

    return `<p>O total de letras "${selectedLetterUp}" é ${totalOfLatters}</p>`;
}

const insertResult = (html) => {
    const result = document.getElementById('result');

    result.insertAdjacentHTML('beforeend', html);
}