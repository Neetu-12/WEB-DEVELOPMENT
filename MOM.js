function update(){
    var naam=["Neetu","shubh","kirti","Roshani","Ruchi","Ujala","Sunita","Rekha","Gudiya","Laxmi","Neha","Shaheen","Namrata","Farhat","Khushbu","Varsha","Pooja","Priyanka"]
    var secret_no=Math.floor(Math.random() * naam.length);
    var secret_no1=Math.floor(Math.random() * naam.length);
    document.getElementById("1st prsn").innerHTML=naam[secret_no]
    document.getElementById("2nd prsn").innerHTML=naam[secret_no1]

    // console.log(naam[secret_no]);
}