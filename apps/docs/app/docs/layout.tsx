import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout  
    sidebar={{
      defaultOpenLevel: 99, // Fully expand all items
      // other sidebar options...
    }}
    tree={source.pageTree} 
    {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
