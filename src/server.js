// import express from 'express'
// import { json, urlencoded } from 'body-parser'
// import morgan from 'morgan'
// import cors from 'cors'

// export const app = express()

// app.disable('x-powered-by')

// app.use(cors())
// app.use(json())
// app.use(urlencoded({ extended: true }))
// app.use(morgan('dev'))

// export const start = () => {}


import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/me', (req, res) => {
  res.send({ me: 'hello router' })
})

// const routes = ['get/cat', 'get/cat/:id', 'put/cat', 'delete/cat/:id']

// router
//   .route('/cat')
//   .get()
//   .post()

// router
//   .router('/cat/:id')
//   .get()
//   .post()
//   .delete()

app.use('/api', router)

// custom middleware - are ftns that take a req and res and then run some action
// *const log = (req, res, next) => {
//   console.log('logging')
//   req.mydata = 'hello from log'
//   next()
// }*

// custom middleware - to run for entire server
// *app.use(log)*

// app.get('/:id', [log, log, log], (req, res) => {
//   res.send({ message: req.mydata })
// })

// controllers - are the last function that runs i.e. the req, res
app.get('/', (req, res) => {
  res.send({ message: 'hi get' })
})

app.post('/home', (req, res) => {
  console.log(req.body)
  res.send({ mess: 'okay post' })
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
