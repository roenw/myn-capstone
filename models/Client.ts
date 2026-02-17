import mongoose, { Schema, model, models } from 'mongoose';

export interface IClient {
  auth0Id: string;
  email: string;
  firstName: string;
  lastName: string;
  preferredName?: string;
  dob?: Date;
  phone?: string;
  location?: string;
  referral?: string;
  
  // Health & Preferences
  interests?: string[];
  yogaBefore?: string;
  practiceFrequency?: string;
  sessionType?: string;
  
  // Assigned therapist
  therapistId?: mongoose.Types.ObjectId;
  
  // Referring physician
  physicianId?: mongoose.Types.ObjectId;
  
  createdAt: Date;
  updatedAt: Date;
}

const ClientSchema = new Schema<IClient>(
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
    preferredName: String,
    dob: Date,
    phone: String,
    location: String,
    referral: String,
    
    // Health information
    interests: [String],
    yogaBefore: String,
    practiceFrequency: String,
    sessionType: String,
    
    // Relationships
    therapistId: {
      type: Schema.Types.ObjectId,
      ref: 'Therapist',
    },
    physicianId: {
      type: Schema.Types.ObjectId,
      ref: 'Physician',
    },
  },
  {
    timestamps: true,
  }
);

export default models.Client || model<IClient>('Client', ClientSchema);
