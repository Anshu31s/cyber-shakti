export const fetchApi = async (endpoint, options = {}) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

  const headers = {
    "Content-Type": "application/json",
    ...(token && { "x-auth-token": token }),
    ...options.headers,
  };

  const response = await fetch(endpoint, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorMessage = `Server error (${response.status})`;
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorData.msg || errorMessage;
    } catch (e) {
      // Not JSON
    }
    throw new Error(errorMessage);
  }

  return response;
};

export const submitRegistration = async (registrationData) => {
  const response = await fetchApi("/api/register", {
    method: "POST",
    body: JSON.stringify(registrationData),
  });
  return response.json();
};

export const verifyPayment = async (paymentData) => {
  const response = await fetchApi("/api/verify", {
    method: "POST",
    body: JSON.stringify(paymentData),
  });
  return response.json();
};
