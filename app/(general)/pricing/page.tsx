import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pagina de precios',
    description: 'Pricings page of my company',
};

export default function PricingPage(){
    return (
        <>
        <span className="text-7xl">Pricing Page</span>
        </>
    )
}
