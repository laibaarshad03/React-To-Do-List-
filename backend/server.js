import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import listRoutes from './listRoutes.js'
import cors from 'cors';

// const express=require('express')

dotenv.config()

connectDB()

const app = express()


const PORT = process.env.PORT || 5000

const router = express.Router()
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use('/api/list', listRoutes)

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )