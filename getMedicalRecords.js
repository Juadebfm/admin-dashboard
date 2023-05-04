function displayMedicalRecords() {
  const token = JSON.parse(localStorage.getItem("adminlogin")).token;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    redirect: "follow",
  };

  fetch(
    "https://zlglobalalliance.com.ng/api/get-medical-records-details/2",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      // get the table body element
      const tbody = document.getElementById("record_list");

      // create a new row element
      const row = document.createElement("tr");

      // create new table data elements and set their text content
      const nameTd = document.createElement("td");
      nameTd.textContent = result.name;

      const ageTd = document.createElement("td");
      ageTd.textContent = result.age;

      const sexTd = document.createElement("td");
      sexTd.textContent = result.sex;

      const phoneTd = document.createElement("td");
      phoneTd.textContent = result.phonenumber;

      const addressTd = document.createElement("td");
      addressTd.textContent = result.address;

      const maritalStatusTd = document.createElement("td");
      maritalStatusTd.textContent = result.maritalstatus;

      const nextOfKinTd = document.createElement("td");
      nextOfKinTd.textContent = result.next_of_kin;

      const nextOfKinPhoneTd = document.createElement("td");
      nextOfKinPhoneTd.textContent = result.next_of_kin_phonenumber;

      // append the table data elements to the row
      row.appendChild(nameTd);
      row.appendChild(ageTd);
      row.appendChild(sexTd);
      row.appendChild(phoneTd);
      row.appendChild(addressTd);
      row.appendChild(maritalStatusTd);
      row.appendChild(nextOfKinTd);
      row.appendChild(nextOfKinPhoneTd);

      // append the row to the table body
      tbody.appendChild(row);
    })
    .catch((error) => console.log("error", error));
}

// call the function when the page loads
window.onload = displayMedicalRecords;
