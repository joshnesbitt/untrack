const BLOCKED_PARAMS = [
  'utm_campaign',
  'utm_medium',
  'utm_source',
  'utm_term',
  'utm_content',
  'fbclid',
  'igshid'
];

// TODO: Add more params here.

export const untrack = (input) => {
  try {
    let url = new URL(input);
    let params = url.searchParams;

    BLOCKED_PARAMS.forEach(key => {
      params.delete(key);
    });

    let output = url.origin + url.pathname;

    if (url.hash) {
      output += url.hash;
    }

    if (params.toString() !== '') {
      output += `?${params.toString()}`;
    }

    return output;
  }
  catch (e) {
    return null;
  }
};

export default untrack;
