import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { authMiddleware } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Get all listings (public)
router.get('/', async (req, res) => {
  try {
    const listings = await prisma.listing.findMany({
      where: {
        status: 'ACTIVE'
      },
      include: {
        images: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            phone: true
          }
        }
      }
    });

    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching listings' });
  }
});

// Get single listing (public)
router.get('/:id', async (req, res) => {
  try {
    const listing = await prisma.listing.findUnique({
      where: { id: req.params.id },
      include: {
        images: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            phone: true
          }
        }
      }
    });

    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching listing' });
  }
});

// Create listing (authenticated)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      category,
      location,
      employees,
      established,
      monthlyRevenue,
      yearlyProfit,
      images
    } = req.body;

    const listing = await prisma.listing.create({
      data: {
        title,
        description,
        price: parseFloat(price),
        category,
        location,
        employees: parseInt(employees),
        established: parseInt(established),
        monthlyRevenue: parseFloat(monthlyRevenue),
        yearlyProfit: parseFloat(yearlyProfit),
        userId: req.user!.id,
        images: {
          create: images.map((url: string) => ({ url }))
        }
      },
      include: {
        images: true
      }
    });

    res.status(201).json(listing);
  } catch (error) {
    res.status(500).json({ message: 'Error creating listing' });
  }
});

// Update listing (authenticated)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const listing = await prisma.listing.findUnique({
      where: { id: req.params.id }
    });

    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    if (listing.userId !== req.user!.id && req.user!.role !== 'ADMIN') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const updatedListing = await prisma.listing.update({
      where: { id: req.params.id },
      data: req.body,
      include: {
        images: true
      }
    });

    res.json(updatedListing);
  } catch (error) {
    res.status(500).json({ message: 'Error updating listing' });
  }
});

// Delete listing (authenticated)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const listing = await prisma.listing.findUnique({
      where: { id: req.params.id }
    });

    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    if (listing.userId !== req.user!.id && req.user!.role !== 'ADMIN') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await prisma.listing.delete({
      where: { id: req.params.id }
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting listing' });
  }
});

export default router;