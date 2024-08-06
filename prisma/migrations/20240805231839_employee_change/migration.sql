-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "isadmin" BOOLEAN NOT NULL DEFAULT false,
    "createdat" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "roles" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "employee_pk" PRIMARY KEY ("id")
);
