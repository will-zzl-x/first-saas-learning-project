import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

async function testUpdate() {
  try {
    // Connect to MongoDB
    await connectMongo();
    console.log("MongoDB connected");

    // Replace with a valid user ID
    const userId = "684f558156bf8c719a12753d"; // Replace with a valid user ID

    // Simulate a generated customerId (e.g., from your webhook)
    const customerId = "cus_test_generated123"; // Simulated customerId

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      console.error("User not found");
      return;
    }

    // Update the user's fields
    user.hasAccess = true;
    user.customerId = customerId;

    // Save the updated user
    await user.save();
    console.log("User updated successfully:", user);
  } catch (error) {
    console.error("Error updating user:", error);
  } finally {
    process.exit(); // Exit the script
  }
}

testUpdate();
