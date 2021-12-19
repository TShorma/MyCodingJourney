const button = document.querySelector("button")
const breedInput = document.querySelector("input")
const imageDiv = document.querySelector("div")

button.addEventListener('click', () => {
    let breed = breedInput.value 
    const url = `https://dog.ceo/api/breed/${breed}/images/random`
    //JS built in API 
    // promised based
    fetch(url)
    .then((res) => res.json()) //recives the response from the promise
    .then((data) => {
        let dogPic = data.message
        imageDiv.innerHTML = `<img src=${dogPic}>`
    })
    .catch((error) => {
        console.log(error);
    })
})