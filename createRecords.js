function createMedicalRecords(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const cardNumber = document.getElementById("cardnumber").value;
  const age = document.getElementById("age").value;
  const sex = document.getElementById("sex").value;
  const phoneNumber = document.getElementById("phonenumber").value;
  const address = document.getElementById("address").value;
  const maritalStatus = document.getElementById("maritalstatus").value;
  const nextOfKin = document.getElementById("nextofkin").value;
  const nextOfKinPhoneNumber = document.getElementById(
    "nextofkinphonenumber"
  ).value;
  const relationship = document.getElementById("relationship").value;
  const bloodPressure = document.getElementById("bloodpressure").value;
  const temperature = document.getElementById("temperature").value;
  const pulse = document.getElementById("pulse").value;
  const weight = document.getElementById("weight").value;
  const urinAnalysis = document.getElementById("urinanalysis").value;
  const blood = document.getElementById("blood").value;
  const bilirubin = document.getElementById("bilirubin").value;
  const urobilinogen = document.getElementById("urobilinogen").value;
  const ketones = document.getElementById("ketones").value;
  const glucose = document.getElementById("glucose").value;
  const protein = document.getElementById("protein").value;
  const nitrite = document.getElementById("nitrite").value;
  const leukocytes = document.getElementById("leukocytes").value;
  const ph = document.getElementById("ph").value;
  const specificGravity = document.getElementById("specificgravity").value;

  const medicalRecordsData = {
    name,
    cardnumber: cardNumber,
    age,
    sex,
    phonenumber: phoneNumber,
    address,
    maritalstatus: maritalStatus,
    next_of_kin: nextOfKin,
    next_of_kin_phonenumber: nextOfKinPhoneNumber,
    relationship,
    blood_pressure: bloodPressure,
    temperature,
    pulse,
    weight,
    urinanalysis: urinAnalysis,
    blood,
    bilirubin,
    urobilinogen,
    ketones,
    glucose,
    protein,
    nitrite,
    leukocytes,
    ph,
    specific_gravity: specificGravity,
  };

  const url = "https://zlglobalalliance.com.ng/api/create-medical-records";

  const token = JSON.parse(localStorage.getItem("adminlogin")).token;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(medicalRecordsData),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("All fields required");
      }
    })
    .then((result) => {
      console.log(result);
      // handle success response
      Swal.fire({
        icon: "success",
        text: "Records successfully created",
        confirmButtonColor: "#2d85de",
      });
      // Clear input fields
      document.getElementById("name").value = "";
      document.getElementById("cardnumber").value = "";
      document.getElementById("age").value = "";
      document.getElementById("sex").value = "";
      document.getElementById("phonenumber").value = "";
      document.getElementById("address").value = "";
      document.getElementById("maritalstatus").value = "";
      document.getElementById("nextofkin").value = "";
      document.getElementById("nextofkinphonenumber").value = "";
      document.getElementById("relationship").value = "";
      document.getElementById("bloodpressure").value = "";
      document.getElementById("temperature").value = "";
      document.getElementById("pulse").value = "";
      document.getElementById("weight").value = "";
      document.getElementById("urinanalysis").value = "";
      document.getElementById("blood").value = "";
      document.getElementById("bilirubin").value = "";
      document.getElementById("urobilinogen").value = "";
      document.getElementById("ketones").value = "";
      document.getElementById("glucose").value = "";
      document.getElementById("protein").value = "";
      document.getElementById("nitrite").value = "";
      document.getElementById("leukocytes").value = "";
      document.getElementById("ph").value = "";
      document.getElementById("specificgravity").value = "";
    })
    .catch((error) => {
      console.error(error);
      // handle error
      Swal.fire({
        icon: "error",
        text: error.message,
        confirmButtonColor: "#2d85de",
      });
    });
}
