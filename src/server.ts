import express from "express"
const app = express()
import authRoutes from "./routes/authRoutes.ts"
import userRoutes from "./routes/userRoutes.ts"
import habitRoutes from "./routes/habitRoutes.ts"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import { isTestEnv } from "../env.ts"

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev', {
    skip: () => isTestEnv(),
}))

app.get('/health', (req, res) => {
    res.json({message: 'hello'}).status(200)
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/habits', habitRoutes)


export { app }

export default app