function walletValue(
    wallet: { [id: number]:{type: string, quantity: number} },
    targetCurrency: string,
    exchangeRates: { [id: string]: number }
): number {
    let walletTotal = 0;

    for (const i in wallet) {
        const action = wallet[i]
        const conversionRate = exchangeRates[action.type] || 1;
        walletTotal += action.quantity * conversionRate;
    }

    return walletTotal;
}



const exchangeRates = {
    "OIL": 50,    
    "EUR": 1.1,
    "BTC": 40000,
};

const wal = {
    1: { type: "OIL", quantity: 10 },  
    2: { type: "EUR", quantity: 1000 },
    3: { type: "BTC", quantity: 0.5 },
    4: { type: "NASDAQ", quantity: 5 }, 
};

const valueInUSD = walletValue(wal, "USD", exchangeRates);
console.log('Valeur totale en USD:', valueInUSD);