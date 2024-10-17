import Link from "next/link"

export default function Blogs() {
    const blogId = 4
    return (<div><h3>Blogs</h3>
        <p><Link href="/blogs/1">Blog 1</Link></p>
        <p><Link href="/blogs/2">Blog 2</Link></p>
        <p><Link href="/blogs/3" replace>Blog 3</Link></p>
        <p><Link href={`/blogs/${blogId}`}>Blog {blogId}</Link></p>
    </div>);
}