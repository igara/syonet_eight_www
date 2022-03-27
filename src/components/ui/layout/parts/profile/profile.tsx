import React from 'react';
import * as Styles from './profile.styles';
import { SerializedStyles, css } from '@emotion/react';
import { useSWRGitHubProfileFetch } from '@www/src/hooks';

interface Props {
  css?: SerializedStyles;
}

export const Profile: React.FC<Props> = (props) => {
  const swrGitHubProfileFetch = useSWRGitHubProfileFetch();
  const html = swrGitHubProfileFetch.data;

  const attributes = {
    css: css`
      ${Styles.styles.profile()}
      ${props.css}
    `,
  };
  return (
    <div {...attributes}>
      {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
    </div>
  );
};
