

///////////////////////////////////
/ <-- javascript by si ganteng -->/
///////////////////////////////////






document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    var navbar = document.getElementById("myNavbar");
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
});



// untuk date and time
function updateTime() {
  var now = new Date();
  var day = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Formatting to add leading zeros if needed
  day = (day < 10) ? '0' + day : day;
  month = (month < 10) ? '0' + month : month;
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  var dateDisplay = document.getElementById('date');
  dateDisplay.textContent = day + '/' + month + '/' + year;

  var timeDisplay = document.getElementById('time');
  timeDisplay.textContent = hours + ':' + minutes + ':' + seconds;

  setTimeout(updateTime, 1000); // Update every second
}

updateTime();



// untuk alert dengan arrow function biar keren
function sweetAlert(){
  Swal.fire({
    title: "Submit your Github username",
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,
    preConfirm: async (login) => {
      try {
        const githubUrl = `
          https://api.github.com/users/${login}
        `;
        const response = await fetch(githubUrl);
        if (!response.ok) {
          return Swal.showValidationMessage(`
            ${JSON.stringify(await response.json())}
          `);
        }
        return response.json();
      } catch (error) {
        Swal.showValidationMessage(`
          Request failed: ${error}
        `);
      }
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url
      });
    }
  });
}


function sweetAlert1() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "alert works assigment done",
    showConfirmButton: false,
    timer: 1500
  });
}

function sweetAlert2() {
  Swal.fire({
    title: "i can steal your  heart!",
    width: 600,
    padding: "3em",
    color: "#00ff00",
    background: "url(./assets/trees.png) no-repeat",
    backdrop: `
      rgba(0,0,123,0.4)
      url(./assets/hengker.gif)
      no-repeat
    `,
    customClass: {
      content: 'sweetalert-custom-content',
      popup: 'sweetalert-custom-popup'
    },
    showConfirmButton: false
  });
}

function sweetAlert3() {
  Swal.fire({
    title: "huyuuuuu cihuyyyy i believeeee",
    width: 600,
    padding: "3em",
    color: "#00ff00",
    background: "url(./assets/trees.png) no-repeat",
    backdrop: `
      rgba(0,0,123,0.4)
      url(./assets/nyan-cat.gif)
      no-repeat
    `,
    customClass: {
      content: 'sweetalert-custom-content',
      popup: 'sweetalert-custom-popup'
    },
    showConfirmButton: false
  });
}

