import 'typings-test';

import { tap, expect } from 'tapbundle';

import * as smartrequest from '../ts/index';

tap.test('should request a html document over https', async () => {
  await expect(smartrequest.get('https://encrypted.google.com/'))
    .to.eventually.property('body')
    .be.a('string');
});

tap.test('should request a JSON document over https', async () => {
  await expect(smartrequest.get('https://jsonplaceholder.typicode.com/posts/1'))
    .to.eventually.property('body')
    .property('id')
    .equal(1);
});

tap.test('should post a JSON document over http', async () => {
  await expect(smartrequest.post('http://md5.jsontest.com/?text=example_text'))
    .to.eventually.property('body')
    .property('md5')
    .equal('fa4c6baa0812e5b5c80ed8885e55a8a6');
});

tap.start();
