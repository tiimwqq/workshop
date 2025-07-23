import webpack from 'webpack'

export function BuildLoaders(): webpack.RuleSetRule[] {
    const loader = {
        test: /\.tsx?$/, // тут говориться что тс файлы должны проверяться
        use: 'ts-loader', // для проверенных файлов используем тс лоадер который в свою очередь запускает тс конфиг
        exclude: /node_modules/, // исключаем нод модулес
    }

    return [
        loader
    ]
}