// Jan 30, 2017
// Drew I Parker

var dcClass = [
    "Sean",
    "Drew",
    "Daniel",
    "Kyle",
    "Rishi",
    "Liz",
    "Anna",
    "Ryan",
    "Casey",
    "Connie",
    "Sarah",
    "Andy",
    "Michael",
    "Paul",
    "Mason"
];

dcClass.push("Rob");
dcClass.forEach((member, index) => {
    console.log(`${index + 1}. ${member}`);
});
