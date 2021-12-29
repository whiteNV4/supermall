module.exports = {
    configureWebpack: {
        resolve: {
            // extensions:[],后缀名的配置
            alias: {
                // '@':'src'内部已经配置
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',

            }

        }
    },
}