const {loggerConfig} = require('./logger-config')
const {serverConfig}=require('./server-config')


module.exports={
    PORT:serverConfig,
    logger:loggerConfig
}