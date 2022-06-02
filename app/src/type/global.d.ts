/// hacky way to let us import ./*.png?* , because we can't use 2 globs in module specs because typescript is dumb
//@ts-ignore
declare module "./*" {
    const src: string
    export default src
}