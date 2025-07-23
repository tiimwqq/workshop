import webpack from 'webpack'
import path from 'path'
import { BuildPaths } from './config/build/types/config';
import { BuildWebpackConfig } from './config/build/BuildWebpackConfig';

const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = BuildWebpackConfig({
    mode: 'development',
    paths,
    isDev
})

export default config;