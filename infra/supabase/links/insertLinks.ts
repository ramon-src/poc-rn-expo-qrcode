import { supabase } from '..';

export const submitQRCodeLink = async (data: { link: string }) => {
  supabase
    .from('qrcodes')
    .insert(data)
    .then((result) => {
      console.log(result);
    });
};
