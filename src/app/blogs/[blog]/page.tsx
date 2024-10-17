import type { Metadata } from "next"

type Props = {
    params: {
        blog: string
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const blogTitle = await new Promise(resolve => {
        setTimeout(() => { resolve(`Anu ${params.blog}`) }, 1000)
    })
    return {
        title: `Blog ${blogTitle}`
    }
}

export default function Blog({ params }: Props) {
    return <div>Blog - {params.blog}</div>
}