let userData = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));

  console.log(userData[0]);
};

const userDisplay = async () => {
  await fetchUser();

  const dataParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  const dayCalc = (date) => {
    let today = new Date();
    let tatdayTimesatmp = Date.parse(today);
    let timestamp = Date.parse(date);

    return Math.ceil((tatdayTimesatmp - timestamp) / 8.64e7);
  };

  document.body.innerHTML = userData
    .map(
      (user) =>
        `
        <div class='card'>
        <img src="${user.picture.large}  
        "alt="photo de ${user.name.first}">
            <h3> ${user.name.first} </h3>
            <h3> ${user.name.last} </h3>
            <h4> ${user.gender} </h4>
            <h5> ${user.location.city} </h5>
            <p> ${dataParser(user.dob.date)} </p>
            <em> Membre depuis :  ${dayCalc(user.registered.date)} jours </em>
        </div>
     `
    )
    .join("");
};
userDisplay();
