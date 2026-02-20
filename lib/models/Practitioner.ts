import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPractitioner extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const practitionerSchema = new Schema<IPractitioner>(
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

practitionerSchema.index({ email: 1 });

export const Practitioner: Model<IPractitioner> = 
  mongoose.models.Practitioner || mongoose.model<IPractitioner>('Practitioner', practitionerSchema);
