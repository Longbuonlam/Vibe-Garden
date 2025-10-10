interface Props {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: Props) {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
        {description ? (
          <p className="mt-4 text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
