import { Link, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { getLinks } from '~/infra/supabase/links/getLinks';

const mockList = [{ id: 1, link: 'https://something.qrcode' }];

type QRCodeLinks = {
  id: number;
  link: string;
};
const Page = () => {
  const [list, setList] = useState([] as QRCodeLinks[]);

  useEffect(() => {
    QRCodeLinks();
  });

  async function QRCodeLinks() {
    const { data } = await getLinks();
    setList(data as QRCodeLinks[]);
  }

  const navigation = useNavigation();
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Link href="/">tiasdsda</Link>
      <FlatList data={list} renderItem={({ item }) => <Text>{item.link}</Text>} />
    </View>
  );
};

export default Page;
