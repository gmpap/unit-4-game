


for(let i = 0; i < 4; i++){

let crystalNum = Math.floor(Math.random()*12+1);
console.log(crystalNum);

const crystal = $(".crystal").eq(i).attr("value", crystalNum);
console.log($(".crystal"));
//console.log($(".crystal").attr("value", crystalNum));

//$('.crystals').append(crystal);
};