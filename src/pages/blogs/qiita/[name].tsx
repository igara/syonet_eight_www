import type { NextPage, GetServerSideProps } from 'next';
import { BlogsQiitaNamePage, BlogsQiitaNamePageProps } from '@www/src/components';
import { getQiitaDetailURL } from '@www/src/hooks';
import { fetcher } from 'syonet_eight_design_system';

const BlogsQiitaName: NextPage<BlogsQiitaNamePageProps> = (props) => {
  return <BlogsQiitaNamePage {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const name = context.query.name?.toString();
  if (!name) {
    return {
      notFound: true,
    };
  }

  try {
    const qiitaDetailURL = getQiitaDetailURL(name);
    const qiitaDetailData = (await fetcher({
      url: qiitaDetailURL,
      type: 'text',
    })) as string;
    const description = qiitaDetailData
      .replace(/\n/g, '')
      .replace(/<style>.+<\/style>/g, '')
      .replace(/<(".*?"|'.*?'|[^'"])*?>/g, '')
      .slice(0, 90);

    return {
      props: {
        ssr: {
          qiitaDetailData,
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

export default BlogsQiitaName;
