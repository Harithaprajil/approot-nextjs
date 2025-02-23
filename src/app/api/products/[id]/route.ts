import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {

        const { id } = params;
        const response = await fetch(`http://localhost:1337/api/Products/${id}?populate=*`);

        const product = await response.json();
        return NextResponse.json(product);

}
