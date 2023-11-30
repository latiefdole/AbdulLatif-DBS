const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const AddThreadUseCase = require('../AddThreadUseCase');
const AddedThread = require('../../../Domains/threads/entities/AddedThread'); 

describe('AddThreadUseCase', () => {
  it('should orchestrating the add thread action correctly', async () => {
    /**
     * @TODO 3
     * Lengkapi pengujian `AddThreadUseCase` agar dapat memastikan
     * flow/logika yang dituliskan pada `AddThreadUseCase` benar!
     *
     * Tentunya, di sini Anda harus melakukan Test Double
     * untuk memalsukan implmentasi fungsi `threadRepository`.
     */

    //mocking
    const mockThreadRepository = new ThreadRepository();
    const mockReturnAddedThread = new AddedThread({
      id: 'thread-123',
      title: 'Judul Mock',
      owner: 'user-123',
    });
    mockThreadRepository.addThread = jest.fn(() => Promise.resolve(mockReturnAddedThread));

    const useCase = new AddThreadUseCase({
      threadRepository: mockThreadRepository,
    });
    const useCasePayload = {
      title: 'Judul Mock',
      owner: 'user-123',
      body: 'Isi konten',
    };

    const expectedAddedThread = new AddedThread({
      id: 'thread-123',
      title: 'Judul Mock',
      owner: 'user-123',
    });

    // Executing the use case
    const addedThread = await useCase.execute(useCasePayload);

    // Assertions
    expect(addedThread).toEqual(expectedAddedThread);
    expect(mockThreadRepository.addThread).toHaveBeenCalledWith(useCasePayload);
  });
});
