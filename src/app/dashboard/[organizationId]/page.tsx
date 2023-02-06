export default function Page({
  params,
}: {
  params: { organizationId: string };
}) {
  return (
    <h2>This page will show data from Organization: {params.organizationId}</h2>
  );
}
