-- CreateTable
CREATE TABLE "status" (
    "user_id" TEXT NOT NULL,
    "total_students" INTEGER NOT NULL DEFAULT 0,
    "new_students_this_month" INTEGER NOT NULL DEFAULT 0,
    "total_tc_issued" INTEGER NOT NULL DEFAULT 0,
    "total_tc_issued_this_month" INTEGER NOT NULL DEFAULT 0,
    "total_tc_issued_this_year" INTEGER NOT NULL DEFAULT 0,
    "last_login_at" TIMESTAMP(3),
    "total_logins" INTEGER NOT NULL DEFAULT 0,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "status_user_id_key" ON "status"("user_id");

-- AddForeignKey
ALTER TABLE "status" ADD CONSTRAINT "status_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
