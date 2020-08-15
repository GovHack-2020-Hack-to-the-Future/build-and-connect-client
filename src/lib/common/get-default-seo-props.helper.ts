import { DefaultSeoProps } from 'next-seo';

/**
 * Get default SEO props.
 * @param siteName - Site name.
 * @param description - Site description.
 * @param baseUrl - Base URL.
 * @param locale - Locale.
 * @param imageUri - Image URI.
 * @param imageHeight - Image height.
 * @param imageWidth - Image width.
 * @param allowFollow - Allow index.
 * @param allowIndex - Allow follow.
 * @returns Default SEO props.
 */
export function getDefaultSeoProps(
  siteName: string,
  description: string,
  baseUrl: string,
  locale: string,
  imageUri: string,
  imageHeight: number,
  imageWidth: number,
  allowFollow: boolean,
  allowIndex: boolean
): DefaultSeoProps {
  const title = siteName;

  return {
    description,
    title,
    dangerouslySetAllPagesToNoFollow: !allowFollow,
    dangerouslySetAllPagesToNoIndex: !allowIndex,
    openGraph: {
      description,
      locale,
      title,
      images: [
        {
          url: imageUri,
          height: imageHeight,
          width: imageWidth,
          alt: siteName,
        },
      ],
      site_name: siteName,
      url: baseUrl,
    },
    titleTemplate: `%s | ${siteName}`,
    twitter: {
      cardType: 'summary_large_image',
    },
  };
}
