let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);

    })
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)

function toggleMoreText() {
    const moreText = document.querySelector(".more-text");
    const seeMore = document.getElementById("see-more");
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        seeMore.textContent = "See Less";
    } else {
        moreText.style.display = "none";
        seeMore.textContent = "Read More";
    }
    }

 let menuli = document.querySelectorAll('header ul li a');
    let section = document.querySelectorAll('section'); 
    
    function activeMenu() {
        let len = section.length;
        while (--len && window.scrollY + 97 < section[len].offsetTop) {}
        menuli.forEach(sec => sec.classList.remove("active"));
        menuli[len].classList.add("active");
    }
    
    activeMenu();
    window.addEventListener("scroll", activeMenu);
    
    const header = document.querySelector("header");
    window.addEventListener("scroll", function(){
        header.classList.toggle("sticky", window.scrollY > 50);
        console.log(header.classList.contains("sticky")); 
    });

let menuIcon = document.querySelector("#menu-icon");
    let navlist = document.querySelector(".navlist");
    
    menuIcon.onclick = ()=>{
        menuIcon.classList.toggle("bx-x");
        navlist.classList.toggle("open");
    }

    window.onscroll = ()=>{
        menuIcon.classList.remove("bx-x");
        navlist.classList.remove("open");
    }

const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show-items");
            }else{
                entry.target.classList.remove("show-items");
            }
        });
    });

    const scrollScale = document.querySelectorAll(".scroll-scale");
    scrollScale.forEach((el)=>observer.observe(el));

    const scrollBottom = document.querySelectorAll(".scroll-bottom");
    scrollBottom.forEach((el)=>observer.observe(el));
    
    const scrollTop = document.querySelectorAll(".scroll-top");
    scrollTop.forEach((el)=>observer.observe(el));


  
