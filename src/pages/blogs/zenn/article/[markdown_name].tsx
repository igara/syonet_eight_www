import type { NextPage, GetServerSideProps } from 'next';
import {
  BlogsZennArticleNamePage,
  BlogsZennArticleNamePageProps,
} from '@www/src/components';
import { getZennArticleDetailURL } from '@www/src/hooks';
import { fetcher } from 'syonet_eight_design_system';

const BlogsZennArticleName: NextPage<BlogsZennArticleNamePageProps> = (props) => {
  return <BlogsZennArticleNamePage {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const markdownName = context.query.markdown_name?.toString();
  if (!markdownName) {
    return {
      notFound: true,
    };
  }

  try {
    const detailURL = getZennArticleDetailURL(markdownName);
    const zennArticleDetailData = (await fetcher({
      url: detailURL,
      type: 'text',
    })) as string;

    const titleMatch = zennArticleDetailData.match(/title: &quot;.*&quot;/);
    if (!titleMatch) {
      return {
        notFound: true,
      };
    }
    const title = titleMatch[0].replace('title: &quot;', '').replace('&quot;', '');

    const textMatch = zennArticleDetailData.match(/<p>.*<\/p>/);
    if (!textMatch) {
      return {
        notFound: true,
      };
    }
    const description = textMatch[0]
      .replace(/\n/g, '')
      .replace(/<(".*?"|'.*?'|[^'"])*?>/g, '')
      .slice(0, 90);

    return {
      props: {
        ssr: {
          zennArticleDetailData,
          ogp: {
            title,
            description,
            path: context.req.url,
          },
        },
      },
    };
  } catch (_) {}

  return {
    notFound: true,
  };
};

export default BlogsZennArticleName;
