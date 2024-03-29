import type { PageServerLoad } from './$types';
import { config } from 'dotenv';

export const load: PageServerLoad = async ({ params }) => {
  if (import.meta.env.SSR) {
    const year = params.year;
    config();
    const apiKey = process.env.CMS_API_KEY;
    const apiUrl = process.env.CMS_API_URL;

    if (!apiUrl || !apiUrl) {
      throw new Error('必要なパラメータがありません');
    }

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`データの取得に失敗しました: ${response.statusText}`);
    }

    type Item = {
      year: {
        year: number;
        headline: string;
        news: string;
      };
    };

    const data = await response.json();

    const item = data.items.find((item: Item) => item.year.year.toString() === year);

    if (!item) {
      return { status: 404, error: new Error(`指定の年が存在しません: ${year}`) };
    }

    const html = item.year.headline + item.year.news;

    return { html };
  }
};