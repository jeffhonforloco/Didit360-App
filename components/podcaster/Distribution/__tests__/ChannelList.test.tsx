import { render, screen, fireEvent } from '@testing-library/react';
import { ChannelList } from '../ChannelList';

const mockChannels = [
  { id: '1', name: 'Test Channel 1', avatar: '/test1.jpg' },
  { id: '2', name: 'Test Channel 2', avatar: '/test2.jpg' },
];

describe('ChannelList', () => {
  it('renders channels correctly', () => {
    render(<ChannelList channels={mockChannels} onJoinChannel={() => {}} />);
    
    expect(screen.getByText('Test Channel 1')).toBeInTheDocument();
    expect(screen.getByText('Test Channel 2')).toBeInTheDocument();
  });

  it('calls onJoinChannel with correct channel id', () => {
    const mockOnJoin = vi.fn();
    render(<ChannelList channels={mockChannels} onJoinChannel={mockOnJoin} />);
    
    const joinButtons = screen.getAllByRole('button');
    fireEvent.click(joinButtons[0]);
    
    expect(mockOnJoin).toHaveBeenCalledWith('1');
  });

  it('filters channels based on search input', () => {
    render(<ChannelList channels={mockChannels} onJoinChannel={() => {}} />);
    
    const searchInput = screen.getByPlaceholderText('Search Channel');
    fireEvent.change(searchInput, { target: { value: 'Channel 1' } });
    
    expect(screen.getByText('Test Channel 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Channel 2')).not.toBeInTheDocument();
  });
});