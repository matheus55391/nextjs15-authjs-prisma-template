import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Image from "next/image";


const getSuggestedUsers = async (count: number, ignoredUserId?: string) => {
    'use server';
    const where = ignoredUserId ? { id: { not: ignoredUserId } } : {};
    const userCount = await prisma.user.count({ where });
    const skip = Math.max(0, Math.floor(Math.random() * Math.max(1, userCount - count + 1)));
    const orderFields = ['id', 'name', 'email'];
    const orderDirections = ['asc', 'desc'] as const;
    const orderByField = orderFields[Math.floor(Math.random() * orderFields.length)];
    const orderDir = orderDirections[Math.floor(Math.random() * orderDirections.length)];

    return prisma.user.findMany({
        take: count,
        skip,
        orderBy: { [orderByField]: orderDir },
        where,
    });
};

export default async function SuggestedUsers() {
    const session = await auth();
    const users = await getSuggestedUsers(3, session?.user?.id);

    return (
        <Card>
            <CardHeader>
            <CardTitle className="text-lg">Sugestões</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
            {users.length === 0 ? (
                <p className="text-sm text-muted-foreground">Nenhum usuário encontrado.</p>
            ) : (
                users.map((user) => (
                <div
                    key={user.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
                >
                    <div className="flex items-center gap-3">
                    {user.image ? (
                        <Image
                        src={user.image}
                        alt={user.name || user.email || "Avatar"}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                        />
                    ) : (
                        <div className="h-10 w-10 rounded-full bg-muted" />
                    )}
                    <div>
                        <p className="font-medium text-sm break-all">{user.name?.split(' ')[0] || "Usuário"}</p>
                    </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full sm:w-auto mt-2 sm:mt-0">
                    Seguir
                    </Button>
                </div>
                ))
            )}
            </CardContent>
        </Card>
    );
}
