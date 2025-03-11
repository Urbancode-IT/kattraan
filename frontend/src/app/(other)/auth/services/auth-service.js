const API_BASE_URL = "http://localhost:5000"; // ✅ Update this as needed

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("❌ Signup API Error:", error);
    return { success: false, message: "Signup failed" };
  }
};
