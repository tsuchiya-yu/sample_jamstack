import type { PageServerLoad } from './$types';

export const load = (async async => {
  if (import.meta.env.SSR) {
    const fs = await import('fs');
    const path = await import('path');
    const marked = await import('marked');

    const filePath = path.resolve('contents/example.md');
    const markdown = fs.readFileSync(filePath, 'utf-8');
    let html = marked.parse(markdown);
    return { html };
  }
}) satisfies PageServerLoad;