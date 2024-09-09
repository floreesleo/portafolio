interface Props {
  title: string;
  contrast?: string;
  subtitle?: string;
  description?: string;
}

export default function HeaderSection({
  title,
  contrast,
  subtitle,
  description,
}: Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-6xl font-black">
        {title}(<span className="text-violet-800">{contrast}</span>)
      </h3>
      <h5 className="text-2xl">{subtitle}</h5>
      <p className="text-xl font-medium text-neutral-500">{description}</p>
    </div>
  );
}
