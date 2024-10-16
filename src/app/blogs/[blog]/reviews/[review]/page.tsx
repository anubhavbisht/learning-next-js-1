import { notFound } from "next/navigation";

export default function BlogReview({ params }: {
    params: {
        review: string;
        blog: string;
    }
}) {
    if (parseInt(params.review) > 100) {
        notFound()
    }
    return <div>Blog {params.blog} - Review {params.review}</div>
}