interface SectionHeadingProps {
  eyebrow: string
  title: string
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  )
}