

// //Indiquer le port d'ecoute du serveur
// server.listen(5000, ()=>console.log('Serveur running on port 5000'))


import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import passport from 'passport';
import dotenv from 'dotenv'

import database from './connexion.js'

import notreStrategy from './auth/strategies.js'

database.sync()

import departmentRoutes from './routes/departmentRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';
import livreRoutes from './routes/livreRoutes.js';
import empruntRoutes from './routes/empruntRoutes.js';
import editeurRoutes from './routes/editeurRoutes.js';
import rayonRoutes from './routes/rayonRoutes.js';
import auteurRoutes from './routes/auteurRoutes.js';
import amendeRoutes from './routes/amendeRoutes.js';
import userRoutes from './routes/userRoutes.js';

const PORT = process.env.PORT || 5000

// console.log('ENV',dotenv.config().parsed)

const app = express()

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())

passport.use(notreStrategy)

app.use('/departments', departmentRoutes)
app.use('/reservation', reservationRoutes)
app.use('/livre', livreRoutes)
app.use('/emprunt', empruntRoutes)
app.use('/editeur', editeurRoutes)
app.use('/rayon', rayonRoutes)
app.use('/auteur', auteurRoutes)
app.use('/amende', amendeRoutes)
app.use('/users', userRoutes)
// app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));



app.listen(PORT, () => console.log(`Serveur running on port ${PORT}`))





