import { render, screen, fireEvent } from '@testing-library/react';
import { UploadForm } from '../UploadForm';

describe('UploadForm', () => {
  it('renders form elements correctly', () => {
    render(<UploadForm onUpload={() => Promise.resolve()} />);
    
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByText(/drag & drop files/i)).toBeInTheDocument();
  });

  it('handles file upload correctly', async () => {
    const mockOnUpload = vi.fn();
    render(<UploadForm onUpload={mockOnUpload} />);
    
    const file = new File(['test'], 'test.mp3', { type: 'audio/mpeg' });
    const input = screen.getByLabelText(/drag & drop files/i);
    
    Object.defineProperty(input, 'files', {
      value: [file]
    });
    
    fireEvent.change(input);
    
    const submitButton = screen.getByText(/upload/i);
    fireEvent.click(submitButton);
    
    expect(mockOnUpload).toHaveBeenCalled();
  });

  it('validates required fields', () => {
    render(<UploadForm onUpload={() => Promise.resolve()} />);
    
    const submitButton = screen.getByText(/upload/i);
    fireEvent.click(submitButton);
    
    expect(screen.getByText(/title is required/i)).toBeInTheDocument();
    expect(screen.getByText(/description is required/i)).toBeInTheDocument();
  });
});