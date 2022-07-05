import { useRouter } from 'next/router';
import React from 'react'

function Doc() {
    const router = useRouter();
    const { params = [] } = router.query;
    if (params.length === 2) {
        return (
            <div>Viewing docs for feature {params[0]} and concept {params[1]}</div>
        )
    } else if (params.length === 1) {
        return (
            <div>Viewing docs for feature {params[0]}</div>
        )
    }
    return (
        <div>Doc Home Page</div>
    )
}

export default Doc