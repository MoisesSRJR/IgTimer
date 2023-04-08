import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Comment } from '../../../src/components/Comment/Index';

describe('Comment', () => {
  const onDeleteComment = jest.fn();

  it('should render a comment', () => {
    const name = 'Moisés Junior';
    const date = new Date('2023-03-27');
    const comentarys = 'This is a comment.';
    const { getByText } = render(
      <Comment name={name} date={date} comentarys={comentarys} onDeleteComment={onDeleteComment} />
    );

    expect(getByText(name)).toBeInTheDocument();
    expect(getByText('cerca de 1hr atrás')).toBeInTheDocument();
    expect(getByText(comentarys)).toBeInTheDocument();
  });

  it('should call the onDeleteComment function when the delete button is clicked', () => {
    const name = 'Moisés Junior';
    const date = new Date('2023-03-27');
    const comentarys = 'This is a comment.';
    const { getByTitle } = render(
      <Comment name={name} date={date} comentarys={comentarys} onDeleteComment={onDeleteComment} />
    );

    fireEvent.click(getByTitle('Deletar comentário'));
    expect(onDeleteComment).toHaveBeenCalledWith(comentarys);
  });

  it('should increment the like count when the like button is clicked', () => {
    const name = 'Moisés Junior';
    const date = new Date('2023-03-27');
    const comentarys = 'This is a comment.';
    const { getByText } = render(
      <Comment name={name} date={date} comentarys={comentarys} onDeleteComment={onDeleteComment} />
    );

    fireEvent.click(getByText('Aplaudir'));
    expect(getByText('1')).toBeInTheDocument();

    fireEvent.click(getByText('Aplaudir'));
    expect(getByText('2')).toBeInTheDocument();
  });
});
