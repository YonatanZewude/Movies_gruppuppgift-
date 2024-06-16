import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import supabase from "./supabase";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const googleId = profile.id;
        const username = profile.displayName;
        const email = profile.emails?.[0].value;

        if (!email) {
          return done(new Error("No email found in Google profile"), false);
        }

        let { data: users, error } = await supabase
          .from("users")
          .select("*")
          .eq("googleId", googleId);

        if (error) {
          return done(error, false);
        }

        let user = users ? users[0] : null;

        if (!user) {
          const { data, error } = await supabase
            .from("users")
            .insert([
              {
                googleId,
                username,
                email,
              },
            ])
            .single();

          if (error) {
            return done(error, false);
          }

          user = data;
        }

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id);

    if (error) {
      return done(error, false);
    }

    const user = users ? users[0] : null;
    done(null, user || false);
  } catch (error) {
    done(error);
  }
});

export default passport;
