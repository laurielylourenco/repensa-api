import express from "express"
import logger from "./utils/logger";
import config from 'config'


const app = express();
app.use(express.json())



const port = config.get<number>('port')
app.listen(port, async () => {
    logger.info(`Porta on ${port}`)
})
