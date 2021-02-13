import passport from "passport";
import "./model/User";

passport.use(User.createStrategy());

passport.serialization(User.serializeUser());
passport.deserialization(User.deserializeUser());
