export default function Page({
  params,
}: {
  params: { organizationId: string; reportId: string };
}) {
  return (
    <>
      <h2>This page will show data from report: {params.reportId} which from organization: {params.organizationId}</h2>
    </>
  );
}
