import supabase from "./config/supabase";
import bcrypt from "bcrypt"; // För att hash lösenordet

const users = [
  {
    email: "user1@example.com",
    password: "password123",
    first_name: "John",
    last_name: "Doe",
    created_at: new Date(),
  },
  {
    email: "user2@example.com",
    password: "password456",
    first_name: "Jane",
    last_name: "Doe",
    created_at: new Date(),
  },
  // Lägg till fler användare här
];

const seedUsers = async () => {
  for (const user of users) {
    // Hasha lösenordet
    const hashedPassword = await bcrypt.hash(user.password, 10);

    // Sätt in användaren med det hashade lösenordet
    const { data, error } = await supabase.from("users").insert([
      {
        email: user.email,
        password: hashedPassword,
        first_name: user.first_name,
        last_name: user.last_name,
        created_at: user.created_at,
      },
    ]);

    if (error) {
      console.error("Error inserting user:", error.message);
    } else {
      console.log("Inserted user:", data);
    }
  }
};

seedUsers();
