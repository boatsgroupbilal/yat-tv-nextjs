
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, archiveCategories, stories } from '@/lib/data';

export default async function Category({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const cat =
    archiveCategories.find((x) => x.slug === slug) ||
    categories.find((x) => x.slug === slug);

  if (!cat) notFound();

  const rows = stories.filter((s) => s.category === slug);

  const legacyUrl =
    'legacyUrl' in cat && typeof cat.legacyUrl === 'string'
      ? cat.legacyUrl
      : null;

  return (
    <main className="container innerPage">
      <span className="eyebrow">YAT TV / KATEGORİ</span>

      <h1>{cat.name}</h1>

      <p>
        {rows.length
          ? `${rows.length} yayın`
          : 'Bu kategorinin içerik aktarımı henüz yapılmadı.'}
      </p>

      {legacyUrl && (
        <p className="archiveSource">
          <a
            href={legacyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Eski YAT TV kategori arşivini aç ↗
          </a>
        </p>
      )}

      <div className="listing">
        {rows.map((s) => (
          <Link
            className={'listingItem ' + s.theme}
            key={s.slug}
            href={'/haber/' + s.slug}
          >
            <div className="miniVisual">YAT / TV</div>

            <div>
              <span className="tag">{s.tag}</span>
              <h2>{s.title}</h2>
              <p>{s.description}</p>
            </div>

            <b>↗</b>
          </Link>
        ))}
      </div>
    </main>
  );
}
