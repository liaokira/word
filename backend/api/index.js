import express from 'express';
import authRoutes from './auth.js';
import dataRoutes from './data.js';

const router = express.Router();

// Use authentication routes
router.use('/auth', authRoutes);

// Use data routes
router.use('/data', dataRoutes);

export default router;