export const formatCurrencyToBolivians = (amount: number): string => {
    const formatter = new Intl.NumberFormat('es-BO', {
        style: 'currency',
        currency: 'BOB',
    });
    return formatter.format(amount);
}