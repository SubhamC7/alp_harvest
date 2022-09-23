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
        <link rel="“canonical”" href="https://itc-masterchef.netlify.app" />
        <link
          rel="shortcut icon"
          href="/icons/itcLogo.png"
          type="image/x-icon"
        />

        <meta name="title" content="ITC MasterChef" />
        <meta name="description" content="ITC MasterChef India" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itc-masterchef.netlify.app" />
        <meta property="og:title" content="ITC MasterChef India" />
        <meta
          name="description"
          property="og:description"
          content="ITC MasterChef India"
        />
        <meta
          property="og:image"
          content="https://itc-masterchef.netlify.app/icons/itcLogo.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://itc-masterchef.netlify.app/icons/logo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://itc-masterchef.netlify.app"
        />
        <meta property="twitter:title" content="ITC MasterChef India" />
        <meta property="twitter:description" content="ITC MasterChef India" />
        <meta
          property="twitter:image"
          content="https://itc-masterchef.netlify.app/icons/itcLogo.png"
        />
      </Head>
    </>
  );
};

export default MetaHead;
