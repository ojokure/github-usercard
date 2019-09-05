/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
          
*/

//function getGithubCardMaker() {
  axios.get('https://api.github.com/users/ojokure')
    .then(res => {
      const data = res.data;
      const card = createGitCard(data);
      const cards = document.querySelector('.cards')
      cards.appendChild(card);
      debugger
    })
    .catch(err => {
      document.body.innerText = err.message;
     debugger
    });
// //}


// /* Step 2: Inspect and study the data coming back, this is YOUR 
//    github info! You will need to understand the structure of this 
//    data in order to use it to build your component function 
//    Skip to Step 3.
// */
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createGitCard(githubdata) {

  const cardDiv = document.createElement('div');

  cardDiv.classList.add('card');

  const userImg = document.createElement('img');

  cardDiv.appendChild(userImg)

  userImg.setAttribute('src', githubdata.avatar_url);

  const cardInfoDiv = document.createElement('div');

  
  const h3Name = document.createElement('h3');

  const pUsername = document.createElement('p');

  const pLocation = document.createElement('p');

  const pProfile = document.createElement('p');

  
  const userAddressAnchor = document.createElement('a');

  const pFollowers = document.createElement('p');

  const pFollowings = document.createElement('p');

  const pBio = document.createElement('p');

  cardInfoDiv.appendChild(h3Name);

  cardInfoDiv.appendChild(pUsername);

  cardInfoDiv.appendChild(pLocation);

  cardInfoDiv.appendChild(pProfile);

  cardInfoDiv.appendChild(pFollowers);

  cardInfoDiv.appendChild(pFollowings);

  cardInfoDiv.appendChild(pBio);

  cardDiv.appendChild(cardInfoDiv);

  pProfile.appendChild(userAddressAnchor);

  // console.log(cardDiv);

  return cardDiv
}



// createGitCard({avatar_url:"https://avatars0.githubusercontent.com/u/51193046?v=4"});
/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
