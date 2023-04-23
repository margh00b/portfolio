-- CreateTable
CREATE TABLE "Connect" (
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Connect_pkey" PRIMARY KEY ("email")
);
