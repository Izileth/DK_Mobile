import React, { useEffect } from 'react';
import { useAuth } from '../../../context/authContext';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'expo-router';

export default function AuthHandler() {
  const { setAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Inscreve-se no evento de mudança de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('session user:', session?.user);

      if (session) {
        setAuth(session.user); // Atualiza o contexto
        router.replace('/(tabs)/index');
      } else {
        setAuth(null); // Limpa o contexto
        router.replace('/(auth)/(loguin)/index');
      }
    });

    // Cleanup: Cancela a inscrição ao desmontar o componente
    return () => subscription.unsubscribe();
  }, [setAuth, router]);

  return null;
}
