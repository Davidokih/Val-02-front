import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

const PairedUser = ({ pairName, pair }) => {

    const [ pairedData, setPairedWith ] = useState({});

    const user = useSelector((state) => state.namePair);
    const URL = "http://localhost:1111";
    const webURL = "https://valentian-app.onrender.com";
    // const userID = pairName;
    const getPairUser = () => {
        axios.get(`${webURL}/api/user/${pair._id}/${pairName}`).then((res) => {
            console.log(res.data);
            setPairedWith(res.data.data);
        }).catch((err) => {
            console.log(err);
        });
    };
    console.log(pairName);
    console.log(pairedData);

    useEffect(() => {
        getPairUser();
    }, []);
    return (
        <div>
            <div>{ pairedData.name }</div>
        </div>
    );
};

export default PairedUser;