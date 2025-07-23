import webpack from 'webpack'
import path from 'path'
import { BuildEnv, BuildPaths } from './config/build/types/config';
import { BuildWebpackConfig } from './config/build/BuildWebpackConfig';

export default (env: BuildEnv) => {

    const paths: BuildPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        build: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.ts'),
    }

    const PORT = env.port || 3000;
    const mode = env.mode || 'development';
    const isDev = mode === 'development';

    const config: webpack.Configuration = BuildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })

    return config
}