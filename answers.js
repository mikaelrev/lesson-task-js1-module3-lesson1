// Question 1

const menuIsOpen = false;

if(menuIsOpen) {
    console.log("truthy");
} else {
    console.log("falsy");
}



// Question 2

// const url = "https://api.rawg.io/api/games?platforms=4&genres=action&publishers=354";

// platforms is a parameter with a value of 4
// genres is parameter with a value of action
// publishers is a parameter with a value of 354



// Question 3

const url = "https://cat-fact.herokuapp.com/facts";

async function getCatFacts() {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results.length);
}

getCatFacts();