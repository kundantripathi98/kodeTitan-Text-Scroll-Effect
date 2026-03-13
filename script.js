let paragraphs = [...document.querySelectorAll("p")];

// console.log(paragraphs);

let spans = [];

paragraphs.forEach(paragraph => {
    let htmlString = "";
    let pArray = paragraph.textContent.split("");

    // console.log(pArray);

    pArray.forEach(char => {
        htmlString += `<span>${char}</span>`;
    });

    paragraph.innerHTML = htmlString;
});

spans = [...document.querySelectorAll("span")];


function revealSpan() {
    spans.forEach(span => {
        let {left, top} = span.getBoundingClientRect();

        top = top - (window.innerHeight * 0.4);

        let opacityValue = 1 - ((top * 0.01) + (left * 0.001));

        opacityValue = opacityValue < 0.1 ? 0.1 : Number(opacityValue.toFixed(3));

        span.style.opacity = opacityValue;
    });
}

window.addEventListener("scroll", ()=>{
    revealSpan();
});

revealSpan();