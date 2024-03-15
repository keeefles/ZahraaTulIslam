import { userRouter, express } from "./controller/userController.js";
import { postRouter } from "./controller/postController.js";
import { commentRouter } from "./controller/commentsController.js";
import cookieParser from "cookie-parser";
import { ErrorHandling } from './middleware/ErrorHandling.js'
import path from 'path'
import cors from 'cors'
import { config } from "dotenv";
config()

const app = express()
const port = +process.env.PORT || 4000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
})

app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
      extended: true,
    }),
    cookieParser(), 
    cors()
)

app.get('^/$|/zahraatulislam', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './static/index.html'))
})

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/comments', commentRouter)
app.use(ErrorHandling)
app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})