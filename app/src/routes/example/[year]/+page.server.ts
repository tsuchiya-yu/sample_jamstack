import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  if (import.meta.env.SSR) {
    const fs = await import('fs');
    const path = await import('path');
    const marked = await import('marked');

    const year = params.year;
    const filePath = path.resolve(`contents/example${year}.md`);
    const markdown = fs.readFileSync(filePath, 'utf-8');
    let html = marked.parse(markdown);
    return { html };
  }
};