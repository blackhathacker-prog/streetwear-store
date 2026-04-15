function order(product) {
    const phone = "2547XXXXXXXX"; // replace with your number
    const message = `Hello Tariqees, I want to order: ${product}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}