const path = require('path');
const PATH = require('./config');
const minimist = require('minimist');
var argv = minimist(process.argv.slice(2));

  var setting = {
      entry: {
        "main": PATH.src.js + "src/Main.es6",
        // "main": "../../dev/assets/devjs/src/es6/main.js",
        // "page01": PATH.dev.devjs + "src/Page01.js",
      },
      output: {
          // path: "../../dev/assets/js/",
          // filename: "[name].js"
          filename: "main.js"
      },
      module: {
          loaders: [
              // { test: /\.css$/, loader: "style!css" },
              {
                test: [/\.js$/,/\.es6$/,/\.json$/],
                exclude: /(node_modules|bower_components)/,
                include: [
                  path.resolve(PATH.src.js + 'src/')
                ],
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                  cacheDirectory: true,
                  presets: ["babel-preset-es2015", "babel-preset-es2016", "babel-preset-es2017"].map(require.resolve)
                },
              },
              {test: /\.json$/, loaders: ['json', 'strip-json-comments-loader']},
              {test: /\.(glsl|frag|vert|vs|fs)$/, exclude: /node_modules/, loader: 'glslify-import'},
              {test: /\.(glsl|frag|vert|vs|fs)$/, loader: 'raw'},
              {test: /\.(glsl|frag|vert|vs|fs)$/, loader: 'glslify' },
          ]
      },
      cache: true,
      devtool: 'source-map',
      // devtool: 'inline-source-map',
      resolve: { 
        root: [ 
          path.resolve(PATH.src.js + 'src/'),
          path.join(__dirname+'/..', 'node_modules')
         ]
       },
      resolveLoader: {
        root: path.join(__dirname+'/..', 'node_modules')
      },
  };

  // source mapを出力しない
  if (argv.m==true) {setting.devtool = false;}
  console.log(setting.devtool);

  module.exports = setting;