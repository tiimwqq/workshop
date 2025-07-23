export type ModeOptions = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string
    html: string
} 

export interface BuildOptions {
    mode: ModeOptions,
    paths: BuildPaths,
    isDev: boolean
}