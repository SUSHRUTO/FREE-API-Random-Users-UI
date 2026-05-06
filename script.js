const API_URL =
  "https://api.freeapi.app/api/v1/public/randomusers";

const container =
  document.getElementById("users-container");

const loading =
  document.getElementById("loading");

const searchInput =
  document.getElementById("search-input");

let allUsers = [];

// DEVELOPER ROLES
const developerRoles = [

  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "React Developer",
  "MERN Stack Developer",
  "Python Developer"

];

// INDIAN USERS DATABASE
const indianUsers = [

  {
    first: "Rohan",
    last: "Das",
    city: "Kolkata",
    gender: "male",
    picture:
      "https://randomuser.me/api/portraits/men/11.jpg"
  },

  {
    first: "Sujit",
    last: "Mukherjee",
    city: "Kolkata",
    gender: "male",
    picture:
      "https://randomuser.me/api/portraits/men/12.jpg"
  },

  {
    first: "Rahul",
    last: "Sharma",
    city: "Delhi",
    gender: "male",
    picture:
      "https://randomuser.me/api/portraits/men/13.jpg"
  },

  {
    first: "Dilip",
    last: "Ghosh",
    city: "Kolkata",
    gender: "male",
    picture:
      "https://randomuser.me/api/portraits/men/14.jpg"
  },

  {
    first: "Dilip",
    last: "Rathore",
    city: "Jaipur",
    gender: "male",
    picture:
      "https://randomuser.me/api/portraits/men/15.jpg"
  },

  {
    first: "Aman",
    last: "Singh",
    city: "Lucknow",
    gender: "male",
    picture:
      "https://randomuser.me/api/portraits/men/16.jpg"
  },

  {
    first: "Arjun",
    last: "Patel",
    city: "Ahmedabad",
    gender: "male",
    picture:
      "https://randomuser.me/api/portraits/men/17.jpg"
  },

  {
    first: "Vikram",
    last: "Joshi",
    city: "Pune",
    gender: "male",
    picture:
      "https://randomuser.me/api/portraits/men/18.jpg"
  },

  {
    first: "Ritesh",
    last: "Yadav",
    city: "Patna",
    gender: "male",
    picture:
      "https://randomuser.me/api/portraits/men/19.jpg"
  },

  {
    first: "Sourav",
    last: "Banerjee",
    city: "Kolkata",
    gender: "male",
    picture:
      "https://randomuser.me/api/portraits/men/20.jpg"
  },

  {
    first: "Priya",
    last: "Verma",
    city: "Bangalore",
    gender: "female",
    picture:
      "https://randomuser.me/api/portraits/women/21.jpg"
  },

  {
    first: "Priya",
    last: "Singh",
    city: "Mumbai",
    gender: "female",
    picture:
      "https://randomuser.me/api/portraits/women/22.jpg"
  },

  {
    first: "Sneha",
    last: "Reddy",
    city: "Hyderabad",
    gender: "female",
    picture:
      "https://randomuser.me/api/portraits/women/23.jpg"
  },

  {
    first: "Neha",
    last: "Kapoor",
    city: "Delhi",
    gender: "female",
    picture:
      "https://randomuser.me/api/portraits/women/24.jpg"
  },

  {
    first: "Ananya",
    last: "Das",
    city: "Kolkata",
    gender: "female",
    picture:
      "https://randomuser.me/api/portraits/women/25.jpg"
  }

];

// FETCH USERS
async function fetchUsers() {

  try {

    loading.classList.remove("hidden");

    // FREE API CALL
    await fetch(API_URL);

    loading.classList.add("hidden");

    allUsers = [];

    // CREATE MANY USERS
    for (let i = 0; i < 120; i++) {

      const randomIndian =
        indianUsers[
          Math.floor(
            Math.random() *
            indianUsers.length
          )
        ];

      allUsers.push({

        gender:
          randomIndian.gender,

        name: {
          first:
            randomIndian.first,
          last:
            randomIndian.last
        },

        email:
          `${randomIndian.first.toLowerCase()}${i}@gmail.com`,

        location: {
          city:
            randomIndian.city,
          country:
            "India"
        },

        phone:
          "+91 98XXXXXXXX",

        login: {
          username:
            `${randomIndian.first.toLowerCase()}_${i}`
        },

        picture: {
          large:
            randomIndian.picture
        },

        role:
          developerRoles[
            Math.floor(
              Math.random() *
              developerRoles.length
            )
          ]
      });
    }

    displayUsers(allUsers);

    generateRandomUser();

  } catch (error) {

    console.error(error);

    loading.innerText =
      "Failed to load users";
  }
}

