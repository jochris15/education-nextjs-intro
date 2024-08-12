# Next JS

## What is NextJS?
[Dokumentasi NextJS](https://nextjs.org/docs)

## Why use NextJS?
- **Server Side Rendering (SSR)** sehingga bagus untuk Search Engine Optimization (SEO), dikarenakan yang muncul sesuai dengan konteks
- **Automatic code splitting** sehingga hanya merender/memproses data yang berhubungan dengan page yang lagi dimunculin, jadinya respondnya lebih cepat
- **Hybrid rendering** , flexible bisa CSR / SSR
- **Simplified routing**, untuk routingannya udah build in dan lebih simple karena hanya bedasarkan nama folder

## Installation
[Dokumentasi Installation](https://nextjs.org/docs/getting-started/installation)

## Route
Routingan di nextjs sesimple menggunakan nama folder. Contoh, jika kita ingin membuat routingan /dashboard, buatlah folder dashboard didalam app lalu buat page.tsx didalamnya

[Dokumentasi route](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)

## Layout 
Apa itu layout? layout adalah sebuah component yang di share ke component lainnya. 
<br>
<br>
Layout juga bisa dibuat nested. Jadi jika kita membuat layout dalam halaman dashboard, hal yang kita buat di layout tsb akan muncul di semua endpoint yang berawalan /dashboard

[Dokumentasi layout](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)

## Page
Apa itu page? page adalah sebuah component yang unik / spesifik untuk halaman tertentu. 

[Dokumentasi page](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)

## Linking & Navigating

[Dokumentasi linking & navigating](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)

## Fetching Data 

[Dokumentasi fetching data](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
