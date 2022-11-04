import { BookEntity } from "../entities/book.entity";
import BookMapper from "../mappers/book.mapper";
import BookRepo from "../repositories/book.repo";
import { BookRequestPayload } from "../request/book.request";
import { BookResponse } from "../response/book.response";


export default class BookService {
    // add book
    // Client side parameters request payload
    public static addBook(requestPayload: BookRequestPayload) {
        BookRepo.addBook(BookMapper.requestToEntityMapper(requestPayload));
        return "sucess";
    }
    // delete book
    public static deleteBook(id: number) {
        BookRepo.deleteBook(id);
        return "sucess";
    }

    // find all book
    public static findAllBooks() {
        let data: BookResponse[] = BookRepo.findAllBooks().map((book) => {
            return BookMapper.entityToResponseMapper(book);
        })
        return data;
    }
    // find by id
    public static findBookById(id: number) {
        let bookResponse = BookMapper.entityToResponseMapper(BookRepo.findBookById(id));
        return bookResponse;
    }
}