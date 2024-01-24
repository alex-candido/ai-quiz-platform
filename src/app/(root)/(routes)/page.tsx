'use client';

import { useEffect } from 'react';

import { createQuestionsAsync } from '@/redux/actions/questions/create-questions';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';

export default function SetupPage() {
  const dispatch = useAppDispatch();
  const question = useAppSelector((state: RootState) => state.questions.question);

  useEffect(() => {
    dispatch(createQuestionsAsync());
  }, [dispatch]);

  return (
    <div className="section">
      <div className="container">
        <div>{question.question}</div>
      </div>
    </div>
  );
}
