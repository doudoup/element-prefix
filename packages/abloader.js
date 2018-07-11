module.exports = function(source, map) {
  console.log('00________________00');
  console.log(source);
  this.callback(
    null,
    source.replace(/'el-/g, '\'ab-').replace(/<el-/g, '<ab-').replace(/\/el-/g, '/ab-').replace(/"el-/g, '"ab-').replace(/`el-/g, '\`ab-').replace(/ el-/g, ' ab-').replace(/\.el-/g, '.ab-').replace(/=el-/g, '=ab-'),
    map
  );
};
  