//1
const mybtn = document.querySelector ('.mybtn');
   
mybtn.addEventListener(`click`,function(){
    mybtn.remove();
})

//2
var img = document.createElement('img');
img.src = 'https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg';
document.getElementById('jsImage').appendChild(img)

//3
const users = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg"
    },
  ];

  function renderUser() {
    const userTableContainer = document.querySelector("#user-list");
    const userTable = userTableContainer.querySelector("tbody");
  
  
    const userItems = users.map((user) => {
      return `<tr> 
                  <td><img src="https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"></td>
                  <td>${user.first_name}</td>
                  <td>${user.last_name}</td>
                  <td><button class="remove" type="button">Delete</button></td>
                  <td><button class="info" type="button">Info</button></td>
              </tr>`;
    });
  
    userTable.innerHTML = userItems.join("");
  }
  
  renderUser();