class BooksController < ApplicationController
  def index
    @books = Book.all
    render template: "articles/show"
  end
  def update
    @book = Book.find(params[:id])
    if @book.update(book_params)
      redirect_to(@book)
    else
      
    end
  end
  
end
