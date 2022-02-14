var quotes = [
	{
		"quote": "Be the change you wish to see.",
		"author": "Mahatma Gandhi",
		"link": "https://en.wikipedia.org/wiki/Mahatma_Gandhi"
	},
	{
		"quote": "Social progress can be measured by the social position of the female sex.",
		"author": "Karl Marx",
		"link": "https://en.wikipedia.org/wiki/Karl_Marx"
	},
	{
		"quote": "I like the religion that teaches liberty, equality and fraternity.",
		"author": "B. R. Ambedkar",
		"link": "https://en.wikipedia.org/wiki/B._R._Ambedkar"
	},
	{
		"quote": "If you tremble with indignation at every injustice then you are a comrade of mine.",
		"author": "Ernesto Che Guevara",
		"link": "https://en.wikipedia.org/wiki/Che_Guevara"
	},
	{
		"quote": "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me.",
		"author": "Abdul Kalam",
		"link": "https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam"
	}
];

// list of colors to show as background colors
function change(){
    var bgColors = ["red", "pink", "yellow", "green", "white", "darkcyan", "silver", "BlanchedAlmond", "chocolate", "darkorchid"];
    var secret_no=Math.floor(Math.random() * bgColors.length);
    var back=Math.floor(Math.random() * bgColors.length);
    // console.log(bgColors[secret_no]);
    document.getElementById("main").style.background=bgColors[secret_no]
    document.getElementById("bg").style.background=bgColors[back]
    var author=Math.floor(Math.random()*quotes.length);
    document.getElementById("para").innerHTML=quotes[author].quote
}

//  on starting of window we will need to satrt with 1 random quote and author and link of him
//  for that we will use onload in window with a function named start as a value a
// function start will do set the Value of saidso, author, link and add background colors to main and quote division
// Function changeQuote will work when the user click the button kuch aur and it will
// change the quote randomly from a list, and the colors of main and quote divisons
