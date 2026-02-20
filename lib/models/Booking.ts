import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBooking extends Document {
  _id: mongoose.Types.ObjectId;
  patientId: mongoose.Types.ObjectId;
  practitionerId: mongoose.Types.ObjectId;
  startTime: Date;
  endTime: Date;
  status: 'confirmed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

// Define static methods interface
interface IBookingModel extends Model<IBooking> {
  checkConflict(
    practitionerId: mongoose.Types.ObjectId,
    startTime: Date,
    endTime: Date
  ): Promise<boolean>;
}

const bookingSchema = new Schema<IBooking, IBookingModel>(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: 'Patient',
      required: true
    },
    practitionerId: {
      type: Schema.Types.ObjectId,
      ref: 'Practitioner',
      required: true
    },
    startTime: {
      type: Date,
      required: true
    },
    endTime: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: ['confirmed', 'cancelled'],
      default: 'confirmed'
    }
  },
  {
    timestamps: true
  }
);

// Essential indexes for performance
bookingSchema.index({ patientId: 1, startTime: -1 });
bookingSchema.index({ practitionerId: 1, startTime: 1, endTime: 1 });
bookingSchema.index({ status: 1, startTime: 1 });

// Check for booking conflicts
bookingSchema.statics.checkConflict = async function(
  practitionerId: mongoose.Types.ObjectId,
  startTime: Date,
  endTime: Date
): Promise<boolean> {
  const conflict = await this.findOne({
    practitionerId,
    status: 'confirmed',
    $or: [
      { startTime: { $lt: endTime }, endTime: { $gt: startTime } }
    ]
  });
  
  return !!conflict;
};

export const Booking = (mongoose.models.Booking as IBookingModel) || 
  mongoose.model<IBooking, IBookingModel>('Booking', bookingSchema);
