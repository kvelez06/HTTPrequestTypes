let tweetButton = document.getElementById("submit-tweet");
tweetButton.addEventListener("click", sendTweet);


function sendTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;

    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 201) {
            console.log(JSON.parse(this.responseText));
        } else if(this.readyState != 4) {
            console.log("Loading...");
        } else {
            console.log("Error !");
        }
    }

    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    ajax.send(JSON.stringify(tweetData));
}

let tweetButton = document.getElementById("tweet-submit");
tweetButton.addEventListener("click", sendTweet)


function deleteTweet() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200 ){
            console.log(this.responseText);
        } else if(this.readyState != 4) {
            console.log("Loading...");
        } else {
            console.log("Delete Error !");
        }
    }

    ajax.open("DELETE", )

}