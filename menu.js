var foodTata = JSON.parse(localStorage.getItem("foodData"))

async function meal() {
    try {
        let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
        let res = await fetch(url)
        let data = await res.json();
        console.log('data: ', data.meals);
        var data1 = data.meals
        appendMeal(data1)
        localStorage.setItem("foodData", JSON.stringify(data1))
    }
    catch (err) {
        console.log('err: ', err);
    }
}
function appendMeal(data) {
    document.querySelector("#food").innerHTML = ""
    data.forEach(function (ele, i) {
        let y = Math.ceil((Math.random()) * 500)
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");

        let image = document.createElement("img")
        image.src = ele.strMealThumb;
        image.setAttribute("id", "foodImage")

        let name = document.createElement("h2")
        name.textContent = ele.strMeal;

        let price = document.createElement("h3");
        price.textContent = "$ " + " " + y

        let btn = document.createElement("button");
        btn.textContent = "Add to cart";
        btn.addEventListener("click", function () {
            gotocart(i)
        })

        div1.append(image);
        div2.append(div1, name, price, btn)
        document.getElementById("food").append(div2)
    });
}
var cart = JSON.parse(localStorage.getItem("cartdata")) || [];
function gotocart(i) {
    cart.push(foodTata[i]);
    localStorage.setItem("cartdata", JSON.stringify(cart))
    window.location.reload()

}

document.getElementById("item").textContent = "Cart" + " " + cart.length


document.getElementById("item").addEventListener("click", go)
function go() {
    window.location.href = "cart.html"
}
console.log(cart)

meal()