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
                                    priority
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
                    <section
                        id="upload-parts"
                        className="mt-16 scroll-mt-10 border-t border-slate-200 pt-16"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                            Task 01 / Amazon S3
                        </p>

                        <div className="mt-5 flex items-start gap-6">
                            <span className="text-5xl font-bold tracking-tight text-blue-100">
                                02
                            </span>

                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                                    Uploading Individual Parts
                                </h2>

                                <p className="mt-3 text-sm text-slate-500">
                                    Transferring the 250 MiB object to Amazon S3 as five independently
                                    uploaded 50 MiB parts.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12">
                            <ReportSection label="Purpose">
                                <p>
                                    The large file was divided into smaller parts so that each part could
                                    be transferred independently as part of the existing multipart upload
                                    session. This improves the reliability of large data transfers because
                                    an individual failed part can be uploaded again without restarting the
                                    entire file transfer.
                                </p>
                            </ReportSection>

                            <ReportSection label="Action">
                                <p>
                                    I uploaded each 50 MiB file part using the AWS CLI
                                    <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">
                                        upload-part
                                    </code>
                                    operation. Each upload referenced the same bucket, object key and
                                    stored Upload ID, while a unique part number identified the position
                                    of each part.
                                </p>

                                <p className="mt-4">
                                    I also extracted the ETag returned by Amazon S3 for each successful
                                    upload and stored it in a Bash variable for later use when completing
                                    the multipart upload.
                                </p>
                            </ReportSection>

                            <ReportSection label="Commands Used">
                                <CommandBlock
                                    title="Upload Part 1 and Capture ETag"
                                    command={`ETAG_1=$(aws s3api upload-part \\
  --bucket alpha-large-file-250mb-2026 \\
  --key gunterfile.log \\
  --part-number 1 \\
  --body multi_part_aa \\
  --profile alpha-user \\
  --upload-id "$UPLOAD_ID" \\
  --query ETag \\
  --output text)

echo "$ETAG_1"`}
                                    explanation="The command uploads the first 50 MiB part and extracts the ETag returned by Amazon S3. Bash command substitution stores the ETag in ETAG_1 so it can be reused later."
                                />
                            </ReportSection>

                            <ReportSection label="Verification">
                                <CommandBlock
                                    title="Verify Uploaded Parts"
                                    command={`aws s3api list-parts \\
  --bucket alpha-large-file-250mb-2026 \\
  --key gunterfile.log \\
  --upload-id "$UPLOAD_ID" \\
  --profile alpha-user`}
                                    explanation="The list-parts operation verifies which parts Amazon S3 has received for the active multipart upload, including each part number, ETag and size."
                                />
                            </ReportSection>

                            <ReportSection label="Evidence">
                                <EvidenceCard
                                    src="/evidence/task-1/upload-parts.png"
                                    alt="AWS CLI showing multipart upload parts and ETags"
                                    figure="Figure 2"
                                    caption="AWS CLI evidence showing the multipart upload process. Each file part was assigned a part number and its returned ETag was captured for later use."
                                />

                                <div className="mt-6">
                                    <EvidenceCard
                                        src="/evidence/task-1/list-parts.png"
                                        alt="AWS CLI list-parts output showing five uploaded parts"
                                        figure="Figure 3"
                                        caption="The list-parts output verifies that Amazon S3 received all five parts. Each part is recorded with its part number, ETag and 52,428,800-byte size."
                                    />
                                </div>
                            </ReportSection>

                            <ReportSection label="Result">
                                <p>
                                    Amazon S3 successfully registered all five uploaded parts. The
                                    list-parts output confirmed Part Numbers 1 through 5, with each part
                                    having a size of 52,428,800 bytes (50 MiB), accounting for the full
                                    250 MiB source object.
                                </p>
                            </ReportSection>

                            <ReportSection label="Interpretation">
                                <LearningCard>
                                    This step demonstrated how multipart upload separates a large object
                                    transfer into independently managed operations. The Upload ID links
                                    every part to the same multipart session, the part numbers define
                                    their sequence, and the returned ETags provide identifiers that can
                                    be referenced when Amazon S3 is instructed to assemble the completed
                                    object.
                                </LearningCard>
                            </ReportSection>
                        </div>
                    </section>
                    <section
                        id="etags"
                        className="mt-16 scroll-mt-10 border-t border-slate-200 pt-16"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                            Task 01 / Amazon S3
                        </p>

                        <div className="mt-5 flex items-start gap-6">
                            <span className="text-5xl font-bold tracking-tight text-blue-100">
                                03
                            </span>

                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                                    ETags & Multipart Manifest
                                </h2>

                                <p className="mt-3 text-sm text-slate-500">
                                    Building the JSON manifest required to complete the multipart upload.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12">

                            <ReportSection label="Purpose">
                                <p>
                                    Before completing the multipart upload, Amazon S3 needs an ordered
                                    list identifying the parts that should be assembled into the final
                                    object. Each uploaded part is represented by its PartNumber and ETag.
                                </p>

                                <p className="mt-4">
                                    I therefore created a JSON multipart manifest containing the five
                                    uploaded parts and their corresponding ETags.
                                </p>
                            </ReportSection>

                            <ReportSection label="Action">
                                <p>
                                    I used the AWS CLI list-parts operation to retrieve the parts
                                    associated with the active multipart upload. Rather than storing the
                                    entire response, I used the AWS CLI query option to select only the
                                    ETag and PartNumber values required for the completion manifest.
                                </p>

                                <p className="mt-4">
                                    The filtered result was formatted as JSON and redirected into a file
                                    named <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">
                                        parts.json
                                    </code>. I then displayed the file in the terminal to verify its
                                    contents.
                                </p>
                            </ReportSection>

                            <ReportSection label="Commands Used">
                                <CommandBlock
                                    title="Generate Multipart Manifest"
                                    command={`aws s3api list-parts \\
  --bucket alpha-large-file-250mb-2026 \\
  --key gunterfile.log \\
  --upload-id "$UPLOAD_ID" \\
  --profile alpha-user \\
  --query '{Parts: Parts[].{ETag: ETag, PartNumber: PartNumber}}' \\
  --output json > parts.json

cat parts.json`}
                                    explanation="The list-parts command retrieves the uploaded parts. The query filters the response to the ETag and PartNumber values required for multipart completion, while > parts.json redirects the JSON output into a local manifest file."
                                />
                            </ReportSection>

                            <ReportSection label="Evidence">
                                <EvidenceCard
                                    src="/evidence/task-1/parts-json.png"
                                    alt="Terminal showing creation and verification of the multipart parts.json manifest"
                                    figure="Figure 4"
                                    caption="AWS CLI evidence showing list-parts being filtered to PartNumber and ETag values and written to parts.json. The cat command verifies that the manifest contains all five uploaded parts."
                                />
                            </ReportSection>

                            <ReportSection label="Result">
                                <p>
                                    The parts.json manifest was successfully created and contained five
                                    ordered entries, representing Part Numbers 1 through 5. Each entry
                                    included the ETag associated with the corresponding uploaded part.
                                    This provided the information required for the multipart completion
                                    request.
                                </p>
                            </ReportSection>

                            <ReportSection label="Interpretation">
                                <LearningCard>
                                    This step helped me understand that uploading all of the individual
                                    parts does not automatically create the final S3 object. Amazon S3
                                    keeps the parts associated with the multipart upload until a
                                    completion request is made. The manifest tells S3 which uploaded
                                    parts, identified by their PartNumber and ETag, should be assembled
                                    and in what order.
                                </LearningCard>
                            </ReportSection>

                        </div>
                    </section>
                    <section
                        id="complete-upload"
                        className="mt-16 scroll-mt-10 border-t border-slate-200 pt-16"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                            Task 01 / Amazon S3
                        </p>

                        <div className="mt-5 flex items-start gap-6">
                            <span className="text-5xl font-bold tracking-tight text-blue-100">
                                04
                            </span>

                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                                    Complete Multipart Upload
                                </h2>

                                <p className="mt-3 text-sm text-slate-500">
                                    Assembling the five uploaded parts into the final 250 MiB Amazon S3
                                    object.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12">

                            <ReportSection label="Purpose">
                                <p>
                                    After all five parts had been successfully uploaded and the multipart
                                    manifest had been created, the final stage was to complete the
                                    multipart upload. This instructs Amazon S3 to assemble the uploaded
                                    parts in their specified order and create the final object.
                                </p>
                            </ReportSection>

                            <ReportSection label="Action">
                                <p>
                                    I used the AWS CLI complete-multipart-upload operation and supplied
                                    the stored Upload ID together with the previously generated
                                    <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">
                                        parts.json
                                    </code>
                                    manifest.
                                </p>

                                <p className="mt-4">
                                    After Amazon S3 completed the operation, I verified the resulting
                                    object using both the head-object operation and an S3 listing.
                                </p>
                            </ReportSection>

                            <ReportSection label="Commands Used">
                                <div className="space-y-6">

                                    <CommandBlock
                                        title="Complete Multipart Upload"
                                        command={`aws s3api complete-multipart-upload \\
  --bucket alpha-large-file-250mb-2026 \\
  --key gunterfile.log \\
  --upload-id "$UPLOAD_ID" \\
  --multipart-upload file://parts.json \\
  --profile alpha-user`}
                                        explanation="This command submits the multipart manifest and Upload ID to Amazon S3. S3 uses the ordered PartNumber and ETag entries in parts.json to assemble the final object."
                                    />

                                    <CommandBlock
                                        title="Verify Object Metadata"
                                        command={`aws s3api head-object \\
  --bucket alpha-large-file-250mb-2026 \\
  --key gunterfile.log \\
  --profile alpha-user \\
  --query '{Size:ContentLength, ETag:ETag, Encryption:ServerSideEncryption}'`}
                                        explanation="The head-object request retrieves metadata for the completed object without downloading the object itself. ContentLength verifies the final object's size."
                                    />

                                    <CommandBlock
                                        title="Verify Final Object"
                                        command={`aws s3 ls \\
  s3://alpha-large-file-250mb-2026/gunterfile.log \\
  --human-readable \\
  --profile alpha-user`}
                                        explanation="The final listing provides a human-readable verification that gunterfile.log exists in the S3 bucket with a size of 250.0 MiB."
                                    />

                                </div>
                            </ReportSection>

                            <ReportSection label="Evidence">
                                <EvidenceCard
                                    src="/evidence/task-1/complete-multipart-upload.png"
                                    alt="AWS CLI showing multipart upload completion and verification of the final S3 object"
                                    figure="Figure 5"
                                    caption="AWS CLI evidence showing successful completion of the multipart upload, metadata verification using head-object, and final confirmation that gunterfile.log exists in Amazon S3 with a size of 250.0 MiB."
                                />
                            </ReportSection>

                            <ReportSection label="Result">
                                <p>
                                    Amazon S3 successfully completed the multipart upload and created the
                                    final object
                                    <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">
                                        gunterfile.log
                                    </code>.
                                    The head-object response reported a ContentLength of 262,144,000
                                    bytes, while the human-readable S3 listing reported the object as
                                    250.0 MiB.
                                </p>

                                <p className="mt-4">
                                    These verification results confirmed that the five uploaded 50 MiB
                                    parts had been assembled into the expected 250 MiB object.
                                </p>
                            </ReportSection>

                            <ReportSection label="Interpretation">
                                <LearningCard>
                                    This step demonstrated that multipart upload has a distinct completion
                                    phase. Successfully uploading the individual parts does not by itself
                                    create the final object. The completion request uses the Upload ID and
                                    multipart manifest to tell Amazon S3 which parts should be assembled.
                                    Verifying the final object`&apos`s metadata and size provided evidence that
                                    the multipart workflow completed successfully.
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