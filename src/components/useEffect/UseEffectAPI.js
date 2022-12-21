import React, { useEffect, useState } from 'react'
import Loading from './apiData/Loading';
import UsersCard from './apiData/UsersCard';

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
            setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("My Error is" + error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />

    }

    return (
        <>
            <UsersCard users={users} />
        </>
    )
}

export default UseEffectAPI