//Ques1.

// function handleClick() {
//     const button = document.getElementById("btn");
//     button.textContent = "Clicked"
// }





//Ques2. When user click on the button the heading color should change to red.

// function handleClick() {
//     document.querySelector("h1").style.color="red"
//     const button = document.getElementById("btn");
//     button.textContent = "Color Changed"
// }





//Ques3. When user click on the button one h2 tag and image will render below to the button.

function handleClick(){
    const subHead = document.createElement("h2").textContent="New Sub Heading"

    const image=document.createElement("img");
    image.setAttribute("src","https://krmangalam.edu.in/_next/image?url=%2Fkrmuniversity.webp&w=1200&q=75")

    image.setAttribute("alt","K.R Mangalam");

    document.getElementById("content").append(subHead)
    document.getElementById("content").append(image)
}
    