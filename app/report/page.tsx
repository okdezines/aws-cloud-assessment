import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReportHeader from "@/components/report/ReportHeader";
import ReportSidebar from "@/components/report/ReportSidebar";
import ReportSection from "@/components/report/ReportSection";
import CommandBlock from "@/components/report/CommandBlock";
import EvidenceCard from "@/components/report/EvidenceCard";
import LearningCard from "@/components/report/LearningCard";

export default function ReportPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            <Navbar />

            <ReportHeader />

            <div className="mx-auto grid max-w-7xl lg:grid-cols-[260px_1fr]">

                <ReportSidebar />

                <article className="min-w-0 px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                    <section
                        id="introduction"
                        className="scroll-mt-10"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                            Introduction
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                            About this assessment
                        </h2>

                        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
                            This report documents the practical implementation of cloud
                            infrastructure solutions using Amazon Web Services. It focuses
                            on the technical process, supporting evidence, results and the
                            knowledge gained throughout each assessment task.
                        </p>
                    </section>

                    <section
                        id="multipart-upload"
                        className="scroll-mt-10 border-t border-slate-200 pt-16"
                    >
                        {/* Task heading */}
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                            Task 01 / Amazon S3
                        </p>

                        <div className="mt-5 flex items-start gap-6">
                            <span className="text-5xl font-bold tracking-tight text-blue-100">
                                01
                            </span>

                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                                    Multipart Upload
                                </h2>

                                <p className="mt-3 text-sm text-slate-500">
                                    Uploading large objects to Amazon S3 efficiently and reliably.
                                </p>
                            </div>
                        </div>

                        {/* Report content */}
                        <div className="mt-12">

                            <ReportSection label="Purpose">
                                <p>
                                    The purpose of multipart upload is to improve the reliability and
                                    efficiency of transferring large files to Amazon S3. Instead of
                                    uploading a large object as one continuous transfer, the file is
                                    divided into smaller parts that can be uploaded independently.
                                </p>

                                <p className="mt-4">
                                    This approach is particularly useful in hybrid cloud environments
                                    where data is transferred from local infrastructure to cloud storage,
                                    because an individual failed part can be uploaded again without
                                    restarting the entire transfer.
                                </p>
                            </ReportSection>

                            <ReportSection label="Action">
                                <p>
                                    I initiated a multipart upload for the large file using the AWS CLI.
                                    Amazon S3 returned an Upload ID, which uniquely identified the
                                    multipart upload session and was required when uploading the
                                    individual parts.
                                </p>
                            </ReportSection>

                            <ReportSection label="Commands Used">
                                <CommandBlock
                                    command={`UPLOAD_ID=$(aws s3api create-multipart-upload \\
  --bucket alpha-large-file-250mb-2026 \\
  --key gunterfile.log \\
  --profile alpha-user \\
  --query UploadId \\
  --output text)

echo "$UPLOAD_ID"`}
                                    explanation="This command initiates the multipart upload and stores the returned Upload ID in the Bash variable UPLOAD_ID. The echo command then verifies that the Upload ID was captured successfully for use in subsequent multipart upload commands."
                                />
                            </ReportSection>

                            <ReportSection label="Evidence">

                                <EvidenceCard
                                    src="/evidence/task-1/multipart-upload-id.png"
                                    alt="Terminal showing AWS S3 multipart upload initiation and the captured Upload ID"
                                    figure="Figure 1"
                                    caption="AWS CLI evidence showing the multipart upload being initiated for gunterfile.log and the returned Upload ID being stored in the UPLOAD_ID Bash variable and verified with the echo command."
                                />

                            </ReportSection>

                            <ReportSection label="Result">
                                <p>
                                    Amazon S3 successfully created the multipart upload session and
                                    returned an Upload ID. This confirmed that the bucket was accessible
                                    and that the upload process was ready for the individual file parts.
                                </p>
                            </ReportSection>

                            <ReportSection label="Interpretation">
                                <LearningCard>
                                    The Upload ID acts as the identifier that connects all uploaded parts
                                    to the same multipart upload operation. This demonstrated that
                                    multipart upload is not simply a large file copy; it is a managed
                                    process where Amazon S3 tracks multiple independently transferred
                                    parts before assembling them into the final object.
                                </LearningCard>
                            </ReportSection>

                        </div>
                    </section>

                </article>
            </div>

            <Footer />
        </main>
    );
}