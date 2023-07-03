const burger = document.getElementById("burger")
const links = document.getElementById("navigation")

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("features");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

burger.addEventListener("click", function(){
      links.classList.toggle("translate")
      burger.classList.toggle("rotate")
  })

document.getElementById("defaultOpen").click();