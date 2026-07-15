let count = 0;

function addCart() {
    alert("Item Added To Cart Successfully!");
    
    // कार्ट काउंट को 1 बढ़ाएं
    count = count + 1;
    
    // स्क्रीन पर दिख रहे नंबर को अपडेट करें
    document.getElementById("cart-count").innerText = count;
}
