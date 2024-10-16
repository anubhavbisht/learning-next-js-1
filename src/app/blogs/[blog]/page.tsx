export default function Blog({ params }: {
    params: {
        blog: string
    }
}) {
    return <div>Blog - {params.blog}</div>
}