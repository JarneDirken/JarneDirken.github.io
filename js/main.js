function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "site-nav") {
    x.className += " responsive";
  } else {
    x.className = "site-nav";
  }
}