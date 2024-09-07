import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const UserTypeForm = ({
  nextStep,
  setFormData,
  formData,
}: {
  nextStep: any;
  setFormData: any;
  formData: any;
}) => {
  const validationSchema = Yup.object({
    role: Yup.string().required('Please select a user type'),
  });

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('values', values);
        setFormData({ ...formData, ...values }); // Save role in formData
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
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full flex flex-col justify-start items-start"
            >
              <label className="font-semibold text-black">User Type</label>
              <Field
                as="select"
                name="role"
                className="w-full px-4 bg-black text-white border border-gray-300 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <option value="" label="Select user type" />
                <option value="doctor" label="Doctor" />
                <option value="patient" label="Patient" />
              </Field>
              <ErrorMessage name="role" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            <motion.div className="flex justify-end mt-4" whileHover={{ scale: 1.05 }}>
              <button
                type="submit"
                className="bg-gradient-to-r from-black to-gray-700 text-white py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-transform"
              >
                Next
              </button>
            </motion.div>
          </Form>
        </motion.div>
      )}
    </Formik>
  );
};

export default UserTypeForm;
