import _ from 'lodash';

import * as FS from '../FileSystem';

export class LocalFileSystem extends FS.FileSystem {

  /** @ngInject */
  constructor(instanceSettings, protected backendSrv) {
    super();
  }

  list(path:string, dir?:FS.DirectoryInfo): Promise<FS.DirectoryInfo> {
    return new Promise<FS.DirectoryInfo>((resolve, reject) => {
      reject('Not Supported Yet');
    });
  }
}