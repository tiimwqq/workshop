export type ModeOptions = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildEnv {
    mode: ModeOptions;
    port: number;
}

export interface BuildOptions {
    mode: ModeOptions;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}