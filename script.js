const playBtn = document.getElementById("playBtn");
const intro = document.getElementById("intro");
const loading = document.getElementById("loading");
const movie = document.getElementById("movie");
const music = document.getElementById("music");

const sceneTitle = document.getElementById("sceneTitle");
const sceneText = document.getElementById("sceneText");
const photo = document.getElementById("photo");

const ending = document.getElementById("ending");
const finalLetter = document.getElementById("finalLetter");

const scenes = [

{
title:"The Day Everything Changed",

text:"I never imagined that one person could bring so much happiness into my life. But then I met you, and somehow everything started feeling a little brighter.✨",

photo:false
},

{
title:"My Favorite Picture",

text:"Out of all the pictures in the world, this one is my favorite... because it has my favorite person in it. Every time I look at it, I remember how lucky I am to have someone as wonderful as you in my life.❤️",

photo:true
},

{
title:"In Case You Ever Forget...",

text:"Never doubt yourself. Never forget how incredible, kind, beautiful, and special you are. The way you smile, the way you care, and the way your eyes say things words never could... they're all little things that make you unforgettable.😍",

photo:true
},

{
title:"If I Had One Wish...",

text:"If I could make one wish today, it wouldn't be for anything in the world... it would simply be for your smile to stay exactly the way it is forever. Because seeing you happy will always make me happy too.❤️‍🩹",

photo:true
},

{
title:"Before This Ends...",

text:"Before this little movie ends, there's something my heart has wanted to tell you for a long time...",

photo:true
},

{
title:"❤️",

text:"Keep looking... there's one more thing waiting for you.🤫",

photo:true
}

];

let currentScene = 0;

playBtn.addEventListener("click", startMovie);

function startMovie() {

    // Hide Intro
    intro.style.display = "none";

    // Show Loading
    loading.style.display = "flex";

    // Start Music
    music.currentTime = 20;
    music.volume = 0;
    music.play().catch(() => {});

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.05;

        music.volume = Math.min(volume, 1);

        if (volume >= 1) {

            clearInterval(fade);

        }

    }, 150);

    // بعد ثانيتين
    setTimeout(() => {

        loading.style.display = "none";

        movie.style.display = "flex";

        showScene();

    }, 5000);

}

function showScene(){

    if(!movie.style.display || movie.style.display === "none") return;

    if(currentScene >= scenes.length){

        // وقف أي typing شغال
        sceneText.textContent = "";

        // اخفي الفيلم
        movie.style.display = "none";

        // شغل النهاية
        setTimeout(() => {
        showEnding();
        }, 500);

        return;
    }


    const container = document.getElementById("sceneContainer");

    container.classList.remove("fadeIn");

    container.classList.add("fadeOut");

    const scene = scenes[currentScene];

    sceneTitle.textContent = scene.title;

    setTimeout(()=>{

    container.classList.remove("fadeOut");

    container.classList.add("fadeIn");

    },100);

    sceneText.textContent = "";

    if(scene.photo){

    photo.style.display = "block";

    setTimeout(()=>{

        photo.classList.add("show");

    },100);

    }

    else{

    photo.classList.remove("show");

    photo.style.display = "none";

    }

    let i = 0;

    const typing = setInterval(()=>{

        sceneText.textContent += scene.text.charAt(i);

        i++;

        if(i > scene.text.length){

            clearInterval(typing);

            currentScene++;

            setTimeout(showScene,5000);

        }

    },30);

}

createStars();

setInterval(createHeart,700);

function createStars(){

const stars=document.getElementById("stars");

for(let i=0;i<40;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

stars.appendChild(star);

}

}

function createHeart(){

const hearts=document.getElementById("hearts");

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*3)+"s";

hearts.appendChild(heart);

setTimeout(()=>heart.remove(),7000);

}


function showEnding(){

    const ending = document.getElementById("ending");
    const finalLetter = document.getElementById("finalLetter");

    ending.style.display = "flex";
    setTimeout(() => {
    ending.scrollTop = 0;
    }, 100);
    finalLetter.textContent = "";
    finalLetter.style.maxWidth = "700px";
    finalLetter.style.lineHeight = "1.8";

    let i = 0;

    const typing = setInterval(()=>{

        finalLetter.textContent += message.charAt(i);
        if(i % 2 === 0){
            ending.scrollTop = ending.scrollHeight;
        }

        i++;

        if(i >= message.length){

            clearInterval(typing);

            setTimeout(()=>{

                finalLetter.textContent += "\n\nThe movie may be over... but my love for you never will ❤️";

            },600);

        }

    },60);

    }

    const message = `
Happy Birthday, my love.

Today is more than just your birthday. It's the day the world was gifted someone truly beautiful, not only because of how you look, but because of who you are.❤️

Thank you for being part of my life. Thank you for every smile you've given me, every conversation we've shared, every laugh that made my day better, and every memory that I'll always keep close to my heart.❤️

I hope this year brings you everything you've ever wished for. I hope your dreams come true, your heart stays full of happiness, and your beautiful smile never fades.❤️

You deserve to be loved, appreciated, respected, and reminded every single day how amazing you are. I hope you always remember that, even on the days when you don't feel your best.❤️

If this little website can make you smile for even a few minutes, then I've already received the best gift I could ever ask for.❤️

Thank you for being you. And thank you for making my world a little brighter just by being in it.❤️

Happy Birthday, my favorite person.❤️❤️

I love you more than words will ever be able to explain.❤️❤️❤️

Tuqbureni,

always yours, Aly ❤️
`;

