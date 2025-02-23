import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {

        const { id } = params;
        const response = await fetch(`https://secure-creativity-35fee2e16d.strapiapp.com/api/Products/${id}?populate=*`);

        const product = await response.json();
        console.log("product"+product)
        return NextResponse.json(product);

}
