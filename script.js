function order(product) {
    const phone = "2547XXXXXXXX"; // put your number
    const message = `Hi, I want to order: ${product}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}