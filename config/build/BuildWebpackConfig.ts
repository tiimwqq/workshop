import { BuildLoaders } from "./BuildLoaders";
import { BuildPlugins } from "./BuildPlugins";
import { BuildResolvers } from "./BuildResolvers";
import { BuildOptions } from "./types/config";
import webpack from 'webpack'

export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const { paths, mode } = options;

    return { //указываем тип чтобы сразу видеть подсказки типов
        mode: mode,
        entry: paths.entry, //это входная точка нашего приложения котора будет превращаться в бандл, с помощью path.resolve(__dirname, ...) мы указываем постоянный путь к этому файлу
        output: { // это выход тоесть куда будет делаться бандл
            filename: '[name].[contenthash].js', // тут говорится мол имя будет динамическое в нашем случае main так как ничего не указано, указано что будет хешироваться версия бандла
            path: paths.build, // путь куда будет сохр бандл
            clean: true // очистка прошлых бандлов 
        },
        plugins: BuildPlugins(options),
        module: {
            rules: BuildLoaders()
        },
        resolve: BuildResolvers()
    }
} 