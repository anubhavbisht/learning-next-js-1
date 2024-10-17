
export default function ChildrenBlogLayout({
    children
}: Readonly<{
    children: React.ReactNode
}
>) {
    return (
        <>
            {children}
            <p>Particular blog</p>
        </>
    );
}