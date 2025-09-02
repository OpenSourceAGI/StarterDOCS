import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { title, favicon } from './customize-docs';
import Image from 'next/image';
import faviconUrl from './favicon.png';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="inline-flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image 
          src={faviconUrl} 
          alt="favicon" 
          width={20} 
          height={20} 
          className="w-5 h-5" 
        />
        {title}
      </span>
    ),
  },
};
