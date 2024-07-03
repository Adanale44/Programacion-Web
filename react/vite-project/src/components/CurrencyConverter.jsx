import React, { useState, useEffect } from 'react';

const ExchangeRateComponent = () => {
    const [exchangeData, setExchangeData] = useState(null);
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [targetCurrency, setTargetCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);

    useEffect(() => {
        fetchExchangeRate();
    }, [baseCurrency, targetCurrency]); // Actualiza cuando cambia baseCurrency o targetCurrency

    const fetchExchangeRate = async () => {
        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/e099738717908ed1bcd0157a/latest/${baseCurrency}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setExchangeData(data);
            convertCurrency(data.conversion_rates[targetCurrency]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleBaseCurrencyChange = (e) => {
        setBaseCurrency(e.target.value);
    };

    const handleTargetCurrencyChange = (e) => {
        setTargetCurrency(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const convertCurrency = (rate) => {
        const result = amount * rate;
        setConvertedAmount(result.toFixed(2)); // Redondear a 2 decimales
    };

    if (!exchangeData) {
        return <p>Loading...</p>;
    }

    return (
        <div className='Bode-con-sombra'>
            <h2 className='borde-color'>Exchange Rates</h2>
            <div>
                <label>Select Base Currency:</label>
                <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
                    {Object.keys(exchangeData.conversion_rates).map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Select Target Currency:</label>
                <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
                    {Object.keys(exchangeData.conversion_rates).map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Amount:</label>
                <input type="number" value={amount} onChange={handleAmountChange} />
            </div>
            <div>
                <p>Converted Amount: {convertedAmount} {targetCurrency}</p>
            </div>
        </div>
    );
};

export default ExchangeRateComponent;
