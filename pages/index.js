import { Container, Text, Title } from '@mantine/core';
import dayjs from 'dayjs';
import Head from 'next/head';
import Link from 'next/link';
import birthdays from '../birthdays.json';
import GitHubLogo from '../components/GitHubLogo';

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
    <div style={{ position: 'absolute', bottom: 8, right: 8 }}>
      <Link href="https://github.com/jeanvalentin/iknowyourbirthday">
        <GitHubLogo />
      </Link>
    </div>
  </Container>
}
