var carr = JSON.parse(localStorage.getItem("cartdata"))
console.log(carr)
display(carr)

function display(carr) {
    document.getElementById("food").innerHTML = ""
    carr.forEach(function (ele, i) {
        let y = Math.ceil((Math.random()) * 500)
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");

        let image = document.createElement("img")
        image.src = ele.strMealThumb;
        image.setAttribute("id", "foodImage")

        let name = document.createElement("h2")
        name.textContent = ele.strMeal;

        let price = document.createElement("h3");
        price.textContent = "$ " + " " + y;
        //sum.push(price)

        let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.addEventListener("click", function () {
            remove(i)
        })


        div1.append(image);
        div2.append(div1, name, price, btn)
        document.getElementById("food").append(div2)

    })
}

function remove(i) {
    carr.splice(i, 1);
    localStorage.setItem("cartdata", JSON.stringify(carr));
    display(carr)
}
// var sum = [];
// console.log('sum: ', sum);
document.getElementById("check").addEventListener("click", checkout);
function checkout() {
    window.location.href = "checkout.html"
}
