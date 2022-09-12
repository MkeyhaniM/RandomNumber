let getData = document.getElementById("getData")

getData.addEventListener("click", e => {
    e.preventDefault();
    let year = Number(document.getElementById("data").value)
    apiDate(year)
})

let apiDate = async (y = "random") => {

    y = y ? y : "random";

    console.log(y)

    let url = `http://numbersapi.com/${y}/date`;
    let copy = document.getElementById("result")
    let response = await fetch(url)
    let getResponse = await response.text()


    copy.innerText = getResponse;
    copy.className = "alert alert-success";
    document.querySelector("#data").classList = "border border-success form-control-lg ml-5"
}