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
    "https://zlglobalalliance.com.ng/api/get-medical-records?page=0",
    requestOptions
  )
    .then((response) => response.json()) // parse JSON response
    .then((result) => {
      console.log(result); // or display the result on the page using DOM manipulation

      // create table and add data rows
      const table = document.createElement("table");
      const headers = Object.keys(result.records.rows[0]);
      const headerRow = document.createElement("tr");
      headers.forEach((headerText) => {
        const header = document.createElement("th");
        const textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
      });
      table.appendChild(headerRow);

      result.records.rows.forEach((record) => {
        const row = document.createElement("tr");
        headers.forEach((header) => {
          const cell = document.createElement("td");
          const textNode = document.createTextNode(record[header]);
          cell.appendChild(textNode);
          row.appendChild(cell);
        });
        table.appendChild(row);
      });

      // append table to page
      document.querySelector(".record_list").appendChild(table);
    })
    .catch((error) => console.log("error", error));
}

// call the function when the page loads
window.onload = displayMedicalRecords;
