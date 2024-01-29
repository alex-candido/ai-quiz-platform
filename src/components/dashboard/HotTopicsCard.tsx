'use client';

import { useEffect } from "react";

import getAllTopicsActionAsync from '@/redux/actions/topics/get-all-topics';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import WordCloud from "@/components/WordCloud";

const HotTopicsCard = () => {
  const dispatch = useAppDispatch();
  const topicsState = useAppSelector(
    (state: RootState) => state.topics,
  );

  const formattedTopics = topicsState.topics.map((topic) => {
    return {
      text: topic.topic,
      value: topic.count,
    };
  });

  useEffect(() => {
    dispatch(getAllTopicsActionAsync());
  }, [dispatch]);

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quiz on it.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <WordCloud formattedTopics={formattedTopics} />
      </CardContent>
    </Card>
  );
}

export default HotTopicsCard
