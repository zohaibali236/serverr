import { MigrationInterface, QueryRunner } from "typeorm";

export class ALTERUSERPOSTADDCOLUSERID1732375549780
  implements MigrationInterface
{
  name = "ALTERUSERPOSTADDCOLUSERID1732375549780";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sport_Eaze"."posts" DROP CONSTRAINT "FK_869a05340ed4bc3b904ed040206"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sport_Eaze"."posts" RENAME COLUMN "userIdId" TO "userId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sport_Eaze"."posts" ALTER COLUMN "userId" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "sport_Eaze"."posts" ADD CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "sport_Eaze"."Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sport_Eaze"."posts" DROP CONSTRAINT "FK_ae05faaa55c866130abef6e1fee"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sport_Eaze"."posts" ALTER COLUMN "userId" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "sport_Eaze"."posts" RENAME COLUMN "userId" TO "userIdId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sport_Eaze"."posts" ADD CONSTRAINT "FK_869a05340ed4bc3b904ed040206" FOREIGN KEY ("userIdId") REFERENCES "sport_Eaze"."Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
