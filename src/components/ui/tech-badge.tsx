interface TechBadgeProps {
    label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
    return (
        <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">
            {label}
        </span>
    );
}
