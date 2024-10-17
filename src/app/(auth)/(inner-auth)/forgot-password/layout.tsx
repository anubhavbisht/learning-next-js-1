export default function InnerAuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div>Inner Auth layout</div>
            {children}
        </>
    );
}