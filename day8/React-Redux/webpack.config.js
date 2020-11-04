const path = require('path');

var config = {
    entry: './main.js',
    output :{
        path:path.resolve(__dirname,'dist'),
        filename:'index.js'
    },

    devServer: {
        inline:true,
        port:4000
    },



    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query:{
                presets:['es2015','react']
            }
         },
         {
            test:/\.s[cs]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
         },
         {
            test: /\.json5$/i,
            
            loader: 'json5-loader',
        } 
        ],
    }
}
module.exports = config;