import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    patronimyc: {
      type: String,
      required: true,
    },
    seniority: {
      type: String,
      required: true,
    },
    seriesPasport: {
      type: String,
      required: true,
    },
    numberPasport: {
      type: String,
      required: true,
    },
    dateIssue: {
      type: String,
      required: true,
    },
    unitCode: {
      type: String,
      required: true,
    },
    whoIssued: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    bornDate: {
      type: String,
      required: true,
    },

    bornPlace: {
      type: String,
      required: true,
    },
    registration: {
      type: String,
      required: true,
    },
    actualLiving: {
      type: String,
      required: true,
    },
    SNILS: {
      type: String,
      required: true,
    },
    education: {
      type: Array,
    },
    course: {
      type: Array,
    },
    lesson: {
      type: Array,
    },
    family: {
      type: Array,
    },
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Teacher", TeacherSchema);
