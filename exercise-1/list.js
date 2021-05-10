// const fetch = require("node-fetch");

function fetchData() {
    fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment').then(response => {
        return response.json();
    })
        .then(data => {
            console.log(data);
            const myData = data.map(user => {


                return `<ul class="employeeList">
            <li><b>ID:</b> ${user.id} </li>
            <li><b>Created at:</b> ${user.createdAt}</li>
            <li><b>Name:</b> ${user.name}</li>
            <li><b>Photo:</b><img src="${user.avatars}"/></li>
            </ul>`;
            }).join("");
            // console.log(myData);
            document.getElementById("app").innerHTML = myData;

        })
        .catch(error => {
            console.log(error);
            console.log("its wrong")
        })
}
fetchData();