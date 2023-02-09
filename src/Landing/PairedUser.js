import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

const PairedUser = ({ pairName, pair }) => {

    const [ pairedData, setPairedWith ] = useState({});

    const user = useSelector((state) => state.pairedWith);
    const URL = "http://localhost:1111";
    const webURL = "https://valentian-app.onrender.com";
    // const userID = pairName;
    const getPairUser = () => {
        axios.get(`${webURL}/api/user/${user._id}/${pairName}`).then((res) => {
            console.log(res.data);
            setPairedWith(res.data.data);
        }).catch((err) => {
            console.log(err);
        });
    };
    console.log(pairedData);
    console.log(user);

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