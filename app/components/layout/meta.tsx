import Head from "next/head";
const FAVICON_FOLDER = "/favicons";

export default function Meta({
  title = `AIHub: 一键分享你创意创造过程`,
  description = `AIHub 一个可以让你一键分享创意创造过程的浏览器插件`,
  image = "https://aihub.life/thumbnail.png",
  imageAlt = "OG image for the AIHub application",
  canonical = "https://aihub.life",
}: {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  canonical?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${FAVICON_FOLDER}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${FAVICON_FOLDER}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${FAVICON_FOLDER}/favicon-16x16.png`}
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href={`${FAVICON_FOLDER}/safari-pinned-tab.svg`}
        color="#11A380"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content="https://aihub.life/logo.png"></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Vercel" />
      <meta name="twitter:creator" content="@dom__inic" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:player" content={canonical + "?card=1"} />
      <meta name="twitter:player:width" content="300" />
      <meta name="twitter:player:height" content="533" />
    </Head>
  );
}
