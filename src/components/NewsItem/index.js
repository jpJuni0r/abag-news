// @flow
import React, { Fragment } from 'react';
import {
  View, Text, Image, StyleSheet, Linking,
} from 'react-native';

import twitterLogo from './twitter-logo.png';

const styles = StyleSheet.create({
  container: {
    borderColor: '#d6d7da',
    padding: 20,
  },
  logo: {
    width: 48,
    height: 48,
  },
  title: {
    fontSize: 24,
  },
  handle: {
    color: '#0f8ec7',
    marginBottom: 16,
  },
  ctaTitle: {
    marginTop: 16,
    fontWeight: 'bold',
  },
  ctaLink: {
    color: '#0f8ec7',
  },
});

type NewsItemProps = {
  news: {
    id: number,
    date: String,
    body: String,
    cta?: {
      title: String,
      link: String
    }
  },
}

const NewsItem = (props: NewsItemProps) => {
  const { news } = props;
  return (
    <View style={styles.container}>
      <Image source={twitterLogo} style={styles.logo} />
      <Text style={styles.title}>Advanced Blockchain AG</Text>
      <Text style={styles.handle}>@BlockchainAG</Text>
      <Text>{news.body}</Text>
      {news.cta !== undefined ? (
        <Fragment>
          <Text style={styles.ctaTitle}>{news.cta.title}</Text>
          <View>
            <Text style={styles.ctaLink} onPress={() => Linking.openURL(news.cta.link)}>
              {news.cta.link}
            </Text>
          </View>
        </Fragment>
      ) : null}
    </View>
  );
};

export default NewsItem;
