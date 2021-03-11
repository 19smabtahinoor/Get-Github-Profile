
fetch(  'https://api.github.com/users')
.then( response => response.json())
.then( userData => {
         userData.forEach(value => {
             let userProfile =
             `
            <div class="users_Card">
                <div class="users_profile_picture">
                    <img src="${value.avatar_url}" alt="Users Profile Picture" class="profile_picture">
                </div>
 
                <div class="users_information">
                    <div class="users_name">
                        <h2 class="users_name_text">${value.login}</h2>
                    </div>
                    <div class="users_followers_following_repo">
                        <button class="users_followers">Followers</button>
                        <button class="users_following">Following</button>
                        <button class="users_repo">Repositories</button>
                    </div>
 
                    <div class="users_followers_following_repo_numbers">
                        <h4 class="user_followers_numbers">${value.id}</h4>
                        <h4 class="user_followering_numbers"></h4>
                        <h4 class="user_repo_numbers"></h4>
                    </div>
                </div>
            </div>
             `
        const userCard = document.querySelector(".user_container");
        userCard.insertAdjacentHTML("beforeend",userProfile)
         })
})