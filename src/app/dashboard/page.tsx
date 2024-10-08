import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from 'next/image';


export const metadata = {
    title: 'DASHBOARD',
    description: 'Se visualizan todos los widgets',
};


export default async function DashboardPage() {

    const session = await getServerSession(authOptions);
    if (!session) {
        redirect('/api/auth/signin');
    }

    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            <WidgetItem title={"Usuario conectado Server-Side"}>
                <div className="flex flex-col">
                    <span>Nombre: {session.user?.name}</span>
                    <span>Imagen: {session.user?.image}</span>
                    <span>Correo: {session.user?.email}</span>
                </div>
            </WidgetItem>
        </div>
    );
}