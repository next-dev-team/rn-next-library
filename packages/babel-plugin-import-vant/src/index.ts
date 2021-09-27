import camelCase from 'camelcase';

export default (): any[] => [
  [
    'import',
    {
      libraryName: 'rn-next-dev',
      customName: (name: string) => {
        if (name === 'icon') {
          return '@vant-react-native/icons';
        }
        if (name.match(/^van-icon-/)) {
          return `@vant-react-native/icons/lib/${camelCase(name, { pascalCase: true })}`;
        }
        return `@vant-react-native/${name}`;
      },
    },
    'rn-next-dev',
  ],
  [
    'import',
    {
      libraryName: '@vant-react-native/icons',
      customName: (name: string) => {
        return `@vant-react-native/icons/lib/${camelCase(name, { pascalCase: true })}`;
      },
    },
    '@vant-react-native/icons',
  ],
];
