// FUNCTIONS FOR SIGNIN
function signIn(event) {
  event.preventDefault();

  const getEmail = document.getElementById("email").value;
  const getPassword = document.getElementById("password").value;

  if (getEmail === "" || getPassword === "") {
    Swal.fire({
      icon: "info",
      text: "All fields are required",
      confirmButtonColor: "#2d85de",
    });
  } else {
    const logData = new FormData();
    logData.append("email", getEmail);
    logData.append("password", getPassword);

    const logReg = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: getEmail,
        password: getPassword,
      }),
    };
    const url = "https://zlglobalalliance.com.ng/api/login-admin";

    fetch(url, logReg)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("adminlogin", JSON.stringify(result));
        const myAdminId = localStorage.getItem("adminlogin");
        const userDetails = JSON.parse(myAdminId);
        if (userDetails.hasOwnProperty("token")) {
          window.location.href = "/index.html";
        } else {
          Swal.fire({
            icon: "info",
            text: "Unsuccessful",
            confirmButtonColor: "#2d85de",
          });
        }
      })
      .catch((error) => console.log("error", error));
  }
}
// FUNCTIONS FOR SIGNIN
