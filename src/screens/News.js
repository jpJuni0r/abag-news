// @flow
import React, { Component } from 'react';
import { FlatList } from 'react-native';

import newsData from './news-data';
import NewsItem from '../components/NewsItem';


class News extends Component<{}> {
  static navigationOptions = {
    title: 'News',
  }

  render() {
    return (
      <FlatList
        data={newsData}
        renderItem={({ item }) => <NewsItem news={item} />}
      />
    );
  }
}

export default News;
