import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const region = await prisma.region.create({
    data: {
      name: 'Центр Судака',
      season: {
        create: {
          name: 'Лето',
          startDate: new Date('2025-06-01'),
          endDate: new Date('2025-09-01'),
          multiplier: 1.2
        }
      }
    }
  });

  const host = await prisma.user.create({
    data: {
      email: 'host@sudak.local',
      name: 'Марина',
      role: 'HOST',
      hostProfile: {
        create: {
          verified: true,
          companyName: 'Sudak Rentals'
        }
      }
    }
  });

  const listing = await prisma.listing.create({
    data: {
      hostId: host.hostProfile!.id,
      title: 'Апартаменты у моря',
      description: 'Панорамный вид, дизайнерский интерьер, шаг до пляжа.',
      address: 'ул. Набережная, 12',
      regionId: region.id,
      capacity: 4,
      basePrice: 6500,
      rules: 'Заезд после 14:00, без вечеринок.'
    }
  });

  await prisma.listingPhoto.createMany({
    data: [
      { listingId: listing.id, url: 'https://images.example.com/sudak-1.jpg', sortOrder: 1 },
      { listingId: listing.id, url: 'https://images.example.com/sudak-2.jpg', sortOrder: 2 }
    ]
  });

  const amenities = await prisma.amenity.createMany({
    data: [
      { name: 'Wi-Fi' },
      { name: 'Парковка' },
      { name: 'Вид на море' }
    ]
  });

  const amenityList = await prisma.amenity.findMany();
  await prisma.listingAmenity.createMany({
    data: amenityList.map((amenity) => ({
      listingId: listing.id,
      amenityId: amenity.id
    }))
  });

  await prisma.pricingRule.createMany({
    data: [
      {
        listingId: listing.id,
        date: new Date('2025-06-15'),
        price: 7500,
        minNights: 2,
        stopSell: false
      },
      {
        listingId: listing.id,
        date: new Date('2025-06-16'),
        price: 7200,
        minNights: 2,
        stopSell: false
      }
    ]
  });

  await prisma.leadResult.create({
    data: {
      email: 'guest@example.com',
      result: 'Расслабленный маршрут по Набережной + крепость на закате.'
    }
  });

  await prisma.budgetCalc.create({
    data: {
      checkIn: new Date('2025-07-10'),
      checkOut: new Date('2025-07-14'),
      guests: 2,
      comfort: 'Премиум',
      options: 'вид на море, трансфер',
      estimate: 52000
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
