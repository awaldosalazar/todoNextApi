import { WidgetItem } from "@/components";


export const metadata = {
    title: 'DASHBOARD',
    description: 'Se visualizan todos los widgets',
};


export default function DashboardPage() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <WidgetItem />
        </div>
    );
}