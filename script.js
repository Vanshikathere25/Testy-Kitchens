let count = 0;

function addCart() {
    alert("Item Added To Cart Successfully!");
    
    // कार्ट संख्या बढ़ाएं
    count = count + 1;
    
    // हेडर में लाइव नंबर बदलें
    document.getElementById("cart-count").innerText = count;
}
