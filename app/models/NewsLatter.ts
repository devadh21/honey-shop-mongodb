import mongoose, { Document, Model } from "mongoose";

interface INewsLatter extends Document {
  email: string;
  created_at?: Date;
  updated_at?: Date;
}

const NewsLatterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const NewsLatter: Model<INewsLatter> =
  mongoose.models.NewsLatter || mongoose.model<INewsLatter>("NewsLatter", NewsLatterSchema);

export default NewsLatter;