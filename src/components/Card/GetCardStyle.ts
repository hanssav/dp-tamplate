import { createDefaultTheme } from './styles';
import React from 'react';
import { CardContentData, CardVariant } from '@components/_types/Card';
import { CardContent } from '@datas/pages/config';
import {
  bgMap,
  createBannersTheme,
  createBreadcrumbTheme,
  createChartsTheme,
  createFollowTheme,
  createFriendSuggestionTheme,
  createFriendTheme,
  createGiftTheme,
  createInfoTheme,
  createMusicTheme,
  createPaymentTheme,
  createPostTheme,
  createProductTheme,
  textMap,
} from '@components/Card/styles';
import { hasConfig } from '@utils/function';

// Key aman untuk theme type
type BgMapKey = keyof typeof bgMap;
type VariantType = CardVariant;

interface GetCardStyleProps {
  variant?: VariantType;
  type?: BgMapKey;
  bgImg?: string;
  content?: CardContentData;
}

// Optional image render
interface ImageTheme {
  img?: {
    base?: string;
    horizontal?: {
      on?: string;
      off?: string;
    };
  };
}
// Main function
export const getCardStyle = ({ variant = 'breadcrumb', type = 'primary', bgImg, content }: GetCardStyleProps) => {
  const rawType = (content as CardContent)?.bgColor ?? type;
  const config = hasConfig(content) && content?.config;

  const validTypes = Object.keys(bgMap) as BgMapKey[];
  const safeType: BgMapKey = validTypes.includes(rawType as BgMapKey) ? (rawType as BgMapKey) : 'primary';

  const bgClass = bgMap[safeType];
  const textClass = textMap[safeType];

  // Mapping themes menggunakan fungsi yang telah dibuat
  const customTheme = {
    breadcrumb: createBreadcrumbTheme(bgClass),
    info: createInfoTheme(bgClass, textClass),
    post: createPostTheme(),
    product: createProductTheme(),
    music: createMusicTheme(),
    follow: createFollowTheme(),
    friendSuggestion: createFriendSuggestionTheme(),
    friend: createFriendTheme(),
    gift: createGiftTheme(),
    payment: createPaymentTheme(),
    banners: createBannersTheme(bgClass),
    chart: createChartsTheme(),
    default: createDefaultTheme(config),
  };

  // Optional background style
  let style: React.CSSProperties | undefined = undefined;
  if (variant === 'breadcrumb' && bgImg) {
    style = {
      backgroundImage: `url(${bgImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 3rem bottom -50px',
      backgroundSize: 'auto',
    };
  }

  // Optional image render
  let renderImage: ((theme: ImageTheme, horizontal: boolean) => React.ReactElement) | undefined;

  if ((variant === 'post' || variant === 'product' || variant === 'music') && bgImg) {
    renderImage = (theme: ImageTheme, horizontal: boolean): React.ReactElement => {
      const imgClass = `${theme.img?.base ?? ''} ${
        horizontal ? theme.img?.horizontal?.on : theme.img?.horizontal?.off
      }`;

      return React.createElement('img', {
        src: bgImg,
        alt: `background-${variant}`,
        className: imgClass,
      });
    };
  }

  return {
    theme: customTheme[variant].card,
    style,
    renderImage,
  };
};
