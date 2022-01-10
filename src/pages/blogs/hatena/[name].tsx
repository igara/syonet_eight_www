import type { NextPage, GetServerSideProps } from 'next';
import { BlogsHatenaNamePage, BlogsHatenaNamePageProps } from '@www/src/components';
import { getHatenaDetailURL } from '@www/src/hooks';
import { fetcher } from 'syonet_eight_design_system';

const BlogsHatenaName: NextPage<BlogsHatenaNamePageProps> = (props) => {
  return <BlogsHatenaNamePage {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const name = context.query.name?.toString();
  if (!name) {
    return {
      notFound: true,
    };
  }

  try {
    const hatenaDetailURL = getHatenaDetailURL(name);
    const hatenaDetailData = (await fetcher({
      url: hatenaDetailURL,
      type: 'text',
    })) as string;
    const description = hatenaDetailData
      .replace(/\n/g, '')
      .replace(/<style>.+<\/style>/g, '')
      .replace(/<(".*?"|'.*?'|[^'"])*?>/g, '')
      .slice(0, 90);

    return {
      props: {
        ssr: {
          hatenaDetailData,
          ogp: {
            title: name,
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

export default BlogsHatenaName;
