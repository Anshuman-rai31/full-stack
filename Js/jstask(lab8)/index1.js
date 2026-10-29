var objArr = [];
function addObject() {
    let movie = document.getElementById("val1").value;
    let rating = document.getElementById("val2").value;
    let obj = {
        movie: movie,
        rating: rating
    }
    objArr.push(obj);
    console.log(objArr);

}

function searchAndDisply() {
    let movie = document.getElementById("val1").value;
    let rating = document.getElementById("val2").value;
    let obj = {
        movie: movie,
        rating: rating
    }
    objArr.push(obj);
    console.log(objArr);

}

function modifyRating() {
    let movie = document.getElementById("val3").value;
    let rating = document.getElementById("val4").value;
    let obj = {
        movie: movie,
        rating: rating
    }
    objArr.push(obj);
    console.log(objArr);

}