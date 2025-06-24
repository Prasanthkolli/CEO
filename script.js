let cont=document.getElementById("OverDiv")
let img=document.createElement("img");
let head=document.createElement("h1");
let paa=document.getElementById("SundarM");
ImageDiv.appendChild(img)
img.classList.add("imggg")
ImageDiv.appendChild(head)
function googleCeo(){
    img.classList.remove("imggg")
    img.src="images.jpeg";
    head.textContent="Sundhar Pichai"
    // img.classList.add();
    paa.classList.remove("aboutSun")
    paa.textContent=" Sundar Pichai is the CEO of both Google and its parent company, Alphabet Inc. He was born in Madurai, India, on June 10, 1972. He holds degreesin metallurgical engineering from IIT Kharagpur, materials science fromStanford University, and an MBA from the Wharton School. Pichai joined Google in 2004 and played a key role in the development of Chrome and Chrome OS. He became Google's CEO in 2015 and took on the additional role of Alphabet CEO in 2019."
}
function microCeo(){
    img.src="Satya-Nadella-success-story.png"
    head.textContent="Sathya Nadenlla"
    img.classList.remove("imggg")
    // img.classList.add();
    paa.classList.remove("aboutSun")
    paa.textContent="Satya Nadella is the current Chairman and CEO of Microsoft, an Indian-American executive born in Hyderabad, India. He's known for his leadership in transforming Microsoft's cloud infrastructure and services business. He assumed the CEO role in February 2014, succeeding Steve Ballmer. Nadella is also an author, having co-written the book  which explores his vision for Microsoft and the future of technology"
}
function Infosys(){
    img.src="Shantanu-Narayen-1111.webp"
    head.textContent="Sanathu Narayan"
    img.classList.remove("imggg")
    // img.classList.add();
    paa.classList.remove("aboutSun")
    paa.textContent="Shantanu Narayen is the Chairman and CEO of Adobe Inc. He's known for transforming the company into a cloud-based subscription model and for pioneering the digital experience category. Under his leadership, Adobe has achieved record revenue and has been recognized for its inclusive and innovative workplace"
}