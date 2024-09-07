import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const PatientForm = ({ nextStep, prevStep, setFormData, formData }: { nextStep: any; prevStep: any; setFormData: any; formData: any }) => {
  const validationSchema = Yup.object({
    diagnosis: Yup.string().required('Diagnosis is required'),
    symptoms: Yup.string().required('Symptoms are required'),
    treatmentPlan: Yup.string().required('Treatment Plan is required'),
  });

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData({ ...formData, ...values });
        nextStep();
      }}
    >
      {() => (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[50%] md:w-full sm:w-full xs:w-full xxs:w-full space-y-6 p-8 bg-white shadow-lg rounded-lg"
        >
          <Form className="space-y-6">
            <motion.div whileHover={{ scale: 1.02 }} className="w-full flex flex-col justify-start items-start">
              <label className="font-semibold text-gray-700">Diagnosis</label>
              <Field
                name="diagnosis"
                className="w-full px-4 bg-gray-50 text-black border border-gray-300 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="diagnosis" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="w-full flex flex-col justify-start items-start">
              <label className="font-semibold text-gray-700">Symptoms</label>
              <Field
                name="symptoms"
                className="w-full px-4 bg-gray-50 text-black border border-gray-300 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="symptoms" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="w-full flex flex-col justify-start items-start">
              <label className="font-semibold text-gray-700">Treatment Plan</label>
              <Field
                name="treatmentPlan"
                className="w-full px-4 bg-gray-50 text-black border border-gray-300 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="treatmentPlan" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            <div className="flex justify-between mt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-400 text-white py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-transform"
                >
                  Previous
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-transform"
                >
                  Next
                </button>
              </motion.div>
            </div>
          </Form>
        </motion.div>
      )}
    </Formik>
  );
};

export default PatientForm;
