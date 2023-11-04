-- AlterTable
ALTER TABLE "users" ADD COLUMN     "institution_id" TEXT;

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "admission_no" TEXT,
    "parant_name" TEXT,
    "parant_address" TEXT,
    "phone_no" TEXT,
    "caste" TEXT,
    "religion" TEXT,
    "date_of_birth" TIMESTAMP(3),
    "date_of_admission" TIMESTAMP(3),
    "class" TEXT,
    "previous_instution" TEXT,
    "tc_recieved_date" TIMESTAMP(3),
    "tc_recieved_no" TEXT,
    "date_of_leaving" TIMESTAMP(3),
    "reason_for_leaving" TEXT,
    "otherFields" JSONB,
    "tc_issued_date" TIMESTAMP(3),
    "tc_issued_by" TEXT,
    "tc_issued_no" TEXT,
    "remarks" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,
    "deleted_reason" TEXT,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Student_name_idx" ON "Student"("name");

-- CreateIndex
CREATE INDEX "Student_admission_no_idx" ON "Student"("admission_no");

-- CreateIndex
CREATE INDEX "Student_created_by_idx" ON "Student"("created_by");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
