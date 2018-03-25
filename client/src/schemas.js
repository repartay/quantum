export const inputPredConfig = [
  {
    label: 'User Email',
    value: 'user_email',
    type: String
  },
  {
    label: 'First Name',
    value: 'user_first_name',
    type: String
  },
  {
    label: 'Last Name',
    value: 'user_last_name',
    type: String
  },
  {
    label: 'Screen Width (px)',
    value: 'screen_width',
    type: Number
  },
  {
    label: 'Screen Height (px)',
    value: 'screen_height',
    type: Number
  },
  {
    label: '# of Visits',
    value: 'visits',
    type: Number
  },
  {
    label: 'Page Response Time (ms)',
    value: 'page_response',
    type: Number
  },
  {
    label: 'Domain',
    value: 'domain',
    type: String
  },
  {
    label: 'Page Path',
    value: 'path',
    type: String
  }
];

export const inputFilterConfig = [
  {
    label: 'starts with',
    value: 'starts_with',
    prefix: 'LIKE',
    REprefix: '',
    REsuffix: '%',
    RegEx: true,
    type: String
  },
  {
    label: 'does not start with',
    value: 'does_not_start_with',
    prefix: 'NOT LIKE',
    REprefix: '',
    REsuffix: '%',
    RegEx: true,
    type: String
  },
  {
    label: 'equals',
    value: 'equals',
    prefix: '=',
    type: String
  },
  {
    label: 'does not equal',
    value: 'does_not_equal',
    prefix: '<>',
    type: String
  },
  {
    label: 'contains',
    value: 'contains',
    prefix: 'LIKE',
    REprefix: '%',
    REsuffix: '%',
    RegEx: true,
    type: String
  },
  {
    label: 'does not contain',
    value: 'does_not_contain',
    prefix: 'NOT LIKE',
    REprefix: '%',
    REsuffix: '%',
    RegEx: true,
    type: String
  },
  {
    label: 'in list',
    value: 'in_list',
    prefix: 'LIKE',
    REprefix: '%',
    REsuffix: '%',
    RegEx: true,
    type: String
  },
  {
    label: 'not in list',
    value: 'not_in_list',
    prefix: 'NOT LIKE',
    REprefix: '%',
    REsuffix: '%',
    RegEx: true,
    type: String
  },
  {
    label: 'range',
    value: 'range',
    prefix: 'BETWEEN',
    suffix: 'AND',
    type: Number
  },
  {
    label: 'less than or equal',
    value: 'less_than_or_equal',
    prefix: '<=',
    type: Number
  },
  {
    label: 'does not equal',
    value: 'does_not_equal',
    prefix: '<>',
    type: Number
  },
  {
    label: 'greater than or equal',
    value: 'greater_than_or_equal',
    prefix: '>=',
    type: Number
  }
];
