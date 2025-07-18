export const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-EG", {
        style: "currency",
        currency: "EGP",
    }).format(amount);