import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPatient extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const patientSchema = new Schema<IPatient>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

patientSchema.index({ email: 1 });

export const Patient: Model<IPatient> = 
  mongoose.models.Patient || mongoose.model<IPatient>('Patient', patientSchema);
