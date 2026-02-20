import dotenv from 'dotenv';
import { resolve } from 'path';
import mongoose from 'mongoose';
import { Patient } from '../lib/models/Patient';
import { Practitioner } from '../lib/models/Practitioner';
import { Booking } from '../lib/models/Booking';

// Load environment variables
dotenv.config({ path: resolve(process.cwd(), '.env.local') });

// Debug: Print all environment variables related to MongoDB
console.log('=== Environment Variables Debug ===');
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('All env vars with MONGO:', Object.keys(process.env).filter(key => key.includes('MONGO')));
console.log('===================================\n');

async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI;
  
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined. Please check your .env.local file.');
  }

  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  return await mongoose.connect(MONGODB_URI);
}

async function seedDatabase() {
  try {
    console.log('Connecting to database...');
    await connectDB();
    
    // Clear existing data
    console.log('Clearing existing data...');
    await Patient.deleteMany({});
    await Practitioner.deleteMany({});
    await Booking.deleteMany({});
    
    // Create Patients
    console.log('Creating patients...');
    const patients = await Patient.insertMany([
      {
        name: 'Sarah Johnson',
        email: 'sarah.johnson@example.com'
      },
      {
        name: 'Michael Chen',
        email: 'michael.chen@example.com'
      },
      {
        name: 'Emily Rodriguez',
        email: 'emily.rodriguez@example.com'
      },
      {
        name: 'David Kim',
        email: 'david.kim@example.com'
      },
      {
        name: 'Jessica Martinez',
        email: 'jessica.martinez@example.com'
      }
    ]);
    console.log(`Created ${patients.length} patients`);
    
    // Create Practitioners
    console.log('Creating practitioners...');
    const practitioners = await Practitioner.insertMany([
      {
        name: 'Dr. Priya Sharma',
        email: 'priya.sharma@yogastudio.com'
      },
      {
        name: 'James Wilson',
        email: 'james.wilson@yogastudio.com'
      },
      {
        name: 'Maria Garcia',
        email: 'maria.garcia@yogastudio.com'
      },
      {
        name: 'Robert Taylor',
        email: 'robert.taylor@yogastudio.com'
      }
    ]);
    console.log(`Created ${practitioners.length} practitioners`);
    
    // Create Bookings
    console.log('Creating bookings...');
    const today = new Date();
    
    const createDate = (daysFromNow: number, hour: number) => {
      const date = new Date(today);
      date.setDate(date.getDate() + daysFromNow);
      date.setHours(hour, 0, 0, 0);
      return date;
    };
    
    const bookingData = [
      {
        patientId: patients[0]._id,
        practitionerId: practitioners[0]._id,
        startTime: createDate(0, 9),
        endTime: createDate(0, 10),
        status: 'confirmed'
      },
      {
        patientId: patients[1]._id,
        practitionerId: practitioners[1]._id,
        startTime: createDate(0, 10),
        endTime: createDate(0, 11),
        status: 'confirmed'
      },
      {
        patientId: patients[2]._id,
        practitionerId: practitioners[0]._id,
        startTime: createDate(0, 14),
        endTime: createDate(0, 15),
        status: 'confirmed'
      },
      {
        patientId: patients[3]._id,
        practitionerId: practitioners[2]._id,
        startTime: createDate(1, 9),
        endTime: createDate(1, 10),
        status: 'confirmed'
      },
      {
        patientId: patients[0]._id,
        practitionerId: practitioners[1]._id,
        startTime: createDate(1, 11),
        endTime: createDate(1, 12),
        status: 'confirmed'
      },
      {
        patientId: patients[4]._id,
        practitionerId: practitioners[3]._id,
        startTime: createDate(1, 15),
        endTime: createDate(1, 16),
        status: 'confirmed'
      },
      {
        patientId: patients[2]._id,
        practitionerId: practitioners[0]._id,
        startTime: createDate(2, 10),
        endTime: createDate(2, 11),
        status: 'confirmed'
      },
      {
        patientId: patients[1]._id,
        practitionerId: practitioners[2]._id,
        startTime: createDate(2, 13),
        endTime: createDate(2, 14),
        status: 'confirmed'
      },
      {
        patientId: patients[3]._id,
        practitionerId: practitioners[1]._id,
        startTime: createDate(7, 9),
        endTime: createDate(7, 10),
        status: 'confirmed'
      },
      {
        patientId: patients[4]._id,
        practitionerId: practitioners[0]._id,
        startTime: createDate(7, 14),
        endTime: createDate(7, 15),
        status: 'confirmed'
      },
      {
        patientId: patients[0]._id,
        practitionerId: practitioners[1]._id,
        startTime: createDate(3, 14),
        endTime: createDate(3, 15),
        status: 'cancelled'
      }
    ];
    
    const createdBookings = await Booking.insertMany(bookingData);
    console.log(`Created ${createdBookings.length} bookings`);
    
    console.log('\n=== Database Seeded Successfully ===');
    console.log(`Total Patients: ${patients.length}`);
    console.log(`Total Practitioners: ${practitioners.length}`);
    console.log(`Total Bookings: ${createdBookings.length}`);
    console.log('\n=== Sample IDs for Testing ===');
    console.log(`Patient ID (Sarah): ${patients[0]._id}`);
    console.log(`Practitioner ID (Dr. Priya): ${practitioners[0]._id}`);
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\nDatabase connection closed');
  }
}

seedDatabase();
