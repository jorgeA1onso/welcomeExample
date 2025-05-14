-- CreateTable
CREATE TABLE "user_s" (
    "id_user" INTEGER NOT NULL,
    "name_user" VARCHAR,
    "last_name" VARCHAR,
    "age" INTEGER,

    CONSTRAINT "user_s_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "profession_s" (
    "id_profesion" INTEGER NOT NULL,
    "name_profesion" VARCHAR,
    "id_user_profession" INTEGER,

    CONSTRAINT "profession_s_pkey" PRIMARY KEY ("id_profesion")
);

-- AddForeignKey
ALTER TABLE "profession_s" ADD CONSTRAINT "profession_s_id_user_profession_fkey" FOREIGN KEY ("id_user_profession") REFERENCES "user_s"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;
