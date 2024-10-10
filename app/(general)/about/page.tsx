import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page',
    description: 'About Description',
    keywords: ['About Page', 'Fernando', 'informacion', '...']
};

export default function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>
    )
}
