import { Builder } from '../Builder';
import { pathExists, readFile } from 'squid-node-utils';
import { Config, setConfigs } from '../../configurations/configuration';
import { resolve as pathResolve } from 'path';

describe('Builder', () => {
  setConfigs({
    ROOT_DIR: __dirname,
    UX_FILES_DIR: `${__dirname}/data`
  });

  test('buildUXJS', async () => {
    new Builder().build();

    await new Promise(resolve => setTimeout(() => resolve(), 1000));

    const uxuiJsPath = `${Config.ROOT_DIR}/${Config.UXUI_DIR}/${Config.UXUI_FILENAME}`;
    expect(pathExists(uxuiJsPath)).toEqual(true);
    expect(readFile(uxuiJsPath).replace(/\n/g, ''))
      .toEqual(readFile(`${__dirname}/expected/uxui.js`)
        .replace(/\n/g, '')
        .replace(/\[ROOT_DIR\]/g, pathResolve(Config.ROOT_DIR)));
  });
});
