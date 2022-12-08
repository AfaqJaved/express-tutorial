import AppDataSource from "../database/db.config";
import { BookEntity } from "../entities/book.entity";


export default class BookRepo {

    public static findAllBooks() {
        return AppDataSource.getRepository(BookEntity).find();
    }

    public static findBookById(id: number) {
        return AppDataSource.getRepository(BookEntity).findOne({ where: { id: id } });
    }

    public static deleteBook(id: number) {
        return AppDataSource.getRepository(BookEntity).delete(id);
    }

    public static addBook(book: BookEntity) {
        return AppDataSource.getRepository(BookEntity).save(book);
    }

    // update Assingment paractice



}