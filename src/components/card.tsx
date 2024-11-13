import { cn } from "@/lib/utils"


export default function Card({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
            <div className= {cn("h-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 justify-between", className)}>
                {children}
        </div>
    );
}