import Head from "next/head";
import React from "react";

type Props = {
  title: string;
};

const MetaHead = ({ title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
        ></script>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="“canonical”" href="https://alp-harvest.netlify.app" />
        <link rel="shortcut icon" href="/icons/logo.jpg" type="image/x-icon" />

        <meta name="title" content="Alp HARVEST" />
        <meta name="description" content="Heavenly Test is here!" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://https://alp-harvest.netlify.app"
        />
        <meta property="og:title" content="Heavenly Test is here!" />
        <meta
          name="description"
          property="og:description"
          content="Heavenly Test is here!"
        />
        <meta
          property="og:image"
          content="https://https://alp-harvest.netlify.app/icons/logo.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://https://alp-harvest.netlify.app/icons/logo.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://https://alp-harvest.netlify.app"
        />
        <meta property="twitter:title" content="Heavenly Test is here!" />
        <meta property="twitter:description" content="Heavenly Test is here!" />
        <meta
          property="twitter:image"
          content="https://https://alp-harvest.netlify.app/icons/logo.jpg"
        />
      </Head>
    </>
  );
};

export default MetaHead;
