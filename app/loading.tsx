'use client';
import {DotLoader, HashLoader} from "react-spinners";
import {CSSProperties} from "react";

const override:CSSProperties = {
    display:'block',
    margin: '100px auto'
}

const LoadingPage = () => {
    return(
        <HashLoader
            color={'#3b82f6'}
            loading={true}
            cssOverride={override}
            size={150}
            aria-label={'Loading Spinner'}
        />
    );
}
export default LoadingPage;