import React, { useContext, useState, useEffect } from "react";
import supabase from '../supabaseClient';

    import { Session, User } from "@supabase/supabase-js";
 
    interface AuthContextProps {
        session: Session | null;
        user: User | null;
        setSession:  React.Dispatch<React.SetStateAction<Session | null>>;
        handleSignUp: any
        setPassword: any
        setEmail: any
        handleLogin: any
        handleLogOut: any
    }
 
    const AuthContext = React.createContext<AuthContextProps>(
        {session: null,
        user: null,
        setSession: () => {},
        setPassword: () => {},
        setEmail: () => {},
        handleSignUp: () => {},
        handleLogin: () => {},
        handleLogOut: () => {}
    });
 
    export function AuthProvider ({children}: any) {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [session, setSession] = useState<Session | null >(null);
        const [user, setUser] = useState<User | null >(null)
 
        useEffect(() => {
            supabase.auth.getSession().then(({data: { session }}) => {
                setSession(session)
                setUser(session?.user ?? null);
            })
 
            const {
                data: { subscription },
            } = supabase.auth.onAuthStateChange((_event, session) => {
                setSession(session)
                setUser(session?.user ?? null);
            })
           
            return () => {
                subscription?.unsubscribe();
              };
 
        }, [])
 
        const handleSignUp = async (event: any) => {
            event.preventDefault()
            try{
         
              const { data, error } = await supabase.auth.signUp(
                {
                  email,
                  password
                }
              );
             
              if(data){
              alert("Check your email for verification link")
            }
         
            } catch(error){
              alert(error)
         
            }
        }
 
        const handleLogin = async (event: any) => {
            event.preventDefault();
            try {
              const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
              });
       
              if (error) throw error;
              console.log(data);
            setSession(data.session)
              alert("Logged in successfully");
         
            } catch (error) {
              alert(error);
            }
        }
 
        const handleLogOut = async () => {
            await supabase.auth.signOut();
            setSession(null);
     
        }
 
        const value = {
            session,
            user,
            setSession,
            handleSignUp,
            handleLogin,
            handleLogOut,
            setPassword,
            setEmail,
         
        }
 
        return (
            <AuthContext.Provider value={value}>
              {children}
            </AuthContext.Provider>
          );
    }
 
    export const useAuth = () => {
        return useContext(AuthContext);
    };
 
 
 
   