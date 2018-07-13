const through = require('through2');
const log = require('fancy-log');

module.exports = function gulpPug(options) {
  const opts = Object.assign({}, options);
  return through.obj(function compilePug(file, enc, cb) {
    opts.filename = file.path;
    if (file.isStream()) {
      // return cb(new PluginError('gulp-pug', 'Streaming not supported'));
    }
    if (file.isBuffer()) {
      try {
        let contents = String(file.contents);
        contents = contents.replace(/'el-/g, '\'ab-').replace(/<el-/g, '<ab-').replace(/\/el-/g, '/ab-').replace(/"el-/g, '"ab-').replace(/`el-/g, '\`ab-').replace(/ el-/g, ' ab-').replace(/\.el-/g, '.ab-').replace(/=el-/g, '=ab-').replace(/El/g, 'Ab').replace(/Abement/g, 'Element').replace(/popperAbm/g, 'popperElm').replace(/referenceAbm/g, 'referenceElm').replace(/AbemeFE/g, 'ElemeFE').replace(/element-ui\//g, 'element-ui-prefix\/');
        file.contents = new Buffer(contents);
      } catch (e) {
        return log('error');
      }
    }
    cb(null, file);
  });
};
