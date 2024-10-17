"use client"
import { notFound } from "next/navigation";

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export default function BlogReview({ params }: {
    params: {
        review: string;
        blog: string;
    }
}) {
    // const random = getRandomInt(2);
    // if (random === 1) {
    //     throw new Error("Error loading review");
    // }
    if (parseInt(params.review) > 100) {
        notFound()
    }
    return <div>Blog {params.blog} - Review {params.review}</div>
}