import 'typings-test'
import * as tsn from '../dist/index'
import should = require('should')

let assetfiles: string[] = [
    './test/assets/tocompile.ts',
    './test/assets/tocompile2.ts'
]

let assetfiles2 = {
    './test/assets/**/!(*.d.ts|*.js|output)': './test/assets/output'
}

describe('tsn', function () {
    describe('compileFileArray', function () {
        it('should convert files from an array with single files to output', function () {
            this.timeout(5000)
            tsn.compileFileArray(assetfiles, './test/assets/output')
        })
    })
    describe('compileFileArray', function () {
        it('should convert files from an array with single files to output', function () {
            this.timeout(5000)
            tsn.compileGlobStringObject(assetfiles2)
        })
    })
})
