import { Container, Text, Title } from '@mantine/core';
import dayjs from 'dayjs';
import Head from 'next/head';
import birthdays from '../birthdays.json';

export default function Home() {
  const now = dayjs();
  const birthdaysToday = birthdays.filter(v => now.format('D') == v.day && now.format('M') == v.month);
  return <Container>
    <Head>
      <title>Birthdays!</title>
    </Head>
    <Title>{now.format('D MMMM YYYY')}</Title>
    {birthdaysToday.map((v, k) => {
      return <Text key={k}>
        {v.name}
        {v.year && <>: {now.get('y') - v.year} ({v.year})</>}
      </Text>
    })}
    <Text></Text>
  </Container>
}
