'use strict';

import Generator from 'yeoman-generator';

export default class Test extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Entered constructor');
  }

  prompting() {
    this.log('Asking for something...');
  }
}