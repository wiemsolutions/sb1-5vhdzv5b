import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Get user's subscriptions
router.get('/', async (req, res) => {
  try {
    const subscriptions = await prisma.subscription.findMany({
      where: { userId: req.user!.id }
    });

    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subscriptions' });
  }
});

// Create new subscription
router.post('/', async (req, res) => {
  try {
    const { type, price } = req.body;

    // Calculate end date based on subscription type
    const endDate = new Date();
    switch (type) {
      case 'BASIC':
      case 'FEATURED':
        endDate.setDate(endDate.getDate() + 30); // 30 days
        break;
      case 'PREMIUM':
        endDate.setDate(endDate.getDate() + 90); // 90 days
        break;
    }

    const subscription = await prisma.subscription.create({
      data: {
        userId: req.user!.id,
        type,
        price: parseFloat(price),
        endDate
      }
    });

    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ message: 'Error creating subscription' });
  }
});

// Cancel subscription
router.delete('/:id', async (req, res) => {
  try {
    const subscription = await prisma.subscription.findUnique({
      where: { id: req.params.id }
    });

    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }

    if (subscription.userId !== req.user!.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await prisma.subscription.delete({
      where: { id: req.params.id }
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error canceling subscription' });
  }
});

export default router;