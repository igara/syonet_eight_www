import { useSWRByURL } from 'syonet_eight_design_system';
import * as Variables from 'syonet_eight_variables';

export const useSWRGitHubProfileFetch = () => {
  const swrProfile = useSWRByURL<string, any>({
    url: Variables.githubProfileURI,
    type: 'text',
  });

  return swrProfile;
};
