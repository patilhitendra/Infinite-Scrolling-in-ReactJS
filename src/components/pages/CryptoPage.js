import React, { useEffect, useState } from "react";
import axios from "axios";

import CryptoList from "../CryptoList";
import Loader from "../Loader";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const PAGE_NUMBER = 1;

const CryptoPage = () => {
    const [coinsData, setCoinsData] = useState([]);
    const [page, setPage] = useState(PAGE_NUMBER);
    const [loading, setLoading] = useState(false);

    const scrollCallback = () => {
        setLoading(true);
        setPage((prev) => prev + 1);
    };

    useInfiniteScroll(scrollCallback);

    useEffect(()=>{
        // console.log(isNextCall)
    },[])
    
    useEffect(() => {
        setTimeout(async () => {
            const response = await axios.get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${page}&sparkline=false`
            );

            setCoinsData((prev) => {
                return [...prev, ...response.data];
            });
            setLoading(false);
        }, 1500);
    }, [page]);

    return (
        <div className='app'>
            <h1>Crypto Gallery1</h1>
            <CryptoList coinsData={coinsData} />
            {loading && <Loader />}
        </div>
    );
};

export default CryptoPage;
