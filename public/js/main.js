window.onscroll = function onScrollWindow() {
    if(window.scrollY>window.innerHeight && window.innerWidth>768) {
    }
    else {
        if(document.getElementById("nav-list").style.display=="block") {
            document.getElementById("nav-list").style.display="none"
            document.getElementById("line1").style.transition="all 0.3s ease"
            document.getElementById("line3").style.transition="all 0.3s ease"
            document.getElementById("line2").style.display= "flex"
            document.getElementById("line1").style.transform= "rotate(0deg)"
            document.getElementById("line1").style.marginTop="5px"
            document.getElementById("line3").style.transform= "rotate(0deg)"
            document.getElementById("line3").style.marginTop="5px"
        }
    }
}

function slideTo(item){
    if(item=="top") {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    else {
        if(window.innerWidth>1000)
            window.scrollTo({top: document.getElementById(item).offsetTop-150, behavior: 'smooth'})
        else
            window.scrollTo({top: document.getElementById(item).offsetTop, behavior: 'smooth'})
    }
}

function burgerHandleClick() {
    document.getElementById("nav-list").style.transition="all 0.3s ease"
    if(document.getElementById("nav-list").style.display=="block") {
        document.getElementById("nav-list").style.display="none"
        document.getElementById("line1").style.transition="all 0.3s ease"
        document.getElementById("line3").style.transition="all 0.3s ease"
        document.getElementById("line2").style.display= "flex"
        document.getElementById("line1").style.transform= "rotate(0deg)"
        document.getElementById("line1").style.marginTop="5px"
        document.getElementById("line3").style.transform= "rotate(0deg)"
        document.getElementById("line3").style.marginTop="5px"
    }
    else if(document.getElementById("nav-list").style.display=="" || document.getElementById("nav-list").style.display=="none") {
        document.getElementById("nav-list").style.display="block"
        document.getElementById("line1").style.transition="all 0.3s ease"
        document.getElementById("line3").style.transition="all 0.3s ease"
        document.getElementById("line2").style.display= "none"
        document.getElementById("line1").style.transform= "rotate(45deg)"
        document.getElementById("line1").style.marginTop="20px"
        document.getElementById("line3").style.transform= "rotate(-45deg)"
        document.getElementById("line3").style.marginTop="-10px"
    }
}

window.onload = function(){
    setTimeout(() => {
        if(document.getElementById("main-content"))
        if (window.outerWidth <= 768) {
          for (let i = 0; i < document.getElementById("main-content").getElementsByTagName("img").length; i++) {
            if (Number(document.getElementById("main-content").getElementsByTagName("img")[i].style.width.replace("px", "")) > window.outerWidth) {
              document.getElementById("main-content").getElementsByTagName("img")[i].style.width = "90vw"
              document.getElementById("main-content").getElementsByTagName("img")[i].style.height = "auto"
            }
          }
        }
      }, 200)
}

let videoOnload = async () => {
    if(document.getElementById("autoplayvid")) {
        await document.getElementById("autoplayvid").play()
    }
}