import MarkDownView from '@/components/blog/MarkDownView';
import Head from 'next/head';

/*move to utiles or something */
async function fetchMarkdown(fileUrl) {
  try {
    const file = decodeURIComponent(fileUrl);
    console.log('File:', file);
    console.log('Fetching markdown:', `${file}`);
    const response = await fetch(`${file}`, { cache: 'no-store' });
    console.log('Response:', response);
    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
    console.error('Error fetching markdown:', error);
  }
  return '';
}

export const metadata = {
  title: '...',
  description: '...',
}


export default async function ArticlePage({ params }) {
  const fileUrl = params.slug;
  const markdown = await fetchMarkdown(fileUrl);


  return (
    <>
      <Head>
        <meta name='title' content='C# Blog' />
        <meta name="description" content="this is a blog about how to code in C#" />
      </Head>
      <div>
        <MarkDownView rawMdText={markdown}>Hi</MarkDownView>
      </div>
    </>

  );
}