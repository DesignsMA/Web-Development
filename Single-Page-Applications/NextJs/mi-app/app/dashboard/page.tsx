import ClientDashboard from "./ui/ClientDashboard";
import { TABLES } from "@/lib/tables";

export default function Page() {
  return (
    <ClientDashboard
      tables={TABLES}
      initialTable="empleados"
    />
  );
}