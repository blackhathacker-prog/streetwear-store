function order(product) {
    const phone = "2547XXXXXXXX"; // replace with your number

    const message = `🔥 NEW ORDER - TARIQEES

Product: ${product}
Location:
Size:

Please confirm availability.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}