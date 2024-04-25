import { supabase } from '..';

export const getLinks = async () => {
  return supabase.from('qrcodes').select('*');
};
