export default {
    cjs: "babel",
    esm: {
        type: "babel",
        importLibToEs: true,
        mjs: true,
    },
    umd: {
        name: 'jokeUI',
    },
    lessInBabelMode: true,
    preCommit: {
        eslint: true,
        prettier: true,
    },
    runtimeHelpers: true,
};