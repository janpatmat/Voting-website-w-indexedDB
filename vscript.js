let data = [
    {id:1, name: "Patrick Star" , votes: 0},
    {id:2, name: "Floyd Mayweather" , votes: 0},
    {id:3, name: "Dao Ming Si" , votes: 0},
    {id:4, name: "Park Jihyo" , votes: 0},
    {id:5, name: "Rastaman" , votes: 0},
    {id:6, name: "Naruto Uzumaki" , votes: 0}
    
];
let db = new Localbase('db');
let dicLength = Object.keys(data).length;

function getdbdiff(){
    fetch(req)
    .then(res => res.json())
    .then(data => console.log(data))
}



function resetdb(){
    var setstring;
    db.delete();
   for(var i = 0; i < dicLength; i++){
   
    
    db.collection("contestant").add(data[i]);
   }
   var testint = 1;
   var test = {ds: 1, testint:data[0].name}
   
}

function votepat(){
    var voteCount;
    db.collection("contestant").doc({id:1}).get().then(x => voteCount = Object.values(x)[2])
    .then(vc => document.getElementById("vcPatrick").innerHTML = vc )
    //x = dbcollection
    db.collection("contestant").doc({id:1}).get().then(x => voteCount = Object.values(x)[2])
    .then(intvote => intvote + 1)
    .then(y => db.collection("contestant").doc({id:1}).update({
        votes: y
    }))
    db.collection("contestant").doc({id:1}).get().then(x => voteCount = Object.values(x)[2])
    .then(checker => console.log("vote is now: " + checker))
    db.collection("contestant").doc({id:1}).get().then(x => voteCount = Object.values(x)[2])
    .then(vc => document.getElementById("vcPatrick").innerHTML = vc + 1 )
    alert("Voted for Patrick Star!");
  
   
}

function votefloyd(){
    var voteCount;
    //x = dbcollection
    db.collection("contestant").doc({id:2}).get().then(x => voteCount = Object.values(x)[2])
    .then(intvote => intvote + 1)
    .then(y => db.collection("contestant").doc({id:2}).update({
        votes: y
    }))
    db.collection("contestant").doc({id:2}).get().then(x => voteCount = Object.values(x)[2])
    .then(checker => console.log("vote is now: " + checker))
    db.collection("contestant").doc({id:2}).get().then(x => voteCount = Object.values(x)[2])
    .then(vc => document.getElementById("vcFloyd").innerHTML = vc + 1 )
    alert("Voted for Floyd Mayweather!");
   
}
//vote change
function votedao(){
    var voteCount;
    //change
    db.collection("contestant").doc({id:3}).get().then(x => voteCount = Object.values(x)[2])
    .then(intvote => intvote + 1)
    //change id
    .then(y => db.collection("contestant").doc({id:3}).update({
        votes: y
    }))
    //change id
    db.collection("contestant").doc({id:3}).get().then(x => voteCount = Object.values(x)[2])
    .then(checker => console.log("vote is now: " + checker))
    //changeid and element by id
    db.collection("contestant").doc({id:3}).get().then(x => voteCount = Object.values(x)[2])
    .then(vc => document.getElementById("vcDao").innerHTML = vc + 1 )
    //change name
    alert("Voted for Dao Ming Si!");
}

function votepark(){
    var voteCount;
    //change
    db.collection("contestant").doc({id:4}).get().then(x => voteCount = Object.values(x)[2])
    .then(intvote => intvote + 1)
    //change id
    .then(y => db.collection("contestant").doc({id:4}).update({
        votes: y
    }))
    //change id
    db.collection("contestant").doc({id:4}).get().then(x => voteCount = Object.values(x)[2])
    .then(checker => console.log("vote is now: " + checker))
    //changeid and element by id
    db.collection("contestant").doc({id:4}).get().then(x => voteCount = Object.values(x)[2])
    .then(vc => document.getElementById("vcPark").innerHTML = vc + 1 )
    //change name
    alert("Voted for Park Jihyo");
}

function voterasta(){
    var voteCount;
    //change
    db.collection("contestant").doc({id:5}).get().then(x => voteCount = Object.values(x)[2])
    .then(intvote => intvote + 1)
    //change id
    .then(y => db.collection("contestant").doc({id:5}).update({
        votes: y
    }))
    //change id
    db.collection("contestant").doc({id:5}).get().then(x => voteCount = Object.values(x)[2])
    .then(checker => console.log("vote is now: " + checker))
    //changeid and element by id
    db.collection("contestant").doc({id:5}).get().then(x => voteCount = Object.values(x)[2])
    .then(vc => document.getElementById("vcRasta").innerHTML = vc + 1 )
    //change name
    alert("Voted for Rastaman");
}
function votenar(){
    var voteCount;
    //change
    db.collection("contestant").doc({id:6}).get().then(x => voteCount = Object.values(x)[2])
    .then(intvote => intvote + 1)
    //change id
    .then(y => db.collection("contestant").doc({id:6}).update({
        votes: y
    }))
    //change id
    db.collection("contestant").doc({id:6}).get().then(x => voteCount = Object.values(x)[2])
    .then(checker => console.log("vote is now: " + checker))
    //changeid and element by id
    db.collection("contestant").doc({id:6}).get().then(x => voteCount = Object.values(x)[2])
    .then(vc => document.getElementById("vcNar").innerHTML = vc + 1 )
    //change name
    alert("Voted for Naruto");
}


function setVote(){
    var pvoteCount;
    var fvoteCount;
    db.collection("contestant").doc({id:1}).get().then(x => pvoteCount = Object.values(x)[2])
    .then(vc => document.getElementById("vcPatrick").innerHTML = vc )
    db.collection("contestant").doc({id:2}).get().then(x => fvoteCount = Object.values(x)[2])
    .then(vc => document.getElementById("vcFloyd").innerHTML = vc )
    db.collection("contestant").doc({id:3}).get().then(x => fvoteCount = Object.values(x)[2])
    .then(vc => document.getElementById("vcDao").innerHTML = vc )
    db.collection("contestant").doc({id:4}).get().then(x => fvoteCount = Object.values(x)[2])
    .then(vc => document.getElementById("vcPark").innerHTML = vc )
    db.collection("contestant").doc({id:5}).get().then(x => fvoteCount = Object.values(x)[2])
    .then(vc => document.getElementById("vcRasta").innerHTML = vc )
    db.collection("contestant").doc({id:6}).get().then(x => fvoteCount = Object.values(x)[2])
    .then(vc => document.getElementById("vcNar").innerHTML = vc )
}