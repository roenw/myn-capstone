import mongoose, { Schema, model, models } from 'mongoose';

export interface IPhysician {
  auth0Id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  
  // Professional info
  credentials?: string;
  medicalLicenseNumber?: string;
  specialty?: string;
  hospitalAffiliation?: string;
  
  createdAt: Date;
  updatedAt: Date;
}

const PhysicianSchema = new Schema<IPhysician>(
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
    
    // Professional details
    credentials: String,
    medicalLicenseNumber: String,
    specialty: String,
    hospitalAffiliation: String,
  },
  {
    timestamps: true,
  }
);

export default models.Physician || model<IPhysician>('Physician', PhysicianSchema);
