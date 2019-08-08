const path = require('path');

module.exports = {
    entry: './src/api/index.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    }
};