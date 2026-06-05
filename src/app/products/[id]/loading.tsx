export default function LoadingProductPage() {
  return (
    <main className="bg-[#fbfaf8]">
      <section className="mx-auto max-w-350 px-4 py-8 md:py-12">
        <div className="mb-6 h-5 w-36 animate-pulse rounded bg-neutral-200" />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
          <div className="grid gap-3 sm:grid-cols-[88px_minmax(0,1fr)]">
            <div className="order-2 grid grid-cols-4 gap-3 sm:order-1 sm:grid-cols-1">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square animate-pulse rounded-lg bg-neutral-200"
                />
              ))}
            </div>
            <div className="order-1 aspect-[4/5] animate-pulse rounded-xl bg-neutral-200 sm:order-2 lg:aspect-[5/6]" />
          </div>
          <div className="rounded-xl border border-black/[0.08] bg-white p-5 shadow-sm md:p-7">
            <div className="h-4 w-28 animate-pulse rounded bg-neutral-200" />
            <div className="mt-4 h-12 w-4/5 animate-pulse rounded bg-neutral-200" />
            <div className="mt-6 h-24 animate-pulse rounded bg-neutral-200" />
            <div className="mt-7 h-12 w-48 animate-pulse rounded bg-neutral-200" />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="h-12 animate-pulse rounded-lg bg-neutral-200" />
              <div className="h-12 animate-pulse rounded-lg bg-neutral-200" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
