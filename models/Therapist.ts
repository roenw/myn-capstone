import mongoose, { Schema, model, models } from 'mongoose';

export interface ITherapist {
  auth0Id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  location?: string;
  
  // Account status
  status: 'pending' | 'approved' | 'rejected';
  
  // Professional info
  credentials?: string;
  bio?: string;
  specialties?: string[];
  yearsOfExperience?: number;
  
  // Availability
  availableHours?: {
    day: string;
    startTime: string;
    endTime: string;
  }[];
  
  // Profile
  profileImageURL?: string;
  
  createdAt: Date;
  updatedAt: Date;
}

const TherapistSchema = new Schema<ITherapist>(
  {
    auth0Id: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: String,
    location: String,
    
    // Account status
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    
    // Professional details
    credentials: String,
    bio: String,
    specialties: [String],
    yearsOfExperience: Number,
    
    // Schedule
    availableHours: [
      {
        day: String,
        startTime: String,
        endTime: String,
      },
    ],
    
    profileImageURL: String,
  },
  {
    timestamps: true,
  }
);

export default models.Therapist || model<ITherapist>('Therapist', TherapistSchema);
