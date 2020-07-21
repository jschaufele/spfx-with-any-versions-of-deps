const { src, dest, watch } = require('gulp');

const targetSpfxFolder = "sp2019";
const wp="helloworld";
const srcSpfxFolder = "helloWorld";
// function copyLocalizedResources() {
//     console.log('Copying  copyLocalizedResources files...');
//     src(`../${targetSpfxFolder}/src/webparts/**/assets/*.*`)
//     .pipe(dest('./src/webparts'));
//     return src(`../${targetSpfxFolder}/src/webparts/**/loc/*.d.ts`)
//         .pipe(dest('./src/webparts'));
// }

function triggerTargetWebPartReload() {
    console.log('Copying  triggerTargetWebPartReload JS files...');

    src(`./src/webparts/${wp}/assets/*.*`)
        .pipe(dest(`../${targetSpfxFolder}/src/webparts/${wp}/assets`));
        src(`./dist/*.*`)
        .pipe(dest(`../${targetSpfxFolder}/dist`));
    return src(`./dist/*.js`)
        .pipe(dest(`../${targetSpfxFolder}/src/webparts/${wp}/external`));
}

//exports['copy-loc'] = copyLocalizedResources;

exports.watch = function () {
    console.log('firing off watched files...');
    // watch(`../${targetSpfxFolder}/src/webparts/**/loc/*.d.ts`, {
    //     ignoreInitial: false
    // }, copyLocalizedResources);

    watch('./dist/*.js', triggerTargetWebPartReload);
}