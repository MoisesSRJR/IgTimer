import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Post } from '../../../src/components/Post';

describe('Post', () => {
  const mockPost = {
    image: 'https://www.example.com/image.jpg',
    name: 'John Doe',
    role: 'Software Engineer',
    date: new Date(),
    _content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }
    ]
  };

  it('renders post container', () => {
    render(<Post {...mockPost} />);
    const postContainer = screen.getByTestId('post-container');
    expect(postContainer).toBeInTheDocument();
  });

  it('renders comment form', () => {
    render(<Post {...mockPost} />);
    const commentForm = screen.getByRole('form');
    expect(commentForm).toBeInTheDocument();
  });

  it('renders comment list', () => {
    render(<Post {...mockPost} />);
    const commentList = screen.getByRole('list');
    expect(commentList).toBeInTheDocument();
  });

  it('creates new comment', () => {
    render(<Post {...mockPost} />);
    const commentInput = screen.getByPlaceholderText('Deixe um comentario');
    const submitButton = screen.getByRole('button', { name: 'Publicar' });

    fireEvent.change(commentInput, { target: { value: 'Novo comentário' } });
    fireEvent.click(submitButton);

    const commentList = screen.getByRole('list');
    expect(commentList).toHaveTextContent('Novo comentário');
  });

  it('deletes a comment', () => {
    render(<Post {...mockPost} />);
    const commentInput = screen.getByPlaceholderText('Deixe um comentario');
    const submitButton = screen.getByRole('button', { name: 'Publicar' });

    fireEvent.change(commentInput, { target: { value: 'Comentário a ser deletado' } });
    fireEvent.click(submitButton);

    const deleteButton = screen.getByRole('button', { name: 'Excluir comentário' });
    fireEvent.click(deleteButton);

    const commentList = screen.getByRole('list');
    expect(commentList).not.toHaveTextContent('Comentário a ser deletado');
  });
});
