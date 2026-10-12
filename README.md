# YAT TV — Next.js test tasarımı V1

Bu proje sadece bağımsız test prototipidir. `yat.tv`, `motoryat.com`, Supabase ve WordPress üzerinde değişiklik yapmaz.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000`.

## Sayfalar

- `/` ana sayfa
- `/haberler` haber listesi
- `/videolar` video arşiv şablonu
- `/kategori/[slug]` kategori listesi
- `/haber/[slug]` haber detayı

## Yayına geçmeden önce

1. İçeriklerin WordPress'ten API/export ile aktarımını planla.
2. Görsel/video kullanım haklarını ve mevcut dosyaları doğrula; şablondaki renkli görsel bloklarını gerçek yerel medyayla değiştir.
3. Eski URL'ler için 301 yönlendirme tablosu hazırla.
4. Gerçek video URL'lerini ekle; çalışmayan oynatıcı gösterme.
5. Test subdomain ve Hostinger/GitHub repository erişimlerini eşleştir.
6. Uygun veri katmanını ve admin panelini ayrıca kur.

Veriler `lib/data.ts` içinde demo içerik olarak bulunur. Bunlar tam haber metinleri veya aktarılan veritabanı değildir.
