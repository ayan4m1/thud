'use strict';

import { Base } from 'yeoman-generator';

export default class Test extends Base {
  constructor(args, opts) {
    super(args, opts);
    this.log('Entered constructor');
  }

  prompting() {
    this.log('Asking for something...');
  }
}