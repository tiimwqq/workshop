import HTMLWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/config'
import webpack from 'webpack'

export function BuildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({ // делает типо можно хтмл файл тож в дист сохранять
            template: paths.html  // делает типо берет по этому пути хтмл как темплейт
        }),
        new webpack.ProgressPlugin // просто показывает прогресс бандла
    ]
}