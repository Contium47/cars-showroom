function calculatePrice(fullPrice, discountPercentage) {
    return Math.round(+(fullPrice * (1 - discountPercentage / 100)).toFixed(2));
}

export default calculatePrice;