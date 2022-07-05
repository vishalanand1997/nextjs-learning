import { useRouter } from 'next/router';
import React from 'react'

function ReviewProduct() {
    const router = useRouter();
    const { productId, reviewId } = router.query;
    return (
        <div> Review of {reviewId} and product of {productId}</div>
    )
}

export default ReviewProduct