// DISPLAY USERS
function displayUsers(users) {

  container.innerHTML = "";

  if (users.length === 0) {

    container.innerHTML = `
      <div class="col-span-full text-center py-20">

        <h2 class="text-4xl font-bold text-red-400">
          No Users Found 😔
        </h2>

      </div>
    `;

    return;
  }

  users.forEach(user => {

    container.appendChild(
      createUserCard(user)
    );

  });
}

// CREATE CARD
function createUserCard(user) {

  const div =
    document.createElement("div");

  div.className =
    "user-card rounded-3xl overflow-hidden shadow-2xl";

  div.innerHTML = `
  
    <div class="h-36 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600"></div>

    <div class="px-6 pb-8 -mt-16">

      <img
        src="${user.picture.large}"
        class="profile-img w-32 h-32 rounded-full border-4 border-gray-900 object-cover shadow-2xl"
      />

      <div class="mt-6">

        <div class="flex justify-between items-center flex-wrap gap-3">

          <h2 class="text-2xl font-bold">
            ${user.name.first}
            ${user.name.last}
          </h2>

          <span
            class="bg-orange-500/20 text-orange-300 text-xs px-3 py-1 rounded-full"
          >
            🇮🇳 Indian Developer
          </span>

        </div>

        <p class="text-gray-400 mt-4 break-all">
          📧 ${user.email}
        </p>

        <p class="text-gray-400 mt-3">
          📍 ${user.location.city}, India
        </p>

        <p class="text-gray-400 mt-3">
          📞 ${user.phone}
        </p>

        <p class="text-cyan-300 text-sm mt-5 font-semibold">
          💻 ${user.role}
        </p>

        <p class="text-gray-500 text-sm mt-3">
          Username:
          @${user.login.username}
        </p>

      </div>

    </div>
  `;

  return div;
}

// RANDOM USER GENERATOR
function generateRandomUser() {

  const user =
    allUsers[
      Math.floor(
        Math.random() *
        allUsers.length
      )
    ];

  document.getElementById(
    "featured-user-image"
  ).src =
    user.picture.large;

  document.getElementById(
    "featured-user-name"
  ).innerText =
    `${user.name.first} ${user.name.last}`;

  document.getElementById(
    "featured-user-role"
  ).innerText =
    user.role;

  document.getElementById(
    "featured-user-location"
  ).innerText =
    `🌍 ${user.location.city}, India`;

  document.getElementById(
    "featured-user-email"
  ).innerText =
    `📧 ${user.email}`;
}

// SHOW DEVELOPERS
function showDevelopers() {

  displayUsers(allUsers);

  document
    .querySelectorAll(".filter-btn")
    .forEach(btn => {
      btn.classList.remove("active-filter");
    });
}

// FILTER USERS
function filterUsers(gender, button) {

  document
    .querySelectorAll(".filter-btn")
    .forEach(btn => {
      btn.classList.remove("active-filter");
    });

  button.classList.add("active-filter");

  if (gender === "all") {

    displayUsers(allUsers);

    return;
  }

  const filtered =
    allUsers.filter(
      user =>
        user.gender === gender
    );

  displayUsers(filtered);
}

// SHOW INDIAN USERS
function showIndianUsers(button) {

  document
    .querySelectorAll(".filter-btn")
    .forEach(btn => {
      btn.classList.remove("active-filter");
    });

  button.classList.add("active-filter");

  displayUsers(allUsers);
}

// SEARCH USERS
function searchUsers() {

  const value =
    searchInput.value
      .trim()
      .toLowerCase();

  if (value === "") {

    displayUsers(allUsers);

    return;
  }

  const filtered =
    allUsers.filter(user => {

      const fullName =
        `${user.name.first} ${user.name.last}`
          .toLowerCase();

      return (

        fullName.includes(value) ||

        user.name.first
          .toLowerCase()
          .includes(value) ||

        user.name.last
          .toLowerCase()
          .includes(value)

      );
    });

  displayUsers(filtered);
}

// INITIAL LOAD
fetchUsers();