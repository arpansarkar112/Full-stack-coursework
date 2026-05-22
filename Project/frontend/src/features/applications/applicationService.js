import axios from 'axios';

const API_URL = '/api/applications/';

// Create new application
const createApplication = async (applicationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, applicationData, config);

  return response.data;
};

// Get user applications
const getApplications = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user application
const deleteApplication = async (applicationId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + applicationId, config);

  return response.data;
};

const applicationService = {
  createApplication,
  getApplications,
  deleteApplication,
};

export default applicationService;
