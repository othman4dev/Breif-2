






//All info.

var id;
var price;
var discription;
var sold;
var rate;
var src;
var priceMax = 0;
// For range input value change.
    function changeValue(e) {
        document.getElementById("range-price").innerText = "$" + e.value*100;
        sortByPrice(e.value*100);
    }
// To remove filter search
    function unCheck() {
        var all = document.querySelectorAll('.radios');
        console.log('test');
        for (let i = 0; i < 4; i++) {
            all[i].checked = false;
            console.log('test');
        }
    }
// To get data form product div.
    function transportInfo(e) {
        all = e.childNodes;
        id = all[1].id;
        price = all[3].innerText;
        discription = all[7].innerText;
        sold = all[11].innerText;
        rate = all[9].innerText;
        src = window.getComputedStyle(document.getElementById(id)).backgroundImage;
        goToPage();
    }
// document.write() search result page with product info.
    function goToPage() {
        document.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Wishe store page">
    <meta name="keywords" content="E-commerce, Products, Clothes, Buy, Whishe, Amazon, Prices">
    <meta name="author" content="Othman Kharbouch">
    <link rel="stylesheet" href="style.css">
    <title>Product page</title>
</head>
<body>
    <header class="newHeader">
        <div class="left" style="display: flex;align-items: center;justify-content: stretch;gap: 15px;flex-grow: 1;">
            <img src="Assets/icons8-amazon-96.svg" class="logo" alt="" style="cursor: pointer;" onclick="goTo('index')">
            <form action="#" style="display: flex;align-items: center;">
                <input type="text" class="search-product" id="fix-search" placeholder="Chercher un produit une marque ou categotie...">
                <img src="Assets/search.svg" style="width: 30px;height: 30px;margin-left: 25px;display: none;cursor: pointer;" alt="" id="search-icon" onclick="results()">
            </form>
        </div>
        <div class="right" style="display: flex;align-items: center;justify-content: right;margin-right: 15px;flex-wrap: nowrap;width: fit-content;">
            <div class="log" style="display: flex; gap: 5px;">
                <button class="login" style="border-right:solid 2px #E2E8F0;">Sign in</button>
                <button class="login">Create account</button>
            </div>
            <div class="country" style="display: flex;">
                <img src="Assets/img.icons8.svg" class="morocco" alt="">
                <p class="cCode">MAR</p>
            </div>
            <div class="cartbox" style="display: flex;cursor:pointer;" onclick="goTo('cart')">
                <img src="Assets/icons8-cart-90 (1).svg" class="cart" alt="">
                <p class="cart-items">5</p>
            </div>
        </div>
    </header>
    <main>
        <section class="product-show">
            <div class="product-case">
                <div class="product-moyen-img" id="${id}"></div>
                <div style="width: 100%;">
                    <div class="more-pics" style="display: flex;width: 50vw;max-width: 450px;justify-content: flex-start;gap: 15px;margin-left: 15px;margin-top: 50px;">
                        <div style="width: 50px;height: 50px;background-color: #E2E8F0;margin-left: 20px;"></div>
                        <div style="width: 50px;height: 50px;background-color: #E2E8F0;"></div>
                        <div style="width: 50px;height: 50px;background-color: #E2E8F0;"></div>
                        <div style="width: 50px;height: 50px;background-color: #E2E8F0;"></div>
                        <img src="Assets/icons8-arrow-50.svg" alt="" style="width: 50px;height: 50px;">
                    </div>
                </div>
            </div>
            <div class="all-info">
                <h2 class="name" id="product-name">${discription}</h2>
                <div style="display: flex;margin-top: 25px;">
                    <button class="rate"><img src="Assets/star.svg" alt="" class="star">${rate}</button>
                    <p class="sold">$${sold}</p>
                </div>
                <p class="discription">${discription}</p>
                <div class="likes-price">
                    <p class="prices">${price}</p>
                    <button class="likes" onclick="addLike(this)"><p id="likes-num">250</p> <img src="Assets/heart.svg" alt="not-liked" id="heart" style="width:35px"></button>
                </div>
                <p style="margin-left: 25px;">Size</p>
                <div style="border: solid grey 1px;display: flex;justify-content: flex-start;align-items: stretch;max-width: 300px;margin-left: 50px;">
                    <button class="sizes" onclick="set(this)">XXL</button>
                    <button class="sizes" onclick="set(this)">XL</button>
                    <button class="sizes" onclick="set(this)">L</button>
                    <button class="sizes" onclick="set(this)">M</button>
                </div>
                <p style="margin-left: 25px;">Color</p>
                <div class="colors">
                    <div style="border-radius: 50%;width: 30px;height: 30px;background-color: #b4b9bf;"></div>
                    <div style="border-radius: 50%;width: 30px;height: 30px;background-color: #006eff;"></div>
                    <div style="border-radius: 50%;width: 30px;height: 30px;background-color: #26ff00;"></div>
                    <div style="border-radius: 50%;width: 30px;height: 30px;background-color: #cd0808;"></div>
                </div>
            </div>
            <div class="pay">
                <div class="ship-price" style="justify-content: space-between;max-height: 45px;align-items: center;color: grey;padding-inline: 15px;">
                    <p>Ship to:</p>
                    <p> Morocco</p>
                </div>
                <div class="ship-price" style="flex-direction: column;max-height : 120px;">
                    <p style="width: 100%;margin-left: 20px;">Shipping</p>
                    <p class="descr">from China to Morocco in 22 Days. Delivery expected in 25/10/2023</p>
                </div>
                <div class="ship-price" style="flex-direction: column;max-height: 250px;">
                    <p style="width: 100%;margin-left: 20px;">Availablity</p>
                    <p class="descr">205 pieces availables. -5% discount on every additional piece</p>
                    <div class="counter">
                        <button id="moins" onclick="minusOne()">-</button>
                        <p id="count">1</p>
                        <button id="plus" onclick="addOne()">+</button>
                    </div>
                    <button style="background-color: #00CB6A;color: white ;height: 50px;width: 80%;border-radius: 5px;border: none;margin-top: 10px;margin-left: 35px;">Add to cart</button>
                    <button style="background-color: #fff;color: #00CB6A; height: 50px;width: 80%;border-radius: 5px;border: none;margin-top: 10px;margin-left: 35px;margin-bottom: 15px;" onclick="goTo('cart')">Buy Now</button>
                </div>
                <div class="ship-price" style="align-items: center;justify-content: center;gap: 80px;">
                    <div style="display: flex;align-items: center;justify-content: space-evenly;gap: 10px;">
                        <img src="Assets/chat.svg" alt="" class="bottom">
                        <p>Chat</p>
                    </div>
                    <div style="display: flex;align-items: center;justify-content: space-evenly;gap: 10px;">
                        <img src="Assets/share.svg" alt="" class="bottom">
                        <p>share</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-desc">
            <h2># Description</h2>
            <article style="padding-inline: 40px;text-indent: 40px;">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum est et quis officia. Tempora dolorem obcaecati reprehenderit voluptatum sunt omnis, esse dolor odit porro perferendis cumque in, sapiente odio!
                At eaque nihil repudiandae laborum nisi quos minus tenetur assumenda architecto. Culpa dignissimos, odio mollitia dolorum iusto totam eligendi perspiciatis omnis voluptates ad alias, minus quidem corrupti minima error laudantium!
                Iure incidunt soluta molestiae deserunt fuga veritatis quibusdam assumenda. Nostrum nisi aliquam sunt corrupti repellat dolores explicabo numquam earum, hic ipsa, corporis fuga omnis, consequatur iusto optio nemo totam. Quas?
                Ut tempora impedit cum omnis! Omnis adipisci quasi consequuntur? Numquam quis maiores culpa eaque soluta quod eius sed aliquid iste corrupti facilis earum veniam expedita, ullam, id tempora, officia beatae?
                Corrupti earum mollitia ipsam. Aut dolor dolorum autem sapiente suscipit veritatis sunt laboriosam impedit voluptates aperiam tenetur, nesciunt voluptatum eius minus dicta nulla culpa similique quasi! Natus quibusdam temporibus culpa.
            </article>
            <div class="quick-fix">
                <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque illum quam quasi nulla tempore. Sunt dolorum sapiente, dolores similique animi nam reprehenderit a asperiores, porro quas, autem inventore ab doloremque!
                    Corporis voluptate magni repellendus blanditiis ut dolores, minima qui nobis fuga ab dicta pariatur laudantium aut vitae consectetur esse debitis dignissimos explicabo quasi inventore obcaecati odio earum ipsa. Deserunt, doloremque!
                    Beatae ad omnis quae molestiae, reprehenderit fugit aspernatur veniam, neque veritatis culpa, cum ducimus vel? Provident dolorem odit eaque eum aperiam at placeat cumque, inventore officiis, expedita fuga accusamus. Facilis.
                    Molestiae nulla officia cum vel reprehenderit dolor ullam animi tempore adipisci soluta commodi, id distinctio fugiat. Minus velit quam ducimus vero molestias? Accusamus quibusdam illum fugiat sed? Fugiat, libero pariatur!
                    Corrupti earum mollitia ipsam. Aut dolor dolorum autem sapiente suscipit veritatis sunt laboriosam impedit voluptates aperiam tenetur, nesciunt voluptatum eius minus dicta nulla culpa similique quasi! Natus quibusdam temporibus culpa.
                </article>
                <div class="product-pic translated" id="${id}""></div>
            </div>
        </section>
        <section class="reviews">
            <div class="ratings">
                <h3>&nbsp;Reviews</h3>
                <div class="wanted">
                    <img src="Assets/star.svg" alt="" class="stars">
                    <img src="Assets/star.svg" alt="" class="stars">
                    <img src="Assets/star.svg" alt="" class="stars">
                    <img src="Assets/star.svg" alt="" class="stars">
                    <img src="Assets/star.svg" alt="" class="stars">
                    ${rate} out of 5.0
                    <p class="this">45 people voted</p>
                </div>
                <div class="slider-fixed">
                    <div style="width: 100%;display: flex;align-items: center;justify-content: flex-start;gap: 15px;max-height: 20px;"><p>1 star</p><div style="width: 300px;height: 10px;background-color: #b4b9bf;display: flex;border-radius: 15px;"><div style="background-color: goldenrod;width: 80%;height: 10px;border-radius: 15px;"></div></div><p>88.8%</p></div>
                    <div style="width: 100%;display: flex;align-items: center;justify-content: flex-start;gap: 15px;max-height: 20px;"><p>2 star</p><div style="width: 300px;height: 10px;background-color: #b4b9bf;display: flex;border-radius: 15px;"><div style="background-color: goldenrod;width: 20%;height: 10px;border-radius: 15px;"></div></div><p>12.2%</p></div>
                    <div style="width: 100%;display: flex;align-items: center;justify-content: flex-start;gap: 15px;max-height: 20px;"><p>3 star</p><div style="width: 300px;height: 10px;background-color: #b4b9bf;display: flex;border-radius: 15px;"><div style="background-color: goldenrod;width: 0%;height: 10px;border-radius: 15px;"></div></div><p>0%</p></div>
                    <div style="width: 100%;display: flex;align-items: center;justify-content: flex-start;gap: 15px;max-height: 20px;"><p>4 star</p><div style="width: 300px;height: 10px;background-color: #b4b9bf;display: flex;border-radius: 15px;"><div style="background-color: goldenrod;width: 0%;height: 10px;border-radius: 15px;"></div></div><p>0%</p></div>
                    <div style="width: 100%;display: flex;align-items: center;justify-content: flex-start;gap: 15px;max-height: 20px;"><p>5 star</p><div style="width: 300px;height: 10px;background-color: #b4b9bf;display: flex;border-radius: 15px;"><div style="background-color: goldenrod;width: 0%;height: 10px;border-radius: 15px;"></div></div><p>0%</p></div>
                </div>
            </div>
            <div class="comments">
                <div class="comment" id="comment1">
                    <div  style="display: flex;gap: 0px;flex-wrap: wrap;">
                        <img src="Assets/pic3.webp" alt="" style="width: 50px;height: 50px;border-radius: 50%;">
                        <p id="username" style="margin-left: 25px;">Laura Martinez</p>
                        <div class="wrapping">
                            <img src="Assets/yellowStar.svg" alt="">
                            <img src="Assets/yellowStar.svg" alt="">
                            <img src="Assets/yellowStar.svg" alt="">
                            <img src="Assets/yellowStar.svg" alt="">
                            <img src="Assets/yellowStar.svg" alt="">
                        </div>
                        <p style="color: grey;font-size: 9px;margin-left: 70px;width: 100%;margin-top: -10px;">12 Jun 2023</p>
                    </div>
                    <p class="comment-text">I can confidently say that this purchase was a worthwhile investment. Quality and customer satisfaction are at the forefront of this product.</p>
                </div>
                <div class="comment" id="comment2">
                    <div  style="display: flex;gap: 0px;flex-wrap: wrap;">
                        <img src="Assets/pic1.webp" alt="" style="width: 50px;height: 50px;border-radius: 50%;">
                        <p id="username" style="margin-left: 25px;">Mike Deterson</p>
                        <div class="wrapping">
                            <img src="Assets/yellowStar.svg" alt="">
                            <img src="Assets/yellowStar.svg" alt="">
                            <img src="Assets/yellowStar.svg" alt="">
                            <img src="Assets/yellowStar.svg" alt="">
                            <img src="Assets/yellowStar.svg" alt="">
                        </div>
                        <p style="color: grey;font-size: 9px;margin-left: 70px;width: 100%;margin-top: -10px;">12 Jun 2023</p>
                    </div>
                    <p class="comment-text">I've made many purchases from this brand, and each time, I'm left thoroughly impressed. Quality and satisfaction are guaranteed</p>
                </div>
                <div class="comment" id="comment3">
                    <div  style="display: flex;gap: 0px;flex-wrap: wrap;">
                        <img src="Assets/pic2.svg" alt="" style="width: 50px;height: 50px;border-radius: 50%;">
                        <p id="username" style="margin-left: 25px;">Carlos Piata</p>
                        <div class="wrapping">
                            <img src="Assets/yellowStar.svg" alt="">
                            <img src="Assets/yellowStar.svg" alt="">
                            <img src="Assets/yellowStar.svg" alt="">
                            <img src="Assets/yellowStar.svg" alt="">
                            <img src="Assets/yellowStar.svg" alt="">
                        </div>
                        <p style="color: grey;font-size: 9px;margin-left: 70px;width: 100%;margin-top: -10px;">12 Jun 2023</p>
                    </div>
                    <p class="comment-text">This product exceeded my expectations. It's clear that the manufacturer prioritizes performance, design, and user satisfaction</p>
                </div>
            </div>
        </section>
        <h2># Recomended products</h2>
        <section class="section2">
            <div class="case" onclick="transportInfo(this)">
                <div class="product-pic" id="products1"></div>
                <p class="prices">5199</p>
                <p class="prices old">7899</p>
                <p class="discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptates alias obcaecati fugit at!</p>
                <button class="rate"><img src="Assets/star.svg" alt="" class="star">5.0</button>
                <p class="sold">Sold 121</p>
                <div class="icon"><img src="Assets/mall.svg" alt="" class="mall"></div>
            </div>
            <div class="case" onclick="transportInfo(this)">
                <div class="product-pic" id="products2"></div>
                <p class="prices">799</p>
                <p class="prices old">1099</p>
                <p class="discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptates alias obcaecati fugit at!</p>
                <button class="rate"><img src="Assets/star.svg" alt="" class="star">5.0</button>
                <p class="sold">Sold 121</p>
                <div class="icon"><img src="Assets/mall.svg" alt="" class="mall"></div>
            </div>
            <div class="case" onclick="transportInfo(this)">
                <div class="product-pic" id="products3"></div>
                <p class="prices">200</p>
                <p class="prices old">599</p>
                <p class="discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptates alias obcaecati fugit at!</p>
                <button class="rate"><img src="Assets/star.svg" alt="" class="star">5.0</button>
                <p class="sold">Sold 121</p>
                <div class="icon"><img src="Assets/mall.svg" alt="" class="mall"></div>
            </div>
            <div class="case" onclick="transportInfo(this)">
                <div class="product-pic" id="products4"></div>
                <p class="prices">250</p>
                <p class="prices old">689</p>
                <p class="discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptates alias obcaecati fugit at!</p>
                <button class="rate"><img src="Assets/star.svg" alt="" class="star">5.0</button>
                <p class="sold">Sold 121</p>
                <div class="icon"><img src="Assets/mall.svg" alt="" class="mall"></div>
            </div>
            <div class="case" onclick="transportInfo(this)">
                <div class="product-pic" id="products5"></div>
                <p class="prices">499</p>
                <p class="prices old">899</p>
                <p class="discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptates alias obcaecati fugit at!</p>
                <button class="rate"><img src="Assets/star.svg" alt="" class="star">5.0</button>
                <p class="sold">Sold 121</p>
                <div class="icon"><img src="Assets/mall.svg" alt="" class="mall"></div>
            </div>
            <div class="case" onclick="transportInfo(this)">
                <div class="product-pic" id="products6"></div>
                <p class="prices">12000</p>
                <p class="prices old">15999</p>
                <p class="discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptates alias obcaecati fugit at!</p>
                <button class="rate"><img src="Assets/star.svg" alt="" class="star">5.0</button>
                <p class="sold">Sold 121</p>
                <div class="icon"><img src="Assets/mall.svg" alt="" class="mall"></div>
            </div>
        </section>
    </main>
    <footer>
        <div style="transform: translateY(30px);">
            <a href="secondary/about.html">About</a>
            <a href="secondary/support.html">About</a>
            <a href="secondary/faq.html">About</a>
        </div>
        <div>
            <p>Copyright 2023 &copy;. All rights reserved</p>
        </div>
    </footer>
</body>
</html>
<script src="script.js"></script>
        `);
    }
    // controll number of items of every product.
    function addOne() {
        var count = parseInt(document.getElementById('count').innerText) + 1;
        document.getElementById('count').innerText = count;
        if (count < 1) {
            document.getElementById('count').innerText = 1;
        }
    }
    function addOne1() {
        var count = parseInt(document.getElementById('count1').innerText) + 1;
        document.getElementById('count1').innerText = count;
        if (count < 1) {
            document.getElementById('count1').innerText = 1;
        }
    }
    function addOne2() {
        var count = parseInt(document.getElementById('count2').innerText) + 1;
        document.getElementById('count2').innerText = count;
        if (count < 1) {
            document.getElementById('count2').innerText = 1;
        }
    }
    function addOne3() {
        var count = parseInt(document.getElementById('count3').innerText) + 1;
        document.getElementById('count3').innerText = count;
        if (count < 1) {
            document.getElementById('count3').innerText = 1;
        }
    }
    function minusOne() {
        var count = parseInt(document.getElementById('count').innerText) + -1;
        document.getElementById('count').innerText = count;
        if (count < 1) {
            document.getElementById('count').innerText = 1;
        }
    }
    function minusOne1() {
        var count = parseInt(document.getElementById('count1').innerText) + -1;
        document.getElementById('count1').innerText = count;
        if (count < 1) {
            document.getElementById('count1').innerText = 1;
        }
    }
    function minusOne2() {
        var count = parseInt(document.getElementById('count2').innerText) + -1;
        document.getElementById('count2').innerText = count;
        if (count < 1) {
            document.getElementById('count2').innerText = 1;
        }
    }
    function minusOne3() {
        var count = parseInt(document.getElementById('count3').innerText) + -1;
        document.getElementById('count3').innerText = count;
        if (count < 1) {
            document.getElementById('count3').innerText = 1;
        }
    }
    // 
    function setValue(e) {
        e.value = parseInt(e.id);
    }
    function set(e) {
        var all = document.querySelectorAll('.sizes');
        for (let i = 0; i < 4; i++) {
            all[i].style.boxShadow = ('none');
        }
        e.style.boxShadow = ('#FF8A00 0 0 0 2px');
    }
    function searchIt(e) {
        document.getElementById('search-icon').style.display = ("block");
        if (e.value == '') {
            document.getElementById('search-icon').style.display = ("none");
        }
    }
    function results() {
        var val = document.getElementById('search').value;
        window.location.href = 'search.html';
        console.log('done');
        document.getElementById('search').value = val;
    }
    function addLike(e) {
        var source =  document.getElementById('heart');
        var likes = document.getElementById('likes-num');
        if (source.alt == 'not-liked') {
            source.src = 'Assets/redHeart.svg';
            source.alt = 'liked';
            var likesNum = parseInt(likes.innerText);
            likes.innerText = likesNum + 1;
        } else if(source.alt == 'liked') {
            source.src = 'Assets/heart.svg';
            source.alt = 'not-liked';
            var likesNum = parseInt(likes.innerText);
            likes.innerText = likesNum - 1;
        }
    }
    function selectAll(e) {
        if (e.checked == true) {
            var others = document.querySelectorAll('.selectMe');
            for (let i = 0; i < others.length; i++) {
                if (others[i].checked == false) {
                    others[i].click();
                }
                document.getElementById('select-or-no').innerText = 'Unselect all';
            }
        } else if (e.checked == false) {
            var others = document.querySelectorAll('.selectMe');
            for (let i = 0; i < others.length; i++) {
                if (others[i].checked == true) {
                    others[i].click();
                }
                document.getElementById('select-or-no').innerText = 'Select all products';
            }
        }
    }
    function checkIfAllIsChecked() {
        var count = 0;
        var others = document.querySelectorAll('.selectMe');
        for (let i = 0; i < others.length; i++) {
            if (others[i].checked == true) {
                count++;
            }
        }
        if (count == others.length) {
            document.getElementById('select-or-no').innerText = 'Unselect all';
            document.getElementById('checking').checked = true;
        }
    }
    var total = 0;
    var fee = 0;
    var price = 0;
    var old1 = 0;
    var old2 = 0;
    var old3 = 0;
    function hereComesTheMoney(taman,ship,x,y) {
        var name = 'count' + y;
        console.log(name);
        taman = taman * parseInt(document.getElementById(name).innerText);
        if (x.checked == true) {
            price = price + taman;
            fee = fee + ship;
            if (y == 1) {
                old1 = taman;
            } else if (y == 2) {
                old2 = taman;
            } else {
                old3 = taman;
            }
        }
        if (x.checked == false) {
            if (y == 1) {
                price = price - old1;
            } else if (y == 2) {
                price = price - old2;
            } else {
                price = price - old3;
            }
            fee = fee - ship;
        }
        total = price + fee;
        var temp = '$' + total.toString();
        var temp2 = '$' + fee.toString();
        var temp3 = '$' + price.toString();
        document.getElementById('total-money').innerText = temp;
        document.getElementById('price-too').innerText = temp3;
        document.getElementById('fee-fee').innerText = temp2;
    }
    function searchForIt(e) {
        document.getElementById('search').value = e.innerText;
        document.getElementById('search-icon').style.display = ('block');
    }
    function sortByPrice(e) {
        var all = document.querySelectorAll('.case');
        for (let i = 0; i < all.length; i++) {
            var temp = all[i].childNodes[3];
            console.log(temp);
            if (e < parseInt(temp.innerText)) {
                all[i].style.display = ('none');
            }
            if (e >= parseInt(temp.innerText)) {
                all[i].style.display = ('flex');
            }
        }
    }
    function goTo(index) {
        var address = index + '.html';
        console.log(address);
        window.location.href = address;
    }
