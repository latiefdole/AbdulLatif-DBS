const AddCommentUseCase = require('../../../../Applications/use_case/AddCommentUseCase');
const DeleteCommentUseCase = require('../../../../Applications/use_case/DeleteCommentUseCase');

class CommentsHandler {
  constructor(container) {
    this._container = container;
  }

  async postCommentHandler(request, h) {
    const { id: owner } = request.auth.credentials;
    const { content } = request.payload;
    const { id: threadId } = request.params;

    const useCase = this._container.getInstance(AddCommentUseCase.name);

    const addedComment = await useCase.execute({
      threadId,
      content,
      owner,
    });

    const response = h.response({
      status: 'success',
      message: 'Komentar berhasil ditambahkan',
      data: {
        addedComment,
      },
    });

    response.code(201);
    return response;
  }

  async deleteCommentHandler(request, h) {
    const { id: owner } = request.auth.credentials;
    const { threadId, commentId: id } = request.params;

    /**
     * @TODO 9
     * Eksekusi useCase DeleteCommentUseCase untuk menjalankan aksi **menghapus komentar**
     *
     * Untuk mendapatkan useCase, pastikan Anda memanfaatkan method `this._container.getInstance`
     */

      // Menginisialisasi instance dari DeleteCommentUseCase
      const deleteUseCase = this._container.getInstance(DeleteCommentUseCase.name);
  
      try {
        // Eksekusi DeleteCommentUseCase untuk menghapus komentar
        await deleteUseCase.execute({ threadId, id, owner });
  
        return {
          status: 'success',
          message: 'Komentar berhasil dihapus',
        };
      } catch (error) {
        // Tangani error yang mungkin terjadi dari penghapusan komentar
        // Misalnya, tangkap error dan kembalikan response error jika terjadi kesalahan
        
        if (error.message == "DELETE_COMMENT_USE_CASE.COMMENT_NOT_OWNED"){
          const response = h.response({
            status: 'fail',
            message: "Missing Authentication",  
          });
          response.code(403);
          return response;
        }else if (error.message == "DELETE_COMMENT_USE_CASE.COMMENT_NOT_FOUND"){
          const response = h.response({
            status: 'fail',
            message: "Comment Not Found",  
          });
          response.code(404);
          return response;
        }
        // return {
        //   status: 'error',
        //   message: error.message,
        // };
      }
    // return {
    //   status: 'success',
    //   message: 'Komentar berhasil dihapus',
    //};
  }
}

module.exports = CommentsHandler;
