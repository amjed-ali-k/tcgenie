-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "all_fees_paid" BOOLEAN,
ADD COLUMN     "applied_date" TIMESTAMP(3),
ADD COLUMN     "attended_days" TEXT,
ADD COLUMN     "has_fee_concession" BOOLEAN,
ADD COLUMN     "is_qualified_for_higher_class" BOOLEAN,
ADD COLUMN     "last_attendance_date" TIMESTAMP(3),
ADD COLUMN     "roll_removed_date" TIMESTAMP(3),
ADD COLUMN     "working_days" TEXT;
