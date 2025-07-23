import { ResolveOptions } from 'webpack'

export function BuildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],  // эта штука отвечает за экспорты импорты мол не нужно эти расш указывать в пути
    }
}