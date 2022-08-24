import React, { useEffect } from "react";

const useInfiniteScroll = (callback) => {


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        const isNextCall = window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight;
        if (isNextCall) {
            callback()
        }
    };
};

export default useInfiniteScroll;
