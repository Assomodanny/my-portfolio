interface SectionHeadingProps {
  eyebrow: string
  title: string
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}