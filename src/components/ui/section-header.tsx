interface SectionHeaderProps {
    label?: string;
    title: string;
    description?: string;
}

export default function SectionHeader({
    label,
    title,
    description,
}: SectionHeaderProps) {
    return (
        <div className="text-center mb-10">
            {label && (
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-2">
                    {label}
                </p>
            )}
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
                {title}
            </h2>
            {description && (
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
                    {description}
                </p>
            )}
        </div>
    );
}
