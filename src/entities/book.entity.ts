import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "Book" })
export class BookEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    title: string

    @Column({ type: "varchar" })
    author: string

    @Column({ type: "int" })
    sellingPrice: number

    @Column({ type: "int" })
    purchasePrice: number
}



// DATABASE TABLE
// export interface BookEntity {
//     id: number;
//     title: string;
//     author: string;
//     sellingPrice: number;
//     purchasePrice: number;
// }
