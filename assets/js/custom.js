$(document).ready(function () {

  // Write your custom Javascript codes here...
  function togglePasswordField() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.innerHTML = "visibility";
      toggleButton.style.color = "#2196F3";
    } else {
      passwordInput.type = "password";
      toggleButton.innerHTML = "visibility_off";
      toggleButton.style.color = "#BDBDBD";
    }
  }

  $(".toggle-password").click(function () {
    togglePasswordField();
  });

  // navbar toggler button
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarTarget = document.querySelector("#navbarNavAltMarkup");

  if (!navbarToggler || !navbarTarget) {
    console.error("无法获取导航栏相关元素");
    return;
  }

  // Add this function to check and show the navbar-collapse content
  function checkWindowWidth() {
    if (window.innerWidth >= 992) {
      navbarTarget.classList.add("show");

      var navbarHeight = navbarTarget.clientHeight;
      var mainElement = document.querySelector("main");

      mainElement.style.marginTop = navbarHeight + "px";
      navbarTarget.style.maxHeight = navbarTarget.scrollHeight + "px";
    }
  }

  checkWindowWidth(); // Check on page load

  // 添加事件监听器
  navbarToggler.addEventListener("click", function () {
    navbarTarget.classList.toggle("show");

    var navbarHeight = navbarTarget.clientHeight;
    var mainElement = document.querySelector("main");

    // console.log(navbarToggler, navbarTarget, navbarHeight);

    if (navbarTarget.classList.contains("show")) {
      mainElement.style.transition = "margin-top .3s ease-out";
      navbarTarget.style.transition = "max-height .3s ease-out";
      mainElement.style.marginTop = navbarHeight + "px";
      navbarTarget.style.maxHeight = navbarTarget.scrollHeight + "px";
    } else {
      mainElement.style.transition = "margin-top .3s ease-in";
      navbarTarget.style.transition = "max-height .3s ease-in";
      mainElement.style.marginTop = "";
      navbarTarget.style.maxHeight = "";
    }
  });

  // Add this event listener to update on window resize
  window.addEventListener("resize", function() {
    if (window.innerWidth >= 992) {
      checkWindowWidth();
    } else {
      navbarTarget.classList.remove("show");
    }
  });
});
