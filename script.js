const burger = document.getElementById("burger")
const links = document.getElementById("navigation")
const buttonAdd = document.getElementById("getstarted")
const buttonSend = document.getElementById("send")

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

burger.addEventListener("click", function () {
  links.classList.toggle("translate")
  burger.classList.toggle("rotate")
})

buttonAdd.addEventListener("click", function () {
  var name = document.getElementById("name").value
  var lastname = document.getElementById("lastname").value
  var phonenumber = document.getElementById("phonenumber").value

  if ((name && lastname && phonenumber)) {
    alert("Welcome to Cheshire County")
    console.log("|ss")
  } else {
    alert("Provide required information.")
  }
})

buttonSend.addEventListener("click", function () {
  var name = document.getElementById("name-2").value
  var lastname = document.getElementById("lastname-2").value
  var phonenumber = document.getElementById("phonenumber-2").value

  if ((name && lastname && phonenumber)) {
    alert("Email sent, we will contact you in the next 1-3days.")
  } else {
    alert("Provide required information.")
  }
})

document.getElementById("defaultOpen").click();