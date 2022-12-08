import { BookEntity } from "../entities/book.entity";
import BookMapper from "../mappers/book.mapper";
import BookRepo from "../repositories/book.repo";
import { BookRequestPayload } from "../request/book.request";
import { BookResponse } from "../response/book.response";


export default class BookService {
    // add book
    // Client side parameters request payload
    public static async addBook(requestPayload: BookRequestPayload) {
        await BookRepo.addBook(BookMapper.requestToEntityMapper(requestPayload));
        return "sucess";
    }
    // delete book
    public static async deleteBook(id: number) {
        await BookRepo.deleteBook(id);
        return "sucess";
    }

    // find all book
    public static async findAllBooks() {
        let data: BookResponse[] = (await BookRepo.findAllBooks()).map((book) => {
            return BookMapper.entityToResponseMapper(book);
        })
        return data;
    }
    // find by id
    public static async findBookById(id: number) {
        let bookEntity = await BookRepo.findBookById(id);
        if (bookEntity) {
            let bookResponse = BookMapper.entityToResponseMapper(bookEntity);
            return bookResponse;
        }
        else {
            return "Book Does Not Exsist";
        }

    }
}