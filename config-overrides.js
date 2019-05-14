const { override, addLessLoader, fixBabelImports } = require('customize-cra')

module.exports = override(
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:'css'
    }),
    addLessLoader()
)