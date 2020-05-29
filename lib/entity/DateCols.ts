import {CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";

export abstract class DateCols {
  @CreateDateColumn({name: 'created_at'})
  createdAt!: Date

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt!: Date

  @DeleteDateColumn({name: 'deleted_at'})
  deletedAt!: Date
}